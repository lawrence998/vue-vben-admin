import{a as e,r as t,M as s,i as r,o as a,j as o,w as i,k as n}from"./index.b2563c25.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4a4f7bba.js";import{s as p}from"./index.ece84d19.js";import"./useTimeout.0990510e.js";import"./resizeEvent.e79f1ab5.js";import"./domUtils.8b34c94c.js";import"./tsxHelper.24b178b2.js";import"./useExpose.03135198.js";import"./animation.f3edcb57.js";import"./useScrollTo.ef044c36.js";import"./index.47077e70.js";import"./index.aa07d4db.js";import"./propTypes.db13ce1b.js";import{u as d}from"./useApexCharts.4317652b.js";var c=e({components:{CollapseContainer:p},setup(){const e=t(null),{setOptions:r}=d(e);return s((()=>{r({series:[{name:"Visits",data:[90,50,86,40,100,20]},{name:"Sales",data:[70,75,70,76,20,85]}],dataLabels:{style:{colors:["#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd"]}},chart:{height:350,type:"radar",dropShadow:{enabled:!0,blur:1,left:1,top:1}},yaxis:{show:!1},grid:{show:!1},legend:{show:!1},title:{show:!1},tooltip:{x:{show:!1}},markers:{size:0},xaxis:{categories:["2011","2012","2013","2014","2015","2016"]},stroke:{width:0},colors:["#9f8ed7","#1edec5"],plotOptions:{radar:{polygons:{strokeColors:["#e8e8e8","transparent","transparent","transparent","transparent","transparent"],connectorColors:"transparent"}}},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#8e9ad6","#1fcadb"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}}})})),{chartRef:e}}});const l={ref:"chartRef",style:{width:"100%"}};c.render=function(e,t,s,p,d,c){const m=r("CollapseContainer");return a(),o(m,{title:"销售统计",canExpan:!1},{default:i((()=>[n("div",l,null,512)])),_:1})};export default c;