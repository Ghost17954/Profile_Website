(this.webpackJsonpwaveplayer=this.webpackJsonpwaveplayer||[]).push([[0],{37:function(n,e,t){"use strict";t.r(e);var i=t(1),r=t(0),c=t(21),a=t.n(c),s=t(5),o=t(3),d=t(4);function j(){var n=Object(o.a)(["\n    *{\n        margin:0;\n        padding:0;\n        box-sizing:border-box;\n    }\n\n    html{\n        @media (max-width: 1700px){\n            font-size:75%;\n        }        \n    }\n\n    body{\n        background:#1b1b1b;\n        font-family: 'Inter', sans-serif;\n        overflow-x: hidden;\n    }\n\n    button{\n        font-weight:bold;\n        font-size:1.0rem;\n        cursor:pointer;\n        padding:1rem 2rem;\n        border:3px solid #23d997;\n        background:transparent;\n        color:white;\n        transition:all 0.5s ease;\n        font-family: 'Inter', sans-serif;\n        &:hover{\n            background-color:#23d997;\n            color:white;\n        }        \n    }\n\n    h2{\n        font-weight:lighter;\n        font-size:3.5rem;\n    }\n\n    h3{\n        color:white;\n    }\n\n    h4{\n        font-weight:bold;\n        font-size:1.8rem;        \n    }\n\n    span{\n        font-weight:bold;\n        color:#23d997;\n    }\n    \n    a{\n        font-size:1rem;\n    }\n\n    p{\n        padding:3rem 0rem;\n        color:#ccc;\n        font-size:1.1rem;\n        line-height:150%normal\n    }        \n"]);return j=function(){return n},n}var l=Object(d.a)(j()),h=t.p+"static/media/vijat1.e525ad9c.jpeg",b=t(2);function u(){var n=Object(o.a)(["\n  overflow: hidden;\n"]);return u=function(){return n},n}function x(){var n=Object(o.a)(["\n  flex: 1;\n  overflow: hidden;\n  z-index: 2;\n  img {\n    width: 100%;\n    height: 80vh;\n    object-fit: cover;\n  }\n"]);return x=function(){return n},n}function m(){var n=Object(o.a)(["\n  flex: 1;\n  padding-right: 5rem;\n  z-index: 2;\n  h2 {\n    font-weight: lighter;\n  }\n  @media (max-width: 1300px) {\n    padding: 0;\n    button {\n      margin: 2rem 0rem 5rem 0rem;\n    }\n  }\n"]);return m=function(){return n},n}function f(){var n=Object(o.a)(["\n  min-height: 90vh;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5rem 10rem;\n  color: white;\n  @media (max-width: 1300px) {\n    display: block;\n    padding: 2rem 2rem;\n    text-align: center;\n  }\n"]);return f=function(){return n},n}var O=Object(d.b)(b.c.div)(f()),p=d.b.div(m()),g=d.b.div(x()),v=d.b.div(u()),w={hidden:{opacity:0,y:300},show:{opacity:1,y:0,transition:{duration:.5,when:"beforeChildren",staggerChildren:.25}},exit:{opacity:0,transition:{duration:.5}}},y={hidden:{y:200},show:{y:0,transition:{duration:.75,ease:"easeOut"}}},k={hidden:{opacity:0},show:{opacity:1,transition:{ease:"easeOut",duration:1}}},C={hidden:{scale:1.5,opacity:0},show:{scale:1,opacity:1,transition:{ease:"easeOut",duration:.75}}},I={hidden:{x:"-130%",skew:"45deg"},show:{x:"100%",skew:"0deg",transition:{ease:"easeOut",duration:1}}},z={hidden:{opacity:1},show:{opacity:1,transition:{staggerChildren:.15,ease:"easeOut"}}},S={hidden:{opacity:0,scale:1.2,transition:{duration:.5}},show:{opacity:1,scale:1,transition:{duration:.5}}};function M(){var n=Object(o.a)(["\n  position: absolute;\n  left: 0;\n  z-index: 1;\n"]);return M=function(){return n},n}var A=d.b.svg(M()),E=function(){return Object(i.jsx)(A,{viewBox:"0 0 1440 363",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsx)(b.c.path,{initial:{pathLength:0,pathOffset:1},animate:{pathLength:1,pathOffset:0},transition:{duration:1},d:"M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5",stroke:"#D96ED4",strokeOpacity:"0.3",strokeWidth:"10"})})},N=t.p+"static/media/Resume.d2f1d14f.pdf";var P=function(){return Object(i.jsxs)(O,{children:[Object(i.jsxs)(p,{children:[Object(i.jsxs)(b.c.div,{children:[Object(i.jsx)(v,{children:Object(i.jsxs)(b.c.h2,{variants:y,children:["If you can ",Object(i.jsx)("span",{children:"think"})," it,"]})}),Object(i.jsx)(v,{children:Object(i.jsxs)(b.c.h2,{variants:y,children:["we can ",Object(i.jsx)("span",{children:" develop "})]})}),Object(i.jsx)(v,{children:Object(i.jsx)(b.c.h2,{variants:y,children:"it."})})]}),Object(i.jsx)(b.c.p,{variants:k,children:"Below you'll find a section which describes some of the projects i worked on, that showcases the type of skills I work with."}),Object(i.jsx)("a",{href:N,rel:"noreferrer",target:"_blank",children:Object(i.jsx)(b.c.button,{variants:k,children:"View My Resume"})})]}),Object(i.jsx)(g,{children:Object(i.jsx)(b.c.img,{variants:C,src:h,alt:""})}),Object(i.jsx)(E,{})]})},F=t(12);var J=function(n){var e=n.children,t=n.title,c=Object(r.useState)(!1),a=Object(F.a)(c,2),s=a[0],o=a[1];return Object(i.jsxs)(b.c.div,{layout:!0,className:"question",onClick:function(){return o(!s)},children:[Object(i.jsx)(b.c.h4,{layout:!0,children:t}),s?e:"",Object(i.jsx)("div",{className:"faq-line"})]})},R=t(25);function W(){var n=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  p {\n    margin: 1rem 0.3rem 1rem;\n  }\n  span {\n    font-weight: lighter;\n    margin-left: 1rem;\n  }\n  .points {\n    display: flex;\n    flex-direction: column;\n  }\n  @media (max-width: 1300px) {\n    p {\n      margin: 0rem;\n      font-size: 0.8rem;\n    }\n    span {\n      font-size: 0.8rem;\n      margin: 0.5rem;\n    }\n  }\n"]);return W=function(){return n},n}function q(){var n=Object(o.a)(["\n  border-radius: 50%;\n  width: 1rem;\n  height: 1rem;\n  background: #cccccc;\n  @media (max-width: 1300px) {\n    width: 0.5rem;\n    height: 0.5rem;\n  }\n"]);return q=function(){return n},n}function L(){var n=Object(o.a)(["\n  display: block;\n  span {\n    display: block;\n  }\n  h2 {\n    padding-bottom: 2rem;\n    font-weight: lighter;\n  }\n  .faq-line {\n    background: #cccccc;\n    height: 0.2rem;\n    margin: 2rem 0rem;\n    width: 100%;\n  }\n  .question {\n    padding: 3rem 0rem;\n    cursor: pointer;\n  }\n  .answer {\n    padding: 2rem 0rem;\n    p {\n      padding: 0rem 0rem;\n    }\n  }\n  @media (max-width: 1300px) {\n    h2 {\n      padding-bottom: 0.8rem;\n      font-size: 2rem;\n    }\n    .question {\n      padding: 1rem 0rem;\n    }\n    .answer {\n      padding: 1rem 0rem;\n      p {\n        padding: 0rem;\n        font-size: 0.8rem;\n      }\n    }\n  }\n"]);return L=function(){return n},n}var V=Object(d.b)(O)(L()),_=d.b.div(q()),T=Object(d.b)(b.c.div)(W()),B=function(){var n=function(){var n=Object(b.d)(),e=Object(R.a)({threshold:.3}),t=Object(F.a)(e,2),i=t[0];return t[1]?n.start("show"):n.start("hidden"),[i,n]}(),e=Object(F.a)(n,2),t=e[0],r=e[1];return Object(i.jsxs)(V,{variants:S,ref:t,animate:r,initial:"hidden",children:[Object(i.jsxs)("h2",{children:["About ",Object(i.jsx)("span",{children:" Me "})]}),Object(i.jsxs)(b.b,{children:[Object(i.jsx)(J,{title:"Skills and Technology",children:Object(i.jsxs)("div",{className:"answer",children:[Object(i.jsxs)(T,{children:[Object(i.jsx)(_,{}),Object(i.jsx)("span",{children:"Skills and FrameWorks: "}),Object(i.jsx)("p",{children:"C#,ADO.Net,ASP.Net MVC.Entity FrameWork,Entity FrameWork Core,Jquery,JavaScript,ReactJs,Redux,Web API,SQL,HTML,CSS"})]}),Object(i.jsxs)(T,{children:[Object(i.jsx)(_,{}),Object(i.jsx)("span",{children:"Tools: "}),Object(i.jsx)("p",{children:"Visual Studio,Visual Code,SSMS,PostMan,Pencil,Mysql,Jira,Office"})]}),Object(i.jsxs)(T,{children:[Object(i.jsx)(_,{}),Object(i.jsx)("span",{children:"Version control: "}),Object(i.jsx)("p",{children:"Git,TFS"})]})]})}),Object(i.jsx)(J,{title:"Work Experience",children:Object(i.jsxs)("div",{className:"answer",children:[Object(i.jsxs)(T,{children:[Object(i.jsx)(_,{}),Object(i.jsx)("span",{children:"Infosys: "}),Object(i.jsx)("p",{children:"2018-Present"})]}),Object(i.jsxs)(T,{children:[Object(i.jsx)(_,{}),Object(i.jsx)("span",{children:"Experience: "}),Object(i.jsx)("p",{children:"2+ Years"})]}),Object(i.jsxs)(T,{children:[Object(i.jsx)(_,{}),Object(i.jsx)("span",{children:"Projects: "}),Object(i.jsx)("p",{children:"Completed two .Net project which shaped my skills of C#,Entity FrameWork,EntityFramework core,Web Services,JavaScript,ASP.Net MVC,SQL."})]}),Object(i.jsxs)(T,{children:[Object(i.jsx)(_,{}),Object(i.jsx)("span",{children:"Current Project : "}),Object(i.jsx)("p",{children:"Currently working on a project as a Frontend Developer using Reactjs and Redux."})]})]})}),Object(i.jsx)(J,{title:"Education and Certification",children:Object(i.jsxs)("div",{className:"answer",children:[Object(i.jsxs)(T,{children:[Object(i.jsx)(_,{}),Object(i.jsx)("span",{children:"Bachelor of Engineering:"}),Object(i.jsx)("p",{children:"Computer Science and Technology - 2018."})]}),Object(i.jsxs)(T,{children:[Object(i.jsx)(_,{}),Object(i.jsx)("span",{children:"College:"}),Object(i.jsx)("p",{children:"Maharaja Institute of Technology,Mysore."})]}),Object(i.jsxs)(T,{children:[Object(i.jsx)(_,{}),Object(i.jsx)("span",{children:"Certification :"}),Object(i.jsx)("p",{children:"Microsoft AZ-900:Azure Fundamentals,ReactJs Professional(Infosys Internal),Agile(Infosys Internal)"})]})]})})]})]})},D=function(){var n=Object(s.f)().pathname;return Object(r.useEffect)((function(){window.scroll({top:0,left:0})}),[n]),null};var H=function(){return Object(i.jsxs)(b.c.div,{variants:w,initial:"hidden",animate:"show",exit:"exit",children:[Object(i.jsx)(P,{}),Object(i.jsx)(B,{}),Object(i.jsx)(D,{})]})},Q=t(10);function G(){var n=Object(o.a)(["\n  height: 0.3rem;\n  background: #23d997;\n  width: 0%;\n  position: absolute;\n  bottom: -80%;\n  left: 60%;\n  @media (maex-width: 1300px) {\n    left: 0%;\n  }\n"]);return G=function(){return n},n}function K(){var n=Object(o.a)(['\n  min-height: 10vh;\n  display: flex;\n  margin: auto;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 10rem;\n  background: #282828;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  a {\n    color: white;\n    text-decoration: none;\n  }\n  ul {\n    display: flex;\n    list-style: none;\n  }\n  #logo {\n    font-size: 1.3rem;\n    font-family: "Lobster", cursive;\n    font-weight: lighter;\n  }\n  li {\n    padding-left: 10rem;\n    position: relative;\n  }\n  @media (max-width: 1300px) {\n    flex-direction: column;\n    padding: 2rem 1rem;\n    ul {\n      padding: 2rem;\n      justify-content: space-around;\n      width: 100%;\n      li {\n        padding: 0;\n      }\n      #logo {\n        display: inline-block;\n        margin: 1rem;\n      }\n    }\n  }\n']);return K=function(){return n},n}var Y=d.b.nav(K()),Z=Object(d.b)(b.c.div)(G()),U=function(){var n=Object(s.f)().pathname;return Object(i.jsxs)(Y,{children:[Object(i.jsx)("h1",{children:Object(i.jsx)(Q.b,{to:"/",id:"logo",children:"Vijay S"})}),Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:[Object(i.jsx)(Q.b,{to:"/",children:"Home"}),Object(i.jsx)(Z,{transition:{duration:.75},initial:{width:"0%"},animate:{width:"/"===n?"50%":"0%"}})]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(Q.b,{to:"/about",children:" About"}),Object(i.jsx)(Z,{transition:{duration:.75},initial:{width:"0%"},animate:{width:"/about"===n?"50%":"0%"}})]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(Q.b,{to:"/contact",children:"Contact"}),Object(i.jsx)(Z,{transition:{duration:.75},initial:{width:"0%"},animate:{width:"/contact"===n?"50%":"0%"}})]})]})]})};function X(){var n=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  h4 {\n    margin: 2rem;\n    font-weight: lighter;\n    a {\n      //text-decoration: none;\n      color: inherit;\n      font: inherit;\n    }\n  }\n"]);return X=function(){return n},n}function $(){var n=Object(o.a)(["\n  border-radius: 50%;\n  width: 2rem;\n  height: 2rem;\n  background: #353535;\n"]);return $=function(){return n},n}function nn(){var n=Object(o.a)(["\n  overflow: hidden;\n"]);return nn=function(){return n},n}function en(){var n=Object(o.a)(["\n  margin-bottom: 4rem;\n  color: black;\n  @media (max-width: 1300px) {\n    margin-top: 5rem;\n  }\n"]);return en=function(){return n},n}function tn(){var n=Object(o.a)(["\n  padding: 5rem 10rem;\n  color: #353535;\n  min-height: 90vh;\n  @media (max-width: 1500px) {\n    padding: 2rem;\n    font-size: 1rem;\n  }\n"]);return tn=function(){return n},n}var rn=Object(d.b)(b.c.div)(tn()),cn=d.b.div(en()),an=d.b.div(nn()),sn=d.b.div($()),on=Object(d.b)(b.c.div)(X()),dn=function(){return Object(i.jsxs)(rn,{variants:w,initial:"hidden",animate:"show",exit:"exit",style:{background:"#fff"},children:[Object(i.jsx)(cn,{children:Object(i.jsx)(an,{children:Object(i.jsx)(b.c.h1,{variants:y,children:"Reach Me @"})})}),Object(i.jsxs)("div",{children:[Object(i.jsx)(an,{children:Object(i.jsxs)(on,{variants:y,children:[Object(i.jsx)(sn,{}),Object(i.jsx)("h4",{children:"Mail me at vijaysurya0007@gmail.com or vijaysuryas326@gmail.com"})]})}),Object(i.jsx)(an,{children:Object(i.jsxs)(on,{variants:y,children:[Object(i.jsx)(sn,{}),Object(i.jsx)("h4",{children:Object(i.jsx)("a",{href:"https://www.linkedin.com/in/vijay-surya-s-051666190/",rel:"noopener noreferrer",target:"_blank",children:"LinkedIn-1"})})]})}),Object(i.jsx)(an,{children:Object(i.jsxs)(on,{variants:y,children:[Object(i.jsx)(sn,{}),Object(i.jsx)("h4",{children:Object(i.jsx)("a",{href:"https://www.instagram.com/vij_a_y_/",rel:"noopener noreferrer",target:"_blank",children:"Instagram"})})]})}),Object(i.jsx)(an,{children:Object(i.jsxs)(on,{variants:y,children:[Object(i.jsx)(sn,{}),Object(i.jsx)("h4",{children:Object(i.jsx)("a",{href:"https://www.facebook.com/Ded3ec/",rel:"noopener noreferrer",target:"_blank",children:"Facebook"})})]})})]}),Object(i.jsx)(D,{})]})},jn=t.p+"static/media/About1.63da031a.jpeg",ln=t.p+"static/media/About2.124f47c2.jpeg",hn=t.p+"static/media/About3.f1f9c136.jpeg";function bn(){var n=Object(o.a)(["\n  background: #8effa0;\n"]);return bn=function(){return n},n}function un(){var n=Object(o.a)(["\n  background: #8ed2ff;\n"]);return un=function(){return n},n}function xn(){var n=Object(o.a)(["\n  background: #ff8efb;\n"]);return xn=function(){return n},n}function mn(){var n=Object(o.a)(["\n  position: fixed;\n  left: 0;\n  top: 10%;\n  width: 100%;\n  height: 100vh;\n  background: #fffebf;\n  z-index: 2;\n"]);return mn=function(){return n},n}function fn(){var n=Object(o.a)(["\n  padding: 5rem;\n  h3 {\n    font-size: 1.8rem;\n  }\n  .line {\n    width: 100%;\n    background: #23d997;\n    height: 0.5rem;\n    margin: 1rem 0rem;\n  }\n  p {\n    padding: 2rem 0rem;\n  }\n"]);return fn=function(){return n},n}function On(){var n=Object(o.a)(["\n  min-height: 60vh;\n  display: flex;\n  margin: 5rem 10rem;\n  align-items: center;\n  justify-content: space-around;\n  @media (max-width: 1300px) {\n    display: block;\n    margin: 2rem 2rem;\n  }\n"]);return On=function(){return n},n}function pn(){var n=Object(o.a)(["\n  display: flex;\n  min-height: 90vh;\n  padding-top: 20vh;\n  position: relative;\n  h2 {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, -10%);\n  }\n  img {\n    flex: 1;\n    width: 35%;\n    height: 70vh;\n    object-fit: cover;\n  }\n  @media (max-width: 1300px) {\n    h2 {\n      font-size:2rem;\n    }\n  }\n"]);return pn=function(){return n},n}function gn(){var n=Object(o.a)(["\n  color: white;\n"]);return gn=function(){return n},n}var vn=Object(d.b)(b.c.div)(gn()),wn=d.b.div(pn()),yn=d.b.div(On()),kn=d.b.div(fn()),Cn=Object(d.b)(b.c.div)(mn()),In=Object(d.b)(Cn)(xn()),zn=Object(d.b)(Cn)(un()),Sn=Object(d.b)(Cn)(bn()),Mn=function(n){var e=n.title,t=n.description;return Object(i.jsxs)(kn,{children:[Object(i.jsx)("h3",{children:e}),Object(i.jsx)("div",{className:"line"}),Object(i.jsx)("p",{children:t})]})},An=function(){return Object(i.jsxs)(vn,{variants:w,initial:"hidden",animate:"show",exit:"exit",children:[Object(i.jsxs)(b.c.div,{variants:z,children:[Object(i.jsx)(Cn,{variants:I}),Object(i.jsx)(In,{variants:I}),Object(i.jsx)(zn,{variants:I}),Object(i.jsx)(Sn,{variants:I})]}),Object(i.jsxs)(wn,{children:[Object(i.jsx)("h2",{children:"A few fun facts about myself"}),Object(i.jsx)("img",{src:jn,alt:"movie"}),Object(i.jsx)("img",{src:ln,alt:"movie"}),Object(i.jsx)("img",{src:hn,alt:"movie"})]}),Object(i.jsxs)(yn,{children:[Object(i.jsx)(Mn,{title:"Myself",description:"I work out of Karnataka-India, I love pour over coffee, and to learn new things that fascinates me "}),Object(i.jsx)(Mn,{title:"My Passion and Personality",description:"I play video games like it's my life,I'm a huge fan of Cricket. I knew what I wanted to do at the age of 16, I love to take a bike ride around mountain and hill stations to capture its beauty and my favorite food is all vegan."})]}),Object(i.jsx)(D,{})]})};var En=function(){var n=Object(s.f)();return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(l,{}),Object(i.jsx)(U,{}),Object(i.jsx)(b.a,{exitBeforeEnter:!0,children:Object(i.jsxs)(s.c,{location:n,children:[Object(i.jsx)(s.a,{path:"/",exact:!0,component:H})," ",Object(i.jsx)(s.a,{path:"/contact",exact:!0,component:dn})," ",Object(i.jsx)(s.a,{path:"/about",exact:!0,component:An})," "]},n.pathname)})]})};a.a.render(Object(i.jsx)(Q.a,{children:Object(i.jsx)(En,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.8d2d62bd.chunk.js.map