<template>
    <div class="pa-4">
        <v-row class="text-center">
            <v-col cols="0" md="4"></v-col>
            <v-col cols="12" md="4" class="pa-5">
                <div class="titular">BIENVENIDO {{usuario.nombre}}</div>
            </v-col>
            <v-col cols="0" md="4"></v-col>
        </v-row>
        <v-row class="text-center">
            <v-col cols="12" md="4" class="pa-5">
                <div class="estadistica">
                    ARTICULOS CREADOS<br>{{usuario.creado}}
                </div>
            </v-col>
            <v-col cols="0" md="4"></v-col>
            <v-col cols="12" md="4" class="pa-5">
                <div class="estadistica">
                    ARTICULOS PUBLICADOS<br>{{usuario.publicado}}
                </div>
            </v-col>
        </v-row>
        <v-row class="text-center">
            <v-col cols="12" md="4" class="pa-5">
                <div class="estadistica">
                    EMPLEADO DESDE<br>{{usuario.fecha}}
                </div>
            </v-col>
            <v-col cols="0" md="4"></v-col>
            <v-col cols="12" md="4" class="pa-5">
                <div class="estadistica">
                    USUARIO<br>{{usuario.tipo}}
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import KJUR from 'jsrsasign'
    import decode from 'jwt-decode'
    import axios from 'axios'
    import {mapState} from 'vuex'

    export default {
        name: "Administracion",
        data(){
            return{
                usuario: [],
                cargando: false,
                mensaje: ''
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
                usuarioID: localStorage.getItem('usuarioID'),
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

                        if (decoded.data){ //Si esta creado
                            this.usuario = decoded.data
                            this.porcentaje = Math.round((this.usuario.publicado * 100)/ this.usuario.creado);
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
.titular, .estadistica{
    border-radius: 10px 10px 10px 10px;
    background-color: rgba(2, 64, 89, 0.91);
    color: white;
    letter-spacing: 6px;
    padding: 8px;
}
</style>