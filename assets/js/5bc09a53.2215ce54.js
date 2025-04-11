"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[69597],{48820:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"interfaces/HealthConfig","title":"Interface: HealthConfig","description":"Defined in3000","source":"@site/api/interfaces/HealthConfig.md","sourceDirName":"interfaces","slug":"/interfaces/HealthConfig","permalink":"/api/interfaces/HealthConfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"HealthCheckResults","permalink":"/api/interfaces/HealthCheckResults"},"next":{"title":"HostConfig","permalink":"/api/interfaces/HostConfig"}}');var i=s(62540),a=s(43023);const r={},c="Interface: HealthConfig",o={},l=[{value:"Properties",id:"properties",level:2},{value:"Interval?",id:"interval",level:3},{value:"Example",id:"example",level:4},{value:"Retries?",id:"retries",level:3},{value:"Example",id:"example-1",level:4},{value:"StartPeriod?",id:"startperiod",level:3},{value:"Example",id:"example-2",level:4},{value:"Test?",id:"test",level:3},{value:"Examples",id:"examples",level:4},{value:"Timeout?",id:"timeout",level:3},{value:"Example",id:"example-3",level:4}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"interface-healthconfig",children:"Interface: HealthConfig"})}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/kokizzu/podman-desktop/blob/0847701a0b34f262a5286fc480ac5e7403c375be/packages/extension-api/src/extension-api.d.ts#L3000",children:"packages/extension-api/src/extension-api.d.ts:3000"})]}),"\n",(0,i.jsxs)(n.p,{children:["Configuration options for defining a healthcheck for a container.\nTo get health check result you can use ",(0,i.jsx)(n.a,{href:"/api/@podman-desktop/namespaces/containerEngine/functions/inspectContainer",children:"containerEngine.inspectContainer"})," and inside the obtained ",(0,i.jsx)(n.a,{href:"/api/interfaces/ContainerInspectInfo",children:"ContainerInspectInfo"})," you can access the ",(0,i.jsx)(n.code,{children:"Status.Health"})," property containing a ",(0,i.jsx)(n.a,{href:"/api/interfaces/HealthCheckResults",children:"HealthCheckResults"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h3,{id:"interval",children:"Interval?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"optional"})," ",(0,i.jsx)(n.strong,{children:"Interval"}),": ",(0,i.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/kokizzu/podman-desktop/blob/0847701a0b34f262a5286fc480ac5e7403c375be/packages/extension-api/src/extension-api.d.ts#L3029",children:"packages/extension-api/src/extension-api.d.ts:3029"})]}),"\n",(0,i.jsx)(n.p,{children:"The time to wait between checks in nanoseconds. It should be 0 or at least 1000000 (1 ms). 0 means inherit."}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// Set interval to 1 second\nInterval?: 1000000000;\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"retries",children:"Retries?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"optional"})," ",(0,i.jsx)(n.strong,{children:"Retries"}),": ",(0,i.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/kokizzu/podman-desktop/blob/0847701a0b34f262a5286fc480ac5e7403c375be/packages/extension-api/src/extension-api.d.ts#L3057",children:"packages/extension-api/src/extension-api.d.ts:3057"})]}),"\n",(0,i.jsx)(n.p,{children:"The number of consecutive failures needed to consider a container as unhealthy. 0 means inherit."}),"\n",(0,i.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// Set retries to 3\nRetries?: 3;\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"startperiod",children:"StartPeriod?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"optional"})," ",(0,i.jsx)(n.strong,{children:"StartPeriod"}),": ",(0,i.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/kokizzu/podman-desktop/blob/0847701a0b34f262a5286fc480ac5e7403c375be/packages/extension-api/src/extension-api.d.ts#L3048",children:"packages/extension-api/src/extension-api.d.ts:3048"})]}),"\n",(0,i.jsx)(n.p,{children:"Start period for the container to initialize before starting health-retries countdown in nanoseconds. It should\nbe 0 or at least 1000000 (1 ms). 0 means inherit."}),"\n",(0,i.jsx)(n.h4,{id:"example-2",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// Set start period to 2 seconds\nStartPeriod?: 2000000000;\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"test",children:"Test?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"optional"})," ",(0,i.jsx)(n.strong,{children:"Test"}),": ",(0,i.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/kokizzu/podman-desktop/blob/0847701a0b34f262a5286fc480ac5e7403c375be/packages/extension-api/src/extension-api.d.ts#L3020",children:"packages/extension-api/src/extension-api.d.ts:3020"})]}),"\n",(0,i.jsx)(n.p,{children:"The test to perform."}),"\n",(0,i.jsx)(n.h4,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// Inherit healthcheck from image\nTest?: [];\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'// Disable healthcheck\nTest?: ["NONE"];\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'// Execute command in host system\nTest?: ["CMD", "curl", "http://localhost"];\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'// Podman will execute the command inside the target container and wait for either a "0" or "failure  exit" code.\nTest?: ["CMD-SHELL", "curl http://localhost || exit 1"];\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"timeout",children:"Timeout?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"optional"})," ",(0,i.jsx)(n.strong,{children:"Timeout"}),": ",(0,i.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/kokizzu/podman-desktop/blob/0847701a0b34f262a5286fc480ac5e7403c375be/packages/extension-api/src/extension-api.d.ts#L3038",children:"packages/extension-api/src/extension-api.d.ts:3038"})]}),"\n",(0,i.jsx)(n.p,{children:"The time to wait before considering the check to have hung. It should be 0 or at least 1000000 (1 ms). 0 means inherit."}),"\n",(0,i.jsx)(n.h4,{id:"example-3",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// Set timeout to 5 seconds\nTimeout?: 5000000000;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},43023:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var t=s(63696);const i={},a=t.createContext(i);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);