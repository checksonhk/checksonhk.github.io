(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/pjimage.dca3cd9c.jpg"},function(e,t,a){e.exports=a.p+"static/media/not-ritual.68ec6996.png"},function(e,t,a){e.exports=a.p+"static/media/interview.cdf4d4e5.png"},function(e,t,a){e.exports=a.p+"static/media/ruby.0ac0ab67.png"},function(e,t,a){e.exports=a(41)},,,,,function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(16),c=a.n(o),i=(a(26),a(2)),l=(a(32),a(4)),s=a(5),m=a(8),h=a(7),u=a(9),d=a(11),p=a(13),g=a(3),y=(a(33),a(1)),f=a.n(y),v=function(e,t){var a=t.theme.colorPrimary;return n.a.createElement("div",{className:"social-icons animate-icons"},n.a.createElement("a",{href:"https://github.com/checksonhk"},n.a.createElement(i.a,{className:"icons-social",style:{color:a},icon:["fab","github"]})),n.a.createElement("a",{href:"https://stackoverflow.com/story/checksonhk"},n.a.createElement(i.a,{className:"icons-social",style:{color:a},icon:["fab","stack-overflow"]})),n.a.createElement("a",{href:"https://www.linkedin.com/in/jackson-to-605686181/"},n.a.createElement(i.a,{className:"icons-social",style:{color:a},icon:["fab","linkedin"]})))};v.contextTypes={theme:f.a.any};var b=v,F=a(6),A=!!((document||{}).documentElement||{}).style&&"scrollBehavior"in document.documentElement.style,E=function(e){e&&(A?e.scrollIntoView({behavior:"smooth",block:"start"}):e.scrollIntoView())},k=(a(34),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).handleScroll=a.handleScroll.bind(Object(F.a)(a)),a.state={isSticky:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){window.pageYOffset>this.nav.offsetTop?this.setState({isSticky:!0}):this.setState({isSticky:!1})}},{key:"scrollToPage",value:function(e){var t=document.querySelector(e);E(t)}},{key:"render",value:function(){var e=this,t=this.context,a=t.theme,r=a.colorPrimary,o=a.bgPrimary,c=a.navAlpha,l=t.switchTheme,s=this.state.isSticky?"sticky":"",m=this.state.isSticky?{backgroundColor:c,color:r}:{backgroundColor:o,color:r};return n.a.createElement("nav",{className:s,ref:function(t){e.nav=t},style:m},n.a.createElement("div",{className:"magic-wand bounce-xy",onClick:function(e){return l()}},n.a.createElement(i.a,{icon:g.d,href:"#"}),n.a.createElement("div",{className:"magic-text"},"Color Me")),n.a.createElement("style",{jsx:"true"},"\n            .menu__item:hover {\n              border-bottom: 2px solid ".concat(r,";\n            }\n          ")),n.a.createElement("div",{className:"menu"},n.a.createElement("div",{className:"menu__item active",onClick:function(t){return e.scrollToPage(".landing-page")}},"Home"),n.a.createElement("div",{className:"menu__item",onClick:function(t){return e.scrollToPage(".about-page")}},"About"),n.a.createElement("div",{className:"menu__item",onClick:function(t){return e.scrollToPage(".project-page")}},"Portfolio"),n.a.createElement("a",{style:{textDecoration:"none",color:r},href:"/Jackson_s_CV.pdf"},n.a.createElement("div",{className:"menu__item"},"Resume"))))}}]),t}(r.Component));k.contextTypes={theme:f.a.any,switchTheme:f.a.func};var P=k,w=(a(35),function(e,t){var a=t.theme,r=a.bgPrimary,o=a.colorPrimary;return n.a.createElement("div",{style:{backgroundColor:r},className:"landing-page"},n.a.createElement(P,null),n.a.createElement("main",{style:{color:o}},n.a.createElement("div",{className:"intro-wrapper"},n.a.createElement("div",{className:"intro-name"},"Hello, I'm Jackson!"),n.a.createElement("div",{className:"tagline"},"Full Stack Dev | Open-Source Enthusiast | VolleyBall Player"),n.a.createElement(b,null))))});w.contextTypes={theme:f.a.any};var x=w,N=(a(15),a(36),function(e,t){var a=t.theme,r=a.bgPrimary,o=a.colorPrimary,c=[{tech:"JavaScript (ES6+)",icon:"js"},{tech:"Python",icon:"python"},{tech:"Node.js",icon:"node"},{tech:"TypeScript",iconURL:"https://img.icons8.com/".concat(o.slice(1,7).toUpperCase(),"/material-sharp/56/typescript.png")},{tech:"PostGreSQL",iconURL:"https://img.icons8.com/".concat(o.slice(1,7).toUpperCase(),"/material/56/postgreesql.png")},{tech:"React",icon:"react"},{tech:"Express",icon:"node-js"},{tech:"HTML & (S)CSS",icon:"html5"}];return n.a.createElement("div",{style:{backgroundColor:r},className:"about-page"},n.a.createElement("main",{style:{color:o},className:"about-container"},n.a.createElement("div",null,n.a.createElement("h1",{className:"about-title"},"About Me"),n.a.createElement("p",{className:"about-desc"},"Hard working web developer with a flair for creating elegant solutions in the least amount of time. I am passionate about software architecture and using machine learning to improve quality of life.")),n.a.createElement("div",{className:"about-desc"},n.a.createElement("p",{className:"about-desc-text"}," Technology I've recently used: "),n.a.createElement("ul",{className:"about-tech-stack"},c.map((function(e,t){return n.a.createElement("li",{key:t},"string"===typeof e.icon?n.a.createElement(i.a,{style:{color:o,fontSize:"3rem"},icon:["fab",e.icon]}):n.a.createElement("img",{alt:e.tech,src:e.iconURL}),n.a.createElement("span",{className:"about-tech-stack__text"},e.tech))}))))))});N.contextTypes={theme:f.a.any};var S=N,_=a(10),T=(a(37),function(e,t){var a=t.theme,r=a.colorPrimary,o=a.textAlternate;return e.render?e.render:n.a.createElement("div",{className:"portfolio-item",style:{backgroundColor:r,color:o}},n.a.createElement("div",{className:"portfolio-item__info"},n.a.createElement("div",{className:"portfolio-item__title"},e.title),n.a.createElement("div",{className:"portfolio-item__desc"},e.desc),n.a.createElement("div",{className:"portfolio-item__footer"},n.a.createElement("div",{className:"portfolio-item__stack"},e.techStack),n.a.createElement("div",{className:"portfolio-item__links"},n.a.createElement("a",{href:e.githubLink,style:{color:o}},"GitHub Repo"),e.liveLink?n.a.createElement("a",{href:e.liveLink,style:{color:o}},"Live Demo"):""))))});T.contextTypes={theme:f.a.any};var j=T,L=a(17),H=a.n(L),C=a(18),O=a.n(C),R=a(19),I=a.n(R),J=a(20),Q=a.n(J),B=[{title:"weQuest",img:H.a,desc:"weQuest is a community-driven app which affords offers users products on for short-term rental. It strives to reverses the traditional marketplace model in the sense that requesters get to dictate terms for each transaction through a reverse auction mechanism",techStack:"React, Ionic 4, PostGreSQL, TypeScript, Express, Node",githubLink:"https://github.com/checksonhk/weQuest",liveLink:"https://weQuest.xyz"},{title:"!Ritual",img:O.a,desc:"A web application for an online food ordering app. Developed on top of Based on the user experience found on Ritual; additionally, developed Restaurant side Interface for processing orders. Used Google\u2019s location services to efficiently to capture accurate location to and provide accurate travel times and maps directions via Trello services",techStack:"JQuery, EJS, PostGreSQL, Node, Express",githubLink:"https://github.com/checksonhk/Midterm-Project",liveLink:"https://not-ritual.herokuapp.com"},{title:"Jungle",img:Q.a,desc:"Jungle is a mini e-commerce application built with Rails 4.2 for purposes of learning Rails. Jungle was built with users in mind, from the main catalog to each product's detail page. Some special features of Jungle is are its rating system, email confirmation capabilities, and authentication processes",techStack:"Rails, Ruby, PostGreSQL",githubLink:"https://github.com/checksonhk/jungle"},{title:"Interview Scheduler",img:I.a,desc:"Interview Scheduler is a simple, single page app built in React that allows a user to book, edit and cancel interviews. Using Web Sockets, concurrent users can see changes made by other users instantaneously.",techStack:"React, Express, PostGreSQL, Node",githubLink:"https://github.com/checksonhk/scheduler",liveLink:"https://fervent-wozniak-d33d68.netlify.com/"}];a(38);j.contextTypes={theme:f.a.any};var M=function(e,t){var a=e.theme.theme.bgPrimary;return n.a.createElement(_.c,{visibleSlides:1,totalSlides:4,step:1,naturalSlideWidth:400,naturalSlideHeight:500,infinite:!0},n.a.createElement("h1",{className:"carousel__headline"},"Projects"),n.a.createElement("div",{className:"carousel__container"},n.a.createElement(_.e,{className:"carousel__slider"},B.map((function(e,t){return function(e,t){return n.a.createElement(_.d,{className:"carousel__slide",key:t,index:t},n.a.createElement(j,{title:e.title,img:e.img,desc:e.desc,techStack:e.techStack,githubLink:e.githubLink,liveLink:e.liveLink}))}(e,t)}))),n.a.createElement(_.a,{className:"carousel__buttonBack"},n.a.createElement(i.a,{icon:g.a,style:{color:a}})),n.a.createElement(_.b,{className:"carousel__buttonNext"},n.a.createElement(i.a,{icon:g.b,style:{color:a}}))))},U=(a(39),function(e,t){var a=t.theme,r=a.bgPrimary,o=a.colorPrimary;return n.a.createElement("div",{style:{backgroundColor:r},className:"project-page"},n.a.createElement("main",{style:{color:o}},n.a.createElement("div",{className:"project-container"},n.a.createElement(M,{theme:t}))))});U.contextTypes={theme:f.a.any};var D=U,G=(a(40),function(e,t){var a=t.theme.colorPrimary;return n.a.createElement("div",{className:"parallax",style:{color:a}},n.a.createElement("div",{id:"stars1"}),n.a.createElement("div",{id:"stars2"}),n.a.createElement("div",{id:"stars3"}))});G.contextTypes={theme:f.a.any};var W=G,q=[{name:"blue",firstTime:!0,colorPrimary:"#4ea9da",colorAlternate:"#FAFAFA",colorHighlight:"#daedf7",textPrimary:"#202121",navAlpha:"rgba(250, 250, 250, 0.75)"},{name:"cyan",firstTime:!0,colorPrimary:"#3dc0b0",colorAlternate:"#FAFAFA",colorHighlight:"#d7f2ef",textPrimary:"#202121",navAlpha:"rgba(250, 250, 250, 0.75)"},{name:"blue-alt",colorPrimary:"#FAFAFA",colorAlternate:"#4ea9da",colorHighlight:"#2a93cb",textPrimary:"#FAFAFA",navAlpha:"rgba(78, 169, 218, 0.75)"},{name:"cyan-alt",colorPrimary:"#FAFAFA",colorAlternate:"#3dc0b0",colorHighlight:"#35a698",textPrimary:"#FAFAFA",navAlpha:"rgba(61, 192, 176, 0.75)"},{name:"green",colorPrimary:"#5BA150",colorAlternate:"#FAFAFA",colorHighlight:"#e1efdf",textPrimary:"#202121",navAlpha:"rgba(250, 250, 250, 0.75)"},{name:"brown",colorPrimary:"#A26836",colorAlternate:"#FAFAFA",colorHighlight:"#f5ebe2",textPrimary:"#202121",navAlpha:"rgba(250, 250, 250, 0.75)"},{name:"orange",colorPrimary:"#e17421",colorAlternate:"#FAFAFA",colorHighlight:"#f9e4d5",textPrimary:"#202121",navAlpha:"rgba(250, 250, 250, 0.75)"},{name:"crimson-red",colorPrimary:"#e64f52",colorAlternate:"#FAFAFA",colorHighlight:"#fbe4e4",textPrimary:"#202121",navAlpha:"rgba(250, 250, 250, 0.75)"},{name:"red",colorPrimary:"#af3d4e",colorAlternate:"#FAFAFA",colorHighlight:"#f6e4e7",textPrimary:"#202121",navAlpha:"rgba(250, 250, 250, 0.75)"},{name:"red-alt",colorPrimary:"#FFFFFF",colorAlternate:"#89303d",colorHighlight:"#63232c",textPrimary:"#FFFFFF",navAlpha:"rgba(137, 48, 61, 0.75)"},{name:"indigo-alt",colorPrimary:"#FAFAFA",colorAlternate:"#303F9F",colorHighlight:"#242f78",textPrimary:"#FAFAFA",navAlpha:"rgba(48, 63, 159, 0.75)"},{name:"grey-alt",colorPrimary:"#FFFFFF",colorAlternate:"#485564",colorHighlight:"#333c46",textPrimary:"#FFFFFF",navAlpha:"rgba(72, 85, 100, 0.75)"},{name:"material-cyan",colorPrimary:"#00BCD4",colorAlternate:"#FFFFFF",colorHighlight:"#d4faff",textPrimary:"#212121",navAlpha:"rgba(255, 255, 255, 0.75)"},{name:"material-brown",colorPrimary:"#845c4e",colorAlternate:"#FFFFFF",colorHighlight:"#eee6e3",textPrimary:"#212121",navAlpha:"rgba(255, 255, 255, 0.75)"},{name:"material-grey",firstTime:!0,colorPrimary:"#607D8B",colorAlternate:"#FFFFFF",colorHighlight:"#dfe6e9",textPrimary:"#212121",navAlpha:"rgba(255, 255, 255, 0.75)"},{name:"material-grey-alt",colorPrimary:"#FFFFFF",colorAlternate:"#455A64",colorHighlight:"#374850",textPrimary:"#FAFAFA",navAlpha:"rgba(69, 90, 100, 0.75)"}],V=function(){return q.map((function(e){return{name:e.name,firstTime:e.firstTime,colorPrimary:e.colorPrimary,colorAlternate:e.colorAlternate,colorHighlight:e.colorHighlight,bgPrimary:e.colorAlternate,bgAlternate:e.colorPrimary,bgLanding:e.colorPrimary,textPrimary:e.textPrimary,textAlternate:e.colorAlternate,textLanding:e.colorPrimary,parallaxStars:e.colorPrimary,navAlpha:e.navAlpha}}))},z=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).getRandomTheme=function(){var e=a.state.theme,t=V().filter((function(t){return t.name!==e.name}));return t[Math.floor(Math.random()*t.length)]},a.switchTheme=function(){var e=a.getRandomTheme();a.setState({theme:e})};var r=V().filter((function(e){return!0===e.firstTime}));return a.state={theme:r[Math.floor(Math.random()*r.length)]},a.switchTheme=a.switchTheme.bind(Object(F.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"getChildContext",value:function(){return{theme:this.state.theme,switchTheme:this.switchTheme}}},{key:"render",value:function(){var e=this.props.children,t=this.state.theme;return n.a.createElement("div",{className:"theme-switcher"},n.a.createElement("style",{jsx:"true"},"\n            body {\n              background-color: ".concat(t.bgPrimary,";\n              body,\n              h1,\n              h2,\n              h3,\n              h4,\n              h5,\n              h6,\n              p,\n              ol,\n              ul {\n                color: ").concat(t.textPrimary,";\n              }\n            }\n          ")),e)}}]),t}(r.Component);z.childContextTypes={theme:f.a.any,switchTheme:f.a.func};var Y=z;d.b.add(p.a,g.c);var $=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"page-wrapper"},n.a.createElement(Y,null,n.a.createElement(W,null),n.a.createElement(x,null),n.a.createElement(S,null),n.a.createElement(D,null)))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[21,1,2]]]);
//# sourceMappingURL=main.4986104c.chunk.js.map