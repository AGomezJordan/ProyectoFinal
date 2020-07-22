(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9db23d46"],{"0798":function(t,e,a){"use strict";a("caad");var r=a("5530"),o=a("ade3"),s=(a("0c18"),a("10d2")),n=a("afdd"),c=a("9d26"),l=a("f2e7"),i=a("7560"),u=a("2b0e"),d=u["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),v=a("58df"),m=a("d9bd");e["a"]=Object(v["a"])(s["a"],l["a"],d).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(o["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(n["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(c["a"],{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(c["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=Object(r["a"])(Object(r["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||i["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(m["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,a){},"1bf8":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-toolbar",{staticClass:"d-block d-sm-block d-md-none",attrs:{color:"#023059",dark:"",height:"250px"}},[a("v-icon",[t._v("mdi-filter")]),a("v-toolbar-title",[a("v-row",{staticClass:"ml-5 mt-8 text-center"},[a("v-col",{attrs:{cols:"6"}},[a("v-select",{staticClass:"ml-5 mr-5",attrs:{items:t.categorias,label:"Categoría",dark:"",color:"success"},model:{value:t.categoria,callback:function(e){t.categoria=e},expression:"categoria"}})],1),a("v-col",{attrs:{cols:"6"}},[a("v-select",{staticClass:"ml-5 mr-5",attrs:{items:t.autores,label:"Autor",dark:"",color:"success"},model:{value:t.autor,callback:function(e){t.autor=e},expression:"autor"}})],1),a("v-col",{attrs:{cols:"6"}},[a("v-select",{staticClass:"ml-5 mr-5",attrs:{items:t.estados,label:"Estado",dark:"",color:"success"},model:{value:t.estado,callback:function(e){t.estado=e},expression:"estado"}})],1),a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{label:"Fecha",type:"date",color:"success",dark:"",max:t.hoy},model:{value:t.fecha,callback:function(e){t.fecha=e},expression:"fecha"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-btn",{attrs:{color:"success",small:"",dark:""},on:{click:function(e){return t.filtrar()}}},[a("v-icon",[t._v("mdi-check")])],1),a("v-btn",{staticClass:"ml-5",attrs:{color:"error",small:"",dark:""},on:{click:function(e){return t.borrar()}}},[a("v-icon",[t._v("mdi-delete")])],1)],1)],1)],1)],1),a("v-toolbar",{staticClass:"d-none d-sm-none d-md-block",attrs:{collapse:!t.collapseOnScroll,color:"#023059",dark:"",absolute:""}},[a("v-icon",[t._v("mdi-filter")]),a("v-toolbar-title",[a("v-row",{staticClass:"ml-5 mt-8"},[a("v-col",{attrs:{cols:"2"}},[a("v-select",{staticClass:"ml-5 mr-5",attrs:{items:t.categorias,label:"Categoría",dark:"",color:"success"},model:{value:t.categoria,callback:function(e){t.categoria=e},expression:"categoria"}})],1),a("v-col",{attrs:{cols:"2"}},[a("v-select",{staticClass:"ml-5 mr-5",attrs:{items:t.autores,label:"Autor",dark:"",color:"success"},model:{value:t.autor,callback:function(e){t.autor=e},expression:"autor"}})],1),a("v-col",{attrs:{cols:"2"}},[a("v-select",{staticClass:"ml-5 mr-5",attrs:{items:t.estados,label:"Estado",dark:"",color:"success"},model:{value:t.estado,callback:function(e){t.estado=e},expression:"estado"}})],1),a("v-col",{attrs:{cols:"2"}},[a("v-text-field",{attrs:{label:"Fecha",type:"date",color:"success",dark:"",max:t.hoy},model:{value:t.fecha,callback:function(e){t.fecha=e},expression:"fecha"}})],1),a("v-col",{attrs:{cols:"1"}},[a("v-btn",{attrs:{color:"success",small:"",dark:""},on:{click:function(e){return t.filtrar()}}},[t._v(" FILTRAR ")]),a("v-btn",{staticClass:"ml-5",attrs:{color:"error",small:"",dark:""},on:{click:function(e){return t.borrar()}}},[t._v(" BORRAR ")])],1)],1)],1),a("v-spacer"),t.collapseOnScroll?t._e():a("v-icon",{on:{click:function(e){t.collapseOnScroll=!t.collapseOnScroll}}},[t._v("mdi-arrow-right-bold")]),t.collapseOnScroll?a("v-icon",{on:{click:function(e){t.collapseOnScroll=!t.collapseOnScroll}}},[t._v("mdi-arrow-left-bold")]):t._e()],1),a("div",{staticClass:"pa-5"},[a("v-row",{staticClass:"text-center mb-8"},[a("v-col",{attrs:{cols:"0",md:"4"}}),a("v-col",{staticClass:"pa-5",attrs:{cols:"12",md:"4"}},[a("div",{staticClass:"titular"},[t._v("CONSULTAR ARTÍCULOS")])]),a("v-col",{attrs:{cols:"0",md:"4"}})],1),!t.control||!this.mensajeError&&t.articulos?t._e():a("v-row",{staticClass:"mensaje"},[a("v-col",{attrs:{cols:"0",md:"3"}}),a("v-col",{attrs:{cols:"12",md:"6"}},[this.mensajeError&&!t.error?a("v-alert",{staticClass:"alerta",attrs:{type:"success",dismissible:""}},[t._v(" "+t._s(t.mensajeError)+" ")]):t._e(),this.mensajeError&&t.error?a("v-alert",{staticClass:"alerta",attrs:{type:"error",dismissible:""}},[t._v(" "+t._s(t.mensajeError)+" ")]):t._e(),t.articulos?t._e():a("v-alert",{staticClass:"alerta",attrs:{type:"error",dismissible:""}},[t._v(" "+t._s(t.mensaje)+" ")])],1),a("v-col",{attrs:{cols:"0",md:"3"}})],1),t._l(t.articulos,(function(e){return a("router-link",{attrs:{to:{name:"ValidarArticulos",params:{id:e.id}}}},[a("v-row",{staticClass:"text-center usuario mb-4"},[a("v-col",{attrs:{cols:"12",md:"8"}},[t._v(" "+t._s(e.titular)+" ")]),a("v-col",{attrs:{cols:"6",md:"2"}},[t._v(" "+t._s(e.fecha)+" ")]),a("v-col",{staticClass:"text-right",attrs:{cols:"6",md:"2"}},[t._v(" "+t._s(e.autor)+" "),a("v-icon",{attrs:{color:"white"}},[t._v("mdi-account")])],1)],1)],1)}))],2)],1)},o=[],s=(a("96cf"),a("1da1")),n=a("5530"),c=a("2f62"),l=a("81fa"),i=a.n(l),u=a("04e1"),d=a.n(u),v=a("bc3a"),m=a.n(v),h={name:"ConsultarArticulos",data:function(){return{cargando:!1,control:!0,collapseOnScroll:!1,categorias:["Politica"],categoria:"",autores:["PEDRO","JUAN","ALVARO","LIDIA","JOSE"],autor:"",estados:["publicado","despublicado"],estado:"",fecha:"",hoy:"",articulos:{}}},created:function(){var t=this,e=new Date,a=e.getFullYear(),r=e.getMonth(),o=e.getDate();r<10&&(r="0"+(r+1)),o<10&&(o="0"+o),this.hoy=a+"-"+r+"-"+o,this.obtenerArticulos(),this.obtenerUsuarios(),setTimeout((function(){return t.control=!1}),3e3)},destroyed:function(){this.setMensajeError(null)},computed:Object(n["a"])({},Object(c["d"])(["HOST","mensajeError","error"])),methods:Object(n["a"])(Object(n["a"])({},Object(c["c"])(["setMensajeError"])),{},{obtenerArticulos:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,r,o,s,n,c,l,u,v,h,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.cargando=!0,a=i.a.jws.JWS,r="Alvaro1234@asdfgh",o={alg:"HS256",typ:"JWT"},s={id:localStorage.getItem("usuarioID"),func:"consultarArticulos"},n=a.sign("HS256",o,s,{utf8:r}),c=new FormData,c.append("jwt",n),e.next=10,m.a.post(t.HOST+"server/api.php",c);case 10:l=e.sent,u=l.data,u.status?(v=u.token,h=a.verifyJWT(v,{utf8:r},{alg:["HS256"]}),h?(p=d()(v),p.status?p.data?(t.articulos=p.data,t.cargando=!1):t.cargando=!1:(t.mensaje="Upss... prueba otra vez",t.cargando=!1)):(t.mensaje="Upss... prueba otra vez",t.cargando=!1)):(null!==u.mensaje?t.mensaje=u.mensaje:t.mensaje="Server KO... intentelo de nuevo",t.cargando=!1);case 13:case"end":return e.stop()}}),e)})))()},obtenerUsuarios:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,r,o,s,n,c,l,u,v,h,p,f,b;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.cargando=!0,a=i.a.jws.JWS,r="Alvaro1234@asdfgh",o={alg:"HS256",typ:"JWT"},s={id:localStorage.getItem("usuarioID"),func:"consultarUsuarios"},n=a.sign("HS256",o,s,{utf8:r}),c=new FormData,c.append("jwt",n),e.next=10,m.a.post(t.HOST+"server/api.php",c);case 10:if(l=e.sent,u=l.data,u.status)if(v=u.token,h=a.verifyJWT(v,{utf8:r},{alg:["HS256"]}),h)if(p=d()(v),p.status)if(p.data){for(b in 0,f=[],p.data)f[b]=p.data[b].usuario;t.autores=f}else t.cargando=!1;else t.mensaje="Upss... prueba otra vez",t.cargando=!1;else t.mensaje="Upss... prueba otra vez",t.cargando=!1;else null!==u.mensaje?t.mensaje=u.mensaje:t.mensaje="Server KO... intentelo de nuevo",t.cargando=!1;case 13:case"end":return e.stop()}}),e)})))()},filtrar:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,r,o,s,n,c,l,u,v,h,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.cargando=!0,a=i.a.jws.JWS,r="Alvaro1234@asdfgh",o={alg:"HS256",typ:"JWT"},s={id:localStorage.getItem("usuarioID"),func:"filtrarArticulos",autor:t.autor,fecha:t.fecha,categoria:t.categoria,estado:t.estado},n=a.sign("HS256",o,s,{utf8:r}),c=new FormData,c.append("jwt",n),console.log(n),e.next=11,m.a.post(t.HOST+"server/api.php",c);case 11:l=e.sent,u=l.data,u.status?(v=u.token,h=a.verifyJWT(v,{utf8:r},{alg:["HS256"]}),h?(p=d()(v),p.status?p.data?(t.articulos=p.data,t.cargando=!1):(t.articulos=null,t.mensaje="Sin resultados",t.cargando=!1,t.error=!0,t.control=!0,setTimeout((function(){return t.control=!1}),3e3)):(t.mensaje="Upss... prueba otra vez",t.cargando=!1,t.error=!0,t.control=!0,setTimeout((function(){return t.control=!1}),3e3))):(t.mensaje="Upss... prueba otra vez",t.cargando=!1,t.error=!0,t.control=!0,setTimeout((function(){return t.control=!1}),3e3))):(t.error=!0,t.control=!0,null!==u.mensaje?t.mensaje=u.mensaje:t.mensaje="Server KO... intentelo de nuevo",setTimeout((function(){return t.control=!1}),3e3),t.cargando=!1);case 14:case"end":return e.stop()}}),e)})))()},borrar:function(){this.autor="",this.fecha="",this.categoria="",this.estado="",this.obtenerArticulos()}})},p=h,f=(a("a874"),a("2877")),b=a("6544"),g=a.n(b),_=a("0798"),j=a("8336"),C=a("62ad"),k=a("132d"),S=a("0fd9"),w=a("b974"),O=a("2fa4"),x=a("8654"),y=a("71d9"),A=a("2a7f"),T=Object(f["a"])(p,r,o,!1,null,"2b96d516",null);e["default"]=T.exports;g()(T,{VAlert:_["a"],VBtn:j["a"],VCol:C["a"],VIcon:k["a"],VRow:S["a"],VSelect:w["a"],VSpacer:O["a"],VTextField:x["a"],VToolbar:y["a"],VToolbarTitle:A["a"]})},"2a7f":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var r=a("71d9"),o=a("80d2"),s=Object(o["g"])("v-toolbar__title"),n=Object(o["g"])("v-toolbar__items");r["a"]},a874:function(t,e,a){"use strict";var r=a("bb45"),o=a.n(r);o.a},afdd:function(t,e,a){"use strict";var r=a("8336");e["a"]=r["a"]},bb45:function(t,e,a){}}]);
//# sourceMappingURL=chunk-9db23d46.4fa07997.js.map