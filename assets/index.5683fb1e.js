import e from"./DetailModal.7a8a07ba.js";import{_ as r}from"./index.36364fca.js";import{u as o}from"./useModal.379d0a1b.js";import{ci as i,d as t,i as s,a,a_ as n,D as d,T as m,cj as l,r as p,o as c,f as j,aS as f,aT as u,w as b,v as x,g,p as E,q as y,t as D}from"./index.aa8837b6.js";import{getColumns as T}from"./data.53e95454.js";import{_ as O}from"./BasicForm.86e93148.js";import{u as w}from"./useTable.01b066f7.js";import"./index.0b7a8a7b.js";import"./index.1ecaf6c7.js";import"./responsiveObserve.c545f1cc.js";import"./ScrollContainer.9e43c09e.js";import"./index.651ec7dc.js";import"./domUtils.eb070da7.js";import"./_stringToArray.774233d0.js";import"./RightOutlined.c57ea3e1.js";/* empty css              */import"./useTimeout.3a93190b.js";import"./useScrollTo.8821b79c.js";import"./get.e5fb9fc7.js";import"./useDescription.9caeb910.js";import"./index.fff29afc.js";import"./SearchOutlined.746274d7.js";import"./CheckOutlined.a08241d9.js";import"./DownOutlined.43fff99f.js";import"./index.2add1d3e.js";import"./index.925dca2a.js";import"./EllipsisOutlined.9864ef87.js";import"./types.85166bab.js";import"./isEqual.4de048ea.js";import"./toInteger.7ffdaced.js";import"./index.db148223.js";import"./LeftOutlined.e6fdeabd.js";import"./DoubleLeftOutlined.08ec7a1e.js";import"./DoubleRightOutlined.a7ac24b6.js";import"./zh_CN.8094f4d6.js";import"./uuid.ed56ef78.js";import"./findIndex.ed3ee191.js";import"./_baseProperty.74f89655.js";import"./index.f71cfaaa.js";import"./util.df23b510.js";import"./DeleteOutlined.a544c39e.js";import"./EyeOutlined.1675c999.js";import"./Dropdown.4b58e2ac.js";import"./scrollTo.c1e0f75f.js";import"./transButton.0044e722.js";import"./CaretDownFilled.9e1eaa19.js";import"./useForm.540c221d.js";import"./index.205d70bf.js";import"./index.dc59a2ae.js";import"./UpOutlined.22514976.js";import"./index.bb23781d.js";import"./useSortable.a73d0b57.js";import"./clickOutside.f8670db1.js";import"./useWindowSizeFn.4845d6a6.js";import"./index.83844f43.js";import"./useExpose.2502847e.js";import"./FullscreenOutlined.dd09674b.js";import"./vendor.3b1829c7.js";import"./index.404f9862.js";import"./index.6ee7de89.js";import"./index.16ed14f7.js";import"./index.fb14b84c.js";import"./RedoOutlined.7a0cc756.js";import"./Tree.c7330391.js";import"./useFormItem.60294112.js";import"./index.16adfb3c.js";import"./index.b73a943e.js";import"./download.c5c5a8a9.js";var h;(h||(h={})).Error="/error";var C=t({name:"ErrorHandler",components:{DetailModal:e,BasicTable:r,TableAction:O},setup(){const e=s(),r=s([]),{t:t}=a(),[p,{setTableData:c}]=w({title:t("sys.errorLog.tableTitle"),columns:T(),actionColumn:{width:80,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),[j,{openModal:f}]=o();return n((()=>l.getErrorInfoState),(e=>{d((()=>{c(m(e))}))}),{immediate:!0}),{register:p,registerModal:j,handleDetail:function(r){e.value=r,f(!0)},fireVueError:function(){throw new Error("fire vue error!")},fireResourceError:function(){r.value.push(`${(new Date).getTime()}.png`)},fireAjaxError:async function(){await i.request({url:h.Error,method:"GET"})},imgList:r,rowInfo:e,t:t}}});const R={class:"p-4"};C.render=function(e,r,o,i,t,s){const a=p("DetailModal"),n=p("a-button"),d=p("TableAction"),m=p("BasicTable");return c(),j("div",R,[(c(!0),j(f,null,u(e.imgList,(e=>b((c(),j("img",{key:e,src:e},null,8,["src"])),[[x,!1]]))),128)),g(a,{info:e.rowInfo,onRegister:e.registerModal},null,8,["info","onRegister"]),g(m,{onRegister:e.register,class:"error-handle-table"},{toolbar:E((()=>[g(n,{onClick:e.fireVueError,type:"primary"},{default:E((()=>[y(D(e.t("sys.errorLog.fireVueError")),1)])),_:1},8,["onClick"]),g(n,{onClick:e.fireResourceError,type:"primary"},{default:E((()=>[y(D(e.t("sys.errorLog.fireResourceError")),1)])),_:1},8,["onClick"]),g(n,{onClick:e.fireAjaxError,type:"primary"},{default:E((()=>[y(D(e.t("sys.errorLog.fireAjaxError")),1)])),_:1},8,["onClick"])])),action:E((({record:r})=>[g(d,{actions:[{label:e.t("sys.errorLog.tableActionDesc"),onClick:e.handleDetail.bind(null,r)}]},null,8,["actions"])])),_:1},8,["onRegister"])])};export default C;
