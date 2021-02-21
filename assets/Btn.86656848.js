import{d as e,bc as s,bI as o,dA as a,dB as t,dn as r,dp as i,r as d,bB as n,o as c,f as m,bx as l,g as u,t as p,h as f,w as _,q as x}from"./index.aa8837b6.js";import{A as j}from"./index.16adfb3c.js";import{D as y}from"./index.83844f43.js";import P from"./CurrentPermissionMode.f4b37166.js";import{_ as b}from"./index.vue_vue&type=script&lang.e6c1db11.js";import{_ as h}from"./index.8ecac3a2.js";import"./vendor.3b1829c7.js";import"./index.957f6784.js";import"./index.925dca2a.js";import"./RightOutlined.c57ea3e1.js";import"./EllipsisOutlined.9864ef87.js";import"./types.85166bab.js";import"./isEqual.4de048ea.js";import"./toInteger.7ffdaced.js";import"./DownOutlined.43fff99f.js";/* empty css              */import"./index.d7580f65.js";import"./usePageContext.361ae095.js";import"./transButton.0044e722.js";import"./ArrowLeftOutlined.57e95653.js";var g=e({components:{Alert:j,PageWrapper:h,CurrentPermissionMode:P,Divider:y,Authority:b},setup(){const{hasPermission:e}=a();async function r(e){const o=await t({userId:e});s.commitPermCodeListState(o)}return r("1"),{hasPermission:e,permissionStore:s,changePermissionCode:r,PermissionModeEnum:o}}});const v=l("data-v-66db6f51");r("data-v-66db6f51");const C=x(" 当前拥有的code列表: "),A=x(" 点击切换按钮权限(用户id为2) "),k=x(" 点击切换按钮权限(用户id为1,默认) "),w=x("组件方式判断权限"),B=x(" 拥有code ['1000']权限可见 "),D=x(" 拥有code ['2000']权限可见 "),I=x(" 拥有code ['1000','2000']角色权限可见 "),M=x("函数方式方式判断权限"),O=x(" 拥有code ['1000']权限可见 "),S=x(" 拥有code ['2000']权限可见 "),E=x(" 拥有code ['1000','2000']角色权限可见 "),L=x("指令方式方式判断权限(该方式不能动态修改权限.)"),q=x(" 拥有code ['1000']权限可见 "),W=x(" 拥有code ['2000']权限可见 "),R=x(" 拥有code ['1000','2000']角色权限可见 ");i();const z=v(((e,s,o,a,t,r)=>{const i=d("Alert"),l=d("CurrentPermissionMode"),x=d("Divider"),j=d("a-button"),y=d("Authority"),P=d("PageWrapper"),b=n("auth");return c(),m(P,{contentBackground:"",title:"按钮权限控制",contentClass:"p-4"},{default:v((()=>[u(i,{message:"刷新后会还原","show-icon":""}),u(l),u("p",null,[C,u("a",null,p(e.permissionStore.getPermCodeListState),1)]),u(x),u(i,{class:"mt-4",type:"info",message:"点击后请查看按钮变化","show-icon":""}),u(x),u(j,{type:"primary",class:"mr-2",onClick:s[1]||(s[1]=s=>e.changePermissionCode("2"))},{default:v((()=>[A])),_:1}),u(j,{type:"primary",onClick:s[2]||(s[2]=s=>e.changePermissionCode("1"))},{default:v((()=>[k])),_:1}),u(x,null,{default:v((()=>[w])),_:1}),u(y,{value:"1000"},{default:v((()=>[u(j,{type:"primary",class:"mx-4"},{default:v((()=>[B])),_:1})])),_:1}),u(y,{value:"2000"},{default:v((()=>[u(j,{color:"success",class:"mx-4"},{default:v((()=>[D])),_:1})])),_:1}),u(y,{value:["1000","2000"]},{default:v((()=>[u(j,{color:"error",class:"mx-4"},{default:v((()=>[I])),_:1})])),_:1}),u(x,null,{default:v((()=>[M])),_:1}),e.hasPermission("1000")?(c(),m(j,{key:0,type:"primary",class:"mx-4"},{default:v((()=>[O])),_:1})):f("",!0),e.hasPermission("2000")?(c(),m(j,{key:1,color:"success",class:"mx-4"},{default:v((()=>[S])),_:1})):f("",!0),e.hasPermission(["1000","2000"])?(c(),m(j,{key:2,color:"error",class:"mx-4"},{default:v((()=>[E])),_:1})):f("",!0),u(x,null,{default:v((()=>[L])),_:1}),_(u(j,{type:"primary",class:"mx-4"},{default:v((()=>[q])),_:1},512),[[b,"1000"]]),_(u(j,{color:"success",class:"mx-4"},{default:v((()=>[W])),_:1},512),[[b,"2000"]]),_(u(j,{color:"error",class:"mx-4"},{default:v((()=>[R])),_:1},512),[[b,["1000","2000"]]])])),_:1})}));g.render=z,g.__scopeId="data-v-66db6f51";export default g;
