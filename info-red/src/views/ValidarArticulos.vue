<template>
    <div class="white--text c">
        <!-- ACCIONES -->
        <div class="acciones">
            <v-row class="text-center">
                <v-col cols="4" md="4">
                    <v-btn
                        color="info"
                        @click="$router.push({name: 'EditarArticulo', params:{id: $route.params.id}})"
                        v-if="articulo.autor === user.usuario || user.tipo === 'administrador'"
                    >
                        EDITAR
                    </v-btn>
                </v-col>
                <v-col cols="4" md="4" v-if="user.tipo === 'administrador' && articulo.estado === 'despublicado'">
                    <v-btn
                        color="success"
                        @click="publicar()"
                    >
                        PUBLICAR
                    </v-btn>
                </v-col>
                <v-col cols="4" md="4" v-if="user.tipo === 'administrador' && articulo.estado === 'publicado'">
                    <v-btn
                        color="accent"
                        @click="despublicar()"
                    >
                        DESPUBLICAR
                    </v-btn>
                </v-col>
                <v-col cols="4" md="4" v-if="user.tipo === 'administrador'">
                    <v-btn
                    color="error"
                    @click="dialog = true"
                    >
                        BORRAR
                    </v-btn>
                </v-col>
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
        </div>

        <!-- DIALOG -->
        <v-dialog
                v-model="dialog"
                max-width="290"
        >
            <div class="tarjeta">
                <v-card class="text-center" color="secondary" dark>
                    <v-card-text class="headline titulo pt-3 white--text">
                        ¿QUIERES ELIMINAR EL ARTICULO?
                    </v-card-text>

                    <v-card-text class="text-center">
                        <v-btn
                                color="success darken-1"
                                @click="eliminar()"
                        >
                            SI
                        </v-btn>
                        <v-btn
                                color="error darken-1"
                                @click="dialog = false"
                        >
                            NO
                        </v-btn>
                    </v-card-text>
                </v-card>
            </div>
        </v-dialog>

        <!-- ARTÍCULO -->
        <div v-if="!cargando" class="content align-content-center">
                <v-row>
                    <v-col cols="0" md="1"></v-col>
                    <v-col cols="12" md="10">
                        <div class="cajonTarjeta">
                        <v-card
                            class="tarjeta pa-3"
                            dark
                        >
                            <v-card-text align="center">
                                <div class="foto">
                                    <img :src="this.HOST+'server/img/'+articulo.portada">
                                </div>
                            </v-card-text>
                            <v-card-title class="headline">{{articulo.titular}}</v-card-title>
                            <v-card-subtitle class="title">{{articulo.subtitular}}</v-card-subtitle>
                            <v-card-text class="text-justify informacion" v-html="articulo.articulo">
                            </v-card-text>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="6" md="2">
                                        Categoria: {{articulo.categoria}}
                                    </v-col>
                                    <v-col cols="6" md="2">
                                        Autor: {{articulo.autor}}
                                    </v-col>
                                    <v-col cols="6" md="2">
                                        Estado: {{articulo.estado}}
                                    </v-col>
                                    <v-col cols="6" md="3">
                                        Fecha: {{articulo.fecha}}
                                    </v-col>
                                    <v-col cols="6" md="2">
                                        Publicado por: {{articulo.publicado}}
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                        </div>
                    </v-col>
                    <v-col cols="0" md="1"></v-col>
                </v-row>
        </div>

        <!-- LOADER -->
        <div v-if="cargando" class="loader">
            <Loader color="#4ebfb4" height="50px" width="8px"></Loader>
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'
    import KJUR from 'jsrsasign'
    import decode from 'jwt-decode'
    import axios from 'axios'
    import router from '@/router'
    import Loader from 'vue-spinner/src/ScaleLoader'
    export default {
        name: "ValidarArticulos",
        data(){
            return{
                dialog: false,
                cargando: '',
                mensaje: '',
                error: '',
                control: true,
                articulo:{}
            }
        },
        computed: {
            ...mapState(['user', 'HOST'])
        },
        components:{
            Loader
        },
        created() {
            this.obtenerArticulo()
        },
        mounted(){
            this.setBack(true)
            this.setRutaBack('ConsultarArticulos')
            window.scroll(0,0)
        },
        destroyed(){
            this.setBack(false)
            this.setRutaBack('')
        },
        methods:{
            ...mapMutations(['setBack', 'setRutaBack', 'setMensajeError']),
            async obtenerArticulo(){
                this.cargando = true;
                let jws = KJUR.jws.JWS; //Objeto para tratar JWT
                let secret = "Alvaro1234@asdfgh"; // Clave privada

                //crear JWT
                let header = {alg: "HS256", typ: "JWT"}; //Cabecera de JWT
                let data = {
                    articuloID: this.$route.params.id,
                    func: 'consultarArticulo',
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
                                router.push({name: 'NotFound'})
                                this.error = true;
                                this.cargando = false
                                this.mensaje= 'No hay datos que mostrar'
                                setTimeout(()=> this.control = false, 4000)
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
            async eliminar(){
                this.dialog = false

                this.cargando = true;
                let jws = KJUR.jws.JWS; //Objeto para tratar JWT
                let secret = "Alvaro1234@asdfgh"; // Clave privada

                //crear JWT
                let header = {alg: "HS256", typ: "JWT"}; //Cabecera de JWT
                let data = {
                    id: localStorage.getItem('usuarioID'),
                    articuloID: this.$route.params.id,
                    func: 'eliminarArticulo',
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

                            if (decoded.eliminado){ //Si se ha eliminado
                                this.error = false;
                                this.articulo = decoded.data
                                this.setMensajeError("ARTICULO ELIMINADO CON EXITO")
                                this.cargando = false
                                router.push({name: 'ConsultarArticulos'})
                            }else{ //Si no se ha eliminado
                                this.error = true;
                                this.cargando = false
                                this.mensaje= 'No se ha podido eliminar el articulo'
                                setTimeout(()=> this.control = false, 4000)
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
            async publicar(){
                this.cargando = true;
                let jws = KJUR.jws.JWS; //Objeto para tratar JWT
                let secret = "Alvaro1234@asdfgh"; // Clave privada

                //crear JWT
                let header = {alg: "HS256", typ: "JWT"}; //Cabecera de JWT
                let data = {
                    id: localStorage.getItem('usuarioID'),
                    articuloID: this.$route.params.id,
                    func: 'publicarArticulo',
                };

                let jwt = jws.sign("HS256", header, data, {utf8: secret}); //Firma de JWT
                console.log(jwt)

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

                            if (decoded.publicado){ //Si se ha eliminado
                                this.error = false;
                                this.articulo = decoded.data
                                this.setMensajeError("ARTICULO PUBLICADO CON EXITO")
                                this.cargando = false
                                router.push({name: 'ConsultarArticulos'})
                            }else{ //Si no se ha eliminado
                                this.error = true;
                                this.cargando = false
                                this.mensaje= 'No se ha podido publicar el articulo'
                                setTimeout(()=> this.control = false, 4000)
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
            async despublicar(){
                this.cargando = true;
                let jws = KJUR.jws.JWS; //Objeto para tratar JWT
                let secret = "Alvaro1234@asdfgh"; // Clave privada

                //crear JWT
                let header = {alg: "HS256", typ: "JWT"}; //Cabecera de JWT
                let data = {
                    id: localStorage.getItem('usuarioID'),
                    articuloID: this.$route.params.id,
                    func: 'despublicarArticulo',
                };

                let jwt = jws.sign("HS256", header, data, {utf8: secret}); //Firma de JWT
                console.log(jwt)

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

                            if (decoded.despublicado){ //Si se ha eliminado
                                this.error = false;
                                this.articulo = decoded.data
                                this.setMensajeError("ARTICULO DESPUBLICADO CON EXITO")
                                this.cargando = false
                                router.push({name: 'ConsultarArticulos'})
                            }else{ //Si no se ha eliminado
                                this.error = true;
                                this.cargando = false
                                this.mensaje= 'No se ha podido despublicar el articulo'
                                setTimeout(()=> this.control = false, 4000)
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
    .acciones{
        position: fixed;
        z-index: 2;
        width: 100%;
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