<template>
    <div class="pa-4">
        <!-- FILTRAR MOVIL -->
        <v-toolbar
                color="#023059"
                dark
                height="250px"
                class="d-block d-sm-block d-md-none"
        >
            <v-icon>mdi-filter</v-icon>
            <v-toolbar-title>
                <!-- FILTROS DISPONIBLES -->
                <v-row class="ml-5 mt-8 text-center">

                    <!-- TIPO -->
                    <v-col cols="6">
                        <v-select
                                :items="tipos"
                                label="Tipo"
                                dark
                                color="success"
                                v-model="tipo"
                                class="ml-5 mr-5"
                        ></v-select>
                    </v-col>

                    <!-- ESTADO -->
                    <v-col cols="6">
                        <v-select
                                :items="estados"
                                label="Estado"
                                dark
                                color="success"
                                v-model="estado"
                                class="ml-5 mr-5"
                        ></v-select>
                    </v-col>

                    <!-- FECHA DE ALTA -->
                    <v-col cols="6">
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
                    <v-col cols="6">
                        <v-btn
                                color="success"
                                small
                                dark
                                @click="filtrar()"
                        >
                            <v-icon>mdi-check</v-icon>
                        </v-btn>
                        <v-btn
                                color="error"
                                small
                                dark
                                class="ml-5"
                                @click="borrar()"
                        >
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-toolbar-title>
        </v-toolbar>

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

                    <!-- TIPO -->
                    <v-col cols="3">
                        <v-select
                                :items="tipos"
                                label="Tipo"
                                dark
                                color="success"
                                v-model="tipo"
                                class="ml-5 mr-5"
                        ></v-select>
                    </v-col>

                    <!-- ESTADO -->
                    <v-col cols="3">
                        <v-select
                                :items="estados"
                                label="Estado"
                                dark
                                color="success"
                                v-model="estado"
                                class="ml-5 mr-5"
                        ></v-select>
                    </v-col>

                    <!-- FECHA DE ALTA -->
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

        <!-- USUARIOS -->
        <div class="pa-5">
            <!-- TITULO -->
            <v-row class="text-center mb-8">
                <v-col cols="0" md="4"></v-col>
                <v-col cols="12" md="4" class="pa-5">
                    <div class="titular">CONSULTAR USUARIO</div>
                </v-col>
                <v-col cols="0" md="4"></v-col>
            </v-row>

            <!-- ALERTA -->
            <v-row class="mensaje">
                <v-col cols="0" md="3"></v-col>
                <v-col cols="12" md="6">
                    <!-- OK -->
                    <v-alert
                            class="alerta"
                            type="success"
                            v-if="this.mensajeError && !error"
                            dismissible
                    >
                        {{mensajeError}}
                    </v-alert>

                    <!-- NOK -->
                    <v-alert
                            class="alerta"
                            type="error"
                            v-if="this.mensajeError && error"
                            dismissible
                    >
                        {{mensajeError}}
                    </v-alert>
                    <v-alert
                            class="alerta"
                            type="error"
                            v-if="!usuarios"
                            dismissible
                    >
                        NO SE HAN ENCONTRADO USURIOS
                    </v-alert>
                </v-col>
                <v-col cols="0" md="3"></v-col>
            </v-row>

            <!-- USUARIOS -->
            <router-link
                v-for="usuario in usuarios"
                :to="{name: 'Usuario', params: {id:usuario.id}}"
                v-if="usuarios"
            >
                <v-row class="text-center usuario mb-4">
                    <v-col cols="6" md="3">
                        <v-icon color="white">mdi-account</v-icon>
                        {{usuario.nombre}} {{usuario.ap1}} {{usuario.ap2}}
                    </v-col>
                    <v-col cols="6" md="3">
                        {{usuario.usuario}}
                    </v-col>
                    <v-col cols="6" md="3">
                        {{usuario.tipo}}
                    </v-col>
                    <v-col cols="6" md="3">
                        {{usuario.fecha}}
                    </v-col>
                </v-row>
            </router-link>


        </div>
    </div>
</template>

<script>
    import KJUR from 'jsrsasign'
    import decode from 'jwt-decode'
    import axios from 'axios'
    import {mapState} from 'vuex'

    export default {
        name: "ConsultarUsuario",
        data(){
            return{
                collapseOnScroll: false,
                tipos:['administrador', 'escritor'],
                tipo:'',
                estados: ['Activado', 'Desactivado'],
                estado:'',
                fecha: '',
                hoy: '',
                cargando: false,
                usuarios: {},
                mensaje: ''
            }
        },
        computed:{
            ...mapState(['HOST', 'mensajeError', 'error'])
        },
        created() {
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
        },
        methods:{
            async filtrar(){
                this.cargando = true;
                let jws = KJUR.jws.JWS; //Objeto para tratar JWT
                let secret = "Alvaro1234@asdfgh"; // Clave privada

                //crear JWT
                let header = {alg: "HS256", typ: "JWT"}; //Cabecera de JWT
                let data = {
                    id: localStorage.getItem('usuarioID'),
                    func: 'filtrarUsuarios',
                    tipo: this.tipo,
                    estado: this.estado,
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
                                this.usuarios = decoded.data
                                this.cargando = false
                            }else{ //Si no se ha encontrado
                                this.usuarios = null
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
                this.tipo = ''
                this.estado = ''
                this.fecha = ''
                this.obtenerUsuarios()
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
                                this.usuarios = decoded.data
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
            }
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
    a{
        text-decoration: none;
    }
    .mensaje{
        letter-spacing: 3px;
    }
    .alerta{
        border-radius: 30px 30px 30px 30px;
    }
</style>