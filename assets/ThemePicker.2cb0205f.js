import{d as e,aB as t,h as i,o as r,i as s,aL as o,aM as a,j as n}from"./index.b35d627b.js";import{b as d}from"./index.fa395442.js";import{C as p}from"./CheckOutlined.1e3689b0.js";import"./vendor.3b1829c7.js";import"./index.c5a1f163.js";import"./useDrawer.10f26580.js";import"./index.da3fb242.js";import"./ScrollContainer.992f13b6.js";import"./index.15783dfd.js";import"./domUtils.9d257af5.js";import"./_stringToArray.d2fcf67e.js";import"./RightOutlined.8f262b29.js";/* empty css              */import"./useTimeout.aed71b31.js";import"./useScrollTo.a712a7b3.js";import"./ArrowLeftOutlined.a6b6ea94.js";import"./isEqual.81a8f73e.js";import"./useHeaderSetting.8bba3648.js";var l=e({name:"ThemePicker",components:{CheckOutlined:p},props:{colorList:{type:Array,defualt:[]},event:{type:Number,default:()=>{}},def:{type:String}},setup(e){const{prefixCls:i}=t("setting-theme-picker");return{prefixCls:i,handleClick:function(t){e.event&&d(e.event,t)}}}});l.render=function(e,t,d,p,l,m){const f=i("CheckOutlined");return r(),s("div",{class:e.prefixCls},[(r(!0),s(o,null,a(e.colorList||[],(t=>(r(),s("span",{key:t,onClick:i=>e.handleClick(t),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}],style:{background:t}},[n(f)],14,["onClick"])))),128))],2)};export default l;
