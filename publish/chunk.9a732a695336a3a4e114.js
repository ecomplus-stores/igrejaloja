(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{237:function(e,t,o){"use strict";o.d(t,"a",(function(){return i})),o.d(t,"b",(function(){return r}));var c=o(25),n=o(23),a=o(29);const i=c.$ecomConfig.get("currency")||"BRL",r=e=>{const[t,...o]=Object(n.a)(e).split(" / "),c={name:t,id:e.sku,price:Object(a.a)(e).toFixed(2)};return o&&o.length?c.variant=o.join(" / "):e.variation_id&&(c.name=t.replace(window.__customGTMVariantRegex||/\s[^\s]+$/,""),c.variant=t.replace(c.name,"").trim()),e.quantity&&(c.quantity=e.quantity),c}},258:function(e,t,o){"use strict";o(6);var c=o(89),n=o(90),a=o(8),i=o(27),r=o(237);t.a=e=>{const t=window.storefrontApp&&window.storefrontApp.router;if(t){let o,s,u;const d=()=>{const e=[];return a.a.data&&Array.isArray(a.a.data.items)&&a.a.data.items.forEach((t=>{e.push(Object(r.b)(t))})),e},p=t=>{e.push({ecommerce:null}),e.push({event:"eec.checkout_option",ecommerce:{currencyCode:r.a,checkout_option:{actionField:t}}})},m=(t,c)=>{const n={step:t,option:c};1===t&&o||2===t&&s||(e.push({ecommerce:null}),e.push({event:"eec.checkout",ecommerce:{currencyCode:r.a,checkout:{actionField:n,products:d()}}}),e.push({event:"checkout"}),1===t?o=!0:s=!0)},h=(t,o)=>{if(!u){if(window.localStorage.getItem("gtm.orderIdSent")!==t){let s;if(o)try{s=JSON.parse(o)}catch(e){}const{amount:u}=s||window.storefrontApp,m={id:t,revenue:(u&&u.total||a.a.data&&a.a.data.subtotal||0).toFixed(2)};u&&(void 0!==u.freight&&(m.shipping=u.freight.toFixed(2)),void 0!==u.tax&&(m.tax=u.tax.toFixed(2))),s&&(["shipping_method_label","payment_method_label"].forEach(((e,t)=>{s[e]&&p({step:3+t,option:s[e]})})),s.extra_discount&&s.extra_discount.discount_coupon&&(m.coupon=s.extra_discount.discount_coupon));let h=1;if(window.__sendGTMExtraPurchaseData){const t=i.a.getCustomer(),o={};let a;t&&(o.customerDisplayName=Object(c.a)(t),t.name&&(o.customerGivenName=t.name.given_name,o.customerFamilyName=t.name.family_name),o.customerEmail=t.main_email,o.customerPhone=Object(n.a)(t),a=t.addresses&&t.addresses[0]);try{const e=JSON.parse(window.sessionStorage.getItem("ecomCustomerAddress"));"object"==typeof a&&a?Object.assign(a,e):a=e}catch{}a&&a.zip&&(o.shippingAddrZip=a.zip,o.shippingAddrStreet=a.street,o.shippingAddrNumber=a.number,a.street&&a.number&&(o.shippingAddrStreet+=`, ${a.number}`),o.shippingAddrCity=a.city,o.shippingAddrProvinceCode=a.province_code),e.push({event:"purchaseExtraData",...o}),h=100}setTimeout((()=>{e.push({ecommerce:null}),e.push({event:"eec.purchase",ecommerce:{currencyCode:r.a,purchase:{actionField:m,products:d()}}})}),h),window.localStorage.setItem("gtm.orderIdSent",t)}u=!0}};let l;const v=e=>{let{name:t,params:o}=e;switch(t){case"cart":m(1,"Review Cart");break;case"checkout":o.step&&s||m(2,"Login / Signup"),1===Number(o.step)?m(3,"Shipping Method"):2===Number(o.step)&&m(4,"Payment Method");break;case"confirmation":clearTimeout(l),o.json?h(o.id,decodeURIComponent(o.json)):l=setTimeout((()=>{h(o.id)}),1500)}};t.currentRoute&&v(t.currentRoute),t.afterEach(v)}}},259:function(e,t,o){"use strict";o(6);var c=o(8),n=o(237);t.a=e=>{const t={};setTimeout((()=>{c.a.data.items.forEach((e=>{t[e.sku]=Object(n.b)(e)}))}),10);const o=o=>{const c=Object(n.b)(o);e.push({ecommerce:null}),e.push({event:"eec.add",ecommerce:{currencyCode:n.a,add:{products:[c]}}}),e.push({event:"addToCart"}),t[o.sku]=c},a=o=>{const c=t[o.sku];e.push({ecommerce:null}),e.push({event:"eec.remove",ecommerce:{currencyCode:n.a,remove:{products:[c?Object.assign({},c):Object(n.b)(o)]}}}),e.push({event:"removeFromCart"}),delete t[o.sku]};c.a.on("addItem",(e=>{let{item:t}=e;return o(t)})),c.a.on("increaseItemQnt",(e=>{let{item:c}=e;const n=t[c.sku];if(n){const e=c.quantity-n.quantity;e>0?o({...c,quantity:e}):a({...c,quantity:-e})}else o(c)})),c.a.on("removeItem",(e=>{let{item:t}=e;return a(t)})),c.a.on("clear",(()=>{for(const e in t)t[e]&&a(t[e])}))}},451:function(e,t,o){"use strict";o.r(t);var c=o(258);const{location:n}=window;var a=o(259);t.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{gaTrackingId:t,googleAdsId:o}=e,{gtag:i}=window;"function"==typeof i&&(((e,t,o)=>{const a=()=>setTimeout((()=>{e("event","page_view",{page_title:document.title||"Checkout",page_path:`/${n.hash.split("/")[1]}`,send_to:t})}),300);let i=!1;Object(c.a)({push:t=>{let c,r,{event:s,ecommerce:u}=t;if(s)switch(s){case"eec.checkout":case"eec.checkout_option":c=u&&u.checkout,c&&(i||(e("event","begin_checkout",{items:c.products}),i=!0),r=c.actionField&&c.actionField.step),e("event","set_checkout_option",{checkout_step:r||(n.hash.startsWith("#/cart")?1:2)});break;case"eec.purchase":a(),c=u&&u.purchase,c&&c.actionField&&(e("event","purchase",{transaction_id:c.actionField.id,affiliation:document.querySelector('meta[name="author"]').getAttribute("content")||"Shop",value:Number(c.actionField.revenue),currency:u.currencyCode,tax:c.actionField.tax?Number(c.actionField.tax):0,shipping:c.actionField.shipping?Number(c.actionField.shipping):0,items:c.products}),o&&e("event","conversion",{send_to:o,value:Number(c.actionField.revenue),currency:u.currencyCode,transaction_id:c.actionField.id}));break;default:a()}}})})(i,t,o),(e=>{Object(a.a)({push:t=>{let{event:o,ecommerce:c}=t;if(c&&("eec.add"===o||"eec.remove"===o)){const t=c[o.slice(4)];t&&t.products&&e("event","eec.add"===o?"add_to_cart":"remove_from_cart",{items:t.products})}}})})(i))}}}]);