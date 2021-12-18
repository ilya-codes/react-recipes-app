(this["webpackJsonprecipes-app"]=this["webpackJsonprecipes-app"]||[]).push([[0],{32:function(n,e,t){},45:function(n,e,t){"use strict";t.r(e);var i=t(0),r=t.n(i),c=t(21),a=t.n(c),s=(t(32),t(16)),o=t.n(s),l=t(22),d=t(8),m=t(2),h=t(3),j=t(7),p=t(4),b=t(27),f=t(1),x=Object(i.createContext)({favorites:[],totalFavorites:0,addFavorite:function(n){},removeFavorite:function(n){},itemIsFavorite:function(n){}}),u=function(n){var e=function(n,e){var t=Object(i.useState)((function(){try{var t=window.localStorage.getItem(n);return t?JSON.parse(t):e}catch(i){return console.log(i),e}})),r=Object(d.a)(t,2),c=r[0],a=r[1];return[c,function(e){try{var t=e instanceof Function?e(c):e;a(t),window.localStorage.setItem(n,JSON.stringify(t))}catch(i){console.log(i)}}]}("favoriteRecipes",[]),t=Object(d.a)(e,2),r=t[0],c=t[1],a={favorites:r,totalFavorites:r.length,addFavorite:function(n){c([].concat(Object(b.a)(r),[{recipe:n}]))},removeFavorite:function(n){var e=r.filter((function(e){return e.recipe.url!==n}));c(e)},itemIsFavorite:function(n){return r.some((function(e){return e.recipe.url===n}))}};return Object(f.jsx)(x.Provider,{value:a,children:n.children})};var g,O,v,w,y,k,N,F,S,z=x,C=p.a.button(g||(g=Object(h.a)(["\n  text-decoration: none;\n  border: none;\n  border-radius: 5px;\n  font-size: 1.2rem;\n  width: 8rem;\n  height: 2rem;\n  background-color: #9cb49f;\n  color: #fff;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n\n  :hover {\n    background-color: #8ba18e;\n    box-shadow: 0 6px 16px #8ba18e8b;\n  }\n"]))),D=function(n){return"search"===n.role?Object(f.jsx)(C,{type:"submit",form:"search-form",children:n.children}):Object(f.jsx)(C,{children:n.children})},B=t(9),I=p.a.h1(O||(O=Object(h.a)(["\n  text-align: center;\n  font-size: 1.8rem;\n\n  @media screen and (min-width: 900px) {\n    letter-spacing: 0.5rem;\n    font-size: 2.2rem;\n  }\n"]))),R=function(n){return Object(f.jsx)(I,{children:n.title})},L=p.a.nav(v||(v=Object(h.a)(["\n  form {\n    width: 90vw;\n    margin: auto;\n  }\n\n  input {\n    height: 2rem;\n    border: none;\n    border-radius: 5px;\n    font-size: 1.2rem;\n    outline: none;\n    padding-left: 1rem;\n    color: #8ba18e;\n    width: 100%;\n    margin: 1rem auto;\n  }\n\n  @media screen and (min-width: 900px) {\n    margin-top: 0;\n\n    form {\n      width: 40vw;\n      margin-right: 1rem;\n    }\n  }\n"]))),T=function(n){var e=n.search,t=n.getSearch,i=n.updateSearch;return Object(f.jsx)(L,{children:Object(f.jsx)("form",{className:"search-form",id:"search-form",onSubmit:t,children:Object(f.jsx)("input",{type:"text",className:"search-bar",value:e,onChange:i})})})},J=p.a.header(w||(w=Object(h.a)(["\n  position: sticky;\n  z-index: 2;\n  top: -4rem;\n  width: 100vw;\n  height: 11rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n  color: #fff;\n  background-color: #c1dfc4;\n  overflow: hidden;\n\n  .logo-container {\n    position: initial;\n  }\n\n  .link {\n    text-decoration: none;\n    height: 2rem;\n  }\n\n  .fav-count-info {\n    text-align: center;\n    font-size: 1.2rem;\n  }\n\n  .count {\n    margin: 0 0.2rem;\n    color: #8ba18e;\n    font-weight: 600;\n  }\n\n  .badge {\n    position: relative;\n    bottom: 2.7rem;\n    left: 7.2rem;\n    height: 1.5rem;\n    width: 1.5rem;\n    line-height: 1.6rem;\n    color: #fff;\n    text-align: center;\n    background-color: #6c7d6e;\n    border-radius: 50%;\n  }\n\n  .btn-container {\n    width: 18rem;\n    display: flex;\n    justify-content: space-between;\n  }\n\n  @media screen and (min-width: 900px) {\n    justify-content: flex-end;\n    flex-direction: row;\n    padding: 2rem 3rem;\n    min-height: 0;\n    height: 6rem;\n    position: fixed;\n    top: 0;\n\n    .logo-container {\n      position: fixed;\n      left: 3rem;\n    }\n\n    .fav-count-info {\n      font-size: 1.5rem;\n      text-align: end;\n      margin-right: 2rem;\n    }\n  }\n"]))),A=function(n){var e=n.link,t=n.search,r=n.getSearch,c=n.updateSearch,a=Object(i.useContext)(z);return Object(f.jsx)(J,{children:"/"===e?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"logo-container",children:Object(f.jsx)(R,{title:"Favorites"})}),Object(f.jsxs)("span",{className:"fav-count-info",children:["You have ",Object(f.jsx)("span",{className:"count",children:a.totalFavorites})," ","favorite ",1===a.totalFavorites?"recipe":"recipes"]}),Object(f.jsx)(j.b,{to:e,className:"link",children:Object(f.jsxs)(D,{children:[Object(f.jsx)(B.b,{})," Home"]})})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"logo-container",children:Object(f.jsx)(R,{title:"Recipes App"})}),Object(f.jsx)(T,{search:t,getSearch:r,updateSearch:c}),Object(f.jsxs)("div",{className:"btn-container",children:[Object(f.jsxs)(D,{role:"search",children:[Object(f.jsx)(B.c,{}),"Search"]}),Object(f.jsxs)(j.b,{to:e,className:"link",children:[Object(f.jsx)(D,{children:Object(f.jsx)("span",{className:"badged-btn",children:"Favorites"})}),a.totalFavorites>0&&Object(f.jsx)("div",{className:"badge",children:a.totalFavorites})]})]})]})})},E=p.a.div(y||(y=Object(h.a)(["\n  width: 100%;\n  padding: 0 2rem 1rem 2rem;\n  border-radius: 5px;\n  box-shadow: 0 6px 16px #8ba18e8b;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  overflow: hidden;\n  text-align: center;\n  background-color: #fff;\n\n  .recipe-header {\n    color: #8ba18e;\n    margin-bottom: 1rem;\n    font-size: 1.4rem;\n    max-height: 6rem;\n    max-width: 90%;\n  }\n\n  .image-container {\n    width: 100%;\n    min-height: 20rem;\n    margin-top: auto;\n  }\n\n  img {\n    display: block;\n    border-radius: 5px;\n    width: 100%;\n  }\n\n  .btns-container {\n    margin-top: 1rem;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n\n  .cardBtn {\n    margin: 0.5rem;\n  }\n\n  .link {\n    text-decoration: none;\n  }\n\n  .fav-badge {\n    position: relative;\n    width: 12rem;\n    height: 2rem;\n    background-color: #9cb49f;\n    margin-left: 90%;\n    transform: rotate(45deg);\n  }\n\n  .star {\n    color: #fff;\n    font-size: 1.5rem;\n    transform: rotate(-45deg);\n    position: relative;\n    left: 1.4rem;\n    top: 0.2rem;\n  }\n\n  @media screen and (min-width: 900px) {\n    padding: 0 2rem 2rem 2rem;\n\n    .recipe-header {\n      margin-bottom: 2rem;\n      font-size: 1.8rem;\n    }\n\n    .btns-container {\n      width: 100%;\n      margin-top: 2rem;\n      display: flex;\n      flex-direction: row;\n      flex-wrap: wrap;\n      justify-content: space-between;\n    }\n\n    .cardBtn {\n      margin: 1rem 0;\n    }\n  }\n"]))),M=function(n){var e=n.handleDescription,t=n.recipe,r=Object(i.useContext)(z),c=r.itemIsFavorite(t.url);return Object(f.jsxs)(E,{children:[c?Object(f.jsx)("div",{className:"fav-badge",children:Object(f.jsx)(B.d,{className:"star"})}):Object(f.jsx)("div",{style:{height:"2rem"}}),Object(f.jsx)("h1",{className:"recipe-header",children:t.label}),Object(f.jsx)("div",{className:"image-container",children:Object(f.jsx)("img",{src:t.image,alt:""})}),Object(f.jsxs)("div",{className:"btns-container",children:[Object(f.jsx)(j.b,{to:"/description",className:"link cardBtn",onClick:function(){return e(t)},children:Object(f.jsxs)(D,{children:[Object(f.jsx)(B.a,{}),"Recipe"]})}),Object(f.jsx)("span",{className:"cardBtn",onClick:function(){c?r.removeFavorite(t.url):r.addFavorite(t)},children:Object(f.jsx)(D,{children:c?"Remove":"To Favorites"})})]})]})},Y=p.a.div(k||(k=Object(h.a)(["\n  display: flex;\n\n  .lds-ellipsis {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px;\n  }\n  .lds-ellipsis div {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: #8ba18e;\n    animation-timing-function: cubic-bezier(0, 1, 1, 0);\n  }\n  .lds-ellipsis div:nth-child(1) {\n    left: 8px;\n    animation: lds-ellipsis1 0.6s infinite;\n  }\n  .lds-ellipsis div:nth-child(2) {\n    left: 8px;\n    animation: lds-ellipsis2 0.6s infinite;\n  }\n  .lds-ellipsis div:nth-child(3) {\n    left: 32px;\n    animation: lds-ellipsis2 0.6s infinite;\n  }\n  .lds-ellipsis div:nth-child(4) {\n    left: 56px;\n    animation: lds-ellipsis3 0.6s infinite;\n  }\n  @keyframes lds-ellipsis1 {\n    0% {\n      transform: scale(0);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n  @keyframes lds-ellipsis3 {\n    0% {\n      transform: scale(1);\n    }\n    100% {\n      transform: scale(0);\n    }\n  }\n  @keyframes lds-ellipsis2 {\n    0% {\n      transform: translate(0, 0);\n    }\n    100% {\n      transform: translate(24px, 0);\n    }\n  }\n"]))),_=function(){return Object(f.jsx)(Y,{children:Object(f.jsxs)("div",{className:"lds-ellipsis",children:[Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{})]})})},q=p.a.main(N||(N=Object(h.a)(["\n  width: 100vw;\n  min-height: 100vh;\n  padding: 4rem 2rem 6rem 2rem;\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  gap: 4rem;\n\n  .replacer {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .replacer-msg {\n    display: flex;\n    align-items: center;\n    font-size: 2rem;\n    color: #8ba18e;\n    text-align: center;\n  }\n\n  @media screen and (min-width: 900px) {\n    grid-template-columns: repeat(2, 1fr);\n    padding: 11rem 4rem 6rem 4rem;\n\n    .replacer-msg {\n      font-size: 2.5rem;\n    }\n  }\n\n  @media screen and (min-width: 1200px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  @media screen and (min-width: 1600px) {\n    grid-template-columns: repeat(4, 1fr);\n  }\n"]))),G=function(n){var e=n.recipes,t=n.handleDescription,i=n.message;return Object(f.jsx)(q,{children:e.length?e.map((function(n){return Object(f.jsx)(M,{recipe:n.recipe,handleDescription:t},n.recipe.url)})):Object(f.jsx)("div",{className:"replacer",children:Object(f.jsxs)("span",{className:"replacer-msg",children:[i,"Loading"===i&&Object(f.jsx)(_,{})]})})})},H=p.a.div(F||(F=Object(h.a)(["\n  align-self: center;\n  margin: 2rem 0 4rem 0;\n  width: 85%;\n  padding: 2rem;\n  border-radius: 5px;\n  box-shadow: 0 6px 16px #8ba18e8b;\n  display: grid;\n  gap: 2rem;\n  justify-items: center;\n  overflow: hidden;\n  background-color: #fff;\n\n  .desc-header {\n    color: #8ba18e;\n    text-align: center;\n    margin-bottom: 1rem;\n    font-size: 1.5rem;\n  }\n\n  .desc-list {\n    width: 100%;\n    padding: 2rem;\n    overflow: hidden;\n    .desc-item {\n      list-style-type: circle;\n    }\n  }\n\n  .side-info {\n    align-self: center;\n    justify-self: end;\n  }\n\n  .accent {\n    color: #8ba18e;\n    font-weight: 600;\n  }\n\n  .link {\n    text-decoration: none;\n  }\n  @media screen and (min-width: 900px) {\n    width: 60vw;\n    padding: 2rem 4rem;\n\n    .desc-header {\n      margin-bottom: 2rem;\n      font-size: 1.8rem;\n    }\n  }\n"]))),P=function(n){var e=n.description,t=Object(m.f)();return Object(f.jsx)(H,{children:e?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{className:"desc-header",children:e.label}),Object(f.jsx)("ul",{className:"desc-list",children:e.ingredientLines.map((function(n,e){return Object(f.jsx)("li",{className:"desc-item",children:n},e)}))}),Object(f.jsxs)("span",{className:"side-info",children:[Object(f.jsxs)("p",{children:["Total"," ",Object(f.jsx)("span",{className:"accent",children:e.calories.toFixed()})," ","Calories"]}),e.totalTime?Object(f.jsxs)("p",{children:["Cooking time:"," ",Object(f.jsx)("span",{className:"accent",children:e.totalTime})," min"]}):null]}),Object(f.jsx)(D,{children:Object(f.jsx)("span",{onClick:t.goBack,children:"Go Back"})})]}):t.push("/")})},K=function(n){var e=n.handleDescription,t=Object(i.useContext)(z);return Object(f.jsx)("div",{children:Object(f.jsx)(G,{recipes:t.favorites,handleDescription:e,message:"No Favorites Yet"})})},Q=p.a.footer(S||(S=Object(h.a)(["\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  height: 1.8rem;\n  background-color: #c1dfc4;\n  color: #fff;\n  font-size: 0.8rem;\n  display: grid;\n  place-content: center;\n  border-radius: 15px 0 0 0;\n  overflow: hidden;\n\n  p {\n    margin: 0 0.4rem;\n  }\n\n  @media screen and (min-width: 900px) {\n    width: 100vw;\n    border-radius: 0;\n    font-size: 1rem;\n  }\n"]))),U=function(){return Object(f.jsx)(Q,{children:Object(f.jsxs)("p",{children:["Copyright \xa9 ",(new Date).getFullYear()]})})},V=function(){var n=["chicken","fish","beef","lamb","pork"][Math.floor(6*Math.random())],e=Object(i.useState)([]),t=Object(d.a)(e,2),r=t[0],c=t[1],a=Object(i.useState)(""),s=Object(d.a)(a,2),h=s[0],j=s[1],p=Object(i.useState)(n),b=Object(d.a)(p,2),x=b[0],u=b[1],g=Object(i.useState)(""),O=Object(d.a)(g,2),v=O[0],w=O[1],y=Object(i.useState)("Loading"),k=Object(d.a)(y,2),N=k[0],F=k[1];Object(i.useEffect)((function(){(function(){var n=Object(l.a)(o.a.mark((function n(){var e,t;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://api.edamam.com/search?q=".concat(x,"&app_id=").concat("d7999673","&app_key=").concat("bff4d2942803751399e5562e530d0981"));case 3:return e=n.sent,n.next=6,e.json();case 6:t=n.sent,F(t.count?"Loading":"Nothing found"),c(t.hits),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}})()()}),[x]);var S=function(n){j(n.target.value)},z=function(n){n.preventDefault(),u(h),F("Loading"),c([]),j("")},C=function(n){w(n)};return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsxs)(m.c,{children:[Object(f.jsxs)(m.a,{path:"/",exact:!0,children:[Object(f.jsx)(A,{link:"/favorites",search:h,getSearch:z,updateSearch:S,children:Object(f.jsx)(R,{title:"Recipes App"})}),Object(f.jsx)(G,{recipes:r,handleDescription:C,message:N})]}),Object(f.jsx)(m.a,{path:"/description",children:Object(f.jsx)(P,{description:v})}),Object(f.jsxs)(m.a,{path:"/favorites",children:[Object(f.jsx)(A,{link:"/",search:h,getSearch:z,updateSearch:S,children:Object(f.jsx)(R,{title:"Favorite Recipes"})}),Object(f.jsx)(K,{handleDescription:C})]})]}),Object(f.jsx)(U,{})]})},W=function(){var n=Object(m.g)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[n]),null};a.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(u,{children:Object(f.jsxs)(j.a,{children:[Object(f.jsx)(W,{}),Object(f.jsx)(V,{})]})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.dd05acc4.chunk.js.map