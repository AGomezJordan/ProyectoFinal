import Vue from 'vue'
import Vuex from 'vuex'
import KJUR from 'jsrsasign'
import decode from 'jwt-decode'
import axios from 'axios'
import { sha256} from 'js-sha256';

const HOST = 'http://localhost:80/';

Vue.use(Vuex)
import router from '@/router'

export default new Vuex.Store({
  state: {
    back: false,
    user:{
      usuarioID: localStorage.getItem('usuarioID') || null,
      tipo: localStorage.getItem('tipo') || null
    },
    dialogLogin: false,
    mensajeError: '',
    HOST: 'http://localhost:80/'
  },
  mutations: {
    setBack(state, payload){
      state.back = payload
    },
    setDialogLogin(state, payload){
      state.dialogLogin = payload
    },
    setMensajeError(state, payload){
      state.mensajeError = payload
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
    //Iniciar sesion en el sistema
    async iniciarSesion({commit, state}, payload){
      let jws = KJUR.jws.JWS; //Objeto para tratar JWT
      let secret = "Alvaro1234@asdfgh"; // Clave privada

      //crear JWT
      let header = {alg: "HS256", typ: "JWT"}; //Cabecera de JWT
      let data = {//Datos de JWT
        func: 'login',
        usuario: payload.usuario,
        clave: sha256(payload.clave)
      };
      let jwt = jws.sign("HS256", header, data, {utf8: secret}); //Firma de JWT

      let formd = new FormData();
      formd.append("jwt", jwt)
      console.log(jwt)

      let response = await axios.post(state.HOST+'server/api.php', formd)
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
              commit('setMensajeError', null)
              router.push({name: 'Administracion'})

            }else{ //Si no esta logeado
              commit('setMensajeError', 'Usuario o contraseña incorrectos')
            }

          } else { //Datos erroneos
            commit('setMensajeError', 'Upss... prueba otra vez')
          }

        } else { //Si no es valido
          commit('setMensajeError', 'Upss... prueba otra vez')
        }

      }else{
        commit('setMensajeError', 'Server KO... intentelo de nuevo')
      }
    },

    //Cerrar sesion abierta
    cerrarSesion({commit}){
      localStorage.removeItem('usuarioID')
      localStorage.removeItem('tipo')
      commit('borrarUsuario')
      router.push({name: 'Home'})
    },

    async crearUsuario(){
      this.cargando = true;
      let jws = KJUR.jws.JWS; //Objeto para tratar JWT
      let secret = "Alvaro1234@asdfgh"; // Clave privada
      let host = 'https://proyectofinallalo.000webhostapp.com/'

      //crear JWT
      let header = {alg: "HS256", typ: "JWT"}; //Cabecera de JWT
      let data = {
        id: localStorage.getItem('usuarioID'),
        func: 'crearUsuario',
        usuario: this.$v.usuario.$model,
        clave: sha256(this.$v.password.$model),
        nombre: this.$v.nombre.$model,
        ap1: this.$v.apellido.$model,
        ap2: this.$v.apellido2.$model,
        tipo: this.$v.tipoUsuario.$model,
        telefono: this.$v.telefono.$model
      };
      this.borrarformulario()

      let jwt = jws.sign("HS256", header, data, {utf8: secret}); //Firma de JWT

      let formd = new FormData();
      formd.append("jwt", jwt)
      console.log(jwt)

      let response = await axios.post(host+'server/api.php', formd)
      let datos = response.data


      if (datos.status) {
        //verify JWT
        let token = datos.token;
        let isValid = jws.verifyJWT(token, {utf8: secret}, {alg: ["HS256"]})

        if (isValid) { //Valido, decodificamos el jwt
          let decoded = decode(token)

          //Comprobar status
          if (decoded.status) { //Datos como los esperabamos

            if (decoded.creado){ //Si esta creado
              this.mensaje = '* USUARIO CREADO CORRECTAMENTE *'
              this.cargando = false
            }else{ //Si no esta creado
              this.mensaje = '* EL USUARIO NO HA PODIDO CREARSE *'
              this.cargando = false
            }

          } else { //Datos erroneos
            this.mensaje = 'Upss... prueba otra vez'
            this.cargando = false
          }

        } else { //Si no es valido
          this.mensaje = 'Upss... prueba otra vez'
          this.cargando = false
        }

      }else{
        if (datos.mensaje !== null){
          this.mensaje = datos.mensaje;
        }else{
          this.mensaje = 'Server KO... intentelo de nuevo'
        }
        this.cargando = false
      }
    }

  },
  modules: {
  }
})
