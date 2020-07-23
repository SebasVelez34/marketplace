(this.webpackJsonpmarketplace=this.webpackJsonpmarketplace||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t),a.d(t,"USER_SIGNIN_REQUEST",(function(){return n})),a.d(t,"USER_SIGNIN_SUCCESS",(function(){return r})),a.d(t,"USER_SIGNIN_FAIL",(function(){return c})),a.d(t,"USER_REGISTER_REQUEST",(function(){return l})),a.d(t,"USER_REGISTER_SUCCESS",(function(){return s})),a.d(t,"USER_REGISTER_FAIL",(function(){return o}));var n="USER_SIGNIN_REQUEST",r="USER_SIGNIN_SUCCESS",c="USER_SIGNIN_FAIL",l="USER_REGISTER_REQUEST",s="USER_REGISTER_SUCCESS",o="USER_REGISTER_FAIL"},38:function(e,t,a){e.exports={Navbar:"Navbar_Navbar__35oRw"}},41:function(e,t,a){e.exports={ContainerProducts:"ContainerProducts_ContainerProducts__QrWto"}},42:function(e,t,a){e.exports={ProductCard:"ProductCard_ProductCard__pCvtp"}},47:function(e,t,a){e.exports=a(77)},56:function(e,t,a){},57:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),l=a(21),s=a.n(l),o=(a(56),a(57),a(38)),i=a.n(o),u=a(5),m=function(){return r.a.createElement("div",{className:"loading","data-testid":"Loader"},"Loading\u2026")};var d=function(e){var t=Object(c.c)((function(e){return e.userSignin})),a=t.userInfo,n=t.loading,l=t.error;return Object(c.b)(),r.a.createElement("header",{className:(i.a.Navbar,"header"),"data-testid":"Navbar"},r.a.createElement("div",{id:"elements-header",className:"shadow-1"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:"/images/logo.png",alt:"Logo de la p\xe1gina",className:"m-elements-header"})),r.a.createElement("input",{className:"menu-btn",type:"checkbox",id:"menu-btn"}),r.a.createElement("label",{className:"menu-icon m-elements-header"},r.a.createElement("span",{className:"navicon"})),r.a.createElement("ul",{className:"menu"},r.a.createElement("li",null,r.a.createElement(u.b,{to:"/cart"},"Cart")),n?r.a.createElement(m,null):l?r.a.createElement("div",null,l):0===a.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(u.b,{to:"/register"},"Create account")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/signin"},"SignIn"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement("a",null,"Hello "+a.name))))))},p=a(39),E=a(40),f=a(46),v=a(44),g=a(12);var S=function(e){var t=Object(n.useState)(""),a=Object(g.a)(t,2),c=a[0],l=a[1];return r.a.createElement("aside",{id:"side-menu",className:"leftAside well span3 oc","data-testid":"LeftAside",role:"navigation"},r.a.createElement("ul",{className:"nav nav-list"},r.a.createElement("li",{className:"nav-header"},"Categories"),r.a.createElement("li",{onClick:function(){e.allProducts()}},"All products"),e.categories?e.categories.map((function(t){return r.a.createElement("li",{onClick:function(){e.onClick(t)}},t.charAt(0).toUpperCase()+t.slice(1))})):r.a.createElement(r.a.Fragment,null),r.a.createElement("li",{className:"nav-header"},"Search products"),r.a.createElement("li",null,r.a.createElement("input",{type:"text",placeholder:"Search something product",onChange:function(e){l(e.target.value)}}),r.a.createElement("button",{className:"btn",onClick:function(){return e.search(c)}}))))},h=a(41),_=a.n(h),b=a(42),I=a.n(b),N=function(e,t){t.history.push("/cart/".concat(e))};var y=function(e){return r.a.createElement("div",{className:(I.a.ProductCard,"wrapper"),"data-testid":"ProductCard"},r.a.createElement("div",{className:"containerCard"},r.a.createElement(u.b,{to:"/product/".concat(e._id)},r.a.createElement("div",{className:"top",style:(t=e.image,{backgroundImage:"url('".concat(t,"')"),backgroundPosition:"center",backgroundRepeat:"no-repeat"})})),r.a.createElement("div",{className:"bottom"},r.a.createElement("div",{className:"left"},r.a.createElement(u.b,{to:"/product/".concat(e._id)},r.a.createElement("div",{className:"details"},r.a.createElement("h1",null,e.name),r.a.createElement("p",null,"$",e.price))),r.a.createElement("div",{className:"buy",onClick:function(){N(e._id,e.history)}},r.a.createElement("i",{className:"material-icons"},"add_shopping_cart"))),r.a.createElement("div",{className:"right"},r.a.createElement("div",{className:"done"},r.a.createElement("i",{className:"material-icons"},"done")),r.a.createElement("div",{className:"details"},r.a.createElement("h1",null,e.name),r.a.createElement("p",null,"Added to your cart")),r.a.createElement("div",{className:"remove"},r.a.createElement("i",{className:"material-icons"},"clear"))))));var t},C=function(e){return r.a.createElement("section",{className:(_.a.ContainerProducts,"containerProducts well span9"),"data-testid":"ContainerProducts"},r.a.createElement("h2",null,e.title.charAt(0).toUpperCase()+e.title.slice(1)),r.a.createElement("div",{id:"productList"},e.products.map((function(t){return r.a.createElement(y,{name:t.name,price:t.price,image:t.image,_id:t._id,key:t._id,history:e.history})}))))},R=a(4),O=a.n(R),T=a(10),U=a(17),w=function(){return function(){var e=Object(T.a)(O.a.mark((function e(t){var a,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"PRODUCT_LIST_REQUEST"}),e.next=4,U.get("/api/v1/products");case 4:a=e.sent,n=a.data,t({type:"PRODUCT_LIST_SUCCESS",payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:"PRODUCT_LIST_FAIL",payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()};var k=function(e){var t=Object(n.useState)("All Products"),a=Object(g.a)(t,2),l=a[0],s=a[1],o=Object(c.c)((function(e){return e.productList})),i=Object(c.c)((function(e){return e.categories})),u=o.products,d=o.loading,p=o.error,E=i.categories,f=i.loadingC,v=i.errorC,h=Object(c.b)();return Object(n.useEffect)((function(){h(w()),h(function(){var e=Object(T.a)(O.a.mark((function e(t){var a,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"PRODUCT_CATEGORY_REQUEST"}),e.next=4,U.get("/api/v1/categories/");case 4:a=e.sent,n=a.data,console.log(n),t({type:"PRODUCT_CATEGORY_SUCCESS",payload:n}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:"PRODUCT_CATEGORY_FAIL",payload:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())}),[]),d?r.a.createElement(m,null):p?r.a.createElement("div",null,p):r.a.createElement("div",{className:"homeScreen"},f?r.a.createElement(m,null):v?r.a.createElement("div",null,v):r.a.createElement(S,{categories:E,onClick:function(e){s(e),h(function(e){return function(){var t=Object(T.a)(O.a.mark((function t(a){var n,r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"PRODUCT_LIST_REQUEST"}),t.next=4,U.get("/api/v1/products/byCategory/".concat(e));case 4:n=t.sent,r=n.data,a({type:"PRODUCT_LIST_SUCCESS",payload:r}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:"PRODUCT_LIST_FAIL",payload:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(e))},search:function(e){h(function(e){return function(){var t=Object(T.a)(O.a.mark((function t(a){var n,r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"PRODUCT_LIST_REQUEST"}),t.next=4,U.get("/api/v1/products/search?term=".concat(e));case 4:n=t.sent,r=n.data,a({type:"PRODUCT_LIST_SUCCESS",payload:r}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:"PRODUCT_LIST_FAIL",payload:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(e))},allProducts:function(){s("All Products"),h(w())}}),r.a.createElement(C,{products:u,title:l,history:e}))},j=a(2),A=function(e){return r.a.createElement("div",{className:"containerCardDetail card"},r.a.createElement("div",{className:"card_left"},r.a.createElement("img",{src:e.image})),r.a.createElement("div",{className:"card_right"},r.a.createElement("span",null,e.category),r.a.createElement("h3",null,e.name),r.a.createElement("p",null,e.description),r.a.createElement("div",{className:"card_footer"},r.a.createElement("span",{className:"price"},"$",e.price),r.a.createElement("button",{className:"btn",onClick:function(){e.onClick(e._id,e.props)},value:""},"Add to cart"),r.a.createElement(u.b,{to:"/",className:"btn"},"Back to results"))))};var P=function(e){var t=Object(c.c)((function(e){return e.productDetails})),a=t.product,l=t.loading,s=t.error,o=Object(c.b)(),i=N;return Object(n.useEffect)((function(){var t;o((t=e.match.params.id,function(){var e=Object(T.a)(O.a.mark((function e(a){var n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a({type:"PRODUCT_DETAILS_REQUEST",payload:t}),e.next=4,U.get("/api/v1/products/byId/".concat(t));case 4:n=e.sent,r=n.data,a({type:"PRODUCT_DETAILS_SUCCESS",payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),a({type:"PRODUCT_DETAILS_FAIL",payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()))}),[]),l?r.a.createElement(m,null):s?r.a.createElement("div",null,s):r.a.createElement(A,{name:a.name,price:a.price,description:a.description,image:a.image,category:a.category,_id:a._id,onClick:i,props:e})},D=a(13),L=a.n(D),x=a(17);var G=function(e){var t=Object(c.c)((function(e){return e.cart})).cartItems,a=e.match.params.id,l=Object(c.b)(),s=function(e){l(function(e){return function(){var t=Object(T.a)(O.a.mark((function t(a,n){var r,c,l,s,o;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n(),c=r.userSignin.userInfo,console.log("UserInfo : ",c),t.next=4,x.delete("/api/v1/cart/",{data:{productId:e,userInfo:c}});case 4:l=t.sent,l.data,a({type:"CART_REMOVE_ITEM",payload:e}),s=n(),o=s.cart.cartItems,L.a.set("cartItems",JSON.stringify(o));case 9:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(e))};return Object(n.useEffect)((function(){a&&l(function(e){return function(){var t=Object(T.a)(O.a.mark((function t(a,n){var r,c,l,s,o,i;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=n(),c=r.userSignin.userInfo,t.next=4,x.post("/api/v1/cart/",{productId:e,userInfo:c});case 4:l=t.sent,s=l.data,a({type:"CART_ADD_ITEM",payload:{product:s._id,name:s.name,category:s.category,image:s.image,price:s.price,description:s.description}}),o=n(),i=o.cart.cartItems,L.a.set("cartItems",JSON.stringify(i)),t.next=13;break;case 11:t.prev=11,t.t0=t.catch(0);case 13:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,a){return t.apply(this,arguments)}}()}(a))}),[]),console.log(t),r.a.createElement("div",{class:"wrap cf"},r.a.createElement("h1",{class:"projTitle"},"Shopping Cart"),r.a.createElement("div",{class:"heading cf"},r.a.createElement("h1",null,"My Cart"),r.a.createElement(u.b,{to:"/",className:"btn"},"Continue Shopping")),r.a.createElement("div",{class:"cart"},r.a.createElement("ul",{class:"cartWrap"},0===t.length?r.a.createElement("div",null,"Cart is empty"):t.map((function(e){return r.a.createElement("li",{className:"items odd",key:e.product},r.a.createElement("div",{className:"infoWrap"},r.a.createElement("li",{className:"items even"},r.a.createElement("div",{className:"infoWrap"},r.a.createElement("div",{className:"cartSection"},r.a.createElement("img",{src:e.image,alt:"",className:"itemImg"}),r.a.createElement("p",{className:"itemNumber"},"Product ID: ",e.product),r.a.createElement(u.b,{to:"/product/".concat(e.product)},r.a.createElement("h3",null,e.name))),r.a.createElement("div",{className:"prodTotal cartSection"},r.a.createElement("p",null,"Price: $",e.price)),r.a.createElement("div",{className:"cartSection removeWrap"},r.a.createElement("button",{type:"button",className:"remove",onClick:function(){return s(e.product)}},r.a.createElement("a",{href:"#",className:"remove"},"x")))))))}))),r.a.createElement("div",{class:"subtotal cf"},r.a.createElement("ul",null,r.a.createElement("li",{class:"totalRow final"},r.a.createElement("span",{class:"label"},"Total ( ",t.length," item(s) )"),r.a.createElement("span",{class:"value"},"$",t.reduce((function(e,t){return e+t.price}),0)))))))},F=a(17),Q=a.n(F),M=a(14);var J=function(e){var t=Object(n.useState)(""),a=Object(g.a)(t,2),l=a[0],s=a[1],o=Object(n.useState)(""),i=Object(g.a)(o,2),u=i[0],m=i[1],d=Object(c.c)((function(e){return e.userSignin})),p=d.userInfo,E=(d.loading,d.error,Object(c.b)());return Object(n.useEffect)((function(){p||e.history.push("/")}),[p]),r.a.createElement("div",{className:"signIn","data-testid":"SigninScreen"},r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"form"},r.a.createElement("h2",null,"Sign-In"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),E(function(e,t){return function(){var a=Object(T.a)(O.a.mark((function a(n){var r,c;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:M.USER_SIGNIN_REQUEST,payload:{email:e,password:t}}),a.prev=1,a.next=4,Q.a.post("/api/v1/users/signin",{email:e,password:t});case 4:r=a.sent,c=r.data,n({type:M.USER_SIGNIN_SUCCESS,payload:c}),L.a.set("userInfo",JSON.stringify(c)),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),n({type:M.USER_SIGNIN_FAIL,payload:a.t0.message});case 13:case"end":return a.stop()}}),a,null,[[1,10]])})));return function(e){return a.apply(this,arguments)}}()}(l,u))}},r.a.createElement("div",{className:"form-field"},r.a.createElement("label",{htmlFor:"login-mail"},r.a.createElement("i",{className:"fa fa-user"})),r.a.createElement("input",{id:"login-mail",type:"text",name:"mail",placeholder:"E-Mail",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",required:!0,onChange:function(e){return s(e.target.value)}}),r.a.createElement("svg",null,r.a.createElement("use",{href:"#svg-check"}))),r.a.createElement("div",{className:"form-field"},r.a.createElement("label",{htmlFor:"login-password"},r.a.createElement("i",{className:"fa fa-lock"})),r.a.createElement("input",{id:"login-password",type:"password",name:"password",placeholder:"Password",pattern:".{3,}",required:!0,onChange:function(e){return m(e.target.value)}}),r.a.createElement("svg",null,r.a.createElement("use",{href:"#svg-check"}))),r.a.createElement("button",{type:"submit",className:"button"},r.a.createElement("div",{className:"arrow-wrapper"},r.a.createElement("span",{className:"arrow"})),r.a.createElement("p",{className:"button-text"},"SIGN IN")))),r.a.createElement("div",{className:"finished"},r.a.createElement("svg",null,r.a.createElement("use",{href:"#svg-check"})))),r.a.createElement("svg",{style:{display:"none"}},r.a.createElement("symbol",{id:"svg-check",viewBox:"0 0 130.2 130.2"},r.a.createElement("polyline",{points:"100.2,40.2 51.5,88.8 29.8,67.5 "}))))};var W=function(e){var t=Object(n.useState)(""),a=Object(g.a)(t,2),l=a[0],s=a[1],o=Object(n.useState)(""),i=Object(g.a)(o,2),u=i[0],d=i[1],p=Object(n.useState)(""),E=Object(g.a)(p,2),f=E[0],v=E[1],S=Object(c.c)((function(e){return e.userRegister})),h=S.userInfo,_=S.loading,b=S.error,I=Object(c.b)();return Object(n.useEffect)((function(){h&&window.open("/","_self")}),[h]),_?r.a.createElement(m,null):b?r.a.createElement("div",null,b):r.a.createElement("div",{className:"signIn","data-testid":"RegisterScreen"},r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"form"},r.a.createElement("h2",null,"Create account"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),I(function(e,t,a){return function(){var n=Object(T.a)(O.a.mark((function n(r){var c,l;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r({type:M.USER_REGISTER_REQUEST,payload:{name:e,email:t,password:a}}),n.prev=1,n.next=4,Q.a.post("/api/v1/users/register",{name:e,email:t,password:a});case 4:c=n.sent,l=c.data,r({type:M.USER_REGISTER_SUCCESS,payload:l}),L.a.set("userInfo",JSON.stringify(l)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),r({type:M.USER_REGISTER_FAIL,payload:n.t0.message});case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e){return n.apply(this,arguments)}}()}(f,l,u))}},r.a.createElement("div",{className:"form-field"},r.a.createElement("label",{htmlFor:"name"},r.a.createElement("i",{className:"fa fa-user"})),r.a.createElement("input",{id:"name",type:"text",name:"name",placeholder:"Your name",required:!0,onChange:function(e){return v(e.target.value)}}),r.a.createElement("svg",null,r.a.createElement("use",{href:"#svg-check"}))),r.a.createElement("div",{className:"form-field"},r.a.createElement("label",{htmlFor:"login-mail"},r.a.createElement("i",{className:"fa fa-user"})),r.a.createElement("input",{id:"login-mail",type:"text",name:"mail",placeholder:"E-Mail",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",required:!0,onChange:function(e){return s(e.target.value)}}),r.a.createElement("svg",null,r.a.createElement("use",{href:"#svg-check"}))),r.a.createElement("div",{className:"form-field"},r.a.createElement("label",{htmlFor:"login-password"},r.a.createElement("i",{className:"fa fa-lock"})),r.a.createElement("input",{id:"login-password",type:"password",name:"password",placeholder:"Password",pattern:".{3,}",required:!0,onChange:function(e){return d(e.target.value)}}),r.a.createElement("svg",null,r.a.createElement("use",{href:"#svg-check"}))),r.a.createElement("button",{type:"submit",className:"button"},r.a.createElement("div",{className:"arrow-wrapper"},r.a.createElement("span",{className:"arrow"})),r.a.createElement("p",{className:"button-text"},"CREATE ACCOUNT")))),r.a.createElement("div",{className:"finished"},r.a.createElement("svg",null,r.a.createElement("use",{href:"#svg-check"})))),r.a.createElement("svg",{style:{display:"none"}},r.a.createElement("symbol",{id:"svg-check",viewBox:"0 0 130.2 130.2"},r.a.createElement("polyline",{points:"100.2,40.2 51.5,88.8 29.8,67.5 "}))))},Y=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){return Object(p.a)(this,a),t.call(this,e)}return Object(E.a)(a,[{key:"render",value:function(){return r.a.createElement("main",{className:"Main","data-testid":"Main"},r.a.createElement(j.a,{path:"/",exact:!0,component:k}),r.a.createElement(j.a,{path:"/product/:id",component:P}),r.a.createElement(j.a,{path:"/cart/:id?",component:G}),r.a.createElement(j.a,{path:"/signin",component:J}),r.a.createElement(j.a,{path:"/register",component:W}))}}]),a}(r.a.Component);var $=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u.a,null,r.a.createElement(d,null),r.a.createElement(Y,null)))},z=a(15),q=a(43);var B=a(45);var V=a(14),X=V.USER_SIGNIN_REQUEST,H=V.USER_SIGNIN_SUCCESS,K=V.USER_SIGNIN_FAIL,Z=V.USER_REGISTER_SUCCESS,ee=V.USER_REGISTER_FAIL,te=V.USER_REGISTER_REQUEST;var ae={cart:{cartItems:L.a.getJSON("cartItems")||[]},userSignin:{userInfo:L.a.getJSON("userInfo")||[]}},ne=Object(z.c)({productList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRODUCT_LIST_REQUEST":return{loading:!0};case"PRODUCT_LIST_SUCCESS":return{loading:!1,products:t.payload};case"PRODUCT_LIST_FAIL":return{loading:!1,error:t.payload};default:return e}},productDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRODUCT_DETAILS_REQUEST":return{loading:!0};case"PRODUCT_DETAILS_SUCCESS":return{loading:!1,product:t.payload};case"PRODUCT_DETAILS_FAIL":return{loading:!1,error:t.payload};default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CART_ADD_ITEM":var a=t.payload,n=e.cartItems.find((function(e){return e.product===a.product}));return n?{cartItems:e.cartItems.map((function(e){return e.product===n.product?n:e}))}:{cartItems:[].concat(Object(B.a)(e.cartItems),[a])};case"CART_REMOVE_ITEM":return{cartItems:e.cartItems.filter((function(e){return e.product!==t.payload}))};default:return e}},categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{categories:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRODUCT_CATEGORY_REQUEST":return{loading:!0};case"PRODUCT_CATEGORY_SUCCESS":return{loading:!1,categories:t.payload};case"PRODUCT_CATEGORY_FAIL":return{loading:!1,error:t.payload};default:return e}},userSignin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return{loading:!0};case H:return{loading:!1,userInfo:t.payload};case K:return{loading:!1,error:t.payload};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case te:return{loading:!0};case Z:return{loading:!1,userInfo:t.payload};case ee:return{loading:!1,error:t.payload};default:return e}}}),re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||z.d,ce=Object(z.e)(ne,ae,re(Object(z.a)(q.a)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,{store:ce},r.a.createElement($,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.83dc193b.chunk.js.map