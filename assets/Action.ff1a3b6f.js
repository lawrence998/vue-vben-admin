import{_ as s}from"./ScrollContainer.992f13b6.js";import{_ as o}from"./index.b87f3b54.js";import{d as r,r as t,e as l,dn as a,dp as e,h as i,o as n,i as c,j as d,aL as p,aM as m,l as f,bw as u,m as j}from"./index.b35d627b.js";import"./index.15783dfd.js";import"./domUtils.9d257af5.js";import"./_stringToArray.d2fcf67e.js";import"./RightOutlined.8f262b29.js";/* empty css              */import"./useTimeout.aed71b31.js";import"./useScrollTo.a712a7b3.js";import"./index.14695b3f.js";import"./index.b30471b8.js";import"./EllipsisOutlined.73434e58.js";import"./types.83a5535a.js";import"./isEqual.81a8f73e.js";import"./toInteger.ba85bbaa.js";import"./DownOutlined.9676ed0b.js";import"./index.df0929cf.js";import"./usePageContext.ceff001a.js";import"./transButton.f2853e28.js";import"./ArrowLeftOutlined.a6b6ea94.js";import"./vendor.3b1829c7.js";var b=r({components:{ScrollContainer:s,PageWrapper:o},setup(){const s=t(null),o=()=>{const o=l(s);if(!o)throw new Error("scroll is Null");return o};return{scrollTo:function(s){o().scrollTo(s)},scrollRef:s,scrollBottom:function(){o().scrollBottom()}}}});const x=u("data-v-331a2139");a("data-v-331a2139");const _={class:"my-4"},C=j(" 滚动到100px位置 "),T=j(" 滚动到800px位置 "),v=j(" 滚动到顶部 "),g=j(" 滚动到底部 "),w={class:"scroll-wrap"},k={class:"p-3"};e();const y=x(((s,o,r,t,l,a)=>{const e=i("a-button"),u=i("ScrollContainer"),j=i("PageWrapper");return n(),c(j,{title:"滚动组件函数示例",content:"基于el-scrollbar"},{default:x((()=>[d("div",_,[d(e,{onClick:o[1]||(o[1]=o=>s.scrollTo(100)),class:"mr-2"},{default:x((()=>[C])),_:1}),d(e,{onClick:o[2]||(o[2]=o=>s.scrollTo(800)),class:"mr-2"},{default:x((()=>[T])),_:1}),d(e,{onClick:o[3]||(o[3]=o=>s.scrollTo(0)),class:"mr-2"},{default:x((()=>[v])),_:1}),d(e,{onClick:o[4]||(o[4]=o=>s.scrollBottom()),class:"mr-2"},{default:x((()=>[g])),_:1})]),d("div",w,[d(u,{class:"mt-4",ref:"scrollRef"},{default:x((()=>[d("ul",k,[(n(),c(p,null,m(100,(s=>d("li",{key:s,class:"p-2",style:{border:"1px solid #eee"}},f(s),1))),64))])])),_:1},512)])])),_:1})}));b.render=y,b.__scopeId="data-v-331a2139";export default b;
