<template>
    <div>
        <!-- TITULO -->
        <v-row>
            <v-col cols="0" md="4"></v-col>
            <v-col cols="12" md="4">
                <div class="titular text-center">CREAR CATEGORÍA</div>
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
                        :counter="255"
                        label="Descripción"
                        rows="1"
                        color="success"
                        dark
                        :loading="cargando"
                        v-model="$v.descripcion.$model"
                ></v-textarea>
                <v-btn
                    color="success"
                    @click="crear()"
                    :disabled="$v.$invalid"
                >
                    CREAR
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
    import {mapState} from 'vuex'
    import router from '@/router'
    import {required, maxLength} from 'vuelidate/lib/validators'
    export default {
        name: "CrearCategoria",
        data(){
            return{
                cargando: false,
                control: false,
                error: false,
                mensaje: '',
                nombre: '',
                descripcion: '',
                nameRules: [
                    v => !!v || 'Nombre Requerido',
                    v => v.length<20 || 'El nombre no debe de tener mas de 20 caracteres'
                ],
                descripcionRules: [
                    v => !!v || 'Descripción Requerido',
                    v => v.length<255 || 'La descripción no debe de tener mas de 255 caracteres'
                ],
            }
        },
        validations:{
            nombre:{required, maxLength:maxLength(20)},
            descripcion:{required, maxLength:maxLength(255)}
        },
        computed:{
          ...mapState(['HOST'])
        },
        methods:{
            borrarRules(){
                this.nameRules = null
                this.descripcionRules = null
            },
            borrarformulario(){
                this.$v.nombre.$model = ''
                this.$v.descripcion.$model = ''
            },
            async crear(){
                this.control = true
                this.cargando = true;
                let jws = KJUR.jws.JWS; //Objeto para tratar JWT
                let secret = "Alvaro1234@asdfgh"; // Clave privada

                //crear JWT
                let header = {alg: "HS256", typ: "JWT"}; //Cabecera de JWT
                let data = {
                    id: localStorage.getItem('usuarioID'),
                    func: 'crearCategoria',
                    nombre: this.$v.nombre.$model,
                    descripcion: this.$v.descripcion.$model,
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

                            if (decoded.creado){ //Si esta creado
                                this.error=false
                                this.mensaje = 'CATEGORIA CREADA CORRECTAMENTE'
                                this.cargando = false
                                this.borrarRules()
                                this.borrarformulario()
                                setTimeout(()=> this.control = false, 2000)
                                setTimeout(()=> this.mensaje = '', 2000)
                                setTimeout(()=> router.push({name:'Administracion'}), 2000)
                            }else{ //Si no esta creado
                                this.error=true
                                this.mensaje = 'LA CATEGORIA NO HA PODIDO CREARSE'
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