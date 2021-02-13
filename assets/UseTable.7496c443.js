import{_ as e}from"./index.65e86e12.js";import{getBasicColumns as t,getBasicShortColumns as i}from"./tableData.252346e9.js";import{d as o,g as s,h as n,o as a,i as l,j as r,w as c,m as d}from"./index.b35d627b.js";import{d as m}from"./table.b866a54a.js";import{u as p}from"./useTable.d97d23c5.js";import"./index.b1b871ed.js";import"./SearchOutlined.2d9a2a5e.js";import"./CheckOutlined.1e3689b0.js";import"./DownOutlined.9676ed0b.js";import"./BasicForm.408555fc.js";import"./index.de7d5ef5.js";import"./index.b8d712d0.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.919925d7.js";import"./isEqual.81a8f73e.js";import"./get.f7a09bef.js";import"./_baseProperty.74f89655.js";import"./toInteger.ba85bbaa.js";import"./index.611e1dd6.js";import"./index.e3f20d1f.js";import"./EyeOutlined.3c8e22f6.js";import"./index.3d19020c.js";import"./index.1247f73f.js";import"./UpOutlined.27cd31ae.js";import"./index.fdaf4dfb.js";import"./RightOutlined.8f262b29.js";import"./RedoOutlined.875f929c.js";import"./index.b30471b8.js";import"./EllipsisOutlined.73434e58.js";import"./types.83a5535a.js";import"./Tree.7c786691.js";import"./util.712d4622.js";/* empty css              */import"./uuid.9bbe5f4a.js";import"./index.6db39300.js";import"./DeleteOutlined.9c2c0df5.js";import"./index.1532450f.js";import"./useModal.c404053c.js";import"./useTimeout.aed71b31.js";import"./useWindowSizeFn.782faf75.js";import"./ScrollContainer.992f13b6.js";import"./index.15783dfd.js";import"./domUtils.9d257af5.js";import"./_stringToArray.d2fcf67e.js";import"./useScrollTo.a712a7b3.js";import"./FullscreenOutlined.d5e2b78d.js";import"./index.c5a1f163.js";import"./Dropdown.31b15b73.js";import"./index.4a68e0e9.js";import"./LeftOutlined.efceb197.js";import"./download.68be7467.js";import"./index.12125303.js";import"./DoubleLeftOutlined.68ba66ac.js";import"./DoubleRightOutlined.84839c9c.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.f2853e28.js";import"./CaretDownFilled.d942ecdd.js";import"./useForm.29669a4d.js";import"./clickOutside.69c0d795.js";import"./useSortable.1ecd4d79.js";import"./useExpose.ef2e2945.js";var f=o({components:{BasicTable:e},setup(){const{createMessage:e}=s(),[o,{setLoading:n,setColumns:a,getColumns:l,getDataSource:r,reload:c,getPaginationRef:d,setPagination:f,getSelectRows:u,getSelectRowKeys:j,setSelectedRowKeys:b,clearSelectedRowKeys:g}]=p({canResize:!0,title:"useTable示例",titleHelpMessage:"使用useTable调用表格内方法",api:m,columns:t(),rowKey:"id",showTableSetting:!0,rowSelection:{type:"checkbox"}});return{registerTable:o,changeLoading:function(){n(!0),setTimeout((()=>{n(!1)}),1e3)},changeColumns:function(){a(i())},reloadTable:function(){a(t()),c({page:1})},getColumn:function(){e.info("请在控制台查看！")},getTableData:function(){e.info("请在控制台查看！")},getPagination:function(){e.info("请在控制台查看！")},setPaginationInfo:function(){f({current:2}),c()},getSelectRowList:function(){e.info("请在控制台查看！")},getSelectRowKeyList:function(){e.info("请在控制台查看！")},setSelectedRowKeyList:function(){b(["0","1","2"])},clearSelect:function(){g()}}}});const u={class:"p-4"},j={class:"mb-4"},b=d(" 还原 "),g=d(" 开启loading "),C=d(" 更改Columns "),k=d(" 获取Columns "),x=d(" 获取表格数据 "),S=d(" 跳转到第2页 "),w={class:"mb-4"},T=d(" 获取选中行 "),R=d(" 获取选中行Key "),O=d(" 设置选中行 "),_=d(" 清空选中行 "),y=d(" 获取分页信息 ");f.render=function(e,t,i,o,s,d){const m=n("a-button"),p=n("BasicTable");return a(),l("div",u,[r("div",j,[r(m,{class:"mr-2",onClick:e.reloadTable},{default:c((()=>[b])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.changeLoading},{default:c((()=>[g])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.changeColumns},{default:c((()=>[C])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.getColumn},{default:c((()=>[k])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.getTableData},{default:c((()=>[x])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.setPaginationInfo},{default:c((()=>[S])),_:1},8,["onClick"])]),r("div",w,[r(m,{class:"mr-2",onClick:e.getSelectRowList},{default:c((()=>[T])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:c((()=>[R])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:c((()=>[O])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.clearSelect},{default:c((()=>[_])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.getPagination},{default:c((()=>[y])),_:1},8,["onClick"])]),r(p,{onRegister:e.registerTable},null,8,["onRegister"])])};export default f;
