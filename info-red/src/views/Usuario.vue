<template>
    <div>
        <v-row>
            <v-col cols="0" md="4"></v-col>
            <v-col cols="12" md="4">
                <div class="titular text-center">PEDRO GARCIA ROMERO</div>
            </v-col>
            <v-col cols="0" md="4"></v-col>
        </v-row>
        <v-row class="estadistica">
            <v-col cols="12" md="4" class="text-center">
                Articulos Creados<br> <div class="mt-3 datos">100</div>
            </v-col>
            <v-col cols="12" md="4" class="text-center">
                Articulos Publicados<br><div class="mt-3 datos">58</div>
            </v-col>
            <v-col cols="12" md="4" class="text-center">
                Fecha de Alta<br><div class="mt-3 datos">12/02/2015</div>
            </v-col>

            <v-col cols="12"></v-col>
            <v-col cols="12"></v-col>
            <v-col cols="12"></v-col>

            <v-col cols="12" md="4" class="text-center">
                Porcentaje A.C / A.P<br>
                <v-progress-circular
                        :rotate="90"
                        :size="90"
                        :width="12"
                        value="58"
                        color="success"
                        class="mt-5"
                >
                    58
                </v-progress-circular>
            </v-col>
            <v-col cols="12" md="4" class="text-center">
                Usuario <br> <div class="mt-3 datos">Editor</div>
            </v-col>
            <v-col cols="12" md="4" class="text-center">
                Acciones <br>
                <div class="mt-4">
                    <v-btn color="success">Editar</v-btn>
                    <v-btn color="error">Borrar</v-btn>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    export default {
        name: "Usuario",
        mounted(){
            this.setBack(true)
        },
        destroyed(){
            this.setBack(false)
        },
        methods:{
        ...mapMutations(['setBack'])
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
    .estadistica{
        border-radius: 10px 10px 10px 10px;
        background-color: rgba(2, 64, 89, 0.85);
        color: white;
        margin: 30px;
        padding-top: 30px;
        padding-bottom: 30px;
        font-size: 25px;
    }
    .datos{
        color: #4ebfb4;
    }
</style>