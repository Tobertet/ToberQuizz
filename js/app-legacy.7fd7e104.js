(function(){var e={5202:function(e,n,t){"use strict";t(6992),t(8674),t(9601),t(7727);var r=t(9963),a=t(6252);function u(e,n,t,r,u,o){var i=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(i)}var o=t(2119),i=t(5137),s=(0,a.aZ)({setup:function(){var e=(0,o.tv)();i.g.addListener("backButton",(function(){"/"===e.currentRoute.value.fullPath?i.g.exitApp():e.back()}))}}),c=t(3744);const l=(0,c.Z)(s,[["render",u]]);var p=l,h=t(3577),d=function(e){return(0,a.dD)("data-v-4c09f5a8"),e=e(),(0,a.Cn)(),e},g={id:"view-container"},f={id:"logo-container"},v=d((function(){return(0,a._)("img",{alt:"ToberQuizz logo",src:"/logo256x256.png"},null,-1)})),E=["innerHTML"],m=["innerHTML"],w={id:"share-button"},C=["href"],b={class:"regular list-heading"},_=["onClick"];function y(e,n,t,r,u,o){var i=(0,a.up)("ShareIcon"),s=(0,a.up)("ArrowRight");return(0,a.wg)(),(0,a.iD)("div",g,[(0,a._)("div",f,[v,(0,a._)("div",null,[(0,a._)("p",{innerHTML:e.t("HOME_VIEW.FREE_CHALLENGES")},null,8,E),(0,a._)("p",{innerHTML:e.t("HOME_VIEW.ETHICAL_TECHNOLOGY")},null,8,m)])]),(0,a._)("p",w,[(0,a._)("a",{href:"whatsapp://send?text="+e.t("HOME_VIEW.SHARE_MESSAGE"),"data-action":"share/whatsapp/share",target:"_blank"},[(0,a.Uk)((0,h.zw)(e.t("HOME_VIEW.SHARE"))+" ",1),(0,a.Wm)(i,{color:"#ffa316"})],8,C)]),(0,a._)("div",null,[(0,a._)("p",b,(0,h.zw)(e.t("HOME_VIEW.SELECT_A_COUNTRY")),1),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.quizzCountries,(function(n){return(0,a.wg)(),(0,a.iD)("div",{class:"list-item",key:n,onClick:function(t){return e.goToChallengeListView(n)}},[(0,a._)("p",null,(0,h.zw)(e.t("COUNTRY_LIST.".concat(n))+" ("+e.t("LANGUAGE_LIST.".concat(n))+")"),1),(0,a.Wm)(s)],8,_)})),128))])])}t(2479);var A,N=t(9150),S=t(6549),R=t(8842),L=t(7867),T=t(8598),O=(t(2526),t(1817),t(1249),function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";(0,R.Z)(this,e),(0,T.Z)(this,"description",void 0),(0,T.Z)(this,"questions",void 0),(0,T.Z)(this,"startingDate",void 0),this.description=n,this.questions=t,this.startingDate=r}return(0,L.Z)(e,[{key:"clone",value:function(){return new e(this.description,this.questions,this.startingDate)}},{key:"merge",value:function(e){return Object.assign(this.clone(),e)}},{key:"fillAnswers",value:function(e){var n=this.questions.map((function(n,t){return(0,S.Z)((0,S.Z)({},n),{},{answer:e[t]})}));return this.merge({questions:n})}},{key:"answerQuestion",value:function(e,n){var t=this.questions.map((function(t,r){return r===e-1?(0,S.Z)((0,S.Z)({},t),{},{answer:n}):(0,S.Z)({},t)}));return this.merge({questions:t})}},{key:"checkQuestion",value:function(e,n){var t=this.questions.map((function(t,r){return r===e-1?(0,S.Z)((0,S.Z)({},t),{},{isCorrect:n}):(0,S.Z)({},t)}));return this.merge({questions:t})}}]),e}());(function(e){e["Spain"]="ES",e["WorldWide"]="WW"})(A||(A={}));var I={width:"24",height:"27",viewBox:"0 0 10 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"},k=["fill"];function H(e,n,t,r,u,o){return(0,a.wg)(),(0,a.iD)("svg",I,[(0,a._)("path",{d:"M1.3641 0.657318C1.17484 0.456231 0.858405 0.446642 0.657318\n    0.6359C0.456231 0.825158 0.446642 1.1416 0.6359 1.34268L1.3641 0.657318ZM9\n    9.5L9.3641 9.84268C9.5453 9.65016 9.5453 9.34984 9.3641 9.15732L9\n    9.5ZM0.6359 17.6573C0.446642 17.8584 0.456231 18.1748 0.657318\n    18.3641C0.858405 18.5534 1.17484 18.5438 1.3641 18.3427L0.6359\n    17.6573ZM0.6359 1.34268L8.6359 9.84268L9.3641 9.15732L1.3641 0.657318L0.6359\n    1.34268ZM8.6359 9.15732L0.6359 17.6573L1.3641 18.3427L9.3641 9.84268L8.6359\n    9.15732Z",fill:e.color},null,8,k)])}var Z=(0,a.aZ)({props:{color:{type:String,required:!1,default:"#170A09"}}});const z=(0,c.Z)(Z,[["render",H]]);var x=z,G=["fill"],W=(0,a._)("path",{d:"M 18 2 A 3 3 0 0 0 15 5 A 3 3 0 0 0 15.054688 5.5605469 L 7.9394531 9.7109375 A 3 3 0 0 0 6 9 A 3 3 0 0 0 3 12 A 3 3 0 0 0 6 15 A 3 3 0 0 0 7.9355469 14.287109 L 15.054688 18.439453 A 3 3 0 0 0 15 19 A 3 3 0 0 0 18 22 A 3 3 0 0 0 21 19 A 3 3 0 0 0 18 16 A 3 3 0 0 0 16.0625 16.712891 L 8.9453125 12.560547 A 3 3 0 0 0 9 12 A 3 3 0 0 0 8.9453125 11.439453 L 16.060547 7.2890625 A 3 3 0 0 0 18 8 A 3 3 0 0 0 21 5 A 3 3 0 0 0 18 2 z"},null,-1),q=[W];function M(e,n,t,r,u,o){return(0,a.wg)(),(0,a.iD)("svg",{fill:e.color,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24px",height:"24px"},q,8,G)}var U=(0,a.aZ)({props:{color:{type:String,required:!1,default:"#170A09"}}});const Y=(0,c.Z)(U,[["render",M]]);var D=Y,V=(t(6699),t(4916),t(3123),JSON.parse('{"MONTHS":{"JANUARY":"January","FEBRUARY":"February","MARCH":"March","APRIL":"April","MAY":"May","JUNE":"June","JULY":"July","AUGUST":"August","SEPTEMBER":"September","OCTOBER":"October","NOVEMBER":"November","DECEMBER":"December"},"COUNTRY_LIST":{"DE":"Germany","ES":"Spain","WW":"International"},"LANGUAGE_LIST":{"DE":"German","ES":"Spanish","WW":"English"},"HOME_VIEW":{"FREE_CHALLENGES":"<span class=\\"regular\\">Free</span> challenges","ETHICAL_TECHNOLOGY":"<span class=\\"regular\\">Ethical</span> technology","SELECT_A_COUNTRY":"Select a country","SHARE":"Share","SHARE_MESSAGE":"Discover the challenges of ToberQuizz!%0aWill you be able to guess all of them?%0a%0ahttps://toberquizz.com"},"CHALLENGE_LIST_VIEW":{"CHALLENGE":"Challenge {challengeNumber}","SELECT_A_CHALLENGE":"Select a challenge","WHY_TOBERQUIZZ":"Why ToberQuizz?","CHALLENGES_IN":"Challenges in "},"CHALLENGE_VIEW":{"CHALLENGE":"Challenge {challengeNumber}","CHALLENGE_NOT_RESOLVED":"This challenge has not been completed by anybody yet!","HOOK":"Will you guess all?","CORRECT_ANSWERS":"Correct answers","IMAGES_PER_ROW":"Images per row: ","SHARE_HOOK":"Enjoy ToberQuizz in company! Challenge your contacts and solve all the quizzes.","SHARE_MESSAGE":"Do you dare to complete { countryName }\'s number { challengeNumber } challenge in ToberQuizz?%0a%0ahttps://toberquizz.com/%23/{countryCode}/{challengeNumber}"},"CHALLENGE_STATISTICS_VIEW":{"USERS_PERCENTAGE":"Percentage of users","COUNT_OF_CORRECT_ANSWERS":"Count of correct answers","X_CORRECT_ANSWERS":"{count} correct answers","CHALLENGE_PROGRESS":"Challenge progress"},"FOOTER":{"MADE_BY":"Made for you with much ❤️ by","CONTRIBUTE":"Do you want to know why and how to contribute?","MISSION":"ToberQuizz is completely free and its mission is purely charitable."}}')),j=JSON.parse('{"MONTHS":{"JANUARY":"Enero","FEBRUARY":"Febrero","MARCH":"Marzo","APRIL":"Abril","MAY":"Mayo","JUNE":"Junio","JULY":"Julio","AUGUST":"Agosto","SEPTEMBER":"Septiembre","OCTOBER":"Octubre","NOVEMBER":"Noviembre","DECEMBER":"Diciembre"},"COUNTRY_LIST":{"DE":"Alemania","ES":"España","WW":"Internacional"},"LANGUAGE_LIST":{"DE":"alemán","ES":"español","WW":"inglés"},"HOME_VIEW":{"FREE_CHALLENGES":"Desafíos <span class=\\"regular\\">gratuitos</span>","ETHICAL_TECHNOLOGY":"Tecnología <span class=\\"regular\\">ética</span>","SELECT_A_COUNTRY":"Selecciona un país","SHARE":"Compartir","SHARE_MESSAGE":"¡Descubre los desafíos de ToberQuizz!%0a¿Serás capaz de adivinar todos?%0a%0ahttps://toberquizz.com"},"CHALLENGE_LIST_VIEW":{"CHALLENGE":"Desafío {challengeNumber}","SELECT_A_CHALLENGE":"Selecciona un desafío","WHY_TOBERQUIZZ":"¿Por qué ToberQuizz?","CHALLENGES_IN":"Desafíos en "},"CHALLENGE_VIEW":{"CHALLENGE":"Desafío {challengeNumber}","CHALLENGE_NOT_RESOLVED":"¡Este desafío todavía no ha sido completado por nadie!","HOOK":"¿Eres capaz de adivinar todos?","CORRECT_ANSWERS":"Aciertos","IMAGES_PER_ROW":"Imágenes por fila: ","SHARE_HOOK":"¡Disfruta de ToberQuizz en compañía! Reta a tus contactos y resolved todos los desafíos.","SHARE_MESSAGE":"¿Te atreves a completar el desafío número { challengeNumber } de { countryName } en ToberQuizz?%0a%0ahttps://toberquizz.com/%23/{countryCode}/{challengeNumber}"},"CHALLENGE_STATISTICS_VIEW":{"USERS_PERCENTAGE":"Porcentaje de usuarios","COUNT_OF_CORRECT_ANSWERS":"Total de respuestas acertadas","X_CORRECT_ANSWERS":"{count} respuestas acertadas","CHALLENGE_PROGRESS":"Progreso del desafío"},"FOOTER":{"MADE_BY":"Hecho para ti con mucho ❤️ por","CONTRIBUTE":"¿Quieres saber por qué y cómo contribuir?","MISSION":"ToberQuizz es totalmente gratuito y su misión es puramente solidaria."}}'),Q=function(){return["ca","gl","eu"].includes(navigator.language.split("-")[0])?"es":navigator.language.split("-")[0]},P=function(e){e?e===A.WorldWide?B.global.locale="en":B.global.locale=e.toLowerCase():B.global.locale=Q()},B=(0,N.o)({messages:{en:V,es:j},locale:Q(),fallbackLocale:"en"}),J=(0,a.aZ)({components:{ArrowRight:x,ShareIcon:D},setup:function(){var e=Object.values(A),n=(0,N.QT)(),t=n.t,r=(0,o.tv)(),u=function(e){r.push({path:"/".concat(e)})};return(0,a.bv)((function(){P()})),{quizzCountries:e,t:t,goToChallengeListView:u}}});const F=(0,c.Z)(J,[["render",y],["__scopeId","data-v-4c09f5a8"]]);var K=F,X={id:"view-container"};function $(e,n,t,r,u,o){var i=(0,a.up)("AppBar"),s=(0,a.up)("Challenge"),c=(0,a.up)("Footer");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(i),(0,a._)("div",X,[e.countryCode&&e.challengeNumber?((0,a.wg)(),(0,a.j4)(s,{key:0,countryCode:e.countryCode,challengeNumber:e.challengeNumber},null,8,["countryCode","challengeNumber"])):(0,a.kq)("",!0),(0,a.Wm)(c)])],64)}t(2023),t(5306);var ee=t(2262),ne=function(e){return(0,a.dD)("data-v-65613145"),e=e(),(0,a.Cn)(),e},te={class:"regular"},re={class:"info-box"},ae=["href"],ue={class:"description"},oe=ne((function(){return(0,a._)("hr",null,null,-1)})),ie={id:"sticky-bar"};function se(e,n,t,r,u,o){var i=(0,a.up)("ShareIcon"),s=(0,a.up)("QuestionsTable");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("h2",te,(0,h.zw)(e.t("CHALLENGE_VIEW.CHALLENGE",{challengeNumber:e.challengeNumber})),1),(0,a._)("div",re,[(0,a._)("p",null,(0,h.zw)(e.t("CHALLENGE_VIEW.SHARE_HOOK")),1),(0,a._)("p",null,[(0,a._)("a",{href:"whatsapp://send?text="+e.t("CHALLENGE_VIEW.SHARE_MESSAGE",{countryCode:e.countryCode,countryName:e.t("COUNTRY_LIST.".concat(e.countryCode)),challengeNumber:e.challengeNumber}),"data-action":"share/whatsapp/share",target:"_blank"},[(0,a.Uk)((0,h.zw)(e.t("HOME_VIEW.SHARE"))+" ",1),(0,a.Wm)(i,{color:"#1366c9"})],8,ae)])]),(0,a._)("p",ue,(0,h.zw)(e.challenge.description),1),(0,a._)("p",null,(0,h.zw)(e.t("CHALLENGE_VIEW.HOOK")),1),oe,(0,a.Wm)(s,{challengeNumber:e.challengeNumber,countryCode:e.countryCode,challenge:e.challenge,onAnswer:e.onAnswer},null,8,["challengeNumber","countryCode","challenge","onAnswer"]),(0,a._)("div",ie,[(0,a._)("div",null,(0,h.zw)(e.t("CHALLENGE_VIEW.CORRECT_ANSWERS"))+": "+(0,h.zw)(e.correctAnswersCount)+" / "+(0,h.zw)(e.challenge.questions.length),1)])],64)}var ce=t(5669),le=(t(5666),t(9653),{class:"columns-select"}),pe={for:"numColumns"},he=["value"],de={class:"columns-select"},ge={for:"numColumns"},fe=["value"];function ve(e,n,t,u,o,i){var s=(0,a.up)("Question");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",le,[(0,a._)("label",pe,(0,h.zw)(e.t("CHALLENGE_VIEW.IMAGES_PER_ROW")),1),(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":n[0]||(n[0]=function(n){return e.tableColumns=n}),name:"numColumns",id:"numColumns"},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.availableColumns,(function(e){return(0,a.wg)(),(0,a.iD)("option",{key:e,value:e},(0,h.zw)(e),9,he)})),128))],512),[[r.bM,e.tableColumns]])]),(0,a._)("div",{id:"questions-table","data-testid":"questions-table",style:(0,h.j5)({"grid-template-columns":"repeat(".concat(e.tableColumns,", 1fr)")})},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.challenge.questions,(function(n,t){return(0,a.wg)(),(0,a.j4)(s,{key:t,question:n,questionNumber:t+1,challengeNumber:e.challengeNumber,countryCode:e.countryCode,onAnswer:e.emitAnswer},null,8,["question","questionNumber","challengeNumber","countryCode","onAnswer"])})),128))],4),(0,a._)("div",de,[(0,a._)("label",ge,(0,h.zw)(e.t("CHALLENGE_VIEW.IMAGES_PER_ROW")),1),(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":n[1]||(n[1]=function(n){return e.tableColumns=n}),name:"numColumns",id:"numColumns"},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.availableColumns,(function(e){return(0,a.wg)(),(0,a.iD)("option",{key:e,value:e},(0,h.zw)(e),9,fe)})),128))],512),[[r.bM,e.tableColumns]])])],64)}t(2222);var Ee={class:"question"},me=["alt","src"],we={class:"input-container"},Ce=["disabled"],be=["disabled"];function _e(e,n,t,u,o,i){return(0,a.wg)(),(0,a.iD)("div",Ee,[(0,a._)("div",{class:(0,h.C_)(["image-container",e.status]),"data-testid":"image-container"},[(0,a._)("img",{alt:e.question.altText,src:"".concat(e.imagesBucket,"/").concat(e.countryCode,"/").concat(e.challengeNumber,"/").concat(e.questionNumber,".png")},null,8,me)],2),(0,a._)("div",we,[(0,a._)("label",null,(0,h.zw)(e.questionNumber)+" - ",1),(0,a.wy)((0,a._)("input",{disabled:"valid"===e.status,"onUpdate:modelValue":n[0]||(n[0]=function(n){return e.inputText=n})},null,8,Ce),[[r.nr,e.inputText]]),(0,a._)("button",{disabled:"valid"===e.status,onClick:n[1]||(n[1]=function(){return e.emitAnswer&&e.emitAnswer.apply(e,arguments)})},"✔️",8,be)])])}var ye;t(3210);(function(e){e["Error"]="error",e["Clean"]="clean",e["Valid"]="valid"})(ye||(ye={}));var Ae=(0,a.aZ)({emits:["answer"],props:{question:{type:Object,required:!0},questionNumber:{type:Number,required:!0},challengeNumber:{type:Number,required:!0},countryCode:{type:String,required:!0}},setup:function(e,n){var t=(0,ee.BK)(e),r=t.questionNumber,u=t.question,o=(0,ee.iH)(""),i=(0,ee.iH)(ye.Clean),s=function(){n.emit("answer",o.value.trim().replace(/\s{2,}/g," "),r.value)},c=function(){o.value=u.value.answer||"",i.value=u.value.answer?u.value.isCorrect?ye.Valid:ye.Error:ye.Clean};(0,a.bv)((function(){return c()})),(0,a.YP)(u,(function(){return c()}));var l=(0,a.Fl)((function(){return"https://vshirurkfkcqdabtrcnt.supabase.in/storage/v1/object/public/resources"}));return{inputText:o,status:i,emitAnswer:s,imagesBucket:l}}});const Ne=(0,c.Z)(Ae,[["render",_e],["__scopeId","data-v-d72f2c9e"]]);var Se=Ne,Re=(0,a.aZ)({components:{Question:Se},emits:["answer"],props:{challenge:{type:Object,required:!0},challengeNumber:{type:Number,required:!0},countryCode:{type:String,required:!0}},setup:function(e,n){var t=(0,N.QT)(),r=t.t,a=(0,ee.iH)(window.innerWidth>992?[3,4,5,6]:[1,2]),u=(0,ee.iH)(window.innerWidth>992?4:1),o=function(e,t){n.emit("answer",e,t)};return{tableColumns:u,availableColumns:a,emitAnswer:o,t:r}}});const Le=(0,c.Z)(Re,[["render",ve]]);var Te=Le,Oe=function(){function e(n){(0,R.Z)(this,e),(0,T.Z)(this,"hashingAlgorithm",void 0),this.hashingAlgorithm=n}return(0,L.Z)(e,[{key:"execute",value:function(){var e=(0,ce.Z)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.hashingAlgorithm.checkChallenge(n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function n(n){return e.apply(this,arguments)}return n}()}]),e}(),Ie=function(){function e(n,t){(0,R.Z)(this,e),(0,T.Z)(this,"challengeRepository",void 0),(0,T.Z)(this,"answerRepository",void 0),this.challengeRepository=n,this.answerRepository=t}return(0,L.Z)(e,[{key:"execute",value:function(){var e=(0,ce.Z)(regeneratorRuntime.mark((function e(n,t){var r,a,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.challengeRepository.get(n,t);case 2:return r=e.sent,e.next=5,this.answerRepository.get(n,t);case 5:return a=e.sent,u=r.fillAnswers(a),e.abrupt("return",u);case 8:case"end":return e.stop()}}),e,this)})));function n(n,t){return e.apply(this,arguments)}return n}()}]),e}(),ke=(t(7327),t(1539),function(){function e(n,t,r){(0,R.Z)(this,e),(0,T.Z)(this,"hashingAlgorithm",void 0),(0,T.Z)(this,"answerRepository",void 0),(0,T.Z)(this,"statisticsCollector",void 0),this.hashingAlgorithm=n,this.answerRepository=t,this.statisticsCollector=r}return(0,L.Z)(e,[{key:"execute",value:function(){var e=(0,ce.Z)(regeneratorRuntime.mark((function e(n,t,r,a,u){var o,i,s,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=r.answerQuestion(a,u),e.next=3,this.answerRepository.save(n,t,o);case 3:return e.next=5,this.hashingAlgorithm.checkQuestion(o.questions[a-1]);case 5:return i=e.sent,s=o.checkQuestion(a,i.isCorrect||!1),i.isCorrect&&(c=s.questions.filter((function(e){return e.isCorrect})).length,this.statisticsCollector.collect({countryCode:n,challengeNumber:t,correctAnswersCount:c})),e.abrupt("return",s);case 9:case"end":return e.stop()}}),e,this)})));function n(n,t,r,a,u){return e.apply(this,arguments)}return n}()}]),e}()),He=(t(9826),t(8783),t(3948),t(477)),Ze=t.n(He),ze=function(){function e(){(0,R.Z)(this,e)}return(0,L.Z)(e,[{key:"checkQuestion",value:function(){var n=(0,ce.Z)(regeneratorRuntime.mark((function n(t){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.answer){n.next=2;break}return n.abrupt("return",(0,S.Z)({},t));case 2:return n.next=4,Ze().hash({pass:t.answer.toLocaleLowerCase(),salt:e.SALT,hashLen:e.HASH_LENGTH,type:e.TYPE});case 4:return r=n.sent,a=!!t.solutions.find((function(e){return e===r.hashHex})),n.abrupt("return",(0,S.Z)((0,S.Z)({},t),{},{isCorrect:a}));case 7:case"end":return n.stop()}}),n)})));function t(e){return n.apply(this,arguments)}return t}()},{key:"checkQuestions",value:function(e){var n=e.map(this.checkQuestion);return Promise.all(n)}},{key:"checkChallenge",value:function(){var e=(0,ce.Z)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=n,e.next=3,this.checkQuestions(n.questions);case 3:return e.t1=e.sent,e.t2={questions:e.t1},e.abrupt("return",e.t0.merge.call(e.t0,e.t2));case 6:case"end":return e.stop()}}),e,this)})));function n(n){return e.apply(this,arguments)}return n}()}]),e}();(0,T.Z)(ze,"SALT","Tobertet"),(0,T.Z)(ze,"HASH_LENGTH",32),(0,T.Z)(ze,"TYPE",Ze().ArgonType.Argon2id);var xe=t(5152),Ge=function(){function e(n,t){(0,R.Z)(this,e),(0,T.Z)(this,"apiQueueRepository",void 0),(0,T.Z)(this,"supabaseClient",void 0),this.apiQueueRepository=n,this.supabaseClient=t}return(0,L.Z)(e,[{key:"collect",value:function(){var e=(0,ce.Z)(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.loadEvents();case 2:return t=e.sent,e.next=5,this.storeEvents([].concat((0,xe.Z)(t),[n]));case 5:return e.next=7,this.sendStoredEvents();case 7:case"end":return e.stop()}}),e,this)})));function n(n){return e.apply(this,arguments)}return n}()},{key:"sendStoredEvents",value:function(){var e=(0,ce.Z)(regeneratorRuntime.mark((function e(){var n,t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.loadEvents();case 2:return n=e.sent,e.next=5,this.supabaseClient.from("correct_answers").insert(n.map((function(e){return{country_code:e.countryCode,challenge_number:e.challengeNumber,correct_answers_count:e.correctAnswersCount}})),{returning:"minimal"});case 5:if(t=e.sent,r=t.error,r){e.next=10;break}return e.next=10,this.clearEvents();case 10:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}()},{key:"loadEvents",value:function(){var e=(0,ce.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.apiQueueRepository.get();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}()},{key:"storeEvents",value:function(){var e=(0,ce.Z)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.apiQueueRepository.save(n);case 2:case"end":return e.stop()}}),e,this)})));function n(n){return e.apply(this,arguments)}return n}()},{key:"clearEvents",value:function(){var e=(0,ce.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.apiQueueRepository.delete();case 2:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}()}]),e}(),We=t(9669),qe=t.n(We),Me=function(){function e(n){(0,R.Z)(this,e),(0,T.Z)(this,"resourcesUri",void 0),this.resourcesUri=n}return(0,L.Z)(e,[{key:"get",value:function(){var e=(0,ce.Z)(regeneratorRuntime.mark((function e(n,t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r="".concat(this.resourcesUri,"/").concat(n,"/").concat(t,"/challenge.json"),e.next=3,qe().get(r);case 3:return a=e.sent,e.abrupt("return",(new O).merge(a.data));case 5:case"end":return e.stop()}}),e,this)})));function n(n,t){return e.apply(this,arguments)}return n}()}]),e}(),Ue=(t(8862),t(8602)),Ye=function(){function e(){(0,R.Z)(this,e)}return(0,L.Z)(e,[{key:"get",value:function(){var e=(0,ce.Z)(regeneratorRuntime.mark((function e(n,t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Ue.K.get({key:"".concat(n,"_").concat(t)});case 2:return r=e.sent.value,e.abrupt("return",r?JSON.parse(r):[]);case 4:case"end":return e.stop()}}),e)})));function n(n,t){return e.apply(this,arguments)}return n}()},{key:"save",value:function(e,n,t){var r=t.questions.map((function(e){return e.answer}));return Ue.K.set({key:"".concat(e,"_").concat(n),value:JSON.stringify(r)})}}]),e}(),De=function(){function e(){(0,R.Z)(this,e)}return(0,L.Z)(e,[{key:"get",value:function(){var n=(0,ce.Z)(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Ue.K.get({key:e.STORAGE_KEY});case 2:if(t=n.sent.value,t){n.next=5;break}return n.abrupt("return",[]);case 5:return n.abrupt("return",JSON.parse(t));case 6:case"end":return n.stop()}}),n)})));function t(){return n.apply(this,arguments)}return t}()},{key:"save",value:function(){var n=(0,ce.Z)(regeneratorRuntime.mark((function n(t){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.abrupt("return",Ue.K.set({key:e.STORAGE_KEY,value:JSON.stringify(t)}));case 1:case"end":return n.stop()}}),n)})));function t(e){return n.apply(this,arguments)}return t}()},{key:"delete",value:function(){var n=(0,ce.Z)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.abrupt("return",Ue.K.remove({key:e.STORAGE_KEY}));case 1:case"end":return n.stop()}}),n)})));function t(){return n.apply(this,arguments)}return t}()}]),e}();(0,T.Z)(De,"STORAGE_KEY","API_QUEUE");var Ve=t(2619),je=(0,Ve.eI)("https://vshirurkfkcqdabtrcnt.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzaGlydXJrZmtjcWRhYnRyY250Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxODEwNTYsImV4cCI6MTk2MDc1NzA1Nn0.7aJF0QXcKziX2n3fgI8wdoW1_BqPuY40biwYXnPytUE"),Qe=new Ye,Pe=new Me("https://vshirurkfkcqdabtrcnt.supabase.in/storage/v1/object/public/resources"),Be=new De,Je=new ze,Fe=new Ge(Be,je),Ke=new Ie(Pe,Qe),Xe=new Oe(Je),$e=new ke(Je,Qe,Fe);function en(){return{getUserChallenge:Ke,checkChallenge:Xe,answerQuestion:$e}}function nn(e,n){var t=(0,ee.iH)(new O),r=en(),u=r.getUserChallenge,o=r.checkChallenge;(0,a.bv)((0,ce.Z)(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,u.execute(e.value,n.value);case 2:return a=r.sent,r.next=5,o.execute(a);case 5:t.value=r.sent;case 6:case"end":return r.stop()}}),r)})))),(0,a.YP)([n,e],(0,ce.Z)(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,u.execute(e.value,n.value);case 2:return a=r.sent,r.next=5,o.execute(a);case 5:t.value=r.sent;case 6:case"end":return r.stop()}}),r)}))));var i=(0,a.Fl)((function(){return t.value.questions.filter((function(e){return e.isCorrect})).length}));return{challenge:t,correctAnswersCount:i}}var tn=(0,a.aZ)({props:{challengeNumber:{type:Number,required:!0},countryCode:{type:String,required:!0}},components:{QuestionsTable:Te,ShareIcon:D},setup:function(e){var n=(0,ee.BK)(e),t=n.challengeNumber,r=n.countryCode,a=(0,N.QT)(),u=a.t,o=nn(r,t),i=o.challenge,s=o.correctAnswersCount,c=en(),l=c.answerQuestion,p=function(){var e=(0,ce.Z)(regeneratorRuntime.mark((function e(n,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.execute(r.value,t.value,i.value,a,n);case 2:i.value=e.sent;case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();return{challenge:i,correctAnswersCount:s,onAnswer:p,t:u}}});const rn=(0,c.Z)(tn,[["render",se],["__scopeId","data-v-65613145"]]);var an=rn,un=(0,a._)("hr",null,null,-1),on={class:"regular",rel:"noopener noreferrer",target:"_blank",href:"https://robertmengual.com/projects;project=toberquizz"},sn=(0,a._)("span",{class:"regular"},"Robert Mengual",-1),cn=(0,a.Uk)(". ");function ln(e,n,t,r,u,o){return(0,a.wg)(),(0,a.iD)("footer",null,[un,(0,a._)("p",null,[(0,a.Uk)((0,h.zw)(e.t("FOOTER.MISSION"))+" ",1),(0,a._)("a",on,(0,h.zw)(e.t("FOOTER.CONTRIBUTE")),1)]),(0,a._)("p",null,[(0,a.Uk)((0,h.zw)(e.t("FOOTER.MADE_BY"))+" ",1),sn,cn])])}var pn=(0,a.aZ)({setup:function(){var e=(0,N.QT)(),n=e.t;return{t:n}}});const hn=(0,c.Z)(pn,[["render",ln]]);var dn=hn,gn={id:"app-bar"};function fn(e,n,t,r,u,o){return(0,a.wg)(),(0,a.iD)("div",gn,[(0,a._)("img",{class:"pointer",alt:"ToberQuizz logo",onClick:n[0]||(n[0]=function(){return e.goToHomeView&&e.goToHomeView.apply(e,arguments)}),src:"/secondary-logo.png"})])}var vn=(0,a.aZ)({setup:function(){var e=(0,o.tv)(),n=function(){e.push({path:"/"})};return{goToHomeView:n}}});const En=(0,c.Z)(vn,[["render",fn],["__scopeId","data-v-18b4048e"]]);var mn=En,wn=(0,a.aZ)({components:{Challenge:an,Footer:dn,AppBar:mn},setup:function(){var e=(0,ee.iH)(),n=(0,ee.iH)(),t=(0,o.yj)(),r=(0,o.tv)();(0,a.bv)((function(){u(),P(e.value)})),(0,a.YP)([t],(function(){u(),P(e.value)}));var u=function(){if(t.params.countryCode&&t.params.challengeNumber){var a=(t.params.countryCode||"").toUpperCase(),u=parseInt(t.params.challengeNumber);Object.values(A).includes(a)&&!isNaN(u)?(e.value=a,n.value=u):r.replace("/")}};return{countryCode:e,challengeNumber:n}}});const Cn=(0,c.Z)(wn,[["render",$]]);var bn=Cn,_n={id:"view-container"};function yn(e,n,t,r,u,o){var i=(0,a.up)("AppBar"),s=(0,a.up)("ChallengeStatistics");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(i),(0,a._)("div",_n,[e.challengeNumber&&e.countryCode?((0,a.wg)(),(0,a.j4)(s,{key:0,challengeNumber:e.challengeNumber,countryCode:e.countryCode},null,8,["challengeNumber","countryCode"])):(0,a.kq)("",!0)])],64)}var An=function(e){return(0,a.dD)("data-v-401333ed"),e=e(),(0,a.Cn)(),e},Nn={class:"regular"},Sn={class:"description"},Rn=An((function(){return(0,a._)("hr",null,null,-1)})),Ln={class:"regular"},Tn={style:{"margin-bottom":"40px"}},On={id:"sticky-bar"};function In(e,n,t,r,u,o){var i=(0,a.up)("BarChart");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("h2",Nn,(0,h.zw)(e.t("CHALLENGE_VIEW.CHALLENGE",{challengeNumber:e.challengeNumber})),1),(0,a._)("p",Sn,(0,h.zw)(e.challenge.description),1),(0,a._)("p",null,(0,h.zw)(e.t("CHALLENGE_VIEW.HOOK")),1),Rn,(0,a._)("h3",Ln,(0,h.zw)(e.t("CHALLENGE_STATISTICS_VIEW.CHALLENGE_PROGRESS")),1),(0,a._)("div",Tn,[e.chartData?((0,a.wg)(),(0,a.j4)(i,{key:0,chartData:e.chartData,options:e.chartOptions,height:800},null,8,["chartData","options"])):(0,a.kq)("",!0)]),(0,a._)("div",On,[(0,a._)("div",null,(0,h.zw)(e.t("CHALLENGE_VIEW.CORRECT_ANSWERS"))+": "+(0,h.zw)(e.correctAnswersCount)+" / "+(0,h.zw)(e.challenge.questions.length),1)])],64)}t(1038);var kn=(0,Ve.eI)("https://vshirurkfkcqdabtrcnt.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzaGlydXJrZmtjcWRhYnRyY250Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxODEwNTYsImV4cCI6MTk2MDc1NzA1Nn0.7aJF0QXcKziX2n3fgI8wdoW1_BqPuY40biwYXnPytUE"),Hn=t(7158),Zn=t(2728);Zn.kL.register(Zn.vn,Zn.ZL,Zn.uw,Zn.f$,Zn.u);var zn=(0,a.aZ)({props:{challengeNumber:{type:Number,required:!0},countryCode:{type:String,required:!0}},components:{BarChart:Hn.vz},setup:function(e){var n=(0,ee.BK)(e),t=n.challengeNumber,r=n.countryCode,u=(0,ee.iH)(),o=(0,N.QT)(),i=o.t,s=nn(r,t),c=s.challenge,l=s.correctAnswersCount;(0,a.YP)([c],(0,ce.Z)(regeneratorRuntime.mark((function e(){var n,a,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=c.value.questions.length,e.next=3,kn.rpc("challenge_statistics",{country_code_arg:r.value,challenge_number_arg:t.value});case 3:a=e.sent,o=a.data,i=null===o||void 0===o?void 0:o.map((function(e,n,t){if(0===n)return e;var r={percentage:t[n-1].percentage<e.percentage?t[n-1].percentage:e.percentage};return r})),u.value={labels:Array.from({length:n},(function(e,n){return n+1})),datasets:[{data:(null===i||void 0===i?void 0:i.map((function(e){return e.percentage})))||[]}]};case 7:case"end":return e.stop()}}),e)}))));var p={indexAxis:"y",elements:{bar:{backgroundColor:function(e){return e.dataIndex+1===l.value?"#ffa316":"#4aab79"}}},scales:{y:{title:{display:!0,text:i("CHALLENGE_STATISTICS_VIEW.COUNT_OF_CORRECT_ANSWERS")}},x:{title:{display:!0,text:i("CHALLENGE_STATISTICS_VIEW.USERS_PERCENTAGE")},min:0,max:100,ticks:{callback:function(e){return e+"%"}}}},responsive:!0,plugins:{legend:{display:!1},tooltip:{displayColors:!1,callbacks:{title:function(e){return i("CHALLENGE_STATISTICS_VIEW.X_CORRECT_ANSWERS",{count:e[0].label})},label:function(e){return e.formattedValue+"%"}}}}};return{challenge:c,correctAnswersCount:l,t:i,chartData:u,chartOptions:p}}});const xn=(0,c.Z)(zn,[["render",In],["__scopeId","data-v-401333ed"]]);var Gn=xn,Wn=(0,a.aZ)({components:{AppBar:mn,ChallengeStatistics:Gn},setup:function(){var e=(0,ee.iH)(),n=(0,ee.iH)(),t=(0,o.tv)(),r=(0,o.yj)();(0,a.bv)((function(){u(),P(e.value)})),(0,a.YP)([r],(function(){u(),P(e.value)}));var u=function(){if(r.params.countryCode&&r.params.challengeNumber){var a=(r.params.countryCode||"").toUpperCase(),u=parseInt(r.params.challengeNumber);Object.values(A).includes(a)&&!isNaN(u)?(e.value=a,n.value=u):t.replace("/")}};return{countryCode:e,challengeNumber:n}}});const qn=(0,c.Z)(Wn,[["render",yn]]);var Mn=qn,Un=(t(7941),{id:"view-container"}),Yn={class:"regular"},Dn={id:"why-toberquizz"},Vn={class:"regular",rel:"noopener noreferrer",target:"_blank",href:"https://robertmengual.com/projects;project=toberquizz"},jn={class:"regular list-heading"},Qn={class:"list-item not-allowed"},Pn={class:"gray"},Bn={class:"danger"},Jn=["onClick"],Fn={class:"end-icons"};function Kn(e,n,t,u,o,i){var s=(0,a.up)("AppBar"),c=(0,a.up)("ArrowRight"),l=(0,a.up)("StatisticsIcon");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(s),(0,a._)("div",Un,[(0,a._)("h2",null,[(0,a.Uk)((0,h.zw)(e.t("CHALLENGE_LIST_VIEW.CHALLENGES_IN"))+" ",1),(0,a._)("span",Yn,(0,h.zw)(e.t("COUNTRY_LIST.".concat(e.countryCode))+" ("+e.t("LANGUAGE_LIST.".concat(e.countryCode))+")"),1)]),(0,a._)("p",Dn,[(0,a._)("a",Vn,(0,h.zw)(e.t("CHALLENGE_LIST_VIEW.WHY_TOBERQUIZZ")),1)]),(0,a._)("div",null,[(0,a._)("p",jn,(0,h.zw)(e.t("CHALLENGE_LIST_VIEW.SELECT_A_CHALLENGE")),1),(0,a._)("div",Qn,[(0,a._)("p",Pn,[(0,a.Uk)((0,h.zw)(e.t("CHALLENGE_LIST_VIEW.CHALLENGE",{challengeNumber:e.challenges.length+1}))+" ",1),(0,a._)("span",Bn,"("+(0,h.zw)(e.t("MONTHS.MAY"))+")",1)]),(0,a.Wm)(c,{color:"#a0a0a0"})]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(Object.keys(e.challenges).reverse(),(function(n){return(0,a.wg)(),(0,a.iD)("div",{class:"list-item pointer",key:n,onClick:function(t){return e.goToChallengeView(parseInt(n)+1)}},[(0,a._)("p",null,(0,h.zw)(e.t("CHALLENGE_LIST_VIEW.CHALLENGE",{challengeNumber:parseInt(n)+1})),1),(0,a._)("div",Fn,[(0,a.Wm)(l,{onClick:(0,r.iM)((function(t){return e.goToChallengeStatisticsView(parseInt(n)+1)}),["stop"])},null,8,["onClick"]),(0,a.Wm)(c)])],8,Jn)})),128))])])],64)}var Xn={version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"24",height:"27","xmlns:xlink":"http://www.w3.org/1999/xlink","enable-background":"new 0 0 512 512"},$n=(0,a._)("g",null,[(0,a._)("g",null,[(0,a._)("path",{d:"m108.5,400.3l77.2-112.8 81.7,78.8c13.7,11.6 27.3,3.1 30.9-3l135.6-194.3 4.9,65c0.8,10.7 9.8,18.9 20.3,18.9 12,0 21.2-10.7 20.4-22l-8.6-114.3c-0.9-11.2-10.6-19.7-21.9-18.8l-114.3,8.6c-11.2,0.8-19.7,10.6-18.8,21.9 0.8,11.2 10.6,19.6 21.9,18.8l65-4.9-124.2,178-81.9-78.9c-5-5.7-20-10.8-31,3.2l-73,106.6v57.9c6.1-0.3 12.1-3.3 15.8-8.7z"}),(0,a._)("path",{d:"M480.6,460.2H51.8V31.4c0-11.3-9.1-20.4-20.4-20.4C20.1,11,11,20.1,11,31.4v449.2c0,11.3,9.1,20.4,20.4,20.4h449.2    c11.3,0,20.4-9.1,20.4-20.4C501,469.3,491.9,460.2,480.6,460.2z"})])],-1),et=[$n];function nt(e,n,t,r,u,o){return(0,a.wg)(),(0,a.iD)("svg",Xn,et)}var tt=(0,a.aZ)({props:{color:{type:String,required:!1,default:"#170A09"}}});const rt=(0,c.Z)(tt,[["render",nt]]);var at=rt,ut=(0,a.aZ)({components:{ArrowRight:x,AppBar:mn,StatisticsIcon:at},setup:function(){var e=(0,o.tv)(),n=(0,o.yj)(),t=(0,N.QT)(),r=t.t,u=(0,ee.iH)(new Array),i=(0,ee.iH)(A.WorldWide),s=function(t){e.push({path:"/".concat(n.params.countryCode,"/").concat(t)})},c=function(t){e.push({path:"/stats/".concat(n.params.countryCode,"/").concat(t)})};(0,a.bv)((function(){l(),P(i.value),p()})),(0,a.YP)([n],(function(){l(),P(i.value),p()}));var l=function(){var t=n.params.countryCode||"";if(t)if(t.toUpperCase()==t){var r=t;Object.values(A).includes(r)?i.value=r:e.replace("/")}else e.replace("/".concat(t.toUpperCase()))},p=function(){var e=(0,ce.Z)(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n="".concat("https://vshirurkfkcqdabtrcnt.supabase.in/storage/v1/object/public/resources","/").concat(i.value,"/challenges.json"),e.next=3,qe().get(n);case 3:return e.next=5,e.sent.data;case 5:t=e.sent,u.value=t;case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{goToChallengeView:s,challenges:u,t:r,countryCode:i,goToChallengeStatisticsView:c}}});const ot=(0,c.Z)(ut,[["render",Kn],["__scopeId","data-v-338721c0"]]);var it=ot,st=[{path:"/",component:K},{path:"/:countryCode",component:it},{path:"/:countryCode/:challengeNumber",component:bn},{path:"/stats/:countryCode/:challengeNumber",component:Mn}],ct=(0,o.p7)({history:(0,o.r5)("/"),routes:st}),lt=ct;(0,r.ri)(p).use(B).use(lt).mount("#app")},8866:function(){}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var u=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(u.exports,u,u.exports,t),u.loaded=!0,u.exports}t.m=e,function(){var e=[];t.O=function(n,r,a,u){if(!r){var o=1/0;for(l=0;l<e.length;l++){r=e[l][0],a=e[l][1],u=e[l][2];for(var i=!0,s=0;s<r.length;s++)(!1&u||o>=u)&&Object.keys(t.O).every((function(e){return t.O[e](r[s])}))?r.splice(s--,1):(i=!1,u<o&&(o=u));if(i){e.splice(l--,1);var c=a();void 0!==c&&(n=c)}}return n}u=u||0;for(var l=e.length;l>0&&e[l-1][2]>u;l--)e[l]=e[l-1];e[l]=[r,a,u]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){var e,n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};t.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}var u=Object.create(null);t.r(u);var o={};e=e||[null,n({}),n([]),n(n)];for(var i=2&a&&r;"object"==typeof i&&!~e.indexOf(i);i=n(i))Object.getOwnPropertyNames(i).forEach((function(e){o[e]=function(){return r[e]}}));return o["default"]=function(){return r},t.d(u,o),u}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"-legacy."+{486:"c757427b",645:"117081fb"}[e]+".js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="toberquizz:";t.l=function(r,a,u,o){if(e[r])e[r].push(a);else{var i,s;if(void 0!==u)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var p=c[l];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==n+u){i=p;break}}i||(s=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.setAttribute("data-webpack",n+u),i.src=r),e[r]=[a];var h=function(n,t){i.onerror=i.onload=null,clearTimeout(d);var a=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(e){return e(t)})),n)return n(t)},d=setTimeout(h.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=h.bind(null,i.onerror),i.onload=h.bind(null,i.onload),s&&document.head.appendChild(i)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p="/"}(),function(){var e={143:0};t.f.j=function(n,r){var a=t.o(e,n)?e[n]:void 0;if(0!==a)if(a)r.push(a[2]);else{var u=new Promise((function(t,r){a=e[n]=[t,r]}));r.push(a[2]=u);var o=t.p+t.u(n),i=new Error,s=function(r){if(t.o(e,n)&&(a=e[n],0!==a&&(e[n]=void 0),a)){var u=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+n+" failed.\n("+u+": "+o+")",i.name="ChunkLoadError",i.type=u,i.request=o,a[1](i)}};t.l(o,s,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var a,u,o=r[0],i=r[1],s=r[2],c=0;if(o.some((function(n){return 0!==e[n]}))){for(a in i)t.o(i,a)&&(t.m[a]=i[a]);if(s)var l=s(t)}for(n&&n(r);c<o.length;c++)u=o[c],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return t.O(l)},r=self["webpackChunktoberquizz"]=self["webpackChunktoberquizz"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(5202)}));r=t.O(r)})();
//# sourceMappingURL=app-legacy.7fd7e104.js.map