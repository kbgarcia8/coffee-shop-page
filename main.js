(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>b});var a=n(601),r=n.n(a),i=n(314),d=n.n(i),o=n(417),c=n.n(o),s=new URL(n(512),n.b),l=new URL(n(868),n.b),p=new URL(n(184),n.b),u=new URL(n(149),n.b),m=d()(r()),h=c()(s),f=c()(l),v=c()(p),g=c()(u);m.push([e.id,`  /*Fonts*/\n  @font-face {\n    font-family: Macqueen; \n    src: url(${h}) format('truetype'); \n  }\n  @font-face {\n    font-family: Transistor; \n    src: url(${f}) format('truetype'); \n  }\n  @font-face {\n    font-family: Coffeemood; \n    src: url(${v}) format('truetype'); \n  }\n  /*Header and navigation bar*/\n  html,\n  body \n  {\n    margin: 0;\n    padding: 0;\n    gap: 0;\n  }\n  nav {\n    display: flex;\n    justify-content: center;\n    margin: 0;\n    padding: 0;\n    padding-block: 2%;\n    gap: 0;\n    background-color: #333335;\n    color: rgb(255, 255, 255);\n  }\n  img#coffeeCup {\n    width: 100px;\n    height: 100px;\n    position: relative;\n    right: 2.5%;\n  }\n  h1 {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0;\n    padding: 0;\n    gap: 0;\n    background-color: #333335;\n    color: rgb(255, 255, 255);\n    font-family: Macqueen, Arial, Helvetica, sans-serif;\n    font-size: 400%;\n  }\n  li.no-bullet {\n    margin-inline: 3.5%;\n    padding: 0;\n    display: inline-block;\n    list-style: none;\n  }\n  ul {\n      flex-basis: 100%;\n      height: 3rem;\n      display: flex;\n      justify-content: center;\n      margin: 0;\n      padding: 0;\n      gap: 0;\n  }\n  button.navigation-button {\n      background-color: #8f857a;\n      color: rgb(255, 255, 123);\n      border-radius: 20%;\n      width: 250%;\n      height: 100%;\n      font-weight: 900;\n      font-size: 100%;\n      padding: 0;\n      margin: 0;\n      gap: 0;\n  }\n  /*Background*/\n  .content-container {\n    padding: 0;\n    margin: 0;\n    gap: 0;\n    height: 200dvh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .content-container::before {\n    content: "";\n    background-image: url(${g});\n    background-repeat: repeat;\n    background-size: 25% 25%;\n    background-position: center;\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    z-index: -1;\n    opacity: 0.25;\n    height: 250dvh;\n  }\n  .content-container >*{\n    padding: 0;\n    margin: 0;\n    gap: 0;\n  }\n  /*Home page*/\n  div#contentSpaceHome {\n    flex-basis: 60%;\n    background-color: #7c6f69;\n    border-radius: 5%;\n    height: 150dvh;\n    display: grid;\n    grid-template-rows: repeat(3, 30%);\n    grid-template-columns: 100%;\n    align-items: center;\n    justify-items: center;\n  }\n  div#slogan >*{\n    padding: 0;\n    margin: 0;\n    gap: 0;\n  }\n  div#slogan{\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    font-family: Coffeemood, Arial, Helvetica, sans-serif;\n    font-size: 7.5dvh;\n    color: aliceblue;\n    grid-area: 1/1/2/2;\n  }\n  div#slogan>p{\n    position: relative;\n    left: 5%;\n  }\n  img#coffeeCup2 {\n    width: 20%;\n    height: 35%;\n    position: absolute;\n    left: 55%;\n    top: 65%;\n    border-radius: 10%;\n  }\n  div#openHours{\n    margin: 0;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: right;\n    grid-area: 2/1/3/2;\n  }\n  table#schedule {\n    border-collapse: separate;\n    border-spacing: 2px;\n    text-align: center;\n    color: aliceblue;\n    margin-right: 5%;\n  }\n  table#schedule td {\n    font-family: sans-serif;\n    font-size: 1.25dvw;\n    font-weight: 900;\n  }\n  img#coffeeTime {\n    width: 40%;\n    height: 90%;\n    position: relative;\n    right: 5%;\n    top: 0;\n    border-radius: 50%;\n  }\n  div#contact{\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    grid-area: 3/1/4/2;\n  }\n  div#contact>*{\n    margin: 0;\n    gap: 0;\n    padding: 0;\n    padding-left: 5dvw;\n  }\n  div#contact>p{\n    font-family: Coffeemood;\n    font-size: 2.5dvw;\n    color: aliceblue;\n  }\n  div#contact>table{\n    font-family: sans-serif;\n    font-size: 1.05dvw;\n    font-weight: 800;\n    color: aliceblue;\n  }\n  .contact-icon{\n    width: 5dvw;\n    height: 5dvh;\n    stroke: aliceblue;\n  }\n  /*Menu Page*/\n  div#contentSpaceMenu {\n    flex-basis: 60%;\n    background-color: #7c6f69;\n    border-radius: 5%;\n    height: 150dvh;\n    display: flex;\n    flex-wrap: wrap;\n  }\n  div#contentSpaceMenu>* {\n    margin: 0;\n    gap: 0;\n    padding: 0;\n  }\n  div.menu-header {\n    flex-basis: 100%;\n    display: flex;\n    font-family: Macqueen, sans-serif;\n    font-size: 350%;\n    color: aliceblue;\n    justify-content: center;\n    align-items: flex-start;\n    height: fit-content;\n    position: relative;\n    top: 2%;\n  }\n  div.menu-panel {\n    display: flex;\n  }\n  div.menu-item {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-content: flex-start;\n    position: relative;\n    bottom: 10%;\n  }\n  div.menu-item>* {\n    margin: 0;\n    gap: 0;\n    padding: 0;\n  }\n  img.drink-item,\n  img.food-item,\n  img.dessert-item {\n    width: 90%;\n    height: 50%;\n  }\n  p.item-label {\n    font-family: Coffeemood;\n    color: aliceblue;\n    font-size: 150%;\n  }\n  /*Home page*/\n  div#contentSpaceServices {\n    flex-basis: 60%;\n    background-color: #7c6f69;\n    border-radius: 5%;\n    height: 150dvh;\n    display: flex;\n    flex-wrap: wrap;\n  }\n  div#contentSpaceServices>* {\n    margin: 0;\n    gap: 0;\n    padding: 0;\n  }\n  div.services-panel {\n    display: flex;\n    flex-basis: 100%;\n    flex-wrap: wrap;\n    height: fit-content;\n    position: relative;\n  }\n  div.services-panel>* {\n    margin: 0;\n    gap: 0;\n    padding: 0;\n  }\n  p.services-text-header{\n    display: flex;\n    flex-basis: 100%;\n    font-size: 7.5dvh;\n    font-family: Coffeemood;\n    color: aliceblue;\n    align-items: flex-end;\n    padding-inline: 5%;\n    position: relative;\n  }\n  p.services-text-info{\n    display: flex;\n    font-size: 2.5dvh;\n    font-family: sans-serif;\n    color: aliceblue;\n    white-space: pre-line;\n    align-items: center;\n    position: relative;\n    padding-inline: 1.5%;\n  }\n  p#stall-description {\n    bottom: 20%;\n  }\n  img#coffee-stall,\n  img#batch-order,\n  img#barista {\n    width: 40dvh;\n    height: 20dvw;\n    position: relative;\n    bottom: 15%;\n  }\n  div#batch-order,\n  p#order-header,\n  p#order-description {\n    justify-content: end;\n    text-align: end;\n  }\n  img#batch-order {\n    right: 60%;\n  }\n  p#order-description {\n    position: relative;\n    left: 35%;\n    bottom: 20%;\n  }`,""]);const b=m},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(a)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(d[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);a&&d[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var i={},d=[],o=0;o<e.length;o++){var c=e[o],s=a.base?c[0]+a.base:c[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var u=n(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=r(m,a);a.byIndex=o,t.splice(o,0,{identifier:p,updater:h,references:1})}d.push(p)}return d}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=a(e=e||[],r=r||{});return function(e){e=e||[];for(var d=0;d<i.length;d++){var o=n(i[d]);t[o].references--}for(var c=a(e,r),s=0;s<i.length;s++){var l=n(i[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},659:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},184:(e,t,n)=>{e.exports=n.p+"images/69418484f8f2a57f3a86.ttf"},512:(e,t,n)=>{e.exports=n.p+"images/aaa67961d449d646231f.ttf"},868:(e,t,n)=>{e.exports=n.p+"images/07a3241957a405e1ff4d.ttf"},149:(e,t,n)=>{e.exports=n.p+"images/61bed1736edd1fd643d7.jpg"}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var i=t[a]={id:a,exports:{}};return e[a](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=a[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{const e=document.getElementById("main-container");var t=n(72),a=n.n(t),r=n(825),i=n.n(r),d=n(659),o=n.n(d),c=n(56),s=n.n(c),l=n(540),p=n.n(l),u=n(113),m=n.n(u),h=n(208),f={};f.styleTagTransform=m(),f.setAttributes=s(),f.insert=o().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=p(),a()(h.A,f),h.A&&h.A.locals&&h.A.locals;const v=document.querySelectorAll(".navigation-button"),g=new class{home(){const t=e.childNodes;Array.from(t).forEach((t=>{e.removeChild(t)}));var n=document.createElement("DIV");n.setAttribute("id","contentSpaceHome"),e.appendChild(n);var a=document.createElement("DIV");a.setAttribute("id","slogan"),n.appendChild(a);var r=document.createElement("P");r.setAttribute("style","white-space: pre-line;"),r.textContent="\nStay focused.\nStay caffeinated.",a.appendChild(r);var i=document.createElement("BR");r.appendChild(i);var d=document.createElement("P");d.setAttribute("style","white-space: pre-line; font-size: 1vw; font-family: Roboto; font-weight: 900;"),d.textContent="\n      Aroma. Taste. Class. These are what to expect in our cup of coffee.\n      Select from a variety of flavors:\n      Salty, Sweet or Strong to either start up or extend your day",a.appendChild(d);var o=document.createElement("IMG");o.setAttribute("id","coffeeCup2"),o.setAttribute("src","../src/images/coffeeCup2.jpg"),o.setAttribute("alt","Coffee-cup2"),a.appendChild(o);var c=document.createElement("DIV");c.setAttribute("id","openHours"),n.appendChild(c);var s=document.createElement("IMG");s.setAttribute("id","coffeeTime"),s.setAttribute("src","../src/images/coffeeTime.jpg"),s.setAttribute("alt","Coffee-time"),c.appendChild(s);var l=document.createElement("TABLE");l.setAttribute("id","schedule"),c.appendChild(l);var p=document.createElement("TBODY");l.appendChild(p);var u=document.createElement("TR");p.appendChild(u);var m=document.createElement("TH");m.setAttribute("colspan","2"),m.setAttribute("style","font-family: Coffeemood; font-size: 300%;"),u.appendChild(m);var h=document.createTextNode(new String("Operating Hours"));m.appendChild(h);var f=document.createElement("TR");p.appendChild(f);var v=document.createElement("TD");f.appendChild(v);var g=document.createTextNode(new String("Monday"));v.appendChild(g);var b=document.createElement("TD");f.appendChild(b);var C=document.createTextNode(new String("10:00AM - 10:00PM"));b.appendChild(C);var A=document.createElement("TR");p.appendChild(A);var E=document.createElement("TD");A.appendChild(E);var x=document.createTextNode(new String("Tuesday"));E.appendChild(x);var y=document.createElement("TD");A.appendChild(y);var T=document.createTextNode(new String("10:00AM - 10:00PM"));y.appendChild(T);var w=document.createElement("TR");p.appendChild(w);var S=document.createElement("TD");w.appendChild(S);var I=document.createTextNode(new String("Wednesday"));S.appendChild(I);var M=document.createElement("TD");w.appendChild(M);var D=document.createTextNode(new String("10:00AM - 10:00PM"));M.appendChild(D);var N=document.createElement("TR");p.appendChild(N);var P=document.createElement("TD");N.appendChild(P);var k=document.createTextNode(new String("Thursday"));P.appendChild(k);var V=document.createElement("TD");N.appendChild(V);var G=document.createTextNode(new String("10:00AM - 10:00PM"));V.appendChild(G);var R=document.createElement("TR");p.appendChild(R);var j=document.createElement("TD");R.appendChild(j);var B=document.createTextNode(new String("Friday"));j.appendChild(B);var z=document.createElement("TD");R.appendChild(z);var H=document.createTextNode(new String("10:00AM - 10:00PM"));z.appendChild(H);var L=document.createElement("TR");p.appendChild(L);var O=document.createElement("TD");L.appendChild(O);var F=document.createTextNode(new String("Saturday"));O.appendChild(F);var $=document.createElement("TD");L.appendChild($);var U=document.createTextNode(new String("01:00PM - 12:00MN"));$.appendChild(U);var W=document.createElement("TR");p.appendChild(W);var q=document.createElement("TD");W.appendChild(q);var K=document.createTextNode(new String("Sunday"));q.appendChild(K);var _=document.createElement("TD");W.appendChild(_);var Y=document.createTextNode(new String("01:00PM - 11:00PM"));_.appendChild(Y);var J=document.createElement("DIV");J.setAttribute("id","contact"),n.appendChild(J);var Q=document.createElement("P");Q.textContent="Come and get your coffee today!",J.appendChild(Q);var X=document.createElement("TABLE");X.setAttribute("id","contactInfo"),J.appendChild(X);var Z=document.createElement("TBODY");X.appendChild(Z);var ee=document.createElement("TR");Z.appendChild(ee);var te=document.createElement("TD");ee.appendChild(te);var ne=document.createElement("IMG");ne.setAttribute("class","contact-icon"),ne.setAttribute("id","location"),ne.setAttribute("src","../src/images/location.svg"),ne.setAttribute("alt","location-icon"),te.appendChild(ne);var ae=document.createElement("TD");ee.appendChild(ae);var re=document.createTextNode(new String("Intramuros, Metro Manila"));ae.appendChild(re);var ie=document.createElement("TR");Z.appendChild(ie);var de=document.createElement("TD");ie.appendChild(de);var oe=document.createElement("IMG");oe.setAttribute("class","contact-icon"),oe.setAttribute("id","call"),oe.setAttribute("src","../src/images/call.svg"),oe.setAttribute("alt","call-icon"),de.appendChild(oe);var ce=document.createElement("TD");ie.appendChild(ce);var se=document.createTextNode(new String("(02) 87151321 / 09121213897"));ce.appendChild(se);var le=document.createElement("TR");Z.appendChild(le);var pe=document.createElement("TD");le.appendChild(pe);var ue=document.createElement("IMG");ue.setAttribute("class","contact-icon"),ue.setAttribute("id","facebook"),ue.setAttribute("src","../src/images/facebook.svg"),ue.setAttribute("alt","facebook-icon"),pe.appendChild(ue);var me=document.createElement("TD");le.appendChild(me);var he=document.createTextNode(new String("K Coffee - Intramuros"));me.appendChild(he);var fe=document.createElement("TR");Z.appendChild(fe);var ve=document.createElement("TD");fe.appendChild(ve);var ge=document.createElement("IMG");ge.setAttribute("class","contact-icon"),ge.setAttribute("id","instagram"),ge.setAttribute("src","../src/images/instagram.svg"),ge.setAttribute("alt","instagram-icon"),ve.appendChild(ge);var be=document.createElement("TD");fe.appendChild(be);var Ce=document.createTextNode(new String("@kaycoffeeph"));be.appendChild(Ce);var Ae=document.createElement("TR");Z.appendChild(Ae);var Ee=document.createElement("TD");Ae.appendChild(Ee);var xe=document.createElement("IMG");xe.setAttribute("class","contact-icon"),xe.setAttribute("id","grab"),xe.setAttribute("src","../src/images/grab.svg"),xe.setAttribute("alt","grab-icon"),Ee.appendChild(xe);var ye=document.createElement("TD");Ae.appendChild(ye);var Te=document.createTextNode(new String("K Coffee - Intramuros"));ye.appendChild(Te);var we=document.createElement("TR");Z.appendChild(we);var Se=document.createElement("TD");we.appendChild(Se);var Ie=document.createElement("IMG");Ie.setAttribute("class","contact-icon"),Ie.setAttribute("id","foodpanda"),Ie.setAttribute("src","../src/images/foodpanda-logo.svg"),Ie.setAttribute("alt","foodpanda-icon"),Se.appendChild(Ie);var Me=document.createElement("TD");we.appendChild(Me);var De=document.createTextNode(new String("K Coffee - Intramuros"));Me.appendChild(De)}menu(){const t=e.childNodes;Array.from(t).forEach((t=>{e.removeChild(t)}));var n=document.createElement("DIV");n.setAttribute("id","contentSpaceMenu"),e.appendChild(n);var a=document.createElement("DIV");a.setAttribute("class","menu-header"),a.setAttribute("id","drink-header"),n.appendChild(a);var r=document.createTextNode(new String("Drinks"));a.appendChild(r);var i=document.createElement("DIV");i.setAttribute("class","menu-panel"),i.setAttribute("id","drink-menu"),n.appendChild(i);var d=document.createElement("DIV");d.setAttribute("class","menu-item"),i.appendChild(d);var o=document.createElement("IMG");o.setAttribute("src","../src/images/americano.png"),o.setAttribute("alt","Americano"),o.setAttribute("class","drink-item"),d.appendChild(o);var c=document.createElement("P");c.setAttribute("class","item-label"),d.appendChild(c);var s=document.createTextNode(new String("Americano"));c.appendChild(s);var l=document.createElement("DIV");l.setAttribute("class","menu-item"),i.appendChild(l);var p=document.createElement("IMG");p.setAttribute("src","../src/images/mocha.png"),p.setAttribute("alt","Mocha"),p.setAttribute("class","drink-item"),l.appendChild(p);var u=document.createElement("P");u.setAttribute("class","item-label"),l.appendChild(u);var m=document.createTextNode(new String("Mocha"));u.appendChild(m);var h=document.createElement("DIV");h.setAttribute("class","menu-item"),i.appendChild(h);var f=document.createElement("IMG");f.setAttribute("src","../src/images/latte.png"),f.setAttribute("alt","Latte"),f.setAttribute("class","drink-item"),h.appendChild(f);var v=document.createElement("P");v.setAttribute("class","item-label"),h.appendChild(v);var g=document.createTextNode(new String("Latte"));v.appendChild(g);var b=document.createElement("DIV");b.setAttribute("class","menu-item"),i.appendChild(b);var C=document.createElement("IMG");C.setAttribute("src","../src/images/machiatto.png"),C.setAttribute("alt","Machiatto"),C.setAttribute("class","drink-item"),b.appendChild(C);var A=document.createElement("P");A.setAttribute("class","item-label"),b.appendChild(A);var E=document.createTextNode(new String("Machiatto"));A.appendChild(E);var x=document.createElement("DIV");x.setAttribute("class","menu-item"),i.appendChild(x);var y=document.createElement("IMG");y.setAttribute("src","../src/images/frappe.png"),y.setAttribute("alt","Frappe"),y.setAttribute("class","drink-item"),x.appendChild(y);var T=document.createElement("P");T.setAttribute("class","item-label"),x.appendChild(T);var w=document.createTextNode(new String("Frappe"));T.appendChild(w);var S=document.createElement("DIV");S.setAttribute("class","menu-header"),S.setAttribute("id","food-header"),n.appendChild(S);var I=document.createTextNode(new String("Pasta"));S.appendChild(I);var M=document.createElement("DIV");M.setAttribute("class","menu-panel"),M.setAttribute("id","food-menu"),n.appendChild(M);var D=document.createElement("DIV");D.setAttribute("class","menu-item"),M.appendChild(D);var N=document.createElement("IMG");N.setAttribute("src","../src/images/aglio olio.png"),N.setAttribute("alt","Aglio Olio"),N.setAttribute("class","food-item"),D.appendChild(N);var P=document.createElement("P");P.setAttribute("class","item-label"),D.appendChild(P);var k=document.createTextNode(new String("Aglio Olio"));P.appendChild(k);var V=document.createElement("DIV");V.setAttribute("class","menu-item"),M.appendChild(V);var G=document.createElement("IMG");G.setAttribute("src","../src/images/bolognese.png"),G.setAttribute("alt","Bolognese"),G.setAttribute("class","food-item"),V.appendChild(G);var R=document.createElement("P");R.setAttribute("class","item-label"),V.appendChild(R);var j=document.createTextNode(new String("Bolognese"));R.appendChild(j);var B=document.createElement("DIV");B.setAttribute("class","menu-item"),M.appendChild(B);var z=document.createElement("IMG");z.setAttribute("src","../src/images/carbonara.png"),z.setAttribute("alt","Carbonara"),z.setAttribute("class","food-item"),B.appendChild(z);var H=document.createElement("P");H.setAttribute("class","item-label"),B.appendChild(H);var L=document.createTextNode(new String("Carbonara"));H.appendChild(L);var O=document.createElement("DIV");O.setAttribute("class","menu-item"),M.appendChild(O);var F=document.createElement("IMG");F.setAttribute("src","../src/images/seafood.png"),F.setAttribute("alt","Seafood"),F.setAttribute("class","food-item"),O.appendChild(F);var $=document.createElement("P");$.setAttribute("class","item-label"),O.appendChild($);var U=document.createTextNode(new String("Seafood"));$.appendChild(U);var W=document.createElement("DIV");W.setAttribute("class","menu-item"),M.appendChild(W);var q=document.createElement("IMG");q.setAttribute("src","../src/images/tomato.png"),q.setAttribute("alt","Tomato"),q.setAttribute("class","food-item"),W.appendChild(q);var K=document.createElement("P");K.setAttribute("class","item-label"),W.appendChild(K);var _=document.createTextNode(new String("Tomato"));K.appendChild(_);var Y=document.createElement("DIV");Y.setAttribute("class","menu-header"),Y.setAttribute("id","dessert-header"),n.appendChild(Y);var J=document.createTextNode(new String("Desserts"));Y.appendChild(J);var Q=document.createElement("DIV");Q.setAttribute("class","menu-panel"),Q.setAttribute("id","desssert-menu"),n.appendChild(Q);var X=document.createElement("DIV");X.setAttribute("class","menu-item"),Q.appendChild(X);var Z=document.createElement("IMG");Z.setAttribute("src","../src/images/dount.png"),Z.setAttribute("alt","Donut"),Z.setAttribute("class","dessert-item"),X.appendChild(Z);var ee=document.createElement("P");ee.setAttribute("class","item-label"),X.appendChild(ee);var te=document.createTextNode(new String("Donut"));ee.appendChild(te);var ne=document.createElement("DIV");ne.setAttribute("class","menu-item"),Q.appendChild(ne);var ae=document.createElement("IMG");ae.setAttribute("src","../src/images/gelatin.png"),ae.setAttribute("alt","Gelatin"),ae.setAttribute("class","dessert-item"),ne.appendChild(ae);var re=document.createElement("P");re.setAttribute("class","item-label"),ne.appendChild(re);var ie=document.createTextNode(new String("Gelatin"));re.appendChild(ie);var de=document.createElement("DIV");de.setAttribute("class","menu-item"),Q.appendChild(de);var oe=document.createElement("IMG");oe.setAttribute("src","../src/images/icecream.png"),oe.setAttribute("alt","Ice Cream"),oe.setAttribute("class","dessert-item"),de.appendChild(oe);var ce=document.createElement("P");ce.setAttribute("class","item-label"),de.appendChild(ce);var se=document.createTextNode(new String("Ice Cream"));ce.appendChild(se);var le=document.createElement("DIV");le.setAttribute("class","menu-item"),Q.appendChild(le);var pe=document.createElement("IMG");pe.setAttribute("src","../src/images/shortcake.png"),pe.setAttribute("alt","Shortcake"),pe.setAttribute("class","dessert-item"),le.appendChild(pe);var ue=document.createElement("P");ue.setAttribute("class","item-label"),le.appendChild(ue);var me=document.createTextNode(new String("Shortcake"));ue.appendChild(me);var he=document.createElement("DIV");he.setAttribute("class","menu-item"),Q.appendChild(he);var fe=document.createElement("IMG");fe.setAttribute("src","../src/images/waffles.png"),fe.setAttribute("alt","Waffles"),fe.setAttribute("class","dessert-item"),he.appendChild(fe);var ve=document.createElement("P");ve.setAttribute("class","item-label"),he.appendChild(ve);var ge=document.createTextNode(new String("Waffles"));ve.appendChild(ge)}services(){const t=e.childNodes;Array.from(t).forEach((t=>{e.removeChild(t)}));var n=document.createElement("DIV");n.setAttribute("id","contentSpaceServices"),e.appendChild(n);var a=document.createElement("DIV");a.setAttribute("class","services-panel"),a.setAttribute("id","event-stall"),n.appendChild(a);var r=document.createElement("P");r.setAttribute("class","services-text-header"),r.setAttribute("id","stall-header"),r.textContent="Event Stall",a.appendChild(r);var i=document.createElement("P");i.setAttribute("class","services-text-info"),i.setAttribute("id","stall-description"),i.textContent="Bring our most beloved coffee into your memorable moments!\nNever feel sleepy and continue to capture the moments with \nyour own eyes. To cater guest, participants and staffs alike!",a.appendChild(i);var d=document.createElement("IMG");d.setAttribute("src","../src/images/coffee-stand.png"),d.setAttribute("alt","Coffee Stand Icon"),d.setAttribute("id","coffee-stall"),a.appendChild(d);var o=document.createElement("DIV");o.setAttribute("class","services-panel"),o.setAttribute("id","batch-order"),n.appendChild(o);var c=document.createElement("P");c.setAttribute("class","services-text-header"),c.setAttribute("id","order-header"),c.textContent="Batch Order",o.appendChild(c);var s=document.createElement("P");s.setAttribute("class","services-text-info"),s.setAttribute("id","order-description"),s.textContent="Coffee Party? Office Event? Party Beverate?\nWe got you! Just place your order 1 day before\nand we will be serving you coffees that will be \nenjoyed for both young and adult",o.appendChild(s);var l=document.createElement("IMG");l.setAttribute("src","../src/images/order.png"),l.setAttribute("alt","Order List Icon"),l.setAttribute("id","batch-order"),o.appendChild(l);var p=document.createElement("DIV");p.setAttribute("class","services-panel"),p.setAttribute("id","barista-workshop"),n.appendChild(p);var u=document.createElement("P");u.setAttribute("class","services-text-header"),u.setAttribute("id","workshop-header"),u.textContent="Barista Workshop",p.appendChild(u);var m=document.createElement("P");m.setAttribute("class","services-text-info"),m.setAttribute("id","workshop-description"),m.textContent="Your coffee, your move\n        Come and join us on a journey to learn the beauty of coffee.\n        From its aroma down to its taste!\n        ",p.appendChild(m);var h=document.createElement("IMG");h.setAttribute("src","../src/images/barista.png"),h.setAttribute("alt","Barista Icon"),h.setAttribute("id","barista"),m.appendChild(h)}};window.onload=function(){alert("Welcome to K Coffee!"),g.home()},v.forEach((function(e,t){e.addEventListener("click",(function(){let t=e.textContent;"Home"==t?(console.log(t+" page active again"),g.home()):"Menu"==t?(console.log(t+" page active"),g.menu()):"Services"==t?(console.log(t+" page active"),g.services()):console.log("No page assigned to clicked navigation button")}))}))})()})();