import{d as oe,u as ae,r as p,cP as re,K as le,t as D,L as x,A as a,z as o,B as m,N as l,P as V,x as B,ai as y,O as k,ay as ie,ao as ue,a0 as se,a5 as de,a6 as ce,af as ve,a1 as pe,a3 as me,$ as _e,ab as fe,ap as ye,a4 as Ie,a2 as be,b4 as ge,b5 as we,a8 as Se,a9 as Ce,m as $e}from"./0fV2q4Ox.js";import{_ as De,a as xe}from"./IMC4bHQ4.js";import{u as L}from"./rGigr8ii.js";import"./D0r5xylr.js";import"./BJaqhUnt.js";import"./BbFGwhBy.js";const Ve={style:{width:"100%"}},Ne={style:{display:"flex","flex-direction":"row"}},Ee=oe({__name:"queryInverters",setup(ke){const{$api:P}=$e(),N=ae(),_=p("ProductSerial"),v=p(""),{historyUp:U,historyDown:E,historyAdd:Q}=L(v,"queryInvertersInput"),f=p(""),{historyUp:h,historyDown:A,historyAdd:H}=L(f,"queryInvertersInput2"),r=p(null),w=new Date().toISOString().slice(0,-5),c=p({restrictPeriod:!1,periodStart:w,periodEnd:w}),I=re({value:null}),S=p(!1),K=p(100),C=p(null);le(()=>[N.currentRoute.value.query.productSerial,N.currentRoute.value.query.id],([t])=>{N.currentRoute.value.query.tab==="inverterDebug"&&(_.value="ProductSerial",v.value=(t==null?void 0:t.toString())??"",f.value="",c.value.restrictPeriod=!1,$(),b(!0))},{immediate:!0});async function b(t=I.value===null){const e=t?M:O;Q(v.value),H(f.value);const i=c.value.restrictPeriod?{periodStart:new Date(c.value.periodStart).getTime(),periodEnd:new Date(c.value.periodEnd).getTime()}:{};return e({identifierType:_.value,identifierValue:v.value,productCode:_.value==="SerialNumber"?Number(f.value):void 0,...i,meta:{pagination:{limit:K.value,cursorValue:t?void 0:C.value??void 0}}})}function q(t){const e=Object.keys(t);if(e.length===0)throw new Error("No inverters found");const i=[];for(let u=0;u<t[e[0]].length;u++){const s={};for(const d of e)s[d]=t[d][u];i.push(s)}return i}async function M(t){var e,i,u,s;S.value=!0;try{const{data:d,meta:g}=await P.debugInverterData({debugInverterDataRequest:t});I.value=q(d),C.value=((e=g==null?void 0:g.pagination)==null?void 0:e.cursorNext)??null,(i=r==null?void 0:r.value)==null||i.$el.classList.add("ion-valid")}catch{(u=r==null?void 0:r.value)==null||u.$el.classList.add("ion-invalid"),I.value=null}finally{(s=r==null?void 0:r.value)==null||s.$el.classList.add("ion-touched"),S.value=!1}}async function O(t){var e,i;try{const{data:u,meta:s}=await P.debugInverterData({debugInverterDataRequest:t});(e=I.value)==null||e.push(...q(u)),C.value=((i=s==null?void 0:s.pagination)==null?void 0:i.cursorNext)??null}catch(u){console.error("Can't load more inverters.",u)}}async function z(t){await b(),setTimeout(()=>t.target.complete(),500)}function F(){v.value="",c.value.periodStart=w,c.value.periodEnd=w,ue(()=>{var t;return(t=r==null?void 0:r.value)==null?void 0:t.$el.setFocus()})}function $(){var t;(t=r.value)==null||t.$el.classList.remove("ion-touched","ion-valid","ion-invalid")}return(t,e)=>{const i=se,u=de,s=ce,d=ve,g=pe,T=me,j=De,R=_e,G=fe,J=ye,W=Ie,X=be,Y=xe,Z=ge,ee=we,te=Se,ne=Ce;return D(),x(ne,null,{default:a(()=>[o(s,null,{default:a(()=>[o(i,null,{default:a(()=>[m("Inverter Debug Query")]),_:1}),o(u,null,{default:a(()=>[m(" Query a inverter debug data ")]),_:1})]),_:1}),o(te,null,{default:a(()=>[o(X,{lines:"none"},{default:a(()=>[o(g,{slot:"start",label:"Filter Parameter","label-placement":"floating",placeholder:"Select a filter",modelValue:l(_),"onUpdate:modelValue":e[0]||(e[0]=n=>V(_)?_.value=n:null),style:{"min-width":"19ch","flex-grow":"0"},onIonChange:e[1]||(e[1]=n=>$())},{default:a(()=>[o(d,{value:"ProductSerial"},{default:a(()=>[m(" Product Serial ")]),_:1}),o(d,{value:"ProductSerialId"},{default:a(()=>[m(" Product Serial ID ")]),_:1}),o(d,{value:"SerialNumber"},{default:a(()=>[m(" Serial Number ")]),_:1}),o(d,{value:"DataMatrixCode"},{default:a(()=>[m(" Data Matrix Code ")]),_:1}),o(d,{value:"DeviceHash"},{default:a(()=>[m(" Device Hash ")]),_:1})]),_:1},8,["modelValue"]),B("div",Ve,[B("div",Ne,[o(T,{ref_key:"inputRef",ref:r,type:"text","error-text":"No inverters found",placeholder:"Enter a parameter to filter by",modelValue:l(v),"onUpdate:modelValue":e[2]||(e[2]=n=>V(v)?v.value=n:null),autofocus:"",onIonInput:e[3]||(e[3]=n=>$()),onKeyup:[e[4]||(e[4]=y(n=>b(!0),["enter"])),e[5]||(e[5]=y(n=>l(U)(),["up"])),e[6]||(e[6]=y(n=>l(E)(),["down"]))]},null,8,["modelValue"]),l(_)==="SerialNumber"?(D(),x(T,{key:0,type:"text",class:"ion-margin-start","error-text":" ",placeholder:"Product Code",modelValue:l(f),"onUpdate:modelValue":e[7]||(e[7]=n=>V(f)?f.value=n:null),onIonInput:e[8]||(e[8]=n=>$()),onKeyup:[e[9]||(e[9]=y(n=>b(!0),["enter"])),e[10]||(e[10]=y(n=>l(h)(),["up"])),e[11]||(e[11]=y(n=>l(A)(),["down"]))]},null,8,["modelValue"])):k("",!0)]),o(j,{modelValue:l(c),"onUpdate:modelValue":e[12]||(e[12]=n=>V(c)?c.value=n:null)},null,8,["modelValue"])]),l(S)?(D(),x(R,{key:0,slot:"end",size:"small",color:"primary",name:"crescent"})):k("",!0),o(G,{slot:"end",label:"Clear input",icon:"ioniconsBackspace"in t?t.ioniconsBackspace:l(ie),onClick:e[13]||(e[13]=n=>F())},null,8,["icon"]),o(W,{class:"ion-margin-start",slot:"end",color:"primary",onClick:e[14]||(e[14]=n=>b(!0)),disabled:l(S)},{default:a(()=>[o(J,null,{default:a(()=>[m("Query")]),_:1})]),_:1},8,["disabled"])]),_:1}),o(Y,{data:l(I).value,variant:"inverter"},null,8,["data"]),l(C)?(D(),x(ee,{key:0,onIonInfinite:z},{default:a(()=>[o(Z)]),_:1})):k("",!0)]),_:1})]),_:1})}}});export{Ee as default};