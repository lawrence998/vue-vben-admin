let e=document.createElement("style");e.innerHTML=".step-form-content[data-v-234603f7]{padding:24px;background:#fff}.step-form-form[data-v-234603f7]{width:750px;margin:0 auto}",document.head.appendChild(e);import{a as t,r as i,b as o,aA as n,V as r,W as s,i as p,o as a,j as d,k as m,a4 as c,a5 as l,l as u,X as j,n as f}from"./index.b2563c25.js";import"./xlsx.a48e520c.js";import"./index.6aa4fb10.js";import"./Trigger.69a42174.js";import"./omit.2978fa0a.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.52f031c1.js";import"./CheckOutlined.d04cd0d0.js";import"./index.3d914ca4.js";import"./index.3926bcc0.js";import"./colors.7cad5419.js";import"./index.73d6b745.js";import"./RightOutlined.6271d6f8.js";import"./index.309c8c25.js";import"./types.19f6acce.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4a4f7bba.js";import"./index.de1b91a6.js";import"./index.2d1b8ed6.js";import"./UpOutlined.9fb79b46.js";import"./DownOutlined.28064e9e.js";import"./index.34bfa216.js";import"./index.ae35b363.js";import"./index.257889b7.js";import"./CloseOutlined.11b614e0.js";import"./index.6b4afdd3.js";import"./LeftOutlined.a0990950.js";import"./functional.d4e0e18b.js";import"./RightOutlined.1397f8a7.js";import"./useContext.114680ae.js";import"./useTimeout.0990510e.js";import"./useDebounce.9e3543c4.js";import"./useEventListener.c24bc5c8.js";import"./useBreakpoint.a0fed2b4.js";import"./resizeEvent.e79f1ab5.js";import"./tsxHelper.24b178b2.js";import"./index.aa07d4db.js";import"./propTypes.db13ce1b.js";import"./index.44bbd0bc.js";import"./index.bb2606ae.js";import"./useWindowSizeFn.bf57cf6c.js";import"./uuid.40269c00.js";import"./download.492c51b9.js";import"./useForm.648d9376.js";import"./data.4bf6d6cb.js";import b from"./Step1.f7c61a80.js";import x from"./Step2.0c6f11c4.js";import S from"./Step3.c2b3ef3e.js";var v=t({components:{Step1:b,Step2:x,Step3:S},setup(){const e=i(0),t=o({initSetp2:!1,initSetp3:!1});return{current:e,handleStep1Next:function(i){e.value++,t.initSetp2=!0},handleStep2Next:function(i){e.value++,t.initSetp3=!0},handleRedo:function(){e.value=0,t.initSetp2=!1,t.initSetp3=!1},handleStepPrev:function(){e.value--},...n(t)}}});const h=j("data-v-234603f7");r("data-v-234603f7");const g=f(" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。 "),N={class:"m-5 step-form-content"},O={class:"step-form-form"},k={class:"mt-5"};s();const y=h(((e,t,i,o,n,r)=>{const s=p("a-page-header"),j=p("a-step"),f=p("a-steps"),b=p("Step1"),x=p("Step2"),S=p("Step3");return a(),d("div",null,[m(s,{title:"分步表单",ghost:!1},{default:h((()=>[g])),_:1}),m("div",N,[m("div",O,[m(f,{current:e.current},{default:h((()=>[m(j,{title:"填写转账信息"}),m(j,{title:"确认转账信息"}),m(j,{title:"完成"})])),_:1},8,["current"])]),m("div",k,[c(m(b,{onNext:e.handleStep1Next},null,8,["onNext"]),[[l,0===e.current]]),e.initSetp2?c((a(),d(x,{key:0,onPrev:e.handleStepPrev,onNext:e.handleStep2Next},null,8,["onPrev","onNext"])),[[l,1===e.current]]):u("",!0),e.initSetp3?c((a(),d(S,{key:1,onRedo:e.handleRedo},null,8,["onRedo"])),[[l,2===e.current]]):u("",!0)])])])}));v.render=y,v.__scopeId="data-v-234603f7";export default v;