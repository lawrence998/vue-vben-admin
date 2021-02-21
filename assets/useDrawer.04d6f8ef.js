var e=Object.assign;import{a as t,ae as s,d as o,u as l,c as a,r as n,o as r,f as i,aS as c,b2 as u,m as d,p,q as f,t as g,h,g as w,i as b,cG as C,av as m,a_ as v,aw as k,s as D,ad as x,cH as y,l as $,cA as B,D as O,bB as _,by as P,w as T,aT as F,j,cI as S,ac as L,cJ as H,cK as V}from"./index.aa8837b6.js";import{D as A}from"./index.5cf84302.js";import{a as I,_ as N}from"./ScrollContainer.9e43c09e.js";import{A as q}from"./ArrowLeftOutlined.57e95653.js";import{i as M}from"./isEqual.4de048ea.js";const{t:R}=t(),z={confirmLoading:s.bool,showCancelBtn:s.bool.def(!0),cancelButtonProps:Object,cancelText:s.string.def(R("common.cancelText")),showOkBtn:s.bool.def(!0),okButtonProps:Object,okText:s.string.def(R("common.okText")),okType:s.string.def("primary"),showFooter:s.bool,footerHeight:{type:[String,Number],default:60}},E=e({isDetail:s.bool,title:s.string.def(""),loadingText:s.string,showDetailBack:s.bool.def(!0),visible:s.bool,loading:s.bool,maskClosable:s.bool.def(!0),getContainer:{type:[Object,String]},scrollOptions:{type:Object,default:null},closeFunc:{type:[Function,Object],default:null},triggerWindowResize:s.bool,destroyOnClose:s.bool},z);var G=o({name:"BasicDrawerFooter",props:e(e({},z),{height:{type:String,default:"60px"}}),emits:["ok","close"],setup(e,{emit:t}){const{prefixCls:s}=l("basic-drawer-footer");return{handleOk:function(){t("ok")},prefixCls:s,handleClose:function(){t("close")},getStyle:a((()=>{const t=`${e.height}`;return{height:t,lineHeight:t}}))}}});G.render=function(e,t,s,o,l,a){const w=n("a-button");return e.showFooter||e.$slots.footer?(r(),i("div",{key:0,class:e.prefixCls,style:e.getStyle},[e.$slots.footer?u(e.$slots,"footer",{key:1}):(r(),i(c,{key:0},[u(e.$slots,"insertFooter"),e.showCancelBtn?(r(),i(w,d({key:0},e.cancelButtonProps,{onClick:e.handleClose,class:"mr-2"}),{default:p((()=>[f(g(e.cancelText),1)])),_:1},16,["onClick"])):h("",!0),u(e.$slots,"centerFooter"),e.showOkBtn?(r(),i(w,d({key:1,type:e.okType,onClick:e.handleOk},e.okButtonProps,{class:"mr-2",loading:e.confirmLoading}),{default:p((()=>[f(g(e.okText),1)])),_:1},16,["type","onClick","loading"])):h("",!0),u(e.$slots,"appendFooter")],64))],6)):h("",!0)};var J=o({name:"BasicDrawerHeader",components:{BasicTitle:I,ArrowLeftOutlined:q},props:{isDetail:s.bool,showDetailBack:s.bool,title:s.string},emits:["close"],setup(e,{emit:t}){const{prefixCls:s}=l("basic-drawer-header");return{prefixCls:s,handleClose:function(){t("close")}}}});const K={key:1};J.render=function(e,t,s,o,l,a){const c=n("BasicTitle"),d=n("ArrowLeftOutlined");return e.isDetail?(r(),i("div",{key:1,class:[e.prefixCls,`${e.prefixCls}--detail`]},[w("span",{class:`${e.prefixCls}__twrap`},[e.showDetailBack?(r(),i("span",{key:0,onClick:t[1]||(t[1]=(...t)=>e.handleClose&&e.handleClose(...t))},[w(d,{class:`${e.prefixCls}__back`},null,8,["class"])])):h("",!0),e.title?(r(),i("span",K,g(e.title),1)):h("",!0)],2),w("span",{class:`${e.prefixCls}__toolbar`},[u(e.$slots,"titleToolbar")],2)],2)):(r(),i(c,{key:0,class:e.prefixCls},{default:p((()=>[u(e.$slots,"title"),f(" "+g(e.$slots.title?"":e.title),1)])),_:3},8,["class"]))};var W=o({components:{Drawer:A,ScrollContainer:N,DrawerFooter:G,DrawerHeader:J},inheritAttrs:!1,props:E,emits:["visible-change","ok","close","register"],setup(s,{emit:o}){const n=b(!1),r=C(),i=b(null),{t:c}=t(),{prefixVar:u,prefixCls:d}=l("basic-drawer"),p={setDrawerProps:function(e){i.value=y(D(i)||{},e),Reflect.has(e,"visible")&&(n.value=!!e.visible)},emitVisible:void 0},f=k();f&&o("register",p,f.uid);const g=a((()=>y($(s),D(i)))),h=a((()=>{const t=e(e(e({placement:"right"},D(r)),D(g)),{visible:D(n)});t.title=void 0;const{isDetail:s,width:o,wrapClassName:l,getContainer:a}=t;if(s){o||(t.width="100%");const e=`${d}__detail`;t.wrapClassName=l?`${l} ${e}`:e,a||(t.getContainer=`.${u}-layout-content`)}return t})),w=a((()=>e(e({},r),D(h)))),_=a((()=>{const{footerHeight:e,showFooter:t}=D(h);return t&&e?B(e)?`${e}px`:`${e.replace("px","")}px`:"0px"})),P=a((()=>({position:"relative",height:`calc(100% - ${D(_)})`}))),T=a((()=>{var e;return!!(null==(e=D(h))?void 0:e.loading)}));return m((()=>{n.value=s.visible})),v((()=>n.value),(e=>{O((()=>{var t;o("visible-change",e),f&&(null==(t=p.emitVisible)||t.call(p,e,f.uid))}))})),{onClose:async function(e){const{closeFunc:t}=D(h);if(o("close",e),t&&x(t)){const e=await t();n.value=!e}else n.value=!1},t:c,prefixCls:d,getMergeProps:g,getScrollContentStyle:P,getProps:h,getLoading:T,getBindValues:w,getFooterHeight:_,handleOk:function(){o("ok")}}}});W.render=function(e,t,s,o,l,a){const c=n("DrawerHeader"),f=n("ScrollContainer"),g=n("DrawerFooter"),h=n("Drawer"),b=_("loading");return r(),i(h,d({class:e.prefixCls,onClose:e.onClose},e.getBindValues),P({default:p((()=>[T(w(f,{style:e.getScrollContentStyle,"loading-tip":e.loadingText||e.t("common.loadingText")},{default:p((()=>[u(e.$slots,"default")])),_:3},8,["style","loading-tip"]),[[b,e.getLoading]]),w(g,d(e.getProps,{onClose:e.onClose,onOk:e.handleOk,height:e.getFooterHeight}),P({_:2},[F(Object.keys(e.$slots),(t=>({name:t,fn:p((s=>[u(e.$slots,t,s)]))})))]),1040,["onClose","onOk","height"])])),_:2},[e.$slots.title?void 0:{name:"title",fn:p((()=>[w(c,{title:e.getMergeProps.title,isDetail:e.isDetail,showDetailBack:e.showDetailBack,onClose:e.onClose},{titleToolbar:p((()=>[u(e.$slots,"titleToolbar")])),_:1},8,["title","isDetail","showDetailBack","onClose"])]))}]),1040,["class","onClose"])};const Q=j({}),U=j({});function X(){S();const e=b(null),t=b(!1),s=b("");const o=()=>{const t=D(e);return t||V("useDrawer instance is undefined!"),t};return[function(o,l){L((()=>{e.value=null,t.value=null,Q[D(s)]=null})),D(t)&&H()&&o===D(e)||(s.value=l,e.value=o,t.value=!0,o.emitVisible=(e,t)=>{U[t]=e})},{setDrawerProps:e=>{var t;null==(t=o())||t.setDrawerProps(e)},getVisible:a((()=>U[~~D(s)])),openDrawer:(e=!0,t,l=!0)=>{var a;if(null==(a=o())||a.setDrawerProps({visible:e}),!t)return;if(l)return Q[D(s)]=null,void(Q[D(s)]=t);M($(Q[D(s)]),t)||(Q[D(s)]=t)}}]}const Y=e=>{const t=b(null),s=k(),o=b("");s||V("useDrawerInner instance is undefined!");const l=()=>{const e=D(t);if(e)return e;V("useDrawerInner instance is undefined!")};return m((()=>{const t=Q[D(o)];t&&e&&x(e)&&O((()=>{e(t)}))})),[(e,l)=>{L((()=>{t.value=null})),o.value=l,t.value=e,null==s||s.emit("register",e,l)},{changeLoading:(e=!0)=>{var t;null==(t=l())||t.setDrawerProps({loading:e})},changeOkLoading:(e=!0)=>{var t;null==(t=l())||t.setDrawerProps({confirmLoading:e})},getVisible:a((()=>U[~~D(o)])),closeDrawer:()=>{var e;null==(e=l())||e.setDrawerProps({visible:!1})},setDrawerProps:e=>{var t;null==(t=l())||t.setDrawerProps(e)}}]};export{W as _,Y as a,X as u};
