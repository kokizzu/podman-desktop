var f=Object.defineProperty;var h=(e,t,a)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var o=(e,t,a)=>h(e,typeof t!="symbol"?t+"":t,a);import{p as _,i as w,t as T,f as b,s as C,a as g,b as v,n as D,c as x,h as S}from"./props-_7BdLR4s.js";import"./ErrorMessage-DUZ8x9Dk.js";import"./Button-C3gSI5cx.js";import{c as i,d as y,f as B}from"./Table-B6yRepSK.js";import"./LinearProgress-BRFmswUa.js";import"./Spinner-B1BOXk6C.js";import"./EmptyScreen-BSvi040z.js";import{c as M,s as R,d as k}from"./create-runtime-stories-BPjNNue9.js";import"./attributes-BJP7LkDd.js";import"./index-client-BCLWnnQH.js";import"./index-D-Vb1yU-.js";import"./fa-layers-text.svelte_svelte_type_style_lang--YdTxVsl.js";import"./StarIcon-CSls4ZTD.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DtmeDzJ6.js";import"./index-CfOrKyLd.js";class m{constructor(t,a){o(this,"title");o(this,"info");this.title=t,this.info=a}}class c{constructor(t){o(this,"info");this.info=t}}const A=(e,t,a=D)=>{i(e,x(()=>S(t==null?void 0:t(),["_children"])))},E={component:i,title:"Table",tags:["autodocs"],args:{},parameters:{docs:{description:{component:"These are the stories for the `Table` component.\nAllow to display a table."}}}},{Story:s}=k(),n=[{name:"John",duration:new Date().getTime()-6e5},{name:"Henry",duration:new Date().getTime()},{name:"Charlie",duration:new Date().getTime()-36e5}],G=[{name:"Teacher"},{name:"Student"}],l=new m("Name",{renderMapping:e=>e.name,renderer:y}),H=new m("Duration",{renderMapping:e=>e.duration?new Date(e.duration):void 0,renderer:B}),J=[l,H],N=e=>!0,O=new c({selectable:N,disabledText:"cannot be selected"}),j=new c({children:e=>{switch(e.name){case"Teacher":return[n[0]];case"Student":return[n[1],n[2]];default:return[]}}});var q=T("<!> <!>",1);function p(e,t){_(t,!1),R(A),w();var a=q(),r=b(a);s(r,{name:"Basic",args:{data:n,columns:J,row:O},parameters:{__svelteCsf:{rawCode:"<Table {...args}></Table>"}}});var u=C(r,2);s(u,{name:"Children",args:{data:G,columns:[l],row:j},parameters:{__svelteCsf:{rawCode:"<Table {...args}></Table>"}}}),g(e,a),v()}p.__docgen={keywords:[],data:[],name:"Table.stories.svelte"};const d=M(p,E),oe=["Basic","Children"],ne=d.Basic,re=d.Children;export{ne as Basic,re as Children,oe as __namedExportsOrder,E as default};
