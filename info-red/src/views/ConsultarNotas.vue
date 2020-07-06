<template>
    <div>
        <!-- TITULO -->
        <v-row>
            <v-col cols="0" md="4"></v-col>
            <v-col cols="12" md="4">
                <div class="titular text-center">CONSULTAR NOTAS</div>
            </v-col>
            <v-col cols="0" md="4"></v-col>
        </v-row>

        <!-- NOTAS -->
        <v-row class="pa-5">
            <v-col lg="4" md="6" cols="12" v-for="n in 10">
                <div class="botones">
                    <v-btn
                            elevation="10"
                            @click="edit(tarea.cod)"
                            fab
                            color="success"
                    >
                        <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn
                            elevation="10"
                            @click=""
                            fab
                            color="error"
                    >
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                </div>
                <div class="tarjeta">
                    <v-card
                            class="pa-5 texto"
                            dark
                            :to="{
                            name: 'Notas',
                            params:
                                {id: '21253-dfss3sdf-ersa'}}"
                    >
                        <v-card-title>TITULO</v-card-title>
                        <v-card-subtitle>ASDASDASD ADJAS DJASLKDJ ASL</v-card-subtitle>
                    </v-card>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "ConsultarNotas"
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
    .notas{
        border-radius: 10px 10px 10px 10px;
        background-color: rgba(2, 64, 89, 0.85);
        color: white;
        margin: 30px;
        padding-top: 30px;
        padding-bottom: 30px;
        font-size: 25px;
    }

    .tarjeta{
        border-radius: 10px 10px 10px 10px;
        overflow: hidden;
    }
    .texto{
        background-color: rgba(2, 64, 89, 0.91);
    }
    .botones{
        position: relative;
        top: 40px;
        left: 70%;
        z-index: 2;
    }
</style>