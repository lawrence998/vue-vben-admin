import{I as e}from"./index.39c71d74.js";import{_ as t}from"./index.36364fca.js";import{_ as i}from"./index.8ecac3a2.js";import{d as s,i as o,r,o as a,f as d,p as m,g as p,aS as n,aT as c,q as j}from"./index.aa8837b6.js";import"./vendor.3b1829c7.js";import"./index.fff29afc.js";import"./SearchOutlined.746274d7.js";import"./CheckOutlined.a08241d9.js";import"./DownOutlined.43fff99f.js";import"./BasicForm.86e93148.js";import"./index.6ee7de89.js";import"./index.16ed14f7.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.ed3ee191.js";import"./isEqual.4de048ea.js";import"./get.e5fb9fc7.js";import"./_baseProperty.74f89655.js";import"./toInteger.7ffdaced.js";import"./index.fb14b84c.js";import"./index.205d70bf.js";import"./EyeOutlined.1675c999.js";import"./index.2add1d3e.js";import"./index.404f9862.js";import"./index.dc59a2ae.js";import"./UpOutlined.22514976.js";import"./index.bb23781d.js";import"./RightOutlined.c57ea3e1.js";import"./RedoOutlined.7a0cc756.js";import"./index.925dca2a.js";import"./EllipsisOutlined.9864ef87.js";import"./types.85166bab.js";import"./Tree.c7330391.js";import"./util.df23b510.js";import"./useFormItem.60294112.js";/* empty css              */import"./uuid.ed56ef78.js";import"./index.f71cfaaa.js";import"./DeleteOutlined.a544c39e.js";import"./index.16adfb3c.js";import"./useModal.379d0a1b.js";import"./useTimeout.3a93190b.js";import"./useWindowSizeFn.4845d6a6.js";import"./ScrollContainer.9e43c09e.js";import"./index.651ec7dc.js";import"./domUtils.eb070da7.js";import"./_stringToArray.774233d0.js";import"./useScrollTo.8821b79c.js";import"./FullscreenOutlined.dd09674b.js";import"./index.83844f43.js";import"./Dropdown.4b58e2ac.js";import"./index.b73a943e.js";import"./LeftOutlined.e6fdeabd.js";import"./download.c5c5a8a9.js";import"./index.db148223.js";import"./DoubleLeftOutlined.08ec7a1e.js";import"./DoubleRightOutlined.a7ac24b6.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.0044e722.js";import"./CaretDownFilled.9e1eaa19.js";import"./useForm.540c221d.js";import"./useSortable.a73d0b57.js";import"./clickOutside.f8670db1.js";import"./useExpose.2502847e.js";import"./index.957f6784.js";import"./index.d7580f65.js";import"./usePageContext.361ae095.js";import"./ArrowLeftOutlined.57e95653.js";var l=s({components:{BasicTable:t,ImpExcel:e,PageWrapper:i},setup(){const e=o([]);return{loadDataSuccess:function(t){e.value=[];for(const i of t){const{header:t,results:s,meta:{sheetName:o}}=i,r=[];for(const e of t)r.push({title:e,dataIndex:e});e.value.push({title:o,dataSource:s,columns:r})}},tableListRef:e}}});const u=j(" 导入Excel ");l.render=function(e,t,i,s,o,j){const l=r("a-button"),f=r("ImpExcel"),b=r("BasicTable"),x=r("PageWrapper");return a(),d(x,{title:"excel数据导入示例"},{default:m((()=>[p(f,{onSuccess:e.loadDataSuccess},{default:m((()=>[p(l,{class:"m-3"},{default:m((()=>[u])),_:1})])),_:1},8,["onSuccess"]),(a(!0),d(n,null,c(e.tableListRef,((e,t)=>(a(),d(b,{key:t,title:e.title,columns:e.columns,dataSource:e.dataSource},null,8,["title","columns","dataSource"])))),128))])),_:1})};export default l;
