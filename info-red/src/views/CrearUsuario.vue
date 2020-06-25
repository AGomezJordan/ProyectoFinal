<template>
    <div>
        <!-- TITULO -->
        <v-row>
            <v-col cols="0" md="4"></v-col>
            <v-col cols="12" md="4">
                <div class="titular text-center">CREAR USUARIO</div>
            </v-col>
            <v-col cols="0" md="4"></v-col>
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
                                          v-model="$v.usuario.$model"
                                          :counter="10"
                                          :rules="usuarioRules"
                                          label="Usuario"
                                          color="success"
                                          dark
                                  ></v-text-field>
                              </v-col>

                              <!-- TIPO DE USUARIO -->
                              <v-col cols="12" md="6">
                                  <v-select
                                          :items="tipoUsuarios"
                                          label="Tipo"
                                          dark
                                          color="success"
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
                                            v-model="$v.apellido.$model"
                                            counter
                                            :rules="apellidoRules"
                                            label="Primer apellido"
                                            color="success"
                                            dark
                                    ></v-text-field>
                                </v-col>

                                <!-- APELLIDO 2 -->
                                <v-col cols="12" md="6">
                                    <v-text-field
                                            v-model="$v.apellido2.$model"
                                            counter
                                            :rules="apellidoRules"
                                            label="Segundo apellido"
                                            color="success"
                                            dark
                                    ></v-text-field>
                                </v-col>

                                <!-- NOMBRE -->
                                <v-col cols="12" md="6">
                                    <v-text-field
                                            v-model="$v.nombre.$model"
                                            counter
                                            :rules="nombreRules"
                                            label="Nombre"
                                            color="success"
                                            dark
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
    export default {
        name: "CrearUsuario",
        data(){
            return{
                usuario: '',
                password: '',
                password2: '',
                tipoUsuarios: ['Administrador','Escritor'],
                tipoUsuario: '',
                apellido: '',
                apellido2: '',
                nombre: '',
                telefono:'',
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
        methods:{
            borrarformulario(){
                alert("ENVIADO")
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
                alert("ENVIADO")
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
</style>