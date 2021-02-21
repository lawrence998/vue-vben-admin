import{f as e}from"./BasicForm.86e93148.js";import{u as o}from"./useForm.540c221d.js";import{d as t,n as i,r,o as s,f as n,bx as a,g as p}from"./index.aa8837b6.js";import{_ as l}from"./index.8ecac3a2.js";import"./index.6ee7de89.js";import"./index.16ed14f7.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.ed3ee191.js";import"./isEqual.4de048ea.js";import"./get.e5fb9fc7.js";import"./_baseProperty.74f89655.js";import"./toInteger.7ffdaced.js";import"./index.fb14b84c.js";import"./index.205d70bf.js";import"./SearchOutlined.746274d7.js";import"./EyeOutlined.1675c999.js";import"./index.fff29afc.js";import"./CheckOutlined.a08241d9.js";import"./DownOutlined.43fff99f.js";import"./index.2add1d3e.js";import"./index.404f9862.js";import"./index.dc59a2ae.js";import"./UpOutlined.22514976.js";import"./index.bb23781d.js";import"./RightOutlined.c57ea3e1.js";import"./RedoOutlined.7a0cc756.js";import"./index.925dca2a.js";import"./EllipsisOutlined.9864ef87.js";import"./types.85166bab.js";import"./Tree.c7330391.js";import"./util.df23b510.js";import"./useFormItem.60294112.js";/* empty css              */import"./uuid.ed56ef78.js";import"./index.f71cfaaa.js";import"./DeleteOutlined.a544c39e.js";import"./index.16adfb3c.js";import"./useModal.379d0a1b.js";import"./useTimeout.3a93190b.js";import"./useWindowSizeFn.4845d6a6.js";import"./ScrollContainer.9e43c09e.js";import"./index.651ec7dc.js";import"./domUtils.eb070da7.js";import"./_stringToArray.774233d0.js";import"./useScrollTo.8821b79c.js";import"./FullscreenOutlined.dd09674b.js";import"./index.83844f43.js";import"./Dropdown.4b58e2ac.js";import"./index.b73a943e.js";import"./LeftOutlined.e6fdeabd.js";import"./download.c5c5a8a9.js";import"./index.957f6784.js";import"./index.d7580f65.js";import"./usePageContext.361ae095.js";import"./transButton.0044e722.js";import"./ArrowLeftOutlined.57e95653.js";const d=[{field:"title",component:"Input",label:"标题",componentProps:{placeholder:"给目标起个名字"},required:!0},{field:"time",component:"RangePicker",label:"起止日期",required:!0},{field:"target",component:"InputTextArea",label:"目标描述",componentProps:{placeholder:"请输入你的阶段性工作目标",rows:4},required:!0},{field:"metrics",component:"InputTextArea",label:"衡量标准",componentProps:{placeholder:"请输入衡量标准",rows:4},required:!0},{field:"client",component:"Input",label:"客户",helpMessage:"目标的服务对象",subLabel:"( 选填 )",componentProps:{placeholder:"请描述你服务的客户，内部客户直接 @姓名／工号"}},{field:"inviteer",component:"Input",label:"邀评人",subLabel:"( 选填 )",componentProps:{placeholder:"请直接 @姓名／工号，最多可邀请 5 人"}},{field:"weights",component:"InputNumber",label:"权重",subLabel:"( 选填 )",componentProps:{formatter:e=>e?`${e}%`:"",parser:e=>e.replace("%",""),placeholder:"请输入"}},{field:"disclosure",component:"RadioGroup",label:"目标公开",itemProps:{extra:"客户、邀评人默认被分享"},componentProps:{options:[{label:"公开",value:"1"},{label:"部分公开",value:"2"},{label:"不公开",value:"3"}]}},{field:"disclosurer",component:"Select",label:" ",show:({model:e})=>"2"===e.disclosure,componentProps:{placeholder:"公开给",mode:"multiple",options:[{label:"同事1",value:"1"},{label:"同事2",value:"2"},{label:"同事3",value:"3"}]}}];var m=t({components:{BasicForm:e,PageWrapper:l},setup(){const{createMessage:e}=i(),[t,{validate:r,setProps:s}]=o({labelCol:{span:7},wrapperCol:{span:10},schemas:d,actionColOptions:{offset:8},submitButtonOptions:{text:"提交"},submitFunc:async function(){try{await r(),s({submitButtonOptions:{loading:!0}}),setTimeout((()=>{s({submitButtonOptions:{loading:!1}}),e.success("提交成功！")}),2e3)}catch(o){}}});return{register:t}}});const c=a("data-v-5cbaa0f1"),u=c(((e,o,t,i,a,l)=>{const d=r("BasicForm"),m=r("PageWrapper");return s(),n(m,{title:"基础表单",contentBackground:"",content:" 表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。",contentClass:"p-4"},{default:c((()=>[p(d,{onRegister:e.register},null,8,["onRegister"])])),_:1})}));m.render=u,m.__scopeId="data-v-5cbaa0f1";export default m;
