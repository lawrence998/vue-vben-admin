var e=Object.assign;import{d as t,i,j as o,aN as r,dn as s,dp as n,r as p,o as d,f as a,bx as m,g as j,w as c,v as f,h as l}from"./index.aa8837b6.js";import{S as u}from"./index.16e589aa.js";import x from"./Step1.ab068cf0.js";import b from"./Step2.b201ebce.js";import S from"./Step3.c2603342.js";import{_ as v}from"./index.8ecac3a2.js";import"./vendor.3b1829c7.js";import"./CheckOutlined.a08241d9.js";import"./index.fff29afc.js";import"./SearchOutlined.746274d7.js";import"./DownOutlined.43fff99f.js";import"./index.205d70bf.js";import"./EyeOutlined.1675c999.js";import"./index.83844f43.js";import"./BasicForm.86e93148.js";import"./index.6ee7de89.js";import"./index.16ed14f7.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.ed3ee191.js";import"./isEqual.4de048ea.js";import"./get.e5fb9fc7.js";import"./_baseProperty.74f89655.js";import"./toInteger.7ffdaced.js";import"./index.fb14b84c.js";import"./index.2add1d3e.js";import"./index.404f9862.js";import"./index.dc59a2ae.js";import"./UpOutlined.22514976.js";import"./index.bb23781d.js";import"./RightOutlined.c57ea3e1.js";import"./RedoOutlined.7a0cc756.js";import"./index.925dca2a.js";import"./EllipsisOutlined.9864ef87.js";import"./types.85166bab.js";import"./Tree.c7330391.js";import"./util.df23b510.js";import"./useFormItem.60294112.js";/* empty css              */import"./uuid.ed56ef78.js";import"./index.f71cfaaa.js";import"./DeleteOutlined.a544c39e.js";import"./index.16adfb3c.js";import"./useModal.379d0a1b.js";import"./useTimeout.3a93190b.js";import"./useWindowSizeFn.4845d6a6.js";import"./ScrollContainer.9e43c09e.js";import"./index.651ec7dc.js";import"./domUtils.eb070da7.js";import"./_stringToArray.774233d0.js";import"./useScrollTo.8821b79c.js";import"./FullscreenOutlined.dd09674b.js";import"./Dropdown.4b58e2ac.js";import"./index.b73a943e.js";import"./LeftOutlined.e6fdeabd.js";import"./download.c5c5a8a9.js";import"./useForm.540c221d.js";import"./data.2505cb7f.js";import"./index.1ecaf6c7.js";import"./index.bdeae2ae.js";import"./index.957f6784.js";import"./index.d7580f65.js";import"./usePageContext.361ae095.js";import"./transButton.0044e722.js";import"./ArrowLeftOutlined.57e95653.js";var O=t({components:{Step1:x,Step2:b,Step3:S,PageWrapper:v,[u.name]:u,[u.Step.name]:u.Step},setup(){const t=i(0),s=o({initSetp2:!1,initSetp3:!1});return e({current:t,handleStep1Next:function(e){t.value++,s.initSetp2=!0},handleStep2Next:function(e){t.value++,s.initSetp3=!0},handleRedo:function(){t.value=0,s.initSetp2=!1,s.initSetp3=!1},handleStepPrev:function(){t.value--}},r(s))}});const h=m("data-v-53523f72");s("data-v-53523f72");const g={class:"step-form-form"},N={class:"mt-5"};n();const P=h(((e,t,i,o,r,s)=>{const n=p("a-step"),m=p("a-steps"),u=p("Step1"),x=p("Step2"),b=p("Step3"),S=p("PageWrapper");return d(),a(S,{title:"分步表单",contentBackground:"",content:" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。",contentClass:"p-4"},{default:h((()=>[j("div",g,[j(m,{current:e.current},{default:h((()=>[j(n,{title:"填写转账信息"}),j(n,{title:"确认转账信息"}),j(n,{title:"完成"})])),_:1},8,["current"])]),j("div",N,[c(j(u,{onNext:e.handleStep1Next},null,8,["onNext"]),[[f,0===e.current]]),e.initSetp2?c((d(),a(x,{key:0,onPrev:e.handleStepPrev,onNext:e.handleStep2Next},null,8,["onPrev","onNext"])),[[f,1===e.current]]):l("",!0),e.initSetp3?c((d(),a(b,{key:1,onRedo:e.handleRedo},null,8,["onRedo"])),[[f,2===e.current]]):l("",!0)])])),_:1})}));O.render=P,O.__scopeId="data-v-53523f72";export default O;
