<template>
    <div>

        <!-- CATEGORIAS -->
        <div class="pa-5">
            <!-- TITULO -->
            <v-row class="text-center mb-8">
                <v-col cols="0" md="4"></v-col>
                <v-col cols="12" md="4" class="pa-5">
                    <div class="titular">CONSULTAR CATEGORIAS</div>
                </v-col>
                <v-col cols="0" md="4"></v-col>
            </v-row>

            <!-- ALERTA -->
            <v-row v-if="control && (this.mensaje || !categorias)" class="mensaje">
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
                            v-if="!categorias"
                            dismissible
                    >
                        {{mensaje}}
                    </v-alert>
                </v-col>
                <v-col cols="0" md="3"></v-col>
            </v-row>

            <!-- CATEGORIAS -->
            <v-row
                class="text-center usuario mb-4"
                v-for="categoria in categorias"
            >
                <v-col cols="4" class="text-left">
                    {{categoria.nombre}}
                </v-col>
                <v-col cols="6">
                    {{categoria.descripcion}}
                </v-col>
                <v-col cols="2">
                    <v-btn icon>
                        <v-icon color="success"
                            @click="$router.push({name: 'EditarCategoria', params: {id:categoria.nombre}})"
                        >
                            mdi-pencil
                        </v-icon>
                    </v-btn>
                    <v-btn
                        icon
                        @click="borrar(categoria.nombre)"
                    >
                        <v-icon color="error">mdi-delete</v-icon>
                    </v-btn>
                </v-col>
            </v-row>

            <!-- LOADER -->
            <div v-if="cargando" class="loader">
                <Loader color="#4ebfb4" height="50px" width="8px"></Loader>
            </div>

        </div>
    </div>
</template>

<script>
    import KJUR from 'jsrsasign'
    import decode from 'jwt-decode'
    import axios from 'axios'
    import Loader from 'vue-spinner/src/ScaleLoader'
    import {mapState, mapMutations} from 'vuex'

    export default {
        name: "ConsultarCategoria",
        data(){
            return{
                control:true,
                cargando: false,
                categorias: {},
                mensaje: '',
                error: false
            }
        },
        components:{
          Loader
        },
        computed:{
            ...mapState(['HOST'])
        },
       created() {
            this.obtenerCategorias()
            setTimeout(()=> this.control = false, 3000)
        },
        destroyed(){
          this.setMensajeError(null)
        },
        methods:{
            async obtenerCategorias() {
                this.cargando = true;
                let jws = KJUR.jws.JWS; //Objeto para tratar JWT
                let secret = "Alvaro1234@asdfgh"; // Clave privada

                //crear JWT
                let header = {alg: "HS256", typ: "JWT"}; //Cabecera de JWT
                let data = {
                    id: localStorage.getItem('usuarioID'),
                    func: 'consultarCategorias',
                };

                let jwt = jws.sign("HS256", header, data, {utf8: secret}); //Firma de JWT

                let formd = new FormData();
                formd.append("jwt", jwt)
                formd.append("portada", this.portada)

                let response = await axios.post(this.HOST + 'server/api.php', formd)
                let datos = response.data

                if (datos.status) {
                    //verify JWT
                    let token = datos.token;
                    let isValid = jws.verifyJWT(token, {utf8: secret}, {alg: ["HS256"]})

                    if (isValid) { //Valido, decodificamos el jwt
                        let decoded = decode(token)

                        //Comprobar status
                        if (decoded.status) { //Datos como los esperabamos

                            if (decoded.data){ //Si hay categorias
                                this.categorias = decoded.data
                                this.cargando = false

                            }else{ //Si no esta creado
                                this.cargando = false
                            }

                        } else { //Datos erroneos

                            this.cargando = false
                        }

                    } else { //Si no es valido
                        this.cargando = false
                    }

                }else{
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
                    nombreID: payload,
                    func: 'eliminarCategoria',
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
                                this.mensaje = "CATEGORIA BORRADA CORRECTAMENTE"
                                this.error = false
                                this.control = true

                                let temp = this.categorias
                                for(let x in temp){
                                    if(temp[x].nombre=== payload){
                                        temp.splice(x,1)
                                    }
                                }
                                this.categorias = temp
                                this.cargando = false
                                setTimeout(()=> this.control = false, 3000)
                            }else{ //Si no esta desactivado
                                this.mensaje="LA CATEGORIA NO HA PODIDO BORRARSE"
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
            },
            ...mapMutations(['setMensajeError'])
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
    .loader{
        text-align: center;
        width: 100%;
    }
</style>