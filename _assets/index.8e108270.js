import{a$ as e,r as t,f as n,a as s,o as r,j as c,s as o}from"./index.b2563c25.js";import"./xlsx.a48e520c.js";import"./useDebounce.9e3543c4.js";import{u as a}from"./useEventListener.c24bc5c8.js";var i=s({name:"ClickOutSide",setup(s,{emit:r}){const c=t(null);return function(s,r,c="click"){if(e)return;const o=t(!1);function i(e){if("touchend"===e.type&&(o.value=!0),"click"===e.type&&n(o))return;const t=s.value;t&&e.target&&!t.contains(e.target)&&r(e)}a({el:document,name:"touchend",listener:i,options:!0}),a({el:document,name:c,listener:i,options:!0})}(c,(()=>{r("clickOutside")})),{wrap:c}}});const u={ref:"wrap"};i.render=function(e,t,n,s,a,i){return r(),c("div",u,[o(e.$slots,"default")],512)};export default i;