parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"xusc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={prova01:{es01:{answer01:"c"},es02:{answer01:"true",answer02:"false",answer03:"true",answer04:"false",answer05:"false",answer06:"true",answer07:"true",answer08:"false",answer09:"false",answer10:"false",answer11:"true",answer12:"true"},es03:{answer01:"ero",answer02:"andavo",answer03:"siamo andati",answer04:"era",answer05:"aveva",answer06:"aveva",answer07:"si è arrabbiato",answer08:"correva",answer09:"è caduta",answer10:"ha preso",answer11:"ha dovuto",answer12:"avevo",answer13:"ho ricevuto",answer14:"ero",answer15:"volevo",answer16:"conoscevo",answer17:"avevate",answer18:"vi siete sposati",answer19:"ho studiato",answer20:"ho iniziato"},es04:{answer01:"era",answer02:"sono arrivati",answer03:"erano",answer04:"esistevano",answer05:"usavano",answer06:"scrivevano",answer07:"telefonavano",answer08:"potevi",answer09:"ho aspettato"},es05:{answer01:"a",answer02:"c",answer03:"b",answer04:"a",answer05:"c",answer06:"b",answer07:"b",answer08:"a",answer09:"a",answer10:"c"},es06:{answer01:"la",answer02:"gli",answer03:"mi",answer04:"ci",answer05:"ne"},es07:{answer01:"c",answer02:"c",answer03:"b",answer04:"c",answer05:"a",answer06:"c",answer07:"a",answer08:"b"},es08:{answer01:"false",answer02:"true",answer03:"false",answer04:"true",answer05:"false",answer06:"true",answer07:"false",answer08:"true",answer09:"false",answer10:"true"},es09:{answer01:"true",answer02:"false",answer03:"true",answer04:"false",answer05:"true",answer06:"false",answer07:"true",answer08:"true"}},prova02:{es01:{answer01:"b"},es02:{answer01:"false",answer02:"false",answer03:"true",answer04:"true",answer05:"false",answer06:"false",answer07:"true",answer08:"true",answer09:"false",answer10:"true",answer11:"false",answer12:"true"},es03:{answer01:"la",answer02:"le",answer03:"ne",answer04:"lo",answer05:"lo",answer06:"li"},es04:{answer01:"le",answer02:"gli",answer03:"gli",answer04:"ti",answer05:"mi",answer06:"vi"},es05:{answer01:"glieli",answer02:"te lo",answer03:"glielo",answer04:"tele",answer05:"gliela",answer06:"me lo"},es06:{answer01:"c",answer02:"b",answer03:"a",answer04:"c",answer05:"a",answer06:"c",answer07:"a",answer08:"b",answer09:"b",answer10:"a"},es07:{answer01:"li",answer02:"le",answer03:"gliel'",answer04:"ne",answer05:"ci",answer06:"vi",answer07:"ne",answer08:"ci",answer09:"glielo",answer10:"l'"},es08:{answer01:"c",answer02:"b",answer03:"a",answer04:"b",answer05:"a",answer06:"c",answer07:"b",answer08:"b"},es09:{answer01:"true",answer02:"false",answer03:"false",answer04:"false",answer05:"true",answer06:"true",answer07:"true",answer08:"false",answer09:"false",answer10:"true"},es10:{answer01:"false",answer02:"true",answer03:"true",answer04:"false",answer05:"true",answer06:"false",answer07:"true",answer08:"true"}},prova03:{es01:{answer01:"c"},es02:{answer01:"true",answer02:"true",answer03:"false",answer04:"true",answer05:"false",answer06:"false",answer07:"false",answer08:"true",answer09:"false",answer10:"false",answer11:"true",answer12:"true"},es03:{answer01:"marco la prepara",answer02:"elena le scrive",answer03:"mio figlio ne ha mangiati quattro",answer04:"digli che gli saluto",answer05:"comprane due chili",answer06:"li hai visti?",answer07:"voglio regalargli una bambola",answer08:"ne prendo ancora una fetta",answer09:"mi sono dimenticata di telefonarle",answer10:"posso averne ancora un po'?",answer11:"le chiedo un'informazione"},es04:{answer01:"mi",answer02:"mi",answer03:"gli",answer04:"lo",answer05:"ti",answer06:"ci",answer07:"vi",answer08:"ne",answer09:"li",answer10:"ti",answer11:"me le",answer12:"ne",answer13:"gliela"},es05:{answer01:"a",answer02:"b",answer03:"a",answer04:"c",answer05:"c",answer06:"b",answer07:"a",answer08:"b",answer09:"b",answer10:"c"},es06:{answer01:"ti",answer02:"gli",answer03:"glielo",answer04:"ne",answer05:"ci"},es07:{answer01:"b",answer02:"c",answer03:"a",answer04:"a",answer05:"a",answer06:"a",answer07:"c",answer08:"b"},es08:{answer01:"false",answer02:"false",answer03:"true",answer04:"false",answer05:"true",answer06:"true",answer07:"false",answer08:"true",answer09:"false",answer10:"false",answer11:"true",answer12:"true"},es09:{answer01:"false",answer02:"false",answer03:"true",answer04:"true",answer05:"true",answer06:"false",answer07:"true",answer08:"false"}}},a=e;exports.default=a;
},{}],"C7l9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=XState,t=e.Machine,r=e.interpret,n=t({initial:"unanswered",states:{unanswered:{on:{INPUT:{target:"answered"}}},answered:{on:{SUBMIT:"corrected"}},corrected:{type:"final"}}}),s=r(n).onTransition(function(e){console.log(e.value),e.matches("unanswered")&&(document.querySelector(".btn").classList.add("disabled"),document.querySelector(".btn").setAttribute("disabled",!0)),e.matches("answered")&&(document.querySelector(".btn").classList.remove("disabled"),document.querySelector(".btn").removeAttribute("disabled"))}),a=s;exports.default=a;
},{}],"KIzB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"service",{enumerable:!0,get:function(){return t.default}}),exports.esercizio=exports.solutions=void 0;var e=o(require("../solutions.js")),t=o(require("./machine.js"));function o(e){return e&&e.__esModule?e:{default:e}}var r=window.location.pathname.split("/"),s=r[r.length-1].substring(0,4),n=r[r.length-2],i=e.default["".concat(n)][s];exports.solutions=i;var u="".concat(s),c=document.getElementById(u);exports.esercizio=c;
},{"../solutions.js":"xusc","./machine.js":"C7l9"}],"NnWK":[function(require,module,exports) {
"use strict";var e=require("./main.js"),r={},i=function(e){return e.trim().toLowerCase()},t=function(r,i){if(r&&i){var t=Array.from(e.esercizio.querySelectorAll("input[type='text']")).filter(function(e){return e.value});null==t||t.forEach(function(e){e.classList.remove("right"),e.classList.remove("error"),r[e.name]===i[e.name]?e.classList.add("right"):e.classList.add("error")})}};null===e.esercizio||void 0===e.esercizio||e.esercizio.addEventListener("keyup",function(t){r[t.target.name]=i(t.target.value),e.service.send("INPUT")}),null===e.esercizio||void 0===e.esercizio||e.esercizio.addEventListener("submit",function(i){i.preventDefault(),t(r,e.solutions),e.service.send("SUBMIT"),e.service.stop()}),e.service.start();
},{"./main.js":"KIzB"}]},{},["NnWK"], null)
//# sourceMappingURL=/handleGapFilling.34e1f6ca.js.map