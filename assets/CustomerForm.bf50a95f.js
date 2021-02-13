import{d as e,bW as i,g as t,h as o,o as r,i as s,w as d,j as n}from"./index.b35d627b.js";import{I as a}from"./index.e3f20d1f.js";import{f as p}from"./BasicForm.408555fc.js";import{u as m}from"./useForm.29669a4d.js";import{d as l}from"./ScrollContainer.992f13b6.js";import{_ as f}from"./index.b87f3b54.js";import"./vendor.3b1829c7.js";import"./SearchOutlined.2d9a2a5e.js";import"./EyeOutlined.3c8e22f6.js";import"./index.de7d5ef5.js";import"./index.b8d712d0.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.919925d7.js";import"./isEqual.81a8f73e.js";import"./get.f7a09bef.js";import"./_baseProperty.74f89655.js";import"./toInteger.ba85bbaa.js";import"./index.611e1dd6.js";import"./index.b1b871ed.js";import"./CheckOutlined.1e3689b0.js";import"./DownOutlined.9676ed0b.js";import"./index.3d19020c.js";import"./index.1247f73f.js";import"./UpOutlined.27cd31ae.js";import"./index.fdaf4dfb.js";import"./RightOutlined.8f262b29.js";import"./RedoOutlined.875f929c.js";import"./index.b30471b8.js";import"./EllipsisOutlined.73434e58.js";import"./types.83a5535a.js";import"./Tree.7c786691.js";import"./util.712d4622.js";/* empty css              */import"./uuid.9bbe5f4a.js";import"./index.6db39300.js";import"./DeleteOutlined.9c2c0df5.js";import"./index.1532450f.js";import"./useModal.c404053c.js";import"./useTimeout.aed71b31.js";import"./useWindowSizeFn.782faf75.js";import"./FullscreenOutlined.d5e2b78d.js";import"./index.c5a1f163.js";import"./Dropdown.31b15b73.js";import"./index.4a68e0e9.js";import"./LeftOutlined.efceb197.js";import"./download.68be7467.js";import"./domUtils.9d257af5.js";import"./_stringToArray.d2fcf67e.js";import"./index.15783dfd.js";import"./useScrollTo.a712a7b3.js";import"./index.14695b3f.js";import"./index.df0929cf.js";import"./usePageContext.ceff001a.js";import"./transButton.f2853e28.js";import"./ArrowLeftOutlined.a6b6ea94.js";const u=[{field:"field1",component:"Input",label:"render方式",colProps:{span:8},rules:[{required:!0}],render:({model:e,field:t})=>i(a,{placeholder:"请输入",value:e[t],onChange:i=>{e[t]=i.target.value}})},{field:"field2",component:"Input",label:"render组件slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"自定义Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}];var j=e({components:{BasicForm:p,CollapseContainer:l,PageWrapper:f,[a.name]:a},setup(){const{createMessage:e}=t(),[i,{setProps:o}]=m({labelWidth:120,schemas:u,actionColOptions:{span:24}});return{register:i,schemas:u,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))},setProps:o}}});j.render=function(e,i,t,a,p,m){const l=o("a-input"),f=o("BasicForm"),u=o("CollapseContainer"),j=o("PageWrapper");return r(),s(j,{title:"自定义组件示例"},{default:d((()=>[n(u,{title:"自定义表单"},{default:d((()=>[n(f,{onRegister:e.register,onSubmit:e.handleSubmit},{f3:d((({model:e,field:i})=>[n(l,{value:e[i],"onUpdate:value":t=>e[i]=t,placeholder:"自定义slot"},null,8,["value","onUpdate:value"])])),_:1},8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default j;
