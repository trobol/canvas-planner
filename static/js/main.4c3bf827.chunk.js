(this["webpackJsonpcanvas-planner"]=this["webpackJsonpcanvas-planner"]||[]).push([[0],{232:function(e,a,n){e.exports=n(406)},237:function(e,a,n){},238:function(e,a,n){},327:function(e,a,n){},337:function(e,a,n){},406:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(48),o=n.n(l),c=(n(237),n(238),n(144),n(57)),s=n(419),i=function(e){var a=e.pages,n=Object(t.useState)("AssignmentsPage"),l=Object(c.a)(n,2),o=l[0],i=l[1],m=function(e,a){var n=a.name;return i(n)},u=Object.keys(a);return r.a.createElement("div",{className:"App"},r.a.createElement("style",{jsx:!0},"\n          .App {\n            display: grid;\n            grid-row-width:100vw;\n          }\n          .page {\n            display:inline;\n            width:100vw;\n            height:100vh;\n          }\n        "),r.a.createElement(s.a,{pointing:!0,secondary:!0},u.map((function(e){return r.a.createElement(s.a.Item,{onClick:m,key:e,name:e,active:o===e})}))),r.a.createElement("div",{className:"page"},a[o]))},m=n(417),u=n(40),d=(n(327),function(){var e=[{id:4,name:"Essay",course_id:123,due_at:"2012-07-01T10:00:00-06:00",time_remaining:5,class_name:"COR-234-09"},{id:5,name:"some assignment",course_id:123,due_at:"2012-07-01T21:59:00-06:00",time_remaining:1,class_name:"CSI-330-01"},{id:6,name:"another assignment",course_id:123,due_at:"2012-07-02T03:15:00-06:00",time_remaining:.3,class_name:"EDG-240"},{id:7,name:"math",course_id:123,due_at:"2012-07-03T23:00:00-06:00",time_remaining:1.2,class_name:"Math"}];e.sort((function(e,a){return new Date(e.due_at)<new Date(a.due_at)}));var a={};return e.forEach((function(e){var n=e.due_at.split("T"),t=Object(c.a)(n,1)[0];a[t]||(a[t]=[]),a[t].push(e)})),r.a.createElement(m.a,null,Object.keys(a).map((function(e,n){return r.a.createElement(m.a.Item,null,r.a.createElement(m.a.Header,null,new Date(e).toDateString()),r.a.createElement(m.a.List,null,a[e].map((function(e){var a=e.name,n=e.due_at,t=e.time_remaining,l=e.class_name,o=new Date(n),c=o.getHours(),s=c<13&&c>1,i=o.getMinutes(),d=c>=12?"PM":"AM";return c=(c%=12)||12,i=i<10?"0".concat(i):i,r.a.createElement(m.a.Item,null,r.a.createElement("div",{className:"assignment-container"},r.a.createElement("span",null,r.a.createElement("span",{style:{width:150,display:"inline-block",borderRight:"1px solid"}},l," "),r.a.createElement("span",{style:{paddingLeft:10}},a)),r.a.createElement("span",{className:"assignment-time-remaining"},r.a.createElement("span",null,t)),r.a.createElement("span",{className:"assignment-time"},"".concat(c,":").concat(i," ").concat(d),r.a.createElement(u.a,{name:s?"sun":"moon"}))))}))))})))}),g=n(421),h=n(221),E=(n(337),["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]),p=function(){for(var e=[],a=0;a<7;a+=1){for(var n=new Array(24),t=0;t<24;t+=1)n[t]=[];e.push(n)}for(var l=0;l<6;l+=1){var o=Math.floor(7*Math.random()),c=Math.floor(24*Math.random()),s=1+3*Math.random();e[o][c].push({name:"Assignment",start:Date.now(),end:new Date((new Date).getTime()+60*s*60*1e3),length:s})}return console.log(e),r.a.createElement(g.a,{className:"calendar",stretched:!0,style:{height:"100%"},columns:7,divided:!0},e.map((function(e,a){return r.a.createElement(g.a.Column,{key:a,stretched:!0},r.a.createElement(g.a.Row,null,E[a]),console.log(e),e.map((function(e,n){return r.a.createElement(g.a.Row,{key:"".concat(a).concat(n)},e.map((function(e,t){return r.a.createElement(h.a,{style:{color:"white",height:"".concat(100*e.length,"%"),backgroundColor:"#".concat((1e3*n+2e4*a).toString(16).padStart(6,"0"))},className:"event"},r.a.createElement("p",null,e.name))})))})))})))},y=n(204),f=n(420),b=n(135),v=["#232f49","#1d2c2e","#382021","#1a2644","#2a232e","#08214e","#161a46"],w=["#3743af","#1654c3","#6b5874","#4161aa","#8d5153","#4a6f75","#5976b8"],M=function(e){return Array.from({length:e},(function(){return{x:Math.floor(15*Math.random())+1,y:Math.floor(40*Math.random())+60}}))},k=function(e){return Array.from({length:e.length},(function(){return Math.floor(40*Math.random())+60}))},C=["January","February","March","April","May"],_=[{name:"CSI-330-01",gradesByWeek:M(15),gradesByMonth:k(C)},{name:"WEB-320-01",gradesByWeek:M(15),gradesByMonth:k(C)},{name:"CSI-480-01",gradesByWeek:M(15),gradesByMonth:k(C)},{name:"CSI-300-01",gradesByWeek:M(15),gradesByMonth:k(C)},{name:"CSI-340-01",gradesByWeek:M(15),gradesByMonth:k(C)}],A={labels:C,datasets:_.map((function(e,a){return{label:e.name,data:e.gradesByMonth,fill:!1,backgroundColor:v[a],borderColor:w[a]}}))},B={responsive:!0,title:{display:!0,text:"Grades By Month"},tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},scales:{xAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Month"}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Grade"}}]}},S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{itemsPerRow:5},_.map((function(e){return r.a.createElement(h.a,{centered:!0},r.a.createElement(h.a.Content,{textAlign:"center"},r.a.createElement(h.a.Header,null,e.name)),r.a.createElement(h.a.Content,{textAlign:"center"},r.a.createElement(h.a.Description,null,r.a.createElement(f.a,null,r.a.createElement(f.a.Value,null,e.gradesByMonth[4]),r.a.createElement(f.a.Label,null,"Current Grade")))))}))),r.a.createElement(g.a,null,r.a.createElement(g.a.Row,{columns:2},r.a.createElement(g.a.Column,null,r.a.createElement(b.a,{data:A,options:B})),r.a.createElement(g.a.Column,null,r.a.createElement(b.b,{data:{datasets:_.map((function(e,a){return{label:e.name,data:e.gradesByWeek,backgroundColor:v[a],borderColor:w[a]}}))},options:{responsive:!0,title:{display:!0,text:"Grades By Week"},scales:{xAxes:[{type:"linear",position:"bottom"}]}}})))))},x=function(){return r.a.createElement("h1",null,"THIS IS THE HOME")},I=n(415),T=n(414),W=n(418),D=function(){var e=Object(t.useState)(!1),a=Object(c.a)(e,2),n=a[0],l=a[1];return r.a.createElement(I.a,{open:!n},r.a.createElement(I.a.Header,null,"Login"),r.a.createElement(I.a.Content,null,"This webiste does not work without a Canvas API.",r.a.createElement(T.a,null,r.a.createElement(T.a.Field,{label:"Access Token",control:T.a.Input}))),r.a.createElement(I.a.Actions,null,r.a.createElement(W.a,{onClick:function(){return l(!n)}},"Sumbit")))},O={Home:r.a.createElement(x,null),AssignmentsPanel:r.a.createElement(d,null),CalendarPanel:r.a.createElement(p,null),Charts:r.a.createElement(S,null),Login:r.a.createElement(D,null)};var j=function(){return r.a.createElement(i,{pages:O})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[232,1,2]]]);
//# sourceMappingURL=main.4c3bf827.chunk.js.map