import{eo as a,ep as i,eq as c,er as d,es as l}from"./0fV2q4Ox.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const w=()=>{const t=window;t.addEventListener("statusTap",()=>{a(()=>{const o=t.innerWidth,s=t.innerHeight,n=document.elementFromPoint(o/2,s/2);if(!n)return;const e=i(n);e&&new Promise(r=>c(e,r)).then(()=>{d(async()=>{e.style.setProperty("--overflow","hidden"),await l(e,300),e.style.removeProperty("--overflow")})})})})};export{w as startStatusTap};
