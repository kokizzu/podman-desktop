"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75315],{51095:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"interfaces/ContainerEngineInfo","title":"Interface: ContainerEngineInfo","description":"Defined in3663","source":"@site/api/interfaces/ContainerEngineInfo.md","sourceDirName":"interfaces","slug":"/interfaces/ContainerEngineInfo","permalink":"/api/interfaces/ContainerEngineInfo","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"ContainerCreateResult","permalink":"/api/interfaces/ContainerCreateResult"},"next":{"title":"ContainerInfo","permalink":"/api/interfaces/ContainerInfo"}}');var o=i(62540),c=i(43023);const t={},r="Interface: ContainerEngineInfo",a={},d=[{value:"Properties",id:"properties",level:2},{value:"cpuIdle?",id:"cpuidle",level:3},{value:"cpus?",id:"cpus",level:3},{value:"diskSize?",id:"disksize",level:3},{value:"diskUsed?",id:"diskused",level:3},{value:"engineId",id:"engineid",level:3},{value:"engineName",id:"enginename",level:3},{value:"engineType",id:"enginetype",level:3},{value:"memory?",id:"memory",level:3},{value:"memoryUsed?",id:"memoryused",level:3}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"interface-containerengineinfo",children:"Interface: ContainerEngineInfo"})}),"\n",(0,o.jsxs)(n.p,{children:["Defined in: ",(0,o.jsx)(n.a,{href:"https://github.com/kokizzu/podman-desktop/blob/0847701a0b34f262a5286fc480ac5e7403c375be/packages/extension-api/src/extension-api.d.ts#L3663",children:"packages/extension-api/src/extension-api.d.ts:3663"})]}),"\n",(0,o.jsx)(n.p,{children:"Resources information about a container engine"}),"\n",(0,o.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,o.jsx)(n.h3,{id:"cpuidle",children:"cpuIdle?"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"optional"})," ",(0,o.jsx)(n.strong,{children:"cpuIdle"}),": ",(0,o.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Defined in: ",(0,o.jsx)(n.a,{href:"https://github.com/kokizzu/podman-desktop/blob/0847701a0b34f262a5286fc480ac5e7403c375be/packages/extension-api/src/extension-api.d.ts#L3683",children:"packages/extension-api/src/extension-api.d.ts:3683"})]}),"\n",(0,o.jsx)(n.p,{children:"Percentage of idle CPUs (for Podman engines only)"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"cpus",children:"cpus?"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"optional"})," ",(0,o.jsx)(n.strong,{children:"cpus"}),": ",(0,o.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Defined in: ",(0,o.jsx)(n.a,{href:"https://github.com/kokizzu/podman-desktop/blob/0847701a0b34f262a5286fc480ac5e7403c375be/packages/extension-api/src/extension-api.d.ts#L3679",children:"packages/extension-api/src/extension-api.d.ts:3679"})]}),"\n",(0,o.jsx)(n.p,{children:"number of CPUs available for the container engine"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"disksize",children:"diskSize?"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"optional"})," ",(0,o.jsx)(n.strong,{children:"diskSize"}),": ",(0,o.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Defined in: ",(0,o.jsx)(n.a,{href:"https://github.com/kokizzu/podman-desktop/blob/0847701a0b34f262a5286fc480ac5e7403c375be/packages/extension-api/src/extension-api.d.ts#L3695",children:"packages/extension-api/src/extension-api.d.ts:3695"})]}),"\n",(0,o.jsx)(n.p,{children:"Quantity of disk space available for the container engine (for Podman engines only)"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"diskused",children:"diskUsed?"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"optional"})," ",(0,o.jsx)(n.strong,{children:"diskUsed"}),": ",(0,o.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Defined in: ",(0,o.jsx)(n.a,{href:"https://github.com/kokizzu/podman-desktop/blob/0847701a0b34f262a5286fc480ac5e7403c375be/packages/extension-api/src/extension-api.d.ts#L3699",children:"packages/extension-api/src/extension-api.d.ts:3699"})]}),"\n",(0,o.jsx)(n.p,{children:"Quantity of disk space used by the container engine (for Podman engines only)"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"engineid",children:"engineId"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"engineId"}),": ",(0,o.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Defined in: ",(0,o.jsx)(n.a,{href:"https://github.com/kokizzu/podman-desktop/blob/0847701a0b34f262a5286fc480ac5e7403c375be/packages/extension-api/src/extension-api.d.ts#L3667",children:"packages/extension-api/src/extension-api.d.ts:3667"})]}),"\n",(0,o.jsx)(n.p,{children:"unique id identifying the container engine"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"enginename",children:"engineName"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"engineName"}),": ",(0,o.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Defined in: ",(0,o.jsx)(n.a,{href:"https://github.com/kokizzu/podman-desktop/blob/0847701a0b34f262a5286fc480ac5e7403c375be/packages/extension-api/src/extension-api.d.ts#L3671",children:"packages/extension-api/src/extension-api.d.ts:3671"})]}),"\n",(0,o.jsx)(n.p,{children:"name of the container engine"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"enginetype",children:"engineType"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"engineType"}),": ",(0,o.jsx)(n.code,{children:'"docker"'})," | ",(0,o.jsx)(n.code,{children:'"podman"'})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Defined in: ",(0,o.jsx)(n.a,{href:"https://github.com/kokizzu/podman-desktop/blob/0847701a0b34f262a5286fc480ac5e7403c375be/packages/extension-api/src/extension-api.d.ts#L3675",children:"packages/extension-api/src/extension-api.d.ts:3675"})]}),"\n",(0,o.jsx)(n.p,{children:"engine type, either 'podman' or 'docker'"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"memory",children:"memory?"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"optional"})," ",(0,o.jsx)(n.strong,{children:"memory"}),": ",(0,o.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Defined in: ",(0,o.jsx)(n.a,{href:"https://github.com/kokizzu/podman-desktop/blob/0847701a0b34f262a5286fc480ac5e7403c375be/packages/extension-api/src/extension-api.d.ts#L3687",children:"packages/extension-api/src/extension-api.d.ts:3687"})]}),"\n",(0,o.jsx)(n.p,{children:"Quantity of memory available for the container engine"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"memoryused",children:"memoryUsed?"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"optional"})," ",(0,o.jsx)(n.strong,{children:"memoryUsed"}),": ",(0,o.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Defined in: ",(0,o.jsx)(n.a,{href:"https://github.com/kokizzu/podman-desktop/blob/0847701a0b34f262a5286fc480ac5e7403c375be/packages/extension-api/src/extension-api.d.ts#L3691",children:"packages/extension-api/src/extension-api.d.ts:3691"})]}),"\n",(0,o.jsx)(n.p,{children:"Quantity of memory used by the container engine (for Podman engines only)"})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},43023:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>r});var s=i(63696);const o={},c=s.createContext(o);function t(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);