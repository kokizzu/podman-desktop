"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68833],{87981:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"classes/EventEmitter","title":"Class: EventEmitter\\\\<T\\\\>","description":"Defined in167","source":"@site/api/classes/EventEmitter.md","sourceDirName":"classes","slug":"/classes/EventEmitter","permalink":"/api/classes/EventEmitter","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"Disposable","permalink":"/api/classes/Disposable"},"next":{"title":"TelemetryTrustedValue","permalink":"/api/classes/TelemetryTrustedValue"}}');var r=n(62540),i=n(43023);const c={},d="Class: EventEmitter<T>",o={},l=[{value:"Type Parameters",id:"type-parameters",level:2},{value:"T",id:"t",level:3},{value:"Constructors",id:"constructors",level:2},{value:"Constructor",id:"constructor",level:3},{value:"Returns",id:"returns",level:4},{value:"Properties",id:"properties",level:2},{value:"event",id:"event",level:3},{value:"Methods",id:"methods",level:2},{value:"dispose()",id:"dispose",level:3},{value:"Returns",id:"returns-1",level:4},{value:"fire()",id:"fire",level:3},{value:"Parameters",id:"parameters",level:4},{value:"data",id:"data",level:5},{value:"Returns",id:"returns-2",level:4}];function a(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"class-eventemittert",children:"Class: EventEmitter<T>"})}),"\n",(0,r.jsxs)(s.p,{children:["Defined in: ",(0,r.jsx)(s.a,{href:"https://github.com/kokizzu/podman-desktop/blob/0847701a0b34f262a5286fc480ac5e7403c375be/packages/extension-api/src/extension-api.d.ts#L167",children:"packages/extension-api/src/extension-api.d.ts:167"})]}),"\n",(0,r.jsxs)(s.p,{children:["A class to create and manage an ",(0,r.jsx)(s.a,{href:"/api/interfaces/Event",children:"Event"})," for clients to subscribe to.\nThe emitter can only send one kind of event."]}),"\n",(0,r.jsx)(s.p,{children:"Use this class to send events inside extension or provide API to the other\nextensions."}),"\n",(0,r.jsx)(s.h2,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,r.jsx)(s.h3,{id:"t",children:"T"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"T"})}),"\n",(0,r.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsx)(s.h3,{id:"constructor",children:"Constructor"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"new EventEmitter"}),"<",(0,r.jsx)(s.code,{children:"T"}),">(): ",(0,r.jsx)(s.code,{children:"EventEmitter"}),"<",(0,r.jsx)(s.code,{children:"T"}),">"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"EventEmitter"}),"<",(0,r.jsx)(s.code,{children:"T"}),">"]}),"\n",(0,r.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(s.h3,{id:"event",children:"event"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"event"}),": ",(0,r.jsx)(s.a,{href:"/api/interfaces/Event",children:(0,r.jsx)(s.code,{children:"Event"})}),"<",(0,r.jsx)(s.code,{children:"T"}),">"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Defined in: ",(0,r.jsx)(s.a,{href:"https://github.com/kokizzu/podman-desktop/blob/0847701a0b34f262a5286fc480ac5e7403c375be/packages/extension-api/src/extension-api.d.ts#L171",children:"packages/extension-api/src/extension-api.d.ts:171"})]}),"\n",(0,r.jsx)(s.p,{children:"For the public to allow to subscribe to events from this Emitter"}),"\n",(0,r.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(s.h3,{id:"dispose",children:"dispose()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"dispose"}),"(): ",(0,r.jsx)(s.code,{children:"void"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Defined in: ",(0,r.jsx)(s.a,{href:"https://github.com/kokizzu/podman-desktop/blob/0847701a0b34f262a5286fc480ac5e7403c375be/packages/extension-api/src/extension-api.d.ts#L180",children:"packages/extension-api/src/extension-api.d.ts:180"})]}),"\n",(0,r.jsx)(s.p,{children:"Dispose by removing registered listeners"}),"\n",(0,r.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"void"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"fire",children:"fire()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"fire"}),"(",(0,r.jsx)(s.code,{children:"data"}),"): ",(0,r.jsx)(s.code,{children:"void"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Defined in: ",(0,r.jsx)(s.a,{href:"https://github.com/kokizzu/podman-desktop/blob/0847701a0b34f262a5286fc480ac5e7403c375be/packages/extension-api/src/extension-api.d.ts#L176",children:"packages/extension-api/src/extension-api.d.ts:176"})]}),"\n",(0,r.jsx)(s.p,{children:"To fire an event to the subscribers"}),"\n",(0,r.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(s.h5,{id:"data",children:"data"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"T"})}),"\n",(0,r.jsx)(s.p,{children:"The event to send to the registered listeners"}),"\n",(0,r.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"void"})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},43023:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>d});var t=n(63696);const r={},i=t.createContext(r);function c(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);