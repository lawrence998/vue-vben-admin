let t=document.createElement("style");t.innerHTML=".todo-list[data-v-352db18b]{position:relative}.todo-list__total[data-v-352db18b]{display:inline-block;width:20px;height:20px;font-size:12px;line-height:20px;color:#fff;text-align:center;background:rgba(255,0,0,.7);border-radius:50%}.todo-list__all[data-v-352db18b]{position:absolute;top:0;right:10px;height:56px;font-size:24px;line-height:56px;text-align:center;cursor:pointer}.todo-list__item[data-v-352db18b]{padding:8px}.todo-list__item-title[data-v-352db18b]{font-size:14px;font-weight:400;line-height:22px;color:#1c1d21}.todo-list__item-memo[data-v-352db18b]{font-size:12px;font-weight:400;line-height:22px;color:#7c8087}.todo-list__item-desc[data-v-352db18b]{font-size:12px;line-height:22px;color:#7c8087}",document.head.appendChild(t);import{k as e,q as i,R as o,a as s,V as a,W as l,i as n,o as r,j as d,Y as p,aH as m,m as c,n as b,X as u}from"./index.b2563c25.js";import"./xlsx.a48e520c.js";import"./index.6aa4fb10.js";import"./Trigger.69a42174.js";import"./omit.2978fa0a.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.52f031c1.js";import"./CheckOutlined.d04cd0d0.js";import"./colors.7cad5419.js";import"./RightOutlined.6271d6f8.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4a4f7bba.js";import{T as f}from"./index.de1b91a6.js";import"./LeftOutlined.8cd70964.js";import{T as j}from"./index.34bfa216.js";import"./index.561335a2.js";import"./zh_CN.0242bd16.js";import{L as _}from"./index.1eb0cb2a.js";import{s as x}from"./index.ece84d19.js";import"./useTimeout.0990510e.js";import"./resizeEvent.e79f1ab5.js";import"./domUtils.8b34c94c.js";import"./tsxHelper.24b178b2.js";import"./useExpose.03135198.js";import"./animation.f3edcb57.js";import"./useScrollTo.ef044c36.js";import"./index.47077e70.js";import"./index.aa07d4db.js";import"./propTypes.db13ce1b.js";import{t as g}from"./data.edc06832.js";var h={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"};function v(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var O=function(t,s){var a=function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?Object(arguments[e]):{},o=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(i).filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable})))),o.forEach((function(e){v(t,e,i[e])}))}return t}({},t,s.attrs);return e(o,i(a,{icon:h}),null)};O.displayName="EllipsisOutlined",O.inheritAttrs=!1;var y=s({name:"TodoList",components:{CollapseContainer:x,List:_,ListItem:_.Item,ListItemMeta:_.Item.Meta,Tag:j,Tooltip:f,EllipsisOutlined:O},setup:()=>({todoList:g})});const T=u("data-v-352db18b");a("data-v-352db18b");const L=e("span",null,[b(" 待办事项 "),e("span",{class:"todo-list__total"},"30")],-1),z={class:"todo-list__item-title"},w={class:"todo-list__item-memo"},E={class:"todo-list__item-desc"},k=e("br",null,null,-1),C=b("待审批"),I={class:"todo-list__all"},M=b("查看更多");l();const P=T(((t,i,o,s,a,l)=>{const u=n("ListItemMeta"),f=n("Tag"),j=n("a-button"),_=n("ListItem"),x=n("List"),g=n("EllipsisOutlined"),h=n("Tooltip"),v=n("CollapseContainer");return r(),d(v,{class:"todo-list",title:"待办事项",canExpan:!1},{title:T((()=>[L])),default:T((()=>[e(x,null,{default:T((()=>[(r(!0),d(p,null,m(t.todoList,(t=>(r(),d(_,{key:t.id,class:"todo-list__item"},{default:T((()=>[e(u,null,{title:T((()=>[e("div",null,[e("span",z,c(t.title),1),e("span",w,c(t.memo),1)])])),description:T((()=>[e("div",E,[b(" 提交人："+c(t.sbmter)+" ",1),k,b(" 提交时间："+c(t.sbmtTime),1)])])),_:2},1024),e(j,{type:"link"},{default:T((()=>[e(f,{color:"blue"},{default:T((()=>[C])),_:1})])),_:1})])),_:2},1024)))),128))])),_:1}),e("div",I,[e(h,{placement:"topRight"},{title:T((()=>[M])),default:T((()=>[e(g)])),_:1})])])),_:1})}));y.render=P,y.__scopeId="data-v-352db18b";export default y;