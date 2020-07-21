<template class="tem">
    <div class="white--text c">
        <!-- MENU LATERAL DONDE APARECE INFORMACION DE TWITTER ETC (SOLO EN ESCRITORIO) -->
        <div
            class="menuLateral"
           :class="{'d-none':movil, 'd-sm-none': movil, 'd-md-block': movil}"
        >
            <twitter></twitter>
        </div>
        <!-- CONTENIDO DEL HOME -->
        <div class="content align-content-center" :class="{'escritorio':!movil}">
            <!-- LOADER -->
            <div v-if="cargando" class="loader">
                <ScaleLoader color="#4ebfb4" height="50px" width="8px"></ScaleLoader>
            </div>

            <!-- CONTENIDO -->
            <v-row v-if="!cargando">
                <!-- ARTICULOS -->
                <v-col
                    v-for="articulo in articulos"
                    cols="12"
                    md="6"
                    lg="4"
                >
                    <!-- ARTICULO -->
                    <div class="articulo">
                        <v-card
                            class="tarjeta"
                            dark
                            :to="{
                                name: 'Articulo',
                                params:
                                    {id: articulo.id}}"
                        >
                            <!-- PORTADA -->
                            <v-card-text>
                                <div class="foto">
                                    <img :src="HOST+'server/img/'+articulo.portada">
                                </div>
                            </v-card-text>

                            <!-- TITULAR -->
                            <v-card-text class="text-justify title white--text">
                                {{articulo.titular}}
                            </v-card-text>

                            <!-- FECHA Y CATEGORIA-->
                            <v-card-text>
                                <v-row>
                                    <v-col cols="6" class="text-left">{{articulo.fecha}}</v-col>
                                    <v-col cols="6" class="text-right">{{articulo.categoria}}</v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </div>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
import KJUR from 'jsrsasign'
import decode from 'jwt-decode'
import axios from 'axios'
import ScaleLoader from 'vue-spinner/src/ScaleLoader'
import router from '@/router'
import {mapActions, mapState} from 'vuex'
import Twitter from "../components/twitter";

export default {
  name: 'HomeFiltrado',
    data(){
      return{
          movil: false,
          articulos: {},
          cargando: false
      }
    },
    components: {Twitter, ScaleLoader},
    created() {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            this.movil = true;
        }
        this.obtenerArticulos()
    },
    beforeRouteUpdate(to, from, next){
        console.log(to)
        // this.obtenerArticulos(to.params.categoria)
    },
    methods: {
        ...mapActions(['tweet']),
        async obtenerArticulos(){
            //console.log("obteniendo articulos "+this.$route.params.categoria)
            this.cargando = true;
            let jws = KJUR.jws.JWS; //Objeto para tratar JWT
            let secret = "Alvaro1234@asdfgh"; // Clave privada

            //crear JWT
            let header = {alg: "HS256", typ: "JWT"}; //Cabecera de JWT
            let data = {
                    id: '',
                    func: 'filtrarArticulos',
                    autor: '',
                    fecha: '',
                    categoria: this.$route.params.categoria,
                    estado: ''
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

                        if (decoded.data){ //Si hay articulos
                            this.articulos = decoded.data
                            this.cargando = false
                        }else{ //Si no hay artículos
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
        },
    },
    computed:{
      ...mapState(['HOST'])
    },
}
</script>
<style scoped>
  .c{
      display: flex;
      height: 100%;
  }
  .menuLateral{
      width: 350px;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.50);
      box-shadow: 10px 0px 31px -2px rgba(0,0,0,0.75);
      position: fixed;
  }
    .content{
        padding: 2%;
        width: 100%;
    }
    .escritorio{
        margin-left: 350px;
    }
    .articulo{
        border-radius: 29px 29px 29px 29px;
        overflow: hidden;
    }
      .foto{
          overflow: hidden;
          border-radius: 15px 15px 15px 15px;
      }
      .foto img{
          width: 100%;
          height: 100%;
      }
    .tarjeta{
        background-color: rgba(2, 64, 89, 0.90);
    }
    .tarjeta:hover{
        background-color: rgb(2, 64, 89);
    }
    .loader{
        text-align: center;
        width: 100%;
    }
</style>
