(function(e){function t(t){for(var n,r,o=t[0],s=t[1],u=t[2],l=0,d=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);m&&m(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,r=1;r<a.length;r++){var o=a[r];0!==i[o]&&(n=!1)}n&&(c.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},i={app:0},c=[];function o(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-00a26284":"0c673155","chunk-02a15bbb":"4d50057d","chunk-03ac7ea7":"5e65fb3f","chunk-17ebc0a6":"fe856a92","chunk-3383d96d":"0ef63778","chunk-3897ad6b":"a00a9a83","chunk-50468a0d":"962701ec","chunk-5c608bb6":"0672469f","chunk-6dbf7ea4":"2f148b7a","chunk-787ea247":"d23ce402","chunk-e5e12c56":"2c90942f","chunk-e7dd3944":"69b42447","chunk-3d4eebb8":"27948bb7","chunk-3ec85076":"20a84afe","chunk-4074ef0e":"1f42e27a","chunk-49be57c2":"cac53f16","chunk-6020993e":"3dc75ff6","chunk-8a5323f8":"691dc932","chunk-96691d94":"5231dd03","chunk-cc6c1312":"8ee57f16","chunk-061114fe":"71b20c24","chunk-a0a80408":"146a40f7","chunk-ae108c5a":"bacc4243"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a={"chunk-00a26284":1,"chunk-02a15bbb":1,"chunk-03ac7ea7":1,"chunk-17ebc0a6":1,"chunk-3383d96d":1,"chunk-3897ad6b":1,"chunk-50468a0d":1,"chunk-5c608bb6":1,"chunk-6dbf7ea4":1,"chunk-787ea247":1,"chunk-e5e12c56":1,"chunk-e7dd3944":1,"chunk-3d4eebb8":1,"chunk-3ec85076":1,"chunk-4074ef0e":1,"chunk-49be57c2":1,"chunk-6020993e":1,"chunk-8a5323f8":1,"chunk-96691d94":1,"chunk-cc6c1312":1,"chunk-061114fe":1,"chunk-a0a80408":1,"chunk-ae108c5a":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-00a26284":"572d759b","chunk-02a15bbb":"e130a28f","chunk-03ac7ea7":"6ee8fbdc","chunk-17ebc0a6":"927f66aa","chunk-3383d96d":"aa2f10c4","chunk-3897ad6b":"e0c00dff","chunk-50468a0d":"6b901a80","chunk-5c608bb6":"bc786878","chunk-6dbf7ea4":"2f351048","chunk-787ea247":"a5e7c81c","chunk-e5e12c56":"5b801789","chunk-e7dd3944":"f98751cb","chunk-3d4eebb8":"eca10827","chunk-3ec85076":"04cb8473","chunk-4074ef0e":"c6161a4a","chunk-49be57c2":"ef1d69f8","chunk-6020993e":"c7eb6621","chunk-8a5323f8":"5e62368e","chunk-96691d94":"995a3ae7","chunk-cc6c1312":"9467de10","chunk-061114fe":"20687aad","chunk-a0a80408":"c4aca3c7","chunk-ae108c5a":"f79499a8"}[e]+".css",i=s.p+n,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var u=c[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===i))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===n||l===i)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var n=t&&t.target&&t.target.src||i,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete r[e],m.parentNode.removeChild(m),a(c)},m.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(m)})).then((function(){r[e]=0})));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,a){n=i[e]=[t,a]}));t.push(n[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=o(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(m);var a=i[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}i[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var m=l;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"2c6f":function(e,t,a){"use strict";var n=a("8673"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{color:"primary",dense:"",dark:"",app:"",height:"70"}},[n("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),n("RouterLink",{attrs:{to:{name:"Home"}}},[n("img",{attrs:{width:"60",src:a("cf05")}})]),e.back?n("v-icon",{staticClass:"white--text ml-4",on:{click:function(t){return e.irAtras()}}},[e._v("mdi-reply")]):e._e(),n("div",{staticClass:"frase"},[n("div",{staticClass:"texto d-none d-sm-none d-md-block"},[null==this.user.tipo?n("span",[e._v("LA NUEVA GENERACIÓN")]):e._e(),null!=this.user.tipo?n("span",[e._v("ADMINISTRACIÓN")]):e._e()])]),n("v-spacer"),null!==e.user.tipo?n("v-switch",{attrs:{color:"success",dark:"",label:"LOG"},model:{value:e.modeAdmin,callback:function(t){e.modeAdmin=t},expression:"modeAdmin"}}):e._e()],1),null!=e.user.tipo&&e.modeAdmin?e._e():n("v-navigation-drawer",{attrs:{app:"",dark:"",temporary:"",clipped:"",color:"secondary"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-list-item-group",{attrs:{"active-class":"success"}},[n("v-list-item-title",{staticClass:"text-center title"},[e._v("MENÚ")]),n("div",{staticClass:"linea"}),null===e.user.tipo?n("div",{staticClass:"text-center mb-5"},[n("v-btn",{staticClass:"btn",attrs:{color:"success"},on:{click:function(t){return e.abrirLogin()}}},[e._v("ADMINISTRACIÓN")])],1):e._e(),null!==e.user.tipo?n("div",{staticClass:"text-center mb-5"},[n("v-btn",{staticClass:"btn",attrs:{color:"success"},on:{click:function(t){e.dialoga=!0}}},[e._v("CERRAR SESION")])],1):e._e(),n("div",{staticClass:"categorias"},e._l(e.categorias,(function(t){return n("v-list-item",{class:e.$route.path==="/categoria/"+t.nombre?"success":"",attrs:{"exact-active":"false","exact-active-class":""},on:{click:function(a){return e.$router.push({path:"/categoria/"+t.nombre})}}},[n("v-list-item-title",{staticClass:"text-center title ma-4",staticStyle:{"text-transform":"uppercase"}},[e._v(" "+e._s(t.nombre)+" ")])],1)})),1)],1)],1)],1),n("v-dialog",{attrs:{"max-width":"290",persistent:""},model:{value:this.dialogLogin,callback:function(t){e.$set(this,"dialogLogin",t)},expression:"this.dialogLogin"}},[n("div",{staticClass:"tarjeta"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.login()}}},[n("v-card",{staticClass:"text-center",attrs:{color:"secondary",dark:""}},[n("v-card-text",{staticClass:"headline titulo pt-3 white--text"},[e._v("ADMINISTRACIÓN")]),this.mensajeError?n("v-card-text",{staticClass:"mensaje"},[e._v(e._s(e.mensajeError))]):e._e(),n("v-card-text",[n("v-text-field",{attrs:{counter:10,rules:e.nameRules,label:"Usuario",required:""},model:{value:e.$v.usuario.$model,callback:function(t){e.$set(e.$v.usuario,"$model",t)},expression:"$v.usuario.$model"}}),n("v-text-field",{attrs:{counter:"",rules:e.passRules,label:"Constraseña",type:"password",required:""},model:{value:e.$v.password.$model,callback:function(t){e.$set(e.$v.password,"$model",t)},expression:"$v.password.$model"}})],1),n("v-card-text",{staticClass:"text-center"},[n("v-row",[n("v-col",{attrs:{cols:"6"}},[n("v-btn",{attrs:{disabled:e.$v.$invalid,color:"success darken-1",type:"submit"}},[e._v(" LOGIN ")])],1),n("v-col",{attrs:{cols:"6"}},[n("v-btn",{attrs:{color:"error darken-1"},on:{click:function(t){return e.cerrarLogin()}}},[e._v(" CANCELAR ")])],1)],1)],1)],1)],1)])]),null!=this.user.tipo&&e.modeAdmin?n("v-navigation-drawer",{attrs:{app:"",dark:"",temporary:"",clipped:"",color:"secondary","overlay-color":"#000"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-list-item-group",{attrs:{"active-class":"success"}},[n("v-list-item-title",{staticClass:"text-center title"},[e._v("MENÚ")]),n("div",{staticClass:"linea"}),n("div",{staticClass:"text-center mb-5"},[n("v-btn",{staticClass:"btn",attrs:{color:"success"},on:{click:function(t){e.dialoga=!0}}},[e._v("CERRAR SESION")])],1),n("MenuUsuario")],1)],1)],1):e._e(),n("v-dialog",{attrs:{"max-width":"290"},model:{value:e.dialoga,callback:function(t){e.dialoga=t},expression:"dialoga"}},[n("div",{staticClass:"tarjeta"},[n("v-card",{staticClass:"text-center",attrs:{color:"secondary",dark:""}},[n("v-card-text",{staticClass:"headline titulo pt-3 white--text"},[e._v(" ¿QUIERES CERRAR LA SESIÓN? ")]),n("v-card-text",{staticClass:"text-center"},[n("v-btn",{attrs:{color:"success darken-1"},on:{click:function(t){return e.logOut()}}},[e._v(" SI ")]),n("v-btn",{attrs:{color:"error darken-1"},on:{click:function(t){e.dialoga=!1}}},[e._v(" NO ")])],1)],1)],1)]),n("v-main",{class:{content:null==this.user.tipo||!this.modeAdmin,contentAdmin:null!=this.user.tipo&&this.modeAdmin}},[n("RouterView",{key:e.$route.fullPath})],1)],1)},i=[],c=(a("96cf"),a("1da1")),o=a("5530"),s=a("81fa"),u=a.n(s),l=a("04e1"),d=a.n(l),m=a("bc3a"),h=a.n(m),p=a("2f62"),f=a("b5ae"),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",["administrador"===e.user.tipo?a("v-list-item",{class:"/Administracion/Logs"===e.$route.path?"success":"",on:{click:function(t){return e.$router.push({name:"Logs"})}}},[a("v-list-item-title",{staticClass:"text-center title ma-4"},[e._v("LOGS")])],1):e._e(),a("v-list-item",{class:"/Administracion"===e.$route.path?"success":"",on:{click:function(t){return e.$router.push({name:"Administracion"})}}},[a("v-list-item-title",{staticClass:"text-center title ma-4"},[e._v("HOME")])],1),"administrador"===e.user.tipo?a("v-list-item",{class:"/Administracion/CrearUsuario"===e.$route.path?"success":"",on:{click:function(t){return e.$router.push({name:"CrearUsuario"})}}},[a("v-list-item-title",{staticClass:"text-center title ma-4"},[e._v("CREAR USUARIO")])],1):e._e(),"administrador"===e.user.tipo?a("v-list-item",{class:e.$route.path.indexOf("/Administracion/Usuarios")?"":"success",on:{click:function(t){return e.$router.push({name:"ConsultarUsuario"})}}},[a("v-list-item-title",{staticClass:"text-center title ma-4"},[e._v("CONSULTAR "),a("br"),a("br"),e._v("USUARIO")])],1):e._e(),a("v-list-item",{class:"/Administracion/CrearArticulo"===e.$route.path?"success":"",on:{click:function(t){return e.$router.push({name:"CrearArticulo"})}}},[a("v-list-item-title",{staticClass:"text-center title ma-4"},[e._v("CREAR ARTÍCULO")])],1),a("v-list-item",{class:e.$route.path.indexOf("/Administracion/Articulos")?"":"success",on:{click:function(t){return e.$router.push({name:"ConsultarArticulos"})}}},[a("v-list-item-title",{staticClass:"text-center title ma-4"},[e._v("CONSULTAR "),a("br"),a("br"),e._v(" ARTÍCULOS")])],1),"administrador"===e.user.tipo?a("v-list-item",{class:"/Administracion/CrearCategoria"===e.$route.path?"success":"",on:{click:function(t){return e.$router.push({name:"CrearCategoria"})}}},[a("v-list-item-title",{staticClass:"text-center title ma-4"},[e._v("CREAR CATEGORÍA")])],1):e._e(),"administrador"===e.user.tipo?a("v-list-item",{class:e.$route.path.indexOf("/Administracion/Categorias")?"":"success",on:{click:function(t){return e.$router.push({name:"ConsultarCategorias"})}}},[a("v-list-item-title",{staticClass:"text-center title ma-4"},[e._v("CONSULTAR "),a("br"),a("br"),e._v(" CATEGORÍA")])],1):e._e(),a("v-list-item",{class:"/Administracion/CrearNota"===e.$route.path?"success":"",on:{click:function(t){return e.$router.push({name:"CrearNota"})}}},[a("v-list-item-title",{staticClass:"text-center title ma-4"},[e._v("CREAR NOTA")])],1),a("v-list-item",{class:e.$route.path.indexOf("/Administracion/Notas")?"":"success",on:{click:function(t){return e.$router.push({name:"ConsultarNotas"})}}},[a("v-list-item-title",{staticClass:"text-center title ma-4"},[e._v("CONSULTAR NOTAS")])],1)],1)},v=[],k={name:"menuUsuario",computed:Object(o["a"])({},Object(p["d"])(["user"]))},g=k,A=a("2877"),C=a("6544"),x=a.n(C),w=a("da13"),S=a("5d23"),_=Object(A["a"])(g,b,v,!1,null,"0a38160d",null),O=_.exports;x()(_,{VListItem:w["a"],VListItemTitle:S["b"]});var E={name:"App",components:{MenuUsuario:O},data:function(){return{modeAdmin:!0,categorias:{},drawer:!1,dialoga:!1,buscar:"",mostrar:!1,usuario:"",password:"",nameRules:[function(e){return!!e||"Usuario requerido"},function(e){return e&&e.length<=10||"Usuario maximo 10 caracteres"}],passRules:[function(e){return!!e||"Contraseña requerida"},function(e){return e&&e.length>=8||"Contraseña minimo 8 caracteres"}]}},validations:{usuario:{required:f["required"],maxLength:Object(f["maxLength"])(10)},password:{required:f["required"],minLength:Object(f["minLength"])(8)}},created:function(){this.setBack(!1),this.obtenerCategorias()},mounted:function(){this.setBack(!1)},updated:function(){},computed:Object(o["a"])({},Object(p["d"])(["back","admin","user","dialogLogin","mensajeError","HOST"])),methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({obtenerCategorias:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a,n,r,i,c,o,s,l,m,p,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.cargando=!0,a=u.a.jws.JWS,n="Alvaro1234@asdfgh",r={alg:"HS256",typ:"JWT"},i={id:localStorage.getItem("usuarioID"),func:"consultarCategorias",admin:"nok"},c=a.sign("HS256",r,i,{utf8:n}),o=new FormData,o.append("jwt",c),t.next=10,h.a.post(e.HOST+"server/api.php",o);case 10:s=t.sent,l=s.data,l.status?(m=l.token,p=a.verifyJWT(m,{utf8:n},{alg:["HS256"]}),p?(f=d()(m),f.status&&f.data?e.categorias=f.data:e.cargando=!1):e.cargando=!1):e.cargando=!1;case 13:case"end":return t.stop()}}),t)})))()}},Object(p["c"])(["setBack","setAdmin","setDialogLogin"])),Object(p["b"])(["iniciarSesion","cerrarSesion","irAtras"])),{},{login:function(){this.iniciarSesion({usuario:this.$v.usuario.$model,clave:this.$v.password.$model})},logOut:function(){this.dialoga=!1,this.cerrarSesion()},abrirLogin:function(){this.setDialogLogin(!0)},cerrarLogin:function(){this.setDialogLogin(!1)}})},y=E,I=(a("2c6f"),a("7496")),L=a("40dc"),$=a("5bc1"),j=a("8336"),N=a("b0af"),R=a("99d9"),U=a("62ad"),T=a("169a"),q=a("132d"),D=a("8860"),V=a("1baa"),B=a("f6c4"),P=a("f774"),M=a("0fd9"),H=a("2fa4"),F=a("b73d"),J=a("8654"),G=Object(A["a"])(y,r,i,!1,null,"0f56c019",null),W=G.exports;x()(G,{VApp:I["a"],VAppBar:L["a"],VAppBarNavIcon:$["a"],VBtn:j["a"],VCard:N["a"],VCardText:R["b"],VCol:U["a"],VDialog:T["a"],VIcon:q["a"],VList:D["a"],VListItem:w["a"],VListItemGroup:V["a"],VListItemTitle:S["b"],VMain:B["a"],VNavigationDrawer:P["a"],VRow:M["a"],VSpacer:H["a"],VSwitch:F["a"],VTextField:J["a"]});var z=a("a18c"),K=a("6c27");n["a"].use(p["a"]);var Q=new p["a"].Store({state:{back:!1,user:{usuarioID:localStorage.getItem("usuarioID")||null,tipo:localStorage.getItem("tipo")||null,usuario:localStorage.getItem("usuario")||null},dialogLogin:!1,mensajeError:"",error:!1,tweets:null,rutaBack:"",paramBack:"",HOST:"http://192.168.0.176:80/"},mutations:{setTweets:function(e,t){e.tweets=t},setBack:function(e,t){e.back=t},setDialogLogin:function(e,t){e.dialogLogin=t},setMensajeError:function(e,t){e.mensajeError=t},setAdmin:function(e,t){e.admin=t},setUser:function(e,t){e.user=t},setError:function(e,t){e.error=t},setRutaBack:function(e,t){e.rutaBack=t},setParamBack:function(e,t){e.paramBack=t},borrarUsuario:function(e){e.user={usuarioID:null,tipo:null,usuario:null}}},actions:{irAtras:function(e){var t=e.state;if("nok"===t.rutaBack)z["a"].go(-1);else{t.paramBack?{name:t.rutaBack,params:{id:t.paramBack}}:{name:t.rutaBack},z["a"].push({name:t.rutaBack})}},iniciarSesion:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function a(){var n,r,i,c,o,s,l,m,p,f,b,v,k,g;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,r=e.state,i=u.a.jws.JWS,c="Alvaro1234@asdfgh",o={alg:"HS256",typ:"JWT"},s={func:"login",usuario:t.usuario,clave:Object(K["sha256"])(t.clave)},l=i.sign("HS256",o,s,{utf8:c}),m=new FormData,m.append("jwt",l),a.next=10,h.a.post(r.HOST+"server/api.php",m);case 10:p=a.sent,f=p.data,f.status?(b=f.token,v=i.verifyJWT(b,{utf8:c},{alg:["HS256"]}),v?(k=d()(b),k.status?k.login?(g=k.data,localStorage.setItem("usuarioID",g.usuarioID),localStorage.setItem("tipo",g.tipo),localStorage.setItem("usuario",g.usuario),n("setUser",g),n("setDialogLogin",!1),n("setMensajeError",null),z["a"].push({name:"Administracion"})):n("setMensajeError","Usuario o contraseña incorrectos"):n("setMensajeError","Upss... prueba otra vez")):n("setMensajeError","Upss... prueba otra vez")):n("setMensajeError","Server KO... intentelo de nuevo");case 13:case"end":return a.stop()}}),a)})))()},cerrarSesion:function(e){var t=e.commit;localStorage.removeItem("usuarioID"),localStorage.removeItem("tipo"),t("borrarUsuario"),z["a"].push({name:"Home"})}},modules:{}}),X=a("f309"),Y=a("2e15"),Z=a.n(Y);n["a"].use(X["a"]);var ee=new X["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#042533",secondary:"#024059",accent:"#82B1FF",error:"#f44336",info:"#2196F3",success:"#4ebfb4",warning:"#FFC107"}}},lang:{locales:{es:Z.a},current:"es"}}),te=a("1dce"),ae=a.n(te);n["a"].use(ae.a),n["a"].config.productionTip=!1,new n["a"]({router:z["a"],store:Q,vuetify:ee,render:function(e){return e(W)}}).$mount("#app")},8673:function(e,t,a){},a18c:function(e,t,a){"use strict";a("45fc"),a("d3b7");var n=a("2b0e"),r=a("8c4f");n["a"].use(r["a"]);var i=[{path:"/",name:"Home",component:function(){return Promise.all([a.e("chunk-cc6c1312"),a.e("chunk-ae108c5a")]).then(a.bind(null,"bb51"))}},{path:"/NotFound",name:"NotFound",component:function(){return a.e("chunk-8a5323f8").then(a.bind(null,"9703"))}},{path:"/categoria/:id",name:"HomeFiltrado",component:function(){return Promise.all([a.e("chunk-cc6c1312"),a.e("chunk-a0a80408")]).then(a.bind(null,"c670"))}},{path:"/Articulo/:id",name:"Articulo",component:function(){return Promise.all([a.e("chunk-cc6c1312"),a.e("chunk-061114fe")]).then(a.bind(null,"6abc"))}},{path:"/Administracion",name:"Administracion",component:function(){return a.e("chunk-03ac7ea7").then(a.bind(null,"529d"))},meta:{requiresAuth:!0}},{path:"/Administracion/Usuarios",name:"ConsultarUsuario",component:function(){return Promise.all([a.e("chunk-3383d96d"),a.e("chunk-e5e12c56")]).then(a.bind(null,"d004"))},meta:{requiresAdmin:!0}},{path:"/Administracion/Usuarios/:id",name:"Usuario",component:function(){return a.e("chunk-6020993e").then(a.bind(null,"9c1c"))},meta:{requiresAdmin:!0}},{path:"/Administracion/CrearArticulo",name:"CrearArticulo",component:function(){return Promise.all([a.e("chunk-3383d96d"),a.e("chunk-6dbf7ea4")]).then(a.bind(null,"29ad"))},meta:{requiresAuth:!0}},{path:"/Administracion/CrearUsuario",name:"CrearUsuario",component:function(){return Promise.all([a.e("chunk-3383d96d"),a.e("chunk-787ea247")]).then(a.bind(null,"d559"))},meta:{requiresAdmin:!0}},{path:"/Administracion/Usuarios/Editar/:id",name:"EditarUsuario",component:function(){return Promise.all([a.e("chunk-3383d96d"),a.e("chunk-3897ad6b")]).then(a.bind(null,"b9a6"))},meta:{requiresAdmin:!0}},{path:"/Administracion/Articulos",name:"ConsultarArticulos",component:function(){return Promise.all([a.e("chunk-3383d96d"),a.e("chunk-e7dd3944")]).then(a.bind(null,"1bf8"))},meta:{requiresAuth:!0}},{path:"/Administracion/Articulos/Validar/:id",name:"ValidarArticulos",component:function(){return a.e("chunk-49be57c2").then(a.bind(null,"5bb5"))},meta:{requiresAuth:!0}},{path:"/Administracion/Articulos/Editar/:id",name:"EditarArticulo",component:function(){return Promise.all([a.e("chunk-3383d96d"),a.e("chunk-5c608bb6")]).then(a.bind(null,"3302"))},meta:{requiresAuth:!0}},{path:"/Administracion/CrearCategoria",name:"CrearCategoria",component:function(){return a.e("chunk-96691d94").then(a.bind(null,"49fd"))},meta:{requiresAdmin:!0}},{path:"/Administracion/Categorias",name:"ConsultarCategorias",component:function(){return a.e("chunk-3ec85076").then(a.bind(null,"2276"))},meta:{requiresAdmin:!0}},{path:"/Administracion/Categorias/Editar/:id",name:"EditarCategoria",component:function(){return a.e("chunk-3d4eebb8").then(a.bind(null,"db15"))},meta:{requiresAuth:!0}},{path:"/Administracion/CrearNota",name:"CrearNota",component:function(){return a.e("chunk-00a26284").then(a.bind(null,"cb86"))},meta:{requiresAuth:!0}},{path:"/Administracion/Logs",name:"Logs",component:function(){return Promise.all([a.e("chunk-3383d96d"),a.e("chunk-50468a0d")]).then(a.bind(null,"bbae"))},meta:{requiresAdmin:!0}},{path:"/Administracion/Notas",name:"ConsultarNotas",component:function(){return a.e("chunk-02a15bbb").then(a.bind(null,"a801"))},meta:{requiresAuth:!0}},{path:"/Administracion/Notas/:id",name:"Notas",component:function(){return a.e("chunk-4074ef0e").then(a.bind(null,"0878"))},meta:{requiresAuth:!0}},{path:"/Administracion/Notas/Editar/:id",name:"EditarNota",component:function(){return a.e("chunk-17ebc0a6").then(a.bind(null,"3715"))},meta:{requiresAuth:!0}}],c=new r["a"]({mode:"history",base:"/",routes:i});c.beforeEach((function(e,t,a){var n={usuarioID:localStorage.getItem("usuarioID")||null,tipo:localStorage.getItem("tipo")||null};e.matched.length?e.matched.some((function(e){return e.meta.requiresAuth}))?null!==n.usuarioID&&null!==n.tipo?a():a({name:"Home"}):e.matched.some((function(e){return e.meta.requiresAdmin}))?null!==n.usuarioID&&"administrador"===n.tipo?a():a({name:"Administracion"}):a():a({name:"NotFound"})})),t["a"]=c},cf05:function(e,t,a){e.exports=a.p+"img/logo.708cb8be.png"}});
//# sourceMappingURL=app.3465d32d.js.map