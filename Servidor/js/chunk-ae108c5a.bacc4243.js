(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ae108c5a"],{2769:function(t,a,e){},a8a8:function(t,a,e){"use strict";var r=e("2769"),s=e.n(r);s.a},bb51:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"white--text c"},[e("div",{staticClass:"menuLateral",class:{"d-none":t.movil,"d-sm-none":t.movil,"d-md-block":t.movil}},[e("twitter")],1),e("div",{staticClass:"content align-content-center",class:{escritorio:!t.movil}},[t.cargando?e("div",{staticClass:"loader"},[e("ScaleLoader",{attrs:{color:"#4ebfb4",height:"50px",width:"8px"}})],1):t._e(),t.cargando?t._e():e("v-row",t._l(t.articulos,(function(a){return e("v-col",{attrs:{cols:"12",md:"6",lg:"4"}},[e("div",{staticClass:"articulo"},[e("v-card",{staticClass:"tarjeta",attrs:{dark:"",to:{name:"Articulo",params:{id:a.id}}}},[e("v-card-text",[e("div",{staticClass:"foto"},[e("img",{attrs:{src:t.HOST+"server/img/"+a.portada}})])]),e("v-card-text",{staticClass:"text-justify title white--text"},[t._v(" "+t._s(a.titular)+" ")]),e("v-card-text",[e("v-row",[e("v-col",{staticClass:"text-left",attrs:{cols:"6"}},[t._v(t._s(a.fecha))]),e("v-col",{staticClass:"text-right",attrs:{cols:"6"}},[t._v(t._s(a.categoria))])],1)],1)],1)],1)])})),1)],1)])},s=[],n=(e("96cf"),e("1da1")),c=e("5530"),o=e("81fa"),i=e.n(o),l=e("04e1"),d=e.n(l),u=e("bc3a"),v=e.n(u),m=e("6cb7"),f=(e("a18c"),e("2f62")),p=e("d771"),b={name:"Home",data:function(){return{movil:!1,articulos:{},cargando:!1}},components:{Twitter:p["a"],ScaleLoader:m["a"]},methods:Object(c["a"])(Object(c["a"])({},Object(f["b"])(["tweet"])),{},{obtenerArticulos:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var e,r,s,n,c,o,l,u,m,f,p;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.cargando=!0,e=i.a.jws.JWS,r="Alvaro1234@asdfgh",s={alg:"HS256",typ:"JWT"},n={id:localStorage.getItem("usuarioID"),func:"consultarArticulos"},c=e.sign("HS256",s,n,{utf8:r}),o=new FormData,o.append("jwt",c),a.next=10,v.a.post(t.HOST+"server/api.php",o);case 10:l=a.sent,u=l.data,u.status?(m=u.token,f=e.verifyJWT(m,{utf8:r},{alg:["HS256"]}),f?(p=d()(m),p.status?p.data?(t.articulos=p.data,t.cargando=!1):t.cargando=!1:(t.mensaje="Upss... prueba otra vez",t.cargando=!1)):(t.mensaje="Upss... prueba otra vez",t.cargando=!1)):(null!==u.mensaje?t.mensaje=u.mensaje:t.mensaje="Server KO... intentelo de nuevo",t.cargando=!1);case 13:case"end":return a.stop()}}),a)})))()}}),computed:Object(c["a"])({},Object(f["d"])(["HOST"])),created:function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(this.movil=!0),this.obtenerArticulos()}},g=b,w=(e("a8a8"),e("2877")),h=e("6544"),j=e.n(h),x=e("b0af"),C=e("99d9"),O=e("62ad"),S=e("0fd9"),_=Object(w["a"])(g,r,s,!1,null,"75e4eb94",null);a["default"]=_.exports;j()(_,{VCard:x["a"],VCardText:C["b"],VCol:O["a"],VRow:S["a"]})}}]);
//# sourceMappingURL=chunk-ae108c5a.bacc4243.js.map