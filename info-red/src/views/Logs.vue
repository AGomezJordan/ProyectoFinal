<template>
    <div class="pa-8">

        <!-- FILTRAR ESCRITORIO -->
        <v-toolbar
                :collapse="!collapseOnScroll"
                color="#023059"
                dark
                absolute
                class="d-none d-sm-none d-md-block"
        >
            <v-icon>mdi-filter</v-icon>
            <!-- FILTROS DISPONIBLES -->
            <v-toolbar-title>
                <v-row class="ml-5 mt-8">

                    <!-- USUARIOS -->
                    <v-col cols="3">
                        <v-select
                                :items="usuarios"
                                label="Usuarios"
                                dark
                                color="success"
                                v-model="usuario"
                                class="ml-5 mr-5"
                        ></v-select>
                    </v-col>


                    <!-- FECHA -->
                    <v-col cols="3">
                        <v-text-field
                                v-model="fecha"
                                label="Fecha"
                                type="date"
                                color="success"
                                dark
                                :max="hoy"
                        ></v-text-field>
                    </v-col>

                    <!-- BOTONES -->
                    <v-col cols="3">
                        <v-btn
                                color="success"
                                small
                                dark
                                @click="filtrar()"
                        >
                            FILTRAR
                        </v-btn>
                        <v-btn
                                color="error"
                                small
                                dark
                                class="ml-5"
                                @click="borrar()"
                        >
                            BORRAR
                        </v-btn>
                    </v-col>
                </v-row>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <!-- FLECHA PARA EXTENDER O ENCOGER -->
            <v-icon
                    @click="collapseOnScroll = !collapseOnScroll"
                    v-if="!collapseOnScroll"
            >mdi-arrow-right-bold</v-icon>
            <v-icon
                    @click="collapseOnScroll = !collapseOnScroll"
                    v-if="collapseOnScroll"
            >mdi-arrow-left-bold</v-icon>
        </v-toolbar>

        <!-- TITULO -->
        <v-row class="text-center mb-8">
            <v-col cols="0" md="4"></v-col>
            <v-col cols="12" md="4" class="pa-5">
                <div class="titular">LOGS</div>
            </v-col>
            <v-col cols="0" md="4"></v-col>
        </v-row>

        <!-- ALERTA -->
        <v-row class="mensaje" v-if="!cargando">
            <v-col cols="0" md="3"></v-col>
            <v-col cols="12" md="6">
                <!-- NO LOGS -->
                <v-alert
                        class="alerta"
                        type="error"
                        v-if="!logs"
                        dismissible
                >
                    NO SE HAN ENCONTRADO LOGS
                </v-alert>
            </v-col>
            <v-col cols="0" md="3"></v-col>
        </v-row>

        <!-- LOGS -->
        <v-row
            class="text-center usuario mb-4"
            v-for="log in logs"
            v-if="!cargando"
        >
            <v-col cols="6" md="4" class="text-left">
                <v-icon color="white">mdi-account</v-icon>
                {{log.nombre}} {{log.ap1}} {{log.ap2}}
            </v-col>
            <v-col cols="6" md="4">
                {{log.usuario}}
            </v-col>
            <v-col cols="12" md="4">
                {{log.fecha}}
            </v-col>
        </v-row>

        <!-- CARGANDO -->
        <div v-if="cargando"></div>
    </div>
</template>

