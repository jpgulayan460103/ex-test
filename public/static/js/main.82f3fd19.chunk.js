(this["webpackJsonpdswd-sap-ui"]=this["webpackJsonpdswd-sap-ui"]||[]).push([[0],{147:function(e,a,t){e.exports=t.p+"static/media/logo.86d1eb32.png"},224:function(e,a,t){e.exports=t(413)},229:function(e,a,t){},407:function(e,a,t){},413:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(32),l=t.n(c),s=(t(229),t(61)),o=t(35),i=t(417),m=t(97),u=t(416),d=t(419),b=t(55),p=t(414),g=t(415),E=t(418),f=t(99),y=t.n(f),h=t(148),O=t.n(h),j=t(420),_=i.a.Title,v=i.a.Text,w=m.a.Option,S=function(){Object(n.useEffect)((function(){te(),ne(),ce()}),[]);var e="http://localhost:3000",a=Object(n.useState)([]),t=Object(o.a)(a,2),c=t[0],l=t[1],i=Object(n.useState)({}),f=Object(o.a)(i,2),h=f[0],S=f[1],k=Object(n.useState)(!1),x=Object(o.a)(k,2),I=x[0],P=x[1],C=Object(n.useState)([]),N=Object(o.a)(C,2),F=(N[0],N[1],Object(n.useState)([])),T=Object(o.a)(F,2),L=T[0],q=T[1],A=Object(n.useState)([]),R=Object(o.a)(A,2),B=R[0],D=R[1],W=Object(n.useState)(0),H=Object(o.a)(W,2),U=H[0],V=H[1],J=Object(n.useState)([]),M=Object(o.a)(J,2),$=M[0],z=M[1],G=Object(n.useState)([]),K=Object(o.a)(G,2),Q=(K[0],K[1],Object(n.useState)([])),X=Object(o.a)(Q,2),Y=(X[0],X[1],Object(n.useState)([])),Z=Object(o.a)(Y,2),ee=Z[0],ae=Z[1],te=function(){P(!0),y.a.get("".concat(e,"/beneficiaries"),{params:h}).then((function(e){P(!1);var a=e.data.data;a.map((function(e){return e.key=e.id,e})),l(a)})).catch((function(e){P(!1),console.log(e)})).then((function(){P(!1)}))},ne=function(){y.a.get("".concat(e,"/beneficiaries/statistics/source"),{params:h}).then((function(e){P(!1);var a=e.data.data;a.map((function(e,a){return e.key="source_statistic_".concat(a),e.title="".concat(e.source,": ").concat(e.source_count),e})),q(a),re(a)})).catch((function(e){console.log(e)})).then((function(){}))},re=function(a){y.a.get("".concat(e,"/beneficiaries/statistics/category"),{params:h}).then((function(e){P(!1);var t=e.data.data;t.map((function(e,a){return e.key="category_statistic_".concat(a),e.title="".concat(e.category,": ").concat(e.category_count),e}));for(var n=function(e){a[e].children=t.filter((function(t){return t.source==a[e].source}))},r=0;r<a.length;r++)n(r);var c=a.reduce((function(e,a){return e+parseInt(a.source_count)}),0);V(c),D(a)})).catch((function(e){console.log(e)})).then((function(){}))},ce=function(){y.a.get("".concat(e,"/beneficiaries/barangays"),{params:h}).then((function(e){P(!1);var a=e.data.data;a.map((function(e,a){return e.key="barangay_".concat(a),e})),z(a)})).catch((function(e){console.log(e)})).then((function(){}))},le=c,se=[{title:"Name",key:"full_name_ln",render:function(e,a){return r.a.createElement("span",null,r.a.createElement(O.a,{highlightStyle:{backgroundColor:"#ffe4bf",padding:0},searchWords:ee,autoEscape:!0,textToHighlight:"".concat(a.lastname?a.lastname:"",", ").concat(a.firstname?a.firstname:""," ").concat(a.midname?a.midname:""," ").concat(a.ext?a.ext:"")}))}},{title:"Birthday",dataIndex:"birthday",key:"birthday"},{title:"Address",dataIndex:"address",key:"address"},{title:"Source",dataIndex:"source",key:"source"},{title:"Category",dataIndex:"category",key:"category"},{title:"Remarks",dataIndex:"remarks",key:"remarks"}];return r.a.createElement("div",null,r.a.createElement(u.a,{name:"normal_login",className:"login-form",layout:"inline",onFinish:te},r.a.createElement(u.a.Item,{name:"username"},r.a.createElement(d.a,{autoComplete:"off",placeholder:"Search",allowClear:!0,onChange:function(e){!function(e){var a=e.target.value;S(Object(s.a)(Object(s.a)({},h),{},{keyword:a})),ae(a.split(",").map((function(e){return e.trim()})))}(e)},style:{width:"250px"}})),r.a.createElement(u.a.Item,{name:"barangay"},r.a.createElement(m.a,{allowClear:!0,mode:"multiple",style:{width:"300px"},placeholder:"Barangay",onChange:function(e){var a=e;S(Object(s.a)(Object(s.a)({},h),{},{barangay:a}))},optionLabelProp:"label"},function(){var e=[];return $.map((function(a){e.push(r.a.createElement(w,{key:a.key,value:a.barangay_name,label:a.barangay_name},a.barangay_name,", ",a.city_name))})),e}())),r.a.createElement(u.a.Item,{name:"source"},r.a.createElement(m.a,{allowClear:!0,style:{width:"120px"},placeholder:"Source",onChange:function(e){var a=e;S(Object(s.a)(Object(s.a)({},h),{},{source:a}))}},function(){var e=[];return L.map((function(a){e.push(r.a.createElement(w,{key:a.key,value:a.source,label:a.source},a.source))})),e}())),r.a.createElement(u.a.Item,null,r.a.createElement(b.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Search"))),0!=ee.length?r.a.createElement(p.a,null,r.a.createElement(v,null,"keywords: "),ee.map((function(e){return r.a.createElement(v,null,'"',r.a.createElement(v,{strong:!0},e),'"')}))):"",r.a.createElement("br",null),r.a.createElement(g.a,{dataSource:le,columns:se,loading:I,pagination:{position:["topLeft","bottomLeft"]},expandable:{expandedRowRender:function(e){return r.a.createElement("div",null,r.a.createElement("p",{style:{margin:0}},"Source: ",r.a.createElement("b",null,e.source)),r.a.createElement("p",{style:{margin:0}},"Category: ",r.a.createElement("b",null,e.category," ",e.remarks)),r.a.createElement("p",{style:{margin:0}},"Name: ",r.a.createElement("b",null,e.full_name_fn)),r.a.createElement("p",{style:{margin:0}},"Address: ",r.a.createElement("b",null,e.address,", ",e.province_name)),r.a.createElement("p",{style:{margin:0}},"Payment Category: ",r.a.createElement("b",null,e.payment_category)),r.a.createElement("p",{style:{margin:0}},"Payout Branch: ",r.a.createElement("b",null,e.payout_branch)),r.a.createElement("p",{style:{margin:0}},"Payout Partner: ",r.a.createElement("b",null,e.payout_partner)),r.a.createElement("p",{style:{margin:0}},"Cash Out Reference Number:\xa0",r.a.createElement("b",null,r.a.createElement(O.a,{highlightStyle:{backgroundColor:"#ffe4bf",padding:0},searchWords:ee,autoEscape:!0,textToHighlight:"".concat(e.cash_out_ref_number?e.cash_out_ref_number:"")}))),r.a.createElement("p",{style:{margin:0}},"Payout Schedule: ",r.a.createElement("b",null,e.schedule)),r.a.createElement("p",{style:{margin:0}},"Batch and Part: ",r.a.createElement("b",null,e.batch_part)),r.a.createElement("p",{style:{margin:0}},"Starpay Disbursement Status: ",r.a.createElement("b",null,e.starpay_status)))}}}),r.a.createElement(_,{level:3},"Total Records: ",U),r.a.createElement(E.a,{showLine:!0,switcherIcon:r.a.createElement(j.a,null),defaultExpandAll:!0,onSelect:function(e,a){console.log("selected",e,a)},treeData:B}))},k=t(147),x=t.n(k),I=t(421),P=t(422),C={labelCol:{span:5},wrapperCol:{span:17}},N={wrapperCol:{offset:5,span:17}},F=function(e){var a=Object(n.useState)(!1),t=Object(o.a)(a,2),c=t[0],l=t[1],s=Object(n.useState)(!1),i=Object(o.a)(s,2),m=i[0];i[1];return r.a.createElement("div",null,r.a.createElement(u.a,Object.assign({},C,{name:"basic",initialValues:{remember:!0},onFinish:function(e){l(!0)},onFinishFailed:function(e){console.log("Failed:",e)}}),r.a.createElement(u.a.Item,Object.assign({label:"Username",name:"username"},function(){if(m)return{validateStatus:"error",help:m.message}}(),{rules:[{required:!0,message:"Please input your username!"}]}),r.a.createElement(d.a,{prefix:r.a.createElement(I.a,null)})),r.a.createElement(u.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},r.a.createElement(d.a.Password,{prefix:r.a.createElement(P.a,null)})),r.a.createElement(u.a.Item,N,r.a.createElement(b.a,{type:"primary",htmlType:"submit",disabled:c,loading:c},"Submit"))))},T=t(98),L=t(219),q=t.n(L),A=(m.a.Option,{labelCol:{span:6},wrapperCol:{span:18}}),R={wrapperCol:{offset:5,span:17}},B=function(e){var a=r.a.useRef(),t=Object(n.useState)(!1),c=Object(o.a)(t,2),l=c[0],i=c[1],m=Object(n.useState)(""),p=Object(o.a)(m,2),g=(p[0],p[1]),E=Object(n.useState)({}),f=Object(o.a)(E,2),y=f[0],h=(f[1],Object(n.useState)([])),O=Object(o.a)(h,2),j=(O[0],O[1],Object(n.useState)([])),_=Object(o.a)(j,2),v=(_[0],_[1]),w=Object(n.useState)([]),S=Object(o.a)(w,2),k=(S[0],S[1]),x=Object(n.useState)(""),C=Object(o.a)(x,2),N=(C[0],C[1]),F=Object(n.useState)(""),L=Object(o.a)(F,2),B=(L[0],L[1]),D=Object(n.useState)(""),W=Object(o.a)(D,2),H=(W[0],W[1]),U=Object(n.useState)("create"),V=Object(o.a)(U,2),J=V[0],M=V[1],$=Object(n.useState)(null),z=Object(o.a)($,2),G=z[0],K=z[1],Q=Object(n.useState)(!1),X=Object(o.a)(Q,2),Y=X[0],Z=X[1];Object(n.useEffect)((function(){ae()}),[]),Object(n.useEffect)((function(){if(null!=e.userData){M("update");var t=q()(e.userData);K(t.id),g(t.position),t.barangay_id&&(B(t.barangay.city_psgc),N(t.barangay.province_psgc),t.city=t.barangay.city_psgc,t.province=t.barangay.province_psgc,H(t.barangay_id),v([{city_name:t.barangay.city_name,city_psgc:t.barangay.city_psgc}]),k([{barangay_name:t.barangay.barangay_name,id:t.barangay.id}])),a.current.setFieldsValue(Object(s.a)({},t))}}),[e.userData]);var ee=function(e){if(y[e])return{validateStatus:"error",help:y[e][0]}},ae=function(){};return r.a.createElement("div",null,r.a.createElement(u.a,Object.assign({},A,{ref:a,name:"basic",initialValues:{remember:!0},onFinish:function(e){i(!0),"update"==J&&(e.id=G),console.log(e)},onFinishFailed:function(e){console.log("Failed:",e)}}),r.a.createElement(u.a.Item,Object.assign({label:"Username",name:"username"},ee("username"),{rules:[{required:!0,message:"Please input your username!"}]}),r.a.createElement(d.a,{prefix:r.a.createElement(I.a,null)})),"user"==e.type||"update"==e.type?r.a.createElement(u.a.Item,Object.assign({},R,{name:"change_password",valuePropName:"checked"}),r.a.createElement(T.a,{onChange:function(e){Z(e.target.checked)}},"Change Password")):"","create"==J||Y?r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a.Item,Object.assign({label:"Password",name:"password"},ee("password"),{rules:[{required:!0,message:"Please input your password!"}]}),r.a.createElement(d.a.Password,{prefix:r.a.createElement(P.a,null)})),r.a.createElement(u.a.Item,Object.assign({label:"Confirm Password",name:"password_confirmation"},ee("password_confirmation"),{rules:[{required:!0,message:"Please input your password!"}]}),r.a.createElement(d.a.Password,{prefix:r.a.createElement(P.a,null)}))):"",r.a.createElement(u.a.Item,Object.assign({label:"First Name",name:"first_name"},ee("first_name"),{rules:[{required:!0,message:"Please input your first name."}]}),r.a.createElement(d.a,null)),r.a.createElement(u.a.Item,Object.assign({label:"Middle Name",name:"middle_name"},ee("middle_name")),r.a.createElement(d.a,null)),r.a.createElement(u.a.Item,Object.assign({label:"Last Name",name:"last_name"},ee("last_name"),{rules:[{required:!0,message:"Please input your last name."}]}),r.a.createElement(d.a,null)),r.a.createElement(u.a.Item,Object.assign({label:"Department/Unit",name:"department_unit"},ee("department_unit"),{rules:[{required:!0,message:"Please input your department/unit."}]}),r.a.createElement(d.a,null)),r.a.createElement(u.a.Item,R,r.a.createElement(b.a,{type:"primary",htmlType:"submit",disabled:l,loading:l},"Submit"))))},D=i.a.Title,W=(i.a.Text,function(e){return r.a.createElement("div",{className:"Layout row h-100 p-10"},r.a.createElement("div",{className:"col-6"},r.a.createElement(D,{level:3,style:{textAlign:"center"}},"Login Form"),r.a.createElement(F,null)),r.a.createElement("div",{className:"col-6"},r.a.createElement(D,{level:3,style:{textAlign:"center"}},"Registration Form"),r.a.createElement(B,null)))}),H=i.a.Title,U=(i.a.Text,function(e){return r.a.createElement("div",{className:"Layout"},r.a.createElement("div",{className:"main-layout-container"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center align-items-center p-3"},r.a.createElement("img",{className:"h-16",src:x.a,alt:"",style:{width:"100%"}})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement(H,{level:2,style:{textAlign:"center"}},"Social Amelioration Information System"),r.a.createElement("br",null),e.children)))))}),V=(t(407),t(408),t(409),t(130)),J=t(37);var M=function(){return r.a.createElement(V.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(V.b,{to:"/"},"Home"),r.a.createElement(V.b,{to:"/login"},"Login")),r.a.createElement(J.c,null,r.a.createElement(J.a,{path:"/login"},r.a.createElement(U,null,r.a.createElement(W,null))),r.a.createElement(J.a,{path:"/"},r.a.createElement(U,null,r.a.createElement(S,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[224,1,2]]]);
//# sourceMappingURL=main.82f3fd19.chunk.js.map