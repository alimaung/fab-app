import{E as x,F as A,e as w,G as E,H as R,I as O}from"./0fV2q4Ox.js";const r=new Map;let I,g,p,i;function L(a){const o=x().path,n=O(),{currentRoute:f}=A(),l=A();let h=!1,c=a;const d={dispose(){const e=[...r.get(o)],t=e.findIndex(u=>u[0]===c);if(t===-1)return;const s=e[t][1];s==null||s.dispose(),e.splice(t,1),r.set(o,e)},patch(e){const t=[...r.get(o)],s=t.findIndex(m=>m[0]===c);if(s===-1)return;const[,u]=t[s];c=e,u==null||u.patch(c),t.splice(s,1,[c,u]),r.set(o,t)}};if(r.has(o)){const e=n==null?void 0:n.push(a),t=r.get(o)||[];r.set(o,[...t,[a,e]])}else{const e=n==null?void 0:n.push(a);r.set(o,[[a,e]])}return w(d.dispose),I||(I=l.beforeEach(()=>{i=f.value.path})),g||(g=l.afterEach(()=>{p=f.value.path})),E(()=>{let e=r.get(i);e&&(e=e.map(([t,s])=>(s==null||s.dispose(),[t,void 0])),r.set(i,e)),h=!0}),R(()=>{if(h){let e=r.get(p);e&&(e=e.map(([t,s])=>{s==null||s.dispose();const u=n==null?void 0:n.push(t);return[t,u]}),r.set(p,e))}}),d}export{L as u};