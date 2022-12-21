"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7251],{5318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8402:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(2685),r=(n(7378),n(5318));const a={title:"Build & run Podman Desktop in a DevContainer",description:"Develop Podman Desktop using a DevContainer locally or using GitHub Codespaces.",slug:"develop-using-devcontainer",authors:["benoitf"],tags:["podman-desktop","devcontainer","codespaces"],hide_table_of_contents:!1},i=void 0,l={permalink:"/blog/develop-using-devcontainer",source:"@site/blog/2022-11-17-develop-podman-using-codespaces.md",title:"Build & run Podman Desktop in a DevContainer",description:"Develop Podman Desktop using a DevContainer locally or using GitHub Codespaces.",date:"2022-11-17T00:00:00.000Z",formattedDate:"November 17, 2022",tags:[{label:"podman-desktop",permalink:"/blog/tags/podman-desktop"},{label:"devcontainer",permalink:"/blog/tags/devcontainer"},{label:"codespaces",permalink:"/blog/tags/codespaces"}],readingTime:6.985,hasTruncateMarker:!0,authors:[{name:"Florent Benoit",title:"Maintainer of Podman Desktop",url:"https://github.com/benoitf",imageURL:"https://github.com/benoitf.png",key:"benoitf"}],frontMatter:{title:"Build & run Podman Desktop in a DevContainer",description:"Develop Podman Desktop using a DevContainer locally or using GitHub Codespaces.",slug:"develop-using-devcontainer",authors:["benoitf"],tags:["podman-desktop","devcontainer","codespaces"],hide_table_of_contents:!1},prevItem:{title:"Release Notes - Podman Desktop 0.10",permalink:"/blog/podman-desktop-release-0.10"}},s={authorsImageUrls:[void 0]},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"GitHub ",(0,r.kt)("a",{parentName:"p",href:"https://github.blog/changelog/2022-11-09-codespaces-for-free-and-pro-accounts/"},"announced last week")," that Codespaces is available for everyone and it includes free minutes."),(0,r.kt)("p",null,"Let see how we can use a ",(0,r.kt)("a",{parentName:"p",href:"https://containers.dev/"},"Development Container")," having all the tools to build and run Podman Desktop. The Development Container works locally using Visual Studio Code but in this blog post we will see how it works directly with a simple click from GitHub."),(0,r.kt)("p",null,"The challenges are to run a desktop tool (Podman Desktop) and running a container engine (Podman) inside this Development Container without using too many memory !"))}u.isMDXComponent=!0}}]);