(function(){var e={6374:function(e,n,t){"use strict";var r=t(9963),a=t(6252);function o(e,n,t,r,o,l){const s=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(s)}var l,s=t(2119),c=t(5137),u=t(8602),i=t(9669),d=t.n(i);(function(e){e["Spain"]="ES",e["WorldWide"]="WW"})(l||(l={}));var p=t(8598),E=t(477),g=t.n(E);class h{}(0,p.Z)(h,"SALT","Tobertet"),(0,p.Z)(h,"HASH_LENGTH",32),(0,p.Z)(h,"TYPE",g().ArgonType.Argon2id),(0,p.Z)(h,"isAnswerValid",(async(e,n)=>{const t=await g().hash({pass:e.toLocaleLowerCase(),salt:h.SALT,hashLen:h.HASH_LENGTH,type:h.TYPE});return!!n.solutions.find((e=>e===t.hashHex))})),(0,p.Z)(h,"checkAnswer",(async(e,n)=>({text:e,isValid:await h.isAnswerValid(e,n)}))),(0,p.Z)(h,"checkAnswers",(async(e,n)=>{const t=[];for(let r=0;r<e.length;r++)e[r]&&(t[r]=h.checkAnswer(e[r],n[r]));return await Promise.all(t)}));var m=t(2619);const C=(0,m.eI)("https://vshirurkfkcqdabtrcnt.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzaGlydXJrZmtjcWRhYnRyY250Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxODEwNTYsImV4cCI6MTk2MDc1NzA1Nn0.7aJF0QXcKziX2n3fgI8wdoW1_BqPuY40biwYXnPytUE"),_=[{countryCode:l.WorldWide,challengeNumber:1},{countryCode:l.Spain,challengeNumber:1},{countryCode:l.Spain,challengeNumber:2},{countryCode:l.Spain,challengeNumber:3}],v=async()=>{const e=(await u.K.get({key:"PreviousCorrectAnswersCheck"})).value;if(!e){for(const e of _){const n=(await u.K.get({key:`${e.countryCode}_${e.challengeNumber}`})).value;if(!n)continue;const t=JSON.parse(n),r=`https://vshirurkfkcqdabtrcnt.supabase.in/storage/v1/object/public/resources/${e.countryCode}/${e.challengeNumber}/challenge.json`,a=await(await d().get(r)).data,o=await h.checkAnswers(t,a.questions),l=o.filter((e=>e&&e.isValid)).length;if(0===l)continue;const s=[];for(let u=1;u<=l;u++)s.push({countryCode:e.countryCode,challengeNumber:e.challengeNumber,correctAnswersCount:u});const{error:c}=await C.from("correct_answers").insert(s.map((e=>({country_code:e.countryCode,challenge_number:e.challengeNumber,correct_answers_count:e.correctAnswersCount}))),{returning:"minimal"});if(c){let e=new Array;const n=(await u.K.get({key:"API_QUEUE"})).value;n&&(e=JSON.parse(n));const t=[...e,...s];await u.K.set({key:"API_QUEUE",value:JSON.stringify(t)})}}await u.K.set({key:"PreviousCorrectAnswersCheck",value:"CHECK"})}};var b=(0,a.aZ)({setup:()=>{const e=(0,s.tv)();(0,a.bv)((()=>{v()})),c.g.addListener("backButton",(()=>{"/"===e.currentRoute.value.fullPath?c.g.exitApp():e.back()}))}}),w=t(3744);const A=(0,w.Z)(b,[["render",o]]);var f=A,y=t(3577);const N=e=>((0,a.dD)("data-v-35d5d42f"),e=e(),(0,a.Cn)(),e),S={id:"view-container"},L={id:"logo-container"},T=N((()=>(0,a._)("img",{alt:"ToberQuizz logo",src:"/logo256x256.png"},null,-1))),O=["innerHTML"],H=["innerHTML"],I={id:"share-button"},R=["href"],k={class:"regular list-heading"},z=["onClick"];function W(e,n,t,r,o,l){const s=(0,a.up)("ShareIcon"),c=(0,a.up)("ArrowRight");return(0,a.wg)(),(0,a.iD)("div",S,[(0,a._)("div",L,[T,(0,a._)("div",null,[(0,a._)("p",{innerHTML:e.t("HOME_VIEW.FREE_CHALLENGES")},null,8,O),(0,a._)("p",{innerHTML:e.t("HOME_VIEW.ETHICAL_TECHNOLOGY")},null,8,H)])]),(0,a._)("p",I,[(0,a._)("a",{href:"whatsapp://send?text="+e.t("HOME_VIEW.SHARE_MESSAGE"),"data-action":"share/whatsapp/share",target:"_blank"},[(0,a.Uk)((0,y.zw)(e.t("HOME_VIEW.SHARE"))+" ",1),(0,a.Wm)(s,{color:"#ffa316"})],8,R)]),(0,a._)("div",null,[(0,a._)("p",k,(0,y.zw)(e.t("HOME_VIEW.SELECT_A_COUNTRY")),1),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.quizzCountries,(n=>((0,a.wg)(),(0,a.iD)("div",{class:"list-item",key:n,onClick:t=>e.goToChallengeListView(n)},[(0,a._)("p",null,(0,y.zw)(e.t(`COUNTRY_LIST.${n}`)+" ("+e.t(`LANGUAGE_LIST.${n}`)+")"),1),(0,a.Wm)(c)],8,z)))),128))])])}var G=t(9150);const V={width:"24",height:"27",viewBox:"0 0 10 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"},q=["fill"];function M(e,n,t,r,o,l){return(0,a.wg)(),(0,a.iD)("svg",V,[(0,a._)("path",{d:"M1.3641 0.657318C1.17484 0.456231 0.858405 0.446642 0.657318\n    0.6359C0.456231 0.825158 0.446642 1.1416 0.6359 1.34268L1.3641 0.657318ZM9\n    9.5L9.3641 9.84268C9.5453 9.65016 9.5453 9.34984 9.3641 9.15732L9\n    9.5ZM0.6359 17.6573C0.446642 17.8584 0.456231 18.1748 0.657318\n    18.3641C0.858405 18.5534 1.17484 18.5438 1.3641 18.3427L0.6359\n    17.6573ZM0.6359 1.34268L8.6359 9.84268L9.3641 9.15732L1.3641 0.657318L0.6359\n    1.34268ZM8.6359 9.15732L0.6359 17.6573L1.3641 18.3427L9.3641 9.84268L8.6359\n    9.15732Z",fill:e.color},null,8,q)])}var U=(0,a.aZ)({props:{color:{type:String,required:!1,default:"#170A09"}}});const D=(0,w.Z)(U,[["render",M]]);var Y=D;const j=["fill"],P=(0,a._)("path",{d:"M 18 2 A 3 3 0 0 0 15 5 A 3 3 0 0 0 15.054688 5.5605469 L 7.9394531 9.7109375 A 3 3 0 0 0 6 9 A 3 3 0 0 0 3 12 A 3 3 0 0 0 6 15 A 3 3 0 0 0 7.9355469 14.287109 L 15.054688 18.439453 A 3 3 0 0 0 15 19 A 3 3 0 0 0 18 22 A 3 3 0 0 0 21 19 A 3 3 0 0 0 18 16 A 3 3 0 0 0 16.0625 16.712891 L 8.9453125 12.560547 A 3 3 0 0 0 9 12 A 3 3 0 0 0 8.9453125 11.439453 L 16.060547 7.2890625 A 3 3 0 0 0 18 8 A 3 3 0 0 0 21 5 A 3 3 0 0 0 18 2 z"},null,-1),Z=[P];function B(e,n,t,r,o,l){return(0,a.wg)(),(0,a.iD)("svg",{fill:e.color,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24px",height:"24px"},Z,8,j)}var x=(0,a.aZ)({props:{color:{type:String,required:!1,default:"#170A09"}}});const Q=(0,w.Z)(x,[["render",B]]);var $=Q,J=JSON.parse('{"MONTHS":{"JANUARY":"January","FEBRUARY":"February","MARCH":"March","APRIL":"April","MAY":"May","JUNE":"June","JULY":"July","AUGUST":"August","SEPTEMBER":"September","OCTOBER":"October","NOVEMBER":"November","DECEMBER":"December"},"COUNTRY_LIST":{"ES":"Spain","WW":"International"},"LANGUAGE_LIST":{"ES":"Spanish","WW":"English"},"HOME_VIEW":{"FREE_CHALLENGES":"<span class=\\"regular\\">Free</span> challenges","ETHICAL_TECHNOLOGY":"<span class=\\"regular\\">Ethical</span> technology","SELECT_A_COUNTRY":"Select a country","SHARE":"Share","SHARE_MESSAGE":"Discover the challenges of ToberQuizz!%0aWill you be able to guess all of them?%0a%0ahttps://toberquizz.com"},"CHALLENGE_LIST_VIEW":{"CHALLENGE":"Challenge {challengeNumber}","SELECT_A_CHALLENGE":"Select a challenge","WHY_TOBERQUIZZ":"Why ToberQuizz?","CHALLENGES_IN":"Challenges in "},"CHALLENGE_VIEW":{"CHALLENGE":"Challenge {challengeNumber}","CHALLENGE_NOT_RESOLVED":"This challenge has not been completed by anybody yet!","HOOK":"Will you guess all?","CORRECT_ANSWERS":"Correct answers","IMAGES_PER_ROW":"Images per row: ","SHARE_HOOK":"Enjoy ToberQuizz in company! Challenge your contacts and solve all the quizzes.","SHARE_MESSAGE":"Do you dare to complete { countryName }\'s number { challengeNumber } challenge in ToberQuizz?%0a%0ahttps://toberquizz.com/%23/{countryCode}/{challengeNumber}"},"CHALLENGE_STATISTICS_VIEW":{"USERS_PERCENTAGE":"Percentage of users","COUNT_OF_CORRECT_ANSWERS":"Count of correct answers","X_CORRECT_ANSWERS":"{count} correct answers","CHALLENGE_PROGRESS":"Challenge progress"},"FOOTER":{"MADE_BY":"Made for you with much ❤️ by","CONTRIBUTE":"Do you want to know why and how to contribute?","MISSION":"ToberQuizz is completely free and its mission is purely charitable."}}'),K=JSON.parse('{"MONTHS":{"JANUARY":"Enero","FEBRUARY":"Febrero","MARCH":"Marzo","APRIL":"Abril","MAY":"Mayo","JUNE":"Junio","JULY":"Julio","AUGUST":"Agosto","SEPTEMBER":"Septiembre","OCTOBER":"Octubre","NOVEMBER":"Noviembre","DECEMBER":"Diciembre"},"COUNTRY_LIST":{"ES":"España","WW":"Internacional"},"LANGUAGE_LIST":{"ES":"español","WW":"inglés"},"HOME_VIEW":{"FREE_CHALLENGES":"Desafíos <span class=\\"regular\\">gratuitos</span>","ETHICAL_TECHNOLOGY":"Tecnología <span class=\\"regular\\">ética</span>","SELECT_A_COUNTRY":"Selecciona un país","SHARE":"Compartir","SHARE_MESSAGE":"¡Descubre los desafíos de ToberQuizz!%0a¿Serás capaz de adivinar todos?%0a%0ahttps://toberquizz.com"},"CHALLENGE_LIST_VIEW":{"CHALLENGE":"Desafío {challengeNumber}","SELECT_A_CHALLENGE":"Selecciona un desafío","WHY_TOBERQUIZZ":"¿Por qué ToberQuizz?","CHALLENGES_IN":"Desafíos en "},"CHALLENGE_VIEW":{"CHALLENGE":"Desafío {challengeNumber}","CHALLENGE_NOT_RESOLVED":"¡Este desafío todavía no ha sido completado por nadie!","HOOK":"¿Eres capaz de adivinar todos?","CORRECT_ANSWERS":"Aciertos","IMAGES_PER_ROW":"Imágenes por fila: ","SHARE_HOOK":"¡Disfruta de ToberQuizz en compañía! Reta a tus contactos y resolved todos los desafíos.","SHARE_MESSAGE":"¿Te atreves a completar el desafío número { challengeNumber } de { countryName } en ToberQuizz?%0a%0ahttps://toberquizz.com/%23/{countryCode}/{challengeNumber}"},"CHALLENGE_STATISTICS_VIEW":{"USERS_PERCENTAGE":"Porcentaje de usuarios","COUNT_OF_CORRECT_ANSWERS":"Total de respuestas acertadas","X_CORRECT_ANSWERS":"{count} respuestas acertadas","CHALLENGE_PROGRESS":"Progreso del desafío"},"FOOTER":{"MADE_BY":"Hecho para ti con mucho ❤️ por","CONTRIBUTE":"¿Quieres saber por qué y cómo contribuir?","MISSION":"ToberQuizz es totalmente gratuito y su misión es puramente solidaria."}}');const F=()=>["ca","gl","eu"].includes(navigator.language.split("-")[0])?"es":navigator.language.split("-")[0],X=e=>{e?e===l.WorldWide?ee.global.locale="en":ee.global.locale=e.toLowerCase():ee.global.locale=F()},ee=(0,G.o)({messages:{en:J,es:K},locale:F(),fallbackLocale:"en"});var ne=(0,a.aZ)({components:{ArrowRight:Y,ShareIcon:$},setup:()=>{const e=Object.values(l),{t:n}=(0,G.QT)(),t=(0,s.tv)(),r=e=>{t.push({path:`/${e}`})};return(0,a.bv)((()=>{X()})),{quizzCountries:e,t:n,goToChallengeListView:r}}});const te=(0,w.Z)(ne,[["render",W],["__scopeId","data-v-35d5d42f"]]);var re=te;const ae={id:"view-container"};function oe(e,n,t,r,o,l){const s=(0,a.up)("AppBar"),c=(0,a.up)("Challenge"),u=(0,a.up)("Footer");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(s),(0,a._)("div",ae,[e.challengeAvailable?((0,a.wg)(),(0,a.j4)(c,{key:0,countryCode:e.countryCode,challengeNumber:e.challengeNumber},null,8,["countryCode","challengeNumber"])):(0,a.kq)("",!0),(0,a.Wm)(u)])],64)}const le=e=>((0,a.dD)("data-v-480f1810"),e=e(),(0,a.Cn)(),e),se={class:"regular"},ce={class:"info-box"},ue=["href"],ie={class:"description"},de={key:0,class:"danger-box"},pe=le((()=>(0,a._)("hr",null,null,-1))),Ee={id:"sticky-bar"};function ge(e,n,t,r,o,l){const s=(0,a.up)("ShareIcon"),c=(0,a.up)("QuestionsTable");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("h2",se,(0,y.zw)(e.t("CHALLENGE_VIEW.CHALLENGE",{challengeNumber:e.challengeNumber})),1),(0,a._)("div",ce,[(0,a._)("p",null,(0,y.zw)(e.t("CHALLENGE_VIEW.SHARE_HOOK")),1),(0,a._)("p",null,[(0,a._)("a",{href:"whatsapp://send?text="+e.t("CHALLENGE_VIEW.SHARE_MESSAGE",{countryCode:e.countryCode,countryName:e.t(`COUNTRY_LIST.${e.countryCode}`),challengeNumber:e.challengeNumber}),"data-action":"share/whatsapp/share",target:"_blank"},[(0,a.Uk)((0,y.zw)(e.t("HOME_VIEW.SHARE"))+" ",1),(0,a.Wm)(s,{color:"#1366c9"})],8,ue)])]),(0,a._)("p",ie,(0,y.zw)(e.challenge.description),1),(0,a._)("p",null,(0,y.zw)(e.t("CHALLENGE_VIEW.HOOK")),1),e.hasBeenCompleted?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",de,(0,y.zw)(e.t("CHALLENGE_VIEW.CHALLENGE_NOT_RESOLVED")),1)),pe,(0,a.Wm)(c,{challengeNumber:e.challengeNumber,countryCode:e.countryCode,challenge:e.challenge,checkedAnswers:e.checkedAnswers,onAnswer:e.onAnswer},null,8,["challengeNumber","countryCode","challenge","checkedAnswers","onAnswer"]),(0,a._)("div",Ee,[(0,a._)("div",null,(0,y.zw)(e.t("CHALLENGE_VIEW.CORRECT_ANSWERS"))+": "+(0,y.zw)(e.countOfValidAnswers)+" / "+(0,y.zw)(e.challenge.questions.length),1)])],64)}var he=t(2262);function me(e,n){const t=(0,he.iH)([]);(0,a.bv)((()=>{r()})),(0,a.YP)([e,n],(()=>{e.value&&n.value&&r()})),(0,a.YP)(t,(e=>{void 0!==e&&e!==[]&&o(e)}));const r=async()=>{const r=(await u.K.get({key:`${n.value}_${e.value}`})).value;t.value=r?JSON.parse(r):[]},o=t=>{u.K.set({key:`${n.value}_${e.value}`,value:JSON.stringify(t)})};return{storageAnswers:t}}const Ce=me;var _e=Ce;function ve(){const e=async()=>{const e=(await u.K.get({key:"API_QUEUE"})).value;return e?JSON.parse(e):[]},n=e=>u.K.set({key:"API_QUEUE",value:JSON.stringify(e)}),t=()=>u.K.remove({key:"API_QUEUE"}),r=async t=>{const r=await e(),o=[...r,t];await n(o),a()},a=async()=>{const n=await e(),{error:r}=await C.from("correct_answers").insert(n.map((e=>({country_code:e.countryCode,challenge_number:e.challengeNumber,correct_answers_count:e.correctAnswersCount}))),{returning:"minimal"});r||await t()};return{pushCorrectAnswersCountEvent:r}}const be=ve;var we=be;function Ae(e,n,t){const r=(0,he.iH)([]),{storageAnswers:o}=_e(n,e),{pushCorrectAnswersCountEvent:l}=we();(0,a.YP)([o,t],(async()=>{t.value.questions.length>0&&(r.value=await h.checkAnswers(o.value,t.value.questions))}));const s=async(r,a)=>{const s=await h.isAnswerValid(r,t.value.questions[a-1]);s&&l({countryCode:e.value,challengeNumber:n.value,correctAnswersCount:c.value+1});const u=[...o.value];u[a-1]=r,o.value=u},c=(0,a.Fl)((()=>r.value.filter((e=>e&&e.isValid)).length));return{checkedAnswers:r,checkAnswer:s,countOfValidAnswers:c}}const fe=Ae;var ye=fe;const Ne={description:"",questions:[],startingDate:""};function Se(e,n){const t=(0,he.iH)(Ne),r=(0,s.tv)();(0,a.bv)((()=>{e.value&&n.value&&o()})),(0,a.YP)([e,n],(()=>{e.value&&n.value&&o()}));const o=async()=>{t.value=Ne;const a=`https://vshirurkfkcqdabtrcnt.supabase.in/storage/v1/object/public/resources/${n.value}/${e.value}/challenge.json`;try{const e=await(await d().get(a)).data;t.value=e}catch(o){r.replace("/")}};return{challenge:t}}const Le=Se;var Te=Le;const Oe={class:"columns-select"},He={for:"numColumns"},Ie=["value"],Re={class:"columns-select"},ke={for:"numColumns"},ze=["value"];function We(e,n,t,o,l,s){const c=(0,a.up)("Question");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",Oe,[(0,a._)("label",He,(0,y.zw)(e.t("CHALLENGE_VIEW.IMAGES_PER_ROW")),1),(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":n[0]||(n[0]=n=>e.tableColumns=n),name:"numColumns",id:"numColumns"},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.availableColumns,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e,value:e},(0,y.zw)(e),9,Ie)))),128))],512),[[r.bM,e.tableColumns]])]),(0,a._)("div",{id:"questions-table","data-testid":"questions-table",style:(0,y.j5)({"grid-template-columns":`repeat(${e.tableColumns}, 1fr)`})},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.challenge.questions,((n,t)=>((0,a.wg)(),(0,a.j4)(c,{key:t,question:n,questionNumber:t+1,checkedAnswer:e.checkedAnswers[t],challengeNumber:e.challengeNumber,countryCode:e.countryCode,onAnswer:e.emitAnswer},null,8,["question","questionNumber","checkedAnswer","challengeNumber","countryCode","onAnswer"])))),128))],4),(0,a._)("div",Re,[(0,a._)("label",ke,(0,y.zw)(e.t("CHALLENGE_VIEW.IMAGES_PER_ROW")),1),(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":n[1]||(n[1]=n=>e.tableColumns=n),name:"numColumns",id:"numColumns"},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.availableColumns,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e,value:e},(0,y.zw)(e),9,ze)))),128))],512),[[r.bM,e.tableColumns]])])],64)}const Ge={class:"question"},Ve=["alt","src"],qe={class:"input-container"},Me=["disabled"],Ue=["disabled"];function De(e,n,t,o,l,s){return(0,a.wg)(),(0,a.iD)("div",Ge,[(0,a._)("div",{class:(0,y.C_)(["image-container",e.status]),"data-testid":"image-container"},[(0,a._)("img",{alt:e.question.altText,src:`${e.imagesBucket}/${e.countryCode}/${e.challengeNumber}/${e.questionNumber}.png`},null,8,Ve)],2),(0,a._)("div",qe,[(0,a._)("label",null,(0,y.zw)(e.questionNumber)+" - ",1),(0,a.wy)((0,a._)("input",{disabled:"valid"===e.status,"onUpdate:modelValue":n[0]||(n[0]=n=>e.inputText=n)},null,8,Me),[[r.nr,e.inputText]]),(0,a._)("button",{disabled:"valid"===e.status,onClick:n[1]||(n[1]=(...n)=>e.emitAnswer&&e.emitAnswer(...n))},"✔️",8,Ue)])])}var Ye;(function(e){e["Error"]="error",e["Clean"]="clean",e["Valid"]="valid"})(Ye||(Ye={}));var je=(0,a.aZ)({emits:["answer"],props:{question:{type:Object,required:!0},checkedAnswer:{type:Object},questionNumber:{type:Number,required:!0},challengeNumber:{type:Number,required:!0},countryCode:{type:String,required:!0}},setup:(e,n)=>{const{checkedAnswer:t,questionNumber:r}=(0,he.BK)(e),o=(0,he.iH)(""),l=(0,he.iH)(Ye.Clean),s=()=>{n.emit("answer",o.value.trim().replace(/\s{2,}/g," "),r.value)},c=e=>{o.value=e?.text||"",l.value=e?e.isValid?Ye.Valid:Ye.Error:Ye.Clean};(0,a.bv)((()=>c(t.value))),(0,a.YP)(t,(()=>c(t.value)));const u=(0,a.Fl)((()=>"https://vshirurkfkcqdabtrcnt.supabase.in/storage/v1/object/public/resources"));return{inputText:o,status:l,emitAnswer:s,imagesBucket:u}}});const Pe=(0,w.Z)(je,[["render",De],["__scopeId","data-v-0e9fd073"]]);var Ze=Pe,Be=(0,a.aZ)({components:{Question:Ze},emits:["answer"],props:{checkedAnswers:{type:Object,required:!0},challenge:{type:Object,required:!0},challengeNumber:{type:Number,required:!0},countryCode:{type:String,required:!0}},setup:function(e,n){const{t:t}=(0,G.QT)(),r=(0,he.iH)(window.innerWidth>992?[3,4,5,6]:[1,2]),a=(0,he.iH)(window.innerWidth>992?4:1),o=(e,t)=>{n.emit("answer",e,t)};return{tableColumns:a,availableColumns:r,emitAnswer:o,t:t}}});const xe=(0,w.Z)(Be,[["render",We]]);var Qe=xe,$e=(0,a.aZ)({props:{challengeNumber:{type:Number,required:!0},countryCode:{type:String,required:!0}},components:{QuestionsTable:Qe,ShareIcon:$},setup:e=>{const{challengeNumber:n,countryCode:t}=(0,he.BK)(e),r=(0,he.iH)(!0),{t:o}=(0,G.QT)(),{challenge:l}=Te(n,t),{checkedAnswers:s,checkAnswer:c,countOfValidAnswers:u}=ye(t,n,l),i=(e,n)=>{c(e,n)};return(0,a.YP)([l],(async()=>{const e=l.value.questions.length;if(u.value===e)return void(r.value=!0);const{data:a,error:o}=await C.from("correct_answers").select("id").like("country_code",t.value).eq("challenge_number",n.value).eq("correct_answers_count",e);o||!a||a.length>0?r.value=!0:r.value=!1})),{challenge:l,hasBeenCompleted:r,checkedAnswers:s,countOfValidAnswers:u,onAnswer:i,t:o}}});const Je=(0,w.Z)($e,[["render",ge],["__scopeId","data-v-480f1810"]]);var Ke=Je;const Fe=(0,a._)("hr",null,null,-1),Xe={class:"regular",rel:"noopener noreferrer",target:"_blank",href:"https://robertmengual.com/projects;project=toberquizz"},en=(0,a._)("span",{class:"regular"},"Robert Mengual",-1),nn=(0,a.Uk)(". ");function tn(e,n,t,r,o,l){return(0,a.wg)(),(0,a.iD)("footer",null,[Fe,(0,a._)("p",null,[(0,a.Uk)((0,y.zw)(e.t("FOOTER.MISSION"))+" ",1),(0,a._)("a",Xe,(0,y.zw)(e.t("FOOTER.CONTRIBUTE")),1)]),(0,a._)("p",null,[(0,a.Uk)((0,y.zw)(e.t("FOOTER.MADE_BY"))+" ",1),en,nn])])}var rn=(0,a.aZ)({setup:()=>{const{t:e}=(0,G.QT)();return{t:e}}});const an=(0,w.Z)(rn,[["render",tn]]);var on=an;const ln={id:"app-bar"};function sn(e,n,t,r,o,l){return(0,a.wg)(),(0,a.iD)("div",ln,[(0,a._)("img",{class:"pointer",alt:"ToberQuizz logo",onClick:n[0]||(n[0]=(...n)=>e.goToHomeView&&e.goToHomeView(...n)),src:"/secondary-logo.png"})])}var cn=(0,a.aZ)({setup:()=>{const e=(0,s.tv)(),n=()=>{e.push({path:"/"})};return{goToHomeView:n}}});const un=(0,w.Z)(cn,[["render",sn],["__scopeId","data-v-18b4048e"]]);var dn=un,pn=(0,a.aZ)({components:{Challenge:Ke,Footer:on,AppBar:dn},data:function(){return{countryCode:l.Spain,challengeNumber:1,challengeAvailable:!1}},mounted:function(){this.getUrlParams(),Object.values(l).includes(this.countryCode)?(X(this.countryCode),this.challengeAvailable=!0):this.$router.replace("/")},methods:{getUrlParams:function(){this.$route.params.countryCode&&this.$route.params.challengeNumber&&(this.countryCode=this.$route.params.countryCode.toUpperCase(),this.challengeNumber=parseInt(this.$route.params.challengeNumber))}},watch:{$route(){this.getUrlParams(),X(this.countryCode)}}});const En=(0,w.Z)(pn,[["render",oe]]);var gn=En;const hn={id:"view-container"};function mn(e,n,t,r,o,l){const s=(0,a.up)("AppBar"),c=(0,a.up)("ChallengeStatistics");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(s),(0,a._)("div",hn,[e.challengeNumber&&e.countryCode?((0,a.wg)(),(0,a.j4)(c,{key:0,challengeNumber:e.challengeNumber,countryCode:e.countryCode},null,8,["challengeNumber","countryCode"])):(0,a.kq)("",!0)])],64)}const Cn=e=>((0,a.dD)("data-v-305176c0"),e=e(),(0,a.Cn)(),e),_n={class:"regular"},vn={class:"description"},bn=Cn((()=>(0,a._)("hr",null,null,-1))),wn={class:"regular"},An={style:{"margin-bottom":"40px"}},fn={id:"sticky-bar"};function yn(e,n,t,r,o,l){const s=(0,a.up)("BarChart");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("h2",_n,(0,y.zw)(e.t("CHALLENGE_VIEW.CHALLENGE",{challengeNumber:e.challengeNumber})),1),(0,a._)("p",vn,(0,y.zw)(e.challenge.description),1),(0,a._)("p",null,(0,y.zw)(e.t("CHALLENGE_VIEW.HOOK")),1),bn,(0,a._)("h3",wn,(0,y.zw)(e.t("CHALLENGE_STATISTICS_VIEW.CHALLENGE_PROGRESS")),1),(0,a._)("div",An,[e.chartData?((0,a.wg)(),(0,a.j4)(s,{key:0,chartData:e.chartData,options:e.chartOptions,height:800},null,8,["chartData","options"])):(0,a.kq)("",!0)]),(0,a._)("div",fn,[(0,a._)("div",null,(0,y.zw)(e.t("CHALLENGE_VIEW.CORRECT_ANSWERS"))+": "+(0,y.zw)(e.countOfValidAnswers)+" / "+(0,y.zw)(e.challenge.questions.length),1)])],64)}var Nn=t(7158),Sn=t(2728);Sn.kL.register(Sn.vn,Sn.ZL,Sn.uw,Sn.f$,Sn.u);var Ln=(0,a.aZ)({props:{challengeNumber:{type:Number,required:!0},countryCode:{type:String,required:!0}},components:{BarChart:Nn.vz},setup:e=>{const{challengeNumber:n,countryCode:t}=(0,he.BK)(e),r=(0,he.iH)(),{t:o}=(0,G.QT)(),{challenge:l}=Te(n,t),{checkedAnswers:s,countOfValidAnswers:c}=ye(t,n,l);(0,a.YP)([l],(async()=>{const e=l.value.questions.length,{data:a}=await C.rpc("challenge_statistics",{country_code_arg:t.value,challenge_number_arg:n.value}),o=a?.map(((e,n,t)=>{if(0===n)return e;const r={percentage:t[n-1].percentage<e.percentage?t[n-1].percentage:e.percentage};return r}));r.value={labels:Array.from({length:e},((e,n)=>n+1)),datasets:[{data:o?.map((e=>e.percentage))||[]}]}}));const u={indexAxis:"y",elements:{bar:{backgroundColor:e=>e.dataIndex+1===c.value?"#ffa316":"#4aab79"}},scales:{y:{title:{display:!0,text:o("CHALLENGE_STATISTICS_VIEW.COUNT_OF_CORRECT_ANSWERS")}},x:{title:{display:!0,text:o("CHALLENGE_STATISTICS_VIEW.USERS_PERCENTAGE")},min:0,max:100,ticks:{callback:e=>e+"%"}}},responsive:!0,plugins:{legend:{display:!1},tooltip:{displayColors:!1,callbacks:{title:e=>o("CHALLENGE_STATISTICS_VIEW.X_CORRECT_ANSWERS",{count:e[0].label}),label:e=>e.formattedValue+"%"}}}};return{challenge:l,checkedAnswers:s,countOfValidAnswers:c,t:o,chartData:r,chartOptions:u}}});const Tn=(0,w.Z)(Ln,[["render",yn],["__scopeId","data-v-305176c0"]]);var On=Tn,Hn=(0,a.aZ)({components:{AppBar:dn,ChallengeStatistics:On},setup:()=>{const e=(0,he.iH)(),n=(0,he.iH)(),t=(0,s.tv)(),r=(0,s.yj)(),o=()=>{r.params.countryCode&&r.params.challengeNumber&&(e.value=r.params.countryCode.toUpperCase(),n.value=parseInt(r.params.challengeNumber))};return(0,a.bv)((()=>{o(),!e.value||Object.values(l).includes(e.value)||t.replace("/")})),(0,a.YP)([r],(()=>{o(),!e.value||Object.values(l).includes(e.value)||t.replace("/")})),{countryCode:e,challengeNumber:n}}});const In=(0,w.Z)(Hn,[["render",mn]]);var Rn=In;const kn={id:"view-container"},zn={class:"regular"},Wn={id:"why-toberquizz"},Gn={class:"regular",rel:"noopener noreferrer",target:"_blank",href:"https://robertmengual.com/projects;project=toberquizz"},Vn={class:"regular list-heading"},qn={class:"list-item not-allowed"},Mn={class:"gray"},Un={class:"danger"},Dn=["onClick"],Yn={class:"end-icons"};function jn(e,n,t,o,l,s){const c=(0,a.up)("AppBar"),u=(0,a.up)("ArrowRight"),i=(0,a.up)("StatisticsIcon");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(c),(0,a._)("div",kn,[(0,a._)("h2",null,[(0,a.Uk)((0,y.zw)(e.t("CHALLENGE_LIST_VIEW.CHALLENGES_IN"))+" ",1),(0,a._)("span",zn,(0,y.zw)(e.t(`COUNTRY_LIST.${e.countryCode}`)+" ("+e.t(`LANGUAGE_LIST.${e.countryCode}`)+")"),1)]),(0,a._)("p",Wn,[(0,a._)("a",Gn,(0,y.zw)(e.t("CHALLENGE_LIST_VIEW.WHY_TOBERQUIZZ")),1)]),(0,a._)("div",null,[(0,a._)("p",Vn,(0,y.zw)(e.t("CHALLENGE_LIST_VIEW.SELECT_A_CHALLENGE")),1),(0,a._)("div",qn,[(0,a._)("p",Mn,[(0,a.Uk)((0,y.zw)(e.t("CHALLENGE_LIST_VIEW.CHALLENGE",{challengeNumber:e.challenges.length+1}))+" ",1),(0,a._)("span",Un,"("+(0,y.zw)(e.t("MONTHS.MAY"))+")",1)]),(0,a.Wm)(u,{color:"#a0a0a0"})]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(Object.keys(e.challenges).reverse(),(n=>((0,a.wg)(),(0,a.iD)("div",{class:"list-item pointer",key:n,onClick:t=>e.goToChallengeView(parseInt(n)+1)},[(0,a._)("p",null,(0,y.zw)(e.t("CHALLENGE_LIST_VIEW.CHALLENGE",{challengeNumber:parseInt(n)+1})),1),(0,a._)("div",Yn,[(0,a.Wm)(i,{onClick:(0,r.iM)((t=>e.goToChallengeStatisticsView(parseInt(n)+1)),["stop"])},null,8,["onClick"]),(0,a.Wm)(u)])],8,Dn)))),128))])])],64)}const Pn={version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"24",height:"27","xmlns:xlink":"http://www.w3.org/1999/xlink","enable-background":"new 0 0 512 512"},Zn=(0,a._)("g",null,[(0,a._)("g",null,[(0,a._)("path",{d:"m108.5,400.3l77.2-112.8 81.7,78.8c13.7,11.6 27.3,3.1 30.9-3l135.6-194.3 4.9,65c0.8,10.7 9.8,18.9 20.3,18.9 12,0 21.2-10.7 20.4-22l-8.6-114.3c-0.9-11.2-10.6-19.7-21.9-18.8l-114.3,8.6c-11.2,0.8-19.7,10.6-18.8,21.9 0.8,11.2 10.6,19.6 21.9,18.8l65-4.9-124.2,178-81.9-78.9c-5-5.7-20-10.8-31,3.2l-73,106.6v57.9c6.1-0.3 12.1-3.3 15.8-8.7z"}),(0,a._)("path",{d:"M480.6,460.2H51.8V31.4c0-11.3-9.1-20.4-20.4-20.4C20.1,11,11,20.1,11,31.4v449.2c0,11.3,9.1,20.4,20.4,20.4h449.2    c11.3,0,20.4-9.1,20.4-20.4C501,469.3,491.9,460.2,480.6,460.2z"})])],-1),Bn=[Zn];function xn(e,n,t,r,o,l){return(0,a.wg)(),(0,a.iD)("svg",Pn,Bn)}var Qn=(0,a.aZ)({props:{color:{type:String,required:!1,default:"#170A09"}}});const $n=(0,w.Z)(Qn,[["render",xn]]);var Jn=$n,Kn=(0,a.aZ)({components:{ArrowRight:Y,AppBar:dn,StatisticsIcon:Jn},setup:()=>{const e=(0,s.tv)(),n=(0,s.yj)(),{t:t}=(0,G.QT)(),r=(0,he.iH)(new Array),o=(0,he.iH)(l.WorldWide),c=t=>{e.push({path:`/${n.params.countryCode}/${t}`})},u=t=>{e.push({path:`/stats/${n.params.countryCode}/${t}`})};(0,a.bv)((()=>{const t=n.params.countryCode;Object.values(l).includes(t)?(o.value=t,X(t),i()):e.replace("/")}));const i=async()=>{const e=`https://vshirurkfkcqdabtrcnt.supabase.in/storage/v1/object/public/resources/${o.value}/challenges.json`,n=await(await d().get(e)).data;r.value=n};return{goToChallengeView:c,challenges:r,t:t,countryCode:o,goToChallengeStatisticsView:u}}});const Fn=(0,w.Z)(Kn,[["render",jn],["__scopeId","data-v-8b0772d6"]]);var Xn=Fn;const et=[{path:"/",component:re},{path:"/:countryCode",component:Xn},{path:"/:countryCode/:challengeNumber",component:gn},{path:"/stats/:countryCode/:challengeNumber",component:Rn}],nt=(0,s.p7)({history:(0,s.r5)("/"),routes:et});var tt=nt;(0,r.ri)(f).use(ee).use(tt).mount("#app")},8866:function(){}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}t.m=e,function(){var e=[];t.O=function(n,r,a,o){if(!r){var l=1/0;for(i=0;i<e.length;i++){r=e[i][0],a=e[i][1],o=e[i][2];for(var s=!0,c=0;c<r.length;c++)(!1&o||l>=o)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(s=!1,o<l&&(l=o));if(s){e.splice(i--,1);var u=a();void 0!==u&&(n=u)}}return n}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[r,a,o]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){var e,n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};t.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}var o=Object.create(null);t.r(o);var l={};e=e||[null,n({}),n([]),n(n)];for(var s=2&a&&r;"object"==typeof s&&!~e.indexOf(s);s=n(s))Object.getOwnPropertyNames(s).forEach((function(e){l[e]=function(){return r[e]}}));return l["default"]=function(){return r},t.d(o,l),o}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{486:"c757427b",645:"117081fb"}[e]+".js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="toberquizz:";t.l=function(r,a,o,l){if(e[r])e[r].push(a);else{var s,c;if(void 0!==o)for(var u=document.getElementsByTagName("script"),i=0;i<u.length;i++){var d=u[i];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==n+o){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",n+o),s.src=r),e[r]=[a];var p=function(n,t){s.onerror=s.onload=null,clearTimeout(E);var a=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(e){return e(t)})),n)return n(t)},E=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p="/"}(),function(){var e={143:0};t.f.j=function(n,r){var a=t.o(e,n)?e[n]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise((function(t,r){a=e[n]=[t,r]}));r.push(a[2]=o);var l=t.p+t.u(n),s=new Error,c=function(r){if(t.o(e,n)&&(a=e[n],0!==a&&(e[n]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.src;s.message="Loading chunk "+n+" failed.\n("+o+": "+l+")",s.name="ChunkLoadError",s.type=o,s.request=l,a[1](s)}};t.l(l,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var a,o,l=r[0],s=r[1],c=r[2],u=0;if(l.some((function(n){return 0!==e[n]}))){for(a in s)t.o(s,a)&&(t.m[a]=s[a]);if(c)var i=c(t)}for(n&&n(r);u<l.length;u++)o=l[u],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(i)},r=self["webpackChunktoberquizz"]=self["webpackChunktoberquizz"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(6374)}));r=t.O(r)})();
//# sourceMappingURL=app.02b20baa.js.map