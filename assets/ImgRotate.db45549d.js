var t=Object.assign;import{u as e}from"./useTimeout.3a93190b.js";import{r as s,B as i}from"./DragVerify.41f514f5.js";import{h as a}from"./domUtils.eb070da7.js";import{d as r,i as o,j as n,a as m,a_ as g,c as d,g as c,s as p,q as u,m as l,aw as h}from"./index.aa8837b6.js";import"./useExpose.2502847e.js";import"./CheckOutlined.a08241d9.js";import"./DoubleRightOutlined.a7ac24b6.js";import"./_stringToArray.774233d0.js";import"./vendor.3b1829c7.js";var f=r({name:"ImgRotateDargVerify",inheritAttrs:!1,props:s,emits:["success","change","update:value"],setup(s,{emit:r,attrs:f}){const T=o(null),v=n({showTip:!1,isPassing:!1,imgStyle:{},randomRotate:0,currentRotate:0,toOrigin:!1,startTime:0,endTime:0,draged:!1}),{t:w}=m();g((()=>v.isPassing),(t=>{if(t){const{startTime:e,endTime:s}=v;r("success",{isPassing:t,time:((s-e)/1e3).toFixed(1)}),r("change",t),r("update:value",t)}}));const y=d((()=>{const{imgWrapStyle:e,imgWidth:i}=s;return t({width:`${i}px`,height:`${i}px`},e)})),j=d((()=>{const{minDegree:t,maxDegree:e}=s;return t===e?Math.floor(1+1*Math.random())/10+1:1}));function D(){v.startTime=(new Date).getTime()}function x(t){v.draged=!0;const{imgWidth:e,height:i,maxDegree:r}=s,{moveX:o}=t,n=Math.ceil(o/(e-parseInt(i))*r*p(j));v.currentRotate=n,v.imgStyle=a("transform",`rotateZ(${v.randomRotate-n}deg)`)}function _(){const{minDegree:t,maxDegree:e}=s,i=Math.floor(t+Math.random()*(e-t));v.randomRotate=i,v.imgStyle=a("transform",`rotateZ(${i}deg)`)}function b(){const{randomRotate:t,currentRotate:i}=v,{diffDegree:r}=s;Math.abs(t-i)>=(r||20)?(v.imgStyle=a("transform",`rotateZ(${t}deg)`),v.toOrigin=!0,e((()=>{v.toOrigin=!1,v.showTip=!0}),300)):(v.isPassing=!0,v.endTime=(new Date).getTime()),v.showTip=!0}function R(){v.showTip=!1;const t=p(T);t&&(v.isPassing=!1,t.resume(),_())}const P=h();return P&&(P.resume=R),()=>{const{src:e}=s,{toOrigin:a,isPassing:r,startTime:o,endTime:n}=v,m=[];a&&m.push("to-origin");const g=(n-o)/1e3;return c("div",{class:"ir-dv"},[c("div",{class:"ir-dv-img__wrap",style:p(y)},[c("img",{src:e,onLoad:_,width:parseInt(s.width),class:m,style:v.imgStyle,onClick:()=>{R()}},null),v.showTip&&c("span",{class:["ir-dv-img__tip",v.isPassing?"success":"error"]},[v.isPassing?w("component.verify.time",{time:g.toFixed(1)}):w("component.verify.error")]),!v.showTip&&!v.draged&&c("span",{class:["ir-dv-img__tip","normal"]},[u("t('redoTip')")])]),c(i,l({class:"ir-dv-drag__bar",onMove:x,onEnd:b,onStart:D,ref:T},t(t({},f),s),{value:r,isSlot:!0}),null)])}}});export default f;
