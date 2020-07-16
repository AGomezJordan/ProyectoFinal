(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e73e5f6"],{"0798":function(t,e,s){"use strict";s("caad");var o=s("5530"),r=s("ade3"),a=(s("0c18"),s("10d2")),n=s("afdd"),c=s("9d26"),i=s("f2e7"),l=s("7560"),u=s("2b0e"),d=u["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),v=s("58df"),h=s("d9bd");e["a"]=Object(v["a"])(a["a"],i["a"],d).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(r["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(n["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(c["a"],{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(c["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=Object(o["a"])(Object(o["a"])({},a["a"].options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||l["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(h["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,s){},"2a7f":function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));var o=s("71d9"),r=s("80d2"),a=Object(r["g"])("v-toolbar__title"),n=Object(r["g"])("v-toolbar__items");o["a"]},"8bdd":function(t,e,s){"use strict";var o=s("ce52"),r=s.n(o);r.a},afdd:function(t,e,s){"use strict";var o=s("8336");e["a"]=o["a"]},ce52:function(t,e,s){},d004:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-toolbar",{staticClass:"d-block d-sm-block d-md-none",attrs:{color:"#023059",dark:"",height:"250px"}},[s("v-icon",[t._v("mdi-filter")]),s("v-toolbar-title",[s("v-row",{staticClass:"ml-5 mt-8 text-center"},[s("v-col",{attrs:{cols:"6"}},[s("v-select",{staticClass:"ml-5 mr-5",attrs:{items:t.tipos,label:"Tipo",dark:"",color:"success"},model:{value:t.tipo,callback:function(e){t.tipo=e},expression:"tipo"}})],1),s("v-col",{attrs:{cols:"6"}},[s("v-select",{staticClass:"ml-5 mr-5",attrs:{items:t.estados,label:"Estado",dark:"",color:"success"},model:{value:t.estado,callback:function(e){t.estado=e},expression:"estado"}})],1),s("v-col",{attrs:{cols:"6"}},[s("v-text-field",{attrs:{label:"Fecha",type:"date",color:"success",dark:"",max:t.hoy},model:{value:t.fecha,callback:function(e){t.fecha=e},expression:"fecha"}})],1),s("v-col",{attrs:{cols:"6"}},[s("v-btn",{attrs:{color:"success",small:"",dark:""},on:{click:function(e){return t.filtrar()}}},[s("v-icon",[t._v("mdi-check")])],1),s("v-btn",{staticClass:"ml-5",attrs:{color:"error",small:"",dark:""},on:{click:function(e){return t.borrar()}}},[s("v-icon",[t._v("mdi-delete")])],1)],1)],1)],1)],1),s("v-toolbar",{staticClass:"d-none d-sm-none d-md-block",attrs:{collapse:!t.collapseOnScroll,color:"#023059",dark:"",absolute:""}},[s("v-icon",[t._v("mdi-filter")]),s("v-toolbar-title",[s("v-row",{staticClass:"ml-5 mt-8"},[s("v-col",{attrs:{cols:"3"}},[s("v-select",{staticClass:"ml-5 mr-5",attrs:{items:t.tipos,label:"Tipo",dark:"",color:"success"},model:{value:t.tipo,callback:function(e){t.tipo=e},expression:"tipo"}})],1),s("v-col",{attrs:{cols:"3"}},[s("v-select",{staticClass:"ml-5 mr-5",attrs:{items:t.estados,label:"Estado",dark:"",color:"success"},model:{value:t.estado,callback:function(e){t.estado=e},expression:"estado"}})],1),s("v-col",{attrs:{cols:"3"}},[s("v-text-field",{attrs:{label:"Fecha",type:"date",color:"success",dark:"",max:t.hoy},model:{value:t.fecha,callback:function(e){t.fecha=e},expression:"fecha"}})],1),s("v-col",{attrs:{cols:"3"}},[s("v-btn",{attrs:{color:"success",small:"",dark:""},on:{click:function(e){return t.filtrar()}}},[t._v(" FILTRAR ")]),s("v-btn",{staticClass:"ml-5",attrs:{color:"error",small:"",dark:""},on:{click:function(e){return t.borrar()}}},[t._v(" BORRAR ")])],1)],1)],1),s("v-spacer"),t.collapseOnScroll?t._e():s("v-icon",{on:{click:function(e){t.collapseOnScroll=!t.collapseOnScroll}}},[t._v("mdi-arrow-right-bold")]),t.collapseOnScroll?s("v-icon",{on:{click:function(e){t.collapseOnScroll=!t.collapseOnScroll}}},[t._v("mdi-arrow-left-bold")]):t._e()],1),s("div",{staticClass:"pa-5"},[s("v-row",{staticClass:"text-center mb-8"},[s("v-col",{attrs:{cols:"0",md:"4"}}),s("v-col",{staticClass:"pa-5",attrs:{cols:"12",md:"4"}},[s("div",{staticClass:"titular"},[t._v("CONSULTAR USUARIO")])]),s("v-col",{attrs:{cols:"0",md:"4"}})],1),!t.control||!this.mensajeError&&t.usuarios?t._e():s("v-row",{staticClass:"mensaje"},[s("v-col",{attrs:{cols:"0",md:"3"}}),s("v-col",{attrs:{cols:"12",md:"6"}},[this.mensajeError&&!t.error?s("v-alert",{staticClass:"alerta",attrs:{type:"success",dismissible:""}},[t._v(" "+t._s(t.mensajeError)+" ")]):t._e(),this.mensajeError&&t.error?s("v-alert",{staticClass:"alerta",attrs:{type:"error",dismissible:""}},[t._v(" "+t._s(t.mensajeError)+" ")]):t._e(),t.usuarios?t._e():s("v-alert",{staticClass:"alerta",attrs:{type:"error",dismissible:""}},[t._v(" "+t._s(t.mensaje)+" ")])],1),s("v-col",{attrs:{cols:"0",md:"3"}})],1),t._l(t.usuarios,(function(e){return t.usuarios?s("router-link",{attrs:{to:{name:"Usuario",params:{id:e.id}}}},[s("v-row",{staticClass:"text-center usuario mb-4"},[s("v-col",{staticClass:"text-left",attrs:{cols:"6",md:"3"}},[s("v-icon",{attrs:{color:"white"}},[t._v("mdi-account")]),t._v(" "+t._s(e.nombre)+" "+t._s(e.ap1)+" "+t._s(e.ap2)+" ")],1),s("v-col",{attrs:{cols:"6",md:"3"}},[t._v(" "+t._s(e.usuario)+" ")]),s("v-col",{attrs:{cols:"6",md:"3"}},[t._v(" "+t._s(e.tipo)+" ")]),s("v-col",{attrs:{cols:"6",md:"3"}},[t._v(" "+t._s(e.fecha)+" ")])],1)],1):t._e()}))],2)],1)},r=[],a=(s("96cf"),s("1da1")),n=s("5530"),c=s("81fa"),i=s.n(c),l=s("04e1"),u=s.n(l),d=s("bc3a"),v=s.n(d),h=s("2f62"),m={name:"ConsultarUsuario",data:function(){return{control:!0,collapseOnScroll:!1,tipos:["administrador","escritor"],tipo:"",estados:["Activado","Desactivado"],estado:"",fecha:"",hoy:"",cargando:!1,usuarios:{},mensaje:""}},computed:Object(n["a"])({},Object(h["d"])(["HOST","mensajeError","error"])),created:function(){var t=this,e=new Date,s=e.getFullYear(),o=e.getMonth(),r=e.getDate();o<10&&(o="0"+(o+1)),r<10&&(r="0"+r),this.hoy=s+"-"+o+"-"+r,this.obtenerUsuarios(),setTimeout((function(){return t.control=!1}),3e3)},destroyed:function(){this.setMensajeError(null)},methods:Object(n["a"])({filtrar:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var s,o,r,a,n,c,l,d,h,m,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.cargando=!0,s=i.a.jws.JWS,o="Alvaro1234@asdfgh",r={alg:"HS256",typ:"JWT"},a={id:localStorage.getItem("usuarioID"),func:"filtrarUsuarios",tipo:t.tipo,estado:t.estado,fecha:t.fecha},n=s.sign("HS256",r,a,{utf8:o}),c=new FormData,c.append("jwt",n),e.next=10,v.a.post(t.HOST+"server/api.php",c);case 10:l=e.sent,d=l.data,d.status?(h=d.token,m=s.verifyJWT(h,{utf8:o},{alg:["HS256"]}),m?(p=u()(h),p.status?p.data?(t.usuarios=p.data,t.cargando=!1):(t.usuarios=null,t.cargando=!1,t.mensaje="Sin resultados",t.control=!0,setTimeout((function(){return t.control=!1}),3e3)):(t.mensaje="Upss... prueba otra vez",t.cargando=!1,t.control=!0,setTimeout((function(){return t.control=!1}),3e3))):(t.mensaje="Upss... prueba otra vez",t.cargando=!1,t.control=!0,setTimeout((function(){return t.control=!1}),3e3))):(t.control=!0,null!==d.mensaje?t.mensaje=d.mensaje:t.mensaje="Server KO... intentelo de nuevo",t.cargando=!1,setTimeout((function(){return t.control=!1}),3e3));case 13:case"end":return e.stop()}}),e)})))()},borrar:function(){this.tipo="",this.estado="",this.fecha="",this.obtenerUsuarios()},obtenerUsuarios:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var s,o,r,a,n,c,l,d,h,m,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.cargando=!0,s=i.a.jws.JWS,o="Alvaro1234@asdfgh",r={alg:"HS256",typ:"JWT"},a={id:localStorage.getItem("usuarioID"),func:"consultarUsuarios"},n=s.sign("HS256",r,a,{utf8:o}),c=new FormData,c.append("jwt",n),e.next=10,v.a.post(t.HOST+"server/api.php",c);case 10:l=e.sent,d=l.data,d.status?(h=d.token,m=s.verifyJWT(h,{utf8:o},{alg:["HS256"]}),m?(p=u()(h),p.status?p.data?(t.usuarios=p.data,t.cargando=!1):t.cargando=!1:(t.mensaje="Upss... prueba otra vez",t.cargando=!1)):(t.mensaje="Upss... prueba otra vez",t.cargando=!1)):(null!==d.mensaje?t.mensaje=d.mensaje:t.mensaje="Server KO... intentelo de nuevo",t.cargando=!1);case 13:case"end":return e.stop()}}),e)})))()}},Object(h["c"])(["setMensajeError"]))},p=m,f=(s("8bdd"),s("2877")),b=s("6544"),g=s.n(b),_=s("0798"),C=s("8336"),j=s("62ad"),k=s("132d"),S=s("0fd9"),w=s("b974"),y=s("2fa4"),x=s("8654"),O=s("71d9"),T=s("2a7f"),B=Object(f["a"])(p,o,r,!1,null,"7b844a44",null);e["default"]=B.exports;g()(B,{VAlert:_["a"],VBtn:C["a"],VCol:j["a"],VIcon:k["a"],VRow:S["a"],VSelect:w["a"],VSpacer:y["a"],VTextField:x["a"],VToolbar:O["a"],VToolbarTitle:T["a"]})}}]);
//# sourceMappingURL=chunk-0e73e5f6.374a8d93.js.map