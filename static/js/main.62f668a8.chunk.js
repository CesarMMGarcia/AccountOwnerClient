(this.webpackJsonpaccountownerclient=this.webpackJsonpaccountownerclient||[]).push([[4],{137:function(e,n,t){},138:function(e,n,t){},139:function(e,n,t){},14:function(e,n,t){"use strict";t.d(n,"d",(function(){return a})),t.d(n,"i",(function(){return r})),t.d(n,"j",(function(){return c})),t.d(n,"c",(function(){return o})),t.d(n,"e",(function(){return l})),t.d(n,"f",(function(){return u})),t.d(n,"g",(function(){return i})),t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m})),t.d(n,"h",(function(){return d}));var a="GET_DATA_SUCCESS",r="POST_DATA_SUCCESS",c="PUT_DATA_SUCCESS",o="DELETE_DATA_SUCCESS",l="HTTP_404_ERROR",u="HTTP_500_ERROR",i="HTTP_OTHER_ERROR",s="CLOSE_ERROR_MODAL",m="CLOSE_SUCCESS_MODAL",d="OWNERS_LOADING"},143:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(21),o=t.n(c),l=(t(87),t(88),t(74)),u=t(147),i=(t(89),t(144)),s=t(148),m=t(145),d=t(146),E=t(19),h=t(69),p=function(e){return r.a.createElement(i.a,{md:12},r.a.createElement(s.a,{inverse:!0,collapseOnSelect:!0},r.a.createElement(s.a.Header,null,r.a.createElement(s.a.Brand,null,r.a.createElement(E.NavLink,{to:"/",exact:!0},"Home Page")),r.a.createElement(s.a.Toggle,null)),r.a.createElement(s.a.Collapse,null,r.a.createElement(m.a,null,r.a.createElement(h.LinkContainer,{to:"/owner-list",exact:!0},r.a.createElement(d.a,{eventKey:1},"Owner Actions"))))))},f=function(e){return r.a.createElement(l.a,null,r.a.createElement(u.a,null,r.a.createElement(p,null)),r.a.createElement("main",null,e.children))},O=(t(137),t(76)),b=t.n(O),v=function(e){return r.a.createElement(u.a,null,r.a.createElement(i.a,{md:12},r.a.createElement("div",{className:"homeText"},r.a.createElement("p",null,"WELCOME TO CESAR'S BROKERAGE"),r.a.createElement("img",{src:b.a,alt:"Money changing hands",height:"300"}))))},g=t(8),w=(t(138),function(e){return r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-md-12"},r.a.createElement("div",{class:"error-template"},r.a.createElement("h1",null,"Oops!"),r.a.createElement("h2",null,"404 Not Found"),r.a.createElement("div",{class:"error-details"},"Sorry, an error has occurred, Requested page not found!"),r.a.createElement("div",{class:"error-actions"},r.a.createElement(E.Link,{to:"/",className:"btn btn-primary btn-lg"},r.a.createElement("span",{class:"glyphicon glyphicon-home"}),"Take Me Home "))))))}),S=t(50),_=t(51),y=t(53),T=t(52),j=t(54),R=function(e){return function(n){function t(){var e,n;Object(S.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(y.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(r)))).state={component:null},n}return Object(j.a)(t,n),Object(_.a)(t,[{key:"componentDidMount",value:function(){var n=this;e().then((function(e){n.setState({component:e.default})}))}},{key:"render",value:function(){var e=this.state.component;return e?r.a.createElement(e,this.props):null}}]),t}(a.Component)},M=(t(139),function(e){return r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-md-12"},r.a.createElement("div",{class:"error-template"},r.a.createElement("h1",null,"Oops!"),r.a.createElement("h2",null,"500 Internal Server Error"),r.a.createElement("div",{class:"error-details"},"Unfortunately we're having trouble loading the page you are looking for."),r.a.createElement("div",{class:"error-actions"},r.a.createElement(E.Link,{to:"/",className:"btn btn-primary btn-lg"},r.a.createElement("span",{class:"glyphicon glyphicon-home"}),"Take Me Home "))))))}),A=R((function(){return Promise.all([t.e(0),t.e(3),t.e(14)]).then(t.bind(null,266))})),C=R((function(){return Promise.all([t.e(0),t.e(3),t.e(13)]).then(t.bind(null,265))})),L=R((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(8)]).then(t.bind(null,254))})),P=R((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(10)]).then(t.bind(null,258))})),k=R((function(){return Promise.all([t.e(0),t.e(1),t.e(3),t.e(12)]).then(t.bind(null,259))})),D=R((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(7)]).then(t.bind(null,260))})),H=R((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(9)]).then(t.bind(null,261))})),N=R((function(){return Promise.all([t.e(0),t.e(1),t.e(3),t.e(11)]).then(t.bind(null,262))}));var U=function(){return r.a.createElement(E.BrowserRouter,{basename:"/pauls-brokerage"},r.a.createElement(f,null,r.a.createElement(g.g,null,r.a.createElement(g.d,{path:"/",exact:!0,component:v}),r.a.createElement(g.d,{path:"/owner-list",component:A}),r.a.createElement(g.d,{path:"/ownerDetails/:id",component:C}),r.a.createElement(g.d,{path:"/createOwner/",component:L}),r.a.createElement(g.d,{path:"/updateOwner/:id",component:P}),r.a.createElement(g.d,{path:"/deleteOwner/:id",component:k}),r.a.createElement(g.d,{path:"/createAccount/:ownerId",component:D}),r.a.createElement(g.d,{path:"/updateAccount/:id",component:H}),r.a.createElement(g.d,{path:"/deleteAccount/:id",component:N}),r.a.createElement(g.d,{path:"/500",component:M}),r.a.createElement(g.d,{path:"*",component:w}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=t(15),B=t(14),I={data:null,showSuccessModal:!1,ownersLoading:!1},W=function(e,n){return Object(x.a)({},e,{data:n.data,ownersLoading:!1})},G=function(e,n){return Object(x.a)({},e,{showSuccessModal:!0})},J=function(e,n){return Object(x.a)({},e,{showSuccessModal:!0})},K=function(e,n){return Object(x.a)({},e,{showSuccessModal:!0})},X=function(e,n){return n.props.history.push(n.url),Object(x.a)({},e,{showSuccessModal:!1})},q=function(e,n){return Object(x.a)({},e,{ownersLoading:!0})},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case B.d:return W(e,n);case B.i:return G(e);case B.j:return J(e);case B.c:return K(e);case B.b:return X(e,n);case B.h:return q(e);default:return e}},V={showErrorModal:!1,errorMessage:""},$=function(e,n){return n.props.history.push("/404"),Object(x.a)({},e)},z=function(e,n){return n.props.history.push("/500"),Object(x.a)({},e)},Q=function(e,n){return Object(x.a)({},e,{showErrorModal:!0,errorMessage:n.error.response.data})},Y=function(e,n){return Object(x.a)({},e,{showErrorModal:!1,errorMessage:""})},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case B.e:return $(e,n);case B.f:return z(e,n);case B.g:return Q(e,n);case B.a:return Y(e);default:return e}},ee=t(47),ne=t(22),te=t(78),ae=(t(141),t(142),Object(ne.c)({repository:F,errorHandler:Z})),re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ne.d,ce=Object(ne.e)(ae,re(Object(ne.a)(te.a)));o.a.render(r.a.createElement(ee.a,{store:ce},r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},76:function(e,n,t){e.exports=t.p+"static/media/bribe.8c20481d.svg"},82:function(e,n,t){e.exports=t(143)},87:function(e,n,t){},88:function(e,n,t){},89:function(e,n,t){}},[[82,5,6]]]);
//# sourceMappingURL=main.62f668a8.chunk.js.map