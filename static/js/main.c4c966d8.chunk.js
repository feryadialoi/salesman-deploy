(this.webpackJsonpsalesman=this.webpackJsonpsalesman||[]).push([[0],{50:function(e,t,c){},75:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(0),o=c.n(r),i=c(25),s=c.n(i),a=(c(50),c(18)),l=c(7),u=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{children:"Not found"})})},j=c(3),d=c(28),b=c(2),O=c(4),f=function e(t){Object(b.a)(this,e),this.token=t},h=function(){function e(){Object(b.a)(this,e)}return Object(O.a)(e,[{key:"setAuth",value:function(e){this.setToken(e.token)}},{key:"getAuth",value:function(){var e=this.getToken();return""!==e?new f(e):null}},{key:"setToken",value:function(e){localStorage.setItem("token",e)}},{key:"getToken",value:function(){return localStorage.getItem("token")||""}},{key:"removeAuth",value:function(){this.removeToken()}},{key:"removeToken",value:function(){localStorage.removeItem("token")}}]),e}(),x=function(){function e(){Object(b.a)(this,e),this.authLocalPersistent=new h}return Object(O.a)(e,[{key:"getAuth",value:function(){return this.authLocalPersistent.getAuth()}},{key:"setAuth",value:function(e){this.authLocalPersistent.setAuth(e)}},{key:"login",value:function(e,t){}}]),e}(),p=function(){return new x},v=function(e){var t=e.component,c=Object(d.a)(e,["component"]),r=p();return Object(n.jsx)(l.b,Object(j.a)(Object(j.a)({},c),{},{render:function(e){return r.getAuth()?Object(n.jsx)(t,Object(j.a)({},e)):Object(n.jsx)(l.a,{to:"/login"})}}))},m=function(e){var t=e.component,c=Object(d.a)(e,["component"]),r=p(),o=Object(l.g)();return Object(n.jsx)(l.b,Object(j.a)(Object(j.a)({},c),{},{render:function(e){return r.getAuth()&&"/login"===o.location.pathname?Object(n.jsx)(l.a,{to:"/"}):Object(n.jsx)(t,Object(j.a)({},e))}}))},g=c(6),y=c(10),A=function(e){return Object(n.jsx)("div",{className:"flex flex-col flex-1 overflow-y-auto p-4",children:e.children})},w=function(e){return Object(n.jsx)("div",{className:"flex flex-col h-screen",children:e.children})},k=c(11),C=function(e){var t=Object(l.g)();return Object(n.jsxs)("div",{className:"flex h-16 bg-purple-600 justify-center",children:[Object(n.jsx)(P,{title:"Beranda",onClick:function(){console.log("%c beranda","color:yellow"),t.replace("/")},children:Object(n.jsx)(k.c,{color:"white"})}),Object(n.jsx)(P,{title:"Orderan",onClick:function(){console.log("%c orderan","color:yellow"),t.replace("/orders")},children:Object(n.jsx)(k.f,{color:"white"})}),Object(n.jsx)(P,{title:"Pelanggan",onClick:function(){console.log("%c customer","color:yellow"),t.replace("/customers")},children:Object(n.jsx)(k.h,{color:"white"})}),Object(n.jsx)(P,{title:"Catalog",onClick:function(){console.log("%c catalog","color:yellow"),t.replace("/catalogs")},children:Object(n.jsx)(k.b,{color:"white"})})]})},P=function(e){return Object(n.jsxs)("div",{onClick:e.onClick,className:"\r flex\r flex-col\r flex-1\r bg-purple-600 \r hover:bg-purple-700 \r focus:outline-none \r focus:ring-2 \r focus:ring-purple-600 \r focus:ring-opacity-50\r items-center\r justify-center\r ",children:[e.children,Object(n.jsx)("div",{className:"text-white text-center",children:e.title})]})},S=function(e){return Object(n.jsxs)("div",{className:"flex h-16 bg-purple-600 items-center px-2",children:[e.children,Object(n.jsx)("div",{children:e.left}),Object(n.jsx)("div",{className:"flex-1 items-center text-white px-2",children:e.title}),Object(n.jsx)("div",{children:e.right})]})},N=function(e){return Object(n.jsx)(n.Fragment,{children:e.data.map(e.render)})},I=c(9),T="SET_PRODUCTS",R="ADD_PRODUCT",D="CLEAR_PRODUCTS",E={products:[]},L=function(e){return{type:T,payload:e}},U=c(8),q=c.n(U),B=c(16),J=c(22),M=c(21),K=function e(t,c,n,r,o){Object(b.a)(this,e),this.id=t,this.name=c,this.price=n,this.stock=r,this.quantity=o},F=function(){function e(){Object(b.a)(this,e)}return Object(O.a)(e,null,[{key:"getProducts",value:function(){return this.products}},{key:"getProduct",value:function(e){return this.products.filter((function(t){return t.id===e}))[0]}}]),e}();F.products=[new K(1,"Good Day Mocacinno",2e3,100,1),new K(2,"Good Day Carrebian Nut",2e3,100,1),new K(3,"Good Day Original",2e3,100,1),new K(4,"Good Day Chococinno",2e3,100,1),new K(5,"Good Day Vanilla Latte",2e3,100,1),new K(6,"Nescafe Classic",2e3,100,1),new K(7,"Nescafe Original",2e3,100,1),new K(8,"Luwak White Koffie Original",2e3,100,1),new K(9,"Luwak White Koffie Caramel",2e3,100,1),new K(10,"Luwak White Koffie Mocca Rose",2e3,100,1)];var G=c(44),X=c.n(G),V=function e(){Object(b.a)(this,e),this.axios=void 0,this.baseUrl=void 0,this.axios=X.a,this.baseUrl="http://localhost"},_=function(e){Object(J.a)(c,e);var t=Object(M.a)(c);function c(){return Object(b.a)(this,c),t.apply(this,arguments)}return Object(O.a)(c,[{key:"getProducts",value:function(){var e=Object(B.a)(q.a.mark((function e(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",F.getProducts());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),c}(V),W=function(){function e(){Object(b.a)(this,e),this.productApiService=new _}return Object(O.a)(e,[{key:"getProducts",value:function(){return this.productApiService.getProducts()}}]),e}(),Q=function(){function e(){Object(b.a)(this,e)}return Object(O.a)(e,[{key:"rupiah",value:function(e){var t=e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");return"".concat("Rp").concat(t)}}]),e}(),H=function(){return new Q},z=function(){var e=new W,t=H(),c=Object(r.useState)(!1),o=Object(g.a)(c,2),i=o[0],s=o[1],a=Object(y.c)((function(e){return e.product.products})),l=Object(y.b)();return Object(r.useEffect)((function(){Promise.all([e.getProducts()]).then((function(e){var t=Object(g.a)(e,1)[0];l(L(t)),s(!1)})).catch((function(e){}))}),[]),i?Object(n.jsx)(w,{children:Object(n.jsx)(A,{children:Object(n.jsx)("div",{children:"loading..."})})}):Object(n.jsxs)(w,{children:[Object(n.jsx)(S,{title:"Catalog"}),Object(n.jsx)(A,{children:Object(n.jsx)(N,{data:a,render:function(e,c){return Object(n.jsxs)("div",{className:"flex shadow mb-4 rounded p-2",children:[Object(n.jsx)("img",{className:"h-20 w-20 mr-2",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXp7vG6vsG3u77s8fTCxsnn7O/f5OfFyczP09bM0dO8wMPk6ezY3eDd4uXR1tnJzdBvAX/cAAACVElEQVR4nO3b23KDIBRA0ShGU0n0//+2KmO94gWZ8Zxmr7fmwWEHJsJUHw8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwO1MHHdn+L3rIoK6eshsNJ8kTaJI07fERPOO1Nc1vgQm2oiBTWJ+d8+CqV1heplLzMRNonED+4mg7L6p591FC+133/xCRNCtd3nL9BlxWP++MOaXFdEXFjZ7r8D9l45C8y6aG0cWtP/SUGhs2d8dA/ZfGgrzYX+TVqcTNRRO9l+fS5eSYzQs85psUcuzk6igcLoHPz2J8gvzWaH/JLS+95RfOD8o1p5CU5R7l5LkfKEp0mQ1UX7hsVXqDpRrifILD/3S9CfmlUQFhQfuFu0STTyJ8gsP3PH7GVxN1FC4t2sbBy4TNRTu7LyHJbqaqKFw+/Q0ncFloo7CjRPwMnCWqKXQZ75El4nKC9dmcJaou9AXOE5UXbi+RGeJygrz8Uf+GewSn9uXuplnWDZJ7d8f24F/s6iq0LYf9olbS3Q8i5oKrRu4S9ybwaQ/aCkqtP3I28QDgeoK7TBya/aXqL5COx67PTCD2grtdOwH+pQV2r0a7YVBgZoKwwIVFQYG6ikMDVRTGByopjD8ATcKb0UhhRTe77sKs2DV7FKSjId18TUEBYVyLhUThWfILHTDqmI85/2RWWjcE/bhP6OD7maT3h20MHsA47JC3PsW0wcwLhv9t0OOPOIkCn21y2bXXwlyylxiYMPk1SuCSmpfK8bNQvIrpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwNX4BCbAju9/X67UAAAAASUVORK5CYII="}),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:e.name}),Object(n.jsx)("div",{children:t.rupiah(e.price)}),Object(n.jsx)("div",{children:e.quantity})]})]},c)}})}),Object(n.jsx)(C,{})]})},Y=function(e){return Object(n.jsx)("button",{type:"button",onClick:e.onClick,className:"\r bg-purple-600 \r hover:bg-purple-700 \r focus:outline-none \r focus:ring-2 \r focus:ring-purple-600 \r focus:ring-opacity-50\r rounded\r h-10\r px-4\r text-white\r shadow\r ",children:e.title})},Z=function(e){return Object(n.jsx)("div",{onClick:e.onClick,children:Object(n.jsx)(k.e,{color:"purple"})})},$=function(e){return Object(n.jsx)("div",{className:"\r hover:bg-purple-700 \r focus:outline-none \r focus:ring-2 \r focus:ring-purple-600 \r focus:ring-opacity-50\r p-2\r ",onClick:e.onClick,children:Object(n.jsx)(k.a,{color:"white"})})},ee=function(e){return Object(n.jsx)("div",{onClick:e.onClick,children:Object(n.jsx)(k.d,{color:e.color||"purple"})})},te=function(e){return Object(n.jsx)("div",{onClick:e.onClick,children:Object(n.jsx)(k.i,{color:e.color||"white"})})},ce=function(e){return e.visible?Object(n.jsx)("div",{className:"\r bg-opacity-80\r absolute\r h-screen\r w-screen\r px-4\r py-8\r bg-gray-900\r flex\r flex-col\r ",children:Object(n.jsxs)("div",{className:"\r bg-white\r flex\r flex-col\r h-full\r rounded\r ",children:[Object(n.jsxs)("div",{className:"\r flex\r h8\r items-center\r border-b-2\r ",children:[Object(n.jsx)("div",{className:"flex-1 px-2",children:e.title}),Object(n.jsx)("div",{className:"p-4",children:Object(n.jsx)(te,{color:"purple",onClick:e.onClose})})]}),Object(n.jsx)("div",{className:"                        \r flex flex-col flex-1 overflow-y-auto p-4\r ",children:e.content})]})}):Object(n.jsx)("div",{})},ne=function e(t,c){Object(b.a)(this,e),this.product=t,this.quantity=c},re="SET_CARTS",oe="SET_CART_ITEMS",ie="ADD_CART_ITEM",se="CLEAR_CART_ITEMS",ae={carts:[],cartItems:[]},le=function(e){return{type:oe,payload:e}},ue=function e(t,c){Object(b.a)(this,e),this.id=t,this.name=c},je=function(){function e(){Object(b.a)(this,e)}return Object(O.a)(e,null,[{key:"getCustomers",value:function(){return this.customers}},{key:"getCustomer",value:function(e){return this.customers.filter((function(t){return t.id===e}))[0]}}]),e}();je.customers=[new ue(1,"customer 1"),new ue(2,"customer 2"),new ue(3,"customer 3")];var de=function(e){Object(J.a)(c,e);var t=Object(M.a)(c);function c(){return Object(b.a)(this,c),t.apply(this,arguments)}return Object(O.a)(c,[{key:"getCustomers",value:function(){var e=Object(B.a)(q.a.mark((function e(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",je.getCustomers());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),c}(V),be=function(e){Object(J.a)(c,e);var t=Object(M.a)(c);function c(){return Object(b.a)(this,c),t.apply(this,arguments)}return Object(O.a)(c,[{key:"storeOrder",value:function(){var e=Object(B.a)(q.a.mark((function e(t){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("orderApiService",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),c}(V),Oe=function(){function e(){Object(b.a)(this,e)}return Object(O.a)(e,[{key:"setOrder",value:function(e){if(this.getOrders().filter((function(t){return t.id===e.id&&t.customerId==e.customerId})).length>0)console.log("specified order already exist");else{var t=[].concat(Object(I.a)(this.getOrders()),[e]);this.setOrders(t)}}},{key:"getOrder",value:function(){throw new Error("Method not implemented.")}},{key:"setOrders",value:function(e){var t=JSON.stringify(e);localStorage.setItem("orders",t)}},{key:"getOrders",value:function(){var e=localStorage.getItem("orders");return e?JSON.parse(e):[]}},{key:"removeOrder",value:function(e){var t=this.getOrders().filter((function(t){return t.id===e.id&&t.customerId===e.customerId}));this.setOrders(t)}}]),e}(),fe=function e(t,c){Object(b.a)(this,e),this.customerId=t,this.orderItems=c},he=function(){function e(){Object(b.a)(this,e),this.orderLocalPersistent=new Oe,this.orderApiService=new be,this.productApiService=new _,this.customerApiService=new de}return Object(O.a)(e,[{key:"storeOrder",value:function(e){console.log("store order",e),this.orderLocalPersistent.setOrder(e);var t=new fe(e.customerId,e.orderItems);this.orderApiService.storeOrder(t).then((function(e){console.log("%c order store to server succesfully","color:green")})).catch((function(e){console.log("%c order store to server fail","color:red")})).finally((function(){}))}},{key:"getProducts",value:function(){return this.productApiService.getProducts()}},{key:"getCustomers",value:function(){return this.customerApiService.getCustomers()}}]),e}(),xe=function(){return new he},pe=function(e){return Object(n.jsx)("div",{onClick:e.onClick,children:Object(n.jsx)(k.g,{color:e.color||"purple"})})},ve="SET_CUSTOMERS",me="ADD_CUSTOMER",ge="CLEAR_CUSTOMERS",ye={customers:[]},Ae=function(e){return{type:ve,payload:e}},we=function(e){return Object(n.jsx)("div",{className:"\r border-t-2 \r flex\r flex-col\r p-3\r ",children:e.children})},ke=function e(t,c,n){Object(b.a)(this,e),this.id=t,this.customerId=c,this.orderItems=n},Ce=function e(t,c,n){Object(b.a)(this,e),this.id=t,this.product=c,this.quantity=n},Pe=function(e){return e.visible?Object(n.jsx)("div",{className:"\r bg-opacity-80\r absolute\r w-screen\r h-screen\r px-4\r py-8\r bg-gray-900\r flex\r flex-col\r justify-center\r ",children:Object(n.jsxs)("div",{className:"\r bg-white\r flex\r flex-col\r rounded\r ",children:[Object(n.jsx)("div",{className:"\r flex\r flex-col\r h-12\r items-center\r justify-center\r border-b-2\r ",children:Object(n.jsx)("div",{className:"font-medium",children:e.title||"Alert Box"})}),Object(n.jsx)("div",{className:"                        \r flex flex-col flex-1 overflow-y-auto p-4\r ",children:e.content}),Object(n.jsx)("div",{className:"flex flex-col border-t-2 p-3",children:Object(n.jsx)(Y,{title:"Tutup",onClick:e.onClose})})]})}):Object(n.jsx)("div",{})},Se=function(){var e,t=Object(l.g)(),c=xe(),o=H(),i=Object(r.useState)(!0),s=Object(g.a)(i,2),a=s[0],u=s[1],j=Object(r.useState)([]),d=Object(g.a)(j,2),b=(d[0],d[1],Object(r.useState)(!1)),O=Object(g.a)(b,2),f=O[0],h=O[1],x=Object(r.useState)(!1),p=Object(g.a)(x,2),v=p[0],m=p[1],k=Object(r.useState)(),C=Object(g.a)(k,2),P=C[0],T=C[1],R=Object(r.useState)(!1),D=Object(g.a)(R,2),E=D[0],U=D[1],q=Object(y.c)((function(e){return e.cart.cartItems})),B=Object(y.c)((function(e){return e.product.products})),J=Object(y.c)((function(e){return e.customer.customers})),M=Object(y.b)(),K=function(e){T(e),h(!1)},F=function(e,t){var c=new ne(e,e.quantity);M({type:ie,payload:c})},G=function(e){q.splice(e,1),M(le(Object(I.a)(q)))};return Object(r.useEffect)((function(){Promise.all([c.getCustomers(),c.getProducts()]).then((function(e){var t=Object(g.a)(e,2),c=t[0],n=t[1];console.log(c),console.log(n),M(Ae(c)),M(L(n)),setTimeout((function(){u(!1)}),500)})).catch((function(e){console.log(e)}))}),[]),a?Object(n.jsx)(w,{children:Object(n.jsx)(A,{children:Object(n.jsx)("div",{children:"loading..."})})}):Object(n.jsxs)(w,{children:[Object(n.jsx)(Pe,{title:"Kesalahan",visible:E,onClose:function(){U(!1)},content:Object(n.jsx)("div",{children:"Periksa kembali data pelanggan dan produk"})}),Object(n.jsx)(ce,{visible:f,title:"Pilih Pelanggan",content:Object(n.jsx)("div",{children:Object(n.jsx)(N,{data:J,render:function(e,t){return Object(n.jsxs)("div",{onClick:function(){K(e)},className:"\r p-2 flex shadow mb-4\r hover:bg-purple-700 \r focus:outline-none \r focus:ring-2 \r focus:ring-purple-600 \r focus:ring-opacity-50\r ",children:[Object(n.jsx)("div",{className:"flex-1",children:e.name}),Object(n.jsx)(Y,{title:"Pilih",onClick:function(){K(e)}})]},t)}})}),onClose:function(){h(!1)}}),Object(n.jsx)(ce,{visible:v,title:"Pilih Produk",content:Object(n.jsx)("div",{children:Object(n.jsx)(N,{data:B,render:function(e,t){return Object(n.jsxs)("div",{className:"p-2 shadow mb-4",children:[Object(n.jsx)("div",{className:"flex",children:Object(n.jsxs)("div",{className:"flex-1",children:[Object(n.jsx)("div",{children:e.name}),Object(n.jsx)("div",{children:o.rupiah(e.price)})]})}),Object(n.jsxs)("div",{className:"flex",children:[Object(n.jsxs)("div",{className:"flex flex-1 items-center content-center",children:[Object(n.jsx)(ee,{onClick:function(){var c,n;console.log("button minus"),n=t,(c=e).quantity>1&&(c.quantity-=1,B[n]=c,M(L(Object(I.a)(B))))}}),Object(n.jsx)("div",{className:"flex p-2",children:e.quantity}),Object(n.jsx)(Z,{onClick:function(){var c,n;console.log("button add"),n=t,(c=e).quantity+=1,console.log(c),B[n]=c,M(L(Object(I.a)(B)))}})]}),Object(n.jsx)(Y,{title:"Tambah",onClick:function(){F(e)}})]})]},t)}})}),onClose:function(){m(!1)}}),Object(n.jsx)(S,{title:"Buat Orderan",left:Object(n.jsx)($,{onClick:function(){M({type:se}),t.goBack()}})}),Object(n.jsxs)(A,{children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"font-medium text-lg",children:"Pelanggan"}),Object(n.jsx)("div",{children:null!==(e=null===P||void 0===P?void 0:P.name)&&void 0!==e?e:"Pelanggan belum dipilih"}),Object(n.jsx)("div",{className:"flex",children:Object(n.jsx)(Y,{title:"Pilih Pelanggan",onClick:function(){h(!0)}})})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"font-medium text-lg",children:"Produk"}),Object(n.jsx)("div",{className:"w-screen",children:Object(n.jsx)(Y,{title:"Tambah Produk",onClick:function(){m(!0)}})}),Object(n.jsx)(N,{data:q,render:function(e,t){return Object(n.jsxs)("div",{className:"flex shadow",children:[Object(n.jsxs)("div",{className:"flex-1",children:[Object(n.jsx)("div",{children:e.product.name}),Object(n.jsx)("div",{children:e.product.price})]}),Object(n.jsxs)("div",{className:"flex p-2",children:[Object(n.jsx)(ee,{onClick:function(){var e;console.log("minus"),q[e=t].quantity>1?(q[e].quantity-=1,M(le(Object(I.a)(q)))):G(e)}}),Object(n.jsx)("div",{children:e.quantity}),Object(n.jsx)(Z,{onClick:function(){console.log("add"),q[t].quantity+=1,M(le(Object(I.a)(q)))}}),Object(n.jsx)(pe,{onClick:function(){console.log("%c remove","color:pink"),G(t)}})]})]},t)}})]})]}),Object(n.jsx)(we,{children:Object(n.jsx)(Y,{title:"Proses",onClick:function(){!function(){if(P&&q.length>0){var e=q.map((function(e){return new Ce(1,e.product,e.quantity)})),t=new ke(2,null===P||void 0===P?void 0:P.id,e);c.storeOrder(t)}else P||console.log("customer not"),0===q.length&&console.log("cart item is empty"),U(!0)}()}})})]})},Ne=function(){function e(){Object(b.a)(this,e)}return Object(O.a)(e,[{key:"getCustomers",value:function(){var e=Object(B.a)(q.a.mark((function e(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",je.getCustomers());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),Ie=function(){var e=new Ne,t=Object(r.useState)(!1),c=Object(g.a)(t,2),o=c[0],i=c[1],s=Object(y.c)((function(e){return e.customer.customers})),a=Object(y.b)();return Object(r.useEffect)((function(){Promise.all([e.getCustomers()]).then((function(e){var t=Object(g.a)(e,1)[0];a(Ae(t)),setTimeout((function(){i(!1)}),300)})).catch((function(e){})).finally((function(){}))}),[]),o?Object(n.jsx)(w,{children:Object(n.jsx)(A,{children:Object(n.jsx)("div",{children:"loading..."})})}):Object(n.jsxs)(w,{children:[Object(n.jsx)(S,{title:"Pelanggan"}),Object(n.jsx)(A,{children:Object(n.jsx)(N,{data:s,render:function(e,t){return Object(n.jsx)("div",{className:"shadow mb-4 p-2 rounded",children:Object(n.jsx)("div",{children:e.name})},t)}})}),Object(n.jsx)(C,{})]})},Te=function(e){var t=H();return Object(n.jsxs)("div",{onClick:e.onClick,className:"rounded shadow mb-4 p-2",children:[Object(n.jsx)("div",{children:e.orderItem.product.name}),Object(n.jsx)("div",{children:t.rupiah(e.orderItem.product.price)}),Object(n.jsx)("div",{children:e.orderItem.quantity})]})},Re="SET_ORDERS",De="CLEAR_ORDERS",Ee="ADD_ORDER",Le={orders:[]},Ue=function(){function e(){Object(b.a)(this,e)}return Object(O.a)(e,null,[{key:"getOrders",value:function(){return this.orders}}]),e}();Ue.orders=[new ke(1,1,[new Ce(1,F.getProduct(1),10),new Ce(2,F.getProduct(3),10),new Ce(3,F.getProduct(4),10)]),new ke(2,3,[new Ce(4,F.getProduct(9),10),new Ce(5,F.getProduct(10),10),new Ce(6,F.getProduct(2),10)]),new ke(3,2,[new Ce(7,F.getProduct(8),10),new Ce(8,F.getProduct(7),10),new Ce(9,F.getProduct(6),10)])];var qe=function(){function e(){Object(b.a)(this,e)}return Object(O.a)(e,[{key:"setProfile",value:function(e){var t=JSON.stringify(e);console.log("profileString",t),localStorage.setItem("profile",t)}},{key:"getProfile",value:function(){var e=localStorage.getItem("profile");if(e)return JSON.parse(e);throw new Error}},{key:"removeProfile",value:function(){localStorage.removeItem("profile")}}]),e}(),Be=function(){function e(){Object(b.a)(this,e),this.profileLocalPersistent=new qe,this.orderApiService=new be,this.orderLocalPersistent=new Oe}return Object(O.a)(e,[{key:"getProfile",value:function(){return this.profileLocalPersistent.getProfile()}},{key:"getOrders",value:function(){return Ue.getOrders()}},{key:"getOrdersLocalPersistent",value:function(){return this.orderLocalPersistent.getOrders()}},{key:"storeOrder",value:function(){var e=Object(B.a)(q.a.mark((function e(t){var c;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=new fe(t.customerId,t.orderItems),this.orderApiService.storeOrder(c);case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),Je=function(){var e=new Be,t=(xe(),Object(r.useState)()),c=Object(g.a)(t,2),o=c[0],i=c[1],s=Object(r.useState)([]),a=Object(g.a)(s,2),l=(a[0],a[1]),u=Object(y.c)((function(e){return e.order.orders})),j=Object(y.b)(),d=function(){var t=e.getOrdersLocalPersistent();j({type:Re,payload:t})};return Object(r.useEffect)((function(){i(e.getProfile()),l(e.getOrders()),d()}),[]),Object(n.jsxs)(w,{children:[Object(n.jsx)(S,{title:"Home",right:Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"text-white",children:null===o||void 0===o?void 0:o.name})})}),Object(n.jsx)(A,{children:Object(n.jsx)(N,{data:u,render:function(t,c){return Object(n.jsxs)("div",{className:"mb-8",children:[Object(n.jsx)(N,{data:t.orderItems,render:function(e,t){return Object(n.jsx)(Te,{onClick:function(){},orderItem:e},t)}}),Object(n.jsx)(Y,{title:"checkout",onClick:function(){console.log(t.orderItems),e.storeOrder(t)}})]},c)}})}),Object(n.jsx)(C,{})]})},Me=function e(t,c){Object(b.a)(this,e),this.username=t,this.password=c},Ke=function e(t,c){Object(b.a)(this,e),this.username=t,this.name=c},Fe=function(){function e(){Object(b.a)(this,e)}return Object(O.a)(e,[{key:"validate",value:function(e){console.log("%c validate: ".concat(e,", ").concat(typeof e),"color:yellow")}}]),e}(),Ge=function(){function e(){Object(b.a)(this,e),this.authService=new x,this.validatorUtil=new Fe,this.profileLocalPersistent=new qe}return Object(O.a)(e,[{key:"login",value:function(){var e=Object(B.a)(q.a.mark((function e(t,c){var n,r;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.validatorUtil.validate(new Me(t,c)),n=new Ke(t,t),console.log("profile",n),this.profileLocalPersistent.setProfile(n),r=new f("token"),console.log("auth",r),this.authService.setAuth(r);case 7:case"end":return e.stop()}}),e,this)})));return function(t,c){return e.apply(this,arguments)}}()}]),e}(),Xe=function(){var e=new Ge,t=Object(l.g)(),c=Object(r.useState)(""),o=Object(g.a)(c,2),i=o[0],s=o[1],a=Object(r.useState)(""),u=Object(g.a)(a,2),j=u[0],d=u[1];return Object(n.jsx)(w,{children:Object(n.jsxs)(A,{children:[Object(n.jsx)("div",{children:"Login"}),Object(n.jsx)("label",{children:"username"}),Object(n.jsx)("div",{children:Object(n.jsx)("input",{className:"border-2 rounded",onChange:function(e){s(e.target.value)}})}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"password"}),Object(n.jsx)("div",{children:Object(n.jsx)("input",{className:"border-2 rounded",onChange:function(e){d(e.target.value)}})})]}),Object(n.jsx)("div",{children:Object(n.jsx)(Y,{title:"Login",onClick:function(){e.login(i,j).then((function(){t.push("/")})).catch((function(e){console.error(e)}))},children:"login"})})]})})},Ve=function(){var e=Object(l.g)(),t=Object(r.useState)([]),c=Object(g.a)(t,2),o=c[0];c[1];return Object(n.jsxs)(w,{children:[Object(n.jsx)(S,{title:"Orderan Selesai",left:Object(n.jsx)($,{onClick:function(){e.goBack()}})}),Object(n.jsx)(A,{children:Object(n.jsx)("div",{children:Object(n.jsx)(N,{data:o,render:function(e,t){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{children:e.id})})}})})})]})},_e=function(){var e=Object(l.g)();return Object(n.jsxs)(w,{children:[Object(n.jsx)(S,{title:"Orderan Dalam Proses",left:Object(n.jsx)($,{onClick:function(){e.goBack()}})}),Object(n.jsx)(A,{})]})},We=function(){var e=Object(l.g)();return Object(n.jsxs)(w,{children:[Object(n.jsx)(S,{title:"Orderan"}),Object(n.jsxs)(A,{children:[Object(n.jsx)("div",{onClick:function(){e.push("/orders/create")},className:"\r p-2\r rounded\r shadow\r mb-4\r ",children:"Buat Orderan Baru"}),Object(n.jsx)("div",{onClick:function(){e.push("/orders/onprocess")},className:"\r p-2\r rounded\r shadow\r mb-4\r ",children:"Orderan Dalam Proses"}),Object(n.jsx)("div",{onClick:function(){e.push("/orders/done")},className:"\r p-2\r rounded\r shadow\r mb-4\r ",children:"Orderan Selesai"})]}),Object(n.jsx)(C,{})]})},Qe=function(){return Object(n.jsx)(a.a,{children:Object(n.jsxs)(l.d,{children:[Object(n.jsx)(v,{component:Je,path:"/",exact:!0}),Object(n.jsx)(v,{component:We,path:"/orders",exact:!0}),Object(n.jsx)(v,{component:Ie,path:"/customers",exact:!0}),Object(n.jsx)(v,{component:z,path:"/catalogs",exact:!0}),Object(n.jsx)(v,{component:Se,path:"/orders/create",exact:!0}),Object(n.jsx)(v,{component:_e,path:"/orders/onprocess",exact:!0}),Object(n.jsx)(v,{component:Ve,path:"/orders/done",exact:!0}),Object(n.jsx)(m,{component:Xe,path:"/login",exact:!0}),Object(n.jsx)(l.b,{component:u})]})})},He=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,76)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),o(e),i(e)}))},ze=c(20),Ye=Object(ze.b)({cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re:return Object(j.a)(Object(j.a)({},e),{},{carts:t.payload});case oe:return Object(j.a)(Object(j.a)({},e),{},{cartItems:t.payload});case ie:return Object(j.a)(Object(j.a)({},e),{},{cartItems:[].concat(Object(I.a)(e.cartItems),[t.payload])});case se:return console.log("clear cart items"),Object(j.a)(Object(j.a)({},e),{},{cartItems:[]});default:return e}},product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(j.a)(Object(j.a)({},e),{},{products:t.payload});case R:return Object(j.a)(Object(j.a)({},e),{},{products:[].concat(Object(I.a)(e.products),[t.payload])});case D:return Object(j.a)(Object(j.a)({},e),{},{products:[]});default:return e}},customer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ve:return Object(j.a)(Object(j.a)({},e),{},{customers:t.payload});case me:return Object(j.a)(Object(j.a)({},e),{},{customers:[].concat(Object(I.a)(e.customers),[t.payload])});case ge:return Object(j.a)(Object(j.a)({},e),{},{customers:[]});default:return e}},order:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Re:return Object(j.a)(Object(j.a)({},e),{},{orders:t.payload});case Ee:return Object(j.a)(Object(j.a)({},e),{},{orders:[].concat(Object(I.a)(e.orders),[t.payload])});case De:return Object(j.a)(Object(j.a)({},e),{},{orders:[]});default:return e}}}),Ze=Object(ze.c)(Ye);s.a.render(Object(n.jsx)(y.a,{store:Ze,children:Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(Qe,{})})}),document.getElementById("root")),He()}},[[75,1,2]]]);
//# sourceMappingURL=main.c4c966d8.chunk.js.map