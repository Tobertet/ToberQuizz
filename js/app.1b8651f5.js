(function(e){function t(t){for(var c,u,o=t[0],s=t[1],i=t[2],l=0,b=[];l<o.length;l++)u=o[l],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&b.push(r[u][0]),r[u]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);d&&d(t);while(b.length)b.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,u=1;u<n.length;u++){var s=n[u];0!==r[s]&&(c=!1)}c&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},r={app:0},a=[];function u(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-2d20f517":"1af5a35c"}[e]+".js"}function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,c){n=r[e]=[t,c]}));t.push(n[2]=c);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=u(e);var i=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",i.name="ChunkLoadError",i.type=c,i.request=a,n[1](i)}r[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"21f3":function(e,t,n){},"415f":function(e,t,n){},4317:function(e,t,n){"use strict";n("714d")},"4d76":function(e,t,n){"use strict";n("21f3")},6508:function(e,t,n){},"68c9":function(e,t,n){},"714d":function(e,t,n){},7914:function(e,t,n){},"94fa":function(e,t,n){"use strict";n("68c9")},9963:function(e,t,n){"use strict";n("f236")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function r(e,t){var n=Object(c["B"])("router-view");return Object(c["u"])(),Object(c["d"])(n)}var a=n("6b0d"),u=n.n(a);const o={},s=u()(o,[["render",r]]);var i=s,l=n("6c02"),d=(n("b64b"),{id:"app-container"});function b(e,t,n,r,a,u){var o=Object(c["B"])("Header"),s=Object(c["B"])("router-link"),i=Object(c["B"])("Footer");return Object(c["u"])(),Object(c["f"])("div",d,[Object(c["i"])(o),Object(c["g"])("main",null,[(Object(c["u"])(!0),Object(c["f"])(c["a"],null,Object(c["A"])(Object.keys(e.quizzData),(function(e){return Object(c["u"])(),Object(c["d"])(s,{to:e,key:e},{default:Object(c["J"])((function(){return[Object(c["h"])(Object(c["D"])(e),1)]})),_:2},1032,["to"])})),128))]),Object(c["i"])(i)])}var f=Object(c["g"])("h3",null,"Desafíos creativos y gratuitos. Tecnología ética.",-1),p=Object(c["g"])("hr",null,null,-1);function j(e,t,n,r,a,u){var o=Object(c["B"])("Banner");return Object(c["u"])(),Object(c["f"])("header",null,[Object(c["i"])(o),f,p])}function O(e,t,n,r,a,u){return Object(c["u"])(),Object(c["f"])("pre",{"data-testid":"banner-title",id:"ascii-title",onClick:t[0]||(t[0]=function(){return e.goToHomePage&&e.goToHomePage.apply(e,arguments)})}," _______    _                ____        _         \n|__   __|  | |              / __ \\      (_)        \n   | | ___ | |__   ___ _ __| |  | |_   _ _ ________\n   | |/ _ \\| '_ \\ / _ \\ '__| |  | | | | | |_  /_  /\n   | | (_) | |_) |  __/ |  | |__| | |_| | |/ / / / \n   |_|\\___/|_.__/ \\___|_|   \\___\\_\\\\__,_|_/___/___|\n    ")}var m=Object(c["j"])({name:"Banner",methods:{goToHomePage:function(){this.$router.push("/")}}});n("d05b");const h=u()(m,[["render",O]]);var g=h,v=Object(c["j"])({name:"Header",components:{Banner:g}});n("da8f");const _=u()(v,[["render",j]]);var w=_,y=Object(c["g"])("hr",null,null,-1),k=Object(c["g"])("p",null,[Object(c["h"])(" Esta aplicación es tecnológicamente ética y no contiene ni anuncios ni trackers ni cookies, respetando así totalmente tu privacidad. Además, es open-source y puedes encontrar su código "),Object(c["g"])("a",{alt:"link to the source code in Github",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Tobertet/ToberQuizz"},"aquí"),Object(c["h"])(". ")],-1),C=Object(c["g"])("p",null,[Object(c["h"])(" Si te ha gustado, no dudes en compartirlo libremente con quien quieras. Si, además quieres ayudarme a hacer más contenido tecnológicamente ético como este, puedes "),Object(c["g"])("a",{alt:"link to donation page",target:"_blank",rel:"noopener noreferrer",href:"https://Ko-fi.com/robertmengual"},"invitarme a un café"),Object(c["h"])(". ")],-1),A=Object(c["g"])("p",null,"Hecho para ti con mucho ❤️ por Robert Mengual.",-1),q=[y,k,C,A];function x(e,t){return Object(c["u"])(),Object(c["f"])("footer",null,q)}n("9963");const N={},T=u()(N,[["render",x]]);var S=T,H={description:"Este primer desafío contiene imágenes que representan de alguna forma grupos o artistas de la música española desde los 60 hasta los 2000.",startingDate:"",questions:[{solutions:["7ac19dda99d2f454aafffb458d5cc412e8902dd5b39015b52efa8093b2646d44"]},{solutions:["dee54f209c657d1f874e4bf29b82d589542b98113f7cf5cbd4607ae0ff686228"]},{solutions:["2610dd028f52507ee5357869a540d484b186f64f662f559cf1581b1e44b482d7","ce340dcbb00898f1764a866106a8e9be7118b1661c74de1bf62658ce0ab6eba3"]},{solutions:["68ed58f0042443e9aabb3f336ffe63569ed9b81ef77b61377066236f3dc07d1d"]},{solutions:["5ecc2ace44a39f0188d0d5e57eea205124428cf78e9afae1166d21edf266fe03"]},{solutions:["9818771863f22121236addd861d39cab7fdbd199c4f5a6edaeda99809acf4056"]},{solutions:["da74548ee60c42e42105032d8ccc3f9dd52896f1f4f006e1ffc3138f63c0fa7d","5c10fea874d2dcb094fdaf4a632faaea3624197fb4254c08d98e30d0e1cea5f9"]},{solutions:["96c911183b5b670b96b453217a7bcee98186b6c41c82df0011b313c47ac08459","14c0c0c146f76e8d9eb50dcd3e435d52164967fed0d12faaaa6ec37bf92de18d"]},{solutions:["cfd240757b89d5d6ac9e539971d32b0d5d5e8741a3a53ab7147be310ec4ff500"]},{solutions:["0172352b965bca78d619568b6dcd7e1e56fe184358d46fe996c3c0722fe40e86"]},{solutions:["c4f359a4c7fc0318e0261416282e8ccbf8b0a105692de7dadc132c15e531c069"]},{solutions:["a9bc4ce36bdc01c474d06b11791cd84b3c14aaadf28e71e7e2dac63d9fec7baa"]},{solutions:["77080fc35e91572187e7195783e40d1e0fc34ff03580a11aae67ed6d0cc1860f","42a3c8bb0007f77d848722224b1d2452ec110e01df84f9998c8de6133d4eee85"]},{solutions:["13d3c032b66ac99f94fc38b45e8150be12024ef7bcdc8ffe4a8e3a10122d273e"]},{solutions:["f86dc97a9922c4531e3de5f31a6ec4a7692c176d7d0eb2c54c2e88b83999b812"]},{solutions:["550e5d15286408f7bd4b85d0d184ff8b5d866b06615dd7d12e69c7d683fc2ebe"]},{solutions:["b52e682e251b46458254bbbbe005cc2028196d30c2e9d3d1d9b310787e2fcf08"]},{solutions:["992e9f3f1973a3e3586acebf0bd6e5cdad922d245ac663f5b2e4908b1c30f91a","f50539d64274e5a4876932f84647f28690c0d2ac5fea19f7938fbb73cc3a4517"]},{solutions:["cac2402d8f959de3ba52f8d81dd3595ef5f84eaa7efafe38c87bcf6cfdc91426","ad1a2a84ed45e9989746a036e99e562142fbad8af1a5df12e99dfadccc74be71","ca2469be3d61b49cfb8d56ab1f3863fe90f7e97331691232ced94d2ee14ecc3c"]},{solutions:["9013af3af1b0d724329329895e783c330bc089c3a3dd4e2781fb8036ac79f1a9","ba28034c678ce25cd6c552f2b2ad815c8c38bfc87045672f831e0b4d9c7550e1"]},{solutions:["fdc7284f317fc7f2417c7ca8127fc14018c0b49af6da910d737a79b97fbccd12","049d3d32f553d9cb102ee5f0cecd0d09e2b31b4e4da945b78e37d53958de31ea"]},{solutions:["b81771e85603beec269f34fda553f9d5929751b891e7cdfb3480a3db6e98d3d7"]},{solutions:["1fc3b9a4ce67f69dff33558de9241dddf9fa98e5f1a39a9dec88ca20e90df4ac"]},{solutions:["253d4392c0b256759a14df7f42e483a2045855d170b32ebda1ad7fc8ca504583"]},{solutions:["c6b5fae1d46bc6f209a02b8b98bb61b1501e2ba7f3713f2e4d4aca0dda35629b"]},{solutions:["a963df3c3811e02b1acf9c1bfa2913713581d2d2dbd7a4333964031edf5c868e"]},{solutions:["de3e529ed48da3279809e009e2e8201ee86711827f5c500c0dd9df9da104e2fe"]},{solutions:["a768e38ab5ce976469a75497fe37c0830628bae3a620ad21af770ee1f0fb576e"]},{solutions:["c650d8538516250c593786e17fc230c1c4b3ab19b77f160f0b0db2db66b6d7fc"]},{solutions:["1cbec57fd8a449659907fc06995dec7631814cbcaa44fd9433bb9975818dc008"]}]},E=[H],P=E,R={ES:P},B=Object(c["j"])({name:"Home",components:{Header:w,Footer:S},data:function(){return{quizzData:R}}});const D=u()(B,[["render",b]]);var z=D,V={id:"app-container"};function I(e,t,n,r,a,u){var o=Object(c["B"])("Header"),s=Object(c["B"])("Challenge"),i=Object(c["B"])("Footer");return Object(c["u"])(),Object(c["f"])("div",V,[Object(c["i"])(o),Object(c["g"])("main",null,[e.challengeAvailable?(Object(c["u"])(),Object(c["d"])(s,{key:0,countryCode:e.countryCode,challengeNumber:e.challengeNumber},null,8,["countryCode","challengeNumber"])):Object(c["e"])("",!0)]),Object(c["i"])(i)])}var L;n("caad"),n("2532"),n("07ac"),n("ac1f"),n("5319");(function(e){e["Spain"]="ES"})(L||(L={}));n("a4d3"),n("e01a");var $=function(e){return Object(c["x"])("data-v-1a17a842"),e=e(),Object(c["v"])(),e},Q=$((function(){return Object(c["g"])("p",null,"¿Eres capaz de adivinar todos?",-1)})),F=$((function(){return Object(c["g"])("hr",null,null,-1)})),U={id:"sticky-bar"};function G(e,t,n,r,a,u){var o=Object(c["B"])("QuestionsTable");return Object(c["u"])(),Object(c["f"])(c["a"],null,[Object(c["g"])("h2",null,"Desafío nº "+Object(c["D"])(e.challengeNumber),1),Object(c["g"])("p",null,Object(c["D"])(e.challenge.description),1),Q,F,Object(c["i"])(o,{challengeNumber:e.challengeNumber,countryCode:e.countryCode,challenge:e.challenge,checkedAnswers:e.checkedAnswers,onAnswer:e.onAnswer},null,8,["challengeNumber","countryCode","challenge","checkedAnswers","onAnswer"]),Object(c["g"])("div",U,[Object(c["g"])("div",null," Aciertos: "+Object(c["D"])(e.countOfValidAnswers)+" / "+Object(c["D"])(e.challenge.questions.length),1)])],64)}var J=n("2909"),M=(n("a9e3"),n("4de4"),n("d3b7"),n("1da1")),K=(n("99af"),n("e9c4"),n("96cf"),n("6300"));function W(e,t){var n=Object(c["z"])(new Array);Object(c["s"])(Object(M["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.value!==L.Spain||1!==e.value){n.next=3;break}return n.next=3,r();case 3:a();case 4:case"end":return n.stop()}}),n)})))),Object(c["I"])([e,t],function(){var n=Object(M["a"])(regeneratorRuntime.mark((function n(c,u){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.value!==L.Spain||1!==e.value){n.next=3;break}return n.next=3,r();case 3:a();case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}());var r=function(){var e=Object(M["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,K["a"].get({key:"ESP_001"});case 2:if(t=e.sent.value,t){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,K["a"].set({key:"ES_1",value:t});case 7:return e.abrupt("return",K["a"].remove({key:"ESP_001"}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var c=Object(M["a"])(regeneratorRuntime.mark((function c(){var r;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return c.next=2,K["a"].get({key:"".concat(t.value,"_").concat(e.value)});case 2:if(r=c.sent.value,r){c.next=5;break}return c.abrupt("return");case 5:n.value=JSON.parse(r);case 6:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}(),u=function(c){n.value=c,K["a"].set({key:"".concat(t.value,"_").concat(e.value),value:JSON.stringify(c)})};return{answers:n,updateAnswers:u}}const Y=W;var X=Y,Z=n("bee2"),ee=n("d4ec"),te=(n("7db0"),n("3ca3"),n("ddb0"),n("3c74")),ne=n.n(te),ce=Object(Z["a"])((function e(){Object(ee["a"])(this,e)}));function re(e,t){var n=Object(c["z"])([]);return Object(c["s"])(Object(M["a"])(regeneratorRuntime.mark((function c(){return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return c.next=2,ce.checkAnswers(e.value,t.value.questions);case 2:n.value=c.sent;case 3:case"end":return c.stop()}}),c)})))),Object(c["I"])([e,t],Object(M["a"])(regeneratorRuntime.mark((function c(){return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return c.next=2,ce.checkAnswers(e.value,t.value.questions);case 2:n.value=c.sent;case 3:case"end":return c.stop()}}),c)})))),{checkedAnswers:n}}ce.SALT="Tobertet",ce.HASH_LENGTH=32,ce.TYPE=ne.a.ArgonType.Argon2id,ce.isAnswerValid=function(){var e=Object(M["a"])(regeneratorRuntime.mark((function e(t,n){var c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ne.a.hash({pass:t.toLocaleLowerCase(),salt:ce.SALT,hashLen:ce.HASH_LENGTH,type:ce.TYPE});case 2:return c=e.sent,e.abrupt("return",!!n.solutions.find((function(e){return e===c.hashHex})));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ce.checkAnswer=function(){var e=Object(M["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,ce.isAnswerValid(t,n);case 3:return e.t1=e.sent,e.abrupt("return",{text:e.t0,isValid:e.t1});case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ce.checkAnswers=function(){var e=Object(M["a"])(regeneratorRuntime.mark((function e(t,n){var c,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(c=[],r=0;r<t.length;r++)t[r]&&(c[r]=ce.checkAnswer(t[r],n[r]));return e.next=4,Promise.all(c);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();const ae=re;var ue=ae;function oe(e,t){var n=Object(c["z"])({description:"",questions:[],startingDate:""});Object(c["s"])((function(){r()})),Object(c["I"])([e,t],(function(){r()}));var r=function(){n.value=R[t.value][e.value-1]};return{challenge:n}}const se=oe;var ie=se,le={class:"columns-select"},de=Object(c["g"])("label",{for:"numColumns"},"Imágenes por fila: ",-1),be=["value"],fe={class:"columns-select"},pe=Object(c["g"])("label",{for:"numColumns"},"Imágenes por fila: ",-1),je=["value"];function Oe(e,t,n,r,a,u){var o=Object(c["B"])("Question");return Object(c["u"])(),Object(c["f"])(c["a"],null,[Object(c["g"])("div",le,[de,Object(c["K"])(Object(c["g"])("select",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.tableColumns=t}),name:"numColumns",id:"numColumns"},[(Object(c["u"])(!0),Object(c["f"])(c["a"],null,Object(c["A"])(e.availableColumns,(function(e){return Object(c["u"])(),Object(c["f"])("option",{key:e,value:e},Object(c["D"])(e),9,be)})),128))],512),[[c["G"],e.tableColumns]])]),Object(c["g"])("div",{id:"questions-table","data-testid":"questions-table",style:Object(c["p"])({"grid-template-columns":"repeat(".concat(e.tableColumns,", 1fr)")})},[(Object(c["u"])(!0),Object(c["f"])(c["a"],null,Object(c["A"])(e.challenge.questions,(function(t,n){return Object(c["u"])(),Object(c["d"])(o,{key:n,question:t,questionNumber:n+1,checkedAnswer:e.checkedAnswers[n],challengeNumber:e.challengeNumber,countryCode:e.countryCode,onAnswer:e.emitAnswer},null,8,["question","questionNumber","checkedAnswer","challengeNumber","countryCode","onAnswer"])})),128))],4),Object(c["g"])("div",fe,[pe,Object(c["K"])(Object(c["g"])("select",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.tableColumns=t}),name:"numColumns",id:"numColumns"},[(Object(c["u"])(!0),Object(c["f"])(c["a"],null,Object(c["A"])(e.availableColumns,(function(e){return Object(c["u"])(),Object(c["f"])("option",{key:e,value:e},Object(c["D"])(e),9,je)})),128))],512),[[c["G"],e.tableColumns]])])],64)}var me,he={class:"question"},ge=["alt","src"],ve={class:"input-container"},_e=["disabled"],we=["disabled"];function ye(e,t,n,r,a,u){return Object(c["u"])(),Object(c["f"])("div",he,[Object(c["g"])("div",{class:Object(c["o"])(["image-container",e.status]),"data-testid":"image-container"},[Object(c["g"])("img",{alt:e.question.altText,src:"/resources/".concat(e.countryCode,"/").concat(e.challengeNumber,"/").concat(e.questionNumber,".png")},null,8,ge)],2),Object(c["g"])("div",ve,[Object(c["g"])("label",null,Object(c["D"])(e.questionNumber)+" - ",1),Object(c["K"])(Object(c["g"])("input",{disabled:"valid"===e.status,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.inputText=t})},null,8,_e),[[c["H"],e.inputText]]),Object(c["g"])("button",{disabled:"valid"===e.status,onClick:t[1]||(t[1]=function(){return e.emitAnswer&&e.emitAnswer.apply(e,arguments)})},"✔️",8,we)])])}(function(e){e["Error"]="error",e["Clean"]="clean",e["Valid"]="valid"})(me||(me={}));var ke=Object(c["j"])({name:"Question",emits:["answer"],props:{question:{type:Object,required:!0},checkedAnswer:{type:Object},questionNumber:{type:Number,required:!0},challengeNumber:{type:Number,required:!0},countryCode:{type:String,required:!0}},setup:function(e,t){var n=Object(c["E"])(e),r=n.checkedAnswer,a=n.questionNumber,u=Object(c["z"])(""),o=Object(c["z"])(me.Clean),s=function(){t.emit("answer",u.value,a.value)},i=function(e){u.value=(null===e||void 0===e?void 0:e.text)||"",o.value=e?e.isValid?me.Valid:me.Error:me.Clean};return Object(c["s"])((function(){return i(r.value)})),Object(c["I"])(r,(function(){return i(r.value)})),{inputText:u,status:o,emitAnswer:s}}});n("4d76");const Ce=u()(ke,[["render",ye],["__scopeId","data-v-1d4f2d77"]]);var Ae=Ce,qe=Object(c["j"])({name:"QuestionsTable",components:{Question:Ae},emits:["answer"],props:{checkedAnswers:{type:Object,required:!0},challenge:{type:Object,required:!0},challengeNumber:{type:Number,required:!0},countryCode:{type:String,required:!0}},setup:function(e,t){var n=Object(c["z"])(window.innerWidth>500?[3,4,5,6]:[1,2]),r=Object(c["z"])(window.innerWidth>500?4:1),a=function(e,n){t.emit("answer",e,n)};return{tableColumns:r,availableColumns:n,emitAnswer:a}}});n("4317");const xe=u()(qe,[["render",Oe]]);var Ne=xe,Te=Object(c["j"])({name:"Challenge",props:{challengeNumber:{type:Number,required:!0},countryCode:{type:String,required:!0}},components:{QuestionsTable:Ne},setup:function(e){var t=Object(c["E"])(e),n=t.challengeNumber,r=t.countryCode,a=X(n,r),u=a.answers,o=a.updateAnswers,s=ie(n,r),i=s.challenge,l=ue(u,i),d=l.checkedAnswers,b=Object(c["b"])((function(){return d.value.filter((function(e){return e&&e.isValid})).length})),f=function(e,t){var n=Object(J["a"])(u.value);n[t-1]=e,o(n)};return{challenge:i,checkedAnswers:d,countOfValidAnswers:b,onAnswer:f}}});n("e1e4");const Se=u()(Te,[["render",G],["__scopeId","data-v-1a17a842"]]);var He=Se,Ee=Object(c["j"])({name:"ChallengeView",components:{Challenge:He,Footer:S,Header:w},data:function(){return{countryCode:L.Spain,challengeNumber:1,challengeAvailable:!1}},mounted:function(){this.getUrlParams(),Object.values(L).includes(this.countryCode)&&R[this.countryCode][this.challengeNumber-1]?this.challengeAvailable=!0:this.$router.replace("/")},methods:{getUrlParams:function(){this.countryCode=this.$route.params.countryCode.toUpperCase(),this.challengeNumber=parseInt(this.$route.params.challengeNumber)}},watch:{$route:function(){}}});n("94fa");const Pe=u()(Ee,[["render",I]]);var Re=Pe,Be={id:"app-container"},De=["to","onClick"];function ze(e,t,n,r,a,u){var o=Object(c["B"])("Header"),s=Object(c["B"])("Footer");return Object(c["u"])(),Object(c["f"])("div",Be,[Object(c["i"])(o),Object(c["g"])("main",null,[(Object(c["u"])(!0),Object(c["f"])(c["a"],null,Object(c["A"])(Object.keys(e.challenges),(function(t){return Object(c["u"])(),Object(c["f"])("button",{to:e.$route.params.countryCode,key:t,onClick:function(n){return e.goToChallenge(parseInt(t)+1)}}," Challenge "+Object(c["D"])(parseInt(t)+1),9,De)})),128))]),Object(c["i"])(s)])}var Ve=Object(c["j"])({name:"ChallengeList",components:{Header:w,Footer:S},data:function(){return{challenges:new Array}},methods:{goToChallenge:function(e){this.$router.push({path:"/".concat(this.$route.params.countryCode,"/").concat(e)})}},mounted:function(){var e=this.$route.params.countryCode;Object.values(L).includes(e)?this.challenges=R[e]:this.$router.replace("/")}});const Ie=u()(Ve,[["render",ze]]);var Le=Ie,$e=[{path:"/",name:"Home",component:z},{path:"/:countryCode",name:"ChallengeList",component:Le},{path:"/:countryCode/:challengeNumber",name:"Challenge",component:Re}],Qe=Object(l["a"])({history:Object(l["b"])("/"),routes:$e}),Fe=Qe;Object(c["c"])(i).use(Fe).mount("#app")},d05b:function(e,t,n){"use strict";n("7914")},da8f:function(e,t,n){"use strict";n("6508")},e1e4:function(e,t,n){"use strict";n("415f")},f236:function(e,t,n){}});
//# sourceMappingURL=app.1b8651f5.js.map