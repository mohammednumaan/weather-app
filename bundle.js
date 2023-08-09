(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>u});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),l=new URL(t(474),t.b),d=i()(o()),p=s()(l);d.push([n.id,`/* BODY */\n\nbody{\n    margin: 0;\n}\n\n@font-face {\n    font-family: pixel;\n    src: url(${p});\n}\n\n/* HEADER */\n\n.header-container{\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    \n    max-height: 100px;\n    padding: 10px;\n\n    color: #F2AA4CFF;\n    background-color: #101820FF;\n    font-family: pixel;\n}\n\n\n/* SEARCH */\n\n.search-container{\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n\n    padding: 10px;\n    margin-top: 0px;\n    background-color: #F2AA4CFF;\n}\n\n#search{\n\n    width: 200px;\n    padding: 10px;\n\n    border: 2px solid #101820FF;\n    border-radius: 10px;\n\n    font-family: pixel;\n    color: #F2AA4CFF;\n\n}\n\n::placeholder{\n\n    color: #F2AA4CFF;\n}\n\n#search-button{\n\n    font-family: pixel;\n    font-weight: 800;\n    font-size: 20px;\n\n    width: 200px;\n    padding: 5px;\n\n    border: 2px solid #101820FF;\n    border-radius: 10px;\n\n    color: #F2AA4CFF;\n\n}\n\n\n/* MAIN */\n\n.main-container{\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n\n    height: 37.3rem;\n    background-color: #F2AA4CFF;\n\n}\n\n#error-message{\n\n    font-family: pixel;\n    font-weight: 800;\n    color: #101820FF;\n    display: none;\n}\n\n/* MAIN DIV */\n\n.main-div{\n\n    width: 500px;\n    height: 300px;\n    margin-top: -100px;\n    padding: 30px;\n\n    border: 2px solid white;\n    border-radius: 15px;\n    background-color: #101820FF;\n    color: #F2AA4CFF;\n\n    font-family: pixel;\n    margin-top: 20px;\n    \n}\n\n.city-forecast-div,\n.gif-temp{\n    display: inline;\n    width: 500px;\n    height: 50px;\n    border: 2px solid white;\n    border-radius: 15px;\n    background-color: #101820FF;\n    color: #F2AA4CFF;\n    font-family: pixel;\n    padding: 7px;\n    overflow: hidden;\n}\n\n.city-forecast-div > p{\n    width: 2000px;\n    transform: translateX(-2000px);\n    animation: scroll 35s infinite;\n   \n}\n\n#toggle-button{\n\n    border: 3px solid #F2AA4CFF;\n    border-radius: 10px;\n\n    background-color: #101820FF;\n    color: #F2AA4CFF;\n\n    font-family: pixel;\n    font-weight: 800;\n\n    padding: 5px;\n\n    box-shadow: 0 9px #F2AA4CFF;\n\n}\n\n#toggle-button:active{\n    box-shadow: 0 5px #3B444B;\n    transform: translateY(4px);\n}\n\n@keyframes scroll{\n    from{\n        transform: translateX(500px);\n\n    }\n    to{\n        transform: translateX(-2000px);\n    }\n}\n\n`,""]);const u=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},474:(n,e,t)=>{n.exports=t.p+"ebfebd434aa46ba0da85.ttf"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=document.querySelector("#search"),e="1d1b3978cfab44cfb0832028230908";async function r(){const t=n.value,r=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${e}&q=${t}&days=1&aqi=no&alerts=no`,{mode:"cors"});return r.ok?r:null}async function o(){return null!==await r()?await(await r()).json():null}const a=document.querySelector("form"),i=document.querySelector(".main-container"),c=document.querySelector("#search-button"),s=document.querySelector("#error-message");var l=t(379),d=t.n(l),p=t(795),u=t.n(p),f=t(569),m=t.n(f),h=t(565),x=t.n(h),g=t(216),y=t.n(g),v=t(589),b=t.n(v),F=t(426),C={};C.styleTagTransform=b(),C.setAttributes=x(),C.insert=m().bind(null,"head"),C.domAPI=u(),C.insertStyleElement=y(),d()(F.Z,C),F.Z&&F.Z.locals&&F.Z.locals,c.addEventListener("click",(async()=>{null!==await o()?(i.innerHTML="",async function(){const n=await o(),e=await async function(){const n=(await o()).forecast.forecastday[0].hour;let e="Today's Forecast :";for(let t=0;t<n.length;t++)e+=` ${n[t].temp_c},. `;return e}(),t=n.current.temp_c,r=n.current.temp_f,c=n.location.name,s=n.location.country,l=n.current.wind_kph,d=n.current.condition.text,p=document.createElement("div");p.classList.add("main-div"),i.appendChild(p);const u=document.createElement("h1");p.appendChild(u);const f=document.createElement("h4");p.appendChild(f);const m=document.createElement("p");p.appendChild(m);const h=document.createElement("p");p.appendChild(h);const x=document.createElement("h1");x.classList.add("city-condition"),p.appendChild(x);const g=document.createElement("div");g.classList.add("city-forecast-div"),i.appendChild(g);const y=document.createElement("p");g.appendChild(y);const v=document.createElement("button");v.textContent="Toggle Farenheit",v.type="button",v.id="toggle-button",p.appendChild(v),a.reset(),u.textContent=`${c}`,f.textContent=`${s}`,m.textContent=`Temperature(in Celsius) - ${t} ° c`,h.textContent=`Wind Speed(in km/h) - ${l} KM/H `,x.textContent=`Condition - ${d}`,y.textContent=`${e}`,async function(n,e,t,r){e.addEventListener("click",(()=>{"Toggle Celsius"===e.textContent?(n.textContent=`Temperature(in Celsius) - ${t} ° C`,e.textContent="Toggle Farenheit"):(n.textContent=`Temperature(in Farenheit) - ${r} ° F`,e.textContent="Toggle Celsius")}))}(m,v,t,r)}()):(i.innerHTML="",s.style.display="block",i.appendChild(s))}))})()})();