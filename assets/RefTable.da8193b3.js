import{_ as e}from"./index.36364fca.js";import{getBasicColumns as t,getBasicShortColumns as i}from"./tableData.252346e9.js";import{d as o,i as s,n,s as a,r as l,o as r,f as c,g as d,p as m,q as p}from"./index.aa8837b6.js";import{d as f}from"./table.aed195f0.js";import"./index.fff29afc.js";import"./SearchOutlined.746274d7.js";import"./CheckOutlined.a08241d9.js";import"./DownOutlined.43fff99f.js";import"./BasicForm.86e93148.js";import"./index.6ee7de89.js";import"./index.16ed14f7.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.ed3ee191.js";import"./isEqual.4de048ea.js";import"./get.e5fb9fc7.js";import"./_baseProperty.74f89655.js";import"./toInteger.7ffdaced.js";import"./index.fb14b84c.js";import"./index.205d70bf.js";import"./EyeOutlined.1675c999.js";import"./index.2add1d3e.js";import"./index.404f9862.js";import"./index.dc59a2ae.js";import"./UpOutlined.22514976.js";import"./index.bb23781d.js";import"./RightOutlined.c57ea3e1.js";import"./RedoOutlined.7a0cc756.js";import"./index.925dca2a.js";import"./EllipsisOutlined.9864ef87.js";import"./types.85166bab.js";import"./Tree.c7330391.js";import"./util.df23b510.js";import"./useFormItem.60294112.js";/* empty css              */import"./uuid.ed56ef78.js";import"./index.f71cfaaa.js";import"./DeleteOutlined.a544c39e.js";import"./index.16adfb3c.js";import"./useModal.379d0a1b.js";import"./useTimeout.3a93190b.js";import"./useWindowSizeFn.4845d6a6.js";import"./ScrollContainer.9e43c09e.js";import"./index.651ec7dc.js";import"./domUtils.eb070da7.js";import"./_stringToArray.774233d0.js";import"./useScrollTo.8821b79c.js";import"./FullscreenOutlined.dd09674b.js";import"./index.83844f43.js";import"./Dropdown.4b58e2ac.js";import"./index.b73a943e.js";import"./LeftOutlined.e6fdeabd.js";import"./download.c5c5a8a9.js";import"./index.db148223.js";import"./DoubleLeftOutlined.08ec7a1e.js";import"./DoubleRightOutlined.a7ac24b6.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.0044e722.js";import"./CaretDownFilled.9e1eaa19.js";import"./useForm.540c221d.js";import"./useSortable.a73d0b57.js";import"./clickOutside.f8670db1.js";import"./useExpose.2502847e.js";var u=o({components:{BasicTable:e},setup(){const e=s(null),{createMessage:o}=n();function l(){const t=a(e);if(!t)throw new Error("tableAction is null");return t}return{tableRef:e,api:f,columns:t(),changeLoading:function(){l().setLoading(!0),setTimeout((()=>{l().setLoading(!1)}),1e3)},changeColumns:function(){l().setColumns(i())},reloadTable:function(){l().setColumns(t()),l().reload({page:1})},getColumn:function(){o.info("请在控制台查看！")},getTableData:function(){o.info("请在控制台查看！")},getPagination:function(){o.info("请在控制台查看！")},setPaginationInfo:function(){l().setPagination({current:2}),l().reload()},getSelectRowList:function(){o.info("请在控制台查看！")},getSelectRowKeyList:function(){o.info("请在控制台查看！")},setSelectedRowKeyList:function(){l().setSelectedRowKeys(["0","1","2"])},clearSelect:function(){l().clearSelectedRowKeys()}}}});const j={class:"p-4"},b={class:"mb-4"},C=p(" 还原 "),g=p(" 开启loading "),k=p(" 更改Columns "),x=p(" 获取Columns "),w=p(" 获取表格数据 "),R=p(" 跳转到第2页 "),S={class:"mb-4"},O=p(" 获取选中行 "),_=p(" 获取选中行Key "),y=p(" 设置选中行 "),T=p(" 清空选中行 "),L=p(" 获取分页信息 ");u.render=function(e,t,i,o,s,n){const a=l("a-button"),p=l("BasicTable");return r(),c("div",j,[d("div",b,[d(a,{class:"mr-2",onClick:e.reloadTable},{default:m((()=>[C])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.changeLoading},{default:m((()=>[g])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.changeColumns},{default:m((()=>[k])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.getColumn},{default:m((()=>[x])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.getTableData},{default:m((()=>[w])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.setPaginationInfo},{default:m((()=>[R])),_:1},8,["onClick"])]),d("div",S,[d(a,{class:"mr-2",onClick:e.getSelectRowList},{default:m((()=>[O])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:m((()=>[_])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:m((()=>[y])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.clearSelect},{default:m((()=>[T])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.getPagination},{default:m((()=>[L])),_:1},8,["onClick"])]),d(p,{canResize:!1,title:"RefTable示例",titleHelpMessage:"使用Ref调用表格内方法",ref:"tableRef",api:e.api,columns:e.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])};export default u;
