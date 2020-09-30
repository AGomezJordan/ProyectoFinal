<template>
    <div class="text-center">
        <v-row>
            <v-col cols="3"></v-col>
            <v-col cols="6">
                <img src="../assets/notfound.png" width="500px">
            </v-col>
            <v-col cols="3"></v-col>
        </v-row>
        <v-row>
            <v-col cols="3"></v-col>
            <v-col cols="6" class="texto">
                Upss.. parece que no encontramos lo que buscas
            </v-col>
            <v-col cols="3"></v-col>
        </v-row>
        <v-row>
            <v-col cols="3"></v-col>
            <v-col cols="6">
                <v-btn color="success" @click="$router.push({name: 'Home'})">VOLVER A INFORED</v-btn>
            </v-col>
            <v-col cols="3"></v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "NotFound"
    }
</script>

<style scoped>
    .texto{
        font-size: 50px;
        color: white;
        font-weight: bold;
        -webkit-text-stroke: 2px #042533;
    }
</style>