<template>
    <div>
        <!-- FILTRAR MOVIL -->
        <v-toolbar
                color="#023059"
                dark
                height="250px"
                class="d-block d-sm-block d-md-none"
        >
            <v-icon>mdi-filter</v-icon>
            <v-toolbar-title>
                <!-- FILTROS DISPONIBLES -->
                <v-row class="ml-5 mt-8 text-center">

                    <!-- CATEGORIA -->
                    <v-col cols="6">
                        <v-select
                                :items="categorias"
                                label="Categoría"
                                dark
                                color="success"
                                v-model="categoria"
                                class="ml-5 mr-5"
                        ></v-select>
                    </v-col>

                    <!-- AUTORES -->
                    <v-col cols="6">
                        <v-select
                                :items="autores"
                                label="Autor"
                                dark
                                color="success"
                                v-model="autor"
                                class="ml-5 mr-5"
                        ></v-select>
                    </v-col>

                    <!-- ESTADO -->
                    <v-col cols="6">
                        <v-select
                                :items="estados"
                                label="Estado"
                                dark
                                color="success"
                                v-model="estado"
                                class="ml-5 mr-5"
                        ></v-select>
                    </v-col>

                    <!-- FECHA DE PUBLICACION -->
                    <v-col cols="6">
                        <v-text-field
                                v-model="fecha"
                                label="Fecha"
                                type="date"
                                color="success"
                                dark
                                :max="hoy"
                        ></v-text-field>
                    </v-col>

                    <!-- BOTONES -->
                    <v-col cols="12">
                        <v-btn
                                color="success"
                                small
                                dark
                                @click="filtrar()"
                        >
                            <v-icon>mdi-check</v-icon>
                        </v-btn>
                        <v-btn
                                color="error"
                                small
                                dark
                                class="ml-5"
                                @click="borrar()"
                        >
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-toolbar-title>
        </v-toolbar>

        <!-- FILTRAR ESCRITORIO -->
        <v-toolbar
                :collapse="!collapseOnScroll"
                color="#023059"
                dark
                absolute
                class="d-none d-sm-none d-md-block"
        >
            <v-icon>mdi-filter</v-icon>
            <!-- FILTROS DISPONIBLES -->
            <v-toolbar-title>
                <v-row class="ml-5 mt-8">

                    <!-- CATEGORIA -->
                    <v-col cols="2">
                        <v-select
                                :items="categorias"
                                label="Categoría"
                                dark
                                color="success"
                                v-model="categoria"
                                class="ml-5 mr-5"
                        ></v-select>
                    </v-col>

                    <!-- AUTORES -->
                    <v-col cols="2">
                        <v-select
                                :items="autores"
                                label="Autor"
                                dark
                                color="success"
                                v-model="autor"
                                class="ml-5 mr-5"
                        ></v-select>
                    </v-col>

                    <!-- ESTADO -->
                    <v-col cols="2">
                        <v-select
                                :items="estados"
                                label="Estado"
                                dark
                                color="success"
                                v-model="estado"
                                class="ml-5 mr-5"
                        ></v-select>
                    </v-col>

                    <!-- FECHA DE PUBLICACION -->
                    <v-col cols="2">
                        <v-text-field
                                v-model="fecha"
                                label="Fecha"
                                type="date"
                                color="success"
                                dark
                                :max="hoy"
                        ></v-text-field>
                    </v-col>

                    <!-- BOTONES -->
                    <v-col cols="1">
                        <v-btn
                                color="success"
                                small
                                dark
                                @click="filtrar()"
                        >
                            FILTRAR
                        </v-btn>
                        <v-btn
                                color="error"
                                small
                                dark
                                class="ml-5"
                                @click="borrar()"
                        >
                            BORRAR
                        </v-btn>
                    </v-col>
                </v-row>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <!-- FLECHA PARA EXTENDER O ENCOGER -->
            <v-icon
                    @click="collapseOnScroll = !collapseOnScroll"
                    v-if="!collapseOnScroll"
            >mdi-arrow-right-bold</v-icon>
            <v-icon
                    @click="collapseOnScroll = !collapseOnScroll"
                    v-if="collapseOnScroll"
            >mdi-arrow-left-bold</v-icon>
        </v-toolbar>

        <!-- ARTICULOS -->
        <div class="pa-5">

            <!-- TITULO -->
            <v-row class="text-center mb-8">
                <v-col cols="0" md="4"></v-col>
                <v-col cols="12" md="4" class="pa-5">
                    <div class="titular">CONSULTAR ARTÍCULOS</div>
                </v-col>
                <v-col cols="0" md="4"></v-col>
            </v-row>

            <!-- ALERTA -->
            <v-row v-if="control && (this.mensajeError || !articulos)" class="mensaje">
                <v-col cols="0" md="3"></v-col>
                <v-col cols="12" md="6">
                    <!-- OK -->
                    <v-alert
                            class="alerta"
                            type="success"
                            v-if="this.mensajeError && !error"
                            dismissible
                    >
                        {{mensajeError}}
                    </v-alert>

                    <!-- NOK -->
                    <v-alert
                            class="alerta"
                            type="error"
                            v-if="this.mensajeError && error"
                            dismissible
                    >
                        {{mensajeError}}
                    </v-alert>
                    <v-alert
                            class="alerta"
                            type="error"
                            v-if="!articulos"
                            dismissible
                    >
                        {{mensaje}}
                    </v-alert>
                </v-col>
                <v-col cols="0" md="3"></v-col>
            </v-row>

            <!-- LISTA DE CADA ARTÍCULO -->
            <router-link
                    v-for="articulo in articulos"
                    :to="{
                            name: 'ValidarArticulos',
                            params:
                                {id: articulo.id}}">
                <v-row class="text-center usuario mb-4">

                    <!-- TITULAR -->
                    <v-col cols="12" md="8">
                        {{articulo.titular}}
                    </v-col>

                    <!-- FECHA DE PUBLICACION -->
                    <v-col cols="6" md="2">
                        {{articulo.fecha}}
                    </v-col>

                    <!-- AUTOR -->
                    <v-col cols="6" md="2" class="text-right">
                        {{articulo.autor}}
                        <v-icon color="white">mdi-account</v-icon>
                    </v-col>
                </v-row>
            </router-link>
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'
    import KJUR from 'jsrsasign'
    import decode from 'jwt-decode'
    import axios from 'axios'

    export default {
        name: "ConsultarArticulos",
        data(){
            return{
                cargando:false,
                control: true,
                collapseOnScroll: false,
                categorias: ['Politica'],
                categoria: '',
                autores: ['PEDRO', 'JUAN', 'ALVARO', 'LIDIA', 'JOSE'],
                autor: '',
                estados: ['publicado', 'despublicado'],
                estado:'',
                fecha:'',
                hoy: '',
                articulos:{}
            }
        },
        created() {
            let date = new Date()
            let year = date.getFullYear()
            let mes = date.getMonth()
            let day = date.getDate()
            if(mes<10){
                mes='0'+(mes+1);
            }
            if (day<10){
                day='0'+(day);
            }
            this.hoy = year+'-'+mes+'-'+day
            this.obtenerArticulos();
            this.obtenerUsuarios()
            setTimeout(()=> this.control = false, 3000)
        },
        destroyed(){
            this.setMensajeError(null)
        },
        computed:{
          ...mapState(['HOST', 'mensajeError', 'error'])
        },
        methods:{
            ...mapMutations(['setMensajeError']),
            async obtenerArticulos(){
                this.cargando = true;
                let jws = KJUR.jws.JWS; //Objeto para tratar JWT
                let secret = "Alvaro1234@asdfgh"; // Clave privada

                //crear JWT
                let header = {alg: "HS256", typ: "JWT"}; //Cabecera de JWT
                let data = {
                    id: localStorage.getItem('usuarioID'),
                    func: 'consultarArticulos',
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
            async obtenerUsuarios(){
                this.cargando = true;
                let jws = KJUR.jws.JWS; //Objeto para tratar JWT
                let secret = "Alvaro1234@asdfgh"; // Clave privada

                //crear JWT
                let header = {alg: "HS256", typ: "JWT"}; //Cabecera de JWT
                let data = {
                    id: localStorage.getItem('usuarioID'),
                    func: 'consultarUsuarios',
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
                                let cont=0
                                let temp=[]
                                for(const prop in decoded.data){
                                    temp[prop] = decoded.data[prop].usuario
                                    cont++;
                                }
                                this.autores = temp
                            }else{ //Si no esta creado
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
            async filtrar(){
                this.cargando = true;
                let jws = KJUR.jws.JWS; //Objeto para tratar JWT
                let secret = "Alvaro1234@asdfgh"; // Clave privada

                //crear JWT
                let header = {alg: "HS256", typ: "JWT"}; //Cabecera de JWT
                let data = {
                    id: localStorage.getItem('usuarioID'),
                    func: 'filtrarArticulos',
                    autor: this.autor,
                    fecha: this.fecha,
                    categoria: this.categoria,
                    estado: this.estado
                };

                let jwt = jws.sign("HS256", header, data, {utf8: secret}); //Firma de JWT

                let formd = new FormData();
                formd.append("jwt", jwt)
                console.log(jwt)

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

                            if (decoded.data){ //Si se ha encontrado
                                this.articulos = decoded.data
                                this.cargando = false
                            }else{ //Si no se ha encontrado
                                this.articulos= null
                                this.mensaje = 'Sin resultados'
                                this.cargando = false
                                this.error = true
                                this.control = true
                                setTimeout(()=> this.control = false, 3000)
                            }

                        } else { //Datos erroneos
                            this.mensaje = 'Upss... prueba otra vez'
                            this.cargando = false
                            this.error = true
                            this.control = true
                            setTimeout(()=> this.control = false, 3000)
                        }

                    } else { //Si no es valido
                        this.mensaje = 'Upss... prueba otra vez'
                        this.cargando = false
                        this.error = true
                        this.control = true
                        setTimeout(()=> this.control = false, 3000)
                    }

                }else{
                    this.error = true
                    this.control = true
                    if (datos.mensaje !== null){
                        this.mensaje = datos.mensaje;
                    }else{
                        this.mensaje = 'Server KO... intentelo de nuevo'
                    }

                    setTimeout(()=> this.control = false, 3000)
                    this.cargando = false
                }
            },
            borrar(){
                this.autor= ''
                this.fecha = ''
                this.categoria = ''
                this.estado = ''
                this.obtenerArticulos()
            },
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
    .usuario{
        border-radius: 10px 10px 10px 10px;
        background-color: rgba(2, 64, 89, 0.91);
        color: white;
        letter-spacing: 4px;
        padding: 2px;
    }
    .usuario:hover{
        background-color: rgba(2, 64, 89, 0.92);
    }
    a{
        text-decoration: none;
    }
    .mensaje{
        letter-spacing: 3px;
    }
    .alerta{
        border-radius: 30px 30px 30px 30px;
    }
</style>