(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38a2a19c"],{"0d71":function(t,e,a){},1681:function(t,e,a){},"23a7":function(t,e,a){"use strict";a("99af"),a("a623"),a("4160"),a("caad"),a("d81d"),a("13d5"),a("fb6a"),a("a434"),a("b0c0"),a("a9e3"),a("159b");var r=a("2909"),n=a("5530"),o=a("53ca"),i=(a("5803"),a("2677")),s=a("cc20"),l=a("80d2"),u=a("d9bd"),c=a("d9f7");e["a"]=i["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"===typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return Object(l["y"])(t).every((function(t){return null!=t&&"object"===Object(o["a"])(t)}))}}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},i["a"].options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var t=this.isMultiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){var a=e.size,r=void 0===a?0:a;return t+r}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(l["q"])(e,1024===this.base))},internalArrayValue:function(){return Object(l["y"])(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},isMultiple:function(){return this.$attrs.hasOwnProperty("multiple")},text:function(){var t=this;return this.isDirty?this.internalArrayValue.map((function(e){var a=e.name,r=void 0===a?"":a,n=e.size,o=void 0===n?0:n,i=t.truncateText(r);return t.showSize?"".concat(i," (").concat(Object(l["q"])(o,1024===t.base),")"):i})):[this.placeholder]},base:function(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(u["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.isMultiple?t:t?[t]:[];Object(l["h"])(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.isMultiple?[]:void 0,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(e,a){return t.$createElement(s["a"],{props:{small:t.smallChips},on:{"click:close":function(){var e=t.internalValue;e.splice(a,1),t.internalValue=e}}},[e])})):[]},genControl:function(){var t=i["a"].options.methods.genControl.call(this);return this.hideInput&&(t.data.style=Object(c["c"])(t.data.style,{display:"none"})),t},genInput:function(){var t=i["a"].options.methods.genInput.call(this);return delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(a,r){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[r],file:a,index:r}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot:function(){var t=this,e=i["a"].options.methods.genTextFieldSlot.call(this);return e.data.on=Object(n["a"])(Object(n["a"])({},e.data.on||{}),{},{click:function(){return t.$refs.input.click()}}),e},onInput:function(t){var e=Object(r["a"])(t.target.files||[]);this.internalValue=this.isMultiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}})},2677:function(t,e,a){"use strict";var r=a("8654");e["a"]=r["a"]},3302:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",[a("v-col",{attrs:{cols:"0",md:"4"}}),a("v-col",{attrs:{cols:"12",md:"4"}},[a("div",{staticClass:"titular text-center"},[t._v("EDITAR ARTICULO")])]),a("v-col",{attrs:{cols:"0",md:"4"}})],1),t.control&&this.mensaje?a("v-row",{staticClass:"mensaje"},[a("v-col",{attrs:{cols:"0",md:"3"}}),a("v-col",{attrs:{cols:"12",md:"6"}},[t.mensaje&&!t.error?a("v-alert",{staticClass:"alerta",attrs:{type:"success",dismissible:""}},[t._v(" "+t._s(t.mensaje)+" ")]):t._e(),t.mensaje&&t.error?a("v-alert",{staticClass:"alerta",attrs:{type:"error",dismissible:""}},[t._v(" "+t._s(t.mensaje)+" ")]):t._e()],1),a("v-col",{attrs:{cols:"0",md:"3"}})],1):t._e(),a("v-row",[a("v-col",{attrs:{cols:"0",md:"2"}}),a("v-col",{attrs:{cols:"12",md:"8"}},[a("form",[a("v-row",{staticClass:"formulario"},[a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{counter:"",rules:t.nameRules,label:"Titular",color:"success",dark:"",loading:t.cargando},model:{value:t.$v.titular.$model,callback:function(e){t.$set(t.$v.titular,"$model",e)},expression:"$v.titular.$model"}})],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{counter:"",rules:t.nameRules,label:"SubTitular",color:"success",dark:"",loading:t.cargando},model:{value:t.$v.subtitular.$model,callback:function(e){t.$set(t.$v.subtitular,"$model",e)},expression:"$v.subtitular.$model"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{"auto-grow":"",rules:t.articuloRules,counter:4294967295,label:"Articulo",rows:"1",color:"success",dark:"",loading:t.cargando},model:{value:t.$v.articulo.$model,callback:function(e){t.$set(t.$v.articulo,"$model",e)},expression:"$v.articulo.$model"}})],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-file-input",{attrs:{label:"Portada",placeholder:"Selecciona la portada","prepend-icon":"mdi-camera",dark:"",color:"success",rules:t.portadaRules,accept:"image/jpeg",loading:t.cargando},on:{change:function(e){return t.validateFoto()}},model:{value:t.portada,callback:function(e){t.portada=e},expression:"portada"}})],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-select",{attrs:{items:t.categorias,label:"Categoría",dark:"",color:"success",loading:t.cargando},model:{value:t.$v.categoria.$model,callback:function(e){t.$set(t.$v.categoria,"$model",e)},expression:"$v.categoria.$model"}})],1),a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[!t.$v.$invalid&&t.valido&&t.portada?a("v-btn",{staticClass:"mr-5",attrs:{color:"success",fab:"",small:"",dark:"",type:"submit"},on:{click:function(e){return t.editarArticulo()}}},[a("v-icon",[t._v("mdi-check")])],1):t._e(),t.$v.$invalid||t.portada?t._e():a("v-btn",{staticClass:"mr-5",attrs:{color:"success",fab:"",small:"",dark:""},on:{click:function(e){return t.editarArticulo()}}},[a("v-icon",[t._v("mdi-check")])],1),a("v-btn",{staticClass:"ml-5",attrs:{color:"error",fab:"",small:"",dark:""},on:{click:function(e){return t.borrarformulario()}}},[a("v-icon",[t._v("mdi-restart")])],1)],1)],1)],1)]),a("v-col",{attrs:{cols:"0",md:"2"}})],1)],1)},n=[],o=(a("96cf"),a("1da1")),i=a("5530"),s=a("b5ae"),l=a("81fa"),u=a.n(l),c=a("04e1"),d=a.n(c),h=a("bc3a"),p=a.n(h),f=a("2f62"),m=a("a18c"),v={name:"EditarArticulo",data:function(){return{valido:!1,titular:"",subtitular:"",articulo:"",portada:null,categorias:[],categoria:"",nameRules:[function(t){return!!t||"Titulo Requerido"}],articuloRules:[function(t){return!!t||"Articulo Requerido"},function(t){return t&&t.length<=4294967295||"Articulo maximo 4 294 967 295 caracteres"}],portadaRules:[function(t){return t&&t.size<7e6||"Foto demasiado grande. Max 7 MB"}],cargando:!1,control:!0,mensaje:""}},validations:{titular:{required:s["required"]},subtitular:{required:s["required"]},categoria:{required:s["required"]},articulo:{required:s["required"],maxLength:Object(s["maxLength"])(4294967295)}},computed:Object(i["a"])({},Object(f["d"])(["HOST"])),created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.obtenerCategorias(),t.obtenerArticulo();case 1:case"end":return e.stop()}}),e)})))()},methods:{obtenerArticulo:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,r,n,o,i,s,l,c,h,f,m,v;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.cargando=!0,a=u.a.jws.JWS,r="Alvaro1234@asdfgh",n={alg:"HS256",typ:"JWT"},o={id:localStorage.getItem("usuarioID"),articuloID:t.$route.params.id,func:"consultarArticuloEditar"},i=a.sign("HS256",n,o,{utf8:r}),s=new FormData,s.append("jwt",i),e.next=10,p.a.post(t.HOST+"server/api.php",s);case 10:l=e.sent,c=l.data,c.status?(h=c.token,f=a.verifyJWT(h,{utf8:r},{alg:["HS256"]}),f?(m=d()(h),m.status?m.data?(v=m.data,t.$v.titular.$model=v.titular,t.$v.subtitular.$model=v.subtitular,t.$v.articulo.$model=v.articulo,t.$v.categoria.$model=v.categoria,t.cargando=!1):(t.cargando=!1,t.mensaje="No se han podido recuperar los datos",t.error=!0,setTimeout((function(){return t.control=!1}),4e3)):(t.mensaje="Upss... prueba otra vez",t.cargando=!1,setTimeout((function(){return t.control=!1}),4e3))):(t.mensaje="Upss... prueba otra vez",t.cargando=!1,setTimeout((function(){return t.control=!1}),4e3))):(t.error=!0,null!==c.mensaje?t.mensaje=c.mensaje:t.mensaje="Server KO... intentelo de nuevo",setTimeout((function(){return t.control=!1}),4e3),t.cargando=!1);case 13:case"end":return e.stop()}}),e)})))()},obtenerCategorias:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,r,n,o,i,s,l,c,h,f,m,v,g;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.cargando=!0,a=u.a.jws.JWS,r="Alvaro1234@asdfgh",n={alg:"HS256",typ:"JWT"},o={id:localStorage.getItem("usuarioID"),func:"consultarCategorias"},i=a.sign("HS256",n,o,{utf8:r}),s=new FormData,s.append("jwt",i),s.append("portada",t.portada),e.next=11,p.a.post(t.HOST+"server/api.php",s);case 11:if(l=e.sent,c=l.data,c.status)if(h=c.token,f=a.verifyJWT(h,{utf8:r},{alg:["HS256"]}),f)if(m=d()(h),m.status)if(m.data){for(g in 0,v=[],m.data)v[g]=m.data[g].nombre;t.categorias=v,t.cargando=!1}else t.cargando=!1;else t.cargando=!1;else t.cargando=!1;else t.cargando=!1;case 14:case"end":return e.stop()}}),e)})))()},borrarformulario:function(){this.$v.titular.$model="",this.$v.subtitular.$model="",this.$v.articulo.$model="",this.portada=null,this.$v.categoria.$model=""},validateFoto:function(){this.portada.size>7e6?this.valido=!1:this.valido=!0},editarArticulo:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,r,n,o,i,s,l,c,h,f,v;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.cargando=!0,a=u.a.jws.JWS,r="Alvaro1234@asdfgh",n={alg:"HS256",typ:"JWT"},o={id:localStorage.getItem("usuarioID"),articuloID:t.$route.params.id,titular:t.$v.titular.$model,subtitular:t.$v.subtitular.$model,articulo:t.$v.articulo.$model,categoria:t.$v.categoria.$model,func:"editarArticulo"},i=a.sign("HS256",n,o,{utf8:r}),s=new FormData,s.append("jwt",i),console.log(i),e.next=11,p.a.post(t.HOST+"server/api.php",s);case 11:l=e.sent,c=l.data,c.status?(h=c.token,f=a.verifyJWT(h,{utf8:r},{alg:["HS256"]}),f?(v=d()(h),v.status?v.editado?(t.mensaje="* ARTICULO EDITADO CORRECTAMENTE *",t.error=!1,t.cargando=!1,setTimeout((function(){return t.control=!1}),2e3),setTimeout((function(){return t.mensaje=""}),2e3),setTimeout((function(){return m["a"].push({name:"ValidarArticulos",params:{id:t.$route.params.id}})}),2e3)):(t.mensaje="* EL ARTICULO NO HA PODIDO EDITARSE *",t.error=!0,t.cargando=!1,t.control=!0,setTimeout((function(){return t.control=!1}),2e3),setTimeout((function(){return t.mensaje=""}),2e3)):(t.mensaje="Upss... prueba otra vez",t.error=!0,t.cargando=!1,t.control=!0,setTimeout((function(){return t.control=!1}),2e3),setTimeout((function(){return t.mensaje=""}),2e3))):(t.mensaje="Upss... prueba otra vez",t.error=!0,t.cargando=!1,t.control=!0,setTimeout((function(){return t.control=!1}),2e3),setTimeout((function(){return t.mensaje=""}),2e3))):(t.control=!0,null!==c.mensaje?(t.error=!0,t.mensaje=c.mensaje):(t.error=!0,t.mensaje="Server KO... intentelo de nuevo"),t.cargando=!1,setTimeout((function(){return t.control=!1}),2e3),setTimeout((function(){return t.mensaje=""}),2e3));case 14:case"end":return e.stop()}}),e)})))()}}},g=v,b=(a("7f6a"),a("2877")),$=a("6544"),y=a.n($),w=a("0798"),S=a("8336"),j=a("62ad"),x=a("23a7"),T=a("132d"),I=a("0fd9"),k=a("b974"),O=a("8654"),C=a("a844"),V=Object(b["a"])(g,r,n,!1,null,"47daa0ec",null);e["default"]=V.exports;y()(V,{VAlert:w["a"],VBtn:S["a"],VCol:j["a"],VFileInput:x["a"],VIcon:T["a"],VRow:I["a"],VSelect:k["a"],VTextField:O["a"],VTextarea:C["a"]})},5803:function(t,e,a){},"7f6a":function(t,e,a){"use strict";var r=a("0d71"),n=a.n(r);n.a},a844:function(t,e,a){"use strict";a("a9e3");var r=a("5530"),n=(a("1681"),a("8654")),o=a("58df"),i=Object(o["a"])(n["a"]);e["a"]=i.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(r["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},n["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=n["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){n["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})}}]);
//# sourceMappingURL=chunk-38a2a19c.f9b8be2a.js.map