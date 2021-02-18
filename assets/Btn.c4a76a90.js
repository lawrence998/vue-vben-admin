import{d as e,f as s,dy as t,K as a,dz as o,dn as r,dp as l,h as u,bA as n,o as i,i as m,bw as d,j as p,l as c,m as f,k as E,a3 as R}from"./index.20a648bb.js";import{A as S}from"./index.00f73f89.js";import{D as _}from"./index.9fcb8580.js";import y from"./CurrentPermissionMode.ea0b4df5.js";import{_ as j}from"./index.vue_vue&type=script&lang.4f8af92a.js";import{_ as x}from"./index.1ebbe592.js";import"./vendor.3b1829c7.js";import"./index.49e5a86a.js";import"./index.4d664a85.js";import"./RightOutlined.9a1b82fb.js";import"./EllipsisOutlined.3c97f502.js";import"./types.7beb30cc.js";import"./isEqual.a1a0c06b.js";import"./toInteger.5ff1b25f.js";import"./DownOutlined.853090bf.js";/* empty css              */import"./index.eaee4f3f.js";import"./usePageContext.def46df0.js";import"./transButton.2b01a733.js";import"./ArrowLeftOutlined.ca4208e5.js";var b=e({components:{Alert:S,PageWrapper:x,CurrentPermissionMode:y,Divider:_,Authority:j},setup(){const{changeRole:e,hasPermission:r}=o();return{userStore:s,RoleEnum:t,isSuper:a((()=>s.getRoleListState.includes(t.SUPER))),isTest:a((()=>s.getRoleListState.includes(t.TEST))),changeRole:e,hasPermission:r}}});const P=d("data-v-135f74ce");r("data-v-135f74ce");const T=f(" 当前角色: "),g={class:"mt-4"},v=f(" 权限切换(请先切换权限模式为前端角色权限模式): "),h=f("组件方式判断权限(有需要可以自行全局注册)"),U=f(" 拥有super角色权限可见 "),k=f(" 拥有test角色权限可见 "),A=f(" 拥有[test,super]角色权限可见 "),C=f("函数方式方式判断权限(适用于函数内部过滤)"),w=f(" 拥有super角色权限可见 "),D=f(" 拥有test角色权限可见 "),L=f(" 拥有[test,super]角色权限可见 "),O=f("指令方式方式判断权限(该方式不能动态修改权限.)"),M=f(" 拥有super角色权限可见 "),B=f(" 拥有test角色权限可见 "),I=f(" 拥有[test,super]角色权限可见 ");l();const W=P(((e,s,t,a,o,r)=>{const l=u("CurrentPermissionMode"),d=u("Alert"),S=u("a-button"),_=u("a-button-group"),y=u("Divider"),j=u("Authority"),x=u("PageWrapper"),b=n("auth");return i(),m(x,{title:"前端权限按钮示例",contentBackground:"",contentClass:"p-4",content:"由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"},{default:P((()=>[p(l),p("p",null,[T,p("a",null,c(e.userStore.getRoleListState),1)]),p(d,{class:"mt-4",type:"info",message:"点击后请查看按钮变化","show-icon":""}),p("div",g,[v,p(_,null,{default:P((()=>[p(S,{onClick:s[1]||(s[1]=s=>e.changeRole(e.RoleEnum.SUPER)),type:e.isSuper?"primary":"default"},{default:P((()=>[f(c(e.RoleEnum.SUPER),1)])),_:1},8,["type"]),p(S,{onClick:s[2]||(s[2]=s=>e.changeRole(e.RoleEnum.TEST)),type:e.isTest?"primary":"default"},{default:P((()=>[f(c(e.RoleEnum.TEST),1)])),_:1},8,["type"])])),_:1})]),p(y,null,{default:P((()=>[h])),_:1}),p(j,{value:e.RoleEnum.SUPER},{default:P((()=>[p(S,{type:"primary",class:"mx-4"},{default:P((()=>[U])),_:1})])),_:1},8,["value"]),p(j,{value:e.RoleEnum.TEST},{default:P((()=>[p(S,{color:"success",class:"mx-4"},{default:P((()=>[k])),_:1})])),_:1},8,["value"]),p(j,{value:[e.RoleEnum.TEST,e.RoleEnum.SUPER]},{default:P((()=>[p(S,{color:"error",class:"mx-4"},{default:P((()=>[A])),_:1})])),_:1},8,["value"]),p(y,null,{default:P((()=>[C])),_:1}),e.hasPermission(e.RoleEnum.SUPER)?(i(),m(S,{key:0,type:"primary",class:"mx-4"},{default:P((()=>[w])),_:1})):E("",!0),e.hasPermission(e.RoleEnum.TEST)?(i(),m(S,{key:1,color:"success",class:"mx-4"},{default:P((()=>[D])),_:1})):E("",!0),e.hasPermission([e.RoleEnum.TEST,e.RoleEnum.SUPER])?(i(),m(S,{key:2,color:"error",class:"mx-4"},{default:P((()=>[L])),_:1})):E("",!0),p(y,null,{default:P((()=>[O])),_:1}),R(p(S,{type:"primary",class:"mx-4"},{default:P((()=>[M])),_:1},512),[[b,e.RoleEnum.SUPER]]),R(p(S,{color:"success",class:"mx-4"},{default:P((()=>[B])),_:1},512),[[b,e.RoleEnum.TEST]]),R(p(S,{color:"error",class:"mx-4"},{default:P((()=>[I])),_:1},512),[[b,[e.RoleEnum.TEST,e.RoleEnum.SUPER]]])])),_:1})}));b.render=W,b.__scopeId="data-v-135f74ce";export default b;
