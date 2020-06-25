<template>
    <div>
        <v-row>
            <v-col cols="0" md="4"></v-col>
            <v-col cols="12" md="4">
                <div class="titular text-center">CREAR USUARIO</div>
            </v-col>
            <v-col cols="0" md="4"></v-col>
        </v-row>

        <v-row>
            <v-col cols="0" md="2"></v-col>
            <v-col cols="12" md="8">
                <form>
                    <v-row class="formulario">
                        <v-col>
                          <v-row>
                              <v-col cols="12">
                                  <span class="texto">
                                      DATOS DE USUARIO
                                  </span>
                                  <div class="separador"></div>
                              </v-col>
                          </v-row>
                          <v-row>
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
                              <v-col cols="12" md="6">
                                  <v-select
                                          :items="tipoUsuarios"
                                          label="Tipo"
                                          dark
                                          color="success"
                                          v-model="$v.tipoUsuario.$model"
                                  ></v-select>
                              </v-col>
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
                ]
            }
        },
        validations:{
            usuario:{required, maxLength:maxLength(10)},
            password:{required, minLength:minLength(8)},
            password2: {required, sameAs:sameAs('password')},
            tipoUsuario: {required}
        },
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