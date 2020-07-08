<template>
  <v-app>
      <!-- CABECERA -->
    <v-app-bar
            color="primary"
            dense
            dark
            app
            height="70"
    >
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <img  width="60" src="@/assets/logo.png" />
      <v-icon v-if="back" class="white--text ml-4" @click="atras()">mdi-reply</v-icon>
      <div class="frase">
      <div class="texto d-none d-sm-none d-md-block">
          <span v-if="this.user.tipo == null">LA NUEVA GENERACIÓN</span>
          <span v-if="this.user.tipo != null">ADMINISTRACIÓN</span>
      </div>
      </div>
      <v-spacer></v-spacer>
      <v-btn v-if="this.user.tipo == null" icon @click="mostrar=!mostrar">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-text-field
              v-if="mostrar"
              v-model="buscar"
              hide-details
      ></v-text-field>
    </v-app-bar>

      <!-- MENU LAERAL OCULTO NO LOGEADO -->
    <v-navigation-drawer
              v-model="drawer"
              app
              dark
              temporary
              clipped
              color="secondary"
              v-if="this.user.tipo == null"
      >
          <v-list
                  dense
          >
              <v-list-item-group
                      active-class="success"
              >
                  <v-list-item-title class="text-center title">MENÚ</v-list-item-title>
                  <div class="linea"></div>
                  <div class="text-center mb-5">
                      <v-btn @click="abrirLogin()" color="success" class="btn">ADMINISTRACIÓN</v-btn>
                  </div>
                  <div class="categorias">
                  <v-list-item v-for="n in 20" :key="n">
                      <v-list-item-title class="text-center title ma-4">CATEGORIA {{n}}</v-list-item-title>
                  </v-list-item>
                  </div>

              </v-list-item-group>
          </v-list>
      </v-navigation-drawer>

      <!-- INICIO DE SESION -->
      <v-dialog
              v-model="this.dialogLogin"
              max-width="290"
              persistent
      >
          <div class="tarjeta">
              <form @submit.prevent="login()">
              <v-card class="text-center" color="secondary" dark>
              <v-card-text class="headline titulo pt-3 white--text">ADMINISTRACIÓN</v-card-text>
              <v-card-text class="mensaje" v-if="this.mensajeError">{{mensajeError}}</v-card-text>
              <v-card-text>
                  <v-text-field
                          v-model="$v.usuario.$model"
                          :counter="10"
                          :rules="nameRules"
                          label="Usuario"
                          required
                  ></v-text-field>

                  <v-text-field
                          v-model="$v.password.$model"
                          counter
                          :rules="passRules"
                          label="Constraseña"
                          type="password"
                          required
                  ></v-text-field>
              </v-card-text>

              <v-card-text class="text-center">
                  <v-row>
                      <v-col cols="6">
                          <v-btn
                                  :disabled="$v.$invalid"
                                  color="success darken-1"
                                  type="submit"
                          >
                              LOGIN
                          </v-btn>
                      </v-col>
                      <v-col cols="6">
                          <v-btn
                                  color="error darken-1"
                                  @click="cerrarLogin()"
                          >
                              CANCELAR
                          </v-btn>
                      </v-col>
                  </v-row>
              </v-card-text>
              </v-card>
              </form>
          </div>
      </v-dialog>

      <!-- MENU LAERAL OCULTO lOGEADO -->
      <v-navigation-drawer
              v-model="drawer"
              app
              dark
              temporary
              clipped
              color="secondary"
              v-if="this.user.tipo != null"
              overlay-color="#000"
      >
          <v-list
                  dense
          >
              <v-list-item-group
                      active-class="success"
              >
                  <v-list-item-title class="text-center title">MENÚ</v-list-item-title>
                  <div class="linea"></div>
                  <div class="text-center mb-5">
                      <v-btn @click="dialoga = true" color="success" class="btn">CERRAR SESION</v-btn>
                  </div>
                  <MenuUsuario></MenuUsuario>

              </v-list-item-group>
          </v-list>
      </v-navigation-drawer>

      <!-- CERRAR SESION -->
    <v-dialog
              v-model="dialoga"
              max-width="290"
      >
        <div class="tarjeta">
          <v-card class="text-center" color="secondary" dark>
              <v-card-text class="headline titulo pt-3 white--text">
                  ¿QUIERES CERRAR LA SESIÓN?
              </v-card-text>

              <v-card-text class="text-center">
                  <v-btn
                          color="success darken-1"
                          @click="logOut()"
                  >
                      SI
                  </v-btn>
                  <v-btn
                          color="error darken-1"
                          @click="dialoga = false"
                  >
                      NO
                  </v-btn>
              </v-card-text>
          </v-card>
        </div>
      </v-dialog>

      <!-- APP -->
    <v-main :class="{'content':this.user.tipo == null, 'contentAdmin': this.user.tipo != null}">
        <RouterView></RouterView>
    </v-main>
  </v-app>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'
