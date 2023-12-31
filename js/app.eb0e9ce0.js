(function(){"use strict";var t={8413:function(t,e,o){var i=o(9242),a=o(3396);function n(t,e,o,n,s,r){const l=(0,a.up)("the-header"),c=(0,a.up)("router-view"),p=(0,a.up)("the-footer");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(l),(0,a.Wm)(c,null,{default:(0,a.w5)((({Component:t})=>[(0,a.Wm)(i.uT,{name:"fade"},{default:(0,a.w5)((()=>[((0,a.wg)(),(0,a.j4)((0,a.LL)(t)))])),_:2},1024)])),_:1}),(0,a.Wm)(p)],64)}var s=o(7139),r=o.p+"img/logo2.493f128f.png";const l=t=>((0,a.dD)("data-v-5fe45e0c"),t=t(),(0,a.Cn)(),t),c=l((()=>(0,a._)("img",{src:r,alt:"Logo"},null,-1))),p=l((()=>(0,a._)("span",{class:"hamburger"},null,-1))),d=[p],u={class:"nav"},g={class:"nav__list"};function f(t,e,o,n,r,l){const p=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("header",{class:(0,s.C_)({"nav-open":n.isNavOpen})},[(0,a.Wm)(p,{to:"/",class:"logo"},{default:(0,a.w5)((()=>[c])),_:1}),(0,a._)("button",{class:"nav-toggle","aria-label":"toggle navigation",onClick:e[0]||(e[0]=(...t)=>n.toggleNav&&n.toggleNav(...t))},d),(0,a._)("nav",u,[(0,a._)("ul",g,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.navLinks,(t=>((0,a.wg)(),(0,a.iD)("li",{class:"nav__item",key:t.name},[(0,a.Wm)(p,{to:t.to,class:"nav__link",onClick:(0,i.iM)((e=>n.navigateTo(t.to)),["prevent"])},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(t.name),1)])),_:2},1032,["to","onClick"])])))),128))])])],2)}o(560);var m=o(4870),h=o(678),v={name:"TheHeader",setup(){const t=(0,h.tv)(),e=(0,m.iH)(!1);function o(){e.value=!e.value}function i(){e.value=!1}const a=[{name:"Home",to:"/"},{name:"What I Do",to:"/#skills"},{name:"About me",to:"/#about"},{name:"My Projects",to:"/#projects"}];function n(e){if(e.startsWith("/#")){let o=e.substring(e.indexOf("#"));t.push("/").then((()=>{let t=document.querySelector(o);t&&t.scrollIntoView({behavior:"smooth"})}))}else t.push(e);i()}return{isNavOpen:e,toggleNav:o,closeNav:i,navLinks:a,navigateTo:n}}},b=o(89);const _=(0,b.Z)(v,[["render",f],["__scopeId","data-v-5fe45e0c"]]);var w=_;const y={class:"footer"},k=(0,a.uE)('<a href="#top" class="go-top__footer" data-v-710789cf><i class="fa-regular fa-circle-up" data-v-710789cf></i></a><a href="mailto:tozequa@gmail.com" class="footer__link" data-v-710789cf>Email Me</a><ul class="social-list" data-v-710789cf><li class="social-list__item" data-v-710789cf><a class="social-list__link" href="https://github.com/AntQua" target="_blank" data-v-710789cf><i class="fab fa-github" data-v-710789cf></i></a></li><li class="social-list__item" data-v-710789cf><a class="social-list__link" href="https://www.linkedin.com/in/antonio-quaresma/" target="_blank" data-v-710789cf><i class="fab fa-linkedin" data-v-710789cf></i></a></li></ul>',3),j=[k];function S(t,e){return(0,a.wg)(),(0,a.iD)("footer",y,j)}const T={},P=(0,b.Z)(T,[["render",S],["__scopeId","data-v-710789cf"]]);var A=P,C={name:"App",components:{TheHeader:w,TheFooter:A}};const H=(0,b.Z)(C,[["render",n]]);var L=H,W=o.p+"img/intro_pic.beba037e.jpg",I=o.p+"img/having_tea.beaf9fb4.jpg",D=o(9697),M=o(5614),x=o(7483),O=o(9134),R=o(4622),z=o(8284);const F=t=>((0,a.dD)("data-v-8c450402"),t=t(),(0,a.Cn)(),t),G=(0,a.uE)('<section class="intro" id="home" data-v-8c450402><h1 class="section__title section__title--intro" data-v-8c450402> Hi, I am <strong data-v-8c450402>António Quaresma</strong></h1><p class="section__subtitle section__subtitle--intro" data-v-8c450402>full-stack dev</p><img src="'+W+'" alt="a picture of Antonio posing and smiling" class="intro__img" data-v-8c450402></section><section class="my-skills" id="skills" data-v-8c450402><h2 class="section__title section__title--skills" data-v-8c450402>What I do</h2><div class="skills" data-v-8c450402><div class="skill" data-v-8c450402><h3 data-v-8c450402>Back-End Development</h3><p data-v-8c450402>As a junior back-end developer, I possess fundamental skills in server-side programming languages like Ruby or C#. I work on databases, build APIs, and handle server-side logic. I&#39;m also gaining knowledge in security and scalability to support web applications.</p></div><div class="skill" data-v-8c450402><h3 data-v-8c450402>Full-Stack Development</h3><p data-v-8c450402>As a junior full-stack developer, I possess skills in both front-end and back-end development. I create user-friendly interfaces using HTML, CSS, and JavaScript, along with frameworks like .NET or Ruby on Rails. On the server-side, I manage databases, build APIs, and ensure security and scalability for web application</p></div><div class="skill" data-v-8c450402><h3 data-v-8c450402>Front-End Development</h3><p data-v-8c450402> As a junior front-end developer, I have foundational skills in HTML, CSS, and JavaScript. My focus is on creating user interfaces, ensuring web pages are visually appealing, responsive, and cross-browser compatible. I&#39;m also working on becoming familiar with frameworks like Vue or Rails and basic UX/UI design principles.</p></div></div><a href="#projects" class="btn" data-v-8c450402>my projects</a><a href="#top" class="go-top__skills" data-v-8c450402><i class="fa-regular fa-circle-up" data-v-8c450402></i></a></section><section class="about-me" id="about" data-v-8c450402><h2 class="section__title section__title--about" data-v-8c450402>Who I am</h2><p class="section__subtitle section__subtitle--about" data-v-8c450402>Web Developer based in Lisbon</p><div class="about-me__body" data-v-8c450402><p data-v-8c450402>I&#39;m deeply passionate about off-grid living, permaculture, and exploring the natural and cultural world through travel. These interests fuel my personal journey and inspire my creativity.</p><p data-v-8c450402>With a background in banking, I&#39;ve cultivated invaluable soft skills in communication, problem-solving, and client relationships. Now, as I transition into web development, I&#39;m excited to leverage these skills to drive success in this new and exciting career path.</p><p data-v-8c450402>Looking ahead, I&#39;m committed to continuous learning and growth in web development, eager to contribute my unique blend of experiences and skills to create innovative and impactful software solutions.</p></div><img src="'+I+'" alt="Antonio having tea" class="about-me__img" data-v-8c450402></section>',3),B={class:"my-projects",id:"projects"},Q=F((()=>(0,a._)("h2",{class:"section__title section__title--projects"},"My Projects",-1))),V=F((()=>(0,a._)("p",{class:"section__subtitle section__subtitle--projects"},"A selection of my best projects",-1))),N={class:"portfolio"},q=F((()=>(0,a._)("img",{src:D,alt:"",class:"portfolio__img"},null,-1))),E=F((()=>(0,a._)("img",{src:M,alt:"",class:"portfolio__img"},null,-1))),U=F((()=>(0,a._)("img",{src:x,alt:"",class:"portfolio__img"},null,-1))),J=F((()=>(0,a._)("img",{src:O,alt:"",class:"portfolio__img"},null,-1))),Z=F((()=>(0,a._)("img",{src:R,alt:"",class:"portfolio__img"},null,-1))),K=F((()=>(0,a._)("img",{src:z,alt:"",class:"portfolio__img"},null,-1)));function Y(t,e,o,i,n,s){const r=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",null,[G,(0,a._)("section",B,[Q,V,(0,a._)("div",N,[(0,a.Wm)(r,{to:{name:"ProjectDetail",params:{id:"2Care"}},class:"portfolio__item"},{default:(0,a.w5)((()=>[q])),_:1}),(0,a.Wm)(r,{to:{name:"ProjectDetail",params:{id:"SandSpot"}},class:"portfolio__item"},{default:(0,a.w5)((()=>[E])),_:1}),(0,a.Wm)(r,{to:{name:"ProjectDetail",params:{id:"Whatchlist"}},class:"portfolio__item"},{default:(0,a.w5)((()=>[U])),_:1}),(0,a.Wm)(r,{to:{name:"ProjectDetail",params:{id:"Portfolio"}},class:"portfolio__item"},{default:(0,a.w5)((()=>[J])),_:1}),(0,a.Wm)(r,{to:{name:"ProjectDetail",params:{id:"Botanika"}},class:"portfolio__item"},{default:(0,a.w5)((()=>[Z])),_:1}),(0,a.Wm)(r,{to:{name:"ProjectDetail",params:{id:"MyPortfolio"}},class:"portfolio__item"},{default:(0,a.w5)((()=>[K])),_:1})])])])}var X={name:"TheHome"};const $=(0,b.Z)(X,[["render",Y],["__scopeId","data-v-8c450402"]]);var tt=$;const et=t=>((0,a.dD)("data-v-208edd90"),t=t(),(0,a.Cn)(),t),ot={key:0},it={class:"intro"},at={class:"section__title section__title--intro"},nt={class:"section__subtitle section__subtitle--intro"},st=["src"],rt={class:"portfolio-item-individual"},lt=["innerHTML"],ct=["innerHTML"],pt=["src"],dt=["innerHTML"],ut=["innerHTML"],gt=["innerHTML"],ft=["href"],mt=et((()=>(0,a._)("i",{class:"fa-solid fa-link"},null,-1))),ht=["href"],vt=et((()=>(0,a._)("i",{class:"fa-brands fa-github"},null,-1)));function bt(t,e,o,i,n,r){return i.project?((0,a.wg)(),(0,a.iD)("div",ot,[(0,a._)("section",it,[(0,a._)("h1",at,[(0,a.Uk)((0,s.zw)(i.project.title1)+" ",1),(0,a._)("strong",null,(0,s.zw)(i.project.title2),1)]),(0,a._)("p",nt,(0,s.zw)(i.project.subtitle),1),(0,a._)("img",{src:i.project.img1,alt:"",class:"intro__img"},null,8,st)]),(0,a._)("div",rt,[(0,a._)("p",{innerHTML:i.project.description1},null,8,lt),(0,a._)("p",{innerHTML:i.project.description2},null,8,ct),(0,a._)("img",{src:i.project.img2,alt:""},null,8,pt),(0,a._)("p",{innerHTML:i.project.description3},null,8,dt),(0,a._)("p",{innerHTML:i.project.description4},null,8,ut),(0,a._)("p",{innerHTML:i.project.description5},null,8,gt),(0,a._)("p",null,[(0,a.Uk)("To explore the project, visit the "),(0,a._)("a",{href:i.project.urlProj,target:"_blank"},[(0,a._)("strong",null,(0,s.zw)(i.project.title1),1),(0,a.Uk)(),mt],8,ft),(0,a.Uk)(" website. ")]),(0,a._)("p",null,[(0,a.Uk)("For a deeper look into the project's codebase, you can check out the "),(0,a._)("a",{href:i.project.urlGitHub,target:"_blank"},[vt,(0,a.Uk)(" GitHub repository.")],8,ht)])])])):(0,a.kq)("",!0)}var _t=[{id:"2Care",title1:"2Care",title2:"Final project @LeWagon",subtitle:"Keeping Families Informed",img1:o(9697),img2:o(2580),urlProj:"https://app-2care-7e485396212c.herokuapp.com/",urlGitHub:"https://github.com/AntQua/app-2care",description1:"<strong>2Care</strong> is the final project of my Web Development bootcamp at LeWagon, Lisbon, finished in 8th September 2023. It was a collaborative effort by a team of four dedicated student finalists.",description2:'Want to have some fun? Check the <a href="https://www.youtube.com/watch?v=TtFWVkDVefA" target="_blank">project video presentation</a> (from minute 13) at Le Wagon Lisbon Demo Day, in the 8th of September 2023.',description3:"<strong>2Care</strong> is a web application designed to bridge the communication gap between elderly care homes and the families of their residents. It specifically caters to elderly homes and families with loved ones residing in such facilities.",description4:"The app offers a unique solution, enabling elderly care homes to monitor the well-being of their residents and share this vital information with registered family members via email notifications.",description5:"<strong>2Care</strong> was built using the Ruby on Rails framework and deployed on <strong>Heroku</strong>. The email functionality was implemented using <strong>SendGrid</strong>. The app's design was meticulously crafted with <strong>Figma</strong>."},{id:"Botanika",title1:"Botanika",title2:"Individual project",subtitle:"e-commerce web app",img1:o(4622),img2:o(971),urlProj:"https://cloud462022.azurewebsites.net/",urlGitHub:"https://github.com/AntQua/Botanika",description1:"<strong>Botanika</strong>  is my final project of the Software Development Academy at Rumos, Lisbon, finished in May 2022.",description2:"<strong>Botanika</strong>  is a cloud software solution for gardenig enthusiasts which includes the online sale of flowers, plants and products for their cultivation.",description3:"<p><strong>Environment and used Tools:</strong></p> <ul>             <li>Windows 10 and Visual Studio 2019</li> <li>SQL Server 2019 Express – used for storing and administering information in the relational database tables during project development phase. After deployment to the cloud is used the Azure SQL database.</li> <li>Entity Framework Core – Tool to perform the relational mapping between entities and tables the database.</li> <li>Bootstrap v4.3.1 – HTML, CSS and JS library used to simplify the development of web pages (Views).</li> </ul>",description4:" <p><strong>Architecture solution:</strong>  Template used - ASP.Net Core MVC .Net 5.0 Framework.</p> <p><strong>Authentication and Authorization: </strong>  ASP .NetCore Identity API.</p><p><strong>The Admin / BackOffice Area: </strong></p><ul><li>To accommodate this part of the project we use the concept of Areas permitted by ASP.Net Core MVC to partition applications into  units that are referred to as areas.</li> <li>This area also has access to the data layer through the Repository.</li> <li>To access this Area, the creation of Roles and Users was implemented and assigning the user to the profile. A service has been implemented to create profiles or roles: Admin and Member.<li> </ul>",description5:"<p><strong>Azure Resources:</strong></p> <ul><li>Azure App Service - Is an HTTP-based service to host the generated web application for this project.</li> <li>SQL database - Azure SQL Database is based on SQL Server and provides the core functionality relational data required for the project, namely products, categories and orders of customers.</li> <li>Storage account - The images are stored in several Containers provided by the blob service of Storage account. The use of this resource is used in the Backoffice of our application for management of the images used and supplying them to the application.</li> <li>Resourse Group - All the aforementioned Azure services are hosted in a Resource Exclusive group for this project that acts as a repository for administration thereof.</li> </ul> <p><strong>Version Control:</strong> Azure DevOps server. </p> <p><strong>CI-CD Solution:</strong> Deployments through Azure DevOps server </p>"},{id:"MyPortfolio",title1:"My Portfolio",title2:"Individual project",subtitle:"My Portfolio in Vue 3",img1:o(8284),img2:o(1627),urlProj:"https://antqua.github.io/MyPortfolio/",urlGitHub:"https://github.com/AntQua/my-portfolio-vue",description1:"<strong>My Portfolio</strong> is my first project developed using the Vue 3 framework.",description2:"This portfolio website showcases my journey and skills as a junior developer.",description3:"Having learned Vue 3 recently, I decided to transition my portfolio, which was originally built using HTML, CSS, and JavaScript, to this modern and dynamic framework.",description4:"The design and functionality remain consistent with my original portfolio, offering a seamless user experience.",description5:"This project was built using the <strong>Vue 3</strong> framework and deployed on <strong>GitHub Pages</strong>"},{id:"Portfolio",title1:"Cera's Portfolio",title2:"Group project",subtitle:"Cera Kocher Portfolio",img1:o(9134),img2:o(7277),urlProj:"https://antqua.github.io/brainnest-portfolio/",urlGitHub:"https://github.com/AntQua/brainnest-portfolio",description1:"<strong>Cera's Portfolio</strong> is a group project (team of 4) for the Brainnest Frontend Development Advanced Industry Training program, between February and May 2023.",description2:"",description3:"<strong>Cera's Portfolio</strong> is a single page who displays the profile and work of the creative director, designer and photographer Cera Kosher, one of my colleagues in the program.",description4:"",description5:"This project was built using only <strong>HTML</strong>, <strong>CSS</strong> and <strong>JavaScript</strong> and deployed on <strong>GitHub Pages</strong>"},{id:"SandSpot",title1:"SandSpot",title2:"Group project @LeWagon ",subtitle:"book your place in the sand",img1:o(5614),img2:o(9518),urlProj:"https://whispering-meadow-11582-97e69ce26db6.herokuapp.com/",urlGitHub:"https://github.com/AntQua/sandspot",description1:"<strong>SandSpot</strong>  is a group project of my Web Development bootcamp at LeWagon, Lisbon, finished in 8th September 2023. It was a collaborative effort by a team of four dedicated students at the bootcamp.",description2:"<strong>SandSpot</strong>  is a web application designed to find beaches all arround the world and book a place in the sand.",description3:"The app offers 3 booking options for any beach available.",description4:"",description5:"<strong>SandSpot</strong> was built using the <strong>Ruby on Rails</strong>  framework and deployed on <strong>Heroku</strong>. The app's design was crafted with <strong>Figma</strong>."},{id:"Whatchlist",title1:"Whatchlist",title2:"Solo project @LeWagon",subtitle:"movies list by category",img1:o(7483),img2:o(4018),urlProj:"https://antqua-movies-289be53429bf.herokuapp.com/",urlGitHub:"https://github.com/AntQua/rails-watch-list",description1:"<strong>Watchlist</strong> is a individual project of my Web Development bootcamp at LeWagon, Lisbon, finished in 8th September 2023.",description2:"",description3:"<strong>Watchlist</strong> is a web application designed to create movies categories and for each category create a personal movies list.",description4:"",description5:"<strong>Watchlist</strong> was built using the <strong>Ruby on Rails</strong>  framework and deployed on <strong>Heroku</strong>. The app's images are stored on <strong>Cloudinary</strong>."}],wt={name:"ProjectDetail",props:{id:{type:String,required:!0}},setup(t){const e=(0,m.iH)(null);function o(){(0,a.Y3)((()=>{window.scrollTo(0,0)}))}return(0,a.YP)((()=>t.id),(t=>{e.value=_t.find((e=>e.id===t)),o()}),{immediate:!0}),{project:e}}};const yt=(0,b.Z)(wt,[["render",bt],["__scopeId","data-v-208edd90"]]);var kt=yt;const jt=(0,h.p7)({history:(0,h.PO)(),routes:[{path:"/",name:"Home",component:tt},{path:"/project/:id",name:"ProjectDetail",component:kt,props:!0}]});var St=jt;const Tt=(0,i.ri)(L);Tt.use(St),Tt.mount("#app")},2580:function(t,e,o){t.exports=o.p+"img/2Care-details.6eb6c58d.png"},9697:function(t,e,o){t.exports=o.p+"img/2Care.65178ed8.png"},971:function(t,e,o){t.exports=o.p+"img/Botanika-details.9283f8f8.png"},4622:function(t,e,o){t.exports=o.p+"img/Botanika.70c208cd.png"},1627:function(t,e,o){t.exports=o.p+"img/MyPortfolio-details.a35499e5.png"},8284:function(t,e,o){t.exports=o.p+"img/MyPortfolio.9a646eb5.png"},7277:function(t,e,o){t.exports=o.p+"img/Portfolio-details.9d6fec7a.png"},9134:function(t,e,o){t.exports=o.p+"img/Portfolio.2d2fde32.png"},9518:function(t,e,o){t.exports=o.p+"img/SandSpot-details.3f2fb47d.png"},5614:function(t,e,o){t.exports=o.p+"img/SandSpot.756dfa08.png"},4018:function(t,e,o){t.exports=o.p+"img/Watchlist-details.0291b50a.png"},7483:function(t,e,o){t.exports=o.p+"img/Watchlist.83ff6c7c.png"}},e={};function o(i){var a=e[i];if(void 0!==a)return a.exports;var n=e[i]={exports:{}};return t[i].call(n.exports,n,n.exports,o),n.exports}o.m=t,function(){var t=[];o.O=function(e,i,a,n){if(!i){var s=1/0;for(p=0;p<t.length;p++){i=t[p][0],a=t[p][1],n=t[p][2];for(var r=!0,l=0;l<i.length;l++)(!1&n||s>=n)&&Object.keys(o.O).every((function(t){return o.O[t](i[l])}))?i.splice(l--,1):(r=!1,n<s&&(s=n));if(r){t.splice(p--,1);var c=a();void 0!==c&&(e=c)}}return e}n=n||0;for(var p=t.length;p>0&&t[p-1][2]>n;p--)t[p]=t[p-1];t[p]=[i,a,n]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.p="/my-portfolio-vue/"}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,i){var a,n,s=i[0],r=i[1],l=i[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(a in r)o.o(r,a)&&(o.m[a]=r[a]);if(l)var p=l(o)}for(e&&e(i);c<s.length;c++)n=s[c],o.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return o.O(p)},i=self["webpackChunkmy_portfolio_vue"]=self["webpackChunkmy_portfolio_vue"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=o.O(void 0,[998],(function(){return o(8413)}));i=o.O(i)})();
//# sourceMappingURL=app.eb0e9ce0.js.map