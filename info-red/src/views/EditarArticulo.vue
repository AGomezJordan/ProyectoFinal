<template>
    <div>
        <!-- TITULO -->
        <v-row>
            <v-col cols="0" md="4"></v-col>
            <v-col cols="12" md="4">
                <div class="titular text-center">EDITAR ARTICULO</div>
            </v-col>
            <v-col cols="0" md="4"></v-col>
        </v-row>

        <!-- FORMULARIO -->
        <v-row>
            <v-col cols="0" md="2"></v-col>
            <v-col cols="12" md="8">
                <form>
                <v-row class="formulario">
                    <!-- TITULAR -->
                    <v-col cols="12" md="6">
                        <v-text-field
                                v-model="$v.titular.$model"
                                counter
                                :rules="nameRules"
                                label="Titular"
                                color="success"
                                dark
                        ></v-text-field>
                    </v-col>
                    <!-- SUBTITULAR -->
                    <v-col cols="12" md="6">
                        <v-text-field
                                v-model="$v.subtitular.$model"
                                counter
                                :rules="nameRules"
                                label="SubTitular"
                                color="success"
                                dark
                        ></v-text-field>
                    </v-col>
                    <!-- ARTICULO -->
                    <v-col cols="12">
                        <v-textarea
                                auto-grow
                                :rules="articuloRules"
                                :counter="4294967295"
                                label="Articulo"
                                rows="1"
                                color="success"
                                dark
                                v-model="$v.articulo.$model"
                        ></v-textarea>
                    </v-col>
                    <!-- PORTADA -->
                    <v-col cols="12" md="6">
                        <v-file-input
                                label="Portada"
                                placeholder="Selecciona la portada"
                                prepend-icon="mdi-camera"
                                dark
                                color="success"
                                :rules="portadaRules"
                                @change="validateFoto()"
                                accept="image/jpeg"
                                v-model="portada"
                        ></v-file-input>
                    </v-col>
                    <!-- CATEGORIA -->
                    <v-col cols="12" md="6">
                        <v-select
                                :items="categorias"
                                label="Categoría"
                                dark
                                color="success"
                                v-model="$v.categoria.$model"
                        ></v-select>
                    </v-col>
                    <!-- BOTONES -->
                    <v-col cols="12" class="text-center">
                        <!-- ENVIAR -->
                        <v-btn
                            color="success"
                            class="mr-5"
                            fab
                            small
                            dark
                            v-if="!$v.$invalid && valido && portada"
                            type="submit"
                        >
                            <v-icon>mdi-check</v-icon>
                        </v-btn>
                        <!-- BORRAR -->
                        <v-btn color="error" class="ml-5" fab small dark @click="borrarformulario()">
                            <v-icon>mdi-restart</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
                </form>
            </v-col>
            <v-col cols="0" md="2"></v-col>
        </v-row>
    </div>
</template>

<script>
    import {required, maxLength} from 'vuelidate/lib/validators'
    export default {
        name: "EditarArticulo",
        data(){
            return{
                valido: false,
                titular: '',
                subtitular: '',
                articulo:'',
                portada:null,
                categorias: ['Politica', 'Economia', 'Deporte', 'Educación'],
                categoria: '',
                nameRules: [
                    v => !!v || 'Titulo Requerido',
                ],
                articuloRules: [
                    v => !!v || 'Articulo Requerido',
                    v => (v && v.length <= 4294967295) || 'Articulo maximo 4 294 967 295 caracteres',
                ],
                portadaRules: [
                    v => !!v || 'Portada Requerida',
                    v => (v && v.size <7000000) || 'Foto demasiado grande. Max 7 MB',
                ]
            }
        },
        validations:{
            titular:{required},
            subtitular:{required},
            categoria:{required},
            articulo:{required, maxLength:maxLength(4294967295)}
        },
        methods:{
            borrarformulario(){
                this.$v.titular.$model='';
                this.$v.subtitular.$model='';
                this.$v.articulo.$model='';
                this.portada=null;
                this.$v.categoria.$model='';
            },
            validateFoto(){
                if (this.portada.size > 7000000){
                    this.valido = false
                }else{
                    this.valido = true
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