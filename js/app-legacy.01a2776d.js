(function(){var e={3938:function(e,n,r){"use strict";r(6992),r(8674),r(9601),r(7727);var t=r(9963),a=r(6252);function u(e,n,r,t,u,o){var c=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(c)}var o,c=r(2119),i=r(5137),s=r(6958),l=r(6767),p=r(5669),d=(r(5666),r(2222),r(7327),r(1539),r(1249),r(8862),r(8602)),h=r(9669),g=r.n(h);(function(e){e["Spain"]="ES",e["WorldWide"]="WW"})(o||(o={}));var f=r(7867),v=r(8842),E=r(8598),m=(r(9826),r(8783),r(3948),r(477)),b=r.n(m),_=(0,f.Z)((function e(){(0,v.Z)(this,e)}));(0,E.Z)(_,"SALT","Tobertet"),(0,E.Z)(_,"HASH_LENGTH",32),(0,E.Z)(_,"TYPE",b().ArgonType.Argon2id),(0,E.Z)(_,"isAnswerValid",function(){var e=(0,p.Z)(regeneratorRuntime.mark((function e(n,r){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b().hash({pass:n.toLocaleLowerCase(),salt:_.SALT,hashLen:_.HASH_LENGTH,type:_.TYPE});case 2:return t=e.sent,e.abrupt("return",!!r.solutions.find((function(e){return e===t.hashHex})));case 4:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()),(0,E.Z)(_,"checkAnswer",function(){var e=(0,p.Z)(regeneratorRuntime.mark((function e(n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=n,e.next=3,_.isAnswerValid(n,r);case 3:return e.t1=e.sent,e.abrupt("return",{text:e.t0,isValid:e.t1});case 5:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()),(0,E.Z)(_,"checkAnswers",function(){var e=(0,p.Z)(regeneratorRuntime.mark((function e(n,r){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(t=[],a=0;a<n.length;a++)n[a]&&(t[a]=_.checkAnswer(n[a],r[a]));return e.next=4,Promise.all(t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}());var C=r(2619),w=(0,C.eI)("https://vshirurkfkcqdabtrcnt.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzaGlydXJrZmtjcWRhYnRyY250Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxODEwNTYsImV4cCI6MTk2MDc1NzA1Nn0.7aJF0QXcKziX2n3fgI8wdoW1_BqPuY40biwYXnPytUE"),A=[{countryCode:o.WorldWide,challengeNumber:1},{countryCode:o.Spain,challengeNumber:1},{countryCode:o.Spain,challengeNumber:2},{countryCode:o.Spain,challengeNumber:3}],y=function(){var e=(0,p.Z)(regeneratorRuntime.mark((function e(){var n,r,t,a,u,o,c,i,p,h,f,v,E,m,b,C,y;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d.K.get({key:"PreviousCorrectAnswersCheck"});case 2:if(n=e.sent.value,!n){e.next=5;break}return e.abrupt("return");case 5:r=(0,l.Z)(A),e.prev=6,r.s();case 8:if((t=r.n()).done){e.next=45;break}return a=t.value,e.next=12,d.K.get({key:"".concat(a.countryCode,"_").concat(a.challengeNumber)});case 12:if(u=e.sent.value,u){e.next=15;break}return e.abrupt("continue",43);case 15:return o=JSON.parse(u),c="".concat("https://vshirurkfkcqdabtrcnt.supabase.in/storage/v1/object/public/resources","/").concat(a.countryCode,"/").concat(a.challengeNumber,"/challenge.json"),e.next=19,g().get(c);case 19:return e.next=21,e.sent.data;case 21:return i=e.sent,e.next=24,_.checkAnswers(o,i.questions);case 24:if(p=e.sent,h=p.filter((function(e){return e&&e.isValid})).length,0!==h){e.next=28;break}return e.abrupt("continue",43);case 28:for(f=[],v=1;v<=h;v++)f.push({countryCode:a.countryCode,challengeNumber:a.challengeNumber,correctAnswersCount:v});return e.next=32,w.from("correct_answers").insert(f.map((function(e){return{country_code:e.countryCode,challenge_number:e.challengeNumber,correct_answers_count:e.correctAnswersCount}})),{returning:"minimal"});case 32:if(E=e.sent,m=E.error,!m){e.next=43;break}return b=new Array,e.next=38,d.K.get({key:"API_QUEUE"});case 38:return C=e.sent.value,C&&(b=JSON.parse(C)),y=[].concat((0,s.Z)(b),f),e.next=43,d.K.set({key:"API_QUEUE",value:JSON.stringify(y)});case 43:e.next=8;break;case 45:e.next=50;break;case 47:e.prev=47,e.t0=e["catch"](6),r.e(e.t0);case 50:return e.prev=50,r.f(),e.finish(50);case 53:return e.next=55,d.K.set({key:"PreviousCorrectAnswersCheck",value:"CHECK"});case 55:case"end":return e.stop()}}),e,null,[[6,47,50,53]])})));return function(){return e.apply(this,arguments)}}(),N=(0,a.aZ)({setup:function(){var e=(0,c.tv)();(0,a.bv)((function(){y()})),i.g.addListener("backButton",(function(){"/"===e.currentRoute.value.fullPath?i.g.exitApp():e.back()}))}}),S=r(3744);const L=(0,S.Z)(N,[["render",u]]);var T=L,O=r(3577),R=function(e){return(0,a.dD)("data-v-6dc8cdbc"),e=e(),(0,a.Cn)(),e},k={id:"view-container"},H={id:"logo-container"},I=R((function(){return(0,a._)("img",{alt:"ToberQuizz logo",src:"/logo256x256.png"},null,-1)})),z=["innerHTML"],x=["innerHTML"],W={id:"share-button"},G=["href"],V={class:"regular list-heading"},Z=["onClick"];function q(e,n,r,t,u,o){var c=(0,a.up)("ShareIcon"),i=(0,a.up)("ArrowRight");return(0,a.wg)(),(0,a.iD)("div",k,[(0,a._)("div",H,[I,(0,a._)("div",null,[(0,a._)("p",{innerHTML:e.t("HOME_VIEW.FREE_CHALLENGES")},null,8,z),(0,a._)("p",{innerHTML:e.t("HOME_VIEW.ETHICAL_TECHNOLOGY")},null,8,x)])]),(0,a._)("p",W,[(0,a._)("a",{href:"whatsapp://send?text="+e.t("HOME_VIEW.SHARE_MESSAGE"),"data-action":"share/whatsapp/share",target:"_blank"},[(0,a.Uk)((0,O.zw)(e.t("HOME_VIEW.SHARE"))+" ",1),(0,a.Wm)(c,{color:"#ffa316"})],8,G)]),(0,a._)("div",null,[(0,a._)("p",V,(0,O.zw)(e.t("HOME_VIEW.SELECT_A_COUNTRY")),1),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.quizzCountries,(function(n){return(0,a.wg)(),(0,a.iD)("div",{class:"list-item",key:n,onClick:function(r){return e.goToChallengeListView(n)}},[(0,a._)("p",null,(0,O.zw)(e.t("COUNTRY_LIST.".concat(n))+" ("+e.t("LANGUAGE_LIST.".concat(n))+")"),1),(0,a.Wm)(i)],8,Z)})),128))])])}r(2479);var M=r(9150),U={width:"24",height:"27",viewBox:"0 0 10 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"},D=["fill"];function Y(e,n,r,t,u,o){return(0,a.wg)(),(0,a.iD)("svg",U,[(0,a._)("path",{d:"M1.3641 0.657318C1.17484 0.456231 0.858405 0.446642 0.657318\n    0.6359C0.456231 0.825158 0.446642 1.1416 0.6359 1.34268L1.3641 0.657318ZM9\n    9.5L9.3641 9.84268C9.5453 9.65016 9.5453 9.34984 9.3641 9.15732L9\n    9.5ZM0.6359 17.6573C0.446642 17.8584 0.456231 18.1748 0.657318\n    18.3641C0.858405 18.5534 1.17484 18.5438 1.3641 18.3427L0.6359\n    17.6573ZM0.6359 1.34268L8.6359 9.84268L9.3641 9.15732L1.3641 0.657318L0.6359\n    1.34268ZM8.6359 9.15732L0.6359 17.6573L1.3641 18.3427L9.3641 9.84268L8.6359\n    9.15732Z",fill:e.color},null,8,D)])}var j=(0,a.aZ)({props:{color:{type:String,required:!1,default:"#170A09"}}});const P=(0,S.Z)(j,[["render",Y]]);var B=P,Q=["fill"],J=(0,a._)("path",{d:"M 18 2 A 3 3 0 0 0 15 5 A 3 3 0 0 0 15.054688 5.5605469 L 7.9394531 9.7109375 A 3 3 0 0 0 6 9 A 3 3 0 0 0 3 12 A 3 3 0 0 0 6 15 A 3 3 0 0 0 7.9355469 14.287109 L 15.054688 18.439453 A 3 3 0 0 0 15 19 A 3 3 0 0 0 18 22 A 3 3 0 0 0 21 19 A 3 3 0 0 0 18 16 A 3 3 0 0 0 16.0625 16.712891 L 8.9453125 12.560547 A 3 3 0 0 0 9 12 A 3 3 0 0 0 8.9453125 11.439453 L 16.060547 7.2890625 A 3 3 0 0 0 18 8 A 3 3 0 0 0 21 5 A 3 3 0 0 0 18 2 z"},null,-1),K=[J];function F(e,n,r,t,u,o){return(0,a.wg)(),(0,a.iD)("svg",{fill:e.color,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24px",height:"24px"},K,8,Q)}var X=(0,a.aZ)({props:{color:{type:String,required:!1,default:"#170A09"}}});const $=(0,S.Z)(X,[["render",F]]);var ee=$,ne=(0,a.aZ)({components:{ArrowRight:B,ShareIcon:ee},setup:function(){var e=Object.values(o),n=(0,M.QT)(),r=n.t,t=(0,c.tv)(),a=function(e){t.push({path:"/".concat(e)})};return{quizzCountries:e,t:r,goToChallengeListView:a}}});const re=(0,S.Z)(ne,[["render",q],["__scopeId","data-v-6dc8cdbc"]]);var te=re,ae={id:"view-container"};function ue(e,n,r,t,u,o){var c=(0,a.up)("AppBar"),i=(0,a.up)("Challenge"),s=(0,a.up)("Footer");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(c),(0,a._)("div",ae,[e.challengeAvailable?((0,a.wg)(),(0,a.j4)(i,{key:0,countryCode:e.countryCode,challengeNumber:e.challengeNumber},null,8,["countryCode","challengeNumber"])):(0,a.kq)("",!0),(0,a.Wm)(s)])],64)}r(6699),r(2023),r(4916),r(5306),r(2526),r(1817);var oe=function(e){return(0,a.dD)("data-v-480f1810"),e=e(),(0,a.Cn)(),e},ce={class:"regular"},ie={class:"info-box"},se=["href"],le={class:"description"},pe={key:0,class:"danger-box"},de=oe((function(){return(0,a._)("hr",null,null,-1)})),he={id:"sticky-bar"};function ge(e,n,r,t,u,o){var c=(0,a.up)("ShareIcon"),i=(0,a.up)("QuestionsTable");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("h2",ce,(0,O.zw)(e.t("CHALLENGE_VIEW.CHALLENGE",{challengeNumber:e.challengeNumber})),1),(0,a._)("div",ie,[(0,a._)("p",null,(0,O.zw)(e.t("CHALLENGE_VIEW.SHARE_HOOK")),1),(0,a._)("p",null,[(0,a._)("a",{href:"whatsapp://send?text="+e.t("CHALLENGE_VIEW.SHARE_MESSAGE",{countryCode:e.countryCode,countryName:e.t("COUNTRY_LIST.".concat(e.countryCode)),challengeNumber:e.challengeNumber}),"data-action":"share/whatsapp/share",target:"_blank"},[(0,a.Uk)((0,O.zw)(e.t("HOME_VIEW.SHARE"))+" ",1),(0,a.Wm)(c,{color:"#1366c9"})],8,se)])]),(0,a._)("p",le,(0,O.zw)(e.challenge.description),1),(0,a._)("p",null,(0,O.zw)(e.t("CHALLENGE_VIEW.HOOK")),1),e.hasBeenCompleted?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",pe,(0,O.zw)(e.t("CHALLENGE_VIEW.CHALLENGE_NOT_RESOLVED")),1)),de,(0,a.Wm)(i,{challengeNumber:e.challengeNumber,countryCode:e.countryCode,challenge:e.challenge,checkedAnswers:e.checkedAnswers,onAnswer:e.onAnswer},null,8,["challengeNumber","countryCode","challenge","checkedAnswers","onAnswer"]),(0,a._)("div",he,[(0,a._)("div",null,(0,O.zw)(e.t("CHALLENGE_VIEW.CORRECT_ANSWERS"))+": "+(0,O.zw)(e.countOfValidAnswers)+" / "+(0,O.zw)(e.challenge.questions.length),1)])],64)}r(9653);var fe=r(2262);function ve(e,n){var r=(0,fe.iH)([]);(0,a.bv)((function(){t()})),(0,a.YP)([e,n],(function(){e.value&&n.value&&t()})),(0,a.YP)(r,(function(e){void 0!==e&&e!==[]&&u(e)}));var t=function(){var t=(0,p.Z)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d.K.get({key:"".concat(n.value,"_").concat(e.value)});case 2:if(a=t.sent.value,a){t.next=6;break}return r.value=[],t.abrupt("return");case 6:r.value=JSON.parse(a);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(r){d.K.set({key:"".concat(n.value,"_").concat(e.value),value:JSON.stringify(r)})};return{storageAnswers:r}}const Ee=ve;var me=Ee;function be(){var e=function(){var e=(0,p.Z)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d.K.get({key:"API_QUEUE"});case 2:if(n=e.sent.value,n){e.next=5;break}return e.abrupt("return",[]);case 5:return e.abrupt("return",JSON.parse(n));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=function(e){return d.K.set({key:"API_QUEUE",value:JSON.stringify(e)})},r=function(){return d.K.remove({key:"API_QUEUE"})},t=function(){var r=(0,p.Z)(regeneratorRuntime.mark((function r(t){var u,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e();case 2:return u=r.sent,o=[].concat((0,s.Z)(u),[t]),r.next=6,n(o);case 6:a();case 7:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),a=function(){var n=(0,p.Z)(regeneratorRuntime.mark((function n(){var t,a,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e();case 2:return t=n.sent,n.next=5,w.from("correct_answers").insert(t.map((function(e){return{country_code:e.countryCode,challenge_number:e.challengeNumber,correct_answers_count:e.correctAnswersCount}})),{returning:"minimal"});case 5:if(a=n.sent,u=a.error,u){n.next=10;break}return n.next=10,r();case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return{pushCorrectAnswersCountEvent:t}}const _e=be;var Ce=_e;function we(e,n,r){var t=(0,fe.iH)([]),u=me(n,e),o=u.storageAnswers,c=Ce(),i=c.pushCorrectAnswersCountEvent;(0,a.YP)([o,r],(0,p.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(r.value.questions.length>0)){e.next=4;break}return e.next=3,_.checkAnswers(o.value,r.value.questions);case 3:t.value=e.sent;case 4:case"end":return e.stop()}}),e)}))));var l=function(){var t=(0,p.Z)(regeneratorRuntime.mark((function t(a,u){var c,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,_.isAnswerValid(a,r.value.questions[u-1]);case 2:c=t.sent,c&&i({countryCode:e.value,challengeNumber:n.value,correctAnswersCount:d.value+1}),l=(0,s.Z)(o.value),l[u-1]=a,o.value=l;case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),d=(0,a.Fl)((function(){return t.value.filter((function(e){return e&&e.isValid})).length}));return{checkedAnswers:t,checkAnswer:l,countOfValidAnswers:d}}const Ae=we;var ye=Ae,Ne={description:"",questions:[],startingDate:""};function Se(e,n){var r=(0,fe.iH)(Ne),t=(0,c.tv)();(0,a.bv)((function(){e.value&&n.value&&u()})),(0,a.YP)([e,n],(function(){e.value&&n.value&&u()}));var u=function(){var a=(0,p.Z)(regeneratorRuntime.mark((function a(){var u,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r.value=Ne,u="".concat("https://vshirurkfkcqdabtrcnt.supabase.in/storage/v1/object/public/resources","/").concat(n.value,"/").concat(e.value,"/challenge.json"),a.prev=2,a.next=5,g().get(u);case 5:return a.next=7,a.sent.data;case 7:o=a.sent,r.value=o,a.next=14;break;case 11:a.prev=11,a.t0=a["catch"](2),t.replace("/");case 14:case"end":return a.stop()}}),a,null,[[2,11]])})));return function(){return a.apply(this,arguments)}}();return{challenge:r}}const Le=Se;var Te=Le,Oe={class:"columns-select"},Re={for:"numColumns"},ke=["value"],He={class:"columns-select"},Ie={for:"numColumns"},ze=["value"];function xe(e,n,r,u,o,c){var i=(0,a.up)("Question");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",Oe,[(0,a._)("label",Re,(0,O.zw)(e.t("CHALLENGE_VIEW.IMAGES_PER_ROW")),1),(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":n[0]||(n[0]=function(n){return e.tableColumns=n}),name:"numColumns",id:"numColumns"},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.availableColumns,(function(e){return(0,a.wg)(),(0,a.iD)("option",{key:e,value:e},(0,O.zw)(e),9,ke)})),128))],512),[[t.bM,e.tableColumns]])]),(0,a._)("div",{id:"questions-table","data-testid":"questions-table",style:(0,O.j5)({"grid-template-columns":"repeat(".concat(e.tableColumns,", 1fr)")})},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.challenge.questions,(function(n,r){return(0,a.wg)(),(0,a.j4)(i,{key:r,question:n,questionNumber:r+1,checkedAnswer:e.checkedAnswers[r],challengeNumber:e.challengeNumber,countryCode:e.countryCode,onAnswer:e.emitAnswer},null,8,["question","questionNumber","checkedAnswer","challengeNumber","countryCode","onAnswer"])})),128))],4),(0,a._)("div",He,[(0,a._)("label",Ie,(0,O.zw)(e.t("CHALLENGE_VIEW.IMAGES_PER_ROW")),1),(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":n[1]||(n[1]=function(n){return e.tableColumns=n}),name:"numColumns",id:"numColumns"},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.availableColumns,(function(e){return(0,a.wg)(),(0,a.iD)("option",{key:e,value:e},(0,O.zw)(e),9,ze)})),128))],512),[[t.bM,e.tableColumns]])])],64)}var We={class:"question"},Ge=["alt","src"],Ve={class:"input-container"},Ze=["disabled"],qe=["disabled"];function Me(e,n,r,u,o,c){return(0,a.wg)(),(0,a.iD)("div",We,[(0,a._)("div",{class:(0,O.C_)(["image-container",e.status]),"data-testid":"image-container"},[(0,a._)("img",{alt:e.question.altText,src:"".concat(e.imagesBucket,"/").concat(e.countryCode,"/").concat(e.challengeNumber,"/").concat(e.questionNumber,".png")},null,8,Ge)],2),(0,a._)("div",Ve,[(0,a._)("label",null,(0,O.zw)(e.questionNumber)+" - ",1),(0,a.wy)((0,a._)("input",{disabled:"valid"===e.status,"onUpdate:modelValue":n[0]||(n[0]=function(n){return e.inputText=n})},null,8,Ze),[[t.nr,e.inputText]]),(0,a._)("button",{disabled:"valid"===e.status,onClick:n[1]||(n[1]=function(){return e.emitAnswer&&e.emitAnswer.apply(e,arguments)})},"✔️",8,qe)])])}var Ue;r(3210);(function(e){e["Error"]="error",e["Clean"]="clean",e["Valid"]="valid"})(Ue||(Ue={}));var De=(0,a.aZ)({emits:["answer"],props:{question:{type:Object,required:!0},checkedAnswer:{type:Object},questionNumber:{type:Number,required:!0},challengeNumber:{type:Number,required:!0},countryCode:{type:String,required:!0}},setup:function(e,n){var r=(0,fe.BK)(e),t=r.checkedAnswer,u=r.questionNumber,o=(0,fe.iH)(""),c=(0,fe.iH)(Ue.Clean),i=function(){n.emit("answer",o.value.trim().replace(/\s{2,}/g," "),u.value)},s=function(e){o.value=(null===e||void 0===e?void 0:e.text)||"",c.value=e?e.isValid?Ue.Valid:Ue.Error:Ue.Clean};(0,a.bv)((function(){return s(t.value)})),(0,a.YP)(t,(function(){return s(t.value)}));var l=(0,a.Fl)((function(){return"https://vshirurkfkcqdabtrcnt.supabase.in/storage/v1/object/public/resources"}));return{inputText:o,status:c,emitAnswer:i,imagesBucket:l}}});const Ye=(0,S.Z)(De,[["render",Me],["__scopeId","data-v-0e9fd073"]]);var je=Ye,Pe=(0,a.aZ)({components:{Question:je},emits:["answer"],props:{checkedAnswers:{type:Object,required:!0},challenge:{type:Object,required:!0},challengeNumber:{type:Number,required:!0},countryCode:{type:String,required:!0}},setup:function(e,n){var r=(0,M.QT)(),t=r.t,a=(0,fe.iH)(window.innerWidth>992?[3,4,5,6]:[1,2]),u=(0,fe.iH)(window.innerWidth>992?4:1),o=function(e,r){n.emit("answer",e,r)};return{tableColumns:u,availableColumns:a,emitAnswer:o,t:t}}});const Be=(0,S.Z)(Pe,[["render",xe]]);var Qe=Be,Je=(0,a.aZ)({props:{challengeNumber:{type:Number,required:!0},countryCode:{type:String,required:!0}},components:{QuestionsTable:Qe,ShareIcon:ee},setup:function(e){var n=(0,fe.BK)(e),r=n.challengeNumber,t=n.countryCode,u=(0,fe.iH)(!0),o=(0,M.QT)(),c=o.t,i=Te(r,t),s=i.challenge,l=ye(t,r,s),d=l.checkedAnswers,h=l.checkAnswer,g=l.countOfValidAnswers,f=function(e,n){h(e,n)};return(0,a.YP)([s],(0,p.Z)(regeneratorRuntime.mark((function e(){var n,a,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=s.value.questions.length,g.value!==n){e.next=4;break}return u.value=!0,e.abrupt("return");case 4:return e.next=6,w.from("correct_answers").select("id").like("country_code",t.value).eq("challenge_number",r.value).eq("correct_answers_count",n);case 6:if(a=e.sent,o=a.data,c=a.error,!(c||!o||o.length>0)){e.next=12;break}return u.value=!0,e.abrupt("return");case 12:u.value=!1;case 13:case"end":return e.stop()}}),e)})))),{challenge:s,hasBeenCompleted:u,checkedAnswers:d,countOfValidAnswers:g,onAnswer:f,t:c}}});const Ke=(0,S.Z)(Je,[["render",ge],["__scopeId","data-v-480f1810"]]);var Fe=Ke,Xe=(0,a._)("hr",null,null,-1),$e={class:"regular",rel:"noopener noreferrer",target:"_blank",href:"https://robertmengual.com/projects;project=toberquizz"},en=(0,a._)("span",{class:"regular"},"Robert Mengual",-1),nn=(0,a.Uk)(". ");function rn(e,n,r,t,u,o){return(0,a.wg)(),(0,a.iD)("footer",null,[Xe,(0,a._)("p",null,[(0,a.Uk)((0,O.zw)(e.t("FOOTER.MISSION"))+" ",1),(0,a._)("a",$e,(0,O.zw)(e.t("FOOTER.CONTRIBUTE")),1)]),(0,a._)("p",null,[(0,a.Uk)((0,O.zw)(e.t("FOOTER.MADE_BY"))+" ",1),en,nn])])}var tn=(0,a.aZ)({setup:function(){var e=(0,M.QT)(),n=e.t;return{t:n}}});const an=(0,S.Z)(tn,[["render",rn]]);var un=an,on={id:"app-bar"};function cn(e,n,r,t,u,o){return(0,a.wg)(),(0,a.iD)("div",on,[(0,a._)("img",{class:"pointer",alt:"ToberQuizz logo",onClick:n[0]||(n[0]=function(){return e.goToHomeView&&e.goToHomeView.apply(e,arguments)}),src:"/secondary-logo.png"})])}var sn=(0,a.aZ)({setup:function(){var e=(0,c.tv)(),n=function(){e.push({path:"/"})};return{goToHomeView:n}}});const ln=(0,S.Z)(sn,[["render",cn],["__scopeId","data-v-18b4048e"]]);var pn=ln,dn=(0,a.aZ)({components:{Challenge:Fe,Footer:un,AppBar:pn},data:function(){return{countryCode:o.Spain,challengeNumber:1,challengeAvailable:!1}},mounted:function(){this.getUrlParams(),Object.values(o).includes(this.countryCode)?this.challengeAvailable=!0:this.$router.replace("/")},methods:{getUrlParams:function(){this.$route.params.countryCode&&this.$route.params.challengeNumber&&(this.countryCode=this.$route.params.countryCode.toUpperCase(),this.challengeNumber=parseInt(this.$route.params.challengeNumber))}},watch:{$route:function(){this.getUrlParams()}}});const hn=(0,S.Z)(dn,[["render",ue]]);var gn=hn,fn={id:"view-container"};function vn(e,n,r,t,u,o){var c=(0,a.up)("AppBar"),i=(0,a.up)("ChallengeStatistics");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(c),(0,a._)("div",fn,[e.challengeNumber&&e.countryCode?((0,a.wg)(),(0,a.j4)(i,{key:0,challengeNumber:e.challengeNumber,countryCode:e.countryCode},null,8,["challengeNumber","countryCode"])):(0,a.kq)("",!0)])],64)}var En=function(e){return(0,a.dD)("data-v-305176c0"),e=e(),(0,a.Cn)(),e},mn={class:"regular"},bn={class:"description"},_n=En((function(){return(0,a._)("hr",null,null,-1)})),Cn={class:"regular"},wn={style:{"margin-bottom":"40px"}},An={id:"sticky-bar"};function yn(e,n,r,t,u,o){var c=(0,a.up)("BarChart");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("h2",mn,(0,O.zw)(e.t("CHALLENGE_VIEW.CHALLENGE",{challengeNumber:e.challengeNumber})),1),(0,a._)("p",bn,(0,O.zw)(e.challenge.description),1),(0,a._)("p",null,(0,O.zw)(e.t("CHALLENGE_VIEW.HOOK")),1),_n,(0,a._)("h3",Cn,(0,O.zw)(e.t("CHALLENGE_STATISTICS_VIEW.CHALLENGE_PROGRESS")),1),(0,a._)("div",wn,[e.chartData?((0,a.wg)(),(0,a.j4)(c,{key:0,chartData:e.chartData,options:e.chartOptions,height:800},null,8,["chartData","options"])):(0,a.kq)("",!0)]),(0,a._)("div",An,[(0,a._)("div",null,(0,O.zw)(e.t("CHALLENGE_VIEW.CORRECT_ANSWERS"))+": "+(0,O.zw)(e.countOfValidAnswers)+" / "+(0,O.zw)(e.challenge.questions.length),1)])],64)}r(1038);var Nn=r(7158),Sn=r(2728);Sn.kL.register(Sn.vn,Sn.ZL,Sn.uw,Sn.f$,Sn.u);var Ln=(0,a.aZ)({props:{challengeNumber:{type:Number,required:!0},countryCode:{type:String,required:!0}},components:{BarChart:Nn.vz},setup:function(e){var n=(0,fe.BK)(e),r=n.challengeNumber,t=n.countryCode,u=(0,fe.iH)(),o=(0,M.QT)(),c=o.t,i=Te(r,t),s=i.challenge,l=ye(t,r,s),d=l.checkedAnswers,h=l.countOfValidAnswers;(0,a.YP)([s],(0,p.Z)(regeneratorRuntime.mark((function e(){var n,a,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=s.value.questions.length,e.next=3,w.rpc("challenge_statistics",{country_code_arg:t.value,challenge_number_arg:r.value});case 3:a=e.sent,o=a.data,c=null===o||void 0===o?void 0:o.map((function(e,n,r){if(0===n)return e;var t={percentage:r[n-1].percentage<e.percentage?r[n-1].percentage:e.percentage};return t})),u.value={labels:Array.from({length:n},(function(e,n){return n+1})),datasets:[{data:(null===c||void 0===c?void 0:c.map((function(e){return e.percentage})))||[]}]};case 7:case"end":return e.stop()}}),e)}))));var g={indexAxis:"y",elements:{bar:{backgroundColor:function(e){return e.dataIndex+1===h.value?"#ffa316":"#4aab79"}}},scales:{y:{title:{display:!0,text:c("CHALLENGE_STATISTICS_VIEW.COUNT_OF_CORRECT_ANSWERS")}},x:{title:{display:!0,text:c("CHALLENGE_STATISTICS_VIEW.USERS_PERCENTAGE")},min:0,max:100,ticks:{callback:function(e){return e+"%"}}}},responsive:!0,plugins:{legend:{display:!1},tooltip:{displayColors:!1,callbacks:{title:function(e){return c("CHALLENGE_STATISTICS_VIEW.X_CORRECT_ANSWERS",{count:e[0].label})},label:function(e){return e.formattedValue+"%"}}}}};return{challenge:s,checkedAnswers:d,countOfValidAnswers:h,t:c,chartData:u,chartOptions:g}}});const Tn=(0,S.Z)(Ln,[["render",yn],["__scopeId","data-v-305176c0"]]);var On=Tn,Rn=(0,a.aZ)({components:{AppBar:pn,ChallengeStatistics:On},setup:function(){var e=(0,fe.iH)(),n=(0,fe.iH)(),r=(0,c.tv)(),t=(0,c.yj)(),u=function(){t.params.countryCode&&t.params.challengeNumber&&(e.value=t.params.countryCode.toUpperCase(),n.value=parseInt(t.params.challengeNumber))};return(0,a.bv)((function(){u(),!e.value||Object.values(o).includes(e.value)||r.replace("/")})),(0,a.YP)([t],(function(){u(),!e.value||Object.values(o).includes(e.value)||r.replace("/")})),{countryCode:e,challengeNumber:n}}});const kn=(0,S.Z)(Rn,[["render",vn]]);var Hn=kn,In=(r(7941),{id:"view-container"}),zn={class:"regular"},xn={id:"why-toberquizz"},Wn={class:"regular",rel:"noopener noreferrer",target:"_blank",href:"https://robertmengual.com/projects;project=toberquizz"},Gn={class:"regular list-heading"},Vn={class:"list-item not-allowed"},Zn={class:"gray"},qn={class:"danger"},Mn=["onClick"],Un={class:"end-icons"};function Dn(e,n,r,u,o,c){var i=(0,a.up)("AppBar"),s=(0,a.up)("ArrowRight"),l=(0,a.up)("StatisticsIcon");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(i),(0,a._)("div",In,[(0,a._)("h2",null,[(0,a.Uk)((0,O.zw)(e.t("CHALLENGE_LIST_VIEW.CHALLENGES_IN"))+" ",1),(0,a._)("span",zn,(0,O.zw)(e.t("COUNTRY_LIST.".concat(e.countryCode))+" ("+e.t("LANGUAGE_LIST.".concat(e.countryCode))+")"),1)]),(0,a._)("p",xn,[(0,a._)("a",Wn,(0,O.zw)(e.t("CHALLENGE_LIST_VIEW.WHY_TOBERQUIZZ")),1)]),(0,a._)("div",null,[(0,a._)("p",Gn,(0,O.zw)(e.t("CHALLENGE_LIST_VIEW.SELECT_A_CHALLENGE")),1),(0,a._)("div",Vn,[(0,a._)("p",Zn,[(0,a.Uk)((0,O.zw)(e.t("CHALLENGE_LIST_VIEW.CHALLENGE",{challengeNumber:e.challenges.length+1}))+" ",1),(0,a._)("span",qn,"("+(0,O.zw)(e.t("MONTHS.MAY"))+")",1)]),(0,a.Wm)(s,{color:"#a0a0a0"})]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(Object.keys(e.challenges).reverse(),(function(n){return(0,a.wg)(),(0,a.iD)("div",{class:"list-item pointer",key:n,onClick:function(r){return e.goToChallengeView(parseInt(n)+1)}},[(0,a._)("p",null,(0,O.zw)(e.t("CHALLENGE_LIST_VIEW.CHALLENGE",{challengeNumber:parseInt(n)+1})),1),(0,a._)("div",Un,[(0,a.Wm)(l,{onClick:(0,t.iM)((function(r){return e.goToChallengeStatisticsView(parseInt(n)+1)}),["stop"])},null,8,["onClick"]),(0,a.Wm)(s)])],8,Mn)})),128))])])],64)}var Yn={version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"24",height:"27","xmlns:xlink":"http://www.w3.org/1999/xlink","enable-background":"new 0 0 512 512"},jn=(0,a._)("g",null,[(0,a._)("g",null,[(0,a._)("path",{d:"m108.5,400.3l77.2-112.8 81.7,78.8c13.7,11.6 27.3,3.1 30.9-3l135.6-194.3 4.9,65c0.8,10.7 9.8,18.9 20.3,18.9 12,0 21.2-10.7 20.4-22l-8.6-114.3c-0.9-11.2-10.6-19.7-21.9-18.8l-114.3,8.6c-11.2,0.8-19.7,10.6-18.8,21.9 0.8,11.2 10.6,19.6 21.9,18.8l65-4.9-124.2,178-81.9-78.9c-5-5.7-20-10.8-31,3.2l-73,106.6v57.9c6.1-0.3 12.1-3.3 15.8-8.7z"}),(0,a._)("path",{d:"M480.6,460.2H51.8V31.4c0-11.3-9.1-20.4-20.4-20.4C20.1,11,11,20.1,11,31.4v449.2c0,11.3,9.1,20.4,20.4,20.4h449.2    c11.3,0,20.4-9.1,20.4-20.4C501,469.3,491.9,460.2,480.6,460.2z"})])],-1),Pn=[jn];function Bn(e,n,r,t,u,o){return(0,a.wg)(),(0,a.iD)("svg",Yn,Pn)}var Qn=(0,a.aZ)({props:{color:{type:String,required:!1,default:"#170A09"}}});const Jn=(0,S.Z)(Qn,[["render",Bn]]);var Kn=Jn,Fn=(0,a.aZ)({components:{ArrowRight:B,AppBar:pn,StatisticsIcon:Kn},setup:function(){var e=(0,c.tv)(),n=(0,c.yj)(),r=(0,M.QT)(),t=r.t,u=(0,fe.iH)(new Array),i=(0,fe.iH)(o.WorldWide),s=function(r){e.push({path:"/".concat(n.params.countryCode,"/").concat(r)})},l=function(r){e.push({path:"/stats/".concat(n.params.countryCode,"/").concat(r)})};(0,a.bv)((function(){var r=n.params.countryCode;Object.values(o).includes(r)?(i.value=r,d()):e.replace("/")}));var d=function(){var e=(0,p.Z)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n="".concat("https://vshirurkfkcqdabtrcnt.supabase.in/storage/v1/object/public/resources","/").concat(i.value,"/challenges.json"),e.next=3,g().get(n);case 3:return e.next=5,e.sent.data;case 5:r=e.sent,u.value=r;case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{goToChallengeView:s,challenges:u,t:t,countryCode:i,goToChallengeStatisticsView:l}}});const Xn=(0,S.Z)(Fn,[["render",Dn],["__scopeId","data-v-7592486c"]]);var $n=Xn,er=[{path:"/",component:te},{path:"/:countryCode",component:$n},{path:"/:countryCode/:challengeNumber",component:gn},{path:"/stats/:countryCode/:challengeNumber",component:Hn}],nr=(0,c.p7)({history:(0,c.r5)("/"),routes:er}),rr=nr,tr=(r(3123),JSON.parse('{"MONTHS":{"JANUARY":"January","FEBRUARY":"February","MARCH":"March","APRIL":"April","MAY":"May","JUNE":"June","JULY":"July","AUGUST":"August","SEPTEMBER":"September","OCTOBER":"October","NOVEMBER":"November","DECEMBER":"December"},"COUNTRY_LIST":{"ES":"Spain","WW":"International"},"LANGUAGE_LIST":{"ES":"Spanish","WW":"English"},"HOME_VIEW":{"FREE_CHALLENGES":"<span class=\\"regular\\">Free</span> challenges","ETHICAL_TECHNOLOGY":"<span class=\\"regular\\">Ethical</span> technology","SELECT_A_COUNTRY":"Select a country","SHARE":"Share","SHARE_MESSAGE":"Discover the challenges of ToberQuizz!%0aWill you be able to guess all of them?%0a%0ahttps://toberquizz.com"},"CHALLENGE_LIST_VIEW":{"CHALLENGE":"Challenge {challengeNumber}","SELECT_A_CHALLENGE":"Select a challenge","WHY_TOBERQUIZZ":"Why ToberQuizz?","CHALLENGES_IN":"Challenges in "},"CHALLENGE_VIEW":{"CHALLENGE":"Challenge {challengeNumber}","CHALLENGE_NOT_RESOLVED":"This challenge has not been completed by anybody yet!","HOOK":"Will you guess all?","CORRECT_ANSWERS":"Correct answers","IMAGES_PER_ROW":"Images per row: ","SHARE_HOOK":"Enjoy ToberQuizz in company! Challenge your contacts and solve all the quizzes.","SHARE_MESSAGE":"Do you dare to complete { countryName }\'s number { challengeNumber } challenge in ToberQuizz?%0a%0ahttps://toberquizz.com/%23/{countryCode}/{challengeNumber}"},"CHALLENGE_STATISTICS_VIEW":{"USERS_PERCENTAGE":"Percentage of users","COUNT_OF_CORRECT_ANSWERS":"Count of correct answers","X_CORRECT_ANSWERS":"{count} correct answers","CHALLENGE_PROGRESS":"Challenge progress"},"FOOTER":{"MADE_BY":"Made for you with much ❤️ by","CONTRIBUTE":"Do you want to know why and how to contribute?","MISSION":"ToberQuizz is completely free and its mission is purely charitable."}}')),ar=JSON.parse('{"MONTHS":{"JANUARY":"Enero","FEBRUARY":"Febrero","MARCH":"Marzo","APRIL":"Abril","MAY":"Mayo","JUNE":"Junio","JULY":"Julio","AUGUST":"Agosto","SEPTEMBER":"Septiembre","OCTOBER":"Octubre","NOVEMBER":"Noviembre","DECEMBER":"Diciembre"},"COUNTRY_LIST":{"ES":"España","WW":"Internacional"},"LANGUAGE_LIST":{"ES":"español","WW":"inglés"},"HOME_VIEW":{"FREE_CHALLENGES":"Desafíos <span class=\\"regular\\">gratuitos</span>","ETHICAL_TECHNOLOGY":"Tecnología <span class=\\"regular\\">ética</span>","SELECT_A_COUNTRY":"Selecciona un país","SHARE":"Compartir","SHARE_MESSAGE":"¡Descubre los desafíos de ToberQuizz!%0a¿Serás capaz de adivinar todos?%0a%0ahttps://toberquizz.com"},"CHALLENGE_LIST_VIEW":{"CHALLENGE":"Desafío {challengeNumber}","SELECT_A_CHALLENGE":"Selecciona un desafío","WHY_TOBERQUIZZ":"¿Por qué ToberQuizz?","CHALLENGES_IN":"Desafíos en "},"CHALLENGE_VIEW":{"CHALLENGE":"Desafío {challengeNumber}","CHALLENGE_NOT_RESOLVED":"¡Este desafío todavía no ha sido completado por nadie!","HOOK":"¿Eres capaz de adivinar todos?","CORRECT_ANSWERS":"Aciertos","IMAGES_PER_ROW":"Imágenes por fila: ","SHARE_HOOK":"¡Disfruta de ToberQuizz en compañía! Reta a tus contactos y resolved todos los desafíos.","SHARE_MESSAGE":"¿Te atreves a completar el desafío número { challengeNumber } de { countryName } en ToberQuizz?%0a%0ahttps://toberquizz.com/%23/{countryCode}/{challengeNumber}"},"CHALLENGE_STATISTICS_VIEW":{"USERS_PERCENTAGE":"Porcentaje de usuarios","COUNT_OF_CORRECT_ANSWERS":"Total de respuestas acertadas","X_CORRECT_ANSWERS":"{count} respuestas acertadas","CHALLENGE_PROGRESS":"Progreso del desafío"},"FOOTER":{"MADE_BY":"Hecho para ti con mucho ❤️ por","CONTRIBUTE":"¿Quieres saber por qué y cómo contribuir?","MISSION":"ToberQuizz es totalmente gratuito y su misión es puramente solidaria."}}'),ur=(0,M.o)({messages:{en:tr,es:ar},locale:["ca","gl","eu"].includes(navigator.language.split("-")[0])?"es":navigator.language.split("-")[0],fallbackLocale:"en"});(0,t.ri)(T).use(ur).use(rr).mount("#app")},8866:function(){}},n={};function r(t){var a=n[t];if(void 0!==a)return a.exports;var u=n[t]={id:t,loaded:!1,exports:{}};return e[t].call(u.exports,u,u.exports,r),u.loaded=!0,u.exports}r.m=e,function(){var e=[];r.O=function(n,t,a,u){if(!t){var o=1/0;for(l=0;l<e.length;l++){t=e[l][0],a=e[l][1],u=e[l][2];for(var c=!0,i=0;i<t.length;i++)(!1&u||o>=u)&&Object.keys(r.O).every((function(e){return r.O[e](t[i])}))?t.splice(i--,1):(c=!1,u<o&&(o=u));if(c){e.splice(l--,1);var s=a();void 0!==s&&(n=s)}}return n}u=u||0;for(var l=e.length;l>0&&e[l-1][2]>u;l--)e[l]=e[l-1];e[l]=[t,a,u]}}(),function(){r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,{a:n}),n}}(),function(){var e,n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};r.t=function(t,a){if(1&a&&(t=this(t)),8&a)return t;if("object"===typeof t&&t){if(4&a&&t.__esModule)return t;if(16&a&&"function"===typeof t.then)return t}var u=Object.create(null);r.r(u);var o={};e=e||[null,n({}),n([]),n(n)];for(var c=2&a&&t;"object"==typeof c&&!~e.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((function(e){o[e]=function(){return t[e]}}));return o["default"]=function(){return t},r.d(u,o),u}}(),function(){r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(n,t){return r.f[t](e,n),n}),[]))}}(),function(){r.u=function(e){return"js/"+e+"-legacy."+{486:"c757427b",645:"117081fb"}[e]+".js"}}(),function(){r.miniCssF=function(e){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="toberquizz:";r.l=function(t,a,u,o){if(e[t])e[t].push(a);else{var c,i;if(void 0!==u)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var p=s[l];if(p.getAttribute("src")==t||p.getAttribute("data-webpack")==n+u){c=p;break}}c||(i=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.setAttribute("data-webpack",n+u),c.src=t),e[t]=[a];var d=function(n,r){c.onerror=c.onload=null,clearTimeout(h);var a=e[t];if(delete e[t],c.parentNode&&c.parentNode.removeChild(c),a&&a.forEach((function(e){return e(r)})),n)return n(r)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),i&&document.head.appendChild(c)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){r.p="/"}(),function(){var e={143:0};r.f.j=function(n,t){var a=r.o(e,n)?e[n]:void 0;if(0!==a)if(a)t.push(a[2]);else{var u=new Promise((function(r,t){a=e[n]=[r,t]}));t.push(a[2]=u);var o=r.p+r.u(n),c=new Error,i=function(t){if(r.o(e,n)&&(a=e[n],0!==a&&(e[n]=void 0),a)){var u=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+n+" failed.\n("+u+": "+o+")",c.name="ChunkLoadError",c.type=u,c.request=o,a[1](c)}};r.l(o,i,"chunk-"+n,n)}},r.O.j=function(n){return 0===e[n]};var n=function(n,t){var a,u,o=t[0],c=t[1],i=t[2],s=0;if(o.some((function(n){return 0!==e[n]}))){for(a in c)r.o(c,a)&&(r.m[a]=c[a]);if(i)var l=i(r)}for(n&&n(t);s<o.length;s++)u=o[s],r.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return r.O(l)},t=self["webpackChunktoberquizz"]=self["webpackChunktoberquizz"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=r.O(void 0,[998],(function(){return r(3938)}));t=r.O(t)})();
//# sourceMappingURL=app-legacy.01a2776d.js.map