(this["webpackJsonpdswd-sap-ui"]=this["webpackJsonpdswd-sap-ui"]||[]).push([[0],{153:function(e,t,a){e.exports=a.p+"static/media/logo.86d1eb32.png"},186:function(e,t,a){e.exports=a(363)},191:function(e,t,a){},192:function(e,t,a){},363:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),l=a.n(c),o=(a(191),a(75)),i=a(47),s=a(153),u=a.n(s),m=(a(192),a(193),a(194),a(369)),d=a(90),f=a(368),b=a(371),y=a(53),g=a(366),p=a(367),h=a(370),E=a(83),w=a.n(E),v=a(124),O=a.n(v),j=a(372),S=a(373),_=a(374),k=a(375),x=a(376),C=m.a.Title,I=m.a.Text,N=d.a.Option;var T=function(){Object(n.useEffect)((function(){le(),oe(),se()}),[]);var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({}),s=Object(i.a)(l,2),m=s[0],E=s[1],v=Object(n.useState)(!1),T=Object(i.a)(v,2),P=T[0],A=T[1],B=Object(n.useState)([]),z=Object(i.a)(B,2),R=(z[0],z[1],Object(n.useState)([])),L=Object(i.a)(R,2),W=L[0],D=L[1],F=Object(n.useState)([]),H=Object(i.a)(F,2),J=H[0],$=H[1],q=Object(n.useState)(0),G=Object(i.a)(q,2),K=G[0],M=G[1],Q=Object(n.useState)([]),U=Object(i.a)(Q,2),V=U[0],X=U[1],Y=Object(n.useState)([]),Z=Object(i.a)(Y,2),ee=(Z[0],Z[1],Object(n.useState)([])),te=Object(i.a)(ee,2),ae=(te[0],te[1],Object(n.useState)([])),ne=Object(i.a)(ae,2),re=ne[0],ce=ne[1],le=function(){A(!0),w.a.get("".concat("","/beneficiaries"),{params:m}).then((function(e){A(!1);var t=e.data.data;t.map((function(e){return e.key=e.id,e})),c(t)})).catch((function(e){A(!1),console.log(e)})).then((function(){A(!1)}))},oe=function(){w.a.get("".concat("","/beneficiaries/statistics/source"),{params:m}).then((function(e){A(!1);var t=e.data.data;t.map((function(e,t){return e.key="source_statistic_".concat(t),e.title="".concat(e.source,": ").concat(e.source_count),e})),D(t),ie(t)})).catch((function(e){console.log(e)})).then((function(){}))},ie=function(e){w.a.get("".concat("","/beneficiaries/statistics/category"),{params:m}).then((function(t){A(!1);var a=t.data.data;a.map((function(e,t){return e.key="category_statistic_".concat(t),e.title="".concat(e.category,": ").concat(e.category_count),e}));for(var n=function(t){e[t].children=a.filter((function(a){return a.source==e[t].source}))},r=0;r<e.length;r++)n(r);var c=e.reduce((function(e,t){return e+parseInt(t.source_count)}),0);M(c),$(e)})).catch((function(e){console.log(e)})).then((function(){}))},se=function(){w.a.get("".concat("","/beneficiaries/barangays"),{params:m}).then((function(e){A(!1);var t=e.data.data;t.map((function(e,t){return e.key="barangay_".concat(t),e})),X(t)})).catch((function(e){console.log(e)})).then((function(){}))},ue=a,me=[{title:"",key:"status",render:function(e,t){return r.a.createElement("span",null,r.a.createElement("span",null,function(e){if("1st tranche"==e.source&&"consolidated paid beneficiaries"==e.category)return r.a.createElement(j.a,{style:{fontSize:20},twoToneColor:"#FFD700"});if("additional"==e.source&&("certified list without reference number"==e.category||"certified list with reference number"==e.category))return r.a.createElement(S.a,{style:{fontSize:20},twoToneColor:"#842feb"});if("additional"==e.source&&("certified list without reference number"!=e.category||"certified list with reference number"!=e.category))return r.a.createElement(_.a,{style:{fontSize:20},twoToneColor:"#eb2f96"});switch(e.category){case"certified list without reference number":case"certified list with reference number":case"certified list":return r.a.createElement(k.a,{style:{fontSize:20},twoToneColor:"#52c41a"});default:return r.a.createElement(_.a,{style:{fontSize:20},twoToneColor:"#eb2f96"})}}(t)))}},{title:"Name",key:"full_name_ln",render:function(e,t){return r.a.createElement("span",null,r.a.createElement(O.a,{highlightStyle:{backgroundColor:"#ffe4bf",padding:0},searchWords:re,autoEscape:!0,textToHighlight:"".concat(t.lastname?t.lastname:"",", ").concat(t.firstname?t.firstname:""," ").concat(t.midname?t.midname:""," ").concat(t.ext?t.ext:"")}))}},{title:"Birthday",dataIndex:"birthday",key:"birthday"},{title:"Address",dataIndex:"address",key:"address"},{title:"Source",dataIndex:"source",key:"source"},{title:"Category",dataIndex:"category",key:"category"},{title:"Remarks",dataIndex:"remarks",key:"remarks"}];return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"main-layout-container"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center align-items-center p-3"},r.a.createElement("img",{className:"h-16",src:u.a,alt:""})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement(C,{level:2,style:{textAlign:"center"}},"Social Amelioration Information System"),r.a.createElement("br",null),r.a.createElement(f.a,{name:"normal_login",className:"login-form",layout:"inline",onFinish:le},r.a.createElement(f.a.Item,{name:"username"},r.a.createElement(b.a,{autoComplete:"off",placeholder:"Search",allowClear:!0,onChange:function(e){!function(e){var t=e.target.value;E(Object(o.a)(Object(o.a)({},m),{},{keyword:t})),ce(t.split(",").map((function(e){return e.trim()})))}(e)},style:{width:"250px"}})),r.a.createElement(f.a.Item,{name:"barangay"},r.a.createElement(d.a,{allowClear:!0,mode:"multiple",style:{width:"300px"},placeholder:"Barangay",onChange:function(e){var t=e;E(Object(o.a)(Object(o.a)({},m),{},{barangay:t}))},optionLabelProp:"label"},function(){var e=[];return V.map((function(t){e.push(r.a.createElement(N,{key:t.key,value:t.barangay_name,label:t.barangay_name},t.barangay_name,", ",t.city_name))})),e}())),r.a.createElement(f.a.Item,{name:"source"},r.a.createElement(d.a,{allowClear:!0,style:{width:"120px"},placeholder:"Source",onChange:function(e){var t=e;E(Object(o.a)(Object(o.a)({},m),{},{source:t}))}},function(){var e=[];return W.map((function(t){e.push(r.a.createElement(N,{key:t.key,value:t.source,label:t.source},t.source))})),e}())),r.a.createElement(f.a.Item,null,r.a.createElement(y.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Search"))),0!=re.length?r.a.createElement(g.a,null,r.a.createElement(I,null,"keywords: "),re.map((function(e){return r.a.createElement(I,null,'"',r.a.createElement(I,{strong:!0},e),'"')}))):"",r.a.createElement("br",null),r.a.createElement(p.a,{dataSource:ue,columns:me,loading:P,pagination:{position:["topLeft","bottomLeft"]},expandable:{expandedRowRender:function(e){return r.a.createElement("div",null,r.a.createElement("p",{style:{margin:0}},"Source: ",r.a.createElement("b",null,e.source)),r.a.createElement("p",{style:{margin:0}},"Category: ",r.a.createElement("b",null,e.category," ",e.remarks)),r.a.createElement("p",{style:{margin:0}},"Name: ",r.a.createElement("b",null,e.full_name_fn)),r.a.createElement("p",{style:{margin:0}},"Address: ",r.a.createElement("b",null,e.address,", ",e.province_name)),r.a.createElement("p",{style:{margin:0}},"Payment Category: ",r.a.createElement("b",null,e.payment_category)),r.a.createElement("p",{style:{margin:0}},"Payout Branch: ",r.a.createElement("b",null,e.payout_branch)),r.a.createElement("p",{style:{margin:0}},"Payout Partner: ",r.a.createElement("b",null,e.payout_partner)),r.a.createElement("p",{style:{margin:0}},"Cash Out Reference Number:\xa0",r.a.createElement("b",null,r.a.createElement(O.a,{highlightStyle:{backgroundColor:"#ffe4bf",padding:0},searchWords:re,autoEscape:!0,textToHighlight:"".concat(e.cash_out_ref_number?e.cash_out_ref_number:"")}))),r.a.createElement("p",{style:{margin:0}},"Payout Schedule: ",r.a.createElement("b",null,e.schedule)),r.a.createElement("p",{style:{margin:0}},"Batch and Part: ",r.a.createElement("b",null,e.batch_part)),r.a.createElement("p",{style:{margin:0}},"Starpay Disbursement Status: ",r.a.createElement("b",null,e.starpay_status)))}}}),r.a.createElement(C,{level:3},"Total Records: ",K),r.a.createElement(h.a,{showLine:!0,switcherIcon:r.a.createElement(x.a,null),defaultExpandAll:!0,onSelect:function(e,t){console.log("selected",e,t)},treeData:J}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[186,1,2]]]);
//# sourceMappingURL=main.bcb61eac.chunk.js.map