import Vue from 'vue'
import Vuex from 'vuex'
import KJUR from 'jsrsasign'
import decode from 'jwt-decode'
import axios from 'axios'

const HOST = 'http://192.168.0.175:80/';

Vue.use(Vuex)
import router from '@/router'

export default new Vuex.Store({
  state: {
    back: false,
    user:{
      usuarioID: localStorage.getItem('usuarioID') || null,
      tipo: localStorage.getItem('tipo') || null
    },
    dialogLogin: false
  },
  mutations: {
    setBack(state, payload){
      state.back = payload
    },
    setDialogLogin(state, payload){
      state.dialogLogin = payload
    },
    setAdmin(state, payload){
      state.admin = payload
    },
    setUser(state, payload){
      state.user = payload
    },
    borrarUsuario(state){
      state.user = {
        usuarioID: null,
        tipo: null
      }
    }
  },
  actions: {
    async iniciarSesion({commit}, payload){
      let jws = KJUR.jws.JWS; //Objeto para tratar JWT
      let secret = "Alvaro1234@asdfgh"; // Clave privada

      //crear JWT
      let header = {alg: "HS256", typ: "JWT"}; //Cabecera de JWT
      let data = {func: 'login', usuario: payload.usuario, clave: payload.clave}; //Datos de JWT
      let jwt = jws.sign("HS256", header, data, {utf8: secret}); //Firma de JWT

      let formd = new FormData();
      formd.append("jwt", jwt)

      let response = await axios.post(HOST+'server/api.php', formd)
      let datos = response.data

      if (datos.status) {
        //verify JWT
        let token = datos.token;
        let isValid = jws.verifyJWT(token, {utf8: secret}, {alg: ["HS256"]})

        if (isValid) { //Valido, decodificamos el jwt
          let decoded = decode(token)

          //Comprobar status
          if (decoded.status) { //Datos como los esperabamos

            if (decoded.login){ //Si esta logeado
              let data = decoded.data;
              localStorage.setItem('usuarioID', data.usuarioID)
              localStorage.setItem('tipo', data.tipo)
              commit('setUser', data)
              commit('setDialogLogin', false)
              router.push({name: 'Administracion'})

            }else{ //Si no esta logeado
              console.log("no login");
            }

          } else { //Datos erroneos
            console.log("datos erroneos");
          }

        } else { //Si no es valido
          console.log("datos corruptos");
        }

      }else{
        console.log("Ha ocurrido un problema");
      }
    },
    cerrarSesion({commit}){
      localStorage.removeItem('usuarioID')
      localStorage.removeItem('tipo')
      commit('borrarUsuario')
      router.push({name: 'Home'})
    }
  },
  modules: {
  }
})
