"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88089],{80468:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var i=s(24246),r=s(71670);const o={},d="Interface: EndpointSettings",c={id:"interfaces/EndpointSettings",title:"Interface: EndpointSettings",description:"Properties",source:"@site/api/interfaces/EndpointSettings.md",sourceDirName:"interfaces",slug:"/interfaces/EndpointSettings",permalink:"/api/interfaces/EndpointSettings",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"Interface: EndpointIPAMConfig",permalink:"/api/interfaces/EndpointIPAMConfig"},next:{title:"Interface: Event()\\<T\\>",permalink:"/api/interfaces/Event"}},t={},a=[{value:"Properties",id:"properties",level:2},{value:"Aliases?",id:"aliases",level:3},{value:"Source",id:"source",level:4},{value:"DNSNames?",id:"dnsnames",level:3},{value:"Source",id:"source-1",level:4},{value:"DriverOpts?",id:"driveropts",level:3},{value:"Index signature",id:"index-signature",level:4},{value:"Source",id:"source-2",level:4},{value:"EndpointID?",id:"endpointid",level:3},{value:"Source",id:"source-3",level:4},{value:"Gateway?",id:"gateway",level:3},{value:"Source",id:"source-4",level:4},{value:"GlobalIPv6Address?",id:"globalipv6address",level:3},{value:"Source",id:"source-5",level:4},{value:"GlobalIPv6PrefixLen?",id:"globalipv6prefixlen",level:3},{value:"Source",id:"source-6",level:4},{value:"IPAMConfig?",id:"ipamconfig",level:3},{value:"Source",id:"source-7",level:4},{value:"IPAddress?",id:"ipaddress",level:3},{value:"Source",id:"source-8",level:4},{value:"IPPrefixLen?",id:"ipprefixlen",level:3},{value:"Source",id:"source-9",level:4},{value:"IPv6Gateway?",id:"ipv6gateway",level:3},{value:"Source",id:"source-10",level:4},{value:"Links?",id:"links",level:3},{value:"Source",id:"source-11",level:4},{value:"MacAddress?",id:"macaddress",level:3},{value:"Source",id:"source-12",level:4},{value:"NetworkID?",id:"networkid",level:3},{value:"Source",id:"source-13",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"interface-endpointsettings",children:"Interface: EndpointSettings"}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h3,{id:"aliases",children:"Aliases?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"Aliases"}),": ",(0,i.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"source",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/kokizzu/podman-desktop/blob/6a02ae2/packages/extension-api/src/extension-api.d.ts#L2376",children:"packages/extension-api/src/extension-api.d.ts:2376"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"dnsnames",children:"DNSNames?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"DNSNames"}),": ",(0,i.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"List of all DNS names an endpoint has on a specific network. This list is based on the container name, network\naliases, container short ID, and hostname."}),"\n",(0,i.jsxs)(n.p,{children:["These DNS names are non-fully qualified but can contain several dots. You can get fully qualified DNS names by\nappending ",(0,i.jsx)(n.code,{children:".<network-name>"}),". For instance, if container name is ",(0,i.jsx)(n.code,{children:"my.ctr"})," and the network is named\n",(0,i.jsx)(n.code,{children:"testnet"}),", ",(0,i.jsx)(n.code,{children:"DNSNames"})," will contain ",(0,i.jsx)(n.code,{children:"my.ctr"})," and the FQDN will be ",(0,i.jsx)(n.code,{children:"my.ctr.testnet"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"source-1",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/kokizzu/podman-desktop/blob/6a02ae2/packages/extension-api/src/extension-api.d.ts#L2431",children:"packages/extension-api/src/extension-api.d.ts:2431"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"driveropts",children:"DriverOpts?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"DriverOpts"}),": ",(0,i.jsx)(n.code,{children:"Object"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"DriverOpts is a mapping of driver options and values. These options are passed directly to the driver and are driver specific."}),"\n",(0,i.jsx)(n.h4,{id:"index-signature",children:"Index signature"}),"\n",(0,i.jsxs)(n.p,{children:["[",(0,i.jsx)(n.code,{children:"key"}),": ",(0,i.jsx)(n.code,{children:"string"}),"]: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsx)(n.h4,{id:"source-2",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/kokizzu/podman-desktop/blob/6a02ae2/packages/extension-api/src/extension-api.d.ts#L2421",children:"packages/extension-api/src/extension-api.d.ts:2421"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"endpointid",children:"EndpointID?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"EndpointID"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Unique ID for the service endpoint in a Sandbox."}),"\n",(0,i.jsx)(n.h4,{id:"source-3",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/kokizzu/podman-desktop/blob/6a02ae2/packages/extension-api/src/extension-api.d.ts#L2386",children:"packages/extension-api/src/extension-api.d.ts:2386"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"gateway",children:"Gateway?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"Gateway"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Gateway address for this network."}),"\n",(0,i.jsx)(n.h4,{id:"source-4",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/kokizzu/podman-desktop/blob/6a02ae2/packages/extension-api/src/extension-api.d.ts#L2391",children:"packages/extension-api/src/extension-api.d.ts:2391"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"globalipv6address",children:"GlobalIPv6Address?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"GlobalIPv6Address"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Global IPv6 address."}),"\n",(0,i.jsx)(n.h4,{id:"source-5",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/kokizzu/podman-desktop/blob/6a02ae2/packages/extension-api/src/extension-api.d.ts#L2411",children:"packages/extension-api/src/extension-api.d.ts:2411"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"globalipv6prefixlen",children:"GlobalIPv6PrefixLen?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"GlobalIPv6PrefixLen"}),": ",(0,i.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Mask length of the global IPv6 address."}),"\n",(0,i.jsx)(n.h4,{id:"source-6",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/kokizzu/podman-desktop/blob/6a02ae2/packages/extension-api/src/extension-api.d.ts#L2416",children:"packages/extension-api/src/extension-api.d.ts:2416"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"ipamconfig",children:"IPAMConfig?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"IPAMConfig"}),": ",(0,i.jsx)(n.a,{href:"/api/interfaces/EndpointIPAMConfig",children:(0,i.jsx)(n.code,{children:"EndpointIPAMConfig"})})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"EndpointIPAMConfig represents an endpoint's IPAM configuration."}),"\n",(0,i.jsx)(n.h4,{id:"source-7",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/kokizzu/podman-desktop/blob/6a02ae2/packages/extension-api/src/extension-api.d.ts#L2367",children:"packages/extension-api/src/extension-api.d.ts:2367"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"ipaddress",children:"IPAddress?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"IPAddress"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"IPv4 address."}),"\n",(0,i.jsx)(n.h4,{id:"source-8",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/kokizzu/podman-desktop/blob/6a02ae2/packages/extension-api/src/extension-api.d.ts#L2396",children:"packages/extension-api/src/extension-api.d.ts:2396"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"ipprefixlen",children:"IPPrefixLen?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"IPPrefixLen"}),": ",(0,i.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Mask length of the IPv4 address."}),"\n",(0,i.jsx)(n.h4,{id:"source-9",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/kokizzu/podman-desktop/blob/6a02ae2/packages/extension-api/src/extension-api.d.ts#L2401",children:"packages/extension-api/src/extension-api.d.ts:2401"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"ipv6gateway",children:"IPv6Gateway?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"IPv6Gateway"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"IPv6 gateway address."}),"\n",(0,i.jsx)(n.h4,{id:"source-10",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/kokizzu/podman-desktop/blob/6a02ae2/packages/extension-api/src/extension-api.d.ts#L2406",children:"packages/extension-api/src/extension-api.d.ts:2406"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"links",children:"Links?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"Links"}),": ",(0,i.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"source-11",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/kokizzu/podman-desktop/blob/6a02ae2/packages/extension-api/src/extension-api.d.ts#L2369",children:"packages/extension-api/src/extension-api.d.ts:2369"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"macaddress",children:"MacAddress?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"MacAddress"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"MAC address for the endpoint on this network. The network driver might ignore this parameter."}),"\n",(0,i.jsx)(n.h4,{id:"source-12",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/kokizzu/podman-desktop/blob/6a02ae2/packages/extension-api/src/extension-api.d.ts#L2374",children:"packages/extension-api/src/extension-api.d.ts:2374"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"networkid",children:"NetworkID?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"optional"})})," ",(0,i.jsx)(n.strong,{children:"NetworkID"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Unique ID of the network."}),"\n",(0,i.jsx)(n.h4,{id:"source-13",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/kokizzu/podman-desktop/blob/6a02ae2/packages/extension-api/src/extension-api.d.ts#L2381",children:"packages/extension-api/src/extension-api.d.ts:2381"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},71670:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>d});var i=s(27378);const r={},o=i.createContext(r);function d(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);