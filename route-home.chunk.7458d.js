webpackJsonp([0],{"8KhH":function(t,e,o){"use strict";function r(t){o.e(1).then(function(){t(o("PwkT"))}.bind(null,o)).catch(o.oe)}function n(t){o.e(2).then(function(){t(o("ICay"))}.bind(null,o)).catch(o.oe)}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=o("KM04"),a=o("ZAL5"),l=o.n(a),h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},u=function(t){var e=t.color||"currentColor",o=t.size||24;return delete t.color,delete t.size,Object(s.h)("svg",h({xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:e,"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},t),Object(s.h)("circle",{cx:"12",cy:"12",r:"10"}),Object(s.h)("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),Object(s.h)("line",{x1:"12",y1:"16",x2:"12",y2:"16"}))},d=function(t){var e=t.color||"currentColor",o=t.size||24;return delete t.color,delete t.size,Object(s.h)("svg",h({xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:e,"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},t),Object(s.h)("polyline",{points:"20 6 9 17 4 12"}))},b=o("SHQS"),p=o.n(b),f=p()(r),v=p()(n);o.d(e,"default",function(){return z});for(var O=[],j=1;j<25;j++)O.push("CM"+j);for(var _=[],m=1;m<17;m++)_.push("CO"+m);var g=[].concat(O,_,["SG","SS"]),y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=Number(t);return!isNaN(e)&&(e>=100&&e<=2e3)},w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=t.replace(/\s/g,"").toUpperCase();return-1!==g.indexOf(e.toUpperCase())},x=Object(s.h)(d,{color:"white",size:34}),k=Object(s.h)(u,{color:"white",size:34}),C=Object(s.h)(d,{color:"white",size:34}),S=Object(s.h)(u,{color:"white",size:34}),z=function(t){function e(){for(var e,o,r,n=arguments.length,i=Array(n),s=0;s<n;s++)i[s]=arguments[s];return e=o=c(this,t.call.apply(t,[this].concat(i))),o.state={postcode:"",litres:"",screen:"home"},r=e,c(o,r)}return i(e,t),e.prototype.renderLitres=function(){var t=this,e=""===this.state.litres.trim(),o=y(this.state.litres),r=o?x:k;return Object(s.h)("div",{class:l.a.topcenter},Object(s.h)("div",{class:l.a.centerleft},Object(s.h)("div",{class:l.a.label},"how many litres?"),Object(s.h)("div",{class:l.a.smallabel},"minimum 100, maximum 2000")),Object(s.h)("div",{class:l.a.centerright},Object(s.h)("input",{value:this.state.litres,onInput:function(e){return t.setState({litres:e.target.value})},placeholder:"e.g. 250",class:l.a.input}),Object(s.h)("div",{class:l.a.erroricon},!e&&r)))},e.prototype.renderPostcode=function(){var t=this,e=""===this.state.postcode.trim(),o=w(this.state.postcode),r=o?C:S;return Object(s.h)("div",{class:l.a.bottomcenter},Object(s.h)("div",{class:l.a.centerleft},Object(s.h)("div",{class:l.a.label},"your postcode"),Object(s.h)("div",{class:l.a.smallabel},"we only need the first part e.g CO1")),Object(s.h)("div",{class:l.a.centerright},Object(s.h)("input",{value:this.state.postcode,onInput:function(e){return t.setState({postcode:e.target.value})},placeholder:"e.g. CO1",class:l.a.input}),Object(s.h)("div",{class:l.a.erroricon},!e&&r)))},e.prototype.renderQuote=function(){return Object(s.h)("div",{class:l.a.back},Object(s.h)(f,{litres:this.state.litres}))},e.prototype.renderDetails=function(){return Object(s.h)("div",{class:l.a.back2},Object(s.h)(v,{litres:this.state.litres}))},e.prototype.renderHome=function(){return Object(s.h)("div",{class:l.a.front},this.renderLitres(),this.renderPostcode())},e.prototype.renderContent=function(){var t="quote"===this.state.screen?{transform:"rotateY(180deg)"}:{};return Object(s.h)("div",{class:l.a.centerbox,style:t},"quote"===this.state.screen&&this.renderQuote(),"details"===this.state.screen&&this.renderDetails(),this.renderHome())},e.prototype.acceptQuote=function(){var t=this;return Object(s.h)("div",{class:l.a.button},Object(s.h)("div",{class:l.a.buttontext},Object(s.h)("div",{onClick:function(){return t.setState({screen:"details"})}},"order my oil")))},e.prototype.placeOrder=function(){var t=this;return Object(s.h)("div",{class:l.a.button},Object(s.h)("div",{class:l.a.buttontext},Object(s.h)("div",{onClick:function(){return t.setState({screen:"home"})}},"place order")))},e.prototype.renderFooter=function(){var t=y(this.state.litres.trim())&&w(this.state.postcode.trim());return"home"===this.state.screen?Object(s.h)("div",{class:l.a.roundedbottom},Object(s.h)("div",{class:l.a.leftbottom}),Object(s.h)("div",{class:l.a.rightbottom},t&&this.renderGetQuote())):"quote"===this.state.screen?Object(s.h)("div",{class:l.a.roundedbottom},Object(s.h)("div",{class:l.a.leftbottom}),Object(s.h)("div",{class:l.a.rightbottom},this.acceptQuote())):"details"===this.state.screen?Object(s.h)("div",{class:l.a.roundedbottom},Object(s.h)("div",{class:l.a.leftbottom},Object(s.h)("div",{class:l.a.footertext},"Once ordered we will contact you to arrange a delivery time")),Object(s.h)("div",{class:l.a.rightbottom},this.placeOrder())):null},e.prototype.renderGetQuote=function(){var t=this;return Object(s.h)("div",{class:l.a.button},Object(s.h)("div",{class:l.a.buttontext},Object(s.h)("div",{onClick:function(){return t.setState({screen:"quote"})}},"get my quote")))},e.prototype.render=function(){return Object(s.h)("div",{id:l.a.pricing},Object(s.h)("div",{class:l.a.containerbox},Object(s.h)("div",{class:l.a.imagebox},"details"!==this.state.screen&&Object(s.h)("div",{class:l.a.dropimage})),Object(s.h)("div",{class:l.a.roundedtop},Object(s.h)("div",{class:l.a.lefttop}),Object(s.h)("div",{class:l.a.righttop},Object(s.h)("div",{class:l.a.logo}))),this.renderContent(),this.renderFooter()))},e}(s.Component)},ZAL5:function(t){t.exports={home:"home__MseGd",pricing:"pricing__3Lrwt",containerbox:"containerbox__1fbUG",imagebox:"imagebox__2CTo3",dropimage:"dropimage__Ig9W5",roundedtop:"roundedtop__3hz1V",lefttop:"lefttop__2j1c9",righttop:"righttop__26j15",leftbottom:"leftbottom__3b_RR",rightbottom:"rightbottom__U_NrB",fullbottom:"fullbottom__ZKlQG",topcenter:"topcenter__1YBaT",centerright:"centerright__2TejC",erroricon:"erroricon__3dsRH",centerleft:"centerleft__kU-Kk",label:"label__2WshR",smallabel:"smallabel__1LHhL",centerbox:"centerbox__2ZW5T",flip:"flip__2Vylr",front:"front__3UqRP",back:"back__3vcvV",back2:"back2__WOm1M",bottomcenter:"bottomcenter__3kPDt",button:"button__2cB2u",slide:"slide__2QCXG",buttontext:"buttontext__2IACn",logo:"logo__1yT4h",input:"input__Pd_I1",roundedbottom:"roundedbottom__21Dmo",footertext:"footertext__1zwoA"}}});
//# sourceMappingURL=route-home.chunk.7458d.js.map