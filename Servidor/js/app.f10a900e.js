(function(e){function t(t){for(var a,r,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);m&&m(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},i={app:0},o=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-00a26284":"0c673155","chunk-02a15bbb":"4d50057d","chunk-03ac7ea7":"5e65fb3f","chunk-17ed9571":"9cb81ee3","chunk-2d898815":"7a71dd78","chunk-3383d96d":"ef1698ae","chunk-365a2273":"4359868e","chunk-38a2a19c":"f9b8be2a","chunk-50468a0d":"962701ec","chunk-6de122b7":"2cd04fe5","chunk-787ea247":"d23ce402","chunk-e5e12c56":"2c90942f","chunk-fdd53826":"5ad283bf","chunk-35226d1e":"12cc39aa","chunk-356e86bc":"295f9daf","chunk-00b76f32":"9aef5ce7","chunk-08ce1a2c":"0d8057a8","chunk-ae108c5a":"bacc4243","chunk-47d836fa":"e8632ca6","chunk-6f982f16":"4a345398","chunk-8a5323f8":"691dc932","chunk-8b180448":"f10e9dd3","chunk-96691d94":"5231dd03"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-00a26284":1,"chunk-02a15bbb":1,"chunk-03ac7ea7":1,"chunk-17ed9571":1,"chunk-2d898815":1,"chunk-3383d96d":1,"chunk-365a2273":1,"chunk-38a2a19c":1,"chunk-50468a0d":1,"chunk-6de122b7":1,"chunk-787ea247":1,"chunk-e5e12c56":1,"chunk-fdd53826":1,"chunk-35226d1e":1,"chunk-356e86bc":1,"chunk-00b76f32":1,"chunk-08ce1a2c":1,"chunk-ae108c5a":1,"chunk-47d836fa":1,"chunk-6f982f16":1,"chunk-8a5323f8":1,"chunk-8b180448":1,"chunk-96691d94":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-00a26284":"572d759b","chunk-02a15bbb":"e130a28f","chunk-03ac7ea7":"6ee8fbdc","chunk-17ed9571":"04a69a53","chunk-2d898815":"66f046dd","chunk-3383d96d":"aa2f10c4","chunk-365a2273":"d9d6a1e3","chunk-38a2a19c":"f3ef48ea","chunk-50468a0d":"6b901a80","chunk-6de122b7":"c1c06698","chunk-787ea247":"a5e7c81c","chunk-e5e12c56":"5b801789","chunk-fdd53826":"c3875eea","chunk-35226d1e":"362cd148","chunk-356e86bc":"688503a1","chunk-00b76f32":"2a8b78ec","chunk-08ce1a2c":"573b8489","chunk-ae108c5a":"f79499a8","chunk-47d836fa":"428c36ef","chunk-6f982f16":"d5a57b02","chunk-8a5323f8":"5e62368e","chunk-8b180448":"12bba038","chunk-96691d94":"995a3ae7"}[e]+".css",i=s.p+a,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===i))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===a||l===i)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],m.parentNode.removeChild(m),n(o)},m.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(m)})).then((function(){r[e]=0})));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(m);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}i[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var m=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{color:"primary",dense:"",dark:"",app:"",height:"70"}},[a("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),a("RouterLink",{attrs:{to:{name:"Home"}}},[a("img",{attrs:{width:"60",src:n("cf05")}})]),e.back?a("v-icon",{staticClass:"white--text ml-4",on:{click:function(t){return e.atras()}}},[e._v("mdi-reply")]):e._e(),a("div",{staticClass:"frase"},[a("div",{staticClass:"texto d-none d-sm-none d-md-block"},[null==this.user.tipo?a("span",[e._v("LA NUEVA GENERACIÓN")]):e._e(),null!=this.user.tipo?a("span",[e._v("ADMINISTRACIÓN")]):e._e()])]),a("v-spacer")],1),null==this.user.tipo?a("v-navigation-drawer",{attrs:{app:"",dark:"",temporary:"",clipped:"",color:"secondary"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[a("v-list-item-group",{attrs:{"active-class":"success"}},[a("v-list-item-title",{staticClass:"text-center title"},[e._v("MENÚ")]),a("div",{staticClass:"linea"}),a("div",{staticClass:"text-center mb-5"},[a("v-btn",{staticClass:"btn",attrs:{color:"success"},on:{click:function(t){return e.abrirLogin()}}},[e._v("ADMINISTRACIÓN")])],1),a("div",{staticClass:"categorias"},e._l(e.categorias,(function(t){return a("v-list-item",[a("v-list-item-title",{staticClass:"text-center title ma-4",staticStyle:{"text-transform":"uppercase"},on:{click:function(n){return e.$router.push({path:"/categoria/"+t.nombre})}}},[e._v(" "+e._s(t.nombre)+" ")])],1)})),1)],1)],1)],1):e._e(),a("v-dialog",{attrs:{"max-width":"290",persistent:""},model:{value:this.dialogLogin,callback:function(t){e.$set(this,"dialogLogin",t)},expression:"this.dialogLogin"}},[a("div",{staticClass:"tarjeta"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.login()}}},[a("v-card",{staticClass:"text-center",attrs:{color:"secondary",dark:""}},[a("v-card-text",{staticClass:"headline titulo pt-3 white--text"},[e._v("ADMINISTRACIÓN")]),this.mensajeError?a("v-card-text",{staticClass:"mensaje"},[e._v(e._s(e.mensajeError))]):e._e(),a("v-card-text",[a("v-text-field",{attrs:{counter:10,rules:e.nameRules,label:"Usuario",required:""},model:{value:e.$v.usuario.$model,callback:function(t){e.$set(e.$v.usuario,"$model",t)},expression:"$v.usuario.$model"}}),a("v-text-field",{attrs:{counter:"",rules:e.passRules,label:"Constraseña",type:"password",required:""},model:{value:e.$v.password.$model,callback:function(t){e.$set(e.$v.password,"$model",t)},expression:"$v.password.$model"}})],1),a("v-card-text",{staticClass:"text-center"},[a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-btn",{attrs:{disabled:e.$v.$invalid,color:"success darken-1",type:"submit"}},[e._v(" LOGIN ")])],1),a("v-col",{attrs:{cols:"6"}},[a("v-btn",{attrs:{color:"error darken-1"},on:{click:function(t){return e.cerrarLogin()}}},[e._v(" CANCELAR ")])],1)],1)],1)],1)],1)])]),null!=this.user.tipo?a("v-navigation-drawer",{attrs:{app:"",dark:"",temporary:"",clipped:"",color:"secondary","overlay-color":"#000"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[a("v-list-item-group",{attrs:{"active-class":"success"}},[a("v-list-item-title",{staticClass:"text-center title"},[e._v("MENÚ")]),a("div",{staticClass:"linea"}),a("div",{staticClass:"text-center mb-5"},[a("v-btn",{staticClass:"btn",attrs:{color:"success"},on:{click:function(t){e.dialoga=!0}}},[e._v("CERRAR SESION")])],1),a("MenuUsuario")],1)],1)],1):e._e(),a("v-dialog",{attrs:{"max-width":"290"},model:{value:e.dialoga,callback:function(t){e.dialoga=t},expression:"dialoga"}},[a("div",{staticClass:"tarjeta"},[a("v-card",{staticClass:"text-center",attrs:{color:"secondary",dark:""}},[a("v-card-text",{staticClass:"headline titulo pt-3 white--text"},[e._v(" ¿QUIERES CERRAR LA SESIÓN? ")]),a("v-card-text",{staticClass:"text-center"},[a("v-btn",{attrs:{color:"success darken-1"},on:{click:function(t){return e.logOut()}}},[e._v(" SI ")]),a("v-btn",{attrs:{color:"error darken-1"},on:{click:function(t){e.dialoga=!1}}},[e._v(" NO ")])],1)],1)],1)]),a("v-main",{class:{content:null==this.user.tipo,contentAdmin:null!=this.user.tipo}},[a("RouterView",{key:e.$route.fullPath})],1)],1)},i=[],o=(n("96cf"),n("1da1")),c=n("5530"),s=n("81fa"),u=n.n(s),l=n("04e1"),d=n.n(l),m=n("bc3a"),h=n.n(m),p=n("2f62"),f=n("b5ae"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",["administrador"===e.user.tipo?n("v-list-item",{on:{click:function(t){return e.$router.push({name:"Logs"})}}},[n("v-list-item-title",{staticClass:"text-center title ma-4"},[e._v("LOGS")])],1):e._e(),n("v-list-item",{on:{click:function(t){return e.$router.push({name:"Administracion"})}}},[n("v-list-item-title",{staticClass:"text-center title ma-4"},[e._v("HOME")])],1),"administrador"===e.user.tipo?n("v-list-item",{on:{click:function(t){return e.$router.push({name:"CrearUsuario"})}}},[n("v-list-item-title",{staticClass:"text-center title ma-4"},[e._v("CREAR USUARIO")])],1):e._e(),"administrador"===e.user.tipo?n("v-list-item",{on:{click:function(t){return e.$router.push({name:"ConsultarUsuario"})}}},[n("v-list-item-title",{staticClass:"text-center title ma-4"},[e._v("CONSULTAR "),n("br"),n("br"),e._v("USUARIO")])],1):e._e(),n("v-list-item",{on:{click:function(t){return e.$router.push({name:"CrearArticulo"})}}},[n("v-list-item-title",{staticClass:"text-center title ma-4"},[e._v("CREAR ARTÍCULO")])],1),n("v-list-item",{on:{click:function(t){return e.$router.push({name:"ConsultarArticulos"})}}},[n("v-list-item-title",{staticClass:"text-center title ma-4"},[e._v("CONSULTAR "),n("br"),n("br"),e._v(" ARTÍCULOS")])],1),"administrador"===e.user.tipo?n("v-list-item",{on:{click:function(t){return e.$router.push({name:"CrearCategoria"})}}},[n("v-list-item-title",{staticClass:"text-center title ma-4"},[e._v("CREAR CATEGORÍA")])],1):e._e(),"administrador"===e.user.tipo?n("v-list-item",{on:{click:function(t){return e.$router.push({name:"ConsultarCategorias"})}}},[n("v-list-item-title",{staticClass:"text-center title ma-4"},[e._v("CONSULTAR "),n("br"),n("br"),e._v(" CATEGORÍA")])],1):e._e(),n("v-list-item",{on:{click:function(t){return e.$router.push({name:"CrearNota"})}}},[n("v-list-item-title",{staticClass:"text-center title ma-4"},[e._v("CREAR NOTA")])],1),n("v-list-item",{on:{click:function(t){return e.$router.push({name:"ConsultarNotas"})}}},[n("v-list-item-title",{staticClass:"text-center title ma-4"},[e._v("CONSULTAR NOTAS")])],1)],1)},b=[],k={name:"menuUsuario",computed:Object(c["a"])({},Object(p["d"])(["user"]))},g=k,A=n("2877"),C=n("6544"),w=n.n(C),x=n("da13"),S=n("5d23"),_=Object(A["a"])(g,v,b,!1,null,"c72b9284",null),O=_.exports;w()(_,{VListItem:x["a"],VListItemTitle:S["b"]});var E={name:"App",components:{MenuUsuario:O},data:function(){return{categorias:{},drawer:!1,dialoga:!1,buscar:"",mostrar:!1,usuario:"",password:"",nameRules:[function(e){return!!e||"Usuario requerido"},function(e){return e&&e.length<=10||"Usuario maximo 10 caracteres"}],passRules:[function(e){return!!e||"Contraseña requerida"},function(e){return e&&e.length>=8||"Contraseña minimo 8 caracteres"}]}},validations:{usuario:{required:f["required"],maxLength:Object(f["maxLength"])(10)},password:{required:f["required"],minLength:Object(f["minLength"])(8)}},created:function(){this.setBack(!1),this.obtenerCategorias()},mounted:function(){this.setBack(!1)},updated:function(){},computed:Object(c["a"])({},Object(p["d"])(["back","admin","user","dialogLogin","mensajeError","HOST"])),methods:Object(c["a"])(Object(c["a"])(Object(c["a"])({obtenerCategorias:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a,r,i,o,c,s,l,m,p,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.cargando=!0,n=u.a.jws.JWS,a="Alvaro1234@asdfgh",r={alg:"HS256",typ:"JWT"},i={id:localStorage.getItem("usuarioID"),func:"consultarCategorias"},o=n.sign("HS256",r,i,{utf8:a}),c=new FormData,c.append("jwt",o),t.next=10,h.a.post(e.HOST+"server/api.php",c);case 10:s=t.sent,l=s.data,l.status?(m=l.token,p=n.verifyJWT(m,{utf8:a},{alg:["HS256"]}),p?(f=d()(m),f.status&&f.data?e.categorias=f.data:e.cargando=!1):e.cargando=!1):e.cargando=!1;case 13:case"end":return t.stop()}}),t)})))()}},Object(p["c"])(["setBack","setAdmin","setDialogLogin"])),Object(p["b"])(["iniciarSesion","cerrarSesion"])),{},{atras:function(){this.$router.go(-1)},login:function(){this.iniciarSesion({usuario:this.$v.usuario.$model,clave:this.$v.password.$model})},logOut:function(){this.dialoga=!1,this.cerrarSesion()},abrirLogin:function(){this.setDialogLogin(!0)},cerrarLogin:function(){this.setDialogLogin(!1)}})},y=E,j=(n("ad56"),n("7496")),I=n("40dc"),L=n("5bc1"),N=n("8336"),R=n("b0af"),$=n("99d9"),U=n("62ad"),T=n("169a"),q=n("132d"),D=n("8860"),V=n("1baa"),P=n("f6c4"),M=n("f774"),H=n("0fd9"),F=n("2fa4"),B=n("8654"),J=Object(A["a"])(y,r,i,!1,null,"3af5e7c2",null),G=J.exports;w()(J,{VApp:j["a"],VAppBar:I["a"],VAppBarNavIcon:L["a"],VBtn:N["a"],VCard:R["a"],VCardText:$["b"],VCol:U["a"],VDialog:T["a"],VIcon:q["a"],VList:D["a"],VListItem:x["a"],VListItemGroup:V["a"],VListItemTitle:S["b"],VMain:P["a"],VNavigationDrawer:M["a"],VRow:H["a"],VSpacer:F["a"],VTextField:B["a"]});var W=n("a18c"),z=n("6c27");a["a"].use(p["a"]);var K=new p["a"].Store({state:{back:!1,user:{usuarioID:localStorage.getItem("usuarioID")||null,tipo:localStorage.getItem("tipo")||null},dialogLogin:!1,mensajeError:"",error:!1,tweets:null,HOST:"http://192.168.1.157:80/"},mutations:{setTweets:function(e,t){e.tweets=t},setBack:function(e,t){e.back=t},setDialogLogin:function(e,t){e.dialogLogin=t},setMensajeError:function(e,t){e.mensajeError=t},setAdmin:function(e,t){e.admin=t},setUser:function(e,t){e.user=t},setError:function(e,t){e.error=t},borrarUsuario:function(e){e.user={usuarioID:null,tipo:null}}},actions:{iniciarSesion:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var a,r,i,o,c,s,l,m,p,f,v,b,k,g;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,r=e.state,i=u.a.jws.JWS,o="Alvaro1234@asdfgh",c={alg:"HS256",typ:"JWT"},s={func:"login",usuario:t.usuario,clave:Object(z["sha256"])(t.clave)},l=i.sign("HS256",c,s,{utf8:o}),m=new FormData,m.append("jwt",l),n.next=10,h.a.post(r.HOST+"server/api.php",m);case 10:p=n.sent,f=p.data,f.status?(v=f.token,b=i.verifyJWT(v,{utf8:o},{alg:["HS256"]}),b?(k=d()(v),k.status?k.login?(g=k.data,localStorage.setItem("usuarioID",g.usuarioID),localStorage.setItem("tipo",g.tipo),a("setUser",g),a("setDialogLogin",!1),a("setMensajeError",null),W["a"].push({name:"Administracion"})):a("setMensajeError","Usuario o contraseña incorrectos"):a("setMensajeError","Upss... prueba otra vez")):a("setMensajeError","Upss... prueba otra vez")):a("setMensajeError","Server KO... intentelo de nuevo");case 13:case"end":return n.stop()}}),n)})))()},cerrarSesion:function(e){var t=e.commit;localStorage.removeItem("usuarioID"),localStorage.removeItem("tipo"),t("borrarUsuario"),W["a"].push({name:"Home"})}},modules:{}}),Q=n("f309"),X=n("2e15"),Y=n.n(X);a["a"].use(Q["a"]);var Z=new Q["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#042533",secondary:"#024059",accent:"#82B1FF",error:"#f44336",info:"#2196F3",success:"#4ebfb4",warning:"#FFC107"}}},lang:{locales:{es:Y.a},current:"es"}}),ee=n("1dce"),te=n.n(ee);a["a"].use(te.a),a["a"].config.productionTip=!1,new a["a"]({router:W["a"],store:K,vuetify:Z,render:function(e){return e(G)}}).$mount("#app")},"5cbf":function(e,t,n){},a18c:function(e,t,n){"use strict";n("45fc"),n("d3b7");var a=n("2b0e"),r=n("8c4f");a["a"].use(r["a"]);var i=[{path:"/",name:"Home",component:function(){return Promise.all([n.e("chunk-356e86bc"),n.e("chunk-ae108c5a")]).then(n.bind(null,"bb51"))}},{path:"/NotFound",name:"NotFound",component:function(){return n.e("chunk-8a5323f8").then(n.bind(null,"9703"))}},{path:"/categoria/:categoria",name:"HomeFiltrado",component:function(){return Promise.all([n.e("chunk-356e86bc"),n.e("chunk-08ce1a2c")]).then(n.bind(null,"c670"))}},{path:"/Articulo/:id",name:"Articulo",component:function(){return Promise.all([n.e("chunk-356e86bc"),n.e("chunk-00b76f32")]).then(n.bind(null,"6abc"))}},{path:"/Administracion",name:"Administracion",component:function(){return n.e("chunk-03ac7ea7").then(n.bind(null,"529d"))},meta:{requiresAuth:!0}},{path:"/Administracion/Usuarios",name:"ConsultarUsuario",component:function(){return Promise.all([n.e("chunk-3383d96d"),n.e("chunk-e5e12c56")]).then(n.bind(null,"d004"))},meta:{requiresAdmin:!0}},{path:"/Administracion/Usuarios/:id",name:"Usuario",component:function(){return n.e("chunk-35226d1e").then(n.bind(null,"9c1c"))},meta:{requiresAdmin:!0}},{path:"/Administracion/CrearArticulo",name:"CrearArticulo",component:function(){return Promise.all([n.e("chunk-3383d96d"),n.e("chunk-6de122b7")]).then(n.bind(null,"29ad"))},meta:{requiresAuth:!0}},{path:"/Administracion/CrearUsuario",name:"CrearUsuario",component:function(){return Promise.all([n.e("chunk-3383d96d"),n.e("chunk-787ea247")]).then(n.bind(null,"d559"))},meta:{requiresAdmin:!0}},{path:"/Administracion/EditarUsuario/:id",name:"EditarUsuario",component:function(){return Promise.all([n.e("chunk-3383d96d"),n.e("chunk-fdd53826")]).then(n.bind(null,"b9a6"))},meta:{requiresAdmin:!0}},{path:"/Administracion/Articulos",name:"ConsultarArticulos",component:function(){return Promise.all([n.e("chunk-3383d96d"),n.e("chunk-365a2273")]).then(n.bind(null,"1bf8"))},meta:{requiresAuth:!0}},{path:"/Administracion/ValidarArticulos/:id",name:"ValidarArticulos",component:function(){return n.e("chunk-47d836fa").then(n.bind(null,"5bb5"))},meta:{requiresAuth:!0}},{path:"/Administracion/EditarArticulo/:id",name:"EditarArticulo",component:function(){return Promise.all([n.e("chunk-3383d96d"),n.e("chunk-38a2a19c")]).then(n.bind(null,"3302"))},meta:{requiresAuth:!0}},{path:"/Administracion/CrearCategoria",name:"CrearCategoria",component:function(){return n.e("chunk-96691d94").then(n.bind(null,"49fd"))},meta:{requiresAdmin:!0}},{path:"/Administracion/Categorias",name:"ConsultarCategorias",component:function(){return n.e("chunk-6f982f16").then(n.bind(null,"2276"))},meta:{requiresAdmin:!0}},{path:"/Administracion/EditarCategoria/:id",name:"EditarCategoria",component:function(){return n.e("chunk-17ed9571").then(n.bind(null,"db15"))},meta:{requiresAuth:!0}},{path:"/Administracion/CrearNota",name:"CrearNota",component:function(){return n.e("chunk-00a26284").then(n.bind(null,"cb86"))},meta:{requiresAuth:!0}},{path:"/Administracion/Logs",name:"Logs",component:function(){return Promise.all([n.e("chunk-3383d96d"),n.e("chunk-50468a0d")]).then(n.bind(null,"bbae"))},meta:{requiresAdmin:!0}},{path:"/Administracion/Notas",name:"ConsultarNotas",component:function(){return n.e("chunk-02a15bbb").then(n.bind(null,"a801"))},meta:{requiresAuth:!0}},{path:"/Administracion/Notas/:id",name:"Notas",component:function(){return n.e("chunk-8b180448").then(n.bind(null,"0878"))},meta:{requiresAuth:!0}},{path:"/Administracion/EditarNota/:id",name:"EditarNota",component:function(){return n.e("chunk-2d898815").then(n.bind(null,"3715"))},meta:{requiresAuth:!0}}],o=new r["a"]({mode:"history",base:"/",routes:i});o.beforeEach((function(e,t,n){var a={usuarioID:localStorage.getItem("usuarioID")||null,tipo:localStorage.getItem("tipo")||null};e.matched.length?e.matched.some((function(e){return e.meta.requiresAuth}))?null!==a.usuarioID&&null!==a.tipo?n():n({name:"Home"}):e.matched.some((function(e){return e.meta.requiresAdmin}))?null!==a.usuarioID&&"administrador"===a.tipo?n():n({name:"Administracion"}):n():n({name:"NotFound"})})),t["a"]=o},ad56:function(e,t,n){"use strict";var a=n("5cbf"),r=n.n(a);r.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.708cb8be.png"}});
//# sourceMappingURL=app.f10a900e.js.map