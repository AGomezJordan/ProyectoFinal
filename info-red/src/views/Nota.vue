<template>
    <div class="white--text c">
        <div class="content align-content-center">
            <div class="cajonTarjeta">
                <v-card
                    class="tarjeta pa-3"
                    dark
                >
                    <v-card-title class="headline">{{nota.titulo}}</v-card-title>
                    <v-card-text class="text-justify informacion" v-html="nota.nota">
                    </v-card-text>
                </v-card>
            </div>
        </div>
    </div>
</template>

<script>
    import KJUR from 'jsrsasign'
    import router from '@/router'
    import Loader from 'vue-spinner/src/ScaleLoader'
    import decode from 'jwt-decode'
    import axios from 'axios'
    import {mapState, mapMutations} from 'vuex'
    export default {
        name: "Nota",
        data(){
          return{
              nota: {}
          }
        },
        computed: {
            ...mapState(['back', 'HOST'])
        },
        mounted(){
            this.setBack(true)
            window.scroll(0,0)
        },
        async created(){
            this.setBack(true)
            this.cargando = true;
            let jws = KJUR.jws.JWS; //Objeto para tratar JWT
            let secret = "Alvaro1234@asdfgh"; // Clave privada

            //crear JWT
            let header = {alg: "HS256", typ: "JWT"}; //Cabecera de JWT
            let data = {
                id: localStorage.getItem('usuarioID'),
                notaID: this.$route.params.id,
                func: 'consultarNota',
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

                        if (decoded.data){ //Si hay datos
                            this.nota = decoded.data
                            this.cargando = false
                        }else{ //Si no hay datos
                            this.cargando = false
                            this.mensaje= 'No hay datos que mostrar'
                            this.control = true
                            setTimeout(()=> this.control = false, 4000)
                             router.push({name: 'NotFound'})
                        }

                    } else { //Datos erroneos
                        this.mensaje = 'Upss... prueba otra vez'
                        this.cargando = false
                        this.control = true
                        setTimeout(()=> this.control = false, 4000)
                    }

                } else { //Si no es valido
                    this.mensaje = 'Upss... prueba otra vez'
                    this.cargando = false
                    this.control = true
                    setTimeout(()=> this.control = false, 4000)
                }

            }else{
                if (datos.mensaje !== null){
                    this.mensaje = datos.mensaje;
                    this.control = true
                    setTimeout(()=> this.control = false, 4000)
                }else{
                    this.mensaje = 'Server KO... intentelo de nuevo'
                    this.control = true
                    setTimeout(()=> this.control = false, 4000)
                }
                this.cargando = false
            }
        },
        destroyed(){
            this.setBack(false)
        },
        methods:{
            ...mapMutations(['setBack', 'setMensajeError', 'setError']),
        }
    }
</script>

<style scoped>
    .c{
        display: flex;
        height: 100%;
    }
    .content{
        padding: 2%;
        width: 100%;
    }
    .foto img{
        width: 100%;
        height: 100%;
    }
    .cajonTarjeta, .foto{
        overflow: hidden;
        border-radius: 18px 18px 18px 18px;
    }
    .tarjeta{
        background-color: rgba(2, 64, 89, 0.90);
    }
    .informacion{
        letter-spacing: 2px;
        line-height: 25px;
        font-size: 1.08em;
    }
</style>