<template>
    <div class="pa-4">
        <v-row class="text-center">
            <v-col cols="0" md="4"></v-col>
            <v-col cols="12" md="4" class="pa-5">
                <div class="titular">BIENVENIDO USUARIO</div>
            </v-col>
            <v-col cols="0" md="4"></v-col>
        </v-row>
        <v-row class="text-center">
            <v-col cols="12" md="4" class="pa-5">
                <div class="estadistica">
                    ARTICULOS CREADOS<br>58
                </div>
            </v-col>
            <v-col cols="0" md="4"></v-col>
            <v-col cols="12" md="4" class="pa-5">
                <div class="estadistica">
                    ARTICULOS PUBLICADOS<br>58
                </div>
            </v-col>
        </v-row>
        <v-row class="text-center">
            <v-col cols="12" md="4" class="pa-5">
                <div class="estadistica">
                    EMPLEADO DESDE<br>20/05/2020
                </div>
            </v-col>
            <v-col cols="0" md="4"></v-col>
            <v-col cols="12" md="4" class="pa-5">
                <div class="estadistica">
                    USUARIO<br>ADINISTRADOR
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "Administracion"
    }
</script>

<style scoped>
.titular, .estadistica{
    border-radius: 10px 10px 10px 10px;
    background-color: rgba(2, 64, 89, 0.91);
    color: white;
    letter-spacing: 6px;
    padding: 8px;
}
</style>