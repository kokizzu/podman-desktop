"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[210],{5318:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>u});var o=n(7378);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},l=Object.keys(t);for(o=0;o<l.length;o++)n=l[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(o=0;o<l.length;o++)n=l[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var r=o.createContext({}),d=function(t){var e=o.useContext(r),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=d(t.components);return o.createElement(r.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,r=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=d(n),u=a,w=m["".concat(r,".").concat(u)]||m[u]||c[u]||l;return n?o.createElement(w,i(i({ref:e},p),{},{components:n})):o.createElement(w,i({ref:e},p))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var r in e)hasOwnProperty.call(e,r)&&(s[r]=e[r]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var d=2;d<l;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3700:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var o=n(5773),a=(n(7378),n(5318));const l={sidebar_position:3,title:"Installing Podman Desktop with Chocolatey",description:"Installing Podman Desktop on Windows with Chocolatey",tags:["podman-desktop","installing","windows","chocolatey"],keywords:["podman desktop","containers","podman","installing","installation","windows","chocolatey"]},i=void 0,s={unversionedId:"Installation/windows-install/installing-podman-desktop-with-chocolatey",id:"Installation/windows-install/installing-podman-desktop-with-chocolatey",title:"Installing Podman Desktop with Chocolatey",description:"Installing Podman Desktop on Windows with Chocolatey",source:"@site/docs/Installation/windows-install/installing-podman-desktop-with-chocolatey.md",sourceDirName:"Installation/windows-install",slug:"/Installation/windows-install/installing-podman-desktop-with-chocolatey",permalink:"/docs/Installation/windows-install/installing-podman-desktop-with-chocolatey",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/Installation/windows-install/installing-podman-desktop-with-chocolatey.md",tags:[{label:"podman-desktop",permalink:"/docs/tags/podman-desktop"},{label:"installing",permalink:"/docs/tags/installing"},{label:"windows",permalink:"/docs/tags/windows"},{label:"chocolatey",permalink:"/docs/tags/chocolatey"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Installing Podman Desktop with Chocolatey",description:"Installing Podman Desktop on Windows with Chocolatey",tags:["podman-desktop","installing","windows","chocolatey"],keywords:["podman desktop","containers","podman","installing","installation","windows","chocolatey"]},sidebar:"tutorialSidebar",previous:{title:"Installing Podman Desktop silently",permalink:"/docs/Installation/windows-install/installing-podman-desktop-silently-with-the-windows-installer"},next:{title:"Installing Podman Desktop with Scoop",permalink:"/docs/Installation/windows-install/installing-podman-desktop-with-scoop"}},r={},d=[{value:"Installing Podman Desktop on Windows with Chocolatey",id:"installing-podman-desktop-on-windows-with-chocolatey",level:2},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Additional resources",id:"additional-resources",level:4},{value:"Next steps",id:"next-steps",level:4}],p={toc:d};function c(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"installing-podman-desktop-on-windows-with-chocolatey"},"Installing Podman Desktop on Windows with Chocolatey"),(0,a.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://chocolatey.org/install"},"Chocolatey package manager"))),(0,a.kt)("h4",{id:"procedure"},"Procedure"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Run the command from the command line or from PowerShell:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"choco install podman-desktop\n")))),(0,a.kt)("h4",{id:"additional-resources"},"Additional resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://community.chocolatey.org/packages/podman-desktop"},"Podman Desktop Chocolatey package"))),(0,a.kt)("h4",{id:"next-steps"},"Next steps"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"installing-podman-with-podman-desktop"},"Installing Podman")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/getting-started/getting-started"},"Getting Started with Podman Desktop"))))}c.isMDXComponent=!0}}]);