import{r as l,j as e,L as z,a as X}from"./main-DgZ44m1q.js";const d={className:"font-poppins"};const J=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Z=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,s,a)=>a?a.toUpperCase():s.toLowerCase()),$=t=>{const n=Z(t);return n.charAt(0).toUpperCase()+n.slice(1)},H=(...t)=>t.filter((n,s,a)=>!!n&&n.trim()!==""&&a.indexOf(n)===s).join(" ").trim(),ee=t=>{for(const n in t)if(n.startsWith("aria-")||n==="role"||n==="title")return!0};var te={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const ne=l.forwardRef(({color:t="currentColor",size:n=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:i="",children:o,iconNode:h,...m},u)=>l.createElement("svg",{ref:u,...te,width:n,height:n,stroke:t,strokeWidth:a?Number(s)*24/Number(n):s,className:H("lucide",i),...!o&&!ee(m)&&{"aria-hidden":"true"},...m},[...h.map(([r,x])=>l.createElement(r,x)),...Array.isArray(o)?o:[o]]));const q=(t,n)=>{const s=l.forwardRef(({className:a,...i},o)=>l.createElement(ne,{ref:o,iconNode:n,className:H(`lucide-${J($(t))}`,`lucide-${t}`,a),...i}));return s.displayName=$(t),s};const ae=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],se=q("menu",ae);const le=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ie=q("x",le);function oe(){const[t,n]=l.useState(!1),s=[{href:"/",label:"Home"},{href:"#about",label:"About"},{href:"#skills",label:"Skills"},{href:"#projects",label:"Projects"},{href:"#services",label:"Services"},{href:"#contact",label:"Contact"}],a=[{href:"https://www.linkedin.com/in/aliyark145",label:"in"},{href:"https://www.facebook.com/profile.php?id=100093610579694",label:"fb"},{href:"https://x.com/Mr_Programmer14",label:"X"}];return e.jsxs("nav",{className:"bg-black text-white",children:[e.jsxs("div",{className:"hidden md:flex min-w-[1110px] h-20 bg-[#1B1B1B] justify-between rounded-b-lg items-center space-x-12 py-4 px-8 mx-auto",children:[e.jsx("div",{className:"flex space-x-6",children:s.map(i=>e.jsx(z,{to:i.href,className:`${d.className} font-normal text-[14px] text-[#9C9C9C]`,children:i.label},i.label))}),e.jsx("div",{className:"flex space-x-4",children:a.map(i=>e.jsx("a",{href:i.href,target:"_blank",className:`${d.className} font-normal text-[14px] text-[#9C9C9C]`,children:i.label},i.label))})]}),e.jsxs("div",{className:"md:hidden flex justify-between items-center h-16 px-4",children:[e.jsx("button",{onClick:()=>n(!0),"aria-label":"Open Menu",children:e.jsx(se,{className:"w-6 h-6 text-white"})}),e.jsx("div",{className:"flex space-x-4",children:a.map(i=>e.jsx("a",{href:i.href,target:"_blank",onClick:()=>n(!1),className:`${d.className} font-normal text-[16px] text-[#9C9C9C] hover:text-white`,children:i.label},i.label))})]}),e.jsxs("div",{className:`fixed inset-y-0 left-0 w-64 bg-[#1B1B1B] transform ${t?"translate-x-0":"-translate-x-full"} transition-transform duration-300 ease-in-out z-50`,children:[e.jsxs("div",{className:"flex justify-between items-center p-4 border-b border-gray-700",children:[e.jsx("span",{className:`${d.className} text-white text-lg font-semibold`,children:"Navigation"}),e.jsx("button",{onClick:()=>n(!1),"aria-label":"Close Menu",children:e.jsx(ie,{className:"w-6 h-6 text-white"})})]}),e.jsx("div",{className:"flex flex-col space-y-4 p-6",children:s.map(i=>e.jsx(z,{to:i.href,onClick:()=>n(!1),className:`${d.className} font-normal text-[16px] text-[#9C9C9C] hover:text-white`,children:i.label},i.label))})]}),t&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-40",onClick:()=>n(!1)})]})}var k=function(t,n){return k=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,a){s.__proto__=a}||function(s,a){for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(s[i]=a[i])},k(t,n)};function y(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");k(t,n);function s(){this.constructor=t}t.prototype=n===null?Object.create(n):(s.prototype=n.prototype,new s)}var b=function(){return b=Object.assign||function(n){for(var s,a=1,i=arguments.length;a<i;a++){s=arguments[a];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(n[o]=s[o])}return n},b.apply(this,arguments)};function re(t,n){n===void 0&&(n={});var s=n.insertAt;if(!(typeof document>"u")){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",s==="top"&&a.firstChild?a.insertBefore(i,a.firstChild):a.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}var ce=`/*
  code is extracted from Calendly's embed stylesheet: https://assets.calendly.com/assets/external/widget.css
*/

.calendly-inline-widget,
.calendly-inline-widget *,
.calendly-badge-widget,
.calendly-badge-widget *,
.calendly-overlay,
.calendly-overlay * {
  font-size: 16px;
  line-height: 1.2em;
}

.calendly-inline-widget {
  min-width: 320px;
  height: 630px;
}

.calendly-inline-widget iframe,
.calendly-badge-widget iframe,
.calendly-overlay iframe {
  display: inline;
  width: 100%;
  height: 100%;
}

.calendly-popup-content {
  position: relative;
}

.calendly-popup-content.calendly-mobile {
  -webkit-overflow-scrolling: touch;
  overflow-y: auto;
}

.calendly-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 9999;
  background-color: #a5a5a5;
  background-color: rgba(31, 31, 31, 0.4);
}

.calendly-overlay .calendly-close-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.calendly-overlay .calendly-popup {
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translateY(-50%) translateX(-50%);
  transform: translateY(-50%) translateX(-50%);
  width: 80%;
  min-width: 900px;
  max-width: 1000px;
  height: 90%;
  max-height: 680px;
}

@media (max-width: 975px) {
  .calendly-overlay .calendly-popup {
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transform: none;
    transform: none;
    width: 100%;
    height: auto;
    min-width: 0;
    max-height: none;
  }
}

.calendly-overlay .calendly-popup .calendly-popup-content {
  height: 100%;
}

.calendly-overlay .calendly-popup-close {
  position: absolute;
  top: 25px;
  right: 25px;
  color: #fff;
  width: 19px;
  height: 19px;
  cursor: pointer;
  background: url(https://assets.calendly.com/assets/external/close-icon.svg)
    no-repeat;
  background-size: contain;
}

@media (max-width: 975px) {
  .calendly-overlay .calendly-popup-close {
    top: 15px;
    right: 15px;
  }
}

.calendly-badge-widget {
  position: fixed;
  right: 20px;
  bottom: 15px;
  z-index: 9998;
}

.calendly-badge-widget .calendly-badge-content {
  display: table-cell;
  width: auto;
  height: 45px;
  padding: 0 30px;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.25) 0 2px 5px;
  font-family: sans-serif;
  text-align: center;
  vertical-align: middle;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
}

.calendly-badge-widget .calendly-badge-content.calendly-white {
  color: #666a73;
}

.calendly-badge-widget .calendly-badge-content span {
  display: block;
  font-size: 12px;
}

.calendly-spinner {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  text-align: center;
  z-index: -1;
}

.calendly-spinner > div {
  display: inline-block;
  width: 18px;
  height: 18px;
  background-color: #e1e1e1;
  border-radius: 50%;
  vertical-align: middle;
  -webkit-animation: calendly-bouncedelay 1.4s infinite ease-in-out;
  animation: calendly-bouncedelay 1.4s infinite ease-in-out;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.calendly-spinner .calendly-bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.calendly-spinner .calendly-bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes calendly-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes calendly-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
`;re(ce);function N(t){return t.charAt(0)==="#"?t.slice(1):t}function de(t){return t?.primaryColor&&(t.primaryColor=N(t.primaryColor)),t?.textColor&&(t.textColor=N(t.textColor)),t?.backgroundColor&&(t.backgroundColor=N(t.backgroundColor)),t}var U;(function(t){t.PROFILE_PAGE_VIEWED="calendly.profile_page_viewed",t.EVENT_TYPE_VIEWED="calendly.event_type_viewed",t.DATE_AND_TIME_SELECTED="calendly.date_and_time_selected",t.EVENT_SCHEDULED="calendly.event_scheduled",t.PAGE_HEIGHT="calendly.page_height"})(U||(U={}));var Y=function(t){var n=t.url,s=t.prefill,a=s===void 0?{}:s,i=t.pageSettings,o=i===void 0?{}:i,h=t.utm,m=h===void 0?{}:h,u=t.embedType,r=de(o),x=r.backgroundColor,p=r.hideEventTypeDetails,g=r.hideLandingPageDetails,c=r.primaryColor,f=r.textColor,v=r.hideGdprBanner,S=a.customAnswers,w=a.date,E=a.email,_=a.firstName,I=a.guests,A=a.lastName,T=a.location,P=a.name,R=m.utmCampaign,M=m.utmContent,L=m.utmMedium,D=m.utmSource,O=m.utmTerm,F=m.salesforce_uuid,j=n.indexOf("?"),B=j>-1,W=n.slice(j+1),V=B?n.slice(0,j):n,K=[B?W:null,x?"background_color=".concat(x):null,p?"hide_event_type_details=1":null,g?"hide_landing_page_details=1":null,c?"primary_color=".concat(c):null,f?"text_color=".concat(f):null,v?"hide_gdpr_banner=1":null,P?"name=".concat(encodeURIComponent(P)):null,T?"location=".concat(encodeURIComponent(T)):null,_?"first_name=".concat(encodeURIComponent(_)):null,A?"last_name=".concat(encodeURIComponent(A)):null,I?"guests=".concat(I.map(encodeURIComponent).join(",")):null,E?"email=".concat(encodeURIComponent(E)):null,w&&w instanceof Date?"date=".concat(me(w)):null,R?"utm_campaign=".concat(encodeURIComponent(R)):null,M?"utm_content=".concat(encodeURIComponent(M)):null,L?"utm_medium=".concat(encodeURIComponent(L)):null,D?"utm_source=".concat(encodeURIComponent(D)):null,O?"utm_term=".concat(encodeURIComponent(O)):null,F?"salesforce_uuid=".concat(encodeURIComponent(F)):null,u?"embed_type=".concat(u):null,"embed_domain=1"].concat(S?he(S):[]).filter(function(Q){return Q!==null}).join("&");return"".concat(V,"?").concat(K)},me=function(t){var n=t.getMonth()+1,s=t.getDate(),a=t.getFullYear();return[a,n<10?"0".concat(n):n,s<10?"0".concat(s):s].join("-")},pe=/^a\d{1,2}$/,he=function(t){var n=Object.keys(t).filter(function(s){return s.match(pe)});return n.length?n.map(function(s){return"".concat(s,"=").concat(encodeURIComponent(t[s]))}):[]},G=(function(t){y(n,t);function n(){return t!==null&&t.apply(this,arguments)||this}return n.prototype.render=function(){return l.createElement("div",{className:"calendly-spinner"},l.createElement("div",{className:"calendly-bounce1"}),l.createElement("div",{className:"calendly-bounce2"}),l.createElement("div",{className:"calendly-bounce3"}))},n})(l.Component),ue="calendly-inline-widget";(function(t){y(n,t);function n(s){var a=t.call(this,s)||this;return a.state={isLoading:!0},a.onLoad=a.onLoad.bind(a),a}return n.prototype.onLoad=function(){this.setState({isLoading:!1})},n.prototype.render=function(){var s=Y({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"Inline"}),a=this.props.LoadingSpinner||G;return l.createElement("div",{className:this.props.className||ue,style:this.props.styles||{}},this.state.isLoading&&l.createElement(a,null),l.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:s}))},n})(l.Component);var xe=(function(t){y(n,t);function n(s){var a=t.call(this,s)||this;return a.state={isLoading:!0},a.onLoad=a.onLoad.bind(a),a}return n.prototype.onLoad=function(){this.setState({isLoading:!1})},n.prototype.render=function(){var s=Y({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"Inline"}),a=this.props.LoadingSpinner||G;return l.createElement(l.Fragment,null,this.state.isLoading&&l.createElement(a,null),l.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:s}))},n})(l.Component),C=(function(t){if(!t.open)return null;if(!t.rootElement)throw new Error("[react-calendly]: PopupModal rootElement property cannot be undefined");return X.createPortal(l.createElement("div",{className:"calendly-overlay"},l.createElement("div",{onClick:t.onModalClose,className:"calendly-close-overlay"}),l.createElement("div",{className:"calendly-popup"},l.createElement("div",{className:"calendly-popup-content"},l.createElement(xe,b({},t)))),l.createElement("button",{className:"calendly-popup-close",onClick:t.onModalClose,"aria-label":"Close modal",style:{display:"block",border:"none",padding:0}})),t.rootElement)});(function(t){y(n,t);function n(s){var a=t.call(this,s)||this;return a.state={isOpen:!1},a.onClick=a.onClick.bind(a),a.onClose=a.onClose.bind(a),a}return n.prototype.onClick=function(s){s.preventDefault(),this.setState({isOpen:!0})},n.prototype.onClose=function(s){s.stopPropagation(),this.setState({isOpen:!1})},n.prototype.render=function(){return l.createElement(l.Fragment,null,l.createElement("button",{onClick:this.onClick,style:this.props.styles||{},className:this.props.className||""},this.props.text),l.createElement(C,b({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))},n})(l.Component);(function(t){y(n,t);function n(s){var a=t.call(this,s)||this;return a.state={isOpen:!1},a.onClick=a.onClick.bind(a),a.onClose=a.onClose.bind(a),a}return n.prototype.onClick=function(){this.setState({isOpen:!0})},n.prototype.onClose=function(s){s.stopPropagation(),this.setState({isOpen:!1})},n.prototype.render=function(){return l.createElement("div",{className:"calendly-badge-widget",onClick:this.onClick},l.createElement("div",{className:"calendly-badge-content",style:{background:this.props.color||"#00a2ff",color:this.props.textColor||"#ffffff"}},this.props.text||"Schedule time with me",this.props.branding&&l.createElement("span",null,"powered by Calendly")),l.createElement(C,b({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))},n})(l.Component);function ge({open:t,onClose:n}){const[s,a]=l.useState(null);return l.useEffect(()=>{a(document.getElementById("__next"))},[]),s?(console.log("popmodel"),e.jsx(C,{open:t,url:"https://calendly.com/aliyark145/30min",rootElement:document.getElementById("__next"),onModalClose:n})):null}function fe(){const[t,n]=l.useState(!1);return e.jsxs("section",{className:"w-full bg-black bg-grid-white/[0.05] relative text-white flex flex-col items-center px-6 sm:px-10 lg:px-20 py-16 lg:py-32 overflow-hidden",children:[e.jsx("div",{className:"absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"}),e.jsxs("div",{className:"relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-6xl gap-12",children:[e.jsxs("div",{className:"flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl",children:[e.jsx("h1",{className:`${d.className} text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400`,children:"Full-Stack Software Engineer building scalable SaaS & AI-powered products"}),e.jsx("p",{className:`mt-4 text-gray-400 text-base sm:text-lg ${d.className} font-normal`,children:"3+ years of experience building scalable SaaS platforms, mobile apps, and AI-powered solutions using MERN, Flutter, and Firebase."}),e.jsxs("div",{className:"flex flex-wrap gap-4 mt-6 justify-center lg:justify-start",children:[e.jsx("a",{href:"#projects",className:"bg-[#3F8E00] hover:bg-[#52a61a] text-white px-6 py-3 rounded-md font-semibold transition-colors duration-200",children:"View Projects"}),e.jsx("button",{onClick:()=>n(!0),className:"bg-transparent border border-[#3F8E00] text-[#3F8E00] hover:bg-[#3F8E00] hover:text-white px-6 py-3 rounded-md font-semibold transition-colors duration-200",children:"Hire Me"}),e.jsx("a",{href:"/Ali_Yar_Khan_Resume_latest.pdf",target:"_blank",className:"bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-md font-semibold transition-colors duration-200",children:"Download Resume"})]}),e.jsx(ge,{open:t,onClose:()=>n(!1)})]}),e.jsx("div",{className:"flex-shrink-0",children:e.jsx("img",{width:300,height:300,src:"/profile.jpg",alt:"Ali Yar Khan profile",className:"w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full object-cover shadow-lg"})})]})]})}function be(){return e.jsx("section",{id:"about",className:"py-16 bg-white px-8",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h2",{className:`${d.className} text-3xl font-bold text-[#080808] mb-6`,children:"About Me"}),e.jsxs("div",{className:"text-gray-600 text-lg space-y-4",children:[e.jsx("p",{children:"I’m a full-stack engineer with 4 years of experience building scalable SaaS platforms, AI-driven tools, and cross-platform mobile apps. I focus on clean architecture, performance, and solving real business problems."}),e.jsx("p",{children:"I have built and deployed a variety of products including SaaS platforms, comprehensive admin dashboards, and AI-powered automation tools. My experience spans working with agile startups, freelancing for global clients, and architectural design for production systems."}),e.jsx("p",{children:"Beyond just coding, I care about the business impact of my work—optimizing for high-performance user experiences, SEO, and maintainability."})]})]})})}function ye(){const t=[{category:"Frontend",skills:["React","Next.js","TanStack Router/Query","Tailwind CSS","Shadcn UI","TypeScript"]},{category:"Backend",skills:["Node.js","Express","NestJS","Firebase","Supabase","REST APIs"]},{category:"Mobile",skills:["Flutter","React Native"]},{category:"Databases",skills:["Firestore","MongoDB","PostgreSQL"]},{category:"AI & Automation",skills:["OpenAI API","LangChain","AI Tools Integration"]},{category:"DevOps & Tools",skills:["Git","CI/CD (Codemagic)","JIRA","Docker"]}];return e.jsx("section",{id:"skills",className:"py-16 bg-[#F9FAFB] px-8",children:e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsx("h2",{className:`${d.className} text-3xl font-bold text-[#080808] mb-10 text-center`,children:"Skills & Tech Stack"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:t.map((n,s)=>e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border border-gray-100",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4 text-[#080808]",children:n.category}),e.jsx("div",{className:"flex flex-wrap gap-2",children:n.skills.map(a=>e.jsx("span",{className:"px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium",children:a},a))})]},s))})]})})}function ve(){const t=[{name:"AI Tools Directory",problem:"Need a centralized platform to categorize and discover rapidly emerging AI tools.",whatIBuilt:"Built a scalable directory platform with dynamic filtering and admin control.",tech:"Next.js, Firebase, Tailwind",keyChallenges:"Scalable category architecture, optimizing search performance.",impact:"Improved discovery UX, scalable category-tool architecture, admin-friendly content management.",img:"/halal AI.jpg"},{name:"Anhar - Marketplace",problem:"Sellers needed a dedicated platform to list products like Etsy with a focus on ease of use.",whatIBuilt:"Multi-vendor marketplace with shop creation, product listing, and checkout flows.",tech:"TanStack, Supabase, Tailwind, SSR",keyChallenges:"Complex state management for multi-vendor carts, SEO optimization with SSR.",impact:"Improved SEO, scalable architecture handling multiple sellers and buyers.",img:"/anhar.png"},{name:"Artziii",problem:"Creators often lack the design skills to produce unique, high-quality visuals quickly.",whatIBuilt:"AI-driven design web application integrating OpenAI and custom models.",tech:"React, Node.js, OpenAI API",keyChallenges:"Real-time image generation latency, intuitive UI for non-technical users.",impact:"Empowered users to generate professional-quality visuals in clicks without design skills.",img:"/artziii.jpg"},{name:"Halal AI",problem:"Muslims find it difficult to quickly verify if food ingredients are Halal while shopping.",whatIBuilt:"Cross-platform mobile app scanning barcodes/ingredients to verify Halal status.",tech:"Flutter, Dart, OpenFoodFacts API",keyChallenges:"Accurate ingredient parsing and matching against Halal guidelines.",impact:"Reliable, quick verification tool simplifying daily shopping for the Muslim community.",img:"/halal AI.jpg"}];return e.jsx("section",{id:"projects",className:"py-20 bg-white px-8",children:e.jsxs("div",{className:"max-w-7xl mx-auto",children:[e.jsx("h2",{className:`${d.className} text-4xl font-bold text-[#080808] mb-16 text-center`,children:"Featured Projects"}),e.jsx("div",{className:"space-y-24",children:t.map((n,s)=>e.jsxs("div",{className:`flex flex-col ${s%2===0?"lg:flex-row":"lg:flex-row-reverse"} gap-12 items-center`,children:[e.jsx("div",{className:"w-full lg:w-1/2",children:e.jsxs("div",{className:"relative rounded-xl overflow-hidden shadow-2xl border border-gray-100 group",children:[e.jsx("img",{src:n.img,alt:n.name,className:"w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"}),e.jsx("div",{className:"absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"})]})}),e.jsxs("div",{className:"w-full lg:w-1/2 space-y-6",children:[e.jsx("h3",{className:"text-3xl font-bold text-[#080808]",children:n.name}),e.jsx("p",{className:"text-xl text-gray-700 font-medium leading-relaxed",children:n.whatIBuilt}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 text-sm bg-gray-50 p-6 rounded-lg border border-gray-100",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"block font-bold text-gray-900 uppercase tracking-wide text-xs",children:"Problem"}),e.jsx("span",{className:"block text-gray-600 leading-snug",children:n.problem})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"block font-bold text-gray-900 uppercase tracking-wide text-xs",children:"Tech Stack"}),e.jsx("span",{className:"block text-gray-600 leading-snug font-mono text-xs",children:n.tech})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"block font-bold text-gray-900 uppercase tracking-wide text-xs",children:"Impact"}),e.jsx("span",{className:"block text-gray-600 leading-snug",children:n.impact})]})]})]})]},s))})]})})}function we(){return e.jsx("section",{id:"case-studies",className:"py-16 bg-[#F9FAFB] px-8",children:e.jsxs("div",{className:"max-w-5xl mx-auto",children:[e.jsx("h2",{className:`${d.className} text-3xl font-bold text-[#080808] mb-12 text-center`,children:"Case Studies: Deep Dive"}),e.jsxs("div",{className:"mb-16",children:[e.jsx("h3",{className:"text-2xl font-bold text-[#080808] mb-4",children:"Anhar Marketplace"}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[e.jsxs("div",{className:"col-span-1 md:col-span-1",children:[e.jsx("h4",{className:"font-bold text-lg mb-2",children:"The Problem"}),e.jsx("p",{className:"text-gray-600 text-sm",children:"Existing marketplace solutions were either too generic or lacked specific multi-vendor capabilities needed for this niche. The client needed a scalable, SEO-friendly platform where individual sellers could manage their own customized shops."})]}),e.jsxs("div",{className:"col-span-1 md:col-span-1",children:[e.jsx("h4",{className:"font-bold text-lg mb-2",children:"The Solution"}),e.jsx("p",{className:"text-gray-600 text-sm",children:"Architected a multi-tenant capability using Supabase Row Level Security (RLS) to isolate seller data. Built the frontend with TanStack Router/Start for SSR to ensure high search engine visibility and fast initial loads."})]}),e.jsxs("div",{className:"col-span-1 md:col-span-1",children:[e.jsx("h4",{className:"font-bold text-lg mb-2",children:"Results"}),e.jsx("p",{className:"text-gray-600 text-sm",children:"Reduced page load time by 40% using SSR. Successfully handled 500+ product listings during beta testing with zero database bottlenecks."})]})]}),e.jsxs("div",{className:"mt-8 pt-8 border-t border-gray-100",children:[e.jsx("h4",{className:"font-bold text-lg mb-3",children:"Architecture & Trade-offs"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-600 text-sm space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Decision:"})," Used Supabase for backend-as-a-service."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Trade-off:"})," sacrificed some custom backend flexibility for development speed and built-in auth/database features. Mitigated by using Edge Functions for complex logic."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Decision:"})," TanStack Query for state management."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Benefit:"})," drastically simplified server-state synchronization and caching, reducing boilerplate code."]})]})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-2xl font-bold text-[#080808] mb-4",children:"Artziii AI Design Tool"}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[e.jsxs("div",{className:"col-span-1 md:col-span-1",children:[e.jsx("h4",{className:"font-bold text-lg mb-2",children:"The Problem"}),e.jsx("p",{className:"text-gray-600 text-sm",children:"Users wanted to generate specific styles of artwork (e.g., anime, oil painting) but found general prompts in ChatGPT too inconsistent."})]}),e.jsxs("div",{className:"col-span-1 md:col-span-1",children:[e.jsx("h4",{className:"font-bold text-lg mb-2",children:"The Solution"}),e.jsx("p",{className:"text-gray-600 text-sm",children:'Built a "Models Lab" abstraction layer that pre-processes user intents into optimized prompts and selects the best fine-tuned model for the job.'})]}),e.jsxs("div",{className:"col-span-1 md:col-span-1",children:[e.jsx("h4",{className:"font-bold text-lg mb-2",children:"Results"}),e.jsx("p",{className:"text-gray-600 text-sm",children:"Increased user retention by 25% due to higher quality, consistent outputs. Reduced API costs by caching common generation requests."})]})]}),e.jsxs("div",{className:"mt-8 pt-8 border-t border-gray-100",children:[e.jsx("h4",{className:"font-bold text-lg mb-3",children:"Architecture & Trade-offs"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-600 text-sm space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Decision:"})," Serverless architecture for API handling."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Trade-off:"})," Cold starts were initially an issue. Solved by implementing keep-warm strategies during peak hours."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Complex State:"})," Managed heavy canvas-like state in React, optimizing re-renders to ensure a smooth 60fps experience while manipulating images."]})]})]})]})]})]})})}function je(){const t=[{title:"SaaS MVP Development",desc:"Rapidly build and launch scalable MVPs for startups using Next.js and Supabase/Firebase. From concept to production-ready deployment."},{title:"Custom Admin Dashboards",desc:"Data-heavy interior tools and admin panels with complex filtering, charts, and role-based access control."},{title:"AI Integration & Automation",desc:"Integrate LLMs (OpenAI, Anthropic) into existing workflows to build chatbots, content generators, or automated reasoning agents."},{title:"Cross-Platform Mobile Apps",desc:"High-performance mobile applications for iOS and Android using Flutter or React Native with a single codebase."}];return e.jsx("section",{id:"services",className:"py-16 bg-white px-8",children:e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsx("h2",{className:`${d.className} text-3xl font-bold text-[#080808] mb-12 text-center`,children:"What I Can Build For You"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:t.map((n,s)=>e.jsxs("div",{className:"p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow",children:[e.jsx("h3",{className:"text-xl font-bold text-[#080808] mb-3",children:n.title}),e.jsx("p",{className:"text-gray-600 text-sm leading-relaxed",children:n.desc})]},s))})]})})}function Ne(){const t=[{profilePic:"/krystle.webp",name:"Krystle Wright",text:`Hiring Ali was one of the best decisions of my life!! 
      He is incredible at coding and also front end design, making my vision come to life!! 
      He is a great man, a kind man and so generous :) 
      So polite and willing to do anything to make it all happen. Really smart!! 
      I highly recommend Ali for any and all App creation!! Thanks so much Ali!!! 
      I look forward to working with you for years and years :)`},{profilePic:"/placeholder.png",name:"Andrew",text:"he delivered exactly the app, as I wanted. Planing the next milestones with him right now."}];return e.jsx("section",{id:"testimonials",className:"bg-black text-white px-8 py-16 min-h-[804px]",children:e.jsxs("div",{className:"max-w-5xl mx-auto",children:[e.jsx("h2",{className:"text-3xl font-bold text-center",children:"Testimonials"}),e.jsx("div",{className:"grid md:grid-cols-2 gap-8 mt-10",children:t.map((n,s)=>e.jsxs("div",{className:"p-6 bg-gray-900 rounded-lg shadow-md border border-gray-800 space-y-2",children:[e.jsxs("div",{className:"flex flex-row space-x-4",children:[e.jsx("img",{width:50,height:50,src:n.profilePic,alt:"profile",className:"w-[50px] h-[50px] rounded-full object-cover"}),e.jsx("p",{className:"mt-4 font-semibold",children:n.name})]}),e.jsx("p",{className:"text-gray-300",children:n.text})]},s))})]})})}function ke(){const[t,n]=l.useState({name:"",email:"",mobile:"",message:"",attachment:null}),[s,a]=l.useState({}),[i,o]=l.useState(!1),[h,m]=l.useState(!1),u=()=>{const p={};return t.name.trim()||(p.name="Name is required"),t.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email)||(p.email="Invalid email format"):p.email="Email is required",t.message.trim()||(p.message="Message is required"),p},r=p=>{const{name:g,value:c,files:f}=p.target;n(v=>({...v,[g]:f?f[0]:c}))},x=async p=>{p.preventDefault();const g=u();if(a(g),!(Object.keys(g).length>0)){o(!0);try{const c=new FormData;if(c.append("name",t.name),c.append("email",t.email),c.append("mobile",t.mobile),c.append("message",t.message),t.attachment&&c.append("attachment",t.attachment),!(await fetch("/api/contact",{method:"POST",body:c})).ok)throw new Error("Failed to send");m(!0)}catch(c){console.error(c),o(!1)}}};return h?e.jsx("section",{id:"contact",className:"bg-black text-white px-8 py-16 min-h-[604px]",children:e.jsx("p",{className:"text-green-600 text-center mt-8",children:"✅ Thanks! Your message was sent."})}):e.jsx("section",{id:"contact",className:"bg-black text-white px-8 py-16 min-h-[604px]",children:e.jsxs("div",{className:"max-w-5xl mx-auto",children:[e.jsx("h2",{className:"text-3xl font-bold text-center",children:"Get In Touch"}),e.jsx("p",{className:`mx-auto mt-4 text-gray-400 text-[14px] ${d.className} font-normal max-w-md text-center`,children:"Interested in working together? Fill out the form below or connect with me on social media."}),e.jsxs("div",{className:"flex justify-center gap-6 mt-6",children:[e.jsx("a",{href:"https://github.com/AliYar-Khan",target:"_blank",className:"text-white hover:text-gray-400 font-bold underline",children:"GitHub"}),e.jsx("a",{href:"https://www.linkedin.com/in/aliyark145",target:"_blank",className:"text-white hover:text-gray-400 font-bold underline",children:"LinkedIn"}),e.jsx("a",{href:"/resume.pdf",target:"_blank",className:"text-white hover:text-gray-400 font-bold underline",children:"Download Resume"})]}),e.jsxs("form",{onSubmit:x,method:"POST",encType:"multipart/form-data",className:"max-w-lg mx-auto mt-8 space-y-4",children:[e.jsxs("div",{children:[e.jsx("input",{type:"text",name:"name",placeholder:"Please enter your name",className:"w-full p-3 rounded-md text-black bg-white",onChange:r,value:t.name}),s.name&&e.jsx("p",{className:"text-red-500 text-sm",children:s.name})]}),e.jsxs("div",{children:[e.jsx("input",{type:"email",name:"email",placeholder:"Please enter your email",className:"w-full p-3 rounded-md text-black bg-white",onChange:r,value:t.email}),s.email&&e.jsx("p",{className:"text-red-500 text-sm",children:s.email})]}),e.jsx("input",{type:"text",name:"mobile",placeholder:"Enter mobile",className:"w-full p-3 rounded-md text-black bg-white",onChange:r,value:t.mobile}),e.jsxs("div",{children:[e.jsx("textarea",{name:"message",placeholder:"Tell us about your goals, timeline, or any specific requirements.",rows:10,className:"w-full p-3 rounded-md text-black bg-white",onChange:r,value:t.message}),s.message&&e.jsx("p",{className:"text-red-500 text-sm",children:s.message})]}),e.jsx("input",{type:"file",name:"attachment",accept:"image/*,application/pdf",className:"w-full p-3 rounded-md text-black bg-white",onChange:r}),e.jsx("button",{type:"submit",className:`w-full bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md font-semibold ${i?"bg-gray-400 cursor-not-allowed":"bg-green-600 hover:bg-green-700"}`,children:i?"Submitting…":"Submit →"})]})]})})}function Se(){return e.jsxs("div",{className:"flex flex-col",children:[e.jsx(oe,{}),e.jsx(fe,{}),e.jsx(be,{}),e.jsx(ye,{}),e.jsx(ve,{}),e.jsx(we,{}),e.jsx(je,{}),e.jsx(Ne,{}),e.jsx(ke,{}),e.jsxs("footer",{className:"text-center py-6 text-sm bg-black text-white",children:["Made with ❤️",e.jsx("br",{}),"© 2025 All rights reserved by Ali Yar Khan"]})]})}export{Se as component};
