import{d as e,f as t,dy as a,K as s,dz as o,dn as r,dp as n,h as i,o as l,i as d,bw as p,j as u,l as m,m as f}from"./index.b35d627b.js";import{A as c}from"./index.1532450f.js";import j from"./CurrentPermissionMode.fa53d8a6.js";import{_ as b}from"./index.b87f3b54.js";import"./vendor.3b1829c7.js";import"./index.c5a1f163.js";import"./index.14695b3f.js";import"./index.b30471b8.js";import"./RightOutlined.8f262b29.js";import"./EllipsisOutlined.73434e58.js";import"./types.83a5535a.js";import"./isEqual.81a8f73e.js";import"./toInteger.ba85bbaa.js";import"./DownOutlined.9676ed0b.js";/* empty css              */import"./index.df0929cf.js";import"./usePageContext.ceff001a.js";import"./transButton.f2853e28.js";import"./ArrowLeftOutlined.a6b6ea94.js";var R=e({components:{Alert:c,CurrentPermissionMode:j,PageWrapper:b},setup(){const{changeRole:e}=o();return{userStore:t,RoleEnum:a,isSuper:s((()=>t.getRoleListState.includes(a.SUPER))),isTest:s((()=>t.getRoleListState.includes(a.TEST))),changeRole:e}}});const g=p("data-v-9a73aaae");r("data-v-9a73aaae");const E=f(" 当前角色: "),S={class:"mt-4"},x=f(" 权限切换(请先切换权限模式为前端角色权限模式): ");n();const y=g(((e,t,a,s,o,r)=>{const n=i("CurrentPermissionMode"),p=i("Alert"),c=i("a-button"),j=i("a-button-group"),b=i("PageWrapper");return l(),d(b,{title:"前端权限示例",contentBackground:"",contentClass:"p-4",content:"由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"},{default:g((()=>[u(n),u("p",null,[E,u("a",null,m(e.userStore.getRoleListState),1)]),u(p,{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),u("div",S,[x,u(j,null,{default:g((()=>[u(c,{onClick:t[1]||(t[1]=t=>e.changeRole(e.RoleEnum.SUPER)),type:e.isSuper?"primary":"default"},{default:g((()=>[f(m(e.RoleEnum.SUPER),1)])),_:1},8,["type"]),u(c,{onClick:t[2]||(t[2]=t=>e.changeRole(e.RoleEnum.TEST)),type:e.isTest?"primary":"default"},{default:g((()=>[f(m(e.RoleEnum.TEST),1)])),_:1},8,["type"])])),_:1})])])),_:1})}));R.render=y,R.__scopeId="data-v-9a73aaae";export default R;
