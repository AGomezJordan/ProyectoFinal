<template>
    <div>
        <!-- TITULO -->
        <v-row>
            <v-col cols="0" md="4"></v-col>
            <v-col cols="12" md="4">
                <div class="titular text-center">CONSULTAR NOTAS</div>
            </v-col>
            <v-col cols="0" md="4"></v-col>
        </v-row>

        <!-- ALERTA -->
        <v-row v-if="control && (this.mensaje || !notas)" class="mensaje">
            <v-col cols="0" md="3"></v-col>
            <v-col cols="12" md="6">
                <!-- OK -->
                <v-alert
                        class="alerta"
                        type="success"
                        v-if="this.mensaje && !error"
                        dismissible
                >
                    {{mensaje}}
                </v-alert>

                <!-- NOK -->
                <v-alert
                        class="alerta"
                        type="error"
                        v-if="this.mensaje && error"
                        dismissible
                >
                    {{mensaje}}
                </v-alert>
                <v-alert
                        class="alerta"
                        type="error"
                        v-if="!notas"
                        dismissible
                >
                    {{mensaje}}
                </v-alert>
            </v-col>
            <v-col cols="0" md="3"></v-col>
        </v-row>

        <!-- NOTAS -->
        <v-row v-if="!cargando" class="pa-5">
            <v-col lg="4" md="6" cols="12" v-for="nota in notas">
                <div class="botones">
                    <v-btn
                            elevation="10"
                            @click="$router.push({name: 'EditarNota', params:{id: nota.id}})"
                            fab
                            color="success"
                    >
                        <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn
                            elevation="10"
                            @click="borrar(nota.id)"
                            fab
                            color="error"
                    >
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                </div>
                <div class="tarjeta">
                    <v-card
                            class="pa-5 texto"
                            dark
                            :to="{
                            name: 'Notas',
                            params:
                                {id: nota.id}}"
                    >
                        <v-card-title>{{nota.titulo}}</v-card-title>
                        <v-card-subtitle>{{nota.nota}}</v-card-subtitle>
                    </v-card>
                </div>
            </v-col>
        </v-row>

        <!-- LOADER -->
        <div v-if="cargando" class="loader">
            <Loader color="#4ebfb4" height="50px" width="8px"></Loader>
        </div>
    </div>
</template>

<script>
    import KJUR from 'jsrsasign'
    import decode from 'jwt-decode'
    import axios from 'axios'
    import Loader from 'vue-spinner/src/ScaleLoader'
    import {mapState} from 'vuex'
    export default {
        name: "ConsultarNotas",
        data(){
            return{
                control: false,
                notas: {},
                cargando: '',
                mensaje: '',
                error: false,
            }
        },
        created(){
          this.obtenerNotas()
        },
        components:{
          Loader
        },
        computed:{
          ...mapState(['HOST'])
        },
        methods:{
            async obtenerNotas(){
                this.cargando = true;
                let jws = KJUR.jws.JWS; //Objeto para tratar JWT
                let secret = "Alvaro1234@asdfgh"; // Clave privada

                //crear JWT
                let header = {alg: "HS256", typ: "JWT"}; //Cabecera de JWT
                let data = {
                    id: localStorage.getItem('usuarioID'),
                    func: 'consultarNotas',
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
                                this.notas = decoded.data
                                this.cargando = false
                            }else{ //Si no esta creado
                                this.mensaje = 'NO HAY NOTAS QUE MOSTRAR'
                                this.control = true
                                this.error = true
                                setTimeout(()=> this.control=false, 2000)
                                setTimeout(()=> this.error=false, 2000)
                                this.cargando = false
                            }

                        } else { //Datos erroneos
                            this.mensaje = 'Upss... prueba otra vez'
                            this.control = true
                            this.error = true
                            setTimeout(()=> this.control=false, 2000)
                            setTimeout(()=> this.error=false, 2000)
                            this.cargando = false
                        }

                    } else { //Si no es valido
                        this.mensaje = 'Upss... prueba otra vez'
                        this.control = true
                        this.error = true
                        setTimeout(()=> this.control=false, 2000)
                        setTimeout(()=> this.error=false, 2000)
                        this.cargando = false
                    }

                }else{
                    this.control = true
                    this.error = true
                    if (datos.mensaje !== null){
                        this.mensaje = datos.mensaje;
                    }else{
                        this.mensaje = 'Server KO... intentelo de nuevo'
                    }
                    setTimeout(()=> this.control=false, 2000)
                    setTimeout(()=> this.error=false, 2000)
                    this.cargando = false
                }
            },
            async borrar(payload){
                this.cargando = true;
                let jws = KJUR.jws.JWS; //Objeto para tratar JWT
                let secret = "Alvaro1234@asdfgh"; // Clave privada

                //crear JWT
                let header = {alg: "HS256", typ: "JWT"}; //Cabecera de JWT
                let data = {
                    id: localStorage.getItem('usuarioID'),
                    notaID: payload,
                    func: 'eliminarNota',
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

                            if (decoded.eliminado){ //Si esta desactivado
                                this.mensaje = "NOTA BORRADA CORRECTAMENTE"
                                this.error = false
                                this.control = true

                                let temp = this.notas
                                for(let x in temp){
                                    if(temp[x].id === payload){
                                        temp.splice(x,1)
                                    }
                                }
                                this.notas = temp
                                this.cargando = false
                                setTimeout(()=> this.control = false, 3000)
                            }else{ //Si no esta desactivado
                                this.mensaje="LA NOTA NO HA PODIDO BORRARSE"
                                this.error = true
                                this.cargando = false
                                this.control = true
                                setTimeout(()=> this.control = false, 3000)
                            }

                        } else { //Datos erroneos
                            this.mensaje="Upss... prueba otra vez"
                            this.error = true
                            this.cargando = false
                            this.control = true
                            setTimeout(()=> this.control = false, 3000)
                        }

                    } else { //Si no es valido
                        this.mensaje="Upss... prueba otra vez"
                        this.error = true
                        this.cargando = false
                        this.control = true
                        setTimeout(()=> this.control = false, 3000)
                    }

                }else{
                    this.error = true
                    if (datos.mensaje !== null){
                        this.mensaje = datos.mensaje;
                    }else{
                        this.mensaje = 'Server KO... intentelo de nuevo'
                    }
                    this.control = true
                    setTimeout(()=> this.control = false, 3000)
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
    .notas{
        border-radius: 10px 10px 10px 10px;
        background-color: rgba(2, 64, 89, 0.85);
        color: white;
        margin: 30px;
        padding-top: 30px;
        padding-bottom: 30px;
        font-size: 25px;
    }

    .tarjeta{
        border-radius: 10px 10px 10px 10px;
        overflow: hidden;
    }
    .texto{
        background-color: rgba(2, 64, 89, 0.91);
    }
    .botones{
        position: relative;
        top: 40px;
        left: 70%;
        z-index: 2;
    }
    .loader{
        text-align: center;
        width: 100%;
    }
</style>