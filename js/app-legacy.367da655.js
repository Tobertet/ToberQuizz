(function(){var e={369:function(e,n,r){"use strict";r(6992),r(8674),r(9601),r(7727);var t=r(9963),a=r(6252);function u(e,n,r,t,u,o){var c=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(c)}var o,c=r(2119),i=r(5137),s=r(6958),l=r(6767),p=r(5669),d=(r(5666),r(2222),r(7327),r(1539),r(1249),r(8862),r(8602)),f=r(9669),v=r.n(f);(function(e){e["Spain"]="ES",e["WorldWide"]="WW"})(o||(o={}));var h=r(7867),g=r(8842),m=r(8598),b=(r(9826),r(8783),r(3948),r(477)),E=r.n(b),w=(0,h.Z)((function e(){(0,g.Z)(this,e)}));(0,m.Z)(w,"SALT","Tobertet"),(0,m.Z)(w,"HASH_LENGTH",32),(0,m.Z)(w,"TYPE",E().ArgonType.Argon2id),(0,m.Z)(w,"isAnswerValid",function(){var e=(0,p.Z)(regeneratorRuntime.mark((function e(n,r){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,E().hash({pass:n.toLocaleLowerCase(),salt:w.SALT,hashLen:w.HASH_LENGTH,type:w.TYPE});case 2:return t=e.sent,e.abrupt("return",!!r.solutions.find((function(e){return e===t.hashHex})));case 4:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()),(0,m.Z)(w,"checkAnswer",function(){var e=(0,p.Z)(regeneratorRuntime.mark((function e(n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=n,e.next=3,w.isAnswerValid(n,r);case 3:return e.t1=e.sent,e.abrupt("return",{text:e.t0,isValid:e.t1});case 5:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()),(0,m.Z)(w,"checkAnswers",function(){var e=(0,p.Z)(regeneratorRuntime.mark((function e(n,r){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(t=[],a=0;a<n.length;a++)n[a]&&(t[a]=w.checkAnswer(n[a],r[a]));return e.next=4,Promise.all(t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}());var C=r(2619),_=(0,C.eI)("https://vshirurkfkcqdabtrcnt.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzaGlydXJrZmtjcWRhYnRyY250Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxODEwNTYsImV4cCI6MTk2MDc1NzA1Nn0.7aJF0QXcKziX2n3fgI8wdoW1_BqPuY40biwYXnPytUE"),y=[{countryCode:o.WorldWide,challengeNumber:1},{countryCode:o.Spain,challengeNumber:1},{countryCode:o.Spain,challengeNumber:2},{countryCode:o.Spain,challengeNumber:3}],A=function(){var e=(0,p.Z)(regeneratorRuntime.mark((function e(){var n,r,t,a,u,o,c,i,p,f,h,g,m,b,E,C,A;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d.K.get({key:"PreviousCorrectAnswersCheck"});case 2:if(n=e.sent.value,!n){e.next=5;break}return e.abrupt("return");case 5:r=(0,l.Z)(y),e.prev=6,r.s();case 8:if((t=r.n()).done){e.next=45;break}return a=t.value,e.next=12,d.K.get({key:"".concat(a.countryCode,"_").concat(a.challengeNumber)});case 12:if(u=e.sent.value,u){e.next=15;break}return e.abrupt("continue",43);case 15:return o=JSON.parse(u),c="".concat("https://vshirurkfkcqdabtrcnt.supabase.in/storage/v1/object/public/resources","/").concat(a.countryCode,"/").concat(a.challengeNumber,"/challenge.json"),e.next=19,v().get(c);case 19:return e.next=21,e.sent.data;case 21:return i=e.sent,e.next=24,w.checkAnswers(o,i.questions);case 24:if(p=e.sent,f=p.filter((function(e){return e&&e.isValid})).length,0!==f){e.next=28;break}return e.abrupt("continue",43);case 28:for(h=[],g=1;g<=f;g++)h.push({countryCode:a.countryCode,challengeNumber:a.challengeNumber,correctAnswersCount:g});return e.next=32,_.from("correct_answers").insert(h.map((function(e){return{country_code:e.countryCode,challenge_number:e.challengeNumber,correct_answers_count:e.correctAnswersCount}})),{returning:"minimal"});case 32:if(m=e.sent,b=m.error,!b){e.next=43;break}return E=new Array,e.next=38,d.K.get({key:"API_QUEUE"});case 38:return C=e.sent.value,C&&(E=JSON.parse(C)),A=[].concat((0,s.Z)(E),h),e.next=43,d.K.set({key:"API_QUEUE",value:JSON.stringify(A)});case 43:e.next=8;break;case 45:e.next=50;break;case 47:e.prev=47,e.t0=e["catch"](6),r.e(e.t0);case 50:return e.prev=50,r.f(),e.finish(50);case 53:return e.next=55,d.K.set({key:"PreviousCorrectAnswersCheck",value:"CHECK"});case 55:case"end":return e.stop()}}),e,null,[[6,47,50,53]])})));return function(){return e.apply(this,arguments)}}(),N=(0,a.aZ)({setup:function(){var e=(0,c.tv)();(0,a.bv)((function(){A()})),i.g.addListener("backButton",(function(){"/"===e.currentRoute.value.fullPath?i.g.exitApp():e.back()}))}}),L=r(3744);const O=(0,L.Z)(N,[["render",u]]);var k=O,T=r(3577),R=function(e){return(0,a.dD)("data-v-43832aea"),e=e(),(0,a.Cn)(),e},H={id:"view-container"},I={id:"logo-container"},S=R((function(){return(0,a._)("img",{alt:"ToberQuizz logo",src:"/logo256x256.png"},null,-1)})),x=["innerHTML"],Z=["innerHTML"],z={class:"regular list-heading"},W=["onClick"];function q(e,n,r,t,u,o){var c=(0,a.up)("ArrowRight");return(0,a.wg)(),(0,a.iD)("div",H,[(0,a._)("div",I,[S,(0,a._)("div",null,[(0,a._)("p",{innerHTML:e.t("HOME_VIEW.FREE_CHALLENGES")},null,8,x),(0,a._)("p",{innerHTML:e.t("HOME_VIEW.ETHICAL_TECHNOLOGY")},null,8,Z)])]),(0,a._)("div",null,[(0,a._)("p",z,(0,T.zw)(e.t("HOME_VIEW.SELECT_A_COUNTRY")),1),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.quizzCountries,(function(n){return(0,a.wg)(),(0,a.iD)("div",{class:"list-item",key:n,onClick:function(r){return e.goToChallengeListView(n)}},[(0,a._)("p",null,(0,T.zw)(e.t("COUNTRY_LIST.".concat(n))),1),(0,a.Wm)(c)],8,W)})),128))])])}r(2479);var M=r(9150),U={width:"12",height:"27",viewBox:"0 0 10 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"},V=["fill"];function Y(e,n,r,t,u,o){return(0,a.wg)(),(0,a.iD)("svg",U,[(0,a._)("path",{d:"M1.3641 0.657318C1.17484 0.456231 0.858405 0.446642 0.657318\n    0.6359C0.456231 0.825158 0.446642 1.1416 0.6359 1.34268L1.3641 0.657318ZM9\n    9.5L9.3641 9.84268C9.5453 9.65016 9.5453 9.34984 9.3641 9.15732L9\n    9.5ZM0.6359 17.6573C0.446642 17.8584 0.456231 18.1748 0.657318\n    18.3641C0.858405 18.5534 1.17484 18.5438 1.3641 18.3427L0.6359\n    17.6573ZM0.6359 1.34268L8.6359 9.84268L9.3641 9.15732L1.3641 0.657318L0.6359\n    1.34268ZM8.6359 9.15732L0.6359 17.6573L1.3641 18.3427L9.3641 9.84268L8.6359\n    9.15732Z",fill:e.color},null,8,V)])}var G=(0,a.aZ)({props:{color:{type:String,required:!1,default:"#170A09"}}});const j=(0,L.Z)(G,[["render",Y]]);var D=j,P=(0,a.aZ)({components:{ArrowRight:D},setup:function(){var e=Object.values(o),n=(0,M.QT)(),r=n.t,t=(0,c.tv)(),a=function(e){t.push({path:"/".concat(e)})};return{quizzCountries:e,t:r,goToChallengeListView:a}}});const B=(0,L.Z)(P,[["render",q],["__scopeId","data-v-43832aea"]]);var J=B,Q={id:"view-container"};function F(e,n,r,t,u,o){var c=(0,a.up)("AppBar"),i=(0,a.up)("Challenge"),s=(0,a.up)("Footer");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(c),(0,a._)("div",Q,[e.challengeAvailable?((0,a.wg)(),(0,a.j4)(i,{key:0,countryCode:e.countryCode,challengeNumber:e.challengeNumber},null,8,["countryCode","challengeNumber"])):(0,a.kq)("",!0),(0,a.Wm)(s)])],64)}r(6699),r(2023),r(4916),r(5306),r(2526),r(1817);var K=function(e){return(0,a.dD)("data-v-eedc621a"),e=e(),(0,a.Cn)(),e},X={class:"regular"},$={class:"description"},ee={key:0,class:"danger-box"},ne=K((function(){return(0,a._)("hr",null,null,-1)})),re={id:"sticky-bar"};function te(e,n,r,t,u,o){var c=(0,a.up)("QuestionsTable");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("h2",X,(0,T.zw)(e.t("CHALLENGE_VIEW.CHALLENGE",{challengeNumber:e.challengeNumber})),1),(0,a._)("p",$,(0,T.zw)(e.challenge.description),1),(0,a._)("p",null,(0,T.zw)(e.t("CHALLENGE_VIEW.HOOK")),1),e.hasBeenCompleted?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",ee,(0,T.zw)(e.t("CHALLENGE_VIEW.CHALLENGE_NOT_RESOLVED")),1)),ne,(0,a.Wm)(c,{challengeNumber:e.challengeNumber,countryCode:e.countryCode,challenge:e.challenge,checkedAnswers:e.checkedAnswers,onAnswer:e.onAnswer},null,8,["challengeNumber","countryCode","challenge","checkedAnswers","onAnswer"]),(0,a._)("div",re,[(0,a._)("div",null,(0,T.zw)(e.t("CHALLENGE_VIEW.CORRECT_ANSWERS"))+": "+(0,T.zw)(e.countOfValidAnswers)+" / "+(0,T.zw)(e.challenge.questions.length),1)])],64)}r(9653);var ae=r(2262);function ue(e,n){var r=(0,ae.iH)([]);(0,a.bv)((function(){t()})),(0,a.YP)([e,n],(function(){e.value&&n.value&&t()})),(0,a.YP)(r,(function(e){void 0!==e&&e!==[]&&u(e)}));var t=function(){var t=(0,p.Z)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d.K.get({key:"".concat(n.value,"_").concat(e.value)});case 2:if(a=t.sent.value,a){t.next=6;break}return r.value=[],t.abrupt("return");case 6:r.value=JSON.parse(a);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(r){d.K.set({key:"".concat(n.value,"_").concat(e.value),value:JSON.stringify(r)})};return{storageAnswers:r}}const oe=ue;var ce=oe;function ie(){var e=function(){var e=(0,p.Z)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d.K.get({key:"API_QUEUE"});case 2:if(n=e.sent.value,n){e.next=5;break}return e.abrupt("return",[]);case 5:return e.abrupt("return",JSON.parse(n));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=function(e){return d.K.set({key:"API_QUEUE",value:JSON.stringify(e)})},r=function(){return d.K.remove({key:"API_QUEUE"})},t=function(){var r=(0,p.Z)(regeneratorRuntime.mark((function r(t){var u,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e();case 2:return u=r.sent,o=[].concat((0,s.Z)(u),[t]),r.next=6,n(o);case 6:a();case 7:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),a=function(){var n=(0,p.Z)(regeneratorRuntime.mark((function n(){var t,a,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e();case 2:return t=n.sent,n.next=5,_.from("correct_answers").insert(t.map((function(e){return{country_code:e.countryCode,challenge_number:e.challengeNumber,correct_answers_count:e.correctAnswersCount}})),{returning:"minimal"});case 5:if(a=n.sent,u=a.error,u){n.next=10;break}return n.next=10,r();case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return{pushCorrectAnswersCountEvent:t}}const se=ie;var le=se;function pe(e,n,r){var t=(0,ae.iH)([]),u=ce(n,e),o=u.storageAnswers,c=le(),i=c.pushCorrectAnswersCountEvent;(0,a.YP)([o,r],(0,p.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(r.value.questions.length>0)){e.next=4;break}return e.next=3,w.checkAnswers(o.value,r.value.questions);case 3:t.value=e.sent;case 4:case"end":return e.stop()}}),e)}))));var l=function(){var t=(0,p.Z)(regeneratorRuntime.mark((function t(a,u){var c,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,w.isAnswerValid(a,r.value.questions[u-1]);case 2:c=t.sent,c&&i({countryCode:e.value,challengeNumber:n.value,correctAnswersCount:d.value+1}),l=(0,s.Z)(o.value),l[u-1]=a,o.value=l;case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),d=(0,a.Fl)((function(){return t.value.filter((function(e){return e&&e.isValid})).length}));return{checkedAnswers:t,checkAnswer:l,countOfValidAnswers:d}}const de=pe;var fe=de,ve={description:"",questions:[],startingDate:""};function he(e,n){var r=(0,ae.iH)(ve),t=(0,c.tv)();(0,a.bv)((function(){u()})),(0,a.YP)([e,n],(function(){u()}));var u=function(){var a=(0,p.Z)(regeneratorRuntime.mark((function a(){var u,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r.value=ve,u="".concat("https://vshirurkfkcqdabtrcnt.supabase.in/storage/v1/object/public/resources","/").concat(n.value,"/").concat(e.value,"/challenge.json"),a.prev=2,a.next=5,v().get(u);case 5:return a.next=7,a.sent.data;case 7:o=a.sent,r.value=o,a.next=14;break;case 11:a.prev=11,a.t0=a["catch"](2),t.replace("/");case 14:case"end":return a.stop()}}),a,null,[[2,11]])})));return function(){return a.apply(this,arguments)}}();return{challenge:r}}const ge=he;var me=ge,be={class:"columns-select"},Ee={for:"numColumns"},we=["value"],Ce={class:"columns-select"},_e={for:"numColumns"},ye=["value"];function Ae(e,n,r,u,o,c){var i=(0,a.up)("Question");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",be,[(0,a._)("label",Ee,(0,T.zw)(e.t("CHALLENGE_VIEW.IMAGES_PER_ROW")),1),(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":n[0]||(n[0]=function(n){return e.tableColumns=n}),name:"numColumns",id:"numColumns"},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.availableColumns,(function(e){return(0,a.wg)(),(0,a.iD)("option",{key:e,value:e},(0,T.zw)(e),9,we)})),128))],512),[[t.bM,e.tableColumns]])]),(0,a._)("div",{id:"questions-table","data-testid":"questions-table",style:(0,T.j5)({"grid-template-columns":"repeat(".concat(e.tableColumns,", 1fr)")})},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.challenge.questions,(function(n,r){return(0,a.wg)(),(0,a.j4)(i,{key:r,question:n,questionNumber:r+1,checkedAnswer:e.checkedAnswers[r],challengeNumber:e.challengeNumber,countryCode:e.countryCode,onAnswer:e.emitAnswer},null,8,["question","questionNumber","checkedAnswer","challengeNumber","countryCode","onAnswer"])})),128))],4),(0,a._)("div",Ce,[(0,a._)("label",_e,(0,T.zw)(e.t("CHALLENGE_VIEW.IMAGES_PER_ROW")),1),(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":n[1]||(n[1]=function(n){return e.tableColumns=n}),name:"numColumns",id:"numColumns"},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.availableColumns,(function(e){return(0,a.wg)(),(0,a.iD)("option",{key:e,value:e},(0,T.zw)(e),9,ye)})),128))],512),[[t.bM,e.tableColumns]])])],64)}var Ne={class:"question"},Le=["alt","src"],Oe={class:"input-container"},ke=["disabled"],Te=["disabled"];function Re(e,n,r,u,o,c){return(0,a.wg)(),(0,a.iD)("div",Ne,[(0,a._)("div",{class:(0,T.C_)(["image-container",e.status]),"data-testid":"image-container"},[(0,a._)("img",{alt:e.question.altText,src:"".concat(e.imagesBucket,"/").concat(e.countryCode,"/").concat(e.challengeNumber,"/").concat(e.questionNumber,".png")},null,8,Le)],2),(0,a._)("div",Oe,[(0,a._)("label",null,(0,T.zw)(e.questionNumber)+" - ",1),(0,a.wy)((0,a._)("input",{disabled:"valid"===e.status,"onUpdate:modelValue":n[0]||(n[0]=function(n){return e.inputText=n})},null,8,ke),[[t.nr,e.inputText]]),(0,a._)("button",{disabled:"valid"===e.status,onClick:n[1]||(n[1]=function(){return e.emitAnswer&&e.emitAnswer.apply(e,arguments)})},"✔️",8,Te)])])}var He;r(3210);(function(e){e["Error"]="error",e["Clean"]="clean",e["Valid"]="valid"})(He||(He={}));var Ie=(0,a.aZ)({emits:["answer"],props:{question:{type:Object,required:!0},checkedAnswer:{type:Object},questionNumber:{type:Number,required:!0},challengeNumber:{type:Number,required:!0},countryCode:{type:String,required:!0}},setup:function(e,n){var r=(0,ae.BK)(e),t=r.checkedAnswer,u=r.questionNumber,o=(0,ae.iH)(""),c=(0,ae.iH)(He.Clean),i=function(){n.emit("answer",o.value.trim().replace(/\s{2,}/g," "),u.value)},s=function(e){o.value=(null===e||void 0===e?void 0:e.text)||"",c.value=e?e.isValid?He.Valid:He.Error:He.Clean};(0,a.bv)((function(){return s(t.value)})),(0,a.YP)(t,(function(){return s(t.value)}));var l=(0,a.Fl)((function(){return"https://vshirurkfkcqdabtrcnt.supabase.in/storage/v1/object/public/resources"}));return{inputText:o,status:c,emitAnswer:i,imagesBucket:l}}});const Se=(0,L.Z)(Ie,[["render",Re],["__scopeId","data-v-0e9fd073"]]);var xe=Se,Ze=(0,a.aZ)({components:{Question:xe},emits:["answer"],props:{checkedAnswers:{type:Object,required:!0},challenge:{type:Object,required:!0},challengeNumber:{type:Number,required:!0},countryCode:{type:String,required:!0}},setup:function(e,n){var r=(0,M.QT)(),t=r.t,a=(0,ae.iH)(window.innerWidth>992?[3,4,5,6]:[1,2]),u=(0,ae.iH)(window.innerWidth>992?4:1),o=function(e,r){n.emit("answer",e,r)};return{tableColumns:u,availableColumns:a,emitAnswer:o,t:t}}});const ze=(0,L.Z)(Ze,[["render",Ae]]);var We=ze,qe=(0,a.aZ)({props:{challengeNumber:{type:Number,required:!0},countryCode:{type:String,required:!0}},components:{QuestionsTable:We},setup:function(e){var n=(0,ae.BK)(e),r=n.challengeNumber,t=n.countryCode,u=(0,ae.iH)(!0),o=(0,M.QT)(),c=o.t,i=me(r,t),s=i.challenge,l=fe(t,r,s),d=l.checkedAnswers,f=l.checkAnswer,v=l.countOfValidAnswers,h=function(e,n){f(e,n)};return(0,a.YP)([s],(0,p.Z)(regeneratorRuntime.mark((function e(){var n,a,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=s.value.questions.length,v.value!==n){e.next=4;break}return u.value=!0,e.abrupt("return");case 4:return e.next=6,_.from("correct_answers").select("id").like("country_code",t.value).eq("challenge_number",r.value).eq("correct_answers_count",n);case 6:if(a=e.sent,o=a.data,c=a.error,!(c||!o||o.length>0)){e.next=12;break}return u.value=!0,e.abrupt("return");case 12:u.value=!1;case 13:case"end":return e.stop()}}),e)})))),{challenge:s,hasBeenCompleted:u,checkedAnswers:d,countOfValidAnswers:v,onAnswer:h,t:c}}});const Me=(0,L.Z)(qe,[["render",te],["__scopeId","data-v-eedc621a"]]);var Ue=Me,Ve=(0,a._)("hr",null,null,-1),Ye={class:"regular",rel:"noopener noreferrer",target:"_blank",href:"https://robertmengual.com/projects;project=toberquizz"},Ge=(0,a._)("span",{class:"regular"},"Robert Mengual",-1),je=(0,a.Uk)(". ");function De(e,n,r,t,u,o){return(0,a.wg)(),(0,a.iD)("footer",null,[Ve,(0,a._)("p",null,[(0,a.Uk)((0,T.zw)(e.t("FOOTER.MISSION"))+" ",1),(0,a._)("a",Ye,(0,T.zw)(e.t("FOOTER.CONTRIBUTE")),1)]),(0,a._)("p",null,[(0,a.Uk)((0,T.zw)(e.t("FOOTER.MADE_BY"))+" ",1),Ge,je])])}var Pe=(0,a.aZ)({setup:function(){var e=(0,M.QT)(),n=e.t;return{t:n}}});const Be=(0,L.Z)(Pe,[["render",De]]);var Je=Be,Qe={id:"app-bar"};function Fe(e,n,r,t,u,o){return(0,a.wg)(),(0,a.iD)("div",Qe,[(0,a._)("img",{class:"pointer",alt:"ToberQuizz logo",onClick:n[0]||(n[0]=function(){return e.goToHomeView&&e.goToHomeView.apply(e,arguments)}),src:"/secondary-logo.png"})])}var Ke=(0,a.aZ)({setup:function(){var e=(0,c.tv)(),n=function(){e.push({path:"/"})};return{goToHomeView:n}}});const Xe=(0,L.Z)(Ke,[["render",Fe],["__scopeId","data-v-18b4048e"]]);var $e=Xe,en=(0,a.aZ)({components:{Challenge:Ue,Footer:Je,AppBar:$e},data:function(){return{countryCode:o.Spain,challengeNumber:1,challengeAvailable:!1}},mounted:function(){this.getUrlParams(),Object.values(o).includes(this.countryCode)?this.challengeAvailable=!0:this.$router.replace("/")},methods:{getUrlParams:function(){this.$route.params.countryCode&&this.$route.params.challengeNumber&&(this.countryCode=this.$route.params.countryCode.toUpperCase(),this.challengeNumber=parseInt(this.$route.params.challengeNumber))}},watch:{$route:function(){this.getUrlParams()}}});const nn=(0,L.Z)(en,[["render",F]]);var rn=nn,tn=(r(7941),{id:"view-container"}),an={class:"regular"},un={id:"why-toberquizz"},on={class:"regular",rel:"noopener noreferrer",target:"_blank",href:"https://robertmengual.com/projects;project=toberquizz"},cn={class:"regular list-heading"},sn={class:"list-item not-allowed"},ln={class:"gray"},pn={class:"danger"},dn=["onClick"];function fn(e,n,r,t,u,o){var c=(0,a.up)("AppBar"),i=(0,a.up)("ArrowRight");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(c),(0,a._)("div",tn,[(0,a._)("h2",null,[(0,a.Uk)((0,T.zw)(e.t("CHALLENGE_LIST_VIEW.CHALLENGES_IN"))+" ",1),(0,a._)("span",an,(0,T.zw)(e.t("COUNTRY_LIST.".concat(e.countryCode))),1)]),(0,a._)("p",un,[(0,a._)("a",on,(0,T.zw)(e.t("CHALLENGE_LIST_VIEW.WHY_TOBERQUIZZ")),1)]),(0,a._)("div",null,[(0,a._)("p",cn,(0,T.zw)(e.t("CHALLENGE_LIST_VIEW.SELECT_A_CHALLENGE")),1),(0,a._)("div",sn,[(0,a._)("p",ln,[(0,a.Uk)((0,T.zw)(e.t("CHALLENGE_LIST_VIEW.CHALLENGE",{challengeNumber:e.challenges.length+1}))+" ",1),(0,a._)("span",pn,"("+(0,T.zw)(e.t("MONTHS.MAY"))+")",1)]),(0,a.Wm)(i,{color:"#a0a0a0"})]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(Object.keys(e.challenges).reverse(),(function(n){return(0,a.wg)(),(0,a.iD)("div",{class:"list-item pointer",key:n,onClick:function(r){return e.goToChallengeView(parseInt(n)+1)}},[(0,a._)("p",null,(0,T.zw)(e.t("CHALLENGE_LIST_VIEW.CHALLENGE",{challengeNumber:parseInt(n)+1})),1),(0,a.Wm)(i)],8,dn)})),128))])])],64)}var vn=(0,a.aZ)({components:{ArrowRight:D,AppBar:$e},setup:function(){var e=(0,c.tv)(),n=(0,c.yj)(),r=(0,M.QT)(),t=r.t,u=(0,ae.iH)(new Array),i=(0,ae.iH)(o.WorldWide),s=function(r){e.push({path:"/".concat(n.params.countryCode,"/").concat(r)})};(0,a.bv)((function(){var r=n.params.countryCode;Object.values(o).includes(r)?(i.value=r,l()):e.replace("/")}));var l=function(){var e=(0,p.Z)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n="".concat("https://vshirurkfkcqdabtrcnt.supabase.in/storage/v1/object/public/resources","/").concat(i.value,"/challenges.json"),e.next=3,v().get(n);case 3:return e.next=5,e.sent.data;case 5:r=e.sent,u.value=r;case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{goToChallengeView:s,challenges:u,t:t,countryCode:i}}});const hn=(0,L.Z)(vn,[["render",fn],["__scopeId","data-v-2b7e4701"]]);var gn=hn,mn=[{path:"/",component:J},{path:"/:countryCode",component:gn},{path:"/:countryCode/:challengeNumber",component:rn}],bn=(0,c.p7)({history:(0,c.r5)("/"),routes:mn}),En=bn,wn=(r(3123),JSON.parse('{"MONTHS":{"JANUARY":"January","FEBRUARY":"February","MARCH":"March","APRIL":"April","MAY":"May","JUNE":"June","JULY":"July","AUGUST":"August","SEPTEMBER":"September","OCTOBER":"October","NOVEMBER":"November","DECEMBER":"December"},"COUNTRY_LIST":{"ES":"Spain (Spanish)","WW":"International (English)"},"HOME_VIEW":{"FREE_CHALLENGES":"<span class=\\"regular\\">Free</span> challenges","ETHICAL_TECHNOLOGY":"<span class=\\"regular\\">Ethical</span> technology","SELECT_A_COUNTRY":"Select a country"},"CHALLENGE_LIST_VIEW":{"CHALLENGE":"Challenge {challengeNumber}","SELECT_A_CHALLENGE":"Select a challenge","WHY_TOBERQUIZZ":"Why ToberQuizz?","CHALLENGES_IN":"Challenges in "},"CHALLENGE_VIEW":{"CHALLENGE":"Challenge {challengeNumber}","CHALLENGE_NOT_RESOLVED":"This challenge has not been completed by anybody yet!","HOOK":"Will you guess all?","CORRECT_ANSWERS":"Correct answers","IMAGES_PER_ROW":"Images per row: "},"FOOTER":{"MADE_BY":"Made for you with much ❤️ by","CONTRIBUTE":"Do you want to know why and how to contribute?","MISSION":"ToberQuizz is completely free and its mission is purely charitable."}}')),Cn=JSON.parse('{"MONTHS":{"JANUARY":"Enero","FEBRUARY":"Febrero","MARCH":"Marzo","APRIL":"Abril","MAY":"Mayo","JUNE":"Junio","JULY":"Julio","AUGUST":"Agosto","SEPTEMBER":"Septiembre","OCTOBER":"Octubre","NOVEMBER":"Noviembre","DECEMBER":"Diciembre"},"COUNTRY_LIST":{"ES":"España (español)","WW":"Internacional (inglés)"},"HOME_VIEW":{"FREE_CHALLENGES":"Desafíos <span class=\\"regular\\">gratuitos</span>","ETHICAL_TECHNOLOGY":"Tecnología <span class=\\"regular\\">ética</span>","SELECT_A_COUNTRY":"Selecciona un país"},"CHALLENGE_LIST_VIEW":{"CHALLENGE":"Desafío {challengeNumber}","SELECT_A_CHALLENGE":"Selecciona un desafío","WHY_TOBERQUIZZ":"¿Por qué ToberQuizz?","CHALLENGES_IN":"Desafíos en "},"CHALLENGE_VIEW":{"CHALLENGE":"Desafío {challengeNumber}","CHALLENGE_NOT_RESOLVED":"¡Este desafío todavía no ha sido completado por nadie!","HOOK":"¿Eres capaz de adivinar todos?","CORRECT_ANSWERS":"Aciertos","IMAGES_PER_ROW":"Imágenes por fila: "},"FOOTER":{"MADE_BY":"Hecho para ti con mucho ❤️ por","CONTRIBUTE":"¿Quieres saber por qué y cómo contribuir?","MISSION":"ToberQuizz es totalmente gratuito y su misión es puramente solidaria."}}'),_n=(0,M.o)({messages:{en:wn,es:Cn},locale:["ca","gl","eu"].includes(navigator.language.split("-")[0])?"es":navigator.language.split("-")[0],fallbackLocale:"en"});(0,t.ri)(k).use(_n).use(En).mount("#app")},8866:function(){}},n={};function r(t){var a=n[t];if(void 0!==a)return a.exports;var u=n[t]={id:t,loaded:!1,exports:{}};return e[t].call(u.exports,u,u.exports,r),u.loaded=!0,u.exports}r.m=e,function(){var e=[];r.O=function(n,t,a,u){if(!t){var o=1/0;for(l=0;l<e.length;l++){t=e[l][0],a=e[l][1],u=e[l][2];for(var c=!0,i=0;i<t.length;i++)(!1&u||o>=u)&&Object.keys(r.O).every((function(e){return r.O[e](t[i])}))?t.splice(i--,1):(c=!1,u<o&&(o=u));if(c){e.splice(l--,1);var s=a();void 0!==s&&(n=s)}}return n}u=u||0;for(var l=e.length;l>0&&e[l-1][2]>u;l--)e[l]=e[l-1];e[l]=[t,a,u]}}(),function(){r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,{a:n}),n}}(),function(){var e,n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};r.t=function(t,a){if(1&a&&(t=this(t)),8&a)return t;if("object"===typeof t&&t){if(4&a&&t.__esModule)return t;if(16&a&&"function"===typeof t.then)return t}var u=Object.create(null);r.r(u);var o={};e=e||[null,n({}),n([]),n(n)];for(var c=2&a&&t;"object"==typeof c&&!~e.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((function(e){o[e]=function(){return t[e]}}));return o["default"]=function(){return t},r.d(u,o),u}}(),function(){r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(n,t){return r.f[t](e,n),n}),[]))}}(),function(){r.u=function(e){return"js/"+e+"-legacy."+{486:"c757427b",645:"117081fb"}[e]+".js"}}(),function(){r.miniCssF=function(e){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="toberquizz:";r.l=function(t,a,u,o){if(e[t])e[t].push(a);else{var c,i;if(void 0!==u)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var p=s[l];if(p.getAttribute("src")==t||p.getAttribute("data-webpack")==n+u){c=p;break}}c||(i=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.setAttribute("data-webpack",n+u),c.src=t),e[t]=[a];var d=function(n,r){c.onerror=c.onload=null,clearTimeout(f);var a=e[t];if(delete e[t],c.parentNode&&c.parentNode.removeChild(c),a&&a.forEach((function(e){return e(r)})),n)return n(r)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),i&&document.head.appendChild(c)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){r.p="/"}(),function(){var e={143:0};r.f.j=function(n,t){var a=r.o(e,n)?e[n]:void 0;if(0!==a)if(a)t.push(a[2]);else{var u=new Promise((function(r,t){a=e[n]=[r,t]}));t.push(a[2]=u);var o=r.p+r.u(n),c=new Error,i=function(t){if(r.o(e,n)&&(a=e[n],0!==a&&(e[n]=void 0),a)){var u=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+n+" failed.\n("+u+": "+o+")",c.name="ChunkLoadError",c.type=u,c.request=o,a[1](c)}};r.l(o,i,"chunk-"+n,n)}},r.O.j=function(n){return 0===e[n]};var n=function(n,t){var a,u,o=t[0],c=t[1],i=t[2],s=0;if(o.some((function(n){return 0!==e[n]}))){for(a in c)r.o(c,a)&&(r.m[a]=c[a]);if(i)var l=i(r)}for(n&&n(t);s<o.length;s++)u=o[s],r.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return r.O(l)},t=self["webpackChunktoberquizz"]=self["webpackChunktoberquizz"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=r.O(void 0,[998],(function(){return r(369)}));t=r.O(t)})();
//# sourceMappingURL=app-legacy.367da655.js.map