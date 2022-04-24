"use strict";(self["webpackChunktoberquizz"]=self["webpackChunktoberquizz"]||[]).push([[212],{1349:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(6252);const l={id:"app-bar"};function u(e,n,t,u,o,a){return(0,r.wg)(),(0,r.iD)("div",l,[(0,r._)("img",{class:"pointer",alt:"ToberQuizz logo",onClick:n[0]||(n[0]=(...n)=>e.goToHomeView&&e.goToHomeView(...n)),src:"/secondary-logo.png"})])}var o=t(2119),a=(0,r.aZ)({setup:()=>{const e=(0,o.tv)(),n=()=>{e.push({path:"/"})};return{goToHomeView:n}}}),s=t(3744);const c=(0,s.Z)(a,[["render",u],["__scopeId","data-v-18b4048e"]]);var i=c},7265:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(6252);const l=["fill"],u=(0,r._)("path",{d:"M 18 2 A 3 3 0 0 0 15 5 A 3 3 0 0 0 15.054688 5.5605469 L 7.9394531 9.7109375 A 3 3 0 0 0 6 9 A 3 3 0 0 0 3 12 A 3 3 0 0 0 6 15 A 3 3 0 0 0 7.9355469 14.287109 L 15.054688 18.439453 A 3 3 0 0 0 15 19 A 3 3 0 0 0 18 22 A 3 3 0 0 0 21 19 A 3 3 0 0 0 18 16 A 3 3 0 0 0 16.0625 16.712891 L 8.9453125 12.560547 A 3 3 0 0 0 9 12 A 3 3 0 0 0 8.9453125 11.439453 L 16.060547 7.2890625 A 3 3 0 0 0 18 8 A 3 3 0 0 0 21 5 A 3 3 0 0 0 18 2 z"},null,-1),o=[u];function a(e,n,t,u,a,s){return(0,r.wg)(),(0,r.iD)("svg",{fill:e.color,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24px",height:"24px"},o,8,l)}var s=(0,r.aZ)({props:{color:{type:String,required:!1,default:"#170A09"}}}),c=t(3744);const i=(0,c.Z)(s,[["render",a]]);var d=i},6212:function(e,n,t){t.r(n),t.d(n,{default:function(){return le}});var r=t(6252);const l={id:"view-container"};function u(e,n,t,u,o,a){const s=(0,r.up)("AppBar"),c=(0,r.up)("Challenge"),i=(0,r.up)("Footer");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(s),(0,r._)("div",l,[e.countryCode&&e.challengeNumber?((0,r.wg)(),(0,r.j4)(c,{key:0,countryCode:e.countryCode,challengeNumber:e.challengeNumber},null,8,["countryCode","challengeNumber"])):(0,r.kq)("",!0),(0,r.Wm)(i)])],64)}var o=t(2262),a=t(3577);const s=e=>((0,r.dD)("data-v-3e65129a"),e=e(),(0,r.Cn)(),e),c={class:"regular"},i={class:"info-box"},d=["href"],m={class:"description"},p=s((()=>(0,r._)("hr",null,null,-1))),g={id:"sticky-bar"};function b(e,n,t,l,u,o){const s=(0,r.up)("ShareIcon"),b=(0,r.up)("QuestionsTable");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("h2",c,(0,a.zw)(e.t("CHALLENGE_VIEW.CHALLENGE",{challengeNumber:e.challengeNumber})),1),(0,r._)("div",i,[(0,r._)("p",null,(0,a.zw)(e.t("CHALLENGE_VIEW.SHARE_HOOK")),1),(0,r._)("p",null,[(0,r._)("a",{href:"whatsapp://send?text="+e.t("CHALLENGE_VIEW.SHARE_MESSAGE",{countryCode:e.countryCode,countryName:e.t(`COUNTRY_LIST.${e.countryCode}`),challengeNumber:e.challengeNumber}),"data-action":"share/whatsapp/share",target:"_blank"},[(0,r.Uk)((0,a.zw)(e.t("HOME_VIEW.SHARE"))+" ",1),(0,r.Wm)(s,{color:"#1366c9"})],8,d)])]),(0,r._)("p",m,(0,a.zw)(e.challenge.description),1),(0,r._)("p",null,(0,a.zw)(e.t("CHALLENGE_VIEW.HOOK")),1),p,(0,r.Wm)(b,{challengeNumber:e.challengeNumber,countryCode:e.countryCode,challenge:e.challenge,onAnswer:e.onAnswer},null,8,["challengeNumber","countryCode","challenge","onAnswer"]),(0,r._)("div",g,[(0,r._)("div",null,(0,a.zw)(e.t("CHALLENGE_VIEW.CORRECT_ANSWERS"))+": "+(0,a.zw)(e.correctAnswersCount)+" / "+(0,a.zw)(e.challenge.questions.length),1)])],64)}var w=t(9963);const v={class:"columns-select"},C={for:"numColumns"},h=["value"],_={class:"columns-select"},A={for:"numColumns"},N=["value"];function y(e,n,t,l,u,o){const s=(0,r.up)("Question");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",v,[(0,r._)("label",C,(0,a.zw)(e.t("CHALLENGE_VIEW.IMAGES_PER_ROW")),1),(0,r.wy)((0,r._)("select",{"onUpdate:modelValue":n[0]||(n[0]=n=>e.tableColumns=n),name:"numColumns",id:"numColumns"},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.availableColumns,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e,value:e},(0,a.zw)(e),9,h)))),128))],512),[[w.bM,e.tableColumns]])]),(0,r._)("div",{id:"questions-table","data-testid":"questions-table",style:(0,a.j5)({"grid-template-columns":`repeat(${e.tableColumns}, 1fr)`})},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.challenge.questions,((n,t)=>((0,r.wg)(),(0,r.j4)(s,{key:t,question:n,questionNumber:t+1,challengeNumber:e.challengeNumber,countryCode:e.countryCode,onAnswer:e.emitAnswer},null,8,["question","questionNumber","challengeNumber","countryCode","onAnswer"])))),128))],4),(0,r._)("div",_,[(0,r._)("label",A,(0,a.zw)(e.t("CHALLENGE_VIEW.IMAGES_PER_ROW")),1),(0,r.wy)((0,r._)("select",{"onUpdate:modelValue":n[1]||(n[1]=n=>e.tableColumns=n),name:"numColumns",id:"numColumns"},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.availableColumns,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e,value:e},(0,a.zw)(e),9,N)))),128))],512),[[w.bM,e.tableColumns]])])],64)}var E=t(9150);const f={class:"question"},q=["alt","src"],H={class:"input-container"},z=["disabled"],k=["disabled"];function O(e,n,t,l,u,o){return(0,r.wg)(),(0,r.iD)("div",f,[(0,r._)("div",{class:(0,a.C_)(["image-container",e.status]),"data-testid":"image-container"},[(0,r._)("img",{alt:e.question.altText,src:`${e.imagesBucket}/${e.countryCode}/${e.challengeNumber}/${e.questionNumber}.png`},null,8,q)],2),(0,r._)("div",H,[(0,r._)("label",null,(0,a.zw)(e.questionNumber)+" - ",1),(0,r.wy)((0,r._)("input",{disabled:"valid"===e.status,"onUpdate:modelValue":n[0]||(n[0]=n=>e.inputText=n)},null,8,z),[[w.nr,e.inputText]]),(0,r._)("button",{disabled:"valid"===e.status,onClick:n[1]||(n[1]=(...n)=>e.emitAnswer&&e.emitAnswer(...n))},"✔️",8,k)])])}var L,T=t(7807);(function(e){e["Error"]="error",e["Clean"]="clean",e["Valid"]="valid"})(L||(L={}));var I=(0,r.aZ)({emits:["answer"],props:{question:{type:Object,required:!0},questionNumber:{type:Number,required:!0},challengeNumber:{type:Number,required:!0},countryCode:{type:String,required:!0}},setup:(e,n)=>{const{questionNumber:t,question:l}=(0,o.BK)(e),u=(0,o.iH)(""),a=(0,o.iH)(L.Clean),s=()=>{n.emit("answer",u.value.trim().replace(/\s{2,}/g," "),t.value)},c=()=>{const e=(0,T.mJ)(l.value)?l.value.answer:{text:""};u.value=e.text,a.value=e.isCorrect?L.Valid:!1===e.isCorrect?L.Error:L.Clean};(0,r.bv)((()=>c())),(0,r.YP)(l,(()=>c()));const i=(0,r.Fl)((()=>"https://vshirurkfkcqdabtrcnt.supabase.in/storage/v1/object/public/resources"));return{inputText:u,status:a,emitAnswer:s,imagesBucket:i}}}),S=t(3744);const Z=(0,S.Z)(I,[["render",O],["__scopeId","data-v-55cfa924"]]);var R=Z,W=(0,r.aZ)({components:{Question:R},emits:["answer"],props:{challenge:{type:Object,required:!0},challengeNumber:{type:Number,required:!0},countryCode:{type:String,required:!0}},setup:function(e,n){const{t:t}=(0,E.QT)(),r=(0,o.iH)(window.innerWidth>992?[3,4,5,6]:[1,2]),l=(0,o.iH)(window.innerWidth>992?4:1),u=(e,t)=>{n.emit("answer",e,t)};return{tableColumns:l,availableColumns:r,emitAnswer:u,t:t}}});const V=(0,S.Z)(W,[["render",y]]);var D=V,x=t(7265),G=t(2931),j=(0,r.aZ)({props:{challengeNumber:{type:Number,required:!0},countryCode:{type:String,required:!0}},components:{QuestionsTable:D,ShareIcon:x.Z},setup:e=>{const{challengeNumber:n,countryCode:t}=(0,o.BK)(e),{t:r}=(0,E.QT)(),{challenge:l,correctAnswersCount:u}=(0,G.R)(t,n),{answerQuestion:a}=(0,G.P)(),s=async(e,r)=>{l.value=await a(t.value,n.value,l.value,r,{text:e})};return{challenge:l,correctAnswersCount:u,onAnswer:s,t:r}}});const M=(0,S.Z)(j,[["render",b],["__scopeId","data-v-3e65129a"]]);var U=M;const Y=(0,r._)("hr",null,null,-1),B={class:"regular",rel:"noopener noreferrer",target:"_blank",href:"https://robertmengual.com/projects;project=toberquizz"},Q=(0,r._)("span",{class:"regular"},"Robert Mengual",-1),K=(0,r.Uk)(". ");function F(e,n,t,l,u,o){return(0,r.wg)(),(0,r.iD)("footer",null,[Y,(0,r._)("p",null,[(0,r.Uk)((0,a.zw)(e.t("FOOTER.MISSION"))+" ",1),(0,r._)("a",B,(0,a.zw)(e.t("FOOTER.CONTRIBUTE")),1)]),(0,r._)("p",null,[(0,r.Uk)((0,a.zw)(e.t("FOOTER.MADE_BY"))+" ",1),Q,K])])}var $=(0,r.aZ)({setup:()=>{const{t:e}=(0,E.QT)();return{t:e}}});const P=(0,S.Z)($,[["render",F]]);var J=P,X=t(1349),ee=t(2085),ne=t(2119),te=(0,r.aZ)({components:{Challenge:U,Footer:J,AppBar:X.Z},setup:()=>{const e=(0,o.iH)(),n=(0,o.iH)(),t=(0,ne.yj)(),l=(0,ne.tv)();(0,r.bv)((()=>{u(),(0,ee.O)(e.value)})),(0,r.YP)([t],(()=>{u(),(0,ee.O)(e.value)}));const u=()=>{if(!t.params.countryCode||!t.params.challengeNumber)return;const r=(t.params.countryCode||"").toUpperCase(),u=parseInt(t.params.challengeNumber);Object.values(T.Cv).includes(r)&&!isNaN(u)?(e.value=r,n.value=u):l.replace("/")};return{countryCode:e,challengeNumber:n}}});const re=(0,S.Z)(te,[["render",u]]);var le=re}}]);
//# sourceMappingURL=212.79b7e770.js.map