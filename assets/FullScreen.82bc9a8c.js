import{d as e,b3 as l,a as t,c as s,s as n,r,o,f as u,p as a,g as i}from"./index.aa8837b6.js";/* empty css              */import{u as c}from"./useFullScreen.e12936f1.js";import{F as d,a as F}from"./FullscreenOutlined.dd09674b.js";import"./vendor.3b1829c7.js";var p=e({name:"FullScreen",components:{FullscreenExitOutlined:d,FullscreenOutlined:F,Tooltip:l},setup(){const{t:e}=t(),{toggleFullscreen:l,isFullscreenRef:r}=c();return{getTitle:s((()=>n(r)?e("layout.header.tooltipExitFull"):e("layout.header.tooltipEntryFull"))),isFullscreen:r,toggleFullscreen:l}}});p.render=function(e,l,t,s,n,c){const d=r("FullscreenOutlined"),F=r("FullscreenExitOutlined"),p=r("Tooltip");return o(),u(p,{title:e.getTitle,placement:"bottom",mouseEnterDelay:.5},{default:a((()=>[i("span",{onClick:l[1]||(l[1]=(...l)=>e.toggleFullscreen&&e.toggleFullscreen(...l))},[e.isFullscreen?(o(),u(F,{key:1})):(o(),u(d,{key:0}))])])),_:1},8,["title","mouseEnterDelay"])};export default p;
