import{d as e,h as r,o,i,w as t,j as s,m as a}from"./index.20a648bb.js";import{A as n}from"./index.00f73f89.js";import{u as p}from"./useDrawer.023002eb.js";import m from"./Drawer1.a5580608.js";import d from"./Drawer2.8117fdca.js";import f from"./Drawer3.436584b4.js";import j from"./Drawer4.0c0db7e4.js";import c from"./Drawer5.5462c45b.js";import{_ as l}from"./index.1ebbe592.js";import"./vendor.3b1829c7.js";import"./index.54fed4fb.js";import"./ScrollContainer.9c695134.js";import"./index.afd17c03.js";import"./domUtils.f2c56b54.js";import"./_stringToArray.ee740b6d.js";import"./RightOutlined.9a1b82fb.js";/* empty css              */import"./useTimeout.82f3a262.js";import"./useScrollTo.6f60a7a8.js";import"./ArrowLeftOutlined.ca4208e5.js";import"./isEqual.a1a0c06b.js";import"./BasicForm.409978b2.js";import"./index.8f9deaa2.js";import"./index.d26a36d5.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.e82ae4f4.js";import"./get.1ba4a11b.js";import"./_baseProperty.74f89655.js";import"./toInteger.5ff1b25f.js";import"./index.ddc1cded.js";import"./index.d12520f4.js";import"./SearchOutlined.f49841f0.js";import"./EyeOutlined.b07d9be1.js";import"./index.386e1fc1.js";import"./CheckOutlined.f27c74fa.js";import"./DownOutlined.853090bf.js";import"./index.0c24a3bf.js";import"./index.1c1a919a.js";import"./UpOutlined.d0758042.js";import"./index.1c764d96.js";import"./RedoOutlined.aab371d5.js";import"./index.4d664a85.js";import"./EllipsisOutlined.3c97f502.js";import"./types.7beb30cc.js";import"./Tree.f4eaadf0.js";import"./util.12955019.js";import"./uuid.8f5d2521.js";import"./index.f437baf7.js";import"./DeleteOutlined.aeac2f78.js";import"./useModal.34da58c6.js";import"./useWindowSizeFn.c3680928.js";import"./FullscreenOutlined.6f5a844c.js";import"./index.9fcb8580.js";import"./Dropdown.a58805d6.js";import"./index.c05f5007.js";import"./LeftOutlined.9b88bcf0.js";import"./download.fb97e78b.js";import"./useForm.a871b756.js";import"./index.49e5a86a.js";import"./index.eaee4f3f.js";import"./usePageContext.def46df0.js";import"./transButton.2b01a733.js";var w=e({components:{Alert:n,PageWrapper:l,Drawer1:m,Drawer2:d,Drawer3:f,Drawer4:j,Drawer5:c},setup(){const[e,{openDrawer:r,setDrawerProps:o}]=p(),[i,{openDrawer:t}]=p(),[s,{openDrawer:a}]=p(),[n,{openDrawer:m}]=p(),[d,{openDrawer:f}]=p();return{register1:e,openDrawer1:r,register2:i,openDrawer2:t,register3:s,openDrawer3:a,register4:n,register5:d,openDrawer5:f,send:function(){m(!0,{data:"content",info:"Info"})},openDrawerLoading:function(){r(),o({loading:!0}),setTimeout((()=>{o({loading:!1})}),2e3)}}}});const u=a(" 打开Drawer "),D=a(" 打开Drawer "),b=a(" 打开Drawer "),g=a(" 打开Drawer并传递数据 "),x=a(" 打开详情Drawer ");w.render=function(e,a,n,p,m,d){const f=r("Alert"),j=r("a-button"),c=r("Drawer1"),l=r("Drawer2"),w=r("Drawer3"),y=r("Drawer4"),O=r("Drawer5"),R=r("PageWrapper");return o(),i(R,{title:"抽屉组件使用示例"},{default:t((()=>[s(f,{message:"使用 useDrawer 进行抽屉操作","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:t((()=>[u])),_:1},8,["onClick"]),s(f,{message:"内外同时控制显示隐藏","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:a[1]||(a[1]=r=>e.openDrawer2(!0))},{default:t((()=>[D])),_:1}),s(f,{message:"自适应高度/显示footer","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:a[2]||(a[2]=r=>e.openDrawer3(!0))},{default:t((()=>[b])),_:1}),s(f,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:e.send},{default:t((()=>[g])),_:1},8,["onClick"]),s(f,{message:"详情页模式","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:a[3]||(a[3]=r=>e.openDrawer5(!0))},{default:t((()=>[x])),_:1}),s(c,{onRegister:e.register1},null,8,["onRegister"]),s(l,{onRegister:e.register2},null,8,["onRegister"]),s(w,{onRegister:e.register3},null,8,["onRegister"]),s(y,{onRegister:e.register4},null,8,["onRegister"]),s(O,{onRegister:e.register5},null,8,["onRegister"])])),_:1})};export default w;
