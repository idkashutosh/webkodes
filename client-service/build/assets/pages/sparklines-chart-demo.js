/*
 Template Name: Scoxe - Admin & Dashboard Template
 Author: Myra Studio
 File: Sparklines
*/


$(document).ready(function(){var i,o=function(){$("#sparkline1").sparkline([0,23,43,35,44,45,56,37,40],{type:"line",width:"100%",height:"200",chartRangeMax:50,lineColor:"#2e7ce4",fillColor:"rgba(48, 124, 228, 0.3)",highlightLineColor:"rgba(0,0,0,.1)",highlightSpotColor:"rgba(0,0,0,.2)",maxSpotColor:!1,minSpotColor:!1,spotColor:!1,lineWidth:1}),$("#sparkline1").sparkline([25,23,26,24,25,32,30,24,19],{type:"line",width:"100%",height:"200",chartRangeMax:40,lineColor:"#f1bf43",fillColor:"rgba(241, 191, 67, 0.3)",composite:!0,highlightLineColor:"rgba(0,0,0,.1)",highlightSpotColor:"rgba(0,0,0,.2)",maxSpotColor:!1,minSpotColor:!1,spotColor:!1,lineWidth:1}),$("#sparkline2").sparkline([3,6,7,8,6,4,7,10,12,7,4,9,12,13,11,12],{type:"bar",height:"200",barWidth:"10",barSpacing:"3",barColor:"#8a59a8"}),$("#sparkline3").sparkline([20,40,30,10],{type:"pie",width:"200",height:"200",sliceColors:["#2e7ce4","#00c2b2","#132843","#e3eaef"]}),$("#sparkline5").sparkline([3,6,7,8,6,4,7,10,12,7,4,9,12,13,11,12],{type:"line",width:"100%",height:"200",lineColor:"#afd5f0",lineWidth:2,fillColor:"rgba(175, 213, 240,0.3)",highlightLineColor:"rgba(0,0,0,.1)",highlightSpotColor:"rgba(0,0,0,.2)"}),$("#sparkline5").sparkline([3,6,7,8,6,4,7,10,12,7,4,9,12,13,11,12],{type:"bar",height:"200",barWidth:"10",barSpacing:"5",composite:!0,barColor:"#627898"}),$("#sparkline6").sparkline([4,6,7,7,4,3,2,1,4,4,5,6,3,4,5,8,7,6,9,3,2,4,1,5,6,4,3,7],{type:"discrete",width:"280",height:"200",lineColor:"#132843"})},e=function(){var i,o=-1,e=-1,l=0,r=[];$("html").mousemove(function(i){var r=i.pageX,t=i.pageY;o>-1&&(l+=Math.max(Math.abs(r-o),Math.abs(t-e))),o=r,e=t});var t=function(){var o=(new Date).getTime();if(i&&i!=o){var e=Math.round(l/(o-i)*1e3);r.push(e),r.length>30&&r.splice(0,1),l=0,$("#sparkline4").sparkline(r,{tooltipSuffix:" pixels per second",type:"line",width:"100%",height:"200",chartRangeMax:77,maxSpotColor:!1,minSpotColor:!1,spotColor:!1,lineWidth:1,lineColor:"#df3554",fillColor:"rgba(223, 53, 84, 0.3)",highlightLineColor:"rgba(24,147,126,.1)",highlightSpotColor:"rgba(24,147,126,.2)"})}i=o,setTimeout(t,500)};setTimeout(t,500)};o(),e(),$(window).resize(function(l){clearTimeout(i),i=setTimeout(function(){o(),e()},300)})});