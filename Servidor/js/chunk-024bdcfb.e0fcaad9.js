(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-024bdcfb"],{"0798":function(t,e,r){"use strict";r("caad");var a=r("5530"),s=r("ade3"),o=(r("0c18"),r("10d2")),n=r("afdd"),i=r("9d26"),c=r("f2e7"),l=r("7560"),u=r("2b0e"),d=u["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),v=r("58df"),p=r("d9bd");e["a"]=Object(v["a"])(o["a"],c["a"],d).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(s["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(n["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(i["a"],{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(i["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=Object(a["a"])(Object(a["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||l["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(p["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,r){},8894:function(t,e,r){"use strict";var a=r("f383"),s=r.n(a);s.a},"9c1c":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-row",[r("v-col",{attrs:{cols:"0",md:"4"}}),r("v-col",{attrs:{cols:"12",md:"4"}},[r("div",{staticClass:"titular text-center"},[t._v(" "+t._s(t.usuario.nombre)+" "+t._s(t.usuario.apellido1)+" "+t._s(t.usuario.apellido2)+" ")])]),r("v-col",{attrs:{cols:"0",md:"4"}})],1),r("v-row",{staticClass:"mensaje"},[r("v-col",{attrs:{cols:"0",md:"3"}}),r("v-col",{attrs:{cols:"12",md:"6"}},[t.mensaje&&!t.error?r("v-alert",{staticClass:"alerta",attrs:{type:"success",dismissible:""}},[t._v(" "+t._s(t.mensajeError)+" ")]):t._e(),t.mensaje&&t.error?r("v-alert",{staticClass:"alerta",attrs:{type:"error",dismissible:""}},[t._v(" "+t._s(t.mensajeError)+" ")]):t._e()],1),r("v-col",{attrs:{cols:"0",md:"3"}})],1),r("v-row",{staticClass:"estadistica"},[r("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[t._v(" Articulos Creados"),r("br"),t._v(" "),r("div",{staticClass:"mt-3 datos"},[t._v(t._s(t.usuario.creado))])]),r("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[t._v(" Articulos Publicados"),r("br"),r("div",{staticClass:"mt-3 datos"},[t._v(t._s(t.usuario.publicado))])]),r("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[t._v(" Fecha de Alta"),r("br"),r("div",{staticClass:"mt-3 datos"},[t._v(t._s(t.usuario.fecha))])]),r("v-col",{attrs:{cols:"12"}}),r("v-col",{attrs:{cols:"12"}}),r("v-col",{attrs:{cols:"12"}}),r("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[t._v(" Porcentaje A.C / A.P"),r("br"),r("v-progress-circular",{staticClass:"mt-5",attrs:{rotate:90,size:100,width:12,value:t.porcentaje,color:"success"}},[t._v(" "+t._s(t.porcentaje)+"% ")])],1),r("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[t._v(" Usuario "),r("br"),t._v(" "),r("div",{staticClass:"mt-3 datos"},[t._v(t._s(t.usuario.tipo))])]),r("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[t._v(" Acciones "),r("br"),r("div",{staticClass:"mt-4"},[r("v-btn",{attrs:{color:"success",to:{name:"EditarUsuario",params:{id:this.$route.params.id}}}},[t._v("Editar")]),"activado"===t.usuario.valido?r("v-btn",{attrs:{color:"error"},on:{click:function(e){return t.borrar()}}},[t._v(" Borrar ")]):t._e(),"desactivado"===t.usuario.valido?r("v-btn",{attrs:{color:"warning"},on:{click:function(e){return t.activar()}}},[t._v(" Activar ")]):t._e()],1)])],1)],1)},s=[],o=(r("96cf"),r("1da1")),n=r("5530"),i=r("2f62"),c=r("81fa"),l=r.n(c),u=r("04e1"),d=r.n(u),v=r("bc3a"),p=r.n(v),h=r("a18c"),m={name:"Usuario",data:function(){return{usuario:[],error:!0,mensaje:"",cargando:"",porcentaje:0}},computed:Object(n["a"])({},Object(i["d"])(["HOST"])),created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,a,s,o,n,i,c,u,v,h,m;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.cargando=!0,r=l.a.jws.JWS,a="Alvaro1234@asdfgh",s={alg:"HS256",typ:"JWT"},o={id:localStorage.getItem("usuarioID"),usuarioID:t.$route.params.id,func:"consultarUsuario"},n=r.sign("HS256",s,o,{utf8:a}),i=new FormData,i.append("jwt",n),e.next=10,p.a.post(t.HOST+"server/api.php",i);case 10:c=e.sent,u=c.data,u.status?(v=u.token,h=r.verifyJWT(v,{utf8:a},{alg:["HS256"]}),h?(m=d()(v),m.status?m.data?(t.usuario=m.data,t.porcentaje=Math.round(100*t.usuario.publicado/t.usuario.creado),t.cargando=!1):t.cargando=!1:(t.mensaje="Upss... prueba otra vez",t.cargando=!1)):(t.mensaje="Upss... prueba otra vez",t.cargando=!1)):(null!==u.mensaje?t.mensaje=u.mensaje:t.mensaje="Server KO... intentelo de nuevo",t.cargando=!1);case 13:case"end":return e.stop()}}),e)})))()},mounted:function(){this.setBack(!0),window.scroll(0,0)},destroyed:function(){this.setBack(!1)},methods:Object(n["a"])(Object(n["a"])({},Object(i["c"])(["setBack","setMensajeError","setError"])),{},{borrar:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,a,s,o,n,i,c,u,v,m,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.cargando=!0,r=l.a.jws.JWS,a="Alvaro1234@asdfgh",s={alg:"HS256",typ:"JWT"},o={id:localStorage.getItem("usuarioID"),usuarioID:t.$route.params.id,func:"desactivarUsuario"},n=r.sign("HS256",s,o,{utf8:a}),i=new FormData,i.append("jwt",n),e.next=10,p.a.post(t.HOST+"server/api.php",i);case 10:c=e.sent,u=c.data,u.status?(v=u.token,m=r.verifyJWT(v,{utf8:a},{alg:["HS256"]}),m?(f=d()(v),f.status?f.desactivado?(t.setMensajeError("USUARIO DESACTIVADO CORRECTAMENTE"),t.setError(!1),h["a"].push({name:"ConsultarUsuario"})):(t.mensaje="EL USUARIO NO HA PODIDO DESACTIVARSE",t.error=!0,t.cargando=!1):(t.mensaje="Upss... prueba otra vez",t.error=!0,t.cargando=!1)):(t.mensaje="Upss... prueba otra vez",t.error=!0,t.cargando=!1)):(t.error=!0,null!==u.mensaje?t.mensaje=u.mensaje:t.mensaje="Server KO... intentelo de nuevo",t.cargando=!1);case 13:case"end":return e.stop()}}),e)})))()},activar:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,a,s,o,n,i,c,u,v,m,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.cargando=!0,r=l.a.jws.JWS,a="Alvaro1234@asdfgh",s={alg:"HS256",typ:"JWT"},o={id:localStorage.getItem("usuarioID"),usuarioID:t.$route.params.id,func:"activarUsuario"},n=r.sign("HS256",s,o,{utf8:a}),i=new FormData,i.append("jwt",n),e.next=10,p.a.post(t.HOST+"server/api.php",i);case 10:c=e.sent,u=c.data,u.status?(v=u.token,m=r.verifyJWT(v,{utf8:a},{alg:["HS256"]}),m?(f=d()(v),f.status?f.activado?(t.setMensajeError("USUARIO ACTIVADO CORRECTAMENTE"),t.setError(!1),h["a"].push({name:"ConsultarUsuario"})):(t.mensaje="EL USUARIO NO SE HA PODIDO ACTIVAR",t.error=!0,t.cargando=!1):(t.mensaje="Upss... prueba otra vez",t.error=!0,t.cargando=!1)):(t.mensaje="Upss... prueba otra vez",t.error=!0,t.cargando=!1)):(t.error=!0,null!==u.mensaje?t.mensaje=u.mensaje:t.mensaje="Server KO... intentelo de nuevo",t.cargando=!1);case 13:case"end":return e.stop()}}),e)})))()}})},f=m,g=(r("8894"),r("2877")),b=r("6544"),_=r.n(b),j=r("0798"),C=r("8336"),S=r("62ad"),w=r("490a"),O=r("0fd9"),A=Object(g["a"])(f,a,s,!1,null,"c5bc4f9a",null);e["default"]=A.exports;_()(A,{VAlert:j["a"],VBtn:C["a"],VCol:S["a"],VProgressCircular:w["a"],VRow:O["a"]})},afdd:function(t,e,r){"use strict";var a=r("8336");e["a"]=a["a"]},f383:function(t,e,r){}}]);
//# sourceMappingURL=chunk-024bdcfb.e0fcaad9.js.map