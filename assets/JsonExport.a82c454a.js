import{_ as e}from"./index.36364fca.js";import"./index.39c71d74.js";import{c as i,d as t,j as o}from"./data.6014c3d3.js";import{_ as s}from"./index.8ecac3a2.js";import{d as r,r as d,o as a,f as m,p as n,g as p,q as j}from"./index.aa8837b6.js";import"./index.fff29afc.js";import"./SearchOutlined.746274d7.js";import"./CheckOutlined.a08241d9.js";import"./DownOutlined.43fff99f.js";import"./BasicForm.86e93148.js";import"./index.6ee7de89.js";import"./index.16ed14f7.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.ed3ee191.js";import"./isEqual.4de048ea.js";import"./get.e5fb9fc7.js";import"./_baseProperty.74f89655.js";import"./toInteger.7ffdaced.js";import"./index.fb14b84c.js";import"./index.205d70bf.js";import"./EyeOutlined.1675c999.js";import"./index.2add1d3e.js";import"./index.404f9862.js";import"./index.dc59a2ae.js";import"./UpOutlined.22514976.js";import"./index.bb23781d.js";import"./RightOutlined.c57ea3e1.js";import"./RedoOutlined.7a0cc756.js";import"./index.925dca2a.js";import"./EllipsisOutlined.9864ef87.js";import"./types.85166bab.js";import"./Tree.c7330391.js";import"./util.df23b510.js";import"./useFormItem.60294112.js";/* empty css              */import"./uuid.ed56ef78.js";import"./index.f71cfaaa.js";import"./DeleteOutlined.a544c39e.js";import"./index.16adfb3c.js";import"./useModal.379d0a1b.js";import"./useTimeout.3a93190b.js";import"./useWindowSizeFn.4845d6a6.js";import"./ScrollContainer.9e43c09e.js";import"./index.651ec7dc.js";import"./domUtils.eb070da7.js";import"./_stringToArray.774233d0.js";import"./useScrollTo.8821b79c.js";import"./FullscreenOutlined.dd09674b.js";import"./index.83844f43.js";import"./Dropdown.4b58e2ac.js";import"./index.b73a943e.js";import"./LeftOutlined.e6fdeabd.js";import"./download.c5c5a8a9.js";import"./index.db148223.js";import"./DoubleLeftOutlined.08ec7a1e.js";import"./DoubleRightOutlined.a7ac24b6.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.0044e722.js";import"./CaretDownFilled.9e1eaa19.js";import"./useForm.540c221d.js";import"./useSortable.a73d0b57.js";import"./clickOutside.f8670db1.js";import"./useExpose.2502847e.js";import"./index.957f6784.js";import"./index.d7580f65.js";import"./usePageContext.361ae095.js";import"./ArrowLeftOutlined.57e95653.js";var c=r({components:{BasicTable:e,PageWrapper:s},setup:()=>({defaultHeader:function(){o({data:t,filename:"使用key作为默认头部.xlsx"})},customHeader:function(){o({data:t,header:{id:"ID",name:"姓名",age:"年龄",no:"编号",address:"地址",beginTime:"开始时间",endTime:"结束时间"},filename:"自定义头部.xlsx",json2sheetOpts:{header:["name","id"]}})},columns:i,data:t})});const l=j(" 导出：默认头部 "),f=j(" 导出：自定义头部 ");c.render=function(e,i,t,o,s,r){const j=d("a-button"),c=d("BasicTable"),u=d("PageWrapper");return a(),m(u,{title:"导出示例",content:"根据JSON格式的数据进行导出"},{default:n((()=>[p(c,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:n((()=>[p(j,{onClick:e.defaultHeader},{default:n((()=>[l])),_:1},8,["onClick"]),p(j,{onClick:e.customHeader},{default:n((()=>[f])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default c;
