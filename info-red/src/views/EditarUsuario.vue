<template>
    <div>
        <!-- TITULO -->
        <v-row>
            <v-col cols="0" md="4"></v-col>
            <v-col cols="12" md="4">
                <div class="titular text-center">EDITAR USUARIO</div>
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
                        <v-col>
                          <v-row>
                              <!-- TITULO CAMPO -->
                              <v-col cols="12">
                                  <span class="texto">
                                      DATOS DE USUARIO
                                  </span>
                                  <div class="separador"></div>
                              </v-col>
                          </v-row>
                          <v-row>
                              <!-- USUARIO -->
                              <v-col cols="12" md="6">
                                  <v-text-field
                                          disabled
                                          v-model="$v.usuario.$model"
                                          :counter="10"
                                          :rules="usuarioRules"
                                          label="Usuario"
                                          color="success"
                                          dark
                                          :loading="cargando"
                                  ></v-text-field>
                              </v-col>

                              <!-- TIPO DE USUARIO -->
                              <v-col cols="12" md="6">
                                  <v-select
                                          :items="tipoUsuarios"
                                          label="Tipo"
                                          dark
                                          color="success"
                                          :loading="cargando"
                                          v-model="$v.tipoUsuario.$model"
                                  ></v-select>
                              </v-col>

                              <!-- CONTRASEÑA -->
                              <v-col cols="12" md="6">
                                  <v-text-field
                                          v-model="$v.password.$model"
                                          counter
                                          :rules="passwordRules"
                                          label="Contraseña"
                                          color="success"
                                          type="password"
                                          dark
                                          :loading="cargando"
                                  ></v-text-field>
                              </v-col>

                              <!-- CONFIRMAR CONTRASEÑA -->
                              <v-col cols="12" md="6">
                                  <v-text-field
                                          v-model="$v.password2.$model"
                                          counter
                                          :rules="password2Rules"
                                          label="Confirmar contraseña"
                                          color="success"
                                          type="password"
                                          dark
                                          :loading="cargando"
                                  ></v-text-field>
                              </v-col>
                          </v-row>

                          <v-row>
                            <!-- TITULO CAMPO -->
                            <v-col cols="12">
                              <span class="texto">
                                  DATOS PERSONALES
                              </span>
                                <div class="separador"></div>
                            </v-col>
                          </v-row>
                            <v-row>
                                <!-- APELLIDO 1 -->
                                <v-col cols="12" md="6">
                                    <v-text-field
                                            disabled
                                            v-model="$v.apellido.$model"
                                            counter
                                            :rules="apellidoRules"
                                            label="Primer apellido"
                                            color="success"
                                            dark
                                            :loading="cargando"
                                    ></v-text-field>
                                </v-col>

                                <!-- APELLIDO 2 -->
                                <v-col cols="12" md="6">
                                    <v-text-field
                                            disabled
                                            v-model="$v.apellido2.$model"
                                            counter
                                            :rules="apellidoRules"
                                            label="Segundo apellido"
                                            color="success"
                                            dark
                                            :loading="cargando"
                                    ></v-text-field>
                                </v-col>

                                <!-- NOMBRE -->
                                <v-col cols="12" md="6">
                                    <v-text-field
                                            disabled
                                            v-model="$v.nombre.$model"
                                            counter
                                            :rules="nombreRules"
                                            label="Nombre"
                                            color="success"
                                            dark
                                            :loading="cargando"
                                    ></v-text-field>
                                </v-col>

                                <!-- TELEFONO -->
                                <v-col cols="12" md="6">
                                    <v-text-field
                                            v-model="$v.telefono.$model"
                                            counter
                                            type="number"
                                            :rules="telefonoRules"
                                            label="Telefono"
                                            color="success"
                                            dark
                                            :loading="cargando"
                                    ></v-text-field>
                                </v-col>
                            </v-row>

                            <!-- BOTONES -->
                            <v-row>
                                <v-col cols="12" class="text-center">
                                    <!-- ENVIAR -->
                                    <v-btn
                                            color="success"
                                            class="mr-5"
                                            fab
                                            small
                                            dark
                                            v-if="!$v.$invalid"
                                            @click="enviar()"
                                            :disabled="cargando"
                                    >
                                        <v-icon>mdi-check</v-icon>
                                    </v-btn>
                                    <!-- BORRAR -->
                                    <v-btn color="error" class="ml-5" fab small dark @click="borrarformulario()">
                                        <v-icon>mdi-restart</v-icon>
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </form>
            </v-col>
            <v-col cols="0" md="2"></v-col>
        </v-row>
    </div>
</template>

