import{d as s,c as e,bI as o,dA as i,bH as n,r,o as t,f as a,g as d,p as m,q as p,t as c}from"./index.aa8837b6.js";import{D as l}from"./index.83844f43.js";import"./vendor.3b1829c7.js";var u=s({name:"CurrentPermissionMode",components:{Divider:l},setup(){const s=e((()=>n.getProjectConfig.permissionMode)),{togglePermissionMode:r}=i();return{permissionMode:s,PermissionModeEnum:o,togglePermissionMode:r}}});const f={class:"mt-2"},g=p(" 当前权限模式： "),M=p(" 切换权限模式 ");u.render=function(s,e,o,i,n,l){const u=r("a-button"),P=r("Divider");return t(),a("div",f,[g,d(u,{type:"link"},{default:m((()=>[p(c(s.permissionMode===s.PermissionModeEnum.BACK?"后台权限模式":"前端角色权限模式"),1)])),_:1}),d(u,{class:"ml-4",onClick:s.togglePermissionMode,type:"primary"},{default:m((()=>[M])),_:1},8,["onClick"]),d(P)])};export default u;
