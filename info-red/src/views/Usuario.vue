<template>
    <div>
        <!-- TTITULO NOMBRE DEL USUARIO -->
        <v-row>
            <v-col cols="0" md="4"></v-col>
            <v-col cols="12" md="4">
                <div class="titular text-center">
                    {{usuario.nombre}} {{usuario.apellido1}} {{usuario.apellido2}}
                </div>
            </v-col>
            <v-col cols="0" md="4"></v-col>
        </v-row>

        <!-- ALERTA -->
        <v-row v-if="control && this.mensaje" class="mensaje">
            <v-col cols="0" md="3"></v-col>
            <v-col cols="12" md="6">
                <!-- OK -->
                <v-alert
                        class="alerta"
                        type="success"
                        v-if="mensaje && !error"
                        dismissible
                >
                    {{mensaje}}
                </v-alert>

                <!-- NOK -->
                <v-alert
                        class="alerta"
                        type="error"
                        v-if="mensaje && error"
                        dismissible
                >
                    {{mensaje}}
                </v-alert>
            </v-col>
            <v-col cols="0" md="3"></v-col>
        </v-row>

        <!-- ESTADISTICAS DEL USUARIO -->
        <v-row class="estadistica">

            <v-col cols="12" md="4" class="text-center">
                Articulos Creados<br> <div class="mt-3 datos">{{usuario.creado}}</div>
            </v-col>

            <v-col cols="12" md="4" class="text-center">
                Articulos Publicados<br><div class="mt-3 datos">{{usuario.publicado}}</div>
            </v-col>

            <v-col cols="12" md="4" class="text-center">
                Fecha de Alta<br><div class="mt-3 datos">{{usuario.fecha}}</div>
            </v-col>

            <!-- SEPARACIÓN -->
            <v-col cols="12"></v-col>
            <v-col cols="12"></v-col>
            <v-col cols="12"></v-col>

            <v-col cols="12" md="4" class="text-center">
                Porcentaje A.C / A.P<br>
                <v-progress-circular
                        :rotate="90"
                        :size="100"
                        :width="12"
                        :value="porcentaje"
                        color="success"
                        class="mt-5"
                >
                    {{porcentaje}}%
                </v-progress-circular>
            </v-col>

            <v-col cols="12" md="4" class="text-center">
                Usuario <br> <div class="mt-3 datos">{{usuario.tipo}}</div>
            </v-col>

            <v-col cols="12" md="4" class="text-center">
                Acciones <br>
                <div class="mt-4">
                    <v-btn color="success" :to="{name:'EditarUsuario', params:{id:this.$route.params.id}}">Editar</v-btn>
                    <v-btn
                        color="error"
                       @click="borrar()"
                        v-if="usuario.valido === 'activado'"
                    >
                        Borrar
                    </v-btn>
                    <v-btn
                            color="warning"
                            @click="activar()"
                            v-if="usuario.valido === 'desactivado'"
                    >
                        Activar
                    </v-btn>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import {mapMutations, mapState} from 'vuex'
    import KJUR from 'jsrsasign'
    import decode from 'jwt-decode'
    import axios from 'axios'
    import router from '@/router'

    export default {
        name: "Usuario",
        data(){
          return{
              control: true,
              usuario: [],
              error:true,
              mensaje: '',
              cargando: '',
              porcentaje: 0,
          }
        },
        computed:{
            ...mapState(['HOST'])
        },
        async created(){
            this.cargando = true;
            let jws = KJUR.jws.JWS; //Objeto para tratar JWT
            let secret = "Alvaro1234@asdfgh"; // Clave privada

            //crear JWT
            let header = {alg: "HS256", typ: "JWT"}; //Cabecera de JWT
            let data = {
                id: localStorage.getItem('usuarioID'),
                usuarioID: this.$route.params.id,
                func: 'consultarUsuario',
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

                        if (decoded.data){ //Si hay datos
                            this.usuario = decoded.data
                            this.porcentaje = Math.round((this.usuario.publicado * 100)/ this.usuario.creado);
                            this.cargando = false
                        }else{ //Si no hay datos
                            this.cargando = false
                            this.mensaje= 'No hay datos que mostrar'
                            setTimeout(()=> this.control = false, 4000)
                        }

                    } else { //Datos erroneos
                        this.mensaje = 'Upss... prueba otra vez'
                        this.cargando = false
                        setTimeout(()=> this.control = false, 4000)
                    }

                } else { //Si no es valido
                    this.mensaje = 'Upss... prueba otra vez'
                    this.cargando = false
                    setTimeout(()=> this.control = false, 4000)
                }

            }else{
                if (datos.mensaje !== null){
                    this.mensaje = datos.mensaje;
                    setTimeout(()=> this.control = false, 4000)
                }else{
                    this.mensaje = 'Server KO... intentelo de nuevo'
                    setTimeout(()=> this.control = false, 4000)
                }
                this.cargando = false
            }
        },
        mounted(){
            //APAREZCA FLECHA PARA IR ATRAS EN LA CABECERA
            this.setBack(true)
            window.scroll(0,0)
        },
        destroyed(){
            //DESAPAREZCA LA FLECHA PARA IR ATRAS EN LA CABECERA
            this.setBack(false)
            this.mensaje = ''
        },
        methods:{
            ...mapMutations(['setBack', 'setMensajeError', 'setError']),
            async borrar(){
                this.cargando = true;
                let jws = KJUR.jws.JWS; //Objeto para tratar JWT
                let secret = "Alvaro1234@asdfgh"; // Clave privada

                //crear JWT
                let header = {alg: "HS256", typ: "JWT"}; //Cabecera de JWT
                let data = {
                    id: localStorage.getItem('usuarioID'),
                    usuarioID: this.$route.params.id,
                    func: 'desactivarUsuario',
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

                            if (decoded.desactivado){ //Si esta desactivado
                                this.setMensajeError("USUARIO DESACTIVADO CORRECTAMENTE")
                                this.setError(false)
                                router.push({name:'ConsultarUsuario'})
                            }else{ //Si no esta desactivado
                                this.mensaje="EL USUARIO NO HA PODIDO DESACTIVARSE"
                                this.error = true
                                this.cargando = false
                            }

                        } else { //Datos erroneos
                            this.mensaje="Upss... prueba otra vez"
                            this.error = true
                            this.cargando = false
                        }

                    } else { //Si no es valido
                        this.mensaje="Upss... prueba otra vez"
                        this.error = true
                        this.cargando = false
                    }

                }else{
                    this.error = true
                    if (datos.mensaje !== null){
                        this.mensaje = datos.mensaje;
                    }else{
                        this.mensaje = 'Server KO... intentelo de nuevo'
                    }
                    setTimeout(()=> this.control = false, 4000)
                    this.cargando = false
                }
            },
            async activar(){
                this.cargando = true;
                let jws = KJUR.jws.JWS; //Objeto para tratar JWT
                let secret = "Alvaro1234@asdfgh"; // Clave privada

                //crear JWT
                let header = {alg: "HS256", typ: "JWT"}; //Cabecera de JWT
                let data = {
                    id: localStorage.getItem('usuarioID'),
                    usuarioID: this.$route.params.id,
                    func: 'activarUsuario',
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

                            if (decoded.activado){ //Si esta activado
                                this.setMensajeError("USUARIO ACTIVADO CORRECTAMENTE")
                                this.setError(false)
                                router.push({name:'ConsultarUsuario'})
                            }else{ //Si no esta desactivado
                                this.mensaje="EL USUARIO NO SE HA PODIDO ACTIVAR"
                                this.error = true
                                this.cargando = false
                            }

                        } else { //Datos erroneos
                            this.mensaje="Upss... prueba otra vez"
                            this.error = true
                            this.cargando = false
                        }

                    } else { //Si no es valido
                        this.mensaje="Upss... prueba otra vez"
                        this.error = true
                        this.cargando = false
                    }

                }else{
                    this.error = true
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
    .estadistica{
        border-radius: 10px 10px 10px 10px;
        background-color: rgba(2, 64, 89, 0.85);
        color: white;
        margin: 30px;
        padding-top: 30px;
        padding-bottom: 30px;
        font-size: 25px;
    }
    .datos{
        color: #4ebfb4;
    }
    .mensaje{
        letter-spacing: 3px;
    }
    .alerta{
        border-radius: 30px 30px 30px 30px;
    }
</style>