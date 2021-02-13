import{ci as e,b as i,d as s,g as o,h as r,o as t,i as a,w as d,j as p}from"./index.b35d627b.js";import{A as n}from"./index.1532450f.js";import{h as m,f as l}from"./BasicForm.408555fc.js";import{u as j}from"./useForm.29669a4d.js";import{_ as f}from"./index.b87f3b54.js";import"./vendor.3b1829c7.js";import"./index.de7d5ef5.js";import"./index.b8d712d0.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.919925d7.js";import"./isEqual.81a8f73e.js";import"./get.f7a09bef.js";import"./_baseProperty.74f89655.js";import"./toInteger.ba85bbaa.js";import"./index.611e1dd6.js";import"./index.e3f20d1f.js";import"./SearchOutlined.2d9a2a5e.js";import"./EyeOutlined.3c8e22f6.js";import"./index.b1b871ed.js";import"./CheckOutlined.1e3689b0.js";import"./DownOutlined.9676ed0b.js";import"./index.3d19020c.js";import"./index.1247f73f.js";import"./UpOutlined.27cd31ae.js";import"./index.fdaf4dfb.js";import"./RightOutlined.8f262b29.js";import"./RedoOutlined.875f929c.js";import"./index.b30471b8.js";import"./EllipsisOutlined.73434e58.js";import"./types.83a5535a.js";import"./Tree.7c786691.js";import"./util.712d4622.js";/* empty css              */import"./uuid.9bbe5f4a.js";import"./index.6db39300.js";import"./DeleteOutlined.9c2c0df5.js";import"./useModal.c404053c.js";import"./useTimeout.aed71b31.js";import"./useWindowSizeFn.782faf75.js";import"./ScrollContainer.992f13b6.js";import"./index.15783dfd.js";import"./domUtils.9d257af5.js";import"./_stringToArray.d2fcf67e.js";import"./useScrollTo.a712a7b3.js";import"./FullscreenOutlined.d5e2b78d.js";import"./index.c5a1f163.js";import"./Dropdown.31b15b73.js";import"./index.4a68e0e9.js";import"./LeftOutlined.efceb197.js";import"./download.68be7467.js";import"./index.14695b3f.js";import"./index.df0929cf.js";import"./usePageContext.ceff001a.js";import"./transButton.f2853e28.js";import"./ArrowLeftOutlined.a6b6ea94.js";const{uploadUrl:c=""}=i();function u(i,s){return e.uploadFile({url:c,onUploadProgress:s},i)}const b=[{field:"field1",component:"Upload",label:"字段1",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:u}}];var x=s({components:{BasicUpload:m,BasicForm:l,PageWrapper:f,[n.name]:n},setup(){const{createMessage:e}=o(),[i]=j({labelWidth:120,schemas:b,actionColOptions:{span:16}});return{handleChange:i=>{e.info(`已上传文件${JSON.stringify(i)}`)},uploadApi:u,register:i}}});x.render=function(e,i,s,o,n,m){const l=r("a-alert"),j=r("BasicUpload"),f=r("BasicForm"),c=r("PageWrapper");return t(),a(c,{title:"上传组件示例"},{default:d((()=>[p(l,{message:"基础示例"}),p(j,{maxSize:20,maxNumber:10,onChange:e.handleChange,api:e.uploadApi,class:"my-5"},null,8,["onChange","api"]),p(l,{message:"嵌入表单,加入表单校验"}),p(f,{onRegister:e.register,class:"my-5"},null,8,["onRegister"])])),_:1})};export default x;
