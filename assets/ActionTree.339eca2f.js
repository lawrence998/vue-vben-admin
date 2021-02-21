import{B as e,t}from"./data.dcacd831.js";import{d as a}from"./ScrollContainer.9e43c09e.js";import{d as n,i as s,n as l,s as o,r,o as c,f as d,p as i,g as p,q as u}from"./index.aa8837b6.js";import{_ as f}from"./index.8ecac3a2.js";import"./index.651ec7dc.js";import"./domUtils.eb070da7.js";import"./_stringToArray.774233d0.js";import"./RightOutlined.c57ea3e1.js";/* empty css              */import"./useTimeout.3a93190b.js";import"./useScrollTo.8821b79c.js";import"./vendor.3b1829c7.js";import"./index.957f6784.js";import"./index.925dca2a.js";import"./EllipsisOutlined.9864ef87.js";import"./types.85166bab.js";import"./isEqual.4de048ea.js";import"./toInteger.7ffdaced.js";import"./DownOutlined.43fff99f.js";import"./index.d7580f65.js";import"./usePageContext.361ae095.js";import"./transButton.0044e722.js";import"./ArrowLeftOutlined.57e95653.js";var m=n({components:{BasicTree:e,CollapseContainer:a,PageWrapper:f},setup(){const e=s(null),{createMessage:a}=l();function n(){const t=o(e);if(!t)throw new Error("tree is null!");return t}return{treeData:t,treeRef:e,handleLevel:function(e){n().filterByLevel(e)},handleSetCheckData:function(){n().setCheckedKeys(["0-0"])},handleGetCheckData:function(){const e=n().getCheckedKeys();a.success(JSON.stringify(e))},handleSetSelectData:function(){n().setSelectedKeys(["0-0"])},handleGetSelectData:function(){const e=n().getSelectedKeys();a.success(JSON.stringify(e))},handleSetExpandData:function(){n().setExpandedKeys(["0-0"])},handleGetExpandData:function(){const e=n().getExpandedKeys();a.success(JSON.stringify(e))},appendNodeByKey:function(e=null){n().insertNodeByKey({parentKey:e,node:{title:"新增节点",key:"2-2-2"},push:"push"})},deleteNodeByKey:function(e){n().deleteNodeByKey(e)},updateNodeByKey:function(e){n().updateNodeByKey(e,{title:"parent2-new"})}}}});const y={class:"mb-4"},C=u(" 显示到第2级 "),h=u(" 显示到第1级 "),k=u(" 设置勾选数据 "),j=u(" 获取勾选数据 "),D=u(" 设置选中数据 "),K=u(" 获取选中数据 "),S=u(" 设置展开数据 "),x=u(" 获取展开数据 "),B={class:"mb-4"},_=u(" 添加根节点 "),g=u(" 添加在parent3内添加节点 "),N=u(" 删除parent3节点 "),b=u(" 更新parent2节点 ");m.render=function(e,t,a,n,s,l){const o=r("a-button"),u=r("BasicTree"),f=r("CollapseContainer"),m=r("PageWrapper");return c(),d(m,{title:"Tree函数操作示例",contentBackground:"",contentClass:"p-4"},{default:i((()=>[p("div",y,[p(o,{onClick:t[1]||(t[1]=t=>e.handleLevel(2)),class:"mr-2"},{default:i((()=>[C])),_:1}),p(o,{onClick:t[2]||(t[2]=t=>e.handleLevel(1)),class:"mr-2"},{default:i((()=>[h])),_:1}),p(o,{onClick:e.handleSetCheckData,class:"mr-2"},{default:i((()=>[k])),_:1},8,["onClick"]),p(o,{onClick:e.handleGetCheckData,class:"mr-2"},{default:i((()=>[j])),_:1},8,["onClick"]),p(o,{onClick:e.handleSetSelectData,class:"mr-2"},{default:i((()=>[D])),_:1},8,["onClick"]),p(o,{onClick:e.handleGetSelectData,class:"mr-2"},{default:i((()=>[K])),_:1},8,["onClick"]),p(o,{onClick:e.handleSetExpandData,class:"mr-2"},{default:i((()=>[S])),_:1},8,["onClick"]),p(o,{onClick:e.handleGetExpandData,class:"mr-2"},{default:i((()=>[x])),_:1},8,["onClick"])]),p("div",B,[p(o,{onClick:t[3]||(t[3]=t=>e.appendNodeByKey(null)),class:"mr-2"},{default:i((()=>[_])),_:1}),p(o,{onClick:t[4]||(t[4]=t=>e.appendNodeByKey("2-2")),class:"mr-2"},{default:i((()=>[g])),_:1}),p(o,{onClick:t[5]||(t[5]=t=>e.deleteNodeByKey("2-2")),class:"mr-2"},{default:i((()=>[N])),_:1}),p(o,{onClick:t[6]||(t[6]=t=>e.updateNodeByKey("1-1")),class:"mr-2"},{default:i((()=>[b])),_:1})]),p(f,{title:"函数操作",class:"mr-4",canExpan:!1,style:{width:"33%"}},{default:i((()=>[p(u,{treeData:e.treeData,ref:"treeRef",checkable:!0},null,8,["treeData"])])),_:1})])),_:1})};export default m;
