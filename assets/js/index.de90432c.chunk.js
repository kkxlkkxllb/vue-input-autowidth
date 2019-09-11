(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1:function(t,e,i){},198:function(t,e,i){"use strict";var n=i(1);i.n(n).a},200:function(t,e,i){"use strict";i.r(e);var n=i(0),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"docs"},[i("h1",[t._v("vue-input-autowidth")]),t._v(" "),i("div",{staticClass:"container"},[i("input",{directives:[{name:"autowidth",rawName:"v-autowidth",value:{maxWidth:"960px",minWidth:"20px",comfortZone:0},expression:"{maxWidth: '960px', minWidth: '20px', comfortZone: 0}"},{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"Watch me change size with my content!"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),i("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.sourceCode,expression:"sourceCode"}]},[i("code",{staticClass:"html"})])]),t._v(" "),i("div",{staticClass:"container"},[i("h2",[t._v("Installation")]),t._v(" "),i("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[i("code",{staticClass:"shell"},[t._v("$ yarn add vue-input-autowidth")])]),t._v(" "),i("p",[t._v("or")]),t._v(" "),i("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[i("code",{staticClass:"shell"},[t._v("$ npm install --save vue-input-autowidth")])]),t._v(" "),t._m(0),t._v(" "),i("br"),t._v(" "),i("h2",[t._v("Options")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])])};o._withStripped=!0;var a=i(4),r=i.n(a);i(194);n.a.use(r.a);var s={name:"App",data:function(){return{name:"",sourceCode:'<input\n  type="text"\n  v-autowidth="{maxWidth: \'960px\', minWidth: \'20px\', comfortZone: 0}"\n  v-model="name"\n  placeholder="Watch me change size with my content!"\n/>'}}},d=(i(198),i(5)),h=Object(d.a)(s,o,[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("or grab it from Unpkg: "),e("a",{attrs:{href:"https://unpkg.com/vue-input-autowidth"}},[this._v("https://unpkg.com/vue-input-autowidth")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("maxWidth | String:")]),this._v(" Sets the maximum width the input element will stretch to.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("minWidth | String:")]),this._v(" Sets the minimum width the input element will shrink to.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("comfortZone | Number:")]),this._v(" Additional space in pixels to add to the far side of the input's content.")])}],!1,null,null,null);h.options.__file="example/App.vue";var u=h.exports,c=(i(3),function(t,e){var i=document.querySelector(".vue-input-autowidth-mirror-".concat(t.dataset.uuid)),n=Object.assign({},{maxWidth:"none",minWidth:"none",comfortZone:0},e.value);t.style.maxWidth=n.maxWidth,t.style.minWidth=n.minWidth;var o=t.value;for(o||(o=t.placeholder||"");i.childNodes.length;)i.removeChild(i.childNodes[0]);i.appendChild(document.createTextNode(o));var a=i.scrollWidth+n.comfortZone+2;a!=t.scrollWidth&&(t.style.width="".concat(a,"px"))}),l={bind:function(t){if("INPUT"!==t.tagName.toLocaleUpperCase())throw new Error("v-input-autowidth can only be used on input elements.");t.dataset.uuid=Math.random().toString(36).slice(-5),t.style.boxSizing="content-box"},inserted:function(t,e){var i=window.getComputedStyle(t);t.mirror=document.createElement("span"),Object.assign(t.mirror.style,{position:"absolute",top:"0",left:"0",visibility:"hidden",height:"0",overflow:"hidden",whiteSpace:"pre",fontSize:i.fontSize,fontFamily:i.fontFamily,fontWeight:i.fontWeight,fontStyle:i.fontStyle,letterSpacing:i.letterSpacing,textTransform:i.textTransform}),t.mirror.classList.add("vue-input-autowidth-mirror-".concat(t.dataset.uuid)),t.mirror.setAttribute("aria-hidden","true"),document.body.appendChild(t.mirror),c(t,e)},componentUpdated:function(t,e){c(t,e)},unbind:function(t){document.body.removeChild(t.mirror)}},m=function(t){t.directive("autowidth",l)};"undefined"!==typeof window&&window.Vue&&window.Vue.use(m),l.install=m;var p=l;n.a.use(p),new n.a({el:"#app",render:function(t){return t(u)}})},6:function(t,e,i){t.exports=i(200)}},[[6,2,0]]]);