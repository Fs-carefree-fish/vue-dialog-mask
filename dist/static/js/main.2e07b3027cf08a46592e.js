!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define("Dialog",[],o):"object"==typeof exports?exports.Dialog=o():e.Dialog=o()}("undefined"!=typeof self?self:this,function(){return webpackJsonpDialog([1],{"Y5+g":function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=n("woOf"),i=n.n(t),a={name:"Dialog",props:{ConfigProps:{type:Object,required:!1}},data:function(){return{Config:{width:"60%",type:"loading",message:"",btnData:[],maskOpacity:.6,winOpacity:0,show:!0}}},methods:{callBack:function(e){!0===(e.callBack&&e.callBack())&&(this.Config.show=!1)},maskClickClose:function(){this.Config.maskClose&&(this.Config.show=!1)}},created:function(){this.Config=i()(this.Config,this.ConfigProps)}},l={render:function(){var e=this,o=e.$createElement,n=e._self._c||o;return e.Config.show?n("div",{staticClass:"Dialog",style:"background-color: rgba(0, 0, 0, "+e.Config.maskOpacity+")",on:{click:e.maskClickClose}},[n("div",{staticClass:"Dialog-window",class:{animations:e.Config.animations},style:"width:"+e.Config.width+";background-color: rgba(0, 0, 0, "+e.Config.winOpacity+")"},[n("div",{class:[e.Config.type,"Dialog-window-header"]}),e._v(" "),n("div",{staticClass:"Dialog-window-content"},[e._v(e._s(e.Config.message))]),e._v(" "),n("div",{staticClass:"Dialog-window-footer",style:1===e.Config.btnData.length?"justify-content: center;":""},e._l(e.Config.btnData,function(o,t){return n("button",{key:t,style:"background-color:"+o.btnBgc+";color:"+o.color,on:{click:function(n){return e.callBack(o)}}},[e._v(e._s(o.text))])}),0)])]):e._e()},staticRenderFns:[]};var c=n("VU/8")(a,l,!1,function(e){n("jBwF")},"data-v-1835468d",null).exports,s={install:function(e){"undefined"!=typeof window&&window.Vue&&(e=window.Vue),e.component("Dialog",c),e.prototype.$dialog={init:function(o){!function(o){if(o){var n=o,t=new(e.extend({render:function(e){return e("Dialog",{props:{ConfigProps:n}})}}))({el:document.createElement("div")});if(document.body.appendChild(t.$el),o.delayTime&&0!=o.delayTime)var i=setTimeout(function(){o.delayCallback&&o.delayCallback(),clearTimeout(i),document.body.removeChild(t.$el)},o.delayTime)}else{var a=new(e.extend(c))({el:document.createElement("div")});document.body.appendChild(a.$el)}}(o)}}}};o.default=s},jBwF:function(e,o){}},["Y5+g"])});
//# sourceMappingURL=main.2e07b3027cf08a46592e.js.map