(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-100d92de"],{3497:function(e,o,r){},a904:function(e,o,r){"use strict";var a=r("3497"),s=r.n(a);s.a},d559:function(e,o,r){"use strict";r.r(o);var a=function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("div",[r("v-row",[r("v-col",{attrs:{cols:"0",md:"4"}}),r("v-col",{attrs:{cols:"12",md:"4"}},[r("div",{staticClass:"titular text-center"},[e._v("CREAR USUARIO")])]),r("v-col",{attrs:{cols:"0",md:"4"}})],1),r("div",{staticClass:"text-center white--text mensaje"},[e._v(e._s(e.mensaje))]),r("v-row",[r("v-col",{attrs:{cols:"0",md:"2"}}),r("v-col",{attrs:{cols:"12",md:"8"}},[r("form",[r("v-row",{staticClass:"formulario"},[r("v-col",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("span",{staticClass:"texto"},[e._v(" DATOS DE USUARIO ")]),r("div",{staticClass:"separador"})])],1),r("v-row",[r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{counter:10,rules:e.usuarioRules,label:"Usuario",color:"success",dark:""},model:{value:e.$v.usuario.$model,callback:function(o){e.$set(e.$v.usuario,"$model",o)},expression:"$v.usuario.$model"}})],1),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-select",{attrs:{items:e.tipoUsuarios,label:"Tipo",dark:"",color:"success"},model:{value:e.$v.tipoUsuario.$model,callback:function(o){e.$set(e.$v.tipoUsuario,"$model",o)},expression:"$v.tipoUsuario.$model"}})],1),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{counter:"",rules:e.passwordRules,label:"Contraseña",color:"success",type:"password",dark:""},model:{value:e.$v.password.$model,callback:function(o){e.$set(e.$v.password,"$model",o)},expression:"$v.password.$model"}})],1),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{counter:"",rules:e.password2Rules,label:"Confirmar contraseña",color:"success",type:"password",dark:""},model:{value:e.$v.password2.$model,callback:function(o){e.$set(e.$v.password2,"$model",o)},expression:"$v.password2.$model"}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("span",{staticClass:"texto"},[e._v(" DATOS PERSONALES ")]),r("div",{staticClass:"separador"})])],1),r("v-row",[r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{counter:"",rules:e.apellidoRules,label:"Primer apellido",color:"success",dark:""},model:{value:e.$v.apellido.$model,callback:function(o){e.$set(e.$v.apellido,"$model",o)},expression:"$v.apellido.$model"}})],1),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{counter:"",rules:e.apellidoRules,label:"Segundo apellido",color:"success",dark:""},model:{value:e.$v.apellido2.$model,callback:function(o){e.$set(e.$v.apellido2,"$model",o)},expression:"$v.apellido2.$model"}})],1),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{counter:"",rules:e.nombreRules,label:"Nombre",color:"success",dark:""},model:{value:e.$v.nombre.$model,callback:function(o){e.$set(e.$v.nombre,"$model",o)},expression:"$v.nombre.$model"}})],1),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{counter:"",type:"number",rules:e.telefonoRules,label:"Telefono",color:"success",dark:""},model:{value:e.$v.telefono.$model,callback:function(o){e.$set(e.$v.telefono,"$model",o)},expression:"$v.telefono.$model"}})],1)],1),r("v-row",[r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[e.$v.$invalid?e._e():r("v-btn",{staticClass:"mr-5",attrs:{color:"success",fab:"",small:"",dark:"",disabled:e.cargando},on:{click:function(o){return e.enviar()}}},[r("v-icon",[e._v("mdi-check")])],1),r("v-btn",{staticClass:"ml-5",attrs:{color:"error",fab:"",small:"",dark:""},on:{click:function(o){return e.borrarformulario()}}},[r("v-icon",[e._v("mdi-restart")])],1)],1)],1)],1)],1)],1)]),r("v-col",{attrs:{cols:"0",md:"2"}})],1)],1)},s=[],t=(r("96cf"),r("1da1")),l=r("b5ae"),n=r("6c27"),i=r("81fa"),c=r.n(i),d=r("04e1"),u=r.n(d),m=r("bc3a"),v=r.n(m),p={name:"CrearUsuario",data:function(){var e=this;return{cargando:!1,usuario:"",password:"",password2:"",tipoUsuarios:["administrador","escritor"],tipoUsuario:"",apellido:"",apellido2:"",nombre:"",telefono:"",mensaje:"",usuarioRules:[function(e){return!!e||"Usuario Requerido"},function(e){return e&&e.length<=10||"Usuario no puede tener mas de 10 caracteres"}],passwordRules:[function(e){return!!e||"Contraseña Requerida"},function(e){return e&&e.length>=8||"Contraseña no puede tener menos de 8 caracteres"}],password2Rules:[function(e){return!!e||"Confirmación de contraseña requerida"},function(o){return o===e.$v.password.$model||"Las contraseñas no coinciden"}],apellidoRules:[function(e){return!!e||"Apellido requerido"}],nombreRules:[function(e){return!!e||"Nombre requerido"}],telefonoRules:[function(e){return!!e||"Telefono requerido"},function(e){return e.length>=9||"El teléfono tiene que tener 9 números"},function(e){return e.length<=9||"El teléfono tiene que tener 9 números"}]}},validations:{usuario:{required:l["required"],maxLength:Object(l["maxLength"])(10)},password:{required:l["required"],minLength:Object(l["minLength"])(8)},password2:{required:l["required"],sameAs:Object(l["sameAs"])("password")},tipoUsuario:{required:l["required"]},apellido:{required:l["required"]},apellido2:{required:l["required"]},nombre:{required:l["required"]},telefono:{required:l["required"],minLength:Object(l["minLength"])(9),maxLength:Object(l["maxLength"])(9)}},methods:{borrarformulario:function(){this.$v.usuario.$model="",this.$v.tipoUsuario.$model="",this.$v.password.$model="",this.$v.password2.$model="",this.$v.apellido.$model="",this.$v.apellido2.$model="",this.$v.nombre.$model="",this.$v.telefono.$model=""},enviar:function(){this.crearUsuario()},crearUsuario:function(){var e=this;return Object(t["a"])(regeneratorRuntime.mark((function o(){var r,a,s,t,l,i,d,m,p,$,f,b;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return e.cargando=!0,r=c.a.jws.JWS,a="Alvaro1234@asdfgh",s="https://proyectofinallalo.000webhostapp.com/",t={alg:"HS256",typ:"JWT"},l={id:localStorage.getItem("usuarioID"),func:"crearUsuario",usuario:e.$v.usuario.$model,clave:Object(n["sha256"])(e.$v.password.$model),nombre:e.$v.nombre.$model,ap1:e.$v.apellido.$model,ap2:e.$v.apellido2.$model,tipo:e.$v.tipoUsuario.$model,telefono:e.$v.telefono.$model},e.borrarformulario(),i=r.sign("HS256",t,l,{utf8:a}),d=new FormData,d.append("jwt",i),console.log(i),o.next=13,v.a.post(s+"server/api.php",d);case 13:m=o.sent,p=m.data,p.status?($=p.token,f=r.verifyJWT($,{utf8:a},{alg:["HS256"]}),f?(b=u()($),b.status?b.creado?(e.mensaje="* USUARIO CREADO CORRECTAMENTE *",e.cargando=!1):(e.mensaje="* EL USUARIO NO HA PODIDO CREARSE *",e.cargando=!1):(e.mensaje="Upss... prueba otra vez",e.cargando=!1)):(e.mensaje="Upss... prueba otra vez",e.cargando=!1)):(null!==p.mensaje?e.mensaje=p.mensaje:e.mensaje="Server KO... intentelo de nuevo",e.cargando=!1);case 16:case"end":return o.stop()}}),o)})))()}}},$=p,f=(r("a904"),r("2877")),b=r("6544"),w=r.n(b),h=r("8336"),g=r("62ad"),R=r("132d"),x=r("0fd9"),k=r("b974"),U=r("8654"),q=Object(f["a"])($,a,s,!1,null,"4bc7adba",null);o["default"]=q.exports;w()(q,{VBtn:h["a"],VCol:g["a"],VIcon:R["a"],VRow:x["a"],VSelect:k["a"],VTextField:U["a"]})}}]);
//# sourceMappingURL=chunk-100d92de.ad43e055.js.map