import{u as e,a as t,b as s,r as i,L as n,S as o,p as a,N as r,f as c,a9 as u,v as l}from"./index.b2563c25.js";import{C as m}from"./CheckOutlined.ba687b5f.js";import{D as d}from"./DoubleRightOutlined.13a2c7ce.js";import{u as p}from"./useTimeout.0990510e.js";import{u as g}from"./useEventListener.c24bc5c8.js";import{h as f}from"./domUtils.8b34c94c.js";import{g as h}from"./tsxHelper.24b178b2.js";import{u as y}from"./useExpose.03135198.js";const{t:v}=e(),x={value:{type:Boolean,default:!1},isSlot:{type:Boolean,default:!1},text:{type:[String],default:v("component.verify.dragText")},successText:{type:[String],default:v("component.verify.successText")},height:{type:[Number,String],default:40},width:{type:[Number,String],default:220},circle:{type:Boolean,default:!1},wrapStyle:{type:Object,default:{}},contentStyle:{type:Object,default:{}},barStyle:{type:Object,default:{}},actionStyle:{type:Object,default:{}}},w={...x,src:{type:String},imgWidth:{type:Number,default:260},imgWrapStyle:{type:Object,default:{}},minDegree:{type:Number,default:90},maxDegree:{type:Number,default:270},diffDegree:{type:Number,default:20}};var T=t({name:"BaseDargVerify",props:x,emits:["success","update:value","change","start","move","end"],setup(e,{emit:t,slots:u}){const l=s({isMoving:!1,isPassing:!1,moveDistance:0,toLeft:!1,startTime:0,endTime:0}),f=i(null),v=i(null),x=i(null),w=i(null);n((()=>l.isPassing),(e=>{if(e){const{startTime:s,endTime:i}=l;t("success",{isPassing:e,time:((i-s)/1e3).toFixed(1)}),t("update:value",e),t("change",e)}})),o((()=>{l.isPassing=!!e.value}));const T=a((()=>{const{height:t,actionStyle:s}=e,i=`${parseInt(t)}px`;return{left:0,width:i,height:i,...s}})),b=a((()=>{const{height:t,width:s,circle:i,wrapStyle:n}=e,o=parseInt(t);return{width:`${parseInt(s)}px`,height:`${o}px`,lineHeight:`${o}px`,borderRadius:i?o/2+"px":0,...n}})),S=a((()=>{const{height:t,circle:s,barStyle:i}=e,n=parseInt(t);return{height:`${n}px`,borderRadius:s?n/2+"px 0 0 "+n/2+"px":0,...i}})),D=a((()=>{const{height:t,width:s,contentStyle:i}=e;return{height:`${parseInt(t)}px`,width:`${parseInt(s)}px`,...i}}));function M(e){return e.pageX||e.touches[0].pageX}function P(e){if(l.isPassing)return;const s=c(w);s&&(t("start",e),l.moveDistance=M(e)-parseInt(s.style.left.replace("px",""),10),l.startTime=(new Date).getTime(),l.isMoving=!0)}function $(t){const s=parseInt(t.style.width),{width:i}=e,n=parseInt(i);return{offset:n-s-6,widthNum:n,actionWidth:s}}function I(s){const{isMoving:i,moveDistance:n}=l;if(i){const i=c(w),o=c(v);if(!i||!o)return;const{offset:a,widthNum:r,actionWidth:u}=$(i),l=M(s)-n;t("move",{event:s,moveDistance:n,moveX:l}),l>0&&l<=a?(i.style.left=`${l}px`,o.style.width=`${l+u/2}px`):l>a&&(i.style.left=r-u+"px",o.style.width=r-u/2+"px",e.isSlot||R())}}function j(s){const{isMoving:i,isPassing:n,moveDistance:o}=l;if(i&&!n){t("end",s);const i=c(w),n=c(v);if(!i||!n)return;const a=M(s)-o,{offset:r,widthNum:u,actionWidth:m}=$(i);a<r?e.isSlot?setTimeout((()=>{if(e.value){const e=c(x);e&&(e.style.width=`${parseInt(n.style.width)}px`)}else O()}),0):O():(i.style.left=u-m+"px",n.style.width=u-m/2+"px",R()),l.isMoving=!1}}function R(){e.isSlot?O():(l.endTime=(new Date).getTime(),l.isPassing=!0,l.isMoving=!1)}function O(){l.isMoving=!1,l.isPassing=!1,l.moveDistance=0,l.toLeft=!1,l.startTime=0,l.endTime=0;const e=c(w),t=c(v),s=c(x);e&&t&&s&&(l.toLeft=!0,p((()=>{l.toLeft=!1,e.style.left="0",t.style.width="0"}),300),s.style.width=c(D).width)}return g({el:document,name:"mouseup",listener:()=>{l.isMoving&&O()}}),y({resume:O}),()=>r("div",{class:"darg-verify",ref:f,style:c(b),onMousemove:I,onTouchmove:I,onMouseleave:j,onMouseup:j,onTouchend:j},(()=>{const e=["darg-verify-bar"];return l.toLeft&&e.push("to-left"),r("div",{class:e,ref:v,style:c(S)})})(),(()=>{const t=["darg-verify-content"],{isPassing:s}=l,{text:i,successText:n}=e;return s&&t.push("success"),r("div",{class:t,ref:x,style:c(D)},h(u,"text",s)||(s?n:i))})(),(()=>{const e=["darg-verify-action"],{toLeft:t,isPassing:s}=l;return t&&e.push("to-left"),r("div",{class:e,onMousedown:P,onTouchstart:P,style:c(T),ref:w},h(u,"actionIcon",s)||r(s?m:d,{class:"darg-verify-action__icon"}))})())}}),b=t({name:"ImgRotateDargVerify",inheritAttrs:!1,props:w,emits:["success","change","update:value"],setup(t,{emit:o,attrs:l}){const m=i(null),d=s({showTip:!1,isPassing:!1,imgStyle:{},randomRotate:0,currentRotate:0,toOrigin:!1,startTime:0,endTime:0,draged:!1}),{t:g}=e();n((()=>d.isPassing),(e=>{if(e){const{startTime:t,endTime:s}=d;o("success",{isPassing:e,time:((s-t)/1e3).toFixed(1)}),o("change",e),o("update:value",e)}}));const h=a((()=>{const{imgWrapStyle:e,imgWidth:s}=t;return{width:`${s}px`,height:`${s}px`,...e}})),y=a((()=>{const{minDegree:e,maxDegree:s}=t;return e===s?Math.floor(1+1*Math.random())/10+1:1}));function v(){d.startTime=(new Date).getTime()}function x(e){d.draged=!0;const{imgWidth:s,height:i,maxDegree:n}=t,{moveX:o}=e,a=Math.ceil(o/(s-parseInt(i))*n*c(y));d.currentRotate=a,d.imgStyle=f("transform",`rotateZ(${d.randomRotate-a}deg)`)}function w(){const{minDegree:e,maxDegree:s}=t,i=Math.floor(e+Math.random()*(s-e));d.randomRotate=i,d.imgStyle=f("transform",`rotateZ(${i}deg)`)}function b(){const{randomRotate:e,currentRotate:s}=d,{diffDegree:i}=t;Math.abs(e-s)>=(i||20)?(d.imgStyle=f("transform",`rotateZ(${e}deg)`),d.toOrigin=!0,p((()=>{d.toOrigin=!1,d.showTip=!0}),300)):(d.isPassing=!0,d.endTime=(new Date).getTime()),d.showTip=!0}function S(){d.showTip=!1;const e=c(m);e&&(d.isPassing=!1,e.resume(),w())}const D=u();return D&&(D.resume=S),()=>{const{src:e}=t,{toOrigin:s,isPassing:i,startTime:n,endTime:o}=d,a=[];s&&a.push("to-origin");const u=(o-n)/1e3;return r("div",{class:"ir-dv"},r("div",{class:"ir-dv-img__wrap",style:c(h)},r("img",{src:e,onLoad:w,width:parseInt(t.width),class:a,style:d.imgStyle,onClick:()=>{S()}}),d.showTip&&r("span",{class:["ir-dv-img__tip",d.isPassing?"success":"error"]},d.isPassing?g("component.verify.time",{time:u.toFixed(1)}):g("component.verify.error")),!d.showTip&&!d.draged&&r("span",{class:["ir-dv-img__tip","normal"]},"t('redoTip')")),r(T,{class:"ir-dv-drag__bar",onMove:x,onEnd:b,onStart:v,ref:m,...{...l,...t},value:i,isSlot:!0}))}}});l(T,b);export{T as B,b as R};