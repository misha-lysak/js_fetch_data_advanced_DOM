parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var n="https://mate-academy.github.io/phone-catalogue-static/api/phones.json",e=function(){return new Promise(function(e,t){fetch(n).then(function(n){return n.json()}).then(function(n){return Promise.all(n)}).then(function(n){return e(n.map(function(n){return n.id}))})})},t=function(n){var e=document.createElement("div");e.classList.add("all-successful"),e.insertAdjacentHTML("afterbegin","\n    <h3>All Successful</h3>\n    <ul>\n      ".concat(n.map(function(n){return"<li>".concat(n.toUpperCase(),"</li>")}).join(" "),"\n    </ul>\n  ")),document.body.append(e)},c=function(){return new Promise(function(e,t){fetch(n).then(function(n){return n.json()}).then(function(n){return Promise.race(n)}).then(function(n){return e(n.id)})})},i=function(n){var e=document.createElement("div");e.classList.add("first-received"),e.insertAdjacentHTML("afterbegin","\n    <h3>First Received</h3>\n    <ul>\n      <li>".concat(n,"</li>\n    </ul>\n  ")),document.body.append(e)};e().then(t),c().then(i);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.b6526c94.js.map