(window.webpackJsonp=window.webpackJsonp||[]).push([[2,3],{311:function(t,o,e){var content=e(319);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(85).default)("1a724b3d",content,!0,{sourceMap:!1})},312:function(t,o,e){var map={"./art1.jpg":313,"./art2.jpg":314,"./art3.jpg":315,"./art4.jpg":316};function n(t){var o=r(t);return e(o)}function r(t){if(!e.o(map,t)){var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=r,t.exports=n,n.id=312},313:function(t,o,e){t.exports=e.p+"img/art1.89837fe.jpg"},314:function(t,o,e){t.exports=e.p+"img/art2.ffe93d3.jpg"},315:function(t,o,e){t.exports=e.p+"img/art3.cbee1fa.jpg"},316:function(t,o,e){t.exports=e.p+"img/art4.0f59b76.jpg"},317:function(t,o,e){"use strict";e.r(o);e(4),e(65);var n={name:"CardComponent",components:{},props:{list:{type:Object,required:!0}},data:function(){return{}},methods:{getIdCard:function(t){this.$emit("getIdCard",t)}}},r=(e(318),e(66)),component=Object(r.a)(n,(function(){var t=this,o=t._self._c;return o("li",{staticClass:"row p-2"},[o("div",{staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},[o("div",{staticClass:"well blog"},[o("nuxt-link",{attrs:{to:"post"}},[o("div",{staticClass:"row",on:{click:function(o){return t.getIdCard(t.list.id)}}},[o("div",{staticClass:"col-xs-12 col-sm-8 col-md-8 col-lg-8"},[o("div",{staticClass:"image"},[o("img",{staticClass:"inside__content-img",attrs:{src:e(312)("./".concat(t.list.image)),alt:"изображение картины"}})])]),t._v(" "),o("div",{staticClass:"col-xs-12 col-sm-4 col-md-4 col-lg-4"},[o("div",{staticClass:"blog-details"},[o("h2",[t._v("\n                "+t._s(t.list.title)+"\n              ")]),t._v(" "),o("p",[t._v("\n                "+t._s(t.list.description.substring(0,50)+"...")+"\n              ")])])])])])],1)])])}),[],!1,null,null,null);o.default=component.exports},318:function(t,o,e){"use strict";e(311)},319:function(t,o,e){var n=e(84)((function(i){return i[1]}));n.push([t.i,".blog .image{border-radius:3px 0 0 3px;height:250px;overflow:hidden}.blog .image img{height:auto;width:100%}.blog .date{background:#5bc0de;border-radius:999px;color:#fff;font-weight:700;height:65px;padding:10px;position:absolute;right:-10px;top:-10px;width:65px;z-index:99}.blog .blog-details{padding:0 20px 0 0}.blog{padding:0}.well{background:#fff;border:0;border-bottom:2px solid #ccc;border-radius:3px;box-shadow:none;max-height:100000px;min-height:63px;padding:20px;position:relative}.blog .blog-details h2{border-bottom:1px solid #eee;margin-bottom:10px;padding-bottom:10px}.blog .date .blog-number{color:#fff;display:block;font-size:24px;text-align:center}",""]),n.locals={},t.exports=n},320:function(t,o,e){var content=e(323);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(85).default)("15d9966e",content,!0,{sourceMap:!1})},322:function(t,o,e){"use strict";e(320)},323:function(t,o,e){var n=e(84)((function(i){return i[1]}));n.push([t.i,"ul[data-v-28efc3d1]{list-style-type:none;padding:0}.body[data-v-28efc3d1]{margin:0 auto;max-width:1332px;min-height:calc(100vh - 240px);padding:0 101px 0 15px}.body__content-title[data-v-28efc3d1]{color:#343030;font-family:Merriweather;font-size:24px;font-weight:700;letter-spacing:0;line-height:36px;margin:45px 0 39px;padding:0;text-align:center}.cards__items[data-v-28efc3d1]{align-items:center;display:flex;flex-direction:column}",""]),n.locals={},t.exports=n},324:function(t,o,e){"use strict";e.r(o);var n={name:"BodyComponent",components:{CardComponent:e(317).default},props:{artlist:{type:Array,required:!0}},data:function(){return{}},methods:{getIdCard:function(t){this.$emit("getIdCard",t)}}},r=(e(322),e(66)),component=Object(r.a)(n,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"body"},[o("div",{staticClass:"body__content"},[o("h1",{staticClass:"body__content-title"},[t._v("Все доступные посты")]),t._v(" "),o("div",{staticClass:"body__content-cards"},[o("ul",{staticClass:"cards__items"},t._l(t.artlist,(function(e){return o("CardComponent",{key:e.id,attrs:{list:e},on:{getIdCard:t.getIdCard}})})),1)])])])}),[],!1,null,"28efc3d1",null);o.default=component.exports;installComponents(component,{CardComponent:e(317).default})}}]);