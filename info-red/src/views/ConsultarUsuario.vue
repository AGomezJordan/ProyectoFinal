<template>
    <div class="pa-4">
        <v-row class="text-center mb-8">
            <v-col cols="0" md="4"></v-col>
            <v-col cols="12" md="4" class="pa-5">
                <div class="titular">CONSULTAR USUARIO</div>
            </v-col>
            <v-col cols="0" md="4"></v-col>
        </v-row>
        <router-link v-for="n in 5" :to="{name: 'Usuario', params: {id:'hola'}}">
            <v-row class="text-center usuario mb-4">
                <v-col cols="6" md="3">
                    <v-icon color="white">mdi-account</v-icon>
                    Pedro Garcia Romero
                </v-col>
                <v-col cols="6" md="3">
                    pedro_gr_45
                </v-col>
                <v-col cols="6" md="3">
                    Escritor
                </v-col>
                <v-col cols="6" md="3">
                    02/12/2021
                </v-col>
            </v-row>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "ConsultarUsuario"
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