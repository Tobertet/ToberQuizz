(function(){"use strict";var e={3794:function(e,n,t){var r;t.d(n,{P6:function(){return d},PJ:function(){return U},Cv:function(){return r},aE:function(){return O}}),function(e){e["Spain"]="ES",e["WorldWide"]="WW"}(r||(r={}));const o=(e,n)=>({...e,isCorrect:n}),a=e=>({...e,isCorrect:!0}),i=e=>({...e,isCorrect:!1}),s=e=>({...e,isCorrect:void 0}),u=e=>void 0===e.isCorrect,c=e=>!u(e),l=e=>c(e)&&!0===e.isCorrect,E=e=>c(e)&&!l(e),d={check:o,checkCorrectly:a,checkIncorrectly:i,uncheck:s,isUnchecked:u,isChecked:c,isCorrect:l,isIncorrect:E},f=e=>({...e,answer:void 0}),h=e=>({...e,answer:d.uncheck(e.answer)}),A=(e,n)=>({...e,answer:n}),S=(e,n)=>n(e),p=e=>({...e,answer:d.checkCorrectly(e.answer)}),C=e=>({...e,answer:d.checkIncorrectly(e.answer)}),b=e=>void 0!==e.answer,g=e=>!b(e),m=e=>b(e)&&d.isUnchecked(e.answer),T=e=>b(e)&&d.isChecked(e.answer),_=e=>b(e)&&d.isCorrect(e.answer),N=e=>b(e)&&d.isIncorrect(e.answer),O={deleteAnswer:f,uncheck:h,answer:A,check:S,checkCorrectly:p,checkIncorrectly:C,isAnswered:b,isUnanswered:g,isUnchecked:m,isChecked:T,isCorrectlyAnswered:_,isIncorrectlyAnswered:N},R=e=>({countryCode:e.countryCode,challengeNumber:e.challengeNumber}),L=(e,n,t)=>{const r=e.questions.map(((e,r)=>{if(r+1===t){const t=O.isAnswered(e)?O.deleteAnswer(e):e,r=O.answer(t,n);return r}return e}));return{...e,questions:r}},y=(e,n)=>{const t=e.questions.map(((e,t)=>n[t]?O.answer(e,n[t]):e));return{...e,questions:t}},v=async(e,n,t)=>{const r=await Promise.all(e.questions.map((async(e,r)=>r+1===t&&O.isUnchecked(e)?await n(e):e)));return{...e,questions:r}},I=async(e,n)=>{const t=await Promise.all(e.questions.map((async e=>O.isUnchecked(e)?O.check(e,n):e)));return{...e,questions:t}},w=e=>0===e.questions.filter(O.isAnswered).length,H=e=>!w(e),z=e=>0===e.questions.filter((e=>!O.isUnanswered(e)||!O.isChecked(e))).length,G=e=>!z(e),k=e=>e.questions.filter(O.isCorrectlyAnswered).length===e.questions.length,W=e=>!k(e),U={getIdentifier:R,fillInAnswer:L,fillInAnswers:y,checkQuestion:v,check:I,isUnanswered:w,isAnswered:H,isChecked:z,isUnchecked:G,isCorrect:k,isIncorrect:W}},2782:function(e,n,t){t.d(n,{O:function(){return c},a:function(){return l}});var r=t(3794),o=t(9150),a=JSON.parse('{"MONTHS":{"JANUARY":"January","FEBRUARY":"February","MARCH":"March","APRIL":"April","MAY":"May","JUNE":"June","JULY":"July","AUGUST":"August","SEPTEMBER":"September","OCTOBER":"October","NOVEMBER":"November","DECEMBER":"December"},"COUNTRY_LIST":{"DE":"Germany","ES":"Spain","WW":"International"},"LANGUAGE_LIST":{"DE":"German","ES":"Spanish","WW":"English"},"HOME_VIEW":{"FREE_CHALLENGES":"<span class=\\"regular\\">Free</span> challenges","ETHICAL_TECHNOLOGY":"<span class=\\"regular\\">Ethical</span> technology","SELECT_A_COUNTRY":"Select a country","SHARE":"Share","SHARE_MESSAGE":"Discover the challenges of ToberQuizz!%0aWill you be able to guess all of them?%0a%0ahttps://toberquizz.com"},"CHALLENGE_LIST_VIEW":{"CHALLENGE":"Challenge {challengeNumber}","SELECT_A_CHALLENGE":"Select a challenge","WHY_TOBERQUIZZ":"Why ToberQuizz?","CHALLENGES_IN":"Challenges in "},"CHALLENGE_VIEW":{"CHALLENGE":"Challenge {challengeNumber}","CHALLENGE_NOT_RESOLVED":"This challenge has not been completed by anybody yet!","HOOK":"Will you guess all?","CORRECT_ANSWERS":"Correct answers","IMAGES_PER_ROW":"Images per row: ","SHARE_HOOK":"Enjoy ToberQuizz in company! Challenge your contacts and solve all the quizzes.","SHARE_MESSAGE":"Do you dare to complete { countryName }\'s number { challengeNumber } challenge in ToberQuizz?%0a%0ahttps://toberquizz.com/%23/{countryCode}/{challengeNumber}"},"CHALLENGE_STATISTICS_VIEW":{"USERS_PERCENTAGE":"Percentage of users","COUNT_OF_CORRECT_ANSWERS":"Count of correct answers","X_CORRECT_ANSWERS":"{count} correct answers","CHALLENGE_PROGRESS":"Challenge progress","OPT_IN_BOX":{"TEXT_1":"The statistics shown are totally anonymous with prior consent.","TEXT_2":"Currently, your device is not sending them. Would you like to contribute in order to see your progress?","BUTTON":"Contribute"}},"FOOTER":{"MADE_BY":"Made for you with much ❤️ by","CONTRIBUTE":"Do you want to know why and how to contribute?","MISSION":"ToberQuizz is completely free and its mission is purely charitable."}}'),i=JSON.parse('{"MONTHS":{"JANUARY":"Enero","FEBRUARY":"Febrero","MARCH":"Marzo","APRIL":"Abril","MAY":"Mayo","JUNE":"Junio","JULY":"Julio","AUGUST":"Agosto","SEPTEMBER":"Septiembre","OCTOBER":"Octubre","NOVEMBER":"Noviembre","DECEMBER":"Diciembre"},"COUNTRY_LIST":{"DE":"Alemania","ES":"España","WW":"Internacional"},"LANGUAGE_LIST":{"DE":"alemán","ES":"español","WW":"inglés"},"HOME_VIEW":{"FREE_CHALLENGES":"Desafíos <span class=\\"regular\\">gratuitos</span>","ETHICAL_TECHNOLOGY":"Tecnología <span class=\\"regular\\">ética</span>","SELECT_A_COUNTRY":"Selecciona un país","SHARE":"Compartir","SHARE_MESSAGE":"¡Descubre los desafíos de ToberQuizz!%0a¿Serás capaz de adivinar todos?%0a%0ahttps://toberquizz.com"},"CHALLENGE_LIST_VIEW":{"CHALLENGE":"Desafío {challengeNumber}","SELECT_A_CHALLENGE":"Selecciona un desafío","WHY_TOBERQUIZZ":"¿Por qué ToberQuizz?","CHALLENGES_IN":"Desafíos en "},"CHALLENGE_VIEW":{"CHALLENGE":"Desafío {challengeNumber}","CHALLENGE_NOT_RESOLVED":"¡Este desafío todavía no ha sido completado por nadie!","HOOK":"¿Eres capaz de adivinar todos?","CORRECT_ANSWERS":"Aciertos","IMAGES_PER_ROW":"Imágenes por fila: ","SHARE_HOOK":"¡Disfruta de ToberQuizz en compañía! Reta a tus contactos y resolved todos los desafíos.","SHARE_MESSAGE":"¿Te atreves a completar el desafío número { challengeNumber } de { countryName } en ToberQuizz?%0a%0ahttps://toberquizz.com/%23/{countryCode}/{challengeNumber}"},"CHALLENGE_STATISTICS_VIEW":{"USERS_PERCENTAGE":"Porcentaje de usuarios","COUNT_OF_CORRECT_ANSWERS":"Total de respuestas acertadas","X_CORRECT_ANSWERS":"{count} respuestas acertadas","CHALLENGE_PROGRESS":"Progreso del desafío","OPT_IN_BOX":{"TEXT_1":"Las estadísticas mostradas son totalmente anónimas bajo consentimiento previo.","TEXT_2":"Actualmente, tu dispositivo no está enviándolas. ¿Te gustaría contribuir para ver tu progreso?","BUTTON":"Contribuir"}},"FOOTER":{"MADE_BY":"Hecho para ti con mucho ❤️ por","CONTRIBUTE":"¿Quieres saber por qué y cómo contribuir?","MISSION":"ToberQuizz es totalmente gratuito y su misión es puramente solidaria."}}'),s=JSON.parse('{"MONTHS":{"JANUARY":"Januar","FEBRUARY":"Februar","MARCH":"März","APRIL":"April","MAY":"Mai","JUNE":"Juni","JULY":"Juli","AUGUST":"August","SEPTEMBER":"September","OCTOBER":"Oktober","NOVEMBER":"November","DECEMBER":"Dezember"},"COUNTRY_LIST":{"DE":"Deutschland","ES":"Spanien","WW":"International"},"LANGUAGE_LIST":{"DE":"Deutsch","ES":"Spanisch","WW":"Englisch"},"HOME_VIEW":{"FREE_CHALLENGES":"<span class=\\"regular\\">Kostenlose</span> Aufgaben","ETHICAL_TECHNOLOGY":"<span class=\\"regular\\">Ethische</span> Technologie","SELECT_A_COUNTRY":"Wähle ein Land aus","SHARE":"Teilen","SHARE_MESSAGE":"Entdecke die Aufgaben von ToberQuizz!%0aSchaffst du es alle zu lösen?%0a%0ahttps://toberquizz.com"},"CHALLENGE_LIST_VIEW":{"CHALLENGE":"Aufgabe {challengeNumber}","SELECT_A_CHALLENGE":"Wähle eine Aufgabe aus","WHY_TOBERQUIZZ":"Warum ToberQuizz?","CHALLENGES_IN":"Aufgaben in "},"CHALLENGE_VIEW":{"CHALLENGE":"Aufgabe {challengeNumber}","CHALLENGE_NOT_RESOLVED":"Diese Aufgabe wurde noch von keinem komplett gelöst!","HOOK":"Schaffst du es alle zu lösen?","CORRECT_ANSWERS":"Korrekte Antworten","IMAGES_PER_ROW":"Bilder pro Zeile: ","SHARE_HOOK":"Genieße ToberQuizz in Gesellschaft! Vordere deine Kontakte herraus und löse alle Rätsel.","SHARE_MESSAGE":"Traust du dir zu { countryName }s { challengeNumber }. Aufgabe von ToberQuizz zu lösen?%0a%0ahttps://toberquizz.com/%23/{countryCode}/{challengeNumber}"},"CHALLENGE_STATISTICS_VIEW":{"USERS_PERCENTAGE":"Prozentsatz der Benutzer","COUNT_OF_CORRECT_ANSWERS":"Anzahl korrekter Antworten","X_CORRECT_ANSWERS":"{count} korrekte Antworten","CHALLENGE_PROGRESS":"Aufgabenfortschritt","OPT_IN_BOX":{"TEXT_1":"Die angezeigten Statistiken sind mit vorheriger Zustimmung vollständig anonym.","TEXT_2":"Derzeit sendet Ihr Gerät sie nicht. Möchten Sie einen Beitrag leisten, um Ihre Fortschritte zu sehen?","BUTTON":"Beitragen"}},"FOOTER":{"MADE_BY":"Mit viel ❤️ hergestellt von","CONTRIBUTE":"Willst du wissen wie und warum du mitarbeiten kannst?","MISSION":"ToberQuizz ist komplett kostenlos und gemeinnützig."}}');const u=()=>["ca","gl","eu"].includes(navigator.language.split("-")[0])?"es":navigator.language.split("-")[0],c=e=>{e?e===r.Cv.WorldWide?l.global.locale="en":l.global.locale=e.toLowerCase():l.global.locale=u()},l=(0,o.o)({messages:{en:a,es:i,de:s},locale:u(),fallbackLocale:"en"})},172:function(e,n,t){var r=t(9963),o=t(6252);function a(e,n,t,r,a,i){const s=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(s)}var i=t(2119),s=t(5137),u=(0,o.aZ)({setup:()=>{const e=(0,i.tv)();s.g.addListener("backButton",(()=>{"/"===e.currentRoute.value.fullPath?s.g.exitApp():e.back()}))}}),c=t(3744);const l=(0,c.Z)(u,[["render",a]]);var E=l;const d=[{path:"/",component:()=>t.e(630).then(t.bind(t,630))},{path:"/:countryCode",component:()=>Promise.all([t.e(958),t.e(936)]).then(t.bind(t,5698))},{path:"/:countryCode/:challengeNumber",component:()=>Promise.all([t.e(958),t.e(849),t.e(229)]).then(t.bind(t,9370))},{path:"/stats/:countryCode/:challengeNumber",component:()=>Promise.all([t.e(958),t.e(849),t.e(252)]).then(t.bind(t,2728))}],f=(0,i.p7)({history:(0,i.r5)("/"),routes:d});var h=f,A=t(2782);(0,r.ri)(E).use(A.a).use(h).mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,a){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var s=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[u])}))?r.splice(u--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var c=o();void 0!==c&&(n=c)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){var e,n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};t.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var a=Object.create(null);t.r(a);var i={};e=e||[null,n({}),n([]),n(n)];for(var s=2&o&&r;"object"==typeof s&&!~e.indexOf(s);s=n(s))Object.getOwnPropertyNames(s).forEach((function(e){i[e]=function(){return r[e]}}));return i["default"]=function(){return r},t.d(a,i),a}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{229:"fa42ca5e",252:"5e606d6e",486:"72dca81d",630:"c7f2a5e0",645:"35cfd537",849:"433620fc",936:"00032dee",958:"7698cc64"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{229:"84cdfb81",252:"8d19b967",630:"c2f2edab",936:"758d8bf9"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="toberquizz:";t.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var s,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var E=c[l];if(E.getAttribute("src")==r||E.getAttribute("data-webpack")==n+a){s=E;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",n+a),s.src=r),e[r]=[o];var d=function(n,t){s.onerror=s.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(t)})),n)return n(t)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p="/"}(),function(){var e=function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,o.parentNode.removeChild(o),r(u)}};return o.onerror=o.onload=a,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===n)return o}},r=function(r){return new Promise((function(o,a){var i=t.miniCssF(r),s=t.p+i;if(n(i,s))return o();e(r,s,o,a)}))},o={143:0};t.f.miniCss=function(e,n){var t={229:1,252:1,630:1,936:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=a);var i=t.p+t.u(n),s=new Error,u=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};t.l(i,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,a,i=r[0],s=r[1],u=r[2],c=0;if(i.some((function(n){return 0!==e[n]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(u)var l=u(t)}for(n&&n(r);c<i.length;c++)a=i[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(l)},r=self["webpackChunktoberquizz"]=self["webpackChunktoberquizz"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(172)}));r=t.O(r)})();
//# sourceMappingURL=app.657b541d.js.map