<template>
    <div>
        <!-- TITULO -->
        <v-row>
            <v-col cols="0" md="4"></v-col>
            <v-col cols="12" md="4">
                <div class="titular text-center">CREAR ARTICULO</div>
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

        <!-- FORMULARIO -->
        <v-row>
            <v-col cols="0" md="2"></v-col>
            <v-col cols="12" md="8">
                <form>
                <v-row class="formulario">
                    <!-- TITULAR -->
                    <v-col cols="12" md="6">
                        <v-text-field
                                v-model="$v.titular.$model"
                                counter
                                :rules="nameRules"
                                label="Titular"
                                color="success"
                                dark
                        ></v-text-field>
                    </v-col>
                    <!-- SUBTITULAR -->
                    <v-col cols="12" md="6">
                        <v-text-field
                                v-model="$v.subtitular.$model"
                                counter
                                :rules="subRules"
                                label="SubTitular"
                                color="success"
                                dark
                        ></v-text-field>
                    </v-col>
                    <!-- ARTICULO -->
                    <v-col cols="12">
                        <v-textarea
                                auto-grow
                                :rules="articuloRules"
                                :counter="4294967295"
                                label="Articulo"
                                rows="1"
                                color="success"
                                dark
                                v-model="$v.articulo.$model"
                        ></v-textarea>
                    </v-col>
                    <!-- PORTADA -->
                    <v-col cols="12" md="6">
                        <v-file-input
                                label="Portada"
                                placeholder="Selecciona la portada"
                                prepend-icon="mdi-camera"
                                dark
                                color="success"
                                :rules="portadaRules"
                                @change="validateFoto()"
                                accept="image/jpeg"
                                v-model="portada"
                        ></v-file-input>
                    </v-col>
                    <!-- CATEGORIA -->
                    <v-col cols="12" md="6">
                        <v-select
                                :items="categorias"
                                label="Categoría"
                                dark
                                color="success"
                                v-model="$v.categoria.$model"
                        ></v-select>
                    </v-col>
                    <!-- BOTONES -->
                    <v-col cols="12" class="text-center">
                        <!-- ENVIAR -->
                        <v-btn
                            color="success"
                            class="mr-5"
                            fab
                            small
                            dark
                            v-if="!$v.$invalid && valido && portada"
                            @click="crearArticulo()"
                        >
                            <v-icon>mdi-check</v-icon>
                        </v-btn>
                        <!-- BORRAR -->
                        <v-btn color="error" class="ml-5" fab small dark @click="borrarformulario()">
                            <v-icon>mdi-restart</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
                </form>
            </v-col>
            <v-col cols="0" md="2"></v-col>
        </v-row>
    </div>
</template>

<script>
    import {required, maxLength} from 'vuelidate/lib/validators'
    import KJUR from 'jsrsasign'
    import decode from 'jwt-decode'
    import axios from 'axios'
    import router from '@/router'
    import {mapState} from 'vuex'
    export default {
        name: "CrearArticulo",
        data(){
            return{
                control: true,
                mensaje: '',
                valido: false,
                titular: '',
                subtitular: '',
                articulo:'',
                portada:null,
                categorias: ['Politica'],
                categoria: '',
                nameRules: [
                    v => !!v || 'Titular Requerido',
                    v => v.length<255 || 'El titular solo puede tener 255 caracteres.'
                ],
                subRules: [
                    v => !!v || 'Subtitular Requerido',
                    v => v.length<255 || 'El subtitular solo puede tener 255 caracteres.'
                ],
                articuloRules: [
                    v => !!v || 'Articulo Requerido',
                    v => (v && v.length <= 4294967295) || 'Articulo maximo 4 294 967 295 caracteres',
                ],
                portadaRules: [
                    v => !!v || 'Portada Requerida',
                    v => (v && v.size <7000000) || 'Foto demasiado grande. Max 7 MB',
                ]
            }
        },
        validations:{
            titular:{required, maxLength:maxLength(255)},
            subtitular:{required,  maxLength:maxLength(255)},
            categoria:{required},
            articulo:{required, maxLength:maxLength(4294967295)}
        },
        destroyed(){
            this.mensaje = ''
        },
        computed:{
          ...mapState(['HOST'])
        },
        methods: {
            borrarformulario() {
                this.$v.titular.$model = '';
                this.$v.subtitular.$model = '';
                this.$v.articulo.$model = '';
                this.portada = null;
                this.$v.categoria.$model = '';
            },
            validateFoto() {
                if (this.portada.size > 7000000) {
                    this.valido = false
                } else {
                    this.valido = true
                }
            },
            async crearArticulo() {
                this.cargando = true;
                let jws = KJUR.jws.JWS; //Objeto para tratar JWT
                let secret = "Alvaro1234@asdfgh"; // Clave privada

                //crear JWT
                let header = {alg: "HS256", typ: "JWT"}; //Cabecera de JWT
                let data = {
                    id: localStorage.getItem('usuarioID'),
                    func: 'crearArticulo',
                    titular: this.$v.titular.$model,
                    subtitular: this.$v.subtitular.$model,
                    articulo: this.$v.articulo.$model,
                    categoria: this.$v.categoria.$model,
                };

                let jwt = jws.sign("HS256", header, data, {utf8: secret}); //Firma de JWT

                let formd = new FormData();
                formd.append("jwt", jwt)
                formd.append("portada", this.portada)
                this.borrarformulario()

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

                            if (decoded.creado){ //Si esta creado
                                this.error=false
                                this.mensaje = 'ARTICULO CREADO CORRECTAMENTE'
                                this.cargando = false
                                setTimeout(()=> this.control = false, 2000)
                                setTimeout(()=> this.mensaje = '', 2000)
                                setTimeout(()=> router.push({name:'ConsultarArticulos'}), 3000)
                            }else{ //Si no esta creado
                                this.error=true
                                this.mensaje = 'EL ARTICULO NO HA PODIDO CREARSE'
                                this.cargando = false
                            }

                        } else { //Datos erroneos
                            this.error=true
                            this.mensaje = 'Upss... prueba otra vez'
                            this.cargando = false
                        }

                    } else { //Si no es valido
                        this.error=true
                        this.mensaje = 'Upss... prueba otra vez'
                        this.cargando = false
                    }

                }else{
                    this.error=true
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
    .formulario{
        border-radius: 10px 10px 10px 10px;
        background-color: rgba(2, 64, 89, 0.85);
        color: white;
        margin: 30px;
        padding-top: 30px;
        padding-bottom: 30px;
        font-size: 25px;
    }
    .mensaje{
        letter-spacing: 3px;
    }
    .alerta{
        border-radius: 30px 30px 30px 30px;
    }
</style>