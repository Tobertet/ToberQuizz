(function(){"use strict";var e={3794:function(e,n,r){var t;r.d(n,{P6:function(){return d},PJ:function(){return B},Cv:function(){return t},aE:function(){return R}}),function(e){e["Spain"]="ES",e["WorldWide"]="WW"}(t||(t={}));var o=r(8941),u=function(e,n){return(0,o.Z)((0,o.Z)({},e),{},{isCorrect:n})},i=function(e){return(0,o.Z)((0,o.Z)({},e),{},{isCorrect:!0})},a=function(e){return(0,o.Z)((0,o.Z)({},e),{},{isCorrect:!1})},c=function(e){return(0,o.Z)((0,o.Z)({},e),{},{isCorrect:void 0})},s=function(e){return void 0===e.isCorrect},l=function(e){return!s(e)},E=function(e){return l(e)&&!0===e.isCorrect},f=function(e){return l(e)&&!E(e)},d={check:u,checkCorrectly:i,checkIncorrectly:a,uncheck:c,isUnchecked:s,isChecked:l,isCorrect:E,isIncorrect:f},h=function(e){return(0,o.Z)((0,o.Z)({},e),{},{answer:void 0})},p=function(e){return(0,o.Z)((0,o.Z)({},e),{},{answer:d.uncheck(e.answer)})},C=function(e,n){return(0,o.Z)((0,o.Z)({},e),{},{answer:n})},g=function(e,n){return n(e)},m=function(e){return(0,o.Z)((0,o.Z)({},e),{},{answer:d.checkCorrectly(e.answer)})},A=function(e){return(0,o.Z)((0,o.Z)({},e),{},{answer:d.checkIncorrectly(e.answer)})},T=function(e){return void 0!==e.answer},b=function(e){return!T(e)},S=function(e){return T(e)&&d.isUnchecked(e.answer)},N=function(e){return T(e)&&d.isChecked(e.answer)},O=function(e){return T(e)&&d.isCorrect(e.answer)},_=function(e){return T(e)&&d.isIncorrect(e.answer)},R={deleteAnswer:h,uncheck:p,answer:C,check:g,checkCorrectly:m,checkIncorrectly:A,isAnswered:T,isUnanswered:b,isUnchecked:S,isChecked:N,isCorrectlyAnswered:O,isIncorrectlyAnswered:_},L=r(5669),v=(r(5666),r(1249),r(1539),r(8783),r(3948),r(7327),function(e){return{countryCode:e.countryCode,challengeNumber:e.challengeNumber}}),y=function(e,n,r){var t=e.questions.map((function(e,t){if(t+1===r){var o=R.isAnswered(e)?R.deleteAnswer(e):e,u=R.answer(o,n);return u}return e}));return(0,o.Z)((0,o.Z)({},e),{},{questions:t})},w=function(e,n){var r=e.questions.map((function(e,r){return n[r]?R.answer(e,n[r]):e}));return(0,o.Z)((0,o.Z)({},e),{},{questions:r})},I=function(){var e=(0,L.Z)(regeneratorRuntime.mark((function e(n,r,t){var u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(n.questions.map(function(){var e=(0,L.Z)(regeneratorRuntime.mark((function e(n,o){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o+1!==t||!R.isUnchecked(n)){e.next=6;break}return e.next=3,r(n);case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=n;case 7:return e.abrupt("return",e.t0);case 8:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()));case 2:return u=e.sent,e.abrupt("return",(0,o.Z)((0,o.Z)({},n),{},{questions:u}));case 4:case"end":return e.stop()}}),e)})));return function(n,r,t){return e.apply(this,arguments)}}(),k=function(){var e=(0,L.Z)(regeneratorRuntime.mark((function e(n,r){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(n.questions.map(function(){var e=(0,L.Z)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",R.isUnchecked(n)?R.check(n,r):n);case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));case 2:return t=e.sent,e.abrupt("return",(0,o.Z)((0,o.Z)({},n),{},{questions:t}));case 4:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),H=function(e){return 0===e.questions.filter(R.isAnswered).length},G=function(e){return!H(e)},U=function(e){return 0===e.questions.filter((function(e){return!R.isUnanswered(e)||!R.isChecked(e)})).length},z=function(e){return!U(e)},W=function(e){return e.questions.filter(R.isCorrectlyAnswered).length===e.questions.length},M=function(e){return!W(e)},B={getIdentifier:v,fillInAnswer:y,fillInAnswers:w,checkQuestion:I,check:k,isUnanswered:H,isAnswered:G,isChecked:U,isUnchecked:z,isCorrect:W,isIncorrect:M}},2782:function(e,n,r){r.d(n,{O:function(){return s},a:function(){return l}});r(6699),r(4916),r(3123);var t=r(3794),o=r(9150),u=JSON.parse('{"MONTHS":{"JANUARY":"January","FEBRUARY":"February","MARCH":"March","APRIL":"April","MAY":"May","JUNE":"June","JULY":"July","AUGUST":"August","SEPTEMBER":"September","OCTOBER":"October","NOVEMBER":"November","DECEMBER":"December"},"COUNTRY_LIST":{"DE":"Germany","ES":"Spain","WW":"International"},"LANGUAGE_LIST":{"DE":"German","ES":"Spanish","WW":"English"},"HOME_VIEW":{"FREE_CHALLENGES":"<span class=\\"regular\\">Free</span> challenges","ETHICAL_TECHNOLOGY":"<span class=\\"regular\\">Ethical</span> technology","SELECT_A_COUNTRY":"Select a country","CONTRIBUTE":"Would you like to create your own challenges?"},"CHALLENGE_LIST_VIEW":{"CHALLENGE":"Challenge {challengeNumber}","SELECT_A_CHALLENGE":"Select a challenge","WHY_TOBERQUIZZ":"Why ToberQuizz?","CHALLENGES_IN":"Challenges in "},"CHALLENGE_VIEW":{"CHALLENGE":"Challenge {challengeNumber}","CHALLENGE_NOT_RESOLVED":"This challenge has not been completed by anybody yet!","HOOK":"Will you guess all?","CORRECT_ANSWERS":"Correct answers","IMAGES_PER_ROW":"Images per row: ","SHARE_HOOK":"Enjoy ToberQuizz in company! Challenge your contacts and solve all the quizzes.","SHARE_MESSAGE":"Do you dare to complete { countryName }\'s number { challengeNumber } challenge in ToberQuizz?%0a%0ahttps://toberquizz.com/%23/{countryCode}/{challengeNumber}"},"CHALLENGE_STATISTICS_VIEW":{"USERS_PERCENTAGE":"Percentage of users","COUNT_OF_CORRECT_ANSWERS":"Count of correct answers","X_CORRECT_ANSWERS":"{count} correct answers","CHALLENGE_PROGRESS":"Challenge progress","OPT_IN_BOX":{"TEXT_1":"The statistics shown are totally anonymous with prior consent.","TEXT_2":"Currently, your device is not sending them. Would you like to contribute in order to see your progress?","BUTTON":"Contribute"}},"FOOTER":{"MADE_BY":"Made for you with much ❤️ by","CONTRIBUTE":"Do you want to know why and how to contribute?","MISSION":"ToberQuizz is completely free and its mission is purely charitable."}}'),i=JSON.parse('{"MONTHS":{"JANUARY":"Enero","FEBRUARY":"Febrero","MARCH":"Marzo","APRIL":"Abril","MAY":"Mayo","JUNE":"Junio","JULY":"Julio","AUGUST":"Agosto","SEPTEMBER":"Septiembre","OCTOBER":"Octubre","NOVEMBER":"Noviembre","DECEMBER":"Diciembre"},"COUNTRY_LIST":{"DE":"Alemania","ES":"España","WW":"Internacional"},"LANGUAGE_LIST":{"DE":"alemán","ES":"español","WW":"inglés"},"HOME_VIEW":{"FREE_CHALLENGES":"Desafíos <span class=\\"regular\\">gratuitos</span>","ETHICAL_TECHNOLOGY":"Tecnología <span class=\\"regular\\">ética</span>","SELECT_A_COUNTRY":"Selecciona un país","CONTRIBUTE":"¿Te gustaría crear tus propios desafíos?"},"CHALLENGE_LIST_VIEW":{"CHALLENGE":"Desafío {challengeNumber}","SELECT_A_CHALLENGE":"Selecciona un desafío","WHY_TOBERQUIZZ":"¿Por qué ToberQuizz?","CHALLENGES_IN":"Desafíos en "},"CHALLENGE_VIEW":{"CHALLENGE":"Desafío {challengeNumber}","CHALLENGE_NOT_RESOLVED":"¡Este desafío todavía no ha sido completado por nadie!","HOOK":"¿Eres capaz de adivinar todos?","CORRECT_ANSWERS":"Aciertos","IMAGES_PER_ROW":"Imágenes por fila: ","SHARE_HOOK":"¡Disfruta de ToberQuizz en compañía! Reta a tus contactos y resolved todos los desafíos.","SHARE_MESSAGE":"¿Te atreves a completar el desafío número { challengeNumber } de { countryName } en ToberQuizz?%0a%0ahttps://toberquizz.com/%23/{countryCode}/{challengeNumber}"},"CHALLENGE_STATISTICS_VIEW":{"USERS_PERCENTAGE":"Porcentaje de usuarios","COUNT_OF_CORRECT_ANSWERS":"Total de respuestas acertadas","X_CORRECT_ANSWERS":"{count} respuestas acertadas","CHALLENGE_PROGRESS":"Progreso del desafío","OPT_IN_BOX":{"TEXT_1":"Las estadísticas mostradas son totalmente anónimas bajo consentimiento previo.","TEXT_2":"Actualmente, tu dispositivo no está enviándolas. ¿Te gustaría contribuir para ver tu progreso?","BUTTON":"Contribuir"}},"FOOTER":{"MADE_BY":"Hecho para ti con mucho ❤️ por","CONTRIBUTE":"¿Quieres saber por qué y cómo contribuir?","MISSION":"ToberQuizz es totalmente gratuito y su misión es puramente solidaria."}}'),a=JSON.parse('{"MONTHS":{"JANUARY":"Januar","FEBRUARY":"Februar","MARCH":"März","APRIL":"April","MAY":"Mai","JUNE":"Juni","JULY":"Juli","AUGUST":"August","SEPTEMBER":"September","OCTOBER":"Oktober","NOVEMBER":"November","DECEMBER":"Dezember"},"COUNTRY_LIST":{"DE":"Deutschland","ES":"Spanien","WW":"International"},"LANGUAGE_LIST":{"DE":"Deutsch","ES":"Spanisch","WW":"Englisch"},"HOME_VIEW":{"FREE_CHALLENGES":"<span class=\\"regular\\">Kostenlose</span> Aufgaben","ETHICAL_TECHNOLOGY":"<span class=\\"regular\\">Ethische</span> Technologie","SELECT_A_COUNTRY":"Wähle ein Land aus","CONTRIBUTE":"Möchten Sie Ihre eigenen Herausforderungen erstellen?"},"CHALLENGE_LIST_VIEW":{"CHALLENGE":"Aufgabe {challengeNumber}","SELECT_A_CHALLENGE":"Wähle eine Aufgabe aus","WHY_TOBERQUIZZ":"Warum ToberQuizz?","CHALLENGES_IN":"Aufgaben in "},"CHALLENGE_VIEW":{"CHALLENGE":"Aufgabe {challengeNumber}","CHALLENGE_NOT_RESOLVED":"Diese Aufgabe wurde noch von keinem komplett gelöst!","HOOK":"Schaffst du es alle zu lösen?","CORRECT_ANSWERS":"Korrekte Antworten","IMAGES_PER_ROW":"Bilder pro Zeile: ","SHARE_HOOK":"Genieße ToberQuizz in Gesellschaft! Vordere deine Kontakte herraus und löse alle Rätsel.","SHARE_MESSAGE":"Traust du dir zu { countryName }s { challengeNumber }. Aufgabe von ToberQuizz zu lösen?%0a%0ahttps://toberquizz.com/%23/{countryCode}/{challengeNumber}"},"CHALLENGE_STATISTICS_VIEW":{"USERS_PERCENTAGE":"Prozentsatz der Benutzer","COUNT_OF_CORRECT_ANSWERS":"Anzahl korrekter Antworten","X_CORRECT_ANSWERS":"{count} korrekte Antworten","CHALLENGE_PROGRESS":"Aufgabenfortschritt","OPT_IN_BOX":{"TEXT_1":"Die angezeigten Statistiken sind mit vorheriger Zustimmung vollständig anonym.","TEXT_2":"Derzeit sendet Ihr Gerät sie nicht. Möchten Sie einen Beitrag leisten, um Ihre Fortschritte zu sehen?","BUTTON":"Beitragen"}},"FOOTER":{"MADE_BY":"Mit viel ❤️ hergestellt von","CONTRIBUTE":"Willst du wissen wie und warum du mitarbeiten kannst?","MISSION":"ToberQuizz ist komplett kostenlos und gemeinnützig."}}'),c=function(){return["ca","gl","eu"].includes(navigator.language.split("-")[0])?"es":navigator.language.split("-")[0]},s=function(e){e?e===t.Cv.WorldWide?l.global.locale="en":l.global.locale=e.toLowerCase():l.global.locale=c()},l=(0,o.o)({messages:{en:u,es:i,de:a},locale:c(),fallbackLocale:"en"})},172:function(e,n,r){r(6992),r(8674),r(9601),r(7727);var t=r(9963),o=r(6252);function u(e,n,r,t,u,i){var a=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(a)}var i=r(2119),a=r(5137),c=(0,o.aZ)({setup:function(){var e=(0,i.tv)();a.g.addListener("backButton",(function(){"/"===e.currentRoute.value.fullPath?a.g.exitApp():e.back()}))}}),s=r(3744);const l=(0,s.Z)(c,[["render",u]]);var E=l,f=(r(1539),r(8783),r(3948),[{path:"/",component:function(){return r.e(9).then(r.bind(r,2009))}},{path:"/:countryCode",component:function(){return Promise.all([r.e(308),r.e(413)]).then(r.bind(r,2665))}},{path:"/:countryCode/:challengeNumber",component:function(){return Promise.all([r.e(308),r.e(559),r.e(725)]).then(r.bind(r,9055))}},{path:"/stats/:countryCode/:challengeNumber",component:function(){return Promise.all([r.e(308),r.e(559),r.e(252)]).then(r.bind(r,2728))}}]),d=(0,i.p7)({history:(0,i.r5)("/"),routes:f}),h=d,p=r(2782);(0,t.ri)(E).use(p.a).use(h).mount("#app")}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var u=n[t]={id:t,loaded:!1,exports:{}};return e[t].call(u.exports,u,u.exports,r),u.loaded=!0,u.exports}r.m=e,function(){var e=[];r.O=function(n,t,o,u){if(!t){var i=1/0;for(l=0;l<e.length;l++){t=e[l][0],o=e[l][1],u=e[l][2];for(var a=!0,c=0;c<t.length;c++)(!1&u||i>=u)&&Object.keys(r.O).every((function(e){return r.O[e](t[c])}))?t.splice(c--,1):(a=!1,u<i&&(i=u));if(a){e.splice(l--,1);var s=o();void 0!==s&&(n=s)}}return n}u=u||0;for(var l=e.length;l>0&&e[l-1][2]>u;l--)e[l]=e[l-1];e[l]=[t,o,u]}}(),function(){r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,{a:n}),n}}(),function(){var e,n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};r.t=function(t,o){if(1&o&&(t=this(t)),8&o)return t;if("object"===typeof t&&t){if(4&o&&t.__esModule)return t;if(16&o&&"function"===typeof t.then)return t}var u=Object.create(null);r.r(u);var i={};e=e||[null,n({}),n([]),n(n)];for(var a=2&o&&t;"object"==typeof a&&!~e.indexOf(a);a=n(a))Object.getOwnPropertyNames(a).forEach((function(e){i[e]=function(){return t[e]}}));return i["default"]=function(){return t},r.d(u,i),u}}(),function(){r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(n,t){return r.f[t](e,n),n}),[]))}}(),function(){r.u=function(e){return"js/"+e+"-legacy."+{9:"cc940da3",252:"f071bc9a",308:"256d851c",413:"f465bfa4",486:"72dca81d",559:"b45d7685",645:"35cfd537",725:"52a38915"}[e]+".js"}}(),function(){r.miniCssF=function(e){return"css/"+e+"."+{9:"16ce8325",252:"8d19b967",413:"15fddd9a",725:"84cdfb81"}[e]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="toberquizz:";r.l=function(t,o,u,i){if(e[t])e[t].push(o);else{var a,c;if(void 0!==u)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var E=s[l];if(E.getAttribute("src")==t||E.getAttribute("data-webpack")==n+u){a=E;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",n+u),a.src=t),e[t]=[o];var f=function(n,r){a.onerror=a.onload=null,clearTimeout(d);var o=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(r)})),n)return n(r)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){r.p="/"}(),function(){var e=function(e,n,r,t){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var u=function(u){if(o.onerror=o.onload=null,"load"===u.type)r();else{var i=u&&("load"===u.type?"missing":u.type),a=u&&u.target&&u.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=a,o.parentNode.removeChild(o),t(c)}};return o.onerror=o.onload=u,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var r=document.getElementsByTagName("link"),t=0;t<r.length;t++){var o=r[t],u=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(u===e||u===n))return o}var i=document.getElementsByTagName("style");for(t=0;t<i.length;t++){o=i[t],u=o.getAttribute("data-href");if(u===e||u===n)return o}},t=function(t){return new Promise((function(o,u){var i=r.miniCssF(t),a=r.p+i;if(n(i,a))return o();e(t,a,o,u)}))},o={143:0};r.f.miniCss=function(e,n){var r={9:1,252:1,413:1,725:1};o[e]?n.push(o[e]):0!==o[e]&&r[e]&&n.push(o[e]=t(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={143:0};r.f.j=function(n,t){var o=r.o(e,n)?e[n]:void 0;if(0!==o)if(o)t.push(o[2]);else{var u=new Promise((function(r,t){o=e[n]=[r,t]}));t.push(o[2]=u);var i=r.p+r.u(n),a=new Error,c=function(t){if(r.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var u=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;a.message="Loading chunk "+n+" failed.\n("+u+": "+i+")",a.name="ChunkLoadError",a.type=u,a.request=i,o[1](a)}};r.l(i,c,"chunk-"+n,n)}},r.O.j=function(n){return 0===e[n]};var n=function(n,t){var o,u,i=t[0],a=t[1],c=t[2],s=0;if(i.some((function(n){return 0!==e[n]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(c)var l=c(r)}for(n&&n(t);s<i.length;s++)u=i[s],r.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return r.O(l)},t=self["webpackChunktoberquizz"]=self["webpackChunktoberquizz"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=r.O(void 0,[998],(function(){return r(172)}));t=r.O(t)})();
//# sourceMappingURL=app-legacy.c59f6063.js.map