<script>
    import {required, maxLength, sameAs, minLength} from 'vuelidate/lib/validators'
    import {sha256} from 'js-sha256';
    import KJUR from 'jsrsasign'
    import decode from 'jwt-decode'
    import axios from 'axios'
    import {mapState, mapMutations} from 'vuex'
    import router from "../router";

    export default {
        name: "EditarUsuario",
        data(){
            return{
                control: true,
                cargando: false,
                usuario: '',
                password: '',
                error: false,
                password2: '',
                tipoUsuarios: ['administrador','escritor'],
                tipoUsuario: '',
                apellido: '',
                apellido2: '',
                nombre: '',
                telefono:'',
                mensaje: '',
                usuarioRules: [
                    v => !!v || 'Usuario Requerido',
                    v => (v && v.length <= 10) || 'Usuario no puede tener mas de 10 caracteres'
                ],
                passwordRules: [
                    v => !!v || 'Contraseña Requerida',
                    v => (v && v.length >= 8) || 'Contraseña no puede tener menos de 8 caracteres'
                ],
                password2Rules:[
                    v => !!v || 'Confirmación de contraseña requerida',
                    v => (v === this.$v.password.$model) || 'Las contraseñas no coinciden'
                ],
                apellidoRules:[
                    v => !!v || 'Apellido requerido',
                ],
                nombreRules:[
                    v => !!v || 'Nombre requerido',
                ],
                telefonoRules:[
                    v => !!v || 'Telefono requerido',
                    v => (v.length >=9) || 'El teléfono tiene que tener 9 números',
                    v => (v.length <=9) || 'El teléfono tiene que tener 9 números'
                ]
            }
        },
        validations:{
            usuario:{required, maxLength:maxLength(10)},
            password:{required, minLength:minLength(8)},
            password2: {required, sameAs:sameAs('password')},
            tipoUsuario: {required},
            apellido: {required},
            apellido2: {required},
            nombre: {required},
            telefono: {required, minLength: minLength(9), maxLength: maxLength(9)},
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

                        if (decoded.data){ //Si esta creado
                            let temp = decoded.data

                            this.$v.usuario.$model = temp.usuario
                            this.$v.tipoUsuario.$model = temp.tipo
                            this.$v.password.$model = ''
                            this.$v.password2.$model = ''
                            this.$v.apellido.$model = temp.apellido1
                            this.$v.apellido2.$model = temp.apellido2
                            this.$v.nombre.$model = temp.nombre
                            this.$v.telefono.$model = temp.telefono

                            this.cargando = false
                        }else{ //Si no esta creado
                            this.cargando = false
                            this.mensaje = "No se han podido recuperar los datos"
                            this.error = true
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
        mounted(){
            //APAREZCA FLECHA PARA IR ATRAS EN LA CABECERA
            this.setBack(true)
            this.setRutaBack('Usuario')
            this.setParamBack(this.$route.params.id)
            window.scroll(0,0)
        },
        destroyed(){
            this.setBack(false)
            this.setRutaBack('')
            this.setParamBack('')
            this.mensaje = ''
        },
        methods:{
            ...mapMutations(['setBack', 'setRutaBack', 'setPramBack']),
            borrarformulario(){
                this.$v.usuario.$model = ''
                this.$v.tipoUsuario.$model = ''
                this.$v.password.$model = ''
                this.$v.password2.$model = ''
                this.$v.apellido.$model = ''
                this.$v.apellido2.$model = ''
                this.$v.nombre.$model = ''
                this.$v.telefono.$model = ''
            },
            enviar(){
                this.editarUsuario()
            },
            async editarUsuario(){
                this.cargando = true;
                let jws = KJUR.jws.JWS; //Objeto para tratar JWT
                let secret = "Alvaro1234@asdfgh"; // Clave privada

                //crear JWT
                let header = {alg: "HS256", typ: "JWT"}; //Cabecera de JWT
                let data = {
                    id: localStorage.getItem('usuarioID'),
                    usuarioID: this.$route.params.id,
                    tipo: this.$v.tipoUsuario.$model,
                    clave: sha256(this.$v.password.$model),
                    telefono: this.$v.telefono.$model,
                    func: 'editarUsuario',
                };

                let jwt = jws.sign("HS256", header, data, {utf8: secret}); //Firma de JWT

                let formd = new FormData();
                formd.append("jwt", jwt)
                console.log(jwt)

                let response = await axios.post(this.HOST+'server/api.php', formd)
                let datos = response.data


                if (datos.status) {
                    console.log("entra")
                    //verify JWT
                    let token = datos.token;
                    let isValid = jws.verifyJWT(token, {utf8: secret}, {alg: ["HS256"]})

                    if (isValid) { //Valido, decodificamos el jwt
                        let decoded = decode(token)

                        //Comprobar status
                        if (decoded.status) { //Datos como los esperabamos

                            if (decoded.editado){ //Si esta creado
                                this.mensaje = '* USUARIO EDITADO CORRECTAMENTE *'
                                this.error = false
                                this.cargando = false
                                this.control = true
                                setTimeout(()=> this.control = false, 2000)
                                setTimeout(()=> this.mensaje = '', 2000)
                                setTimeout(()=> router.push({name: 'ConsultarUsuario', params:{id:this.$route.params.id}}), 2000)
                            }else{ //Si no esta creado
                                this.mensaje = '* EL USUARIO NO HA PODIDO EDITARSE *'
                                this.error = true
                                this.cargando = false
                            }

                        } else { //Datos erroneos
                            this.mensaje = 'Upss... prueba otra vez'
                            this.error = true
                            this.cargando = false
                            this.control = true
                            setTimeout(()=> this.control = false, 2000)
                            setTimeout(()=> this.mensaje = '', 2000)
                        }

                    } else { //Si no es valido
                        this.mensaje = 'Upss... prueba otra vez'
                        this.error = true
                        this.cargando = false
                        this.control = true
                        setTimeout(()=> this.control = false, 2000)
                        setTimeout(()=> this.mensaje = '', 2000)
                    }

                }else{
                    this.control = true
                    if (datos.mensaje !== null){
                        this.error = true
                        this.mensaje = datos.mensaje;
                    }else{
                        this.error = true
                        this.mensaje = 'Server KO... intentelo de nuevo'
                    }
                    setTimeout(()=> this.control = false, 2000)
                    setTimeout(()=> this.mensaje = '', 2000)
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
        padding: 30px 20px;
        font-size: 25px;
    }
    .separador{
        background-color: white;
        width: 100%;
        height: 3px;
        border-radius: 18px 18px 18px 18px;
    }
    .mensaje{
        letter-spacing: 3px;
    }
    .alerta{
        border-radius: 30px 30px 30px 30px;
    }
</style>