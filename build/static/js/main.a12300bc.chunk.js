(this["webpackJsonpinventory-frontend"]=this["webpackJsonpinventory-frontend"]||[]).push([[0],{40:function(e,n,t){"use strict";t.r(n);var i,c,a,r,o,s,d,j,l,b,u,m,O,f,h,p,x,g,v,y,k,z,S,C,w,T,P,N,E,_,F,J,I,D,B,R,H,U,L,W,G=t(2),Y=t(1),A=t.n(Y),K=t(25),M=t.n(K),q=t(4),Q=t(5),V=t(6),X=t(8),Z=t(13),$=Object(Y.createContext)(null),ee=t(3),ne=ee.b.div(i||(i=Object(G.a)(["\n    font-size: 5rem;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: #c8d8e4;\n"]))),te=Object(ee.b)(Q.b)(c||(c=Object(G.a)(["\n    margin: 1rem;\n    padding: 1rem;\n    text-decoration: none;\n    color: white;\n    background-color: #52ab98;\n"]))),ie=ee.b.input(a||(a=Object(G.a)(["\n    width: 50%;\n    outline: none;\n    border: none;\n    border-bottom: solid black;\n"]))),ce=ee.b.div(r||(r=Object(G.a)(["\n    width: 100%;\n"]))),ae=ee.b.div(o||(o=Object(G.a)(["\n    display: flex;\n    justify-content: space-between;\n    margin: 1rem;\n    background: #2b6777;\n    padding: 1rem;\n    align-items: center;\n    @media (min-width: 726px) {\n        margin-left: 25%;\n        margin-right: 25%;\n    }\n    :hover {\n        box-shadow: 0 5px 10px black, 0 15px 40px gray;\n    }\n"]))),re=Object(ee.b)(Q.b)(s||(s=Object(G.a)(["\n    font-size: 1.8rem;\n    text-decoration: none;\n    padding: 2rem;\n    color: #ffffff;\n    display: flex;\n    word-wrap: break-word;\n    flex-wrap: wrap;\n"]))),oe=ee.b.div(d||(d=Object(G.a)(["\n    display: flex;\n    justify-content: flex-end;\n    flex-wrap: wrap;\n"]))),se=Object(ee.b)(Q.b)(j||(j=Object(G.a)(["\n    font-size: 3rem;\n    padding: 1rem;\n    color: black;\n    :hover {\n        color: gray;\n    }\n"]))),de=t(0),je=function(){var e=Object(Y.useContext)($),n=e.userlist,t=e.setUserlist,i=Object(Y.useState)(),c=Object(q.a)(i,2),a=c[0],r=c[1];function o(e){var i=e.target.name;console.log(e.target),fetch("/api/delete_user",{method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:i})}),n.forEach((function(e,c){e.id==i&&(n.splice(c,1),t(Object(Z.a)(n)))}))}return Object(Y.useEffect)((function(){return r(n)}),[n]),Object(de.jsxs)(ne,{children:[Object(de.jsx)(te,{to:"korisnik_obrazac",children:"Dodaj \u010dlana +"}),Object(de.jsx)(ie,{onChange:function(e){var t=n.filter((function(n){var t="".concat(n.ime," ").concat(n.prezime);return t.toLowerCase().includes(e.target.value)||t.toUpperCase().includes(e.target.value)}));r(t)},type:"search",placeholder:"Pretra\u017ei..."}),Object(de.jsx)(ce,{children:a&&a.length?a.map((function(e){return Object(de.jsxs)(ae,{children:[Object(de.jsxs)(re,{to:{pathname:"/korisnik/".concat(e.id)},children:[e.ime," ",e.prezime,Object(de.jsx)("br",{}),e.tim]}),Object(de.jsxs)(oe,{children:[Object(de.jsx)(se,{to:{pathname:"/korisnik_obrazac/".concat(e.id)},className:"fas fa-edit"}),Object(de.jsx)(se,{to:"",onClick:o,name:e.id,className:"fas fa-trash-alt"})]})]},e.id)})):Object(de.jsx)(ae,{children:"Nema \u010dlanova za prikazati..."})})]})},le=function(){var e=Object(Y.useState)([]),n=Object(q.a)(e,2),t=n[0],i=n[1],c=Object(Y.useState)([]),a=Object(q.a)(c,2),r=a[0],o=a[1];function s(e){var n=e.target.name;fetch("/api/delete_event",{method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:n})}),t.forEach((function(e,c){e.id==n&&(t.splice(c,1),i(Object(Z.a)(t)),o(Object(Z.a)(t)))}))}return Object(Y.useEffect)((function(){fetch("/api/get_events").then((function(e){return e.json()})).then((function(e){i(e),o(e)})).catch((function(e){return console.error(e)}))}),[]),Object(de.jsxs)(ne,{children:[Object(de.jsx)(te,{to:"event_obrazac",children:"Dodaj event +"}),Object(de.jsx)(ie,{onChange:function(e){var n=t.filter((function(n){var t=n.ime;return t.toLowerCase().includes(e.target.value)||t.toUpperCase().includes(e.target.value)}));o(n)},type:"search",placeholder:"Pretra\u017ei..."}),Object(de.jsx)(ce,{children:r&&r.length?r.map((function(e){return Object(de.jsxs)(ae,{children:[Object(de.jsx)(re,{to:{pathname:"event/".concat(e.id)},children:e.ime}),Object(de.jsxs)(oe,{children:[Object(de.jsx)(se,{to:{pathname:"/event_obrazac/".concat(e.id)},className:"fas fa-edit"}),Object(de.jsx)(se,{to:"/eventi",onClick:s,name:e.id,className:"fas fa-trash-alt"})]})]},e.id)})):Object(de.jsx)(ae,{children:"Nema eventa za prikazati..."})})]})},be=ee.b.div(l||(l=Object(G.a)(["\n    font-size: 5rem;\n    flex: 1;\n    display: inline-flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    background: #c8d8e4;\n"]))),ue=Object(ee.b)(Q.b)(b||(b=Object(G.a)(["\n    flex-basis: 50%;\n    text-align: center;\n    padding: 2rem;\n    text-decoration: none;\n    color: black;\n"]))),me=function(){return Object(de.jsx)(be,{children:["HR","Party","Partnership","SI","HWB","ICE","Buddy","PR","Travel","Grant"].map((function(e){return Object(de.jsx)(ue,{to:{pathname:"/tim/".concat(e)},children:e},e)}))})},Oe=ee.b.div(u||(u=Object(G.a)(["\n    font-size: 5rem;\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    background: #c8d8e4;\n"]))),fe=function(){var e=Object(V.f)().id,n=Object(Y.useContext)($).userlist,t=Object(Y.useState)([]),i=Object(q.a)(t,2),c=i[0],a=i[1];return Object(Y.useEffect)((function(){a(n.filter((function(n){return n.tim==e})))}),[n]),Object(de.jsxs)(Oe,{children:[e,c&&c.length?c.map((function(e){return Object(de.jsxs)(Q.b,{to:{pathname:"/korisnik/".concat(e.id)},children:[e.ime," ",e.razina]},e.id)})):Object(de.jsx)("div",{children:"Nema \u010dlanova za prikazati!"})]})},he=t(12),pe=ee.b.form(m||(m=Object(G.a)(["\n    display: flex;\n    flex: 1;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    font-size: 4rem;\n    background: #c8d8e4;\n"]))),xe=ee.b.div(O||(O=Object(G.a)(["\n    display: flex;\n    flex-direction: column;\n    border: solid black 0.1rem;\n    padding: 3rem;\n    font-size: 4rem;\n"]))),ge=ee.b.div(f||(f=Object(G.a)(["\n    display: flex;\n    align-items: center;\n    font-size: 3rem;\n"]))),ve=ee.b.input(h||(h=Object(G.a)(["\n    margin-left: 1rem;\n"]))),ye=function(){var e=Object(V.f)().id,n=Object(Y.useState)({ime:"",prezime:"",datum:"",spol:"",razina:"",email:"",tel:"",tim:""}),t=Object(q.a)(n,2),i=t[0],c=t[1],a=i.ime,r=i.prezime,o=i.datum,s=i.spol,d=i.razina,j=i.email,l=i.tel,b=i.tim;function u(e){c((function(n){return Object(X.a)(Object(X.a)({},n),{},Object(he.a)({},e.target.name,e.target.value))}))}return Object(Y.useEffect)((function(){e&&fetch("/api/get_userform",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})}).then((function(e){return e.json()})).then((function(e){return c(e)})).catch((function(e){return console.error(e)}))}),[]),Object(de.jsxs)(pe,{onSubmit:function(n){n.preventDefault(),e?fetch("/api/update_user",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).catch((function(e){return console.error(e)})):fetch("/api/create_user",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).catch((function(e){return console.error(e)})),window.location.href="/"},children:[Object(de.jsx)("h1",{children:"Obrazac za \u010dlana"}),Object(de.jsxs)("div",{children:[Object(de.jsx)("label",{htmlFor:"ime",children:"Ime:"}),Object(de.jsx)("input",{onChange:u,type:"text",id:"ime",name:"ime",value:a}),Object(de.jsx)("label",{htmlFor:"prezime",children:"Prezime:"}),Object(de.jsx)("input",{onChange:u,type:"text",id:"prezime",name:"prezime",value:r})]}),Object(de.jsxs)("div",{children:[Object(de.jsx)("label",{htmlFor:"tel",children:"Broj mobitela:"}),Object(de.jsx)("input",{onChange:u,type:"tel",id:"tel",name:"tel",value:l}),Object(de.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(de.jsx)("input",{onChange:u,type:"email",id:"email",name:"email",value:j})]}),Object(de.jsxs)("div",{children:[Object(de.jsx)("label",{htmlFor:"datum",children:"Datum ro\u0111enja:"}),Object(de.jsx)("input",{onChange:u,type:"date",id:"datum",name:"datum",value:o})]}),Object(de.jsxs)(xe,{onChange:u,children:[Object(de.jsx)("p",{children:"Odaberi spol:"}),["Mu\u0161karac","\u017dena","Drugo"].map((function(e){return Object(de.jsxs)(ge,{children:[Object(de.jsx)("label",{htmlFor:e,children:e}),Object(de.jsx)(ve,{checked:s==e,type:"radio",name:"spol",id:e,value:e})]})}))]}),Object(de.jsxs)("div",{children:[Object(de.jsx)("label",{htmlFor:"tim",children:"Odaberi tim::"}),Object(de.jsxs)("select",{value:b||"default",onChange:u,name:"tim",id:"tim",children:[Object(de.jsx)("option",{value:"default",disabled:!0,children:" -- odaberi opciju -- "}),["HR","Party","Partnership","SI ","HWB","ICE","Buddy","PR","Travel","Grant"].map((function(e){return Object(de.jsx)("option",{value:e,children:e})}))]})]}),Object(de.jsxs)(xe,{onChange:u,children:[Object(de.jsx)("p",{children:"Razina \u010clanstva:"}),["Predsjednik","Potpredsjednik","Tajnik","Koordinator","Aktivni \u010clan","Pauzirani \u010clan"].map((function(e){return Object(de.jsxs)(ge,{children:[Object(de.jsx)("label",{htmlFor:e,children:e}),Object(de.jsx)(ve,{checked:d==e,type:"radio",name:"razina",id:e,value:e})]})}))]}),Object(de.jsx)("input",{value:"Spremi",type:"Submit"})]})},ke=ee.b.form(p||(p=Object(G.a)(["\n    display: flex;\n    flex: 1;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    font-size: 4rem;\n    background: #c8d8e4;\n"]))),ze=ee.b.div(x||(x=Object(G.a)(["\n    ","\n"])),(function(e){return e.active&&"background-color: blue"})),Se=function(){var e=Object(V.f)().id,n=Object(Y.useContext)($).userlist,t=Object(Y.useState)([]),i=Object(q.a)(t,2),c=i[0],a=i[1],r=Object(Y.useState)({ime:"",datum:"",cijena:"",tim:""}),o=Object(q.a)(r,2),s=o[0],d=o[1],j=s.ime,l=s.datum,b=s.cijena,u=s.tim,m=Object(Y.useState)([]),O=Object(q.a)(m,2),f=O[0],h=O[1];function p(e){d((function(n){return Object(X.a)(Object(X.a)({},n),{},Object(he.a)({},e.target.name,e.target.value))}))}function x(e){var n=Number(e.target.getAttribute("name"));f.includes(n)?h(f.filter((function(e){return e!==n}))):h((function(e){return[].concat(Object(Z.a)(e),[n])}))}return Object(Y.useEffect)((function(){a(n),e&&fetch("/api/get_eventform",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})}).then((function(e){return e.json()})).then((function(e){d(e),e.json_agg[0]&&h(e.json_agg)})).catch((function(e){return console.error(e)}))}),[n]),Object(de.jsxs)(ke,{onSubmit:function(n){n.preventDefault();var t=[s,f];e?fetch("/api/update_event",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).catch((function(e){return console.error(e)})):fetch("/api/create_event",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).catch((function(e){return console.error(e)})),window.location.href="/eventi"},children:[Object(de.jsxs)("div",{children:[Object(de.jsx)("label",{htmlFor:"ime",children:"Ime:"}),Object(de.jsx)("input",{onChange:p,type:"text",id:"ime",name:"ime",value:j}),Object(de.jsx)("label",{htmlFor:"cijena",children:"Cijena:"}),Object(de.jsx)("input",{onChange:p,type:"number",id:"cijena",name:"cijena",value:b})]}),Object(de.jsxs)("div",{children:[Object(de.jsx)("label",{htmlFor:"datum",children:"Datum ro\u0111enja:"}),Object(de.jsx)("input",{onChange:p,type:"date",id:"datum",name:"datum",value:l})]}),Object(de.jsxs)("div",{children:[Object(de.jsx)("label",{htmlFor:"tim",children:"Odaberi tim::"}),Object(de.jsxs)("select",{value:u||"default",onChange:p,name:"tim",id:"tim",children:[Object(de.jsx)("option",{value:"default",disabled:!0,children:" -- odaberi opciju -- "}),["HR","Party","Partnership","SI","HWB","ICE","Buddy","PR","Travel","Grant"].map((function(e){return Object(de.jsx)("option",{value:e,children:e})}))]})]}),Object(de.jsx)("input",{onChange:function(e){var t=n.filter((function(n){var t="".concat(n.ime," ").concat(n.prezime);return t.toLowerCase().includes(e.target.value)||t.toUpperCase().includes(e.target.value)}));a(t)},type:"search",placeholder:"Pretra\u017ei..."}),Object(de.jsx)("div",{children:c&&c.length?c.map((function(e){return Object(de.jsxs)(ze,{active:f.includes(e.id),onClick:x,name:e.id,children:[e.ime," ",e.prezime," ",e.tim," ",e.tel]},e.id)})):Object(de.jsx)("div",{children:"Nema \u010dlanova za prikazati..."})}),Object(de.jsx)("input",{value:"Spremi",type:"Submit"})]})},Ce=ee.b.div(g||(g=Object(G.a)(["\n    font-size: 5rem;\n    flex: 1;\n    background: #c8d8e4;\n"]))),we=Object(ee.b)(Q.b)(v||(v=Object(G.a)(["\n    padding: 2rem;\n"]))),Te=function(){var e=Object(V.f)().id,n=Object(Y.useState)(),t=Object(q.a)(n,2),i=t[0],c=t[1],a=Object(Y.useState)(),r=Object(q.a)(a,2),o=r[0],s=r[1];return Object(Y.useEffect)((function(){fetch("/api/get_userdetails",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})}).then((function(e){return e.json()})).then((function(e){c(e),e.json_agg[0]&&s(e.json_agg)})).catch((function(e){return console.error(e)}))}),[]),Object(de.jsxs)(Ce,{children:[i&&Object(de.jsxs)("div",{children:[i.ime," ",i.prezime," ",i.tel," ",i.razina]}),o&&o.length?o.map((function(e){return Object(de.jsx)(we,{to:{pathname:"/event/".concat(e.id)},children:e.ime},e.id)})):Object(de.jsx)("div",{children:"Nema evenata"})]})},Pe=ee.b.div(y||(y=Object(G.a)(["\n    font-size: 4rem;\n    flex: 1;\n    background: #c8d8e4;\n"]))),Ne=Object(ee.b)(Q.b)(k||(k=Object(G.a)(["\n    padding: 1rem;\n"]))),Ee=function(){var e=Object(V.f)().id,n=Object(Y.useState)(),t=Object(q.a)(n,2),i=t[0],c=t[1],a=Object(Y.useState)(),r=Object(q.a)(a,2),o=r[0],s=r[1];return Object(Y.useEffect)((function(){fetch("/api/get_eventdetails",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})}).then((function(e){return e.json()})).then((function(e){c(e),e.json_agg[0]&&s(e.json_agg)})).catch((function(e){return console.error(e)}))}),[]),Object(de.jsxs)(Pe,{children:[i&&Object(de.jsx)("div",{children:i.ime}),o&&o.length?o.map((function(e){return Object(de.jsxs)(Ne,{to:{pathname:"/korisnik/".concat(e.id)},children:[e.ime," ",e.prezime]},e.id)})):Object(de.jsx)("div",{children:"Nema \u010dlanova!"})]})},_e=ee.b.div(z||(z=Object(G.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: #c8d8e4;\n"]))),Fe=ee.b.h1(S||(S=Object(G.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 4rem;\n  color: black;\n  padding: 2rem;\n"]))),Je=ee.b.h2(C||(C=Object(G.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 3rem;\n  color: black;\n  padding: 2rem;\n"]))),Ie=function(){return Object(de.jsxs)(_e,{children:[Object(de.jsx)(Fe,{children:"404 - Nije prona\u0111eno!"}),Object(de.jsx)(Je,{children:Object(de.jsx)(Q.b,{to:"/",children:"Idi na po\u010detnu!"})})]})},De=ee.b.nav(w||(w=Object(G.a)(["\n    display: flex;\n    justify-content: flex-end;\n    background: #ffffff;\n"]))),Be=Object(ee.b)(Q.b)(T||(T=Object(G.a)(["\n    color: black;\n    margin: 2rem;\n    padding-left: 3rem;\n    padding-right: 3rem;\n    font-size: 3rem;\n    text-decoration: none;\n    border-radius: 4rem;\n    background: rgb(166, 173, 179);\n\n    :hover {\n        background: rgb(111, 116, 120);\n    }\n\n    @media (max-width: 726px) {\n        display: none;\n    }\n"]))),Re=ee.b.div(P||(P=Object(G.a)(["\n    font-size: 3rem;\n    padding: 1rem;\n    z-index: 1;\n\n    :focus {\n      outline: none;\n    }\n\n    .div1, .div2, .div3 {\n        margin: 1rem;\n        width: 3.5rem;\n        height: 0.5rem;\n        background: black;\n        transition: 0.5s;\n    }\n\n    .div1 {\n        ",";\n    }\n    .div2 {\n        ",";\n    }\n    .div3 {\n        ",";\n    }\n\n    @media (min-width: 727px) {\n        display: none;\n    }\n"])),(function(e){return e.open&&"-webkit-transform: rotate(-45deg) translate(-9px, 9px);\n                                 transform: rotate(-45deg) translate(-9px, 9px);"}),(function(e){return e.open&&"opacity: 0"}),(function(e){return e.open&&"-webkit-transform: rotate(45deg) translate(-9px, -9px);\n                                 transform: rotate(45deg) translate(-9px, -9px);"})),He=ee.b.nav(N||(N=Object(G.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    background: #2b6777;\n    height: 100vh;\n    padding: 2.5rem;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    transition: transform 0.3s ease-in-out;\n    transform: ",";\n\n    @media (min-width: 727px) {\n        transform: translateY(-100%);\n    }\n\n    a {\n        text-decoration: none;\n        font-size: 3.5rem;\n        text-align: center;\n        padding: 3rem;\n        color: #ffffff;\n    }\n  \n"])),(function(e){return e.open?"translateY(0)":"translateY(-100%)"})),Ue=function(){var e,n=Object(Y.useState)(!1),t=Object(q.a)(n,2),i=t[0],c=t[1];function a(){fetch("/auth/logout"),localStorage.clear(),window.location.href="/"}function r(){c(!i)}return Object(de.jsxs)(De,{children:[Object(de.jsx)(Be,{to:"/",children:"\u010clanovi"}),Object(de.jsx)(Be,{to:"/timovi",children:"Timovi"}),Object(de.jsx)(Be,{to:"/eventi",children:"Eventi"}),Object(de.jsx)(Be,{to:"",onClick:a,children:"Odjava"}),Object(de.jsxs)(Re,{open:i,onClick:r,children:[Object(de.jsx)("div",{className:"div1"}),Object(de.jsx)("div",{className:"div2"}),Object(de.jsx)("div",{className:"div3"})]}),Object(de.jsxs)(He,{open:i,children:[Object(de.jsx)(Q.b,{onClick:r,to:"/",children:"\u010clanovi"}),Object(de.jsx)(Q.b,{onClick:r,to:"/timovi",children:"Timovi"}),Object(de.jsx)(Q.b,{onClick:r,to:"/eventi",children:"Eventi"}),Object(de.jsx)(Q.b,(e={onClick:r,to:""},Object(he.a)(e,"onClick",a),Object(he.a)(e,"children","Odjava"),e))]})]})},Le=ee.b.div(E||(E=Object(G.a)(["\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n"]))),We=function(){var e=Object(Y.useState)([]),n=Object(q.a)(e,2),t=n[0],i=n[1];return Object(Y.useEffect)((function(){fetch("/api/get_users").then((function(e){return e.json()})).then((function(e){return i(e)})).catch((function(e){return console.error(e)}))}),[]),Object(de.jsxs)(Le,{children:[Object(de.jsx)(Ue,{}),Object(de.jsx)($.Provider,{value:{userlist:t,setUserlist:i},children:Object(de.jsxs)(V.c,{children:[Object(de.jsx)(V.a,{exact:!0,path:"/",children:Object(de.jsx)(je,{})}),Object(de.jsx)(V.a,{path:"/eventi",children:Object(de.jsx)(le,{})}),Object(de.jsx)(V.a,{path:"/timovi",children:Object(de.jsx)(me,{})}),Object(de.jsx)(V.a,{path:"/tim/:id",render:function(e){return Object(de.jsx)(fe,Object(X.a)({},e))}}),Object(de.jsx)(V.a,{path:"/korisnik_obrazac/:id?",render:function(e){return Object(de.jsx)(ye,Object(X.a)({},e))}}),Object(de.jsx)(V.a,{path:"/event_obrazac/:id?",render:function(e){return Object(de.jsx)(Se,Object(X.a)({},e))}}),Object(de.jsx)(V.a,{path:"/korisnik/:id",render:function(e){return Object(de.jsx)(Te,Object(X.a)({},e))}}),Object(de.jsx)(V.a,{path:"/event/:id",render:function(e){return Object(de.jsx)(Ee,Object(X.a)({},e))}}),Object(de.jsx)(V.a,{children:Object(de.jsx)(Ie,{})})]})})]})},Ge=t.p+"static/media/image3.95e92482.png",Ye=ee.b.div(_||(_=Object(G.a)(["\n  \tdisplay: flex;\n    min-height: 100vh;    \n    background: linear-gradient(to right top, rgb(255, 255, 255), rgb(86, 232, 132));\n    justify-content: space-around;\n    align-items: center;\n    @media (max-width: 726px) {\n      flex-direction: column;\n    }\n\tposition: relative;\n"]))),Ae=ee.b.img(F||(F=Object(G.a)(["\n  \tobject-fit: contain;\n    height: 15rem;\n    width: 30rem;\n\tz-index: 1;\n"]))),Ke=ee.b.form(J||(J=Object(G.a)(["\n    display: flex;\n    padding: 1em;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\tz-index: 1;\n"]))),Me=ee.b.label(I||(I=Object(G.a)(["\n    font-size: 3.5rem;\n    padding: 0.5rem;\n"]))),qe=ee.b.input(D||(D=Object(G.a)(["\n    font-size: 1.7rem;\n    padding: 0.5rem;\n    border: none;\n    border-bottom: 0.3rem solid rgb(245, 101, 29);\n    outline: none;\n    :focus {\n      border-bottom: 0.2rem solid black\n    }\n"]))),Qe=ee.b.input(B||(B=Object(G.a)(["\n    font-size: 2.3rem;\n    border-radius: 1rem;\n    background: whitesmoke;\n    margin: 1rem;\n    padding: 0.5rem;\n"]))),Ve=ee.b.p(R||(R=Object(G.a)(["\n    font-size: 2.5rem;\n    color: red;\n"]))),Xe=ee.b.div(H||(H=Object(G.a)(["\n\tborder-radius: 50%;\n\tbackground: linear-gradient(to right top, rgb(255, 255, 255), rgba(86, 232, 132, 0.5));\n\theight: 15rem;\n\twidth: 15rem;\n\tposition: absolute;\n"]))),Ze=Object(ee.b)(Xe)(U||(U=Object(G.a)(["\n\ttop: 25%;\n\tright: 25%;\n"]))),$e=Object(ee.b)(Xe)(L||(L=Object(G.a)(["\n\tbottom: 25%;\n\tleft: 25%;\n"]))),en=function(){var e=Object(Y.useState)({username:"",password:""}),n=Object(q.a)(e,2),t=n[0],i=n[1],c=Object(Y.useState)(),a=Object(q.a)(c,2),r=a[0],o=a[1];function s(e){var n=e.target,t=n.name,c=n.value;i((function(e){return Object(X.a)(Object(X.a)({},e),{},Object(he.a)({},t,c))}))}return Object(de.jsxs)(Ye,{children:[Object(de.jsx)(Ze,{}),Object(de.jsx)($e,{}),Object(de.jsx)(Ae,{src:Ge}),Object(de.jsxs)(Ke,{onSubmit:function(e){e.preventDefault(),fetch("/auth/login",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e===t.username?(localStorage.setItem("user",e),window.location.href="/"):(i({username:"",password:""}),o(e.message))})).catch((function(e){return console.log(e)}))},children:[Object(de.jsx)(Me,{htmlFor:"username",children:"Korisni\u010dko ime:"}),Object(de.jsx)(qe,{id:"username",type:"text",name:"username",onChange:s,value:t.username}),Object(de.jsx)(Me,{htmlFor:"password",children:"\u0160ifra:"}),Object(de.jsx)(qe,{id:"password",type:"password",name:"password",onChange:s,value:t.password}),Object(de.jsx)(Qe,{value:"Prijavi se",type:"submit"}),Object(de.jsx)(Ve,{children:r?"".concat(r,"*"):""})]})]})},nn=function(){return Object(de.jsx)(de.Fragment,{children:Object(de.jsxs)(V.c,{children:[Object(de.jsx)(V.a,{exact:!0,path:"/",children:Object(de.jsx)(en,{})}),Object(de.jsx)(V.a,{children:Object(de.jsx)(Ie,{})})]})})},tn=function(){var e=Object(Y.useState)(!1),n=Object(q.a)(e,2),t=n[0],i=n[1];return Object(Y.useEffect)((function(){var e=localStorage.getItem("user");if(e)try{fetch("/auth/islog",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({loggedInUser:e})}).then((function(e){return e.json()})).then((function(n){n===e?i(!0):(localStorage.clear(),i(!1))}))}catch(n){localStorage.clear(),i(!1)}}),[]),Object(de.jsx)(Q.a,{children:Object(de.jsxs)(V.c,{children:[t&&Object(de.jsx)(We,{}),Object(de.jsx)(nn,{})]})})},cn=Object(ee.a)(W||(W=Object(G.a)(["* {\n  \tfont-family: 'Titillium Web', sans-serif;\n    margin: 0;\n    box-sizing: border-box;\n    overflow-x: hidden;\n    font-size: 62.5%;\n\n    @media(max-width: 726px) {\n        font-size: 45%;\n    }\n}"])));M.a.render(Object(de.jsxs)(A.a.StrictMode,{children:[Object(de.jsx)(cn,{}),Object(de.jsx)(tn,{})]}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.a12300bc.chunk.js.map