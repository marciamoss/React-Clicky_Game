(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e){e.exports=[{large:"https://randomuser.me/api/portraits/women/39.jpg",medium:"https://randomuser.me/api/portraits/med/women/39.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/39.jpg",id:1},{large:"https://randomuser.me/api/portraits/men/37.jpg",medium:"https://randomuser.me/api/portraits/med/men/37.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/37.jpg",id:2},{large:"https://randomuser.me/api/portraits/women/16.jpg",medium:"https://randomuser.me/api/portraits/med/women/16.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/16.jpg",id:3},{large:"https://randomuser.me/api/portraits/men/34.jpg",medium:"https://randomuser.me/api/portraits/med/men/34.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/34.jpg",id:4},{large:"https://randomuser.me/api/portraits/men/21.jpg",medium:"https://randomuser.me/api/portraits/med/men/21.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/21.jpg",id:5},{large:"https://randomuser.me/api/portraits/women/44.jpg",medium:"https://randomuser.me/api/portraits/med/women/44.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/44.jpg",id:6},{large:"https://randomuser.me/api/portraits/men/56.jpg",medium:"https://randomuser.me/api/portraits/med/men/56.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/56.jpg",id:7},{large:"https://randomuser.me/api/portraits/women/46.jpg",medium:"https://randomuser.me/api/portraits/med/women/46.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/46.jpg",id:8},{large:"https://randomuser.me/api/portraits/men/44.jpg",medium:"https://randomuser.me/api/portraits/med/men/44.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/44.jpg",id:9},{large:"https://randomuser.me/api/portraits/women/17.jpg",medium:"https://randomuser.me/api/portraits/med/women/17.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/17.jpg",id:10},{large:"https://randomuser.me/api/portraits/men/96.jpg",medium:"https://randomuser.me/api/portraits/med/men/96.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/96.jpg",id:11},{large:"https://randomuser.me/api/portraits/women/30.jpg",medium:"https://randomuser.me/api/portraits/med/women/30.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/30.jpg",id:12},{large:"https://randomuser.me/api/portraits/men/22.jpg",medium:"https://randomuser.me/api/portraits/med/men/22.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/22.jpg",id:13},{large:"https://randomuser.me/api/portraits/women/24.jpg",medium:"https://randomuser.me/api/portraits/med/women/24.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/24.jpg",id:14},{large:"https://randomuser.me/api/portraits/men/51.jpg",medium:"https://randomuser.me/api/portraits/med/men/51.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/51.jpg",id:15},{large:"https://randomuser.me/api/portraits/women/96.jpg",medium:"https://randomuser.me/api/portraits/med/women/96.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/96.jpg",id:16}]},41:function(e,t,a){e.exports=a(94)},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var r=a(0),m=a.n(r),n=a(4),s=a.n(n),i=a(38),o=a(33),p=a(34),d=a(39),u=a(35),l=a(12),h=a(40);a(47);var c=function(e){return m.a.createElement("div",{className:"col-3"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"img-container"},m.a.createElement("img",{alt:e.id,src:e.image,onClick:function(){return e.guessedFriend(e.id)},className:"remove"}))))};a(48);var g=function(e){return m.a.createElement("div",{className:"wrapper"},e.children)};a(49);var j=function(e){return m.a.createElement("nav",{className:"navdeco"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-4"},m.a.createElement("a",{href:"/"},"Clicky Game")),m.a.createElement("div",{className:"col-4"},"Click an image to begin"),m.a.createElement("div",{className:"col-4"},"Score: ",e.counter," | Top Score: ",e.topScore)))},w=a(13),b=a(36),f=a.n(b),E=a(8),v=a.n(E),S=a(37),C=a.n(S);var k=function(e){return m.a.createElement(m.a.Fragment,null,m.a.createElement(v.a,{show:e.show,onHide:e.handleClose},m.a.createElement(v.a.Header,{closeButton:!0},m.a.createElement(v.a.Title,null)),m.a.createElement(v.a.Body,null,e.msg),m.a.createElement(v.a.Footer,null,m.a.createElement(C.a,{variant:"primary",onClick:e.handleClose},"Close"))))};w.forEach(function(e,t){w[t].clicked="no"});var y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,m=new Array(r),n=0;n<r;n++)m[n]=arguments[n];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(m)))).state={friends:w,counter:0,topScore:0,show:!1,lost:!1,won:!1,msg:"",handleClose:function(){this.setState({show:!1})},handleShow:function(){this.setState({show:!0})}},a.guessedFriend=function(e){var t=Object(i.a)(a.state.friends),r=a.state.counter,m=a.state.topScore,n=a.state.show,s=a.state.lost,o=a.state.handleShow.bind(Object(l.a)(a)),p=a.state.handleClose.bind(Object(l.a)(a)),d=a.state.msg;t.forEach(function(a,i){i===e-1&&("yes"===t[i].clicked?(m<r&&(m=r),r=0,n=!0,s=!0):m<++r&&(m=r))}),t[e-1].clicked="yes",f()(t),t.forEach(function(e,t){e.id=t+1}),s&&(d="You Lost, Try Again!"),r===t.length&&(n=!0,r=0,d="You Won!, Play Again!"),(n||r===t.length)&&t.forEach(function(e,a){t[a].clicked="no"}),a.setState({friends:t,counter:r,topScore:m,show:n,msg:d,handleShow:o,handleClose:p})},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return m.a.createElement(g,null,m.a.createElement(j,{counter:this.state.counter,topScore:this.state.topScore}),m.a.createElement(k,{show:this.state.show,msg:this.state.msg,handleClose:this.state.handleClose}),m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"row"},this.state.friends.map(function(t){return m.a.createElement(c,{guessedFriend:e.guessedFriend,id:t.id,key:t.id,image:t.large})}))))}}]),t}(r.Component);a(93);s.a.render(m.a.createElement(y,null),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.b1f57355.chunk.js.map