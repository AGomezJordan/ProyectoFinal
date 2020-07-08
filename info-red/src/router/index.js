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
    component: () => import('../views/Administracion.vue'),
    meta: {requiresAuth: true}
  },
  { //VENTANA PARA SELECCIONAR UN USUARIO
    path: '/Administracion/ConsultarUsuario',
    name: 'ConsultarUsuario',
    component: () => import('../views/ConsultarUsuario.vue'),
    meta: {requiresAdmin: true}
  },
  { //VENTANA PARA MOSTRAR INFORMACION DE UN USUARIO Y LAS ACCIONES
    path: '/Administracion/Usuario/:id',
    name: 'Usuario',
    component: () => import('../views/Usuario.vue'),
    meta: {requiresAdmin: true}
  },
  { //VENTANA PARA CREAR UN ARTICULO
    path: '/Administracion/CrearArticulo',
    name: 'CrearArticulo',
    component: () => import('../views/CrearArticulo.vue'),
    meta: {requiresAuth: true}
  },
    { //VENTANA PARA CREAR UN USUARIO
      path: '/Administracion/CrearUsuario',
      name: 'CrearUsuario',
      component: () => import('../views/CrearUsuario.vue'),
      meta: {requiresAdmin: true}
    },
    { //VENTANA PARA CONSULTAR ARTICULOS
      path: '/Administracion/ConsultarArticulos',
      name: 'ConsultarArticulos',
      component: () => import('../views/ConsultarArticulos.vue'),
      meta: {requiresAuth: true}
    },
    { //VENTANA PARA VALIDAR ARTICULOS
      path: '/Administracion/ValidarArticulos/:id',
      name: 'ValidarArticulos',
      component: () => import('../views/ValidarArticulos.vue'),
      meta: {requiresAuth: true}
    },
    { //VENTANA PARA EDITAR ARTICULOS
      path: '/Administracion/EditarArticulo/:id',
      name: 'EditarArticulo',
      component: () => import('../views/EditarArticulo.vue'),
      meta: {requiresAuth: true}
    },
    { //VENTANA PARA CREAR CATEGORIAS
      path: '/Administracion/CrearCategoria',
      name: 'CrearCategoria',
      component: () => import('../views/CrearCategoria.vue'),
      meta: {requiresAdmin: true}
    },
    { //VENTANA PARA CREAR NOTAS
      path: '/Administracion/CrearNota',
      name: 'CrearNota',
      component: () => import('../views/CrearNota.vue'),
      meta: {requiresAuth: true}
    },
    { //VENTANA PARA CONSULTAR LOGS
      path: '/Administracion/Logs',
      name: 'Logs',
      component: () => import('../views/Logs.vue'),
      meta: {requiresAdmin: true}
    },
    { //VENTANA PARA CONSULTAR NOTAS
      path: '/Administracion/ConsultarNotas',
      name: 'ConsultarNotas',
      component: () => import('../views/ConsultarNotas.vue'),
      meta: {requiresAuth: true}
    },
    { //VENTANA PARA VER NOTAS
      path: '/Administracion/notas/:id',
      name: 'Notas',
      component: () => import('../views/Nota.vue'),
      meta: {requiresAuth: true}
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let user = {
    usuarioID: localStorage.getItem('usuarioID') || null,
    tipo: localStorage.getItem('tipo') || null
  }

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (user.usuarioID !==null && user.tipo !==null) {
      next()
    } else {
      next({name: 'Home'})
    }
  } else if(to.matched.some(record => record.meta.requiresAdmin)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (user.usuarioID !==null && user.tipo === 'administrador') {
      next()
    } else {
      next({name: 'Administracion'})
    }
  }else{
    next() // make sure to always call next()!
  }
})

export default router
