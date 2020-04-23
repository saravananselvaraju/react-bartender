(this["webpackJsonpreact-bartender"]=this["webpackJsonpreact-bartender"]||[]).push([[0],{24:function(e,t,a){e.exports=a(37)},29:function(e,t,a){},30:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),s=a.n(r);a(29),a(30);var l=function(){return c.a.createElement("nav",null,c.a.createElement("div",null,c.a.createElement("img",{className:"App-Logo-Img",src:"/react-bartender/img/ico/bartender.svg"}),c.a.createElement("a",{className:"App-Logo",href:"/react-bartender/"},"Bartender")))},i=a(4),o=a(17),m=a(18),u=a(22),d=a(19),p=a(23),h="https://www.thecocktaildb.com/api/json/v1/1/",E=a(8),b=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){for(var e=[],t={Cocktail:"".concat("/img/ico","/cocktail.svg"),Shot:"".concat("/img/ico","/shot.svg"),Beer:"".concat("/img/ico","/beer.svg"),"Homemade Liqueur":"".concat("/img/ico","/homemade.svg")},a=0,n=Object.entries(t);a<n.length;a++){var r=n[a],s=Object(i.a)(r,2),l=s[0],o=s[1];e.push(c.a.createElement(E.b,{className:"App-List",to:"/show/"+l},c.a.createElement("img",{className:"List-Icon",alt:l,src:"/react-bartender"+o}),c.a.createElement("p",{className:"List-Name"},l)))}return c.a.createElement("div",{className:"App-Container"},e)}}]),t}(n.Component),v=a(6);var g=function(){return c.a.createElement("div",{className:"Footer"},c.a.createElement("p",null," Github ",c.a.createElement("a",{href:"https://github.com/saravanan-selvaraju/react-bartender"},"react-bartender")))},f=a(9),N=a.n(f),j=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),r=(a[0],a[1]),s=Object(n.useState)([]),l=Object(i.a)(s,2),o=l[0],m=l[1],u=e.match.params.category,d=Object(n.useState)(!0),p=Object(i.a)(d,2),b=p[0],v=p[1];return Object(n.useEffect)((function(){N.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.awrap(fetch("".concat(h,"filter.php?c=").concat(u)));case 2:e.sent.json().then((function(e){return m(e.drinks)})).catch((function(e){return r(e)})),v(!1);case 5:case"end":return e.stop()}}))}),[]),c.a.createElement("div",{className:"List-Container"},o.map((function(e){return c.a.createElement(E.b,{className:"List",key:e.idDrink,to:"/view/".concat(u,"/").concat(e.idDrink)},c.a.createElement("img",{className:"List-Thump",src:"".concat(e.strDrinkThumb,"/preview")}),c.a.createElement("p",{className:"List-Title"},e.strDrink))})),b&&c.a.createElement("div",{className:"Loader"}))};var O=function(e){var t=e.match.params.id,a=Object(n.useState)(!1),r=Object(i.a)(a,2),s=(r[0],r[1]),l=Object(n.useState)([]),o=Object(i.a)(l,2),m=o[0],u=o[1],d=Object(n.useState)(!0),p=Object(i.a)(d,2),E=p[0],b=p[1];Object(n.useEffect)((function(){N.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.awrap(fetch("".concat(h,"lookup.php?i=").concat(t)));case 2:e.sent.json().then((function(e){return u(e.drinks[0])})).catch((function(e){return s(e)})),b(!1);case 5:case"end":return e.stop()}}))}),[]);for(var v=[],g=0,f=Object.keys(m);g<f.length;g++){var j=f[g];j.includes("strIngredient")&&null!=m[j]&&v.push(c.a.createElement("tr",{key:j},c.a.createElement("td",null,m[j]),c.a.createElement("td",null,m[j.replace("strIngredient","strMeasure")])))}return c.a.createElement("div",{className:"Details"},c.a.createElement("div",{className:"Details-Left"},c.a.createElement("div",{className:"card"},c.a.createElement("img",{className:"Details-Img",src:m.strDrinkThumb}),E&&c.a.createElement("div",{className:"Loader"}),c.a.createElement("h3",{className:"Details-Title"},m.strDrink))),c.a.createElement("div",{className:"Details-Right"},c.a.createElement("h4",null,"Ingredients"),c.a.createElement("div",{className:"Details-Tag"},c.a.createElement("img",{src:"/react-bartender/img/ico/glass.svg",className:"Tag-Ico"}),c.a.createElement("p",{className:"Glass"},m.strGlass),c.a.createElement("img",{src:"/react-bartender/img/ico/clock.svg",className:"Tag-Ico"}),c.a.createElement("p",{className:"Date"},m.dateModified&&m.dateModified.split(" ")[0])),c.a.createElement("table",{className:"Details-Table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Name"),c.a.createElement("th",null,"Measure"))),c.a.createElement("tbody",null,v,E&&c.a.createElement("div",{className:"Loader"}))),c.a.createElement("h4",null,"Instructions"),c.a.createElement("p",null,m.strInstructions)))};var k=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(l,null),c.a.createElement(E.a,{basename:"/"},c.a.createElement(v.c,null,c.a.createElement(v.a,{exact:!0,path:"/",component:b}),c.a.createElement(v.a,{path:"/show/:category",component:j}),c.a.createElement(v.a,{path:"/view/:category/:id",component:O}))),c.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.f3387773.chunk.js.map