var e=Object.assign;import{d as t,r as i,a as o,aE as r,dn as s,dp as n,h as a,o as p,i as d,bw as m,j as f,a3 as j,b8 as c,k as l}from"./index.20a648bb.js";import{S as u}from"./index.8f4168ec.js";import b from"./Step1.0b5bed3a.js";import x from"./Step2.ba6b027b.js";import S from"./Step3.1686884b.js";import{_ as v}from"./index.1ebbe592.js";import"./vendor.3b1829c7.js";import"./CheckOutlined.f27c74fa.js";import"./index.386e1fc1.js";import"./SearchOutlined.f49841f0.js";import"./DownOutlined.853090bf.js";import"./index.d12520f4.js";import"./EyeOutlined.b07d9be1.js";import"./index.9fcb8580.js";import"./BasicForm.409978b2.js";import"./index.8f9deaa2.js";import"./index.d26a36d5.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.e82ae4f4.js";import"./isEqual.a1a0c06b.js";import"./get.1ba4a11b.js";import"./_baseProperty.74f89655.js";import"./toInteger.5ff1b25f.js";import"./index.ddc1cded.js";import"./index.0c24a3bf.js";import"./index.1c1a919a.js";import"./UpOutlined.d0758042.js";import"./index.1c764d96.js";import"./RightOutlined.9a1b82fb.js";import"./RedoOutlined.aab371d5.js";import"./index.4d664a85.js";import"./EllipsisOutlined.3c97f502.js";import"./types.7beb30cc.js";import"./Tree.f4eaadf0.js";import"./util.12955019.js";/* empty css              */import"./uuid.8f5d2521.js";import"./index.f437baf7.js";import"./DeleteOutlined.aeac2f78.js";import"./index.00f73f89.js";import"./useModal.34da58c6.js";import"./useTimeout.82f3a262.js";import"./useWindowSizeFn.c3680928.js";import"./ScrollContainer.9c695134.js";import"./index.afd17c03.js";import"./domUtils.f2c56b54.js";import"./_stringToArray.ee740b6d.js";import"./useScrollTo.6f60a7a8.js";import"./FullscreenOutlined.6f5a844c.js";import"./Dropdown.a58805d6.js";import"./index.c05f5007.js";import"./LeftOutlined.9b88bcf0.js";import"./download.fb97e78b.js";import"./useForm.a871b756.js";import"./data.2505cb7f.js";import"./index.cf04da1c.js";import"./index.bea35cf5.js";import"./index.49e5a86a.js";import"./index.eaee4f3f.js";import"./usePageContext.def46df0.js";import"./transButton.2b01a733.js";import"./ArrowLeftOutlined.ca4208e5.js";var O=t({components:{Step1:b,Step2:x,Step3:S,PageWrapper:v,[u.name]:u,[u.Step.name]:u.Step},setup(){const t=i(0),s=o({initSetp2:!1,initSetp3:!1});return e({current:t,handleStep1Next:function(e){t.value++,s.initSetp2=!0},handleStep2Next:function(e){t.value++,s.initSetp3=!0},handleRedo:function(){t.value=0,s.initSetp2=!1,s.initSetp3=!1},handleStepPrev:function(){t.value--}},r(s))}});const h=m("data-v-53523f72");s("data-v-53523f72");const g={class:"step-form-form"},N={class:"mt-5"};n();const P=h(((e,t,i,o,r,s)=>{const n=a("a-step"),m=a("a-steps"),u=a("Step1"),b=a("Step2"),x=a("Step3"),S=a("PageWrapper");return p(),d(S,{title:"分步表单",contentBackground:"",content:" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。",contentClass:"p-4"},{default:h((()=>[f("div",g,[f(m,{current:e.current},{default:h((()=>[f(n,{title:"填写转账信息"}),f(n,{title:"确认转账信息"}),f(n,{title:"完成"})])),_:1},8,["current"])]),f("div",N,[j(f(u,{onNext:e.handleStep1Next},null,8,["onNext"]),[[c,0===e.current]]),e.initSetp2?j((p(),d(b,{key:0,onPrev:e.handleStepPrev,onNext:e.handleStep2Next},null,8,["onPrev","onNext"])),[[c,1===e.current]]):l("",!0),e.initSetp3?j((p(),d(x,{key:1,onRedo:e.handleRedo},null,8,["onRedo"])),[[c,2===e.current]]):l("",!0)])])),_:1})}));O.render=P,O.__scopeId="data-v-53523f72";export default O;
