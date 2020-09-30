<template>
    <div class="white--text c">
        <div
                class="menuLateral"
                :class="{'d-none':movil, 'd-sm-none': movil, 'd-md-block': movil}"
        >
            <twitter></twitter>
        </div>
        <div class="content align-content-center" :class="{'escritorio':!movil}">
            <div class="cajonTarjeta" v-if="!cargando">
                <v-card
                    class="tarjeta pa-3"
                    dark
                >
                    <v-card-text align="center">
                        <div class="foto">
                            <img :src="HOST+'server/img/'+articulo.portada">
                        </div>
                    </v-card-text>
                    <v-card-title class="headline">{{articulo.titular}}</v-card-title>
                    <v-card-subtitle class="title">{{articulo.subtitular}}</v-card-subtitle>
                    <v-card-text class="text-justify informacion" v-html="articulo.articulo">
                    </v-card-text>
                    <v-card-text>
                        Autor: {{articulo.autor}}<br>
                        Fecha: {{articulo.fecha}}
                    </v-card-text>
                </v-card>
            </div>

            <!-- LOADER -->
            <div v-if="cargando" class="loader">
                <ScaleLoader color="#4ebfb4" height="50px" width="8px"></ScaleLoader>
            </div>

        </div>
    </div>
</template>

<script>
    import Twitter from "../components/twitter";
    import KJUR from 'jsrsasign'
    import decode from 'jwt-decode'
    import axios from 'axios'
    import ScaleLoader from 'vue-spinner/src/ScaleLoader'
    import {mapState, mapMutations} from 'vuex'
    import router from '@/router'

    export default {
        name: "Articulo",
        data(){
            return{
                movil: false,
                cargando: false,
                articulo: {}
            }
        },
        components: {
            Twitter, ScaleLoader
        },
        computed:{
            ...mapState(['HOST'])
        },
        created() {
            this.setBack(true)
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                this.movil = true;
            }
            this.obtenerArticulo()
        },
        mounted(){
            this.setBack(true)
            window.scroll(0,0)
        },
        destroyed(){
            this.setBack(false)
        },
        methods:{
            ...mapMutations(['setBack']),
            async obtenerArticulo(){
                this.cargando = true;
                let jws = KJUR.jws.JWS; //Objeto para tratar JWT
                let secret = "Alvaro1234@asdfgh"; // Clave privada

                //crear JWT
                let header = {alg: "HS256", typ: "JWT"}; //Cabecera de JWT
                let data = {
                    articuloID: this.$route.params.id,
                    func: 'consultarArticuloPublicado',
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
                                this.error = false;
                                this.articulo = decoded.data
                                this.cargando = false
                            }else{ //Si no hay datos
                                this.error = true;
                                this.cargando = false
                                this.mensaje= 'No hay datos que mostrar'
                                setTimeout(()=> this.control = false, 4000)
                                router.push({name: 'NotFound'})
                            }

                        } else { //Datos erroneos
                            this.error = true;
                            this.mensaje = 'Upss... prueba otra vez'
                            this.cargando = false
                            setTimeout(()=> this.control = false, 4000)
                        }

                    } else { //Si no es valido
                        this.error = true;
                        this.mensaje = 'Upss... prueba otra vez'
                        this.cargando = false
                        setTimeout(()=> this.control = false, 4000)
                    }

                }else{
                    this.error = true;
                    if (datos.mensaje !== null){
                        this.mensaje = datos.mensaje;
                        setTimeout(()=> this.control = false, 4000)
                    }else{
                        this.mensaje = 'Server KO... intentelo de nuevo'
                        setTimeout(()=> this.control = false, 4000)
                    }
                    this.cargando = false
                }
            },
        }
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
    .redimensionarFOTO{
        height: 70%;
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
    .loader{
        text-align: center;
        width: 100%;
    }
</style>