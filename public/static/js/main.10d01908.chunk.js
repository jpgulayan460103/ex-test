(this["webpackJsonpdswd-sap-ui"]=this["webpackJsonpdswd-sap-ui"]||[]).push([[0],{145:function(e,a,t){e.exports=t.p+"static/media/logo.86d1eb32.png"},177:function(e,a,t){e.exports=t(342)},182:function(e,a,t){},183:function(e,a,t){},342:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(25),o=t.n(r),l=(t(182),t(85)),i=t(77),s=t(145),m=t.n(s),u=(t(183),t(184),t(185),t(347)),d=t(84),f=t(346),y=t(348),p=t(50),g=t(345),h=t(107),b=t.n(h),E=t(349),v=t(350),k=u.a.Title,w=d.a.Option;var j=function(){Object(n.useEffect)((function(){J(),L()}),[]);var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)({}),s=Object(i.a)(o,2),u=s[0],h=s[1],j=Object(n.useState)(!1),O=Object(i.a)(j,2),S=O[0],x=O[1],I=Object(n.useState)([]),N=Object(i.a)(I,2),_=N[0],C=N[1],B=Object(n.useState)([]),T=Object(i.a)(B,2),A=T[0],z=T[1],J=function(){x(!0),b.a.get("http://localhost:3000/beneficiaries",{params:u}).then((function(e){x(!1);var a=e.data.data;a.map((function(e){return e.key=e.id,e})),r(a)})).catch((function(e){x(!1),console.log(e)})).then((function(){x(!1)}))},L=function(){b.a.get("http://localhost:3000/beneficiaries/statistics",{params:u}).then((function(e){x(!1);var a=e.data.data;a.map((function(e,a){return e.key="statistic_".concat(a),e})),C(a),R()})).catch((function(e){console.log(e)})).then((function(){}))},R=function(){b.a.get("http://localhost:3000/beneficiaries/barangays",{params:u}).then((function(e){x(!1);var a=e.data.data;a.map((function(e,a){return e.key="barangay_".concat(a),e})),z(a)})).catch((function(e){console.log(e)})).then((function(){}))},W=t,F=[{title:"",key:"status",render:function(e,a){return c.a.createElement("span",null,c.a.createElement("span",null,"certified list"==a.category?c.a.createElement(E.a,{style:{fontSize:20},twoToneColor:"#52c41a"}):"","certified list"!=a.category&&"waitlisted"!=a.category?c.a.createElement(v.a,{style:{fontSize:20},twoToneColor:"#eb2f96"}):""))}},{title:"Name",key:"full_name_ln",render:function(e,a){return c.a.createElement("span",null,c.a.createElement("span",null,"".concat(a.lastname?a.lastname:"",", ").concat(a.firstname?a.firstname:""," ").concat(a.midname?a.midname:""," ").concat(a.ext?a.ext:"")))}},{title:"Birthday",dataIndex:"birthday",key:"birthday"},{title:"Barangay",dataIndex:"barangay_name",key:"barangay_name"},{title:"Source",dataIndex:"source",key:"source"},{title:"Category",dataIndex:"category",key:"category"},{title:"Remarks",dataIndex:"remarks",key:"remarks"}];return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"main-layout-container"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row justify-content-center align-items-center p-3"},c.a.createElement("img",{className:"h-16",src:m.a,alt:""})),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement(k,{level:2,style:{textAlign:"center"}},"Social Amelioration Information System"),c.a.createElement("br",null),c.a.createElement(f.a,{name:"normal_login",className:"login-form",layout:"inline",onFinish:J},c.a.createElement(f.a.Item,{name:"username"},c.a.createElement(y.a,{placeholder:"Search",allowClear:!0,onChange:function(e){!function(e){var a=e.target.value;h(Object(l.a)(Object(l.a)({},u),{},{keyword:a}))}(e)},style:{width:"250px"}})),c.a.createElement(f.a.Item,{name:"barangay"},c.a.createElement(d.a,{allowClear:!0,mode:"multiple",style:{width:"250px"},placeholder:"Please select Barangay",onChange:function(e){var a=e;h(Object(l.a)(Object(l.a)({},u),{},{barangay:a}))}},function(){var e=[];return A.map((function(a){e.push(c.a.createElement(w,{key:a.key,value:a.barangay_name},a.barangay_name))})),e}())),c.a.createElement(f.a.Item,null,c.a.createElement(p.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Search"))),c.a.createElement("br",null),c.a.createElement(g.a,{dataSource:W,columns:F,loading:S,pagination:{position:["topLeft","bottomLeft"]}}),c.a.createElement(k,{level:3},"Total Records:"),c.a.createElement("div",null,_.map((function(e){return c.a.createElement("p",{key:e.key},c.a.createElement("b",null,e.category.toUpperCase(),":")," ",c.a.createElement("span",null,e.category_count))}))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[177,1,2]]]);
//# sourceMappingURL=main.10d01908.chunk.js.map