<template>
    <div>
        <v-list-item
                @click="$router.push({name: 'Logs'})"
                v-if="user.tipo === 'administrador'"
                :class="$route.path === '/Administracion/Logs' ? 'success' : ''"
        >
            <v-list-item-title class="text-center title ma-4">LOGS</v-list-item-title>
        </v-list-item>
        <v-list-item
                @click="$router.push({name: 'Administracion'})"
                :class="$route.path === '/Administracion' ? 'success' : ''"
        >
            <v-list-item-title class="text-center title ma-4">HOME</v-list-item-title>
        </v-list-item>
        <v-list-item
                @click="$router.push({name: 'CrearUsuario'})"
                v-if="user.tipo === 'administrador'"
                :class="$route.path === '/Administracion/CrearUsuario' ? 'success' : ''"
        >
            <v-list-item-title class="text-center title ma-4">CREAR USUARIO</v-list-item-title>
        </v-list-item>
        <v-list-item
                @click="$router.push({name: 'ConsultarUsuario'})"
                v-if="user.tipo === 'administrador'"
                :class="!$route.path.indexOf('/Administracion/Usuarios') ? 'success' : ''"
        >
            <v-list-item-title class="text-center title ma-4">CONSULTAR <br><br>USUARIO</v-list-item-title>
        </v-list-item>
        <v-list-item
                @click="$router.push({name: 'CrearArticulo'})"
                :class="$route.path === '/Administracion/CrearArticulo' ? 'success' : ''"
        >
            <v-list-item-title class="text-center title ma-4">CREAR ARTÍCULO</v-list-item-title>
        </v-list-item>
        <v-list-item
                @click="$router.push({name: 'ConsultarArticulos'})"
                :class="!$route.path.indexOf('/Administracion/Articulos') ? 'success' : ''"
        >
            <v-list-item-title class="text-center title ma-4">CONSULTAR <br><br> ARTÍCULOS</v-list-item-title>
        </v-list-item>
        <v-list-item
                @click="$router.push({name: 'CrearCategoria'})"
                v-if="user.tipo === 'administrador'"
                :class="$route.path === '/Administracion/CrearCategoria' ? 'success' : ''"
        >
            <v-list-item-title class="text-center title ma-4">CREAR CATEGORÍA</v-list-item-title>
        </v-list-item>
        <v-list-item
                @click="$router.push({name: 'ConsultarCategorias'})"
                v-if="user.tipo === 'administrador'"
                :class="!$route.path.indexOf('/Administracion/Categorias') ? 'success' : ''"
        >
            <v-list-item-title class="text-center title ma-4">CONSULTAR <br><br> CATEGORÍA</v-list-item-title>
        </v-list-item>
        <v-list-item
                @click="$router.push({name: 'CrearNota'})"
                :class="$route.path === '/Administracion/CrearNota' ? 'success' : ''"
        >
            <v-list-item-title class="text-center title ma-4">CREAR NOTA</v-list-item-title>
        </v-list-item>
        <v-list-item
                @click="$router.push({name: 'ConsultarNotas'})"
                :class="!$route.path.indexOf('/Administracion/Notas') ? 'success' : ''"
        >
            <v-list-item-title class="text-center title ma-4">CONSULTAR NOTAS</v-list-item-title>
        </v-list-item>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "menuUsuario",
        computed:{
            ...mapState(['user'])
        },
    }
</script>

<style scoped>

</style>