<script>
    import KJUR from 'jsrsasign'
    import decode from 'jwt-decode'
    import axios from 'axios'
    import {mapState} from 'vuex'
    export default {
        name: "logs",
        data(){
          return{
              collapseOnScroll:false,
              logs:null,
              cargando: false,
              mensaje: '',
              usuarios:[],
              usuario: '',
              fecha: '',
              hoy: '',
          }
        },
        computed:{
          ...mapState(['HOST']),
        },
        created(){
            let date = new Date()
            let year = date.getFullYear()
            let mes = date.getMonth()
            let day = date.getDate()
            if(mes<10){
                mes='0'+(mes+1);
            }
            if (day<10){
                day='0'+(day);
            }
            this.hoy = year+'-'+mes+'-'+day
            this.obtenerUsuarios()
            this.obtenerLogs()
        },
        methods:{
            async obtenerLogs(){
                this.cargando = true;
                let jws = KJUR.jws.JWS; //Objeto para tratar JWT
                let secret = "Alvaro1234@asdfgh"; // Clave privada

                //crear JWT
                let header = {alg: "HS256", typ: "JWT"}; //Cabecera de JWT
                let data = {
                    id: localStorage.getItem('usuarioID'),
                    func: 'consultarLogs',
                };

                let jwt = jws.sign("HS256", header, data, {utf8: secret}); //Firma de JWT

                let formd = new FormData();
                formd.append("jwt", jwt)

                let response = await axios.post(this.HOST+'server/api.php', formd)
                let datos = response.data


                if (datos.status) {
                    //verify JWT
                    let token = datos.token;
                    let isValid = jws.verifyJWT(token, {utf8: secret}, {alg: ["HS256"]})

                    if (isValid) { //Valido, decodificamos el jwt
                        let decoded = decode(token)

                        //Comprobar status
                        if (decoded.status) { //Datos como los esperabamos

                            if (decoded.data){ //Si esta creado
                                this.logs = decoded.data
                                this.cargando = false
                            }else{ //Si no esta creado
                                this.cargando = false
                            }

                        } else { //Datos erroneos
                            this.mensaje = 'Upss... prueba otra vez'
                            this.cargando = false
                        }

                    } else { //Si no es valido
                        this.mensaje = 'Upss... prueba otra vez'
                        this.cargando = false
                    }

                }else{
                    if (datos.mensaje !== null){
                        this.mensaje = datos.mensaje;
                    }else{
                        this.mensaje = 'Server KO... intentelo de nuevo'
                    }
                    this.cargando = false
                }
            },
            async obtenerUsuarios(){
                this.cargando = true;
                let jws = KJUR.jws.JWS; //Objeto para tratar JWT
                let secret = "Alvaro1234@asdfgh"; // Clave privada

                //crear JWT
                let header = {alg: "HS256", typ: "JWT"}; //Cabecera de JWT
                let data = {
                    id: localStorage.getItem('usuarioID'),
                    func: 'consultarUsuarios',
                };

                let jwt = jws.sign("HS256", header, data, {utf8: secret}); //Firma de JWT

                let formd = new FormData();
                formd.append("jwt", jwt)

                let response = await axios.post(this.HOST+'server/api.php', formd)
                let datos = response.data


                if (datos.status) {
                    //verify JWT
                    let token = datos.token;
                    let isValid = jws.verifyJWT(token, {utf8: secret}, {alg: ["HS256"]})

                    if (isValid) { //Valido, decodificamos el jwt
                        let decoded = decode(token)

                        //Comprobar status
                        if (decoded.status) { //Datos como los esperabamos

                            if (decoded.data){ //Si esta creado
                                let cont=0
                                let temp=[]
                                for(const prop in decoded.data){
                                    temp[prop] = decoded.data[prop].usuario
                                    cont++;
                                }
                                this.usuarios = temp
                            }else{ //Si no esta creado

                            }

                        } else { //Datos erroneos
                            this.mensaje = 'Upss... prueba otra vez'
                        }

                    } else { //Si no es valido
                        this.mensaje = 'Upss... prueba otra vez'
                    }

                }else{
                    if (datos.mensaje !== null){
                        this.mensaje = datos.mensaje;
                    }else{
                        this.mensaje = 'Server KO... intentelo de nuevo'
                    }
                }
            },
            async filtrar(){
                this.cargando = true;
                let jws = KJUR.jws.JWS; //Objeto para tratar JWT
                let secret = "Alvaro1234@asdfgh"; // Clave privada

                //crear JWT
                let header = {alg: "HS256", typ: "JWT"}; //Cabecera de JWT
                let data = {
                    id: localStorage.getItem('usuarioID'),
                    func: 'filtrarLogs',
                    usuario: this.usuario,
                    fecha: this.fecha
                };

                let jwt = jws.sign("HS256", header, data, {utf8: secret}); //Firma de JWT

                let formd = new FormData();
                formd.append("jwt", jwt)

                let response = await axios.post(this.HOST+'server/api.php', formd)
                let datos = response.data


                if (datos.status) {
                    //verify JWT
                    let token = datos.token;
                    let isValid = jws.verifyJWT(token, {utf8: secret}, {alg: ["HS256"]})

                    if (isValid) { //Valido, decodificamos el jwt
                        let decoded = decode(token)

                        //Comprobar status
                        if (decoded.status) { //Datos como los esperabamos

                            if (decoded.data){ //Si se ha encontrado
                                this.logs = decoded.data
                                this.cargando = false
                            }else{ //Si no se ha encontrado
                                this.logs= null
                                this.cargando = false
                            }

                        } else { //Datos erroneos
                            this.mensaje = 'Upss... prueba otra vez'
                            this.cargando = false
                        }

                    } else { //Si no es valido
                        this.mensaje = 'Upss... prueba otra vez'
                        this.cargando = false
                    }

                }else{
                    if (datos.mensaje !== null){
                        this.mensaje = datos.mensaje;
                    }else{
                        this.mensaje = 'Server KO... intentelo de nuevo'
                    }
                    this.cargando = false
                }
            },
            borrar(){
                this.usuario = ''
                this.fecha = ''
                this.obtenerLogs()
            },
        }
    }
</script>

<style scoped>
    .titular{
        border-radius: 10px 10px 10px 10px;
        background-color: rgba(2, 64, 89, 0.91);
        color: white;
        letter-spacing: 6px;
        padding: 8px;
    }
    .usuario{
        border-radius: 10px 10px 10px 10px;
        background-color: rgba(2, 64, 89, 0.91);
        color: white;
        letter-spacing: 4px;
        padding: 2px;
    }
    .usuario:hover{
        background-color: rgba(2, 64, 89, 0.92);
    }
    .mensaje{
        letter-spacing: 3px;
    }
    .alerta{
        border-radius: 30px 30px 30px 30px;
    }
</style>