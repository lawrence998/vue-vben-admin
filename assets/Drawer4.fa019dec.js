import{_ as e,a as i}from"./useDrawer.04d6f8ef.js";import{f as t}from"./BasicForm.86e93148.js";import{u as r}from"./useForm.540c221d.js";import{d as s,r as o,o as d,f as a,p,g as m,m as n}from"./index.aa8837b6.js";import"./index.5cf84302.js";import"./ScrollContainer.9e43c09e.js";import"./index.651ec7dc.js";import"./domUtils.eb070da7.js";import"./_stringToArray.774233d0.js";import"./RightOutlined.c57ea3e1.js";/* empty css              */import"./useTimeout.3a93190b.js";import"./useScrollTo.8821b79c.js";import"./ArrowLeftOutlined.57e95653.js";import"./isEqual.4de048ea.js";import"./index.6ee7de89.js";import"./index.16ed14f7.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.ed3ee191.js";import"./get.e5fb9fc7.js";import"./_baseProperty.74f89655.js";import"./toInteger.7ffdaced.js";import"./index.fb14b84c.js";import"./index.205d70bf.js";import"./SearchOutlined.746274d7.js";import"./EyeOutlined.1675c999.js";import"./index.fff29afc.js";import"./CheckOutlined.a08241d9.js";import"./DownOutlined.43fff99f.js";import"./index.2add1d3e.js";import"./index.404f9862.js";import"./index.dc59a2ae.js";import"./UpOutlined.22514976.js";import"./index.bb23781d.js";import"./RedoOutlined.7a0cc756.js";import"./index.925dca2a.js";import"./EllipsisOutlined.9864ef87.js";import"./types.85166bab.js";import"./Tree.c7330391.js";import"./util.df23b510.js";import"./useFormItem.60294112.js";import"./uuid.ed56ef78.js";import"./index.f71cfaaa.js";import"./DeleteOutlined.a544c39e.js";import"./index.16adfb3c.js";import"./useModal.379d0a1b.js";import"./useWindowSizeFn.4845d6a6.js";import"./FullscreenOutlined.dd09674b.js";import"./index.83844f43.js";import"./Dropdown.4b58e2ac.js";import"./index.b73a943e.js";import"./LeftOutlined.e6fdeabd.js";import"./download.c5c5a8a9.js";const j=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var l=s({components:{BasicDrawer:e,BasicForm:t},setup(){const[e,{setFieldsValue:t}]=r({labelWidth:120,schemas:j,showActionButtonGroup:!1,actionColOptions:{span:24}}),[s]=i((e=>{t({field2:e.data,field1:e.info})}));return{register:s,schemas:j,registerForm:e}}});l.render=function(e,i,t,r,s,j){const l=o("BasicForm"),c=o("BasicDrawer");return d(),a(c,n(e.$attrs,{onRegister:e.register,title:"Drawer Title",width:"50%"}),{default:p((()=>[m("div",null,[m(l,{onRegister:e.registerForm},null,8,["onRegister"])])])),_:1},16,["onRegister"])};export default l;
