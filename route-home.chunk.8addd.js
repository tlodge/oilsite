webpackJsonp([1],{KCRI:function(t,e,o){"use strict";o.d(e,"a",function(){return i}),o.d(e,"b",function(){return c});var r=o("KM04"),n=(o.n(r),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t}),i=function(t){var e=t.color||"currentColor",o=t.size||24;return delete t.color,delete t.size,Object(r.h)("svg",n({xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:e,"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},t),Object(r.h)("circle",{cx:"12",cy:"12",r:"10"}),Object(r.h)("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),Object(r.h)("line",{x1:"12",y1:"16",x2:"12",y2:"16"}))},c=function(t){var e=t.color||"currentColor",o=t.size||24;return delete t.color,delete t.size,Object(r.h)("svg",n({xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:e,"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},t),Object(r.h)("polyline",{points:"20 6 9 17 4 12"}))}},ZAL5:function(t){t.exports={home:"home__MseGd",pricing:"pricing__3Lrwt",containerbox:"containerbox__1fbUG",imagebox:"imagebox__2CTo3",dropimage:"dropimage__Ig9W5",roundedtop:"roundedtop__3hz1V",lefttop:"lefttop__2j1c9",righttop:"righttop__26j15",leftbottom:"leftbottom__3b_RR",rightbottom:"rightbottom__U_NrB",topcenter:"topcenter__1YBaT",centerright:"centerright__2TejC",erroricon:"erroricon__3dsRH",centerleft:"centerleft__kU-Kk",label:"label__2WshR",smallabel:"smallabel__1LHhL",centerbox:"centerbox__2ZW5T",flipbox:"flipbox__7lgup",flip:"flip__2Vylr",bottomcenter:"bottomcenter__3kPDt",button:"button__2cB2u",slide:"slide__2QCXG",buttontext:"buttontext__2IACn",logo:"logo__1yT4h",input:"input__Pd_I1",roundedbottom:"roundedbottom__21Dmo"}},"iOg+":function(t,e,o){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),o.d(e,"default",function(){return g});for(var i=o("KM04"),c=(o.n(i),o("ZAL5")),s=o.n(c),a=o("KCRI"),l=o("sw5u"),h=(o.n(l),[]),u=1;u<25;u++)h.push("CM"+u);for(var b=[],d=1;d<17;d++)b.push("CO"+d);var p=[].concat(h,b,["SG","SS"]),f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=Number(t);return!isNaN(e)&&(e>=100&&e<=2e3)},_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=t.replace(/\s/g,"").toUpperCase();return-1!==p.indexOf(e.toUpperCase())},v=Object(i.h)(a.b,{color:"white",size:34}),O=Object(i.h)(a.a,{color:"white",size:34}),j=Object(i.h)(a.b,{color:"white",size:34}),m=Object(i.h)(a.a,{color:"white",size:34}),g=function(t){function e(){for(var e,o,n,i=arguments.length,c=Array(i),s=0;s<i;s++)c[s]=arguments[s];return e=o=r(this,t.call.apply(t,[this].concat(c))),o.state={postcode:"",litres:"",screen:"home"},n=e,r(o,n)}return n(e,t),e.prototype.renderLitres=function(){var t=this,e=""===this.state.litres.trim(),o=f(this.state.litres),r=o?v:O;return Object(i.h)("div",{class:s.a.topcenter},Object(i.h)("div",{class:s.a.centerleft},Object(i.h)("div",{class:s.a.label},"how many litres?"),Object(i.h)("div",{class:s.a.smallabel},"minimum 100, maximum 2000")),Object(i.h)("div",{class:s.a.centerright},Object(i.h)("input",{value:this.state.litres,onInput:function(e){return t.setState({litres:e.target.value})},placeholder:"e.g. 250",class:s.a.input}),Object(i.h)("div",{class:s.a.erroricon},!e&&r)))},e.prototype.renderPostcode=function(){var t=this,e=""===this.state.postcode.trim(),o=_(this.state.postcode),r=o?j:m;return Object(i.h)("div",{class:s.a.bottomcenter},Object(i.h)("div",{class:s.a.centerleft},Object(i.h)("div",{class:s.a.label},"your postcode"),Object(i.h)("div",{class:s.a.smallabel},"we only need the first part e.g CO1")),Object(i.h)("div",{class:s.a.centerright},Object(i.h)("input",{value:this.state.postcode,onInput:function(e){return t.setState({postcode:e.target.value})},placeholder:"e.g. CO1",class:s.a.input}),Object(i.h)("div",{class:s.a.erroricon},!e&&r)))},e.prototype.renderQuote=function(){var t=this;return Object(i.h)("div",{class:s.a.rightbottom},Object(i.h)("div",{class:s.a.button},Object(i.h)("div",{class:s.a.buttontext},Object(i.h)("div",{onClick:function(){return t.setState({screen:"quote"})}},"get my quote"))))},e.prototype.renderHomeContent=function(){return Object(i.h)("div",{class:s.a.centerbox},this.renderLitres(),this.renderPostcode())},e.prototype.renderQuoteContent=function(){return Object(i.h)("div",{class:s.a.flipbox})},e.prototype.render=function(){var t=f(this.state.litres.trim())&&_(this.state.postcode.trim());return Object(i.h)("div",{id:s.a.pricing},Object(i.h)("div",{class:s.a.containerbox},Object(i.h)("div",{class:s.a.imagebox},Object(i.h)("div",{class:s.a.dropimage})),Object(i.h)("div",{class:s.a.roundedtop},Object(i.h)("div",{class:s.a.lefttop}),Object(i.h)("div",{class:s.a.righttop},Object(i.h)("div",{class:s.a.logo}))),"home"===this.state.screen&&this.renderHomeContent(),"quote"===this.state.screen&&this.renderQuoteContent(),Object(i.h)("div",{class:s.a.roundedbottom},Object(i.h)("div",{class:s.a.leftbottom}),t&&this.renderQuote())))},e}(i.Component)}});
//# sourceMappingURL=route-home.chunk.8addd.js.map