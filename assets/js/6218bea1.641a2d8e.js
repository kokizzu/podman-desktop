"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60633],{29118:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"@podman-desktop/namespaces/commands/functions/registerCommand","title":"Function: registerCommand()","description":"registerCommand(command, callback, thisArg?): Disposable","source":"@site/api/@podman-desktop/namespaces/commands/functions/registerCommand.md","sourceDirName":"@podman-desktop/namespaces/commands/functions","slug":"/@podman-desktop/namespaces/commands/functions/registerCommand","permalink":"/api/@podman-desktop/namespaces/commands/functions/registerCommand","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"executeCommand","permalink":"/api/@podman-desktop/namespaces/commands/functions/executeCommand"},"next":{"title":"configuration","permalink":"/api/@podman-desktop/namespaces/configuration/"}}');var t=s(62540),o=s(43023);const c={},i="Function: registerCommand()",r={},d=[{value:"Parameters",id:"parameters",level:2},{value:"command",id:"command",level:3},{value:"callback",id:"callback",level:3},{value:"thisArg?",id:"thisarg",level:3},{value:"Returns",id:"returns",level:2},{value:"Throws",id:"throws",level:2}];function m(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"function-registercommand",children:"Function: registerCommand()"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"registerCommand"}),"(",(0,t.jsx)(n.code,{children:"command"}),", ",(0,t.jsx)(n.code,{children:"callback"}),", ",(0,t.jsx)(n.code,{children:"thisArg?"}),"): ",(0,t.jsx)(n.a,{href:"/api/classes/Disposable",children:(0,t.jsx)(n.code,{children:"Disposable"})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/kokizzu/podman-desktop/blob/0847701a0b34f262a5286fc480ac5e7403c375be/packages/extension-api/src/extension-api.d.ts#L770",children:"packages/extension-api/src/extension-api.d.ts:770"})]}),"\n",(0,t.jsxs)(n.p,{children:["Define a command, to be executed later, either by calling ",(0,t.jsx)(n.a,{href:"/api/@podman-desktop/namespaces/commands/functions/executeCommand",children:"commands.executeCommand"})," or by referencing its name in the ",(0,t.jsx)(n.code,{children:"command"})," field of a ",(0,t.jsx)(n.a,{href:"/api/interfaces/StatusBarItem",children:"StatusBarItem"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For examples, see ",(0,t.jsx)(n.a,{href:"/api/@podman-desktop/namespaces/commands/",children:"commands"})," and ",(0,t.jsx)(n.a,{href:"/api/@podman-desktop/namespaces/window/functions/createStatusBarItem",children:"window.createStatusBarItem"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(n.h3,{id:"command",children:"command"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"string"})}),"\n",(0,t.jsx)(n.p,{children:"the name of the command. The name must be unique over all extensions. It is recommended to prefix this name with the name of the extension, to avoid conflicts with commands from other extensions."}),"\n",(0,t.jsx)(n.h3,{id:"callback",children:"callback"}),"\n",(0,t.jsxs)(n.p,{children:["(...",(0,t.jsx)(n.code,{children:"args"}),") => ",(0,t.jsx)(n.code,{children:"any"})]}),"\n",(0,t.jsx)(n.p,{children:"the command to execute"}),"\n",(0,t.jsx)(n.h3,{id:"thisarg",children:"thisArg?"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"any"})}),"\n",(0,t.jsxs)(n.p,{children:["The value of ",(0,t.jsx)(n.code,{children:"this"})," provided for the call to callback"]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/api/classes/Disposable",children:(0,t.jsx)(n.code,{children:"Disposable"})})}),"\n",(0,t.jsx)(n.p,{children:"A disposable that unregisters this command when being disposed"}),"\n",(0,t.jsx)(n.h2,{id:"throws",children:"Throws"}),"\n",(0,t.jsx)(n.p,{children:"if a command with the same name is already registered."})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},43023:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>i});var a=s(63696);const t={},o=a.createContext(t);function c(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);