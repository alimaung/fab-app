import{p as o}from"./D0r5xylr.js";import{dy as t}from"./0fV2q4Ox.js";async function i(r){const{msg:a}=await o(r);await(await t.create({header:"Error ⛔",subHeader:"A problem occurred",message:a,buttons:["OK"]})).present()}async function c(r,a){await(await t.create({header:"Info ✨",subHeader:r,message:a,buttons:["OK"]})).present()}export{c as a,i};