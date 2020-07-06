import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  { //VENTANA PRINCIPAL
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  { //MOSTRAR UN ARTICULO
    path: '/Articulo/:titular',
    name: 'Articulo',
    component: () => import('../views/Articulo.vue')
  },
  { //VENTANA PRINCIPAL ADMINISTRACION
    path: '/Administracion',
    name: 'Administracion',
    component: () => import('../views/Administracion.vue')
  },
  { //VENTANA PARA SELECCIONAR UN USUARIO
    path: '/Administracion/ConsultarUsuario',
    name: 'ConsultarUsuario',
    component: () => import('../views/ConsultarUsuario.vue')
  },
  { //VENTANA PARA MOSTRAR INFORMACION DE UN USUARIO Y LAS ACCIONES
    path: '/Administracion/Usuario/:id',
    name: 'Usuario',
    component: () => import('../views/Usuario.vue')
  },
  { //VENTANA PARA CREAR UN ARTICULO
    path: '/Administracion/CrearArticulo',
    name: 'CrearArticulo',
    component: () => import('../views/CrearArticulo.vue')
  },
    { //VENTANA PARA CREAR UN USUARIO
      path: '/Administracion/CrearUsuario',
      name: 'CrearUsuario',
      component: () => import('../views/CrearUsuario.vue')
    },
    { //VENTANA PARA CONSULTAR ARTICULOS
      path: '/Administracion/ConsultarArticulos',
      name: 'ConsultarArticulos',
      component: () => import('../views/ConsultarArticulos.vue')
    },
    { //VENTANA PARA VALIDAR ARTICULOS
      path: '/Administracion/ValidarArticulos/:id',
      name: 'ValidarArticulos',
      component: () => import('../views/ValidarArticulos.vue')
    },
    { //VENTANA PARA EDITAR ARTICULOS
      path: '/Administracion/EditarArticulo/:id',
      name: 'EditarArticulo',
      component: () => import('../views/EditarArticulo.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
