import{p as e,aK as t,f as n,aV as o,aM as g,aW as i,aX as a,aY as l}from"./index.b2563c25.js";const r=e((()=>t.getProjectConfig.menuSetting)),s=e((()=>n(r).collapsed)),d=e((()=>n(r).type)),u=e((()=>n(r).mode)),c=e((()=>n(r).fixed)),p=e((()=>n(r).show)),M=e((()=>n(r).hidden)),h=e((()=>n(r).menuWidth)),T=e((()=>n(r).trigger)),S=e((()=>n(r).theme)),m=e((()=>n(r).split)),C=e((()=>n(r).bgColor)),f=e((()=>n(r).canDrag)),w=e((()=>n(r).accordion)),A=e((()=>n(r).collapsedShowTitle)),H=e((()=>n(r).topMenuAlign)),I=e((()=>n(d)===o.SIDEBAR)),O=e((()=>n(d)===o.TOP_MENU)),W=e((()=>n(u)===g.HORIZONTAL||n(m))),x=e((()=>!(n(d)===o.TOP_MENU||!n(p)||!n(M))&&n(T)===i.HEADER)),E=e((()=>n(u)===g.HORIZONTAL)),N=e((()=>n(s)?n(R):n(h))),R=e((()=>{const{collapsedShowTitle:e}=n(r);return e?a:l})),b=e((()=>{const e=n(O)||!n(p)?0:n(N);return`calc(100% - ${n(e)}px)`}));function D(e){t.commitProjectConfigState({menuSetting:e})}function P(){D({collapsed:!n(s)})}function j(){return{setMenuSetting:D,toggleCollapsed:P,getMenuFixed:c,getMenuSetting:r,getRealWidth:N,getMenuType:d,getMenuMode:u,getShowMenu:p,getCollapsed:s,getMiniWidthNumber:R,getCalcContentWidth:b,getMenuWidth:h,getTrigger:T,getSplit:m,getMenuTheme:S,getCanDrag:f,getIsHorizontal:E,getCollapsedShowTitle:A,getIsSidebarType:I,getAccordion:w,getShowTopMenu:W,getShowHeaderTrigger:x,getTopMenuAlign:H,getMenuHidden:M,getIsTopMenu:O,getMenuBgColor:C}}export{j as u};