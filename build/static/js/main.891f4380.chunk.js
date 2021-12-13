(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{32:function(e,n,t){},45:function(e,n,t){"use strict";t.r(n);var r=t(0),i=t.n(r),c=t(20),a=t.n(c),o=(t(32),t(15)),s=t.n(o),l=t(21),d=t(8),m=t(3),j=t(7),b=t(4),h=t(27),p=t(1),f=Object(r.createContext)({favorites:[],totalFavorites:0,addFavorite:function(e){},removeFavorite:function(e){},itemIsFavorite:function(e){}}),u=function(e){var n=function(e,n){var t=Object(r.useState)((function(){try{var t=window.localStorage.getItem(e);return t?JSON.parse(t):n}catch(r){return console.log(r),n}})),i=Object(d.a)(t,2),c=i[0],a=i[1];return[c,function(n){try{var t=n instanceof Function?n(c):n;a(t),window.localStorage.setItem(e,JSON.stringify(t))}catch(r){console.log(r)}}]}("favoriteRecipes",[]),t=Object(d.a)(n,2),i=t[0],c=t[1],a={favorites:i,totalFavorites:i.length,addFavorite:function(e){c([].concat(Object(h.a)(i),[{recipe:e}]))},removeFavorite:function(e){var n=i.filter((function(n){return n.recipe.url!==e}));c(n)},itemIsFavorite:function(e){return i.some((function(n){return n.recipe.url===e}))}};return Object(p.jsx)(f.Provider,{value:a,children:e.children})};var x,g,O,v,w,y,k,F=f,N=b.a.button(x||(x=Object(m.a)(["\n  text-decoration: none;\n  display: grid;\n  place-content: center;\n\n  border: none;\n  border-radius: 5px;\n  font-size: 1.2rem;\n  width: 8rem;\n  height: 2rem;\n  background-color: #9cb49f;\n  color: #fff;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  :hover {\n    background-color: #8ba18e;\n    box-shadow: 0 6px 16px #8ba18e8b;\n  }\n"]))),S=function(e){return Object(p.jsx)(N,{children:e.children})},C=b.a.header(g||(g=Object(m.a)(["\n  position: fixed;\n  z-index: 2;\n  top: 0;\n  width: 100vw;\n  height: 13rem;\n  padding: 1rem 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  color: #fff;\n  background-color: #c1dfc4;\n\n  .link {\n    text-decoration: none;\n  }\n\n  .fav-count-info {\n    width: 90vw;\n    text-align: center;\n    font-size: 1.5rem;\n    color: #fff;\n  }\n\n  .count {\n    margin: 0 0.2rem;\n    color: #8ba18e;\n    font-weight: 600;\n  }\n\n  .badged-btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-left: 1.5rem;\n  }\n\n  .badge {\n    position: relative;\n    bottom: 0.9rem;\n    left: 0.5rem;\n    line-height: 1.5rem;\n    width: 1.5rem;\n    /* height: 1.5rem; */\n    background-color: #6c7d6e;\n    border-radius: 5px;\n  }\n\n  @media screen and (min-width: 900px) {\n    flex-direction: row;\n    padding: 2rem 3rem;\n    height: 6rem;\n\n    .fav-count-info {\n      width: 50vw;\n      text-align: end;\n    }\n  }\n"]))),z=function(e){var n=Object(r.useContext)(F);return Object(p.jsxs)(C,{children:[e.children,"/"===e.link&&Object(p.jsxs)("span",{className:"fav-count-info",children:["You have ",Object(p.jsx)("span",{className:"count",children:n.totalFavorites})," ","favorite ",1===n.totalFavorites?"recipe":"recipes"]}),Object(p.jsx)(j.b,{to:e.link,className:"link",children:Object(p.jsx)(S,{children:"/"===e.link?"Home":Object(p.jsxs)("span",{className:"badged-btn",children:["Favorites",Object(p.jsx)("div",{className:"badge",children:n.totalFavorites})," "]})})})]})},D=function(e){return Object(p.jsx)("h1",{children:e.title})},I=b.a.nav(O||(O=Object(m.a)(["\n  margin-top: 1rem;\n\n  form {\n    width: 90vw;\n    display: flex;\n    justify-content: space-between;\n  }\n\n  input {\n    height: 2rem;\n    border: none;\n    border-radius: 5px;\n    font-size: 1.2rem;\n    margin-right: 1rem;\n    flex: 1;\n    outline: none;\n    padding-left: 1rem;\n    color: #8ba18e;\n  }\n\n  @media screen and (min-width: 900px) {\n    margin-top: 0;\n\n    form {\n      width: 50vw;\n      justify-content: space-between;\n      margin: 0;\n    }\n  }\n"]))),B=function(e){var n=e.search,t=e.getSearch,r=e.updateSearch;return Object(p.jsx)(I,{children:Object(p.jsxs)("form",{className:"search-form",onSubmit:t,children:[Object(p.jsx)("input",{type:"text",className:"search-bar",value:n,onChange:r}),Object(p.jsx)(S,{type:"submit",children:"Search"})]})})},R=t(26),J=b.a.div(v||(v=Object(m.a)(["\n  width: 100%;\n  padding: 0 2rem 2rem 2rem;\n  border-radius: 5px;\n  box-shadow: 0 6px 16px #8ba18e8b;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  overflow: hidden;\n  text-align: center;\n\n  h1 {\n    color: #8ba18e;\n    margin-bottom: 2rem;\n    font-size: 1.8rem;\n    max-height: 6rem;\n  }\n\n  img {\n    border-radius: 5px;\n    width: 100%;\n  }\n\n  .btns-container {\n    margin-top: 2rem;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n\n  .cardBtn {\n    margin: 1rem;\n  }\n\n  .link {\n    text-decoration: none;\n  }\n\n  .fav-badge {\n    position: relative;\n    width: 12rem;\n    height: 2rem;\n    background-color: #9cb49f;\n    margin-left: 90%;\n    transform: rotate(45deg);\n  }\n\n  .star {\n    color: #fff;\n    font-size: 1.5rem;\n    transform: rotate(-45deg);\n    position: relative;\n    left: 1.4rem;\n    top: 0.2rem;\n  }\n"]))),Y=function(e){var n=e.handleDescription,t=e.recipe,i=Object(r.useContext)(F),c=i.itemIsFavorite(t.url);return Object(p.jsxs)(J,{children:[c?Object(p.jsx)("div",{className:"fav-badge",children:Object(p.jsx)(R.a,{className:"star"})}):Object(p.jsx)("div",{style:{height:"2rem"}}),Object(p.jsx)("h1",{children:t.label}),Object(p.jsx)("img",{src:t.image,alt:""}),Object(p.jsxs)("div",{className:"btns-container",children:[Object(p.jsx)(j.b,{to:"/description",className:"link cardBtn",onClick:function(){return n(t)},children:Object(p.jsx)(S,{children:"Recipe"})}),Object(p.jsx)("span",{className:"cardBtn",onClick:function(){c?i.removeFavorite(t.url):i.addFavorite(t)},children:Object(p.jsx)(S,{children:c?"Remove":"Favorites"})})]})]})},A=b.a.main(w||(w=Object(m.a)(["\n  margin: 16rem 2rem 6rem 2rem;\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  gap: 4rem;\n\n  .replacer {\n    position: fixed;\n    left: 0;\n    top: 40vh;\n    width: 100vw;\n    font-size: 2.5rem;\n    color: #8ba18e;\n    text-align: center;\n  }\n\n  @media screen and (min-width: 900px) {\n    grid-template-columns: repeat(2, 1fr);\n    margin: 11rem 4rem 6rem 4rem;\n  }\n\n  @media screen and (min-width: 1200px) {\n    grid-template-columns: repeat(3, 1fr);\n    margin: 11rem 4rem 6rem 4rem;\n  }\n\n  @media screen and (min-width: 1600px) {\n    grid-template-columns: repeat(4, 1fr);\n  }\n"]))),E=function(e){var n=e.recipes,t=e.handleDescription,r=e.message;return Object(p.jsx)(A,{children:n.length?n.map((function(e){return Object(p.jsx)(Y,{recipe:e.recipe,handleDescription:t},e.recipe.url)})):Object(p.jsx)("p",{className:"replacer",children:r})})},_=t(2),q=b.a.div(y||(y=Object(m.a)(["\n  margin: 2rem auto;\n  width: 85%;\n  padding: 2rem 4rem;\n  border-radius: 5px;\n  box-shadow: 0 6px 16px #8ba18e8b;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n\n  h1 {\n    color: #8ba18e;\n    margin-bottom: 2rem;\n    align-self: center;\n  }\n\n  ul {\n    display: flex;\n    flex-flow: column wrap;\n    column-gap: 3rem;\n    height: 65%;\n    line-height: 2rem;\n    margin-bottom: 1rem;\n  }\n\n  li {\n    list-style: circle;\n    max-width: 15rem;\n  }\n\n  p {\n    align-self: flex-end;\n  }\n\n  .link {\n    margin-top: 1rem;\n    text-decoration: none;\n    align-self: center;\n  }\n\n  @media screen and (min-width: 900px) {\n    width: 60vw;\n    height: 85vh;\n    position: fixed;\n    left: 20vw;\n  }\n"]))),G=function(e){var n=e.description,t=Object(_.f)();return Object(p.jsx)(q,{children:n?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:n.label}),Object(p.jsx)("ul",{children:n.ingredientLines.map((function(e,n){return Object(p.jsx)("li",{children:e},n)}))}),Object(p.jsxs)("p",{children:[n.calories.toFixed()," Calories"]}),Object(p.jsxs)("p",{children:["Cooking time: ",n.totalTime]}),Object(p.jsx)(j.b,{className:"link",to:"/",children:Object(p.jsx)(S,{children:"Go Back"})})]}):t.push("/")})},H=function(e){e.handleDescription;var n=Object(r.useContext)(F);return Object(p.jsx)("div",{children:Object(p.jsx)(E,{recipes:n.favorites,message:"No Favorites Yet"})})},L=b.a.footer(k||(k=Object(m.a)(["\n  position: fixed;\n  bottom: 0;\n  width: 100vw;\n  height: 2.2rem;\n  background-color: #c1dfc4;\n  color: #fff;\n  font-size: 1.5rem;\n  display: grid;\n  place-content: center;\n"]))),M=function(){return Object(p.jsx)(L,{children:Object(p.jsxs)("p",{children:["Copyright \xa9 ",(new Date).getFullYear()]})})},P=function(){var e=Object(r.useState)([]),n=Object(d.a)(e,2),t=n[0],i=n[1],c=Object(r.useState)(""),a=Object(d.a)(c,2),o=a[0],m=a[1],j=Object(r.useState)("chicken"),b=Object(d.a)(j,2),h=b[0],f=b[1];Object(r.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){var n,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(h,"&app_id=").concat("d7999673","&app_key=").concat("bff4d2942803751399e5562e530d0981"));case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,i(t.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[h]);var u=Object(r.useState)(""),x=Object(d.a)(u,2),g=x[0],O=x[1];return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)(_.c,{children:[Object(p.jsxs)(_.a,{path:"/",exact:!0,children:[Object(p.jsxs)(z,{link:"/favorites",children:[Object(p.jsx)(D,{title:"Recipe App"}),Object(p.jsx)(B,{search:o,getSearch:function(e){e.preventDefault(),f(o),m("")},updateSearch:function(e){m(e.target.value)}})]}),Object(p.jsx)(E,{recipes:t,handleDescription:function(e){O(e)},message:"Nothing Found"})]}),Object(p.jsx)(_.a,{path:"/description",children:Object(p.jsx)(G,{description:g})}),Object(p.jsxs)(_.a,{path:"/favorites",children:[Object(p.jsx)(z,{link:"/",children:Object(p.jsx)(D,{title:"Favorite Recipes"})}),Object(p.jsx)(H,{recipes:t})]})]}),Object(p.jsx)(M,{})]})};a.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(u,{children:Object(p.jsx)(j.a,{children:Object(p.jsx)(P,{})})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.891f4380.chunk.js.map