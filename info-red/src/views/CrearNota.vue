<template>
    <div>
        <!-- TITULO -->
        <v-row>
            <v-col cols="0" md="4"></v-col>
            <v-col cols="12" md="4">
                <div class="titular text-center">CREAR NOTA</div>
            </v-col>
            <v-col cols="0" md="4"></v-col>
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
    import router from '@/router'
    import {required, maxLength} from 'vuelidate/lib/validators'
    export default {
        name: "CrearCategoria",
        data(){
            return{
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
        methods:{
            crear(){
                alert("Nota creada")
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