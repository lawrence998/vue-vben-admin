let e=document.createElement("style");e.innerHTML=".lazy-base-demo-wrap{display:flex;width:50%;height:2000px;margin:20px auto;text-align:center;background:#fff;justify-content:center;flex-direction:column;align-items:center}.lazy-base-demo-box{width:300px;height:300px}.lazy-base-demo h1{height:1300px;margin:20px 0}.custom-enter{opacity:0;transform:scale(.4) translate(100%)}.custom-enter-to{opacity:1}.custom-enter-active{position:absolute;top:0;width:100%;transition:.5s}.custom-leave{opacity:1}.custom-leave-to{opacity:0;transform:scale(.4) translate(-100%)}.custom-leave-active{transition:.5s}",document.head.appendChild(e);import{a as t,i as o,o as s,j as i,k as a,w as r}from"./index.b2563c25.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.52f031c1.js";import{A as n}from"./index.3926bcc0.js";import"./RightOutlined.6271d6f8.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4a4f7bba.js";import"./index.fb098ecf.js";import"./UpOutlined.9fb79b46.js";import"./LeftOutlined.8cd70964.js";import"./index.31f3a12f.js";import{b as m,S as p}from"./index.ece84d19.js";import"./useTimeout.0990510e.js";import"./resizeEvent.e79f1ab5.js";import"./domUtils.8b34c94c.js";import"./tsxHelper.24b178b2.js";import"./useExpose.03135198.js";import"./animation.f3edcb57.js";import"./useScrollTo.ef044c36.js";import"./index.47077e70.js";import"./index.aa07d4db.js";import"./propTypes.db13ce1b.js";import c from"./TargetContent.9e10c79c.js";var l=t({components:{LazyContainer:m,TargetContent:c,Skeleton:p,Alert:n},setup:()=>({})});const d={class:"p-4 lazy-base-demo"},f={class:"lazy-base-demo-wrap"},u=a("h1",null,"向下滚动",-1),b={class:"lazy-base-demo-box"};l.render=function(e,t,n,m,p,c){const l=o("Alert"),j=o("TargetContent"),x=o("LazyContainer");return s(),i("div",d,[a(l,{message:"自定义动画",description:"懒加载组件显示动画",type:"info","show-icon":""}),a("div",f,[u,a("div",b,[a(x,{transitionName:"custom"},{default:r((()=>[a(j)])),_:1})])])])};export default l;