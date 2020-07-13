<template>
    <div class="pa-4">
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
            </v-col>
            <v-col cols="0" md="3"></v-col>
        </v-row>

        <!-- USUARIOS -->
        <router-link v-for="usuario in usuarios" :to="{name: 'Usuario', params: {id:usuario.id}}">
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
                cargando: false,
                usuarios: {},
                mensaje: ''
            }
        },
        computed:{
            ...mapState(['HOST', 'mensajeError', 'error'])
        },
        async created() {
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