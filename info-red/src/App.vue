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
      <RouterLink :to="{name:'Home'}"><img  width="60" src="@/assets/logo.png" /></RouterLink>
      <v-icon v-if="back" class="white--text ml-4" @click="irAtras()">mdi-reply</v-icon>
      <div class="frase">
      <div class="texto d-none d-sm-none d-md-block">
          <span v-if="this.user.tipo == null">LA NUEVA GENERACIÓN</span>
          <span v-if="this.user.tipo != null">ADMINISTRACIÓN</span>
      </div>
      </div>
      <v-spacer></v-spacer>
        <v-switch v-if="user.tipo !== null" color="success"  dark v-model="modeAdmin" label="LOG"></v-switch>
    </v-app-bar>

      <!-- MENU LAERAL OCULTO NO LOGEADO -->
    <v-navigation-drawer
              v-model="drawer"
              app
              dark
              temporary
              clipped
              color="secondary"
              v-if="user.tipo == null || !modeAdmin"
      >
          <v-list
                  dense
          >
              <v-list-item-group
                      active-class="success"
              >
                  <v-list-item-title class="text-center title">MENÚ</v-list-item-title>
                  <div class="linea"></div>
                  <div class="text-center mb-5" v-if="user.tipo === null">
                      <v-btn @click="abrirLogin()" color="success" class="btn">ADMINISTRACIÓN</v-btn>
                  </div>
                  <div class="text-center mb-5" v-if="user.tipo !== null">
                      <v-btn @click="dialoga = true" color="success" class="btn">CERRAR SESION</v-btn>
                  </div>
                  <div class="categorias">
                  <v-list-item
                      exact-active="false"
                      v-for="categoria in categorias" exact-active-class=""
                      :class="$route.path === '/categoria/'+categoria.nombre ? 'success' : ''"
                      @click="$router.push({path:'/categoria/'+categoria.nombre})"
                  >
                      <v-list-item-title
                        class="text-center title ma-4"
                        style="text-transform: uppercase;"
                        >

                          {{categoria.nombre}}
                      </v-list-item-title>

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
              v-if="this.user.tipo != null && modeAdmin"
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
    <v-main :class="{'content':(this.user.tipo == null || !this.modeAdmin), 'contentAdmin': (this.user.tipo != null && this.modeAdmin)}">
        <RouterView :key="$route.fullPath"></RouterView>
    </v-main>
  </v-app>
</template>

<script>
import KJUR from 'jsrsasign'
import decode from 'jwt-decode'
import axios from 'axios'
import {mapState, mapMutations, mapActions} from 'vuex'
import { validationMixin } from 'vuelidate'
import { required, maxLength, minLength} from 'vuelidate/lib/validators'
import MenuUsuario from "./components/menuUsuario";


export default {
    name: 'App',
    components: {MenuUsuario},
    data(){
        return{
            modeAdmin: true,
            categorias: {},
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
        this.obtenerCategorias()
    },
    mounted(){
        this.setBack(false)
    },
    updated(){

    },
    computed:{
          ...mapState(['back', 'admin', 'user', 'dialogLogin', 'mensajeError', 'HOST'])
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
                admin: "nok"
            };

            let jwt = jws.sign("HS256", header, data, {utf8: secret}); //Firma de JWT
            let formd = new FormData();
            formd.append("jwt", jwt)
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
        ...mapMutations(['setBack', 'setAdmin', 'setDialogLogin']),
        ...mapActions(['iniciarSesion', 'cerrarSesion', 'irAtras']),
        login(){
            this.iniciarSesion({
                usuario: this.$v.usuario.$model,
                clave: this.$v.password.$model
            })
            // setTimeout(()=>this.usuario = null, 3000)
            // setTimeout(()=>this.password = null, 3000)
            // setTimeout(()=>this.nameRules = null, 300)
            // setTimeout(()=>this.passRules = null, 300)
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
        background-attachment: fixed;
        background-size: cover;
        overflow: hidden;
        background-image:url("assets/fondo1.jpg") ;
        background-repeat: repeat-y ;
    }
    .contentAdmin{
        background-attachment: fixed;
        background-size: cover;
        overflow: hidden;
        background-image:url("assets/fondoAdmin.jpg")
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