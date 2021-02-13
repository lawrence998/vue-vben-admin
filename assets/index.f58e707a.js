import r from"./DetailModal.b7a74caf.js";import{_ as e}from"./index.65e86e12.js";import{u as o}from"./useModal.c404053c.js";import{ci as i,d as t,r as s,u as a,aT as n,x as d,N as l,cj as m,h as p,o as c,i as f,aL as j,aM as u,a3 as b,b8 as x,j as g,w as E,m as y,l as D}from"./index.b35d627b.js";import{getColumns as O}from"./data.86d60a60.js";import{_ as T}from"./BasicForm.408555fc.js";import{u as h}from"./useTable.d97d23c5.js";import"./index.13bb7942.js";import"./index.d92c4ef9.js";import"./responsiveObserve.c545f1cc.js";import"./ScrollContainer.992f13b6.js";import"./index.15783dfd.js";import"./domUtils.9d257af5.js";import"./_stringToArray.d2fcf67e.js";import"./RightOutlined.8f262b29.js";/* empty css              */import"./useTimeout.aed71b31.js";import"./useScrollTo.a712a7b3.js";import"./get.f7a09bef.js";import"./useDescription.37c73441.js";import"./index.b1b871ed.js";import"./SearchOutlined.2d9a2a5e.js";import"./CheckOutlined.1e3689b0.js";import"./DownOutlined.9676ed0b.js";import"./index.de7d5ef5.js";import"./index.b8d712d0.js";import"./vendor.3b1829c7.js";import"./findIndex.919925d7.js";import"./isEqual.81a8f73e.js";import"./_baseProperty.74f89655.js";import"./toInteger.ba85bbaa.js";import"./index.b30471b8.js";import"./EllipsisOutlined.73434e58.js";import"./types.83a5535a.js";import"./index.12125303.js";import"./LeftOutlined.efceb197.js";import"./DoubleLeftOutlined.68ba66ac.js";import"./DoubleRightOutlined.84839c9c.js";import"./zh_CN.8094f4d6.js";import"./uuid.9bbe5f4a.js";import"./index.6db39300.js";import"./util.712d4622.js";import"./DeleteOutlined.9c2c0df5.js";import"./EyeOutlined.3c8e22f6.js";import"./Dropdown.31b15b73.js";import"./scrollTo.c1e0f75f.js";import"./transButton.f2853e28.js";import"./CaretDownFilled.d942ecdd.js";import"./useForm.29669a4d.js";import"./clickOutside.69c0d795.js";import"./index.e3f20d1f.js";import"./index.1247f73f.js";import"./UpOutlined.27cd31ae.js";import"./index.fdaf4dfb.js";import"./useSortable.1ecd4d79.js";import"./useWindowSizeFn.782faf75.js";import"./index.c5a1f163.js";import"./useExpose.ef2e2945.js";import"./FullscreenOutlined.d5e2b78d.js";import"./index.3d19020c.js";import"./index.611e1dd6.js";import"./RedoOutlined.875f929c.js";import"./Tree.7c786691.js";import"./index.1532450f.js";import"./index.4a68e0e9.js";import"./download.68be7467.js";var w;(w||(w={})).Error="/error";var C=t({name:"ErrorHandler",components:{DetailModal:r,BasicTable:e,TableAction:T},setup(){const r=s(),e=s([]),{t:t}=a(),[p,{setTableData:c}]=h({title:t("sys.errorLog.tableTitle"),columns:O(),actionColumn:{width:80,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),[f,{openModal:j}]=o();return n((()=>m.getErrorInfoState),(r=>{d((()=>{c(l(r))}))}),{immediate:!0}),{register:p,registerModal:f,handleDetail:function(e){r.value=e,j(!0)},fireVueError:function(){throw new Error("fire vue error!")},fireResourceError:function(){e.value.push(`${(new Date).getTime()}.png`)},fireAjaxError:async function(){await i.request({url:w.Error,method:"GET"})},imgList:e,rowInfo:r,t:t}}});const R={class:"p-4"};C.render=function(r,e,o,i,t,s){const a=p("DetailModal"),n=p("a-button"),d=p("TableAction"),l=p("BasicTable");return c(),f("div",R,[(c(!0),f(j,null,u(r.imgList,(r=>b((c(),f("img",{key:r,src:r},null,8,["src"])),[[x,!1]]))),128)),g(a,{info:r.rowInfo,onRegister:r.registerModal},null,8,["info","onRegister"]),g(l,{onRegister:r.register,class:"error-handle-table"},{toolbar:E((()=>[g(n,{onClick:r.fireVueError,type:"primary"},{default:E((()=>[y(D(r.t("sys.errorLog.fireVueError")),1)])),_:1},8,["onClick"]),g(n,{onClick:r.fireResourceError,type:"primary"},{default:E((()=>[y(D(r.t("sys.errorLog.fireResourceError")),1)])),_:1},8,["onClick"]),g(n,{onClick:r.fireAjaxError,type:"primary"},{default:E((()=>[y(D(r.t("sys.errorLog.fireAjaxError")),1)])),_:1},8,["onClick"])])),action:E((({record:e})=>[g(d,{actions:[{label:r.t("sys.errorLog.tableActionDesc"),onClick:r.handleDetail.bind(null,e)}]},null,8,["actions"])])),_:1},8,["onRegister"])])};export default C;
