(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f3c9fa4"],{"3b74":function(t,e,i){"use strict";var o=i("8e42"),a=i.n(o);a.a},5307:function(t,e,i){t.exports=i.p+"img/facebook.1091b48d.png"},"8e42":function(t,e,i){},9734:function(t,e,i){},"98b4":function(t,e,i){t.exports=i.p+"img/portada.21444ead.jpg"},aea4:function(t,e,i){"use strict";var o=i("d4c6"),a=i.n(o);a.a},bb51:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"white--text c"},[o("div",{staticClass:"menuLateral",class:{"d-none":t.movil,"d-sm-none":t.movil,"d-md-block":t.movil}},[o("twitter")],1),o("div",{staticClass:"content align-content-center",class:{escritorio:!t.movil}},[o("v-row",t._l(50,(function(e){return o("v-col",{attrs:{cols:"12",md:"6",lg:"4"}},[o("div",{staticClass:"articulo"},[o("v-card",{staticClass:"tarjeta",attrs:{dark:"",to:{name:"Articulo",params:{titular:"Maroto pone coto a la cuarentena para extranjeros: “Acabará a la vez que el estado de alarma”"}}}},[o("v-card-text",[o("div",{staticClass:"foto"},[o("img",{attrs:{src:i("98b4")}})])]),o("v-card-text",{staticClass:"text-justify title white--text"},[t._v(" Maroto pone coto a la cuarentena para extranjeros: “Acabará a la vez que el estado de alarma” ")]),o("v-card-text",[t._v("15-05-2020")])],1)],1)])})),1)],1)])},a=[],n=i("5530"),s=i("2f62"),r=i("d771"),c={name:"Home",data:function(){return{movil:!1}},components:{Twitter:r["a"]},methods:Object(n["a"])({},Object(s["b"])(["tweet"])),created:function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(this.movil=!0)}},h=c,l=(i("aea4"),i("2877")),u=i("6544"),d=i.n(u),f=i("b0af"),p=i("99d9"),v=i("62ad"),m=i("0fd9"),g=Object(l["a"])(h,o,a,!1,null,"2e52e364",null);e["default"]=g.exports;d()(g,{VCard:f["a"],VCardText:p["b"],VCol:v["a"],VRow:m["a"]})},c7f8:function(t,e,i){t.exports=i.p+"img/instagram.751a308e.png"},d4c6:function(t,e,i){},d771:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"divtwitter twitter white--text text-center"},[o("div",{staticClass:"nosotros mb-6"},[t._v("ÚLTIMOS TWEETS")]),o("div",{staticClass:"tweets mb-8"},t._l(t.tweets,(function(e){return o("div",{staticClass:"tweet pa-2 mb-5"},[o("a",{staticClass:"white--text",attrs:{href:"https://twitter.com/infoo_red/status/"+e.id,target:"_blank"}},[t._m(0,!0),o("div",{staticClass:"texto text-justify pa-2"},[t._v(" "+t._s(e.tweet)+" ")]),o("div",{staticClass:"fecha"},[o("span",{staticClass:"fechaDato"},[t._v(t._s(e.fecha))]),o("v-icon",{staticClass:"white--text icono"},[t._v("mdi-twitter")])],1)])])})),0),o("div",{staticClass:"lastFooter"},[o("div",{staticClass:"redes"},[o("v-tooltip",{attrs:{bottom:"",color:"success"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[o("a",t._g({attrs:{href:"https://www.instagram.com/alvaro_agj/",target:"_blank"}},a),[o("img",{attrs:{width:"50",src:i("c7f8")}})])]}}])},[o("span",{staticClass:"textTool"},[t._v("@alvaro_agj")])]),o("v-tooltip",{attrs:{bottom:"",color:"success"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[o("a",t._g({attrs:{href:"https://twitter.com/infoo_red",target:"_blank"}},a),[o("img",{staticClass:"ml-12",attrs:{width:"50",src:i("e4d7")}})])]}}])},[o("span",{staticClass:"textTool"},[t._v("@infoo_red")])]),o("v-tooltip",{attrs:{bottom:"",color:"success"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[o("a",t._g({attrs:{href:"https://www.facebook.com/gomezagj",target:"_blank"}},a),[o("img",{staticClass:"ml-12 face",attrs:{width:"50",src:i("5307")}})])]}}])},[o("span",{staticClass:"textTool"},[t._v("Alvaro Gomez")])])],1),o("v-tooltip",{attrs:{right:"","allow-overflow":""},scopedSlots:t._u([{key:"activator",fn:function(e){e.on;return[o("a",{attrs:{href:"https://github.com/AGomezJordan",target:"_blank"}},[o("v-btn",{staticClass:"footer",attrs:{color:"secondary",height:"50"}},[t._v(" PROYECTO FINAL"),o("br"),t._v("ALVARO GOMEZ 2020 ")])],1)]}}])},[o("span",{staticClass:"textTool"},[t._v("Alvaro Gomez")])])],1)])},a=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"titulo"},[o("img",{staticClass:"mb-1 mr-6 logo",attrs:{width:"40",src:i("cf05")}}),t._v(" @infoo_red ")])}],n=(i("96cf"),i("1da1")),s=i("5530"),r=i("81fa"),c=i.n(r),h=i("bc3a"),l=i.n(h),u=i("2f62"),d={name:"twitter",data:function(){return{tweets:[]}},computed:Object(s["a"])({},Object(u["d"])(["HOST"])),methods:{obtenerTweets:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var i,o,a,n,s,r,h,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("entra"),i=c.a.jws.JWS,o="Alvaro1234@asdfgh",a={alg:"HS256",typ:"JWT"},n={func:"tweets"},s=i.sign("HS256",a,n,{utf8:o}),r=new FormData,r.append("jwt",s),e.next=10,l.a.post(t.HOST+"server/api.php",r);case 10:h=e.sent,u=h.data,t.tweets=u.data;case 13:case"end":return e.stop()}}),e)})))()}},created:function(){this.obtenerTweets()}},f=d,p=(i("3b74"),i("2877")),v=i("6544"),m=i.n(v),g=i("8336"),b=i("132d"),w=(i("a9e3"),i("ade3")),O=(i("9734"),i("4ad4")),x=i("a9ad"),C=i("16b7"),_=i("b848"),y=i("75eb"),T=i("f573"),A=i("f2e7"),k=i("80d2"),j=i("d9bd"),L=i("58df"),S=Object(L["a"])(x["a"],C["a"],_["a"],y["a"],T["a"],A["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,i=t.content,o=!this.bottom&&!this.left&&!this.top&&!this.right,a=!1!==this.attach?e.offsetLeft:e.left,n=0;return this.top||this.bottom||o?n=a+e.width/2-i.width/2:(this.left||this.right)&&(n=a+(this.right?e.width:-i.width)+(this.right?10:-10)),this.nudgeLeft&&(n-=parseInt(this.nudgeLeft)),this.nudgeRight&&(n+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(n,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,i=t.content,o=!1!==this.attach?e.offsetTop:e.top,a=0;return this.top||this.bottom?a=o+(this.bottom?e.height:-i.height)+(this.bottom?10:-10):(this.left||this.right)&&(a=o+e.height/2-i.height/2),this.nudgeTop&&(a-=parseInt(this.nudgeTop)),this.nudgeBottom&&(a+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(a+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(k["f"])(this.maxWidth),minWidth:Object(k["f"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(k["o"])(this,"activator",!0)&&Object(j["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=O["a"].options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===k["s"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(w["a"])(t,this.contentClass,!0),Object(w["a"])(t,"menuable__content__active",this.isActive),Object(w["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}}),W=Object(p["a"])(f,o,a,!1,null,"58c17562",null);e["a"]=W.exports;m()(W,{VBtn:g["a"],VIcon:b["a"],VTooltip:S})},e4d7:function(t,e,i){t.exports=i.p+"img/twitter.f0dd00da.png"},f573:function(t,e,i){"use strict";i("a9e3"),i("d3b7");var o=i("5530"),a=i("fe6c"),n=i("21be"),s=i("4ad4"),r=i("58df"),c=i("80d2"),h=Object(r["a"])(n["a"],a["a"],s["a"]);e["a"]=h.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,openOnClick:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:function(){return{absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}},computed:{computedLeft:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=(!1!==this.attach?t.offsetLeft:t.left)||0,o=Math.max(t.width,e.width),a=0;if(a+=this.left?i-(o-t.width):i,this.offsetX){var n=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));a+=this.left?-n:t.width}return this.nudgeLeft&&(a-=parseInt(this.nudgeLeft)),this.nudgeRight&&(a+=parseInt(this.nudgeRight)),a},computedTop:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=0;return this.top&&(i+=t.height-e.height),!1!==this.attach?i+=t.offsetTop:i+=t.top+this.pageYOffset,this.offsetY&&(i+=this.top?-t.height:t.height),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),i},hasActivator:function(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator}},watch:{disabled:function(t){t&&this.callDeactivate()},isActive:function(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount:function(){this.hasWindow="undefined"!==typeof window},methods:{absolutePosition:function(){return{offsetTop:0,offsetLeft:0,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate:function(){},calcLeft:function(t){return Object(c["f"])(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop:function(){return Object(c["f"])(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow:function(t,e){var i=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&i>0?Math.max(t-i,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow:function(t){var e=this.getInnerHeight(),i=this.pageYOffset+e,o=this.dimensions.activator,a=this.dimensions.content.height,n=t+a,s=i<n;return s&&this.offsetOverflow&&o.top>a?t=this.pageYOffset+(o.top-a):s&&!this.allowOverflow?t=i-a-12:t<this.pageYOffset&&!this.allowOverflow&&(t=this.pageYOffset+12),t<12?12:t},callActivate:function(){this.hasWindow&&this.activate()},callDeactivate:function(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset:function(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed:function(){if(!1===this.attach){var t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1}},deactivate:function(){},genActivatorListeners:function(){var t=this,e=s["a"].options.methods.genActivatorListeners.call(this),i=e.click;return e.click=function(e){t.openOnClick&&i&&i(e),t.absoluteX=e.clientX,t.absoluteY=e.clientY},e},getInnerHeight:function(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft:function(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop:function(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect:function(t){var e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure:function(t){if(!t||!this.hasWindow)return null;var e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){var i=window.getComputedStyle(t);e.left=parseInt(i.marginLeft),e.top=parseInt(i.marginTop)}return e},sneakPeek:function(t){var e=this;requestAnimationFrame((function(){var i=e.$refs.content;i&&"none"===i.style.display?(i.style.display="inline-block",t(),i.style.display="none"):t()}))},startTransition:function(){var t=this;return new Promise((function(e){return requestAnimationFrame((function(){t.isContentActive=t.hasJustFocused=t.isActive,e()}))}))},updateDimensions:function(){var t=this;this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;var e={activator:Object(o["a"])({},this.dimensions.activator),content:Object(o["a"])({},this.dimensions.content)};if(!this.hasActivator||this.absolute)e.activator=this.absolutePosition();else{var i=this.getActivator();if(!i)return;e.activator=this.measure(i),e.activator.offsetLeft=i.offsetLeft,!1!==this.attach?e.activator.offsetTop=i.offsetTop:e.activator.offsetTop=0}this.sneakPeek((function(){t.$refs.content&&(e.content=t.measure(t.$refs.content)),t.dimensions=e}))}}})}}]);
//# sourceMappingURL=chunk-7f3c9fa4.1141747e.js.map