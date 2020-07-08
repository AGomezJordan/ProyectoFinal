<template>
    <div>
        <v-list-item @click="$router.push({name: 'Logs'})" v-if="user.tipo === 'administrador'">
            <v-list-item-title class="text-center title ma-4">Logs</v-list-item-title>
        </v-list-item>
        <v-list-item @click="$router.push({name: 'Administracion'})">
            <v-list-item-title class="text-center title ma-4">Home</v-list-item-title>
        </v-list-item>
        <v-list-item @click="$router.push({name: 'CrearUsuario'})" v-if="user.tipo === 'administrador'">
            <v-list-item-title class="text-center title ma-4">Crear Usuario</v-list-item-title>
        </v-list-item>
        <v-list-item @click="$router.push({name: 'ConsultarUsuario'})" v-if="user.tipo === 'administrador'">
            <v-list-item-title class="text-center title ma-4">Consultar Usuario</v-list-item-title>
        </v-list-item>
        <v-list-item @click="$router.push({name: 'CrearArticulo'})">
            <v-list-item-title class="text-center title ma-4">Crear Artículo</v-list-item-title>
        </v-list-item>
        <v-list-item @click="$router.push({name: 'ConsultarArticulos'})">
            <v-list-item-title class="text-center title ma-4">Consultar Artículos</v-list-item-title>
        </v-list-item>
        <v-list-item @click="$router.push({name: 'CrearCategoria'})" v-if="user.tipo === 'administrador'">
            <v-list-item-title class="text-center title ma-4">Crear Categoría</v-list-item-title>
        </v-list-item>
        <v-list-item @click="$router.push({name: 'CrearNota'})">
            <v-list-item-title class="text-center title ma-4">Crear Nota</v-list-item-title>
        </v-list-item>
        <v-list-item @click="$router.push({name: 'ConsultarNotas'})">
            <v-list-item-title class="text-center title ma-4">Consultar Notas</v-list-item-title>
        </v-list-item>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "menuUsuario",
        computed:{
            ...mapState(['user'])
        }
    }
</script>

<style scoped>

</style>