<template>
    <div>
        <!-- FILTRAR MOVIL -->
        <v-toolbar
                color="#023059"
                dark
                height="150px"
                class="d-block d-sm-block d-md-none"
        >
            <v-icon>mdi-filter</v-icon>
            <v-toolbar-title>
                <!-- FILTROS DISPONIBLES -->
                <v-row class="ml-5 mt-8">

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
                    <v-col cols="6">
                        <v-btn
                                color="success"
                                small
                                dark
                        >
                            <v-icon>mdi-check</v-icon>
                        </v-btn>
                        <v-btn
                                color="error"
                                small
                                dark
                                class="ml-5"
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
                    <v-col cols="3">
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
                    <v-col cols="3">
                        <v-select
                                :items="autores"
                                label="Autor"
                                dark
                                color="success"
                                v-model="autor"
                                class="ml-5 mr-5"
                        ></v-select>
                    </v-col>

                    <!-- FECHA DE PUBLICACION -->
                    <v-col cols="3">
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
                    <v-col cols="3">
                        <v-btn
                                color="success"
                                small
                                dark
                        >
                            FILTRAR
                        </v-btn>
                        <v-btn
                                color="error"
                                small
                                dark
                                class="ml-5"
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

            <!-- LISTA DE CADA ARTÍCULO -->
            <router-link v-for="n in 10" :to="{name: 'Usuario', params: {id:'hola'}}">
                <v-row class="text-center usuario mb-4">

                    <!-- TITULAR -->
                    <v-col cols="12" md="8">
                        Maroto pone coto a la cuarentena para extranjeros: “Acabará a la vez que el estado de alarma”
                    </v-col>

                    <!-- FECHA DE PUBLICACION -->
                    <v-col cols="6" md="2">
                        02/12/2021
                    </v-col>

                    <!-- AUTOR -->
                    <v-col cols="6" md="2">
                        <v-icon color="white">mdi-account</v-icon>
                        PEDRO
                    </v-col>
                </v-row>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ConsultarArticulos",
        data(){
            return{
                collapseOnScroll: false,
                categorias: ['ECONOMÍA', 'POLÍTICA', 'DEPORTES', 'MEDIOAMBIENTE'],
                categoria: '',
                autores: ['PEDRO', 'JUAN', 'ALVARO', 'LIDIA', 'JOSE'],
                autor: '',
                fecha:'',
                hoy: '',
                temp: ''
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
            this.hoy = year+'-'+mes+'-'+day
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
</style>