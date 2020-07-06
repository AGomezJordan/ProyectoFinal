<template>
    <div class="pa-4">
        <v-row class="text-center mb-8">
            <v-col cols="0" md="4"></v-col>
            <v-col cols="12" md="4" class="pa-5">
                <div class="titular">LOGS</div>
            </v-col>
            <v-col cols="0" md="4"></v-col>
        </v-row>
            <v-row class="text-center usuario mb-4" v-for="n in 5">
                <v-col cols="6" md="4">
                    <v-icon color="white">mdi-account</v-icon>
                    Pedro Garcia Romero
                </v-col>
                <v-col cols="6" md="4">
                    pedro_gr_45
                </v-col>
                <v-col cols="12" md="4">
                    02/12/2021 12:32
                </v-col>
            </v-row>
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
</style>