import { validationMixin } from 'vuelidate'
import { required, maxLength, minLength} from 'vuelidate/lib/validators'
import MenuUsuario from "./components/menuUsuario";

export default {
    name: 'App',
    components: {MenuUsuario},
    data(){
        return{
            drawer:false,
            dialoga: false,
            buscar:'',
            mostrar:false,
            usuario: '',
            password: '',
            nameRules: [
                v => !!v || 'Usuario requerido',
                v => (v && v.length <= 10) || 'Usuario maximo 10 caracteres',
            ],
            passRules: [
                v => !!v || 'Contraseña requerida',
                v => (v && v.length >= 8) || 'Contraseña minimo 8 caracteres',
            ]
        }
    },
    validations:{
        usuario:{required, maxLength:maxLength(10)},
        password: {required, minLength:minLength(8)},
    },
    created(){
        this.setBack(false)
    },
    mounted(){
        this.setBack(false)
    },
    computed:{
          ...mapState(['back', 'admin', 'user', 'dialogLogin', 'mensajeError'])
    },
    methods:{
        ...mapMutations(['setBack', 'setAdmin', 'setDialogLogin']),
        ...mapActions(['iniciarSesion', 'cerrarSesion']),
        atras(){
            this.$router.go(-1)
        },
        login(){
            this.iniciarSesion({
                usuario: this.$v.usuario.$model,
                clave: this.$v.password.$model
            })
            this.$v.usuario.$model = null;
            this.$v.password.$model = null;
        },
        logOut(){
            this.dialoga = false
            this.cerrarSesion()
        },
        abrirLogin(){
            this.setDialogLogin(true)
        },
        cerrarLogin(){
            this.setDialogLogin(false)
        }
    }
};
</script>
<style scoped>
    ::-webkit-scrollbar {
        display: none;
    }
    .frase{
        width: 100%;
        text-align: center;
    }
    .texto{
        letter-spacing: 6px;
        font-size: 30px;
    }
    .content{
        overflow: hidden;
        background-image:url("assets/fondo1.jpg") ;
        background-repeat: repeat-y ;
    }
    .contentAdmin{

        overflow: hidden;
        background-image:url("assets/fondoAdmin.jpg") ;
        background-repeat: repeat-y ;
    }
    .linea{
        width: 100%;
        height: 1.5px;
        background-color: #4ebfb4;
        margin-bottom: 30px;
        margin-top: 5px;
    }
    .btn{
        border-radius: 22px 22px 22px 22px;
        box-shadow: 0px 0px 39px -14px rgba(0,0,0,0.75);
    }
    .tarjeta{
        overflow: hidden;
        border-radius: 24px 24px 24px 24px;
    }
    .titulo{
        text-align: center;
    }
    .mensaje{
        font-size: 10px;
        letter-spacing: 3px;
        color: #f44336;
    }
</style>