(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ProductCard"],{"9dcd":function(t,e,r){var n;(function(c){"use strict";var o,i=20,u=1,a=1e6,s=1e6,l=-7,d=21,f=!1,h="[big.js] ",m=h+"Invalid ",p=m+"decimal places",b=m+"rounding mode",v=h+"Division by zero",_={},O=void 0,g=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;function j(){function t(e){var r=this;if(!(r instanceof t))return e===O?j():new t(e);if(e instanceof t)r.s=e.s,r.e=e.e,r.c=e.c.slice();else{if("string"!==typeof e){if(!0===t.strict&&"bigint"!==typeof e)throw TypeError(m+"value");e=0===e&&1/e<0?"-0":String(e)}w(r,e)}r.constructor=t}return t.prototype=_,t.DP=i,t.RM=u,t.NE=l,t.PE=d,t.strict=f,t.roundDown=0,t.roundHalfUp=1,t.roundHalfEven=2,t.roundUp=3,t}function w(t,e){var r,n,c;if(!g.test(e))throw Error(m+"number");for(t.s="-"==e.charAt(0)?(e=e.slice(1),-1):1,(r=e.indexOf("."))>-1&&(e=e.replace(".","")),(n=e.search(/e/i))>0?(r<0&&(r=n),r+=+e.slice(n+1),e=e.substring(0,n)):r<0&&(r=e.length),c=e.length,n=0;n<c&&"0"==e.charAt(n);)++n;if(n==c)t.c=[t.e=0];else{for(;c>0&&"0"==e.charAt(--c););for(t.e=r-n-1,t.c=[],r=0;n<=c;)t.c[r++]=+e.charAt(n++)}return t}function y(t,e,r,n){var c=t.c;if(r===O&&(r=t.constructor.RM),0!==r&&1!==r&&2!==r&&3!==r)throw Error(b);if(e<1)n=3===r&&(n||!!c[0])||0===e&&(1===r&&c[0]>=5||2===r&&(c[0]>5||5===c[0]&&(n||c[1]!==O))),c.length=1,n?(t.e=t.e-e+1,c[0]=1):c[0]=t.e=0;else if(e<c.length){if(n=1===r&&c[e]>=5||2===r&&(c[e]>5||5===c[e]&&(n||c[e+1]!==O||1&c[e-1]))||3===r&&(n||!!c[0]),c.length=e--,n)for(;++c[e]>9;)c[e]=0,e--||(++t.e,c.unshift(1));for(e=c.length;!c[--e];)c.pop()}return t}function I(t,e,r){var n=t.e,c=t.c.join(""),o=c.length;if(e)c=c.charAt(0)+(o>1?"."+c.slice(1):"")+(n<0?"e":"e+")+n;else if(n<0){for(;++n;)c="0"+c;c="0."+c}else if(n>0)if(++n>o)for(n-=o;n--;)c+="0";else n<o&&(c=c.slice(0,n)+"."+c.slice(n));else o>1&&(c=c.charAt(0)+"."+c.slice(1));return t.s<0&&r?"-"+c:c}_.abs=function(){var t=new this.constructor(this);return t.s=1,t},_.cmp=function(t){var e,r=this,n=r.c,c=(t=new r.constructor(t)).c,o=r.s,i=t.s,u=r.e,a=t.e;if(!n[0]||!c[0])return n[0]?o:c[0]?-i:0;if(o!=i)return o;if(e=o<0,u!=a)return u>a^e?1:-1;for(i=(u=n.length)<(a=c.length)?u:a,o=-1;++o<i;)if(n[o]!=c[o])return n[o]>c[o]^e?1:-1;return u==a?0:u>a^e?1:-1},_.div=function(t){var e=this,r=e.constructor,n=e.c,c=(t=new r(t)).c,o=e.s==t.s?1:-1,i=r.DP;if(i!==~~i||i<0||i>a)throw Error(p);if(!c[0])throw Error(v);if(!n[0])return t.s=o,t.c=[t.e=0],t;var u,s,l,d,f,h=c.slice(),m=u=c.length,b=n.length,_=n.slice(0,u),g=_.length,j=t,w=j.c=[],I=0,E=i+(j.e=e.e-t.e)+1;for(j.s=o,o=E<0?0:E,h.unshift(0);g++<u;)_.push(0);do{for(l=0;l<10;l++){if(u!=(g=_.length))d=u>g?1:-1;else for(f=-1,d=0;++f<u;)if(c[f]!=_[f]){d=c[f]>_[f]?1:-1;break}if(!(d<0))break;for(s=g==u?c:h;g;){if(_[--g]<s[g]){for(f=g;f&&!_[--f];)_[f]=9;--_[f],_[g]+=10}_[g]-=s[g]}for(;!_[0];)_.shift()}w[I++]=d?l:++l,_[0]&&d?_[g]=n[m]||0:_=[n[m]]}while((m++<b||_[0]!==O)&&o--);return w[0]||1==I||(w.shift(),j.e--,E--),I>E&&y(j,E,r.RM,_[0]!==O),j},_.eq=function(t){return 0===this.cmp(t)},_.gt=function(t){return this.cmp(t)>0},_.gte=function(t){return this.cmp(t)>-1},_.lt=function(t){return this.cmp(t)<0},_.lte=function(t){return this.cmp(t)<1},_.minus=_.sub=function(t){var e,r,n,c,o=this,i=o.constructor,u=o.s,a=(t=new i(t)).s;if(u!=a)return t.s=-a,o.plus(t);var s=o.c.slice(),l=o.e,d=t.c,f=t.e;if(!s[0]||!d[0])return d[0]?t.s=-a:s[0]?t=new i(o):t.s=1,t;if(u=l-f){for((c=u<0)?(u=-u,n=s):(f=l,n=d),n.reverse(),a=u;a--;)n.push(0);n.reverse()}else for(r=((c=s.length<d.length)?s:d).length,u=a=0;a<r;a++)if(s[a]!=d[a]){c=s[a]<d[a];break}if(c&&(n=s,s=d,d=n,t.s=-t.s),(a=(r=d.length)-(e=s.length))>0)for(;a--;)s[e++]=0;for(a=e;r>u;){if(s[--r]<d[r]){for(e=r;e&&!s[--e];)s[e]=9;--s[e],s[r]+=10}s[r]-=d[r]}for(;0===s[--a];)s.pop();for(;0===s[0];)s.shift(),--f;return s[0]||(t.s=1,s=[f=0]),t.c=s,t.e=f,t},_.mod=function(t){var e,r=this,n=r.constructor,c=r.s,o=(t=new n(t)).s;if(!t.c[0])throw Error(v);return r.s=t.s=1,e=1==t.cmp(r),r.s=c,t.s=o,e?new n(r):(c=n.DP,o=n.RM,n.DP=n.RM=0,r=r.div(t),n.DP=c,n.RM=o,this.minus(r.times(t)))},_.neg=function(){var t=new this.constructor(this);return t.s=-t.s,t},_.plus=_.add=function(t){var e,r,n,c=this,o=c.constructor;if(t=new o(t),c.s!=t.s)return t.s=-t.s,c.minus(t);var i=c.e,u=c.c,a=t.e,s=t.c;if(!u[0]||!s[0])return s[0]||(u[0]?t=new o(c):t.s=c.s),t;if(u=u.slice(),e=i-a){for(e>0?(a=i,n=s):(e=-e,n=u),n.reverse();e--;)n.push(0);n.reverse()}for(u.length-s.length<0&&(n=s,s=u,u=n),e=s.length,r=0;e;u[e]%=10)r=(u[--e]=u[e]+s[e]+r)/10|0;for(r&&(u.unshift(r),++a),e=u.length;0===u[--e];)u.pop();return t.c=u,t.e=a,t},_.pow=function(t){var e=this,r=new e.constructor("1"),n=r,c=t<0;if(t!==~~t||t<-s||t>s)throw Error(m+"exponent");for(c&&(t=-t);;){if(1&t&&(n=n.times(e)),t>>=1,!t)break;e=e.times(e)}return c?r.div(n):n},_.prec=function(t,e){if(t!==~~t||t<1||t>a)throw Error(m+"precision");return y(new this.constructor(this),t,e)},_.round=function(t,e){if(t===O)t=0;else if(t!==~~t||t<-a||t>a)throw Error(p);return y(new this.constructor(this),t+this.e+1,e)},_.sqrt=function(){var t,e,r,n=this,c=n.constructor,o=n.s,i=n.e,u=new c("0.5");if(!n.c[0])return new c(n);if(o<0)throw Error(h+"No square root");o=Math.sqrt(n+""),0===o||o===1/0?(e=n.c.join(""),e.length+i&1||(e+="0"),o=Math.sqrt(e),i=((i+1)/2|0)-(i<0||1&i),t=new c((o==1/0?"5e":(o=o.toExponential()).slice(0,o.indexOf("e")+1))+i)):t=new c(o+""),i=t.e+(c.DP+=4);do{r=t,t=u.times(r.plus(n.div(r)))}while(r.c.slice(0,i).join("")!==t.c.slice(0,i).join(""));return y(t,(c.DP-=4)+t.e+1,c.RM)},_.times=_.mul=function(t){var e,r=this,n=r.constructor,c=r.c,o=(t=new n(t)).c,i=c.length,u=o.length,a=r.e,s=t.e;if(t.s=r.s==t.s?1:-1,!c[0]||!o[0])return t.c=[t.e=0],t;for(t.e=a+s,i<u&&(e=c,c=o,o=e,s=i,i=u,u=s),e=new Array(s=i+u);s--;)e[s]=0;for(a=u;a--;){for(u=0,s=i+a;s>a;)u=e[s]+o[a]*c[s-a-1]+u,e[s--]=u%10,u=u/10|0;e[s]=u}for(u?++t.e:e.shift(),a=e.length;!e[--a];)e.pop();return t.c=e,t},_.toExponential=function(t,e){var r=this,n=r.c[0];if(t!==O){if(t!==~~t||t<0||t>a)throw Error(p);for(r=y(new r.constructor(r),++t,e);r.c.length<t;)r.c.push(0)}return I(r,!0,!!n)},_.toFixed=function(t,e){var r=this,n=r.c[0];if(t!==O){if(t!==~~t||t<0||t>a)throw Error(p);for(r=y(new r.constructor(r),t+r.e+1,e),t=t+r.e+1;r.c.length<t;)r.c.push(0)}return I(r,!1,!!n)},_.toJSON=_.toString=function(){var t=this,e=t.constructor;return I(t,t.e<=e.NE||t.e>=e.PE,!!t.c[0])},_.toNumber=function(){var t=Number(I(this,!0,!0));if(!0===this.constructor.strict&&!this.eq(t.toString()))throw Error(h+"Imprecise conversion");return t},_.toPrecision=function(t,e){var r=this,n=r.constructor,c=r.c[0];if(t!==O){if(t!==~~t||t<1||t>a)throw Error(m+"precision");for(r=y(new n(r),t,e);r.c.length<t;)r.c.push(0)}return I(r,t<=r.e||r.e<=n.NE||r.e>=n.PE,!!c)},_.valueOf=function(){var t=this,e=t.constructor;if(!0===e.strict)throw Error(h+"valueOf disallowed");return I(t,t.e<=e.NE||t.e>=e.PE,!0)},o=j(),o["default"]=o.Big=o,n=function(){return o}.call(e,r,e,t),void 0===n||(t.exports=n)})()},dd22:function(t,e,r){},e915:function(t,e,r){"use strict";r.r(e);r("b0c0"),r("a4d3"),r("e01a");var n=r("7a23"),c=function(t){return Object(n["C"])("data-v-a8976dba"),t=t(),Object(n["A"])(),t},o={class:"product-modal__container"},i={class:"product-modal"},u=c((function(){return Object(n["h"])("h1",{class:"product-modal__logo-name"}," Caffeine With Mike ",-1)})),a=["src"],s={class:"product-modal__content"},l={class:"product-modal__btn__container"},d=c((function(){return Object(n["h"])("p",null,"查看商品",-1)})),f={class:"product-modal__close-btn"},h={class:"product-modal__title product-modal__item"},m={class:"product-modal__title__brand"},p={class:"product-modal__title__name"},b={class:"product-modal__info product-modal__item"},v=c((function(){return Object(n["h"])("h4",{class:"product-modal__item-title"}," 商品資訊 ",-1)})),_={class:"product-modal__description"},O={class:"product-modal__select"},g={key:0,class:"product-modal__coffee-only"},j={class:"product-modal__option product-modal__item"},w=c((function(){return Object(n["h"])("h4",{class:"product-modal__item-title"}," 研磨度 ",-1)})),y={class:"product-modal__option__container"},I=["value"],E={class:"product-modal__option product-modal__item"},k=c((function(){return Object(n["h"])("h4",{class:"product-modal__item-title"}," 份量 ",-1)})),P={class:"product-modal__option__container"},C=["value","id"],N={class:"product-modal__option product-modal__item"},S=c((function(){return Object(n["h"])("h4",{class:"product-modal__item-title"}," 數量 ",-1)})),z={class:"product-modal__option__container"},D={class:"product-modal__option-quantity"},M={class:"product-modal__checkout"},Q=c((function(){return Object(n["h"])("p",null,"加入購物車",-1)})),R={class:"product-modal__price"};function q(t,e,r,c,q,A){var x=Object(n["G"])("router-link"),G=Object(n["G"])("SvgIcon");return Object(n["z"])(),Object(n["g"])("div",o,[Object(n["k"])(x,{to:{name:"ProductList"},class:"product-modal--close"}),Object(n["h"])("div",i,[Object(n["R"])(Object(n["h"])("div",{class:"product-modal--close product-modal__background--close",onClick:e[0]||(e[0]=function(t){return c.imageShowToggle()})},null,512),[[n["O"],c.isImageShow]]),Object(n["h"])("div",{class:Object(n["q"])(["product-modal__background",{"product-modal__background--show":c.isImageShow}])},[Object(n["h"])("div",{class:"product-modal__color",style:Object(n["r"])({"--productInfoColor":c.productCardColor})},null,4),Object(n["h"])("div",{class:"product-modal__return-btn",onClick:e[1]||(e[1]=function(t){return c.imageShowToggle()})},[Object(n["k"])(G,{"icon-name":"return","icon-class":"symbol-icon"})]),u,Object(n["h"])("img",{src:c.currentProductInfo.product_imgI,alt:"",class:Object(n["q"])(["product-modal__img",{"product-modal__img__coffee-beans":c.isCoffeeBeansGroup}])},null,10,a)],2),Object(n["h"])("div",s,[Object(n["h"])("div",l,[Object(n["h"])("div",{onClick:e[2]||(e[2]=function(t){return c.imageShowToggle()}),class:"product-modal__img-close-btn"},[Object(n["k"])(G,{"icon-name":"import","icon-class":"symbol-icon"}),d]),Object(n["h"])("div",f,[Object(n["k"])(x,{to:{name:"ProductList"}},{default:Object(n["Q"])((function(){return[Object(n["k"])(G,{"icon-name":"close","icon-class":"symbol-icon"})]})),_:1})])]),Object(n["h"])("div",h,[Object(n["h"])("h3",m,Object(n["I"])(c.currentProductInfo.brand),1),Object(n["h"])("h2",p,Object(n["I"])(c.currentProductInfo.name),1)]),Object(n["h"])("div",b,[v,Object(n["h"])("p",_,Object(n["I"])(c.currentProductInfo.description),1)]),Object(n["h"])("div",O,[c.isCoffeeBeansGroup?(Object(n["z"])(),Object(n["g"])("div",g,[Object(n["h"])("div",j,[w,Object(n["h"])("div",y,[Object(n["R"])(Object(n["h"])("select",{"onUpdate:modelValue":e[3]||(e[3]=function(t){return c.grind=t})},[(Object(n["z"])(!0),Object(n["g"])(n["a"],null,Object(n["F"])(c.grindSize,(function(t){return Object(n["z"])(),Object(n["g"])("option",{key:t.value,value:t.value},Object(n["I"])(t.name),9,I)})),128))],512),[[n["M"],c.grind]])])]),Object(n["h"])("div",E,[k,Object(n["h"])("div",P,[(Object(n["z"])(!0),Object(n["g"])(n["a"],null,Object(n["F"])(c.weightSize,(function(t){return Object(n["z"])(),Object(n["g"])("label",{key:t.value,class:""},[Object(n["R"])(Object(n["h"])("input",{type:"radio",value:t.value,id:t.name,"onUpdate:modelValue":e[4]||(e[4]=function(t){return c.weight=t})},null,8,C),[[n["L"],c.weight]]),Object(n["h"])("span",null,Object(n["I"])(t.name),1)])})),128))])])])):Object(n["f"])("",!0),Object(n["h"])("div",N,[S,Object(n["h"])("div",z,[Object(n["h"])("div",D,[Object(n["h"])("div",{class:"product-modal__count",onClick:e[5]||(e[5]=function(t){return c.itemQuantityNum>1?c.itemQuantityNum--:c.itemQuantityNum=1})},[Object(n["k"])(G,{"icon-name":"minus","icon-class":"symbol-icon"})]),Object(n["R"])(Object(n["h"])("input",{class:"product-modal__value",type:"number","onUpdate:modelValue":e[6]||(e[6]=function(t){return c.itemQuantityNum=t}),onChange:e[7]||(e[7]=function(){return c.changeItemQuantityNum&&c.changeItemQuantityNum.apply(c,arguments)})},null,544),[[n["N"],c.itemQuantityNum]]),Object(n["h"])("div",{class:"product-modal__count",onClick:e[8]||(e[8]=function(t){return c.itemQuantityNum++})},[Object(n["k"])(G,{"icon-name":"plus","icon-class":"symbol-icon"})])])])])]),Object(n["h"])("div",M,[Object(n["h"])("div",{href:"#",class:"product-modal__cart-btn",onClick:e[9]||(e[9]=function(){return c.addShopCart&&c.addShopCart.apply(c,arguments)})},[Object(n["k"])(G,{"icon-name":"cart","icon-class":"symbol-icon"}),Q]),Object(n["h"])("div",R,[Object(n["h"])("h1",null,Object(n["I"])(c.sumPrice)+"元",1)])])])])])}r("4de4"),r("d3b7"),r("99af");var A=r("5502"),x=r("6c02"),G=r("9dcd"),B=r.n(G),T={props:{group:{type:String,default:""},docId:{type:String,default:""}},setup:function(t){var e=Object(A["b"])(),r=Object(x["c"])(),c=Object(x["d"])(),o=function(){var t=r.params.docId;e.dispatch("Product/setCurrentProductArray",t)},i=Object(n["E"])(!1),u=function(){i.value=!i.value},a=Object(n["c"])((function(){return e.getters["Product/currentProductArray"][0]})),s=Object(n["c"])((function(){return void 0===a.value.color?"#df9c3a":a.value.color})),l=Object(n["c"])((function(){return"coffeeBeans"===a.value.mainGroupName})),d=Object(n["E"])(0),f=Object(n["D"])([{name:"原豆",value:0},{name:"細研磨（義式咖啡機、愛壓樂）",value:1},{name:"中細研磨（摩卡壺）",value:2},{name:"中研磨（美式咖啡機、虹吸壺）",value:3},{name:"中粗研磨（手沖壺）",value:4},{name:"粗研磨（法式濾壓壺、冰滴）",value:5}]),h=Object(n["E"])(1),m=Object(n["D"])([{name:"250g",value:1},{name:"500g",value:1.9},{name:"1000g",value:2.7}]),p=Object(n["E"])(1),b=Object(n["c"])((function(){var t=new B.a(a.value.price),e=new B.a(a.value.discount),r=new B.a(h.value),n=new B.a(p.value),c=t.times(e).round(0,3).times(r).round(0,3).times(n);return c})),v=function(t){var e=1*t.target.value;isNaN(e)||e<1?p.value=1:p.value=parseInt(e)},_=function(){var t=function(){if(l.value){var t=f.filter((function(t){return t.value===d.value}))[0].name,e=m.filter((function(t){return t.value===h.value}))[0].name;return"".concat(a.value.name,"-").concat(t,"-").concat(e)}return a.value.name},n=function(){var t=new B.a(a.value.price),e=new B.a(a.value.discount),r=new B.a(h.value),n=parseFloat(t.times(e).round(0,3).times(r).round(0,3));return n},o={id:r.params.docId,mainGroupName:r.params.group,cartItemId:"".concat(r.params.docId).concat(d.value).concat(h.value),productId:a.value.id,brand:a.value.brand,name:t(),price:a.value.price,discount:a.value.discount,discountPrice:n(),grind:d.value,weight:h.value,quantity:p.value,product_imgI:a.value.product_imgI};e.dispatch("Cart/addCartItem",o),c.push({name:"Success"})};return o(),{props:t,isImageShow:i,imageShowToggle:u,currentProductInfo:a,productCardColor:s,isCoffeeBeansGroup:l,grind:d,grindSize:f,weight:h,weightSize:m,itemQuantityNum:p,changeItemQuantityNum:v,addShopCart:_,sumPrice:b}}},U=(r("fb81"),r("6b0d")),F=r.n(U);const J=F()(T,[["render",q],["__scopeId","data-v-a8976dba"]]);e["default"]=J},fb81:function(t,e,r){"use strict";r("dd22")}}]);
//# sourceMappingURL=ProductCard.416c7f54.js.map