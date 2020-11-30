<template>
    <div>
        <!-- TITULO -->
        <v-row>
            <v-col cols="0" md="4"></v-col>
            <v-col cols="12" md="4">
                <div class="titular text-center">EDITAR NOTA</div>
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
        <v-row class="formulario text-center">
            <v-col cols="0" md="2"></v-col>
            <v-col cols="12" md="8">
                <v-text-field
                        v-model="$v.nombre.$model"
                        :counter="20"
                        :rules="nameRules"
                        label="Nombre"
                        color="success"
                        dark
                        :loading="cargando"
                ></v-text-field>
                <v-textarea
                        auto-grow
                        :rules="descripcionRules"
                        :counter="65535"
                        label="Descripción"
                        rows="1"
                        color="success"
                        dark
                        v-model="$v.descripcion.$model"
                        :loading="cargando"
                ></v-textarea>
                <v-btn
                    color="success"
                    @click="editar()"
                    :disabled="$v.$invalid"
                >
                    EDITAR
                </v-btn>
            </v-col>
            <v-col cols="0" md="2"></v-col>
        </v-row>
    </div>
</template>

<script>
    import KJUR from 'jsrsasign'
    import decode from 'jwt-decode'
    import axios from 'axios'
    import {mapState, mapMutations} from 'vuex'
    import router from '@/router'
    import {required, maxLength} from 'vuelidate/lib/validators'
    export default {
        name: "EditarNota",
        data(){
            return{
                control: false,
                mensaje: '',
                error: false,
                cargando: false,
                nombre: '',
                descripcion: '',
                nameRules: [
                    v => !!v || 'Nombre Requerido',
                    v => v.length<20 || 'El nombre no debe de tener mas de 20 caracteres'
                ],
                descripcionRules: [
                    v => !!v || 'Descripción Requerido',
                    v => v.length<65535 || 'La descripción no debe de tener mas de 65535 caracteres'
                ],
            }
        },
        validations:{
            nombre:{required, maxLength:maxLength(20)},
            descripcion:{required, maxLength:maxLength(65535)}
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
                notaID: this.$route.params.id,
                func: 'consultarNotaEditar',
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
                            let nota = decoded.data
                            this.$v.nombre.$model = nota.titulo
                            this.$v.descripcion.$model = nota.nota

                            this.cargando = false
                        }else{ //Si no hay datos
                            this.cargando = false
                            this.mensaje= 'No hay datos que mostrar'
                            this.control = true
                            setTimeout(()=> this.control = false, 4000)
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
    mounted(){
        this.setBack(true)
        this.setRutaBack('ConsultarNotas')
        window.scroll(0,0)
    },
    destroyed(){
        this.setBack(false)
        this.setRutaBack('')
    },
    methods:{
        ...mapMutations(['setBack', 'setRutaBack']),
        borrarRules(){
            this.nameRules = null
            this.descripcionRules = null
        },
        borrarformulario(){
            this.$v.nombre.$model = ''
            this.$v.descripcion.$model = ''
        },
        async editar(){
            this.control = true
            this.cargando = true;
            let jws = KJUR.jws.JWS; //Objeto para tratar JWT
            let secret = "Alvaro1234@asdfgh"; // Clave privada

            //crear JWT
            let header = {alg: "HS256", typ: "JWT"}; //Cabecera de JWT
            let data = {
                id: localStorage.getItem('usuarioID'),
                func: 'editarNota',
                nombre: this.$v.nombre.$model,
                descripcion: this.$v.descripcion.$model,
                notaID: this.$route.params.id
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

                        if (decoded.editada){ //Si esta creado
                            window.scroll(0,0)
                            this.error=false
                            this.mensaje = 'NOTA EDITADA CORRECTAMENTE'
                            this.cargando = false
                            this.borrarRules()
                            this.borrarformulario()
                            setTimeout(()=> this.control = false, 2000)
                            setTimeout(()=> this.mensaje = '', 2000)
                            setTimeout(()=> router.push({name:'ConsultarNotas'}), 2000)
                        }else{ //Si no esta creado
                            this.error=true
                            this.mensaje = 'LA NOTA NO HA PODIDO EDITARSE'
                            this.cargando = false
                            setTimeout(()=> this.control = false, 2000)
                            setTimeout(()=> this.mensaje = '', 2000)
                        }

                    } else { //Datos erroneos
                        this.error=true
                        this.mensaje = 'Upss... prueba otra vez'
                        this.cargando = false
                        setTimeout(()=> this.control = false, 2000)
                        setTimeout(()=> this.mensaje = '', 2000)
                    }

                } else { //Si no es valido
                    this.error=true
                    this.mensaje = 'Upss... prueba otra vez'
                    this.cargando = false
                    setTimeout(()=> this.control = false, 2000)
                    setTimeout(()=> this.mensaje = '', 2000)
                }

            }else{
                this.error=true
                if (datos.mensaje !== null){
                    this.mensaje = datos.mensaje;
                }else{
                    this.mensaje = 'Server KO... intentelo de nuevo'
                }
                this.cargando = false
                setTimeout(()=> this.control = false, 2000)
                setTimeout(()=> this.mensaje = '', 2000)
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
        padding-top: 30px;
        padding-bottom: 30px;
        font-size: 25px;
    }
</style>