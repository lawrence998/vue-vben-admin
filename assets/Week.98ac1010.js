import{d as t}from"./ScrollContainer.9c695134.js";import{u as a}from"./useApexCharts.a5faf3ef.js";import{d as e,r,a0 as s,h as o,o as n,i,w as d,j as l}from"./index.20a648bb.js";import"./index.afd17c03.js";import"./domUtils.f2c56b54.js";import"./_stringToArray.ee740b6d.js";import"./RightOutlined.9a1b82fb.js";/* empty css              */import"./useTimeout.82f3a262.js";import"./useScrollTo.6f60a7a8.js";import"./vendor.3b1829c7.js";var p=e({components:{CollapseContainer:t},setup(){const t=r(null),{setOptions:e}=a(t);return s((()=>{e({series:[{name:"Visits",data:[90,50,86,40,100,20]},{name:"Sales",data:[70,75,70,76,20,85]}],dataLabels:{style:{colors:["#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd"]}},chart:{height:350,type:"radar",dropShadow:{enabled:!0,blur:1,left:1,top:1}},yaxis:{show:!1},grid:{show:!1},legend:{show:!1},title:{show:!1},tooltip:{x:{show:!1}},markers:{size:0},xaxis:{categories:["2011","2012","2013","2014","2015","2016"]},stroke:{width:0},colors:["#9f8ed7","#1edec5"],plotOptions:{radar:{polygons:{strokeColors:["#e8e8e8","transparent","transparent","transparent","transparent","transparent"],connectorColors:"transparent"}}},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#8e9ad6","#1fcadb"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}}})})),{chartRef:t}}});const c={ref:"chartRef",style:{width:"100%"}};p.render=function(t,a,e,r,s,p){const f=o("CollapseContainer");return n(),i(f,{title:"销售统计",canExpan:!1},{default:d((()=>[l("div",c,null,512)])),_:1})};export default p;
