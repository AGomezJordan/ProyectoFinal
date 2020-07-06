<template>
    <div>
        <v-list-item @click="$router.push({name: 'Administracion'})">
            <v-list-item-title class="text-center title ma-4">Home</v-list-item-title>
        </v-list-item>
        <v-list-item @click="$router.push({name: 'CrearUsuario'})">
            <v-list-item-title class="text-center title ma-4">Crear Usuario</v-list-item-title>
        </v-list-item>
        <v-list-item @click="$router.push({name: 'ConsultarUsuario'})">
            <v-list-item-title class="text-center title ma-4">Consultar Usuario</v-list-item-title>
        </v-list-item>
        <v-list-item @click="$router.push({name: 'CrearArticulo'})">
            <v-list-item-title class="text-center title ma-4">Crear Artículo</v-list-item-title>
        </v-list-item>
        <v-list-item @click="$router.push({name: 'ConsultarArticulos'})">
            <v-list-item-title class="text-center title ma-4">Consultar Artículos</v-list-item-title>
        </v-list-item>
        <v-list-item @click="$router.push({name: 'CrearCategoria'})">
            <v-list-item-title class="text-center title ma-4">Crear Categoría</v-list-item-title>
        </v-list-item>
        <v-list-item @click="$router.push({name: 'CrearNota'})">
            <v-list-item-title class="text-center title ma-4">Crear Nota</v-list-item-title>
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