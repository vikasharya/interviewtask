(this.webpackJsonpinterviewtask=this.webpackJsonpinterviewtask||[]).push([[0],{28:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),c=a.n(n),i=a(20),r=a.n(i),l=(a(28),a(29),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,40)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))}),d=a(14),o=a(2),m=a(22),h=a(9),j=a(10),b=a(4),u=a(12),x=a(11),O=(a(30),function(e){Object(u.a)(a,e);var t=Object(x.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).toggleClass=function(){s.setState({isactive:!s.state.isactive}),console.log(s.state.isactive)},s.state={isactive:!1},s.toggleClass=s.toggleClass.bind(Object(b.a)(s)),s}return Object(j.a)(a,[{key:"render",value:function(){var e=this,t=this.props.items.map((function(t){return Object(s.jsxs)("tr",{className:"rowhover",children:[Object(s.jsx)("td",{children:Object(s.jsx)("input",{id:t.key+"name",name:"name",className:e.state.isactive?"textbox-edit":"textbox",type:"text",value:t.name,onChange:function(a){e.props.updateitem(a.target.value,t.key,a.target.name)}})}),Object(s.jsx)("td",{children:Object(s.jsx)("input",{id:t.key+"age",name:"age",className:e.state.isactive?"textbox-edit":"textbox",type:"text",value:t.age,onChange:function(a){e.props.updateitem(a.target.value,t.key,a.target.name)}})}),Object(s.jsx)("td",{children:Object(s.jsx)("input",{id:t.key+"email",name:"email",className:e.state.isactive?"textbox-edit":"textbox",type:"text",value:t.email,onChange:function(a){e.props.updateitem(a.target.value,t.key,a.target.name)}})}),Object(s.jsx)("td",{children:Object(s.jsx)("input",{id:t.key+"address",name:"address",className:e.state.isactive?"textbox-edit":"textbox",type:"text",value:t.address,onChange:function(a){e.props.updateitem(a.target.value,t.key,a.target.name)}})}),Object(s.jsx)("td",{children:Object(s.jsxs)("div",{className:"hideFields",children:[Object(s.jsx)("button",{className:"btn btn-info btn-sm",onClick:e.toggleClass,children:e.state.isactive?"Done":"Update"}),"\xa0",Object(s.jsx)("button",{className:"btn btn-info btn-sm",onClick:function(){return e.props.deleteitem(t.key)},children:"Delete"})]})})]},t.key)}));return Object(s.jsx)("div",{children:Object(s.jsxs)("table",{className:"table",children:[Object(s.jsx)("thead",{className:"thead-dark",children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{width:"15%",children:"Name"}),Object(s.jsx)("th",{width:"5%",children:"Age"}),Object(s.jsx)("th",{width:"20%",children:"Email"}),Object(s.jsx)("th",{width:"20%",children:"Address"}),Object(s.jsx)("th",{width:"20%",children:"Actions"})]})}),Object(s.jsx)("tbody",{children:t})]})})}}]),a}(n.Component)),g=function(e){Object(u.a)(a,e);var t=Object(x.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).state={items:[],name:"",age:"",email:"",address:"",key:"",errors:{name:!1,age:!1,email:!1,address:!1}},s.addItem=s.addItem.bind(Object(b.a)(s)),s.onChangeName=s.onChangeName.bind(Object(b.a)(s)),s.onChangeAge=s.onChangeAge.bind(Object(b.a)(s)),s.onChangeEmail=s.onChangeEmail.bind(Object(b.a)(s)),s.onChangeAddress=s.onChangeAddress.bind(Object(b.a)(s)),s.updateitem=s.updateitem.bind(Object(b.a)(s)),s.deleteitem=s.deleteitem.bind(Object(b.a)(s)),s}return Object(j.a)(a,[{key:"onChangeName",value:function(e){this.setState({name:e.target.value})}},{key:"onChangeAge",value:function(e){this.setState({age:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangeAddress",value:function(e){this.setState({address:e.target.value})}},{key:"addItem",value:function(e){e.preventDefault();var t=RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);if(""===this.state.name)this.setState({errors:{name:!0}});else if(""===this.state.age)this.setState({errors:{age:!0}});else if(""===this.state.email)this.setState({errors:{email:!0}});else if(t.test(this.state.email))if(""===this.state.address)this.setState({errors:{address:!0}});else{this.setState({errors:{name:!1,age:!1,email:!1,address:!1}});var a=[{name:this.state.name,age:this.state.age,email:this.state.email,address:this.state.address,key:Date.now()}].concat(Object(m.a)(this.state.items));this.setState({items:a,name:"",age:"",email:"",address:"",key:""})}else this.setState({errors:{email:!0}})}},{key:"updateitem",value:function(e,t,a){var s=this.state.items;s.map((function(s){s.key===t&&("name"===a&&(s.name=e),"age"===a&&(s.age=e),"email"===a&&(s.email=e),"address"===a&&(s.address=e))}));this.setState({items:s})}},{key:"deleteitem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"componentDidMount",value:function(){this.userData=JSON.parse(localStorage.getItem("user")),localStorage.getItem("user")?this.setState({name:this.userData.name,email:this.userData.email,age:this.userData.age,address:this.userData.address}):this.setState({name:"",email:"",age:"",address:""})}},{key:"componentWillUpdate",value:function(e,t){localStorage.setItem("user",JSON.stringify(t))}},{key:"render",value:function(){return Object(s.jsx)("div",{className:"Users",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"col-lg-3 col-md-3 col-sm-12",children:[Object(s.jsx)("h1",{className:"heading",children:"Add New List"}),Object(s.jsx)("div",{children:Object(s.jsxs)("form",{children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(s.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Name",id:"name",value:this.state.name,onChange:this.onChangeName}),Object(s.jsx)("span",{className:"error",children:this.state.errors.name?"Please enter the Name":null})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"age",children:"Age:"}),Object(s.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Age",id:"age",value:this.state.age,onChange:this.onChangeAge}),Object(s.jsx)("span",{className:"error",children:this.state.errors.age?"Please enter the age":null})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"email",children:"Email ID:"}),Object(s.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter email",id:"email",value:this.state.email,onChange:this.onChangeEmail}),Object(s.jsx)("span",{className:"error",children:this.state.errors.email?"Please enter the email":null})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"address",children:"Address:"}),Object(s.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Address",id:"address",value:this.state.address,onChange:this.onChangeAddress}),Object(s.jsx)("span",{className:"error",children:this.state.errors.address?"Please enter the address":null})]}),Object(s.jsx)("div",{className:"form-group"}),Object(s.jsx)("button",{onClick:this.addItem,className:"btn btn-primary",children:"Save"})]})})]}),Object(s.jsxs)("div",{className:"col-lg-9 col-md-9 col-sm-12",children:[Object(s.jsx)("h1",{className:"heading",children:"Update/Delete List"}),Object(s.jsx)("div",{children:Object(s.jsx)(O,{items:this.state.items,deleteitem:this.deleteitem,updateitem:this.updateitem})})]})]})})})}}]),a}(n.Component),v=(a(31),function(e){Object(u.a)(a,e);var t=Object(x.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).myfunction=s.myfunction.bind(Object(b.a)(s)),s}return Object(j.a)(a,[{key:"myfunction",value:function(){var e,t;for(e=1;e<=7;e++){for(t=e;t<=7;t++)document.write("&nbsp;&nbsp;");for(t=1;t<=e;t++)document.write("&nbsp;&nbsp;*&nbsp;");document.writeln("<br/>")}}},{key:"render",value:function(){return Object(s.jsx)("div",{className:"Stars",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-md-12",children:this.myfunction()})})})})}}]),a}(n.Component));a(32);var p=function(){return Object(s.jsxs)("div",{className:"Dashboard",children:[Object(s.jsx)("div",{className:"ourwork",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsxs)("div",{className:"col-md-12",children:[Object(s.jsxs)("h1",{className:"heading",children:["OUR ",Object(s.jsx)("strong",{children:"WORK"})]}),Object(s.jsx)("p",{className:"ourwork__detail",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}),Object(s.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}),Object(s.jsxs)("div",{className:"ourwork__button",children:[Object(s.jsx)("button",{type:"button",className:"btn btn-info",children:"SHOW ALL "}),Object(s.jsx)("button",{type:"button",className:"btn btn-light",children:"SPLASH LIGHT - 01 DEMO"})]})]})})})}),Object(s.jsx)("div",{className:"whycoose",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-md-12",children:Object(s.jsxs)("h1",{className:"heading",children:["Why ",Object(s.jsx)("strong",{children:"Choose us"})]})})}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-12",children:Object(s.jsxs)("div",{className:"card h-100",children:[Object(s.jsxs)("div",{className:"view overlay",children:[Object(s.jsx)("img",{className:"card-img-top",src:"https://mdbootstrap.com/img/Photos/Others/images/16.jpg"}),Object(s.jsx)("a",{href:"#!",children:Object(s.jsx)("div",{className:"mask rgba-white-slight"})})]}),Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("h4",{className:"card-title",children:"Card title"}),Object(s.jsx)("p",{className:"card-text",children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(s.jsx)("button",{type:"button",className:"btn btn-info",children:"Read more"})]})]})}),Object(s.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-12",children:Object(s.jsxs)("div",{className:"card h-100",children:[Object(s.jsxs)("div",{className:"view overlay",children:[Object(s.jsx)("img",{className:"card-img-top",src:"https://mdbootstrap.com/img/Photos/Others/images/16.jpg"}),Object(s.jsx)("a",{href:"#!",children:Object(s.jsx)("div",{className:"mask rgba-white-slight"})})]}),Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("h4",{className:"card-title",children:"Card title"}),Object(s.jsx)("p",{className:"card-text",children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(s.jsx)("button",{type:"button",className:"btn btn-info",children:"Read more"})]})]})}),Object(s.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-12",children:Object(s.jsxs)("div",{className:"card h-100",children:[Object(s.jsxs)("div",{className:"view overlay",children:[Object(s.jsx)("img",{className:"card-img-top",src:"https://mdbootstrap.com/img/Photos/Others/images/16.jpg"}),Object(s.jsx)("a",{href:"#!",children:Object(s.jsx)("div",{className:"mask rgba-white-slight"})})]}),Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("h4",{className:"card-title",children:"Card title"}),Object(s.jsx)("p",{className:"card-text",children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(s.jsx)("button",{type:"button",className:"btn btn-info",children:"Read more"})]})]})})]})]})})]})};a(33);var N=function(){return Object(s.jsx)(d.a,{children:Object(s.jsxs)("div",{className:"Dashboard",children:[Object(s.jsxs)("nav",{className:"navbar navbar-expand-md bg-dark navbar-dark",children:[Object(s.jsx)("a",{className:"navbar-brand",href:"#",children:"Interview Task"}),Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsx)("div",{className:"collapse navbar-collapse",id:"collapsibleNavbar",children:Object(s.jsxs)("ul",{className:"navbar-nav",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(d.b,{activeclassname:"active",className:"nav-link ",to:"/",children:"Dashboard"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(d.b,{activeclassname:"active",className:"nav-link",to:"/user",children:"User"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(d.b,{activeclassname:"active",className:"nav-link",to:"/stars",children:"Stars"})})]})})]}),Object(s.jsx)(o.a,{path:"/",exact:!0,component:p}),Object(s.jsx)(o.a,{path:"/user",component:g}),Object(s.jsx)(o.a,{path:"/stars",component:v})]})})};r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(N,{})}),document.getElementById("root")),l()}},[[39,1,2]]]);
//# sourceMappingURL=main.2f91fdcf.chunk.js.map