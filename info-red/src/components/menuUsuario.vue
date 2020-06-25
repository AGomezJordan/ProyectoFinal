<template>
    <div>
        <v-list-item @click="$router.push({name: 'Administracion'})">
            <v-list-item-title class="text-center title ma-4">HOME</v-list-item-title>
        </v-list-item>
        <v-list-item @click="$router.push({name: 'ConsultarUsuario'})">
            <v-list-item-title class="text-center title ma-4">Consultar Usuario</v-list-item-title>
        </v-list-item>
        <v-list-item @click="$router.push({name: 'CrearArticulo'})">
            <v-list-item-title class="text-center title ma-4">Crear Articulo</v-list-item-title>
        </v-list-item>
        <v-list-item @click="$router.push({name: 'CrearUsuario'})">
            <v-list-item-title class="text-center title ma-4">Crear Usuario</v-list-item-title>
        </v-list-item>
        <v-list-item v-for="n in 5" :key="n">
            <v-list-item-title class="text-center title ma-4">FUNCION {{n}}</v-list-item-title>
        </v-list-item>
    </div>
</template>

<script>
    export default {
        name: "menuUsuario",
    }
</script>

<style scoped>

</style>