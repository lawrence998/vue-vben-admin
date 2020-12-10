import{a as t,x as n,G as e,J as r,k as s,F as o,ac as i,a8 as a,P as u,y as c,a2 as l,a4 as h,I as f,a3 as p,a6 as m,ah as d,a5 as y,au as g}from"./index.b2563c25.js";import{P as b}from"./colors.7cad5419.js";function v(){return(v=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function C(t){return t?t.toString().split("").reverse().map((function(t){var n=Number(t);return isNaN(n)?t:n})):[]}var S=t({name:"ScrollNumber",mixins:[n],inheritAttrs:!1,props:{prefixCls:u.string,count:u.any,component:u.string,title:u.oneOfType([u.number,u.string,null]),displayComponent:u.any,onAnimated:u.func},emits:["animated"],setup:function(){return{configProvider:e("configProvider",r),lastCount:void 0,timeout:void 0}},data:function(){return{animateStarted:!0,sCount:this.count}},watch:{count:function(){this.lastCount=this.sCount,this.setState({animateStarted:!0})}},updated:function(){var t=this,n=this.animateStarted,e=this.count;n&&(this.clearTimeout(),this.timeout=setTimeout((function(){t.setState({animateStarted:!1,sCount:e},t.handleAnimated)})))},beforeUnmount:function(){this.clearTimeout()},methods:{clearTimeout:function(t){function n(){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(){this.timeout&&(clearTimeout(this.timeout),this.timeout=void 0)})),getPositionByNum:function(t,n){var e=this.sCount,r=Math.abs(Number(e)),s=Math.abs(Number(this.lastCount)),o=Math.abs(C(e)[n]),i=Math.abs(C(this.lastCount)[n]);return this.animateStarted?10+t:r>s?o>=i?10+t:20+t:o<=i?10+t:t},handleAnimated:function(){this.$emit("animated")},renderNumberList:function(t,n){for(var e=[],r=0;r<30;r++)e.push(s("p",{key:r.toString(),class:o(n,{current:t===r})},[r%10]));return e},renderCurrentNumber:function(t,n,e){if("number"==typeof n){var r=this.getPositionByNum(n,e),o={transition:this.animateStarted||void 0===C(this.lastCount)[e]?"none":void 0,msTransform:"translateY(".concat(100*-r,"%)"),WebkitTransform:"translateY(".concat(100*-r,"%)"),transform:"translateY(".concat(100*-r,"%)")};return s("span",{class:"".concat(t,"-only"),style:o,key:e},[this.renderNumberList(r,"".concat(t,"-only-unit"))])}return s("span",{key:"symbol",class:"".concat(t,"-symbol")},[n])},renderNumberElement:function(t){var n=this,e=this.sCount;return e&&Number(e)%1==0?C(e).map((function(e,r){return n.renderCurrentNumber(t,e,r)})).reverse():e}},render:function(){var t=this,n=this.prefixCls,e=this.title,r=this.component,u=void 0===r?"sup":r,c=this.displayComponent,l=(0,this.configProvider.getPrefixCls)("scroll-number",n),h=this.$attrs,f=h.class,p=h.style,m=void 0===p?{}:p;if(c)return i(c,{class:o("".concat(l,"-custom-component"),c.props&&c.props.class)});var d=a(v(v({},this.$props),this.$attrs),["count","onAnimated","component","prefixCls","displayComponent"]),y=v({},m),g=v(v({},d),{title:e,style:y,class:o(l,f)});return m&&m.borderColor&&(g.style.boxShadow="0 0 0 1px ".concat(m.borderColor," inset")),s(u,g,{default:function(){return[t.renderNumberElement(l)]}})}}),N=function(t){return!isNaN(parseFloat(t))&&isFinite(t)};function x(t){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function P(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function O(){return(O=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function w(t){return-1!==b.indexOf(t)}var T=g(t({name:"ABadge",props:c({count:u.VNodeChild,showZero:u.looseBool,overflowCount:u.number,dot:u.looseBool,prefixCls:u.string,scrollNumberPrefixCls:u.string,status:u.oneOf(d("success","processing","default","error","warning")),color:u.string,text:u.VNodeChild,offset:u.arrayOf(u.oneOfType([String,Number])),numberStyle:u.style,title:u.string},{showZero:!1,dot:!1,overflowCount:99}),setup:function(){return{configProvider:e("configProvider",r),badgeCount:void 0}},methods:{getNumberedDispayCount:function(){var t=this.$props.overflowCount,n=this.badgeCount;return n>t?"".concat(t,"+"):n},getDispayCount:function(){return this.isDot()?"":this.getNumberedDispayCount()},getScrollNumberTitle:function(){var t=this.$props.title,n=this.badgeCount;return t||("string"==typeof n||"number"==typeof n?n:void 0)},getStyleWithOffset:function(){var t=this.$props,n=t.offset,e=t.numberStyle;return O(n?{right:"".concat(-parseInt(n[0],10),"px"),marginTop:N(n[1])?"".concat(n[1],"px"):n[1]}:{},e)},getBadgeClassName:function(t,n){var e,r=this.hasStatus();return o(t,(P(e={},"".concat(t,"-status"),r),P(e,"".concat(t,"-dot-status"),r&&this.dot&&!this.isZero()),P(e,"".concat(t,"-not-a-wrapper"),!n.length),e))},hasStatus:function(){var t=this.$props,n=t.status,e=t.color;return!!n||!!e},isZero:function(){var t=this.getNumberedDispayCount();return"0"===t||0===t},isDot:function(){var t=this.$props.dot,n=this.isZero();return t&&!n||this.hasStatus()},isHidden:function(){var t=this.$props.showZero,n=this.getDispayCount(),e=this.isZero(),r=this.isDot();return(null==n||""===n||e&&!t)&&!r},renderStatusText:function(t){var n=l(this,"text");return this.isHidden()||!n?null:s("span",{class:"".concat(t,"-status-text")},[n])},renderDispayComponent:function(){var t=this.badgeCount;if(t&&"object"===x(t))return i(t,{style:this.getStyleWithOffset()},!1)},renderBadgeNumber:function(t,n){var e,r=this.$props,o=r.status,i=r.color,a=this.badgeCount,u=this.getDispayCount(),c=this.isDot(),l=this.isHidden(),f=(P(e={},"".concat(t,"-dot"),c),P(e,"".concat(t,"-count"),!c),P(e,"".concat(t,"-multiple-words"),!c&&a&&a.toString&&a.toString().length>1),P(e,"".concat(t,"-status-").concat(o),!!o),P(e,"".concat(t,"-status-").concat(i),w(i)),e),p=this.getStyleWithOffset();return i&&!w(i)&&((p=p||{}).background=i),l?null:h(s(S,{prefixCls:n,"data-show":!l,class:f,count:u,displayComponent:this.renderDispayComponent(),title:this.getScrollNumberTitle(),style:p,key:"scrollNumber"},null),[[y,!l]])}},render:function(){var t,n=this.prefixCls,e=this.scrollNumberPrefixCls,r=this.status,i=this.color,a=l(this,"text"),u=this.configProvider.getPrefixCls,c=u("badge",n),h=u("scroll-number",e),d=f(this),y=l(this,"count");Array.isArray(y)&&(y=y[0]),this.badgeCount=y;var g=this.renderBadgeNumber(c,h),b=this.renderStatusText(c),v=o((P(t={},"".concat(c,"-status-dot"),this.hasStatus()),P(t,"".concat(c,"-status-").concat(r),!!r),P(t,"".concat(c,"-status-").concat(i),w(i)),t)),C={};if(i&&!w(i)&&(C.background=i),!d.length&&this.hasStatus()){var S=this.getStyleWithOffset(),N=S&&S.color;return s("span",{class:this.getBadgeClassName(c,d),style:S},[s("span",{class:v,style:C},null),s("span",{style:{color:N},class:"".concat(c,"-status-text")},[a])])}var x=p(d.length?"".concat(c,"-zoom"):"");return s("span",{class:this.getBadgeClassName(c,d)},[d,s(m,x,{default:function(){return[g]}}),b])}}));export{T as B,N as i};