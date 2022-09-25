(function(){"use strict";var e={3794:function(e,n,r){var t;r.d(n,{P6:function(){return d},PJ:function(){return W},Cv:function(){return t},aE:function(){return _}}),function(e){e["WorldWide"]="WW",e["Germany"]="DE",e["Spain"]="ES"}(t||(t={}));const o=(e,n)=>({...e,isCorrect:n}),a=e=>({...e,isCorrect:!0}),i=e=>({...e,isCorrect:!1}),s=e=>({...e,isCorrect:void 0}),u=e=>void 0===e.isCorrect,c=e=>!u(e),l=e=>c(e)&&!0===e.isCorrect,E=e=>c(e)&&!l(e),d={check:o,checkCorrectly:a,checkIncorrectly:i,uncheck:s,isUnchecked:u,isChecked:c,isCorrect:l,isIncorrect:E},f=e=>({...e,answer:void 0}),h=e=>({...e,answer:d.uncheck(e.answer)}),C=(e,n)=>({...e,answer:n}),p=(e,n)=>n(e),A=e=>({...e,answer:d.checkCorrectly(e.answer)}),T=e=>({...e,answer:d.checkIncorrectly(e.answer)}),g=e=>void 0!==e.answer,m=e=>!g(e),S=e=>g(e)&&d.isUnchecked(e.answer),b=e=>g(e)&&d.isChecked(e.answer),N=e=>g(e)&&d.isCorrect(e.answer),O=e=>g(e)&&d.isIncorrect(e.answer),_={deleteAnswer:f,uncheck:h,answer:C,check:p,checkCorrectly:A,checkIncorrectly:T,isAnswered:g,isUnanswered:m,isUnchecked:S,isChecked:b,isCorrectlyAnswered:N,isIncorrectlyAnswered:O},R=e=>({countryCode:e.countryCode,challengeNumber:e.challengeNumber}),L=(e,n,r)=>{const t=e.questions.map(((e,t)=>{if(t+1===r){const r=_.isAnswered(e)?_.deleteAnswer(e):e,t=_.answer(r,n);return t}return e}));return{...e,questions:t}},y=(e,n)=>{const r=e.questions.map(((e,r)=>n[r]?_.answer(e,n[r]):e));return{...e,questions:r}},v=async(e,n,r)=>{const t=await Promise.all(e.questions.map((async(e,t)=>t+1===r&&_.isUnchecked(e)?await n(e):e)));return{...e,questions:t}},I=async(e,n)=>{const r=await Promise.all(e.questions.map((async e=>_.isUnchecked(e)?_.check(e,n):e)));return{...e,questions:r}},w=e=>0===e.questions.filter(_.isAnswered).length,H=e=>!w(e),G=e=>0===e.questions.filter((e=>!_.isUnanswered(e)||!_.isChecked(e))).length,k=e=>!G(e),U=e=>e.questions.filter(_.isCorrectlyAnswered).length===e.questions.length,z=e=>!U(e),W={getIdentifier:R,fillInAnswer:L,fillInAnswers:y,checkQuestion:v,check:I,isUnanswered:w,isAnswered:H,isChecked:G,isUnchecked:k,isCorrect:U,isIncorrect:z}},2782:function(e,n,r){r.d(n,{O:function(){return c},a:function(){return l}});var t=r(3794),o=r(9150),a=JSON.parse('{"MONTHS":{"JANUARY":"January","FEBRUARY":"February","MARCH":"March","APRIL":"April","MAY":"May","JUNE":"June","JULY":"July","AUGUST":"August","SEPTEMBER":"September","OCTOBER":"October","NOVEMBER":"November","DECEMBER":"December"},"COUNTRY_LIST":{"DE":"Germany","ES":"Spain","WW":"International"},"LANGUAGE_LIST":{"DE":"German","ES":"Spanish","WW":"English"},"HOME_VIEW":{"FREE_CHALLENGES":"<span class=\\"regular\\">Free</span> challenges","ETHICAL_TECHNOLOGY":"<span class=\\"regular\\">Ethical</span> technology","SELECT_A_COUNTRY":"Select a country","CONTRIBUTE":"Would you like to create your own challenges?"},"CHALLENGE_LIST_VIEW":{"CHALLENGE":"Challenge {challengeNumber}","SELECT_A_CHALLENGE":"Select a challenge","WHY_TOBERQUIZZ":"Why ToberQuizz?","CHALLENGES_IN":"Challenges in "},"CHALLENGE_VIEW":{"CHALLENGE":"Challenge {challengeNumber}","CHALLENGE_NOT_RESOLVED":"This challenge has not been completed by anybody yet!","HOOK":"Will you guess all?","CORRECT_ANSWERS":"Correct answers","IMAGES_PER_ROW":"Images per row: ","SHARE_HOOK":"Enjoy ToberQuizz in company! Challenge your contacts and solve all the quizzes.","SHARE_MESSAGE":"Do you dare to complete { countryName }\'s number { challengeNumber } challenge in ToberQuizz?%0a%0ahttps://toberquizz.com/%23/{countryCode}/{challengeNumber}"},"CHALLENGE_STATISTICS_VIEW":{"USERS_PERCENTAGE":"Percentage of users","COUNT_OF_CORRECT_ANSWERS":"Count of correct answers","X_CORRECT_ANSWERS":"{count} correct answers","CHALLENGE_PROGRESS":"Challenge progress","OPT_IN_BOX":{"TEXT_1":"The statistics shown are totally anonymous with prior consent.","TEXT_2":"Currently, your device is not sending them. Would you like to contribute in order to see your progress?","BUTTON":"Contribute"}},"FOOTER":{"MADE_BY":"Made for you with much ❤️ by","CONTRIBUTE":"Do you want to know why and how to contribute?","MISSION":"ToberQuizz is completely free and its mission is purely charitable."}}'),i=JSON.parse('{"MONTHS":{"JANUARY":"Enero","FEBRUARY":"Febrero","MARCH":"Marzo","APRIL":"Abril","MAY":"Mayo","JUNE":"Junio","JULY":"Julio","AUGUST":"Agosto","SEPTEMBER":"Septiembre","OCTOBER":"Octubre","NOVEMBER":"Noviembre","DECEMBER":"Diciembre"},"COUNTRY_LIST":{"DE":"Alemania","ES":"España","WW":"Internacional"},"LANGUAGE_LIST":{"DE":"alemán","ES":"español","WW":"inglés"},"HOME_VIEW":{"FREE_CHALLENGES":"Desafíos <span class=\\"regular\\">gratuitos</span>","ETHICAL_TECHNOLOGY":"Tecnología <span class=\\"regular\\">ética</span>","SELECT_A_COUNTRY":"Selecciona un país","CONTRIBUTE":"¿Te gustaría crear tus propios desafíos?"},"CHALLENGE_LIST_VIEW":{"CHALLENGE":"Desafío {challengeNumber}","SELECT_A_CHALLENGE":"Selecciona un desafío","WHY_TOBERQUIZZ":"¿Por qué ToberQuizz?","CHALLENGES_IN":"Desafíos en "},"CHALLENGE_VIEW":{"CHALLENGE":"Desafío {challengeNumber}","CHALLENGE_NOT_RESOLVED":"¡Este desafío todavía no ha sido completado por nadie!","HOOK":"¿Eres capaz de adivinar todos?","CORRECT_ANSWERS":"Aciertos","IMAGES_PER_ROW":"Imágenes por fila: ","SHARE_HOOK":"¡Disfruta de ToberQuizz en compañía! Reta a tus contactos y resolved todos los desafíos.","SHARE_MESSAGE":"¿Te atreves a completar el desafío número { challengeNumber } de { countryName } en ToberQuizz?%0a%0ahttps://toberquizz.com/%23/{countryCode}/{challengeNumber}"},"CHALLENGE_STATISTICS_VIEW":{"USERS_PERCENTAGE":"Porcentaje de usuarios","COUNT_OF_CORRECT_ANSWERS":"Total de respuestas acertadas","X_CORRECT_ANSWERS":"{count} respuestas acertadas","CHALLENGE_PROGRESS":"Progreso del desafío","OPT_IN_BOX":{"TEXT_1":"Las estadísticas mostradas son totalmente anónimas bajo consentimiento previo.","TEXT_2":"Actualmente, tu dispositivo no está enviándolas. ¿Te gustaría contribuir para ver tu progreso?","BUTTON":"Contribuir"}},"FOOTER":{"MADE_BY":"Hecho para ti con mucho ❤️ por","CONTRIBUTE":"¿Quieres saber por qué y cómo contribuir?","MISSION":"ToberQuizz es totalmente gratuito y su misión es puramente solidaria."}}'),s=JSON.parse('{"MONTHS":{"JANUARY":"Januar","FEBRUARY":"Februar","MARCH":"März","APRIL":"April","MAY":"Mai","JUNE":"Juni","JULY":"Juli","AUGUST":"August","SEPTEMBER":"September","OCTOBER":"Oktober","NOVEMBER":"November","DECEMBER":"Dezember"},"COUNTRY_LIST":{"DE":"Deutschland","ES":"Spanien","WW":"International"},"LANGUAGE_LIST":{"DE":"Deutsch","ES":"Spanisch","WW":"Englisch"},"HOME_VIEW":{"FREE_CHALLENGES":"<span class=\\"regular\\">Kostenlose</span> Aufgaben","ETHICAL_TECHNOLOGY":"<span class=\\"regular\\">Ethische</span> Technologie","SELECT_A_COUNTRY":"Wähle ein Land aus","CONTRIBUTE":"Möchten Sie Ihre eigenen Herausforderungen erstellen?"},"CHALLENGE_LIST_VIEW":{"CHALLENGE":"Aufgabe {challengeNumber}","SELECT_A_CHALLENGE":"Wähle eine Aufgabe aus","WHY_TOBERQUIZZ":"Warum ToberQuizz?","CHALLENGES_IN":"Aufgaben in "},"CHALLENGE_VIEW":{"CHALLENGE":"Aufgabe {challengeNumber}","CHALLENGE_NOT_RESOLVED":"Diese Aufgabe wurde noch von keinem komplett gelöst!","HOOK":"Schaffst du es alle zu lösen?","CORRECT_ANSWERS":"Korrekte Antworten","IMAGES_PER_ROW":"Bilder pro Zeile: ","SHARE_HOOK":"Genieße ToberQuizz in Gesellschaft! Vordere deine Kontakte herraus und löse alle Rätsel.","SHARE_MESSAGE":"Traust du dir zu { countryName }s { challengeNumber }. Aufgabe von ToberQuizz zu lösen?%0a%0ahttps://toberquizz.com/%23/{countryCode}/{challengeNumber}"},"CHALLENGE_STATISTICS_VIEW":{"USERS_PERCENTAGE":"Prozentsatz der Benutzer","COUNT_OF_CORRECT_ANSWERS":"Anzahl korrekter Antworten","X_CORRECT_ANSWERS":"{count} korrekte Antworten","CHALLENGE_PROGRESS":"Aufgabenfortschritt","OPT_IN_BOX":{"TEXT_1":"Die angezeigten Statistiken sind mit vorheriger Zustimmung vollständig anonym.","TEXT_2":"Derzeit sendet Ihr Gerät sie nicht. Möchten Sie einen Beitrag leisten, um Ihre Fortschritte zu sehen?","BUTTON":"Beitragen"}},"FOOTER":{"MADE_BY":"Mit viel ❤️ hergestellt von","CONTRIBUTE":"Willst du wissen wie und warum du mitarbeiten kannst?","MISSION":"ToberQuizz ist komplett kostenlos und gemeinnützig."}}');const u=()=>["ca","gl","eu"].includes(navigator.language.split("-")[0])?"es":navigator.language.split("-")[0],c=e=>{e?e===t.Cv.WorldWide?l.global.locale="en":l.global.locale=e.toLowerCase():l.global.locale=u()},l=(0,o.o)({messages:{en:a,es:i,de:s},locale:u(),fallbackLocale:"en"})},172:function(e,n,r){var t=r(9963),o=r(6252);function a(e,n,r,t,a,i){const s=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(s)}var i=r(2119),s=r(5137),u=(0,o.aZ)({setup:()=>{const e=(0,i.tv)();s.g.addListener("backButton",(()=>{"/"===e.currentRoute.value.fullPath?s.g.exitApp():e.back()}))}}),c=r(3744);const l=(0,c.Z)(u,[["render",a]]);var E=l;const d=[{path:"/",component:()=>r.e(9).then(r.bind(r,2009))},{path:"/:countryCode",component:()=>Promise.all([r.e(958),r.e(413)]).then(r.bind(r,2665))},{path:"/:countryCode/:challengeNumber",component:()=>Promise.all([r.e(958),r.e(849),r.e(725)]).then(r.bind(r,9055))},{path:"/stats/:countryCode/:challengeNumber",component:()=>Promise.all([r.e(958),r.e(849),r.e(252)]).then(r.bind(r,2728))}],f=(0,i.p7)({history:(0,i.r5)("/"),routes:d});var h=f,C=r(2782);(0,t.ri)(E).use(C.a).use(h).mount("#app")}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={id:t,loaded:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=e,function(){var e=[];r.O=function(n,t,o,a){if(!t){var i=1/0;for(l=0;l<e.length;l++){t=e[l][0],o=e[l][1],a=e[l][2];for(var s=!0,u=0;u<t.length;u++)(!1&a||i>=a)&&Object.keys(r.O).every((function(e){return r.O[e](t[u])}))?t.splice(u--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var c=o();void 0!==c&&(n=c)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[t,o,a]}}(),function(){r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,{a:n}),n}}(),function(){var e,n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};r.t=function(t,o){if(1&o&&(t=this(t)),8&o)return t;if("object"===typeof t&&t){if(4&o&&t.__esModule)return t;if(16&o&&"function"===typeof t.then)return t}var a=Object.create(null);r.r(a);var i={};e=e||[null,n({}),n([]),n(n)];for(var s=2&o&&t;"object"==typeof s&&!~e.indexOf(s);s=n(s))Object.getOwnPropertyNames(s).forEach((function(e){i[e]=function(){return t[e]}}));return i["default"]=function(){return t},r.d(a,i),a}}(),function(){r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(n,t){return r.f[t](e,n),n}),[]))}}(),function(){r.u=function(e){return"js/"+e+"."+{9:"cc662d20",252:"986398f5",413:"116cd27c",486:"72dca81d",645:"35cfd537",725:"53da8e6c",849:"e18fbf8a",958:"aba31eb1"}[e]+".js"}}(),function(){r.miniCssF=function(e){return"css/"+e+"."+{9:"16ce8325",252:"8d19b967",413:"15fddd9a",725:"84cdfb81"}[e]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="toberquizz:";r.l=function(t,o,a,i){if(e[t])e[t].push(o);else{var s,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var E=c[l];if(E.getAttribute("src")==t||E.getAttribute("data-webpack")==n+a){s=E;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",n+a),s.src=t),e[t]=[o];var d=function(n,r){s.onerror=s.onload=null,clearTimeout(f);var o=e[t];if(delete e[t],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(r)})),n)return n(r)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){r.p="/"}(),function(){var e=function(e,n,r,t){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,o.parentNode.removeChild(o),t(u)}};return o.onerror=o.onload=a,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var r=document.getElementsByTagName("link"),t=0;t<r.length;t++){var o=r[t],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}var i=document.getElementsByTagName("style");for(t=0;t<i.length;t++){o=i[t],a=o.getAttribute("data-href");if(a===e||a===n)return o}},t=function(t){return new Promise((function(o,a){var i=r.miniCssF(t),s=r.p+i;if(n(i,s))return o();e(t,s,o,a)}))},o={143:0};r.f.miniCss=function(e,n){var r={9:1,252:1,413:1,725:1};o[e]?n.push(o[e]):0!==o[e]&&r[e]&&n.push(o[e]=t(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={143:0};r.f.j=function(n,t){var o=r.o(e,n)?e[n]:void 0;if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(r,t){o=e[n]=[r,t]}));t.push(o[2]=a);var i=r.p+r.u(n),s=new Error,u=function(t){if(r.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;s.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};r.l(i,u,"chunk-"+n,n)}},r.O.j=function(n){return 0===e[n]};var n=function(n,t){var o,a,i=t[0],s=t[1],u=t[2],c=0;if(i.some((function(n){return 0!==e[n]}))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(u)var l=u(r)}for(n&&n(t);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(l)},t=self["webpackChunktoberquizz"]=self["webpackChunktoberquizz"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=r.O(void 0,[998],(function(){return r(172)}));t=r.O(t)})();
//# sourceMappingURL=app.12ca0dd4.js.map