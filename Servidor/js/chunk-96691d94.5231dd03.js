(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-96691d94"],{"0798":function(e,t,r){"use strict";r("caad");var o=r("5530"),n=r("ade3"),s=(r("0c18"),r("10d2")),a=r("afdd"),i=r("9d26"),c=r("f2e7"),l=r("7560"),u=r("2b0e"),d=u["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),h=r("58df"),m=r("d9bd");t["a"]=Object(h["a"])(s["a"],c["a"],d).extend({name:"v-alert",props:{border:{type:String,validator:function(e){return["top","right","bottom","left"].includes(e)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(e){return"string"===typeof e||!1===e}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(e){return["info","error","success","warning"].includes(e)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var e={staticClass:"v-alert__border",class:Object(n["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(e=this.setBackgroundColor(this.computedColor,e),e.class["v-alert__border--has-color"]=!0),this.$createElement("div",e)},__cachedDismissible:function(){var e=this;if(!this.dismissible)return null;var t=this.iconColor;return this.$createElement(a["a"],{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return e.isActive=!1}}},[this.$createElement(i["a"],{props:{color:t}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(i["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var e=Object(o["a"])(Object(o["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(e["v-alert--border-".concat(this.border)]=!0),e},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||l["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(m["a"])("outline","outlined",this)},methods:{genWrapper:function(){var e=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],t={staticClass:"v-alert__wrapper"};return this.$createElement("div",t,e)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var e={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var t=this.hasText?this.setTextColor:this.setBackgroundColor;e=t(this.computedColor,e)}return this.$createElement("div",e,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(e){var t=this.genAlert();return this.transition?e("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[t]):t}})},"0c18":function(e,t,r){},1681:function(e,t,r){},"49fd":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-row",[r("v-col",{attrs:{cols:"0",md:"4"}}),r("v-col",{attrs:{cols:"12",md:"4"}},[r("div",{staticClass:"titular text-center"},[e._v("CREAR CATEGORÍA")])]),r("v-col",{attrs:{cols:"0",md:"4"}})],1),e.control&&this.mensaje?r("v-row",{staticClass:"mensaje"},[r("v-col",{attrs:{cols:"0",md:"3"}}),r("v-col",{attrs:{cols:"12",md:"6"}},[e.mensaje&&!e.error?r("v-alert",{staticClass:"alerta",attrs:{type:"success",dismissible:""}},[e._v(" "+e._s(e.mensaje)+" ")]):e._e(),e.mensaje&&e.error?r("v-alert",{staticClass:"alerta",attrs:{type:"error",dismissible:""}},[e._v(" "+e._s(e.mensaje)+" ")]):e._e()],1),r("v-col",{attrs:{cols:"0",md:"3"}})],1):e._e(),r("v-row",{staticClass:"formulario text-center"},[r("v-col",{attrs:{cols:"0",md:"2"}}),r("v-col",{attrs:{cols:"12",md:"8"}},[r("v-text-field",{attrs:{counter:20,rules:e.nameRules,label:"Nombre",color:"success",dark:"",loading:e.cargando},model:{value:e.$v.nombre.$model,callback:function(t){e.$set(e.$v.nombre,"$model",t)},expression:"$v.nombre.$model"}}),r("v-textarea",{attrs:{"auto-grow":"",rules:e.descripcionRules,counter:255,label:"Descripción",rows:"1",color:"success",dark:"",loading:e.cargando},model:{value:e.$v.descripcion.$model,callback:function(t){e.$set(e.$v.descripcion,"$model",t)},expression:"$v.descripcion.$model"}}),r("v-btn",{attrs:{color:"success",disabled:e.$v.$invalid},on:{click:function(t){return e.crear()}}},[e._v(" CREAR ")])],1),r("v-col",{attrs:{cols:"0",md:"2"}})],1)],1)},n=[],s=(r("96cf"),r("1da1")),a=r("5530"),i=r("81fa"),c=r.n(i),l=r("04e1"),u=r.n(l),d=r("bc3a"),h=r.n(d),m=r("2f62"),p=r("a18c"),f=r("b5ae"),v={name:"CrearCategoria",data:function(){return{cargando:!1,control:!1,error:!1,mensaje:"",nombre:"",descripcion:"",nameRules:[function(e){return!!e||"Nombre Requerido"},function(e){return e.length<20||"El nombre no debe de tener mas de 20 caracteres"}],descripcionRules:[function(e){return!!e||"Descripción Requerido"},function(e){return e.length<255||"La descripción no debe de tener mas de 255 caracteres"}]}},validations:{nombre:{required:f["required"],maxLength:Object(f["maxLength"])(20)},descripcion:{required:f["required"],maxLength:Object(f["maxLength"])(255)}},computed:Object(a["a"])({},Object(m["d"])(["HOST"])),methods:{borrarRules:function(){this.nameRules=null,this.descripcionRules=null},borrarformulario:function(){this.$v.nombre.$model="",this.$v.descripcion.$model=""},crear:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,o,n,s,a,i,l,d,m,f,v;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.control=!0,e.cargando=!0,r=c.a.jws.JWS,o="Alvaro1234@asdfgh",n={alg:"HS256",typ:"JWT"},s={id:localStorage.getItem("usuarioID"),func:"crearCategoria",nombre:e.$v.nombre.$model,descripcion:e.$v.descripcion.$model},a=r.sign("HS256",n,s,{utf8:o}),i=new FormData,i.append("jwt",a),console.log(a),t.next=12,h.a.post(e.HOST+"server/api.php",i);case 12:l=t.sent,d=l.data,d.status?(m=d.token,f=r.verifyJWT(m,{utf8:o},{alg:["HS256"]}),f?(v=u()(m),v.status?v.creado?(window.scroll(0,0),e.error=!1,e.mensaje="CATEGORIA CREADA CORRECTAMENTE",e.cargando=!1,e.borrarRules(),e.borrarformulario(),setTimeout((function(){return e.control=!1}),2e3),setTimeout((function(){return e.mensaje=""}),2e3),setTimeout((function(){return p["a"].push({name:"ConsultarCategorias"})}),2e3)):(e.error=!0,e.mensaje="LA CATEGORIA NO HA PODIDO CREARSE",e.cargando=!1,setTimeout((function(){return e.control=!1}),2e3),setTimeout((function(){return e.mensaje=""}),2e3)):(e.error=!0,e.mensaje="Upss... prueba otra vez",e.cargando=!1,setTimeout((function(){return e.control=!1}),2e3),setTimeout((function(){return e.mensaje=""}),2e3))):(e.error=!0,e.mensaje="Upss... prueba otra vez",e.cargando=!1,setTimeout((function(){return e.control=!1}),2e3),setTimeout((function(){return e.mensaje=""}),2e3))):(e.error=!0,null!==d.mensaje?e.mensaje=d.mensaje:e.mensaje="Server KO... intentelo de nuevo",e.cargando=!1,setTimeout((function(){return e.control=!1}),2e3),setTimeout((function(){return e.mensaje=""}),2e3));case 15:case"end":return t.stop()}}),t)})))()}}},g=v,b=(r("9124"),r("2877")),$=r("6544"),w=r.n($),C=r("0798"),_=r("8336"),j=r("62ad"),x=r("0fd9"),y=r("8654"),R=r("a844"),T=Object(b["a"])(g,o,n,!1,null,"af7a77fe",null);t["default"]=T.exports;w()(T,{VAlert:C["a"],VBtn:_["a"],VCol:j["a"],VRow:x["a"],VTextField:y["a"],VTextarea:R["a"]})},"6b98":function(e,t,r){},9124:function(e,t,r){"use strict";var o=r("6b98"),n=r.n(o);n.a},a844:function(e,t,r){"use strict";r("a9e3");var o=r("5530"),n=(r("1681"),r("8654")),s=r("58df"),a=Object(s["a"])(n["a"]);t["a"]=a.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return Object(o["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},n["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e=this;setTimeout((function(){e.autoGrow&&e.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var e=this.$refs.input;if(e){e.style.height="0";var t=e.scrollHeight,r=parseInt(this.rows,10)*parseFloat(this.rowHeight);e.style.height=Math.max(r,t)+"px"}},genInput:function(){var e=n["a"].options.methods.genInput.call(this);return e.tag="textarea",delete e.data.attrs.type,e.data.attrs.rows=this.rows,e},onInput:function(e){n["a"].options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},afdd:function(e,t,r){"use strict";var o=r("8336");t["a"]=o["a"]}}]);
//# sourceMappingURL=chunk-96691d94.5231dd03.js.map