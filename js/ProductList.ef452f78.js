(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ProductList"],{"1c14":function(t,c,e){"use strict";e.r(c);e("b0c0");var i=e("7a23"),o={class:"product-list__container"},s={class:"product-list__item__img"},n={key:0,class:"product-list__item__discount-label"},r={class:"product-list__item__product-img__container"},a=["src"],_={class:"product-list__item__option"},d={class:"product-list__item__option__item"},u={class:"product-list__item__option__item"},l=["onClick"],p={class:"product-list__item__option__item"},b={class:"product-list__item__content"},j={class:"product-list__item__title"},O={class:"product-list__item__price"},m={key:0,class:"product-list__item__price__discount"};function f(t,c,e,f,h,k){var v=Object(i["G"])("router-view"),g=Object(i["G"])("SvgIcon"),I=Object(i["G"])("router-link");return Object(i["z"])(),Object(i["g"])("div",null,[Object(i["k"])(v),Object(i["h"])("div",o,[(Object(i["z"])(!0),Object(i["g"])(i["a"],null,Object(i["F"])(f.clickedProductGroupData,(function(t){return Object(i["z"])(),Object(i["g"])("div",{class:"product-list__item",key:t.docId},[Object(i["h"])("div",s,[t.isDiscount?(Object(i["z"])(),Object(i["g"])("div",n," -"+Object(i["I"])(100-100*t.discount)+"% ",1)):Object(i["f"])("",!0),Object(i["h"])("div",r,[Object(i["h"])("img",{src:t.product_imgI,alt:"",class:"product-list__item__product-img"},null,8,a)]),Object(i["h"])("ul",_,[Object(i["h"])("li",d,[Object(i["k"])(I,{to:{name:"ProductCard",params:{docId:t.docId}},"data-tip":"加入購物車",class:"product-list__item__option__link"},{default:Object(i["Q"])((function(){return[Object(i["k"])(g,{"icon-name":"cart","icon-class":"symbol-icon"})]})),_:2},1032,["to"])]),Object(i["h"])("li",u,[Object(i["h"])("div",{"data-tip":"喜歡",onClick:function(c){return f.addWishList(t.docId)},class:"product-list__item__option__link"},[Object(i["k"])(g,{"icon-name":"heart","icon-class":"symbol-icon"})],8,l)]),Object(i["h"])("li",p,["coffeeBeans"===t.mainGroupName?(Object(i["z"])(),Object(i["e"])(I,{key:0,to:{name:"CoffeeBeanIntro",params:{name:t.name}},"data-tip":"了解更多",class:"product-list__item__option__link"},{default:Object(i["Q"])((function(){return[Object(i["k"])(g,{"icon-name":"search-alt","icon-class":"symbol-icon"})]})),_:2},1032,["to"])):(Object(i["z"])(),Object(i["e"])(I,{key:1,to:{name:"ProductCard",params:{docId:t.docId}},"data-tip":"了解更多",class:"product-list__item__option__link"},{default:Object(i["Q"])((function(){return[Object(i["k"])(g,{"icon-name":"search-alt","icon-class":"symbol-icon"})]})),_:2},1032,["to"]))])])]),Object(i["h"])("div",b,[Object(i["h"])("div",j,[Object(i["h"])("h5",null,Object(i["I"])(t.brand),1),Object(i["h"])("h4",null,Object(i["I"])(t.name),1)]),Object(i["h"])("div",O,[Object(i["h"])("div",{class:Object(i["q"])(["product-list__item__price--original",{"product-list__item__price--discount":t.isDiscount}])}," 定價："+Object(i["I"])(t.price)+"元 ",3),t.isDiscount?(Object(i["z"])(),Object(i["g"])("div",m," 特價："+Object(i["I"])(Math.ceil(t.price*t.discount))+"元 ",1)):Object(i["f"])("",!0)])])])})),128))])])}e("4de4"),e("d3b7");var h=e("5502"),k=e("6c02"),v={props:{group:{type:String,default:""}},setup:function(t){var c=Object(h["b"])(),e=Object(k["d"])(),o=Object(i["c"])((function(){return c.getters["Product/productData"]})),s=Object(i["c"])((function(){return o.value.filter((function(c){return"coffeeBeans"===t.group?"coffeeBeans"===c.mainGroupName:"accessories"===t.group?"accessories"===c.mainGroupName:c}))})),n=function(t){var i=c.getters["Auth/isLogin"];i?c.dispatch("WishList/addWishListProduct",{productId:t}):(alert("尚未登入會員"),e.push("/login"))};return{props:t,productData:o,clickedProductGroupData:s,addWishList:n}}},g=(e("c31b"),e("6b0d")),I=e.n(g);const y=I()(v,[["render",f],["__scopeId","data-v-12740631"]]);c["default"]=y},"3d91":function(t,c,e){},c31b:function(t,c,e){"use strict";e("3d91")}}]);
//# sourceMappingURL=ProductList.ef452f78.js.map