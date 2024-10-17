"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46741],{95578:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var s=n(62540),r=n(43023);const t={sidebar_position:10,title:"Building and testing an image",description:"Building an image and testing it in Minikube",keywords:["podman desktop","podman","containers","pods","migrating","kubernetes","minikube"],tags:["migrating-to-kubernetes"]},o="Building an image and testing it in Minikube",l={id:"minikube/building-an-image-and-testing-it-in-minikube",title:"Building and testing an image",description:"Building an image and testing it in Minikube",source:"@site/docs/minikube/building-an-image-and-testing-it-in-minikube.md",sourceDirName:"minikube",slug:"/minikube/building-an-image-and-testing-it-in-minikube",permalink:"/docs/minikube/building-an-image-and-testing-it-in-minikube",draft:!1,unlisted:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/minikube/building-an-image-and-testing-it-in-minikube.md",tags:[{inline:!0,label:"migrating-to-kubernetes",permalink:"/docs/tags/migrating-to-kubernetes"}],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Building and testing an image",description:"Building an image and testing it in Minikube",keywords:["podman desktop","podman","containers","pods","migrating","kubernetes","minikube"],tags:["migrating-to-kubernetes"]},sidebar:"mySidebar",previous:{title:"Deleting a cluster",permalink:"/docs/minikube/deleting-your-minikube-cluster"},next:{title:"Pushing an image",permalink:"/docs/minikube/pushing-an-image-to-minikube"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4}];function a(e){const i={a:"a",code:"code",h1:"h1",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Icon:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Icon",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"building-an-image-and-testing-it-in-minikube",children:"Building an image and testing it in Minikube"})}),"\n",(0,s.jsx)(i.p,{children:"With Podman Desktop, you can build an image with your container engine, and test it in your local Minikube-powered Kubernetes cluster."}),"\n",(0,s.jsx)(i.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"/docs/containers",children:"You onboarded a container engine"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"/docs/minikube",children:"You onboarded a Minikube cluster"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"/docs/minikube/working-with-your-local-minikube-cluster",children:"You have set your Kubernetes context to your Minikube cluster"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["A container definition file: ",(0,s.jsx)(i.code,{children:"Containerfile"})," or ",(0,s.jsx)(i.code,{children:"Dockerfile"}),"."]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"procedure",children:"Procedure"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Build your image:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["Open ",(0,s.jsxs)(i.strong,{children:[(0,s.jsx)(n,{icon:"fa-solid fa-cloud",size:"lg"})," Images > ",(0,s.jsx)(n,{icon:"fa-solid fa-cube",size:"lg"})," Build an image"]}),"."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Containerfile path"}),": select your ",(0,s.jsx)(i.code,{children:"Containerfile"})," or ",(0,s.jsx)(i.code,{children:"Dockerfile"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Build context directory"}),": optionally, select a directory different from the directory containing your ",(0,s.jsx)(i.code,{children:"Containerfile"})," or ",(0,s.jsx)(i.code,{children:"Dockerfile"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Image Name"}),": enter your image name ",(0,s.jsx)(i.code,{children:"my-custom-image"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["Click ",(0,s.jsxs)(i.strong,{children:[(0,s.jsx)(n,{icon:"fa-solid fa-cube",size:"lg"})," Build"]}),"."]}),"\n",(0,s.jsx)(i.li,{children:"Wait for the image build to finish."}),"\n",(0,s.jsxs)(i.li,{children:["Click ",(0,s.jsx)(i.strong,{children:"Done"})," to get back to the images list."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Push your image to your Minikube cluster:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsxs)(i.strong,{children:[(0,s.jsx)(n,{icon:"fa-solid fa-cloud",size:"lg"})," Search images"]}),": enter your image name ",(0,s.jsx)(i.code,{children:"my-custom-image"})," to find the image."]}),"\n",(0,s.jsxs)(i.li,{children:["Click ",(0,s.jsxs)(i.strong,{children:[(0,s.jsx)(n,{icon:"fa-solid fa-ellipsis-v",size:"lg"})," > ",(0,s.jsx)(n,{icon:"fa-solid fa-ellipsis-v",size:"lg"})," Push image to Minikube cluster"]}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Test your image by creating a container:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["Click ",(0,s.jsx)(i.strong,{children:(0,s.jsx)(n,{icon:"fa-solid fa-play",size:"lg"})})," to open the ",(0,s.jsx)(i.strong,{children:"Create a container from image"})," dialog."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Container name"}),": enter ",(0,s.jsx)(i.code,{children:"my-custom-image-container"}),"."]}),"\n",(0,s.jsx)(i.li,{children:"Review the parameters that Podman Desktop has detected from your image definition."}),"\n",(0,s.jsxs)(i.li,{children:["Click ",(0,s.jsxs)(i.strong,{children:[(0,s.jsx)(n,{icon:"fa-solid fa-play",size:"lg"})," Start Container"]})," to start the container in your container engine."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Test your image and container on your Minikube cluster:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsxs)(i.strong,{children:[(0,s.jsx)(n,{icon:"fa-solid fa-cloud",size:"lg"})," Search containers"]}),": enter ",(0,s.jsx)(i.code,{children:"my-custom-image-container"})," to find the running container."]}),"\n",(0,s.jsxs)(i.li,{children:["Click ",(0,s.jsxs)(i.strong,{children:[(0,s.jsx)(n,{icon:"fa-solid fa-ellipsis-v",size:"lg"})," > ",(0,s.jsx)(n,{icon:"fa-solid fa-rocket",size:"lg"})," Deploy to Kubernetes"]})," to open the ",(0,s.jsx)(i.strong,{children:"Deploy generated pod to Kubernetes"})," screen."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Pod Name"}),": keep the proposed value ",(0,s.jsx)(i.code,{children:"my-custom-image-container-pod"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Use Kubernetes Services"}),": select ",(0,s.jsxs)(i.strong,{children:["Replace ",(0,s.jsx)(i.code,{children:"hostPort"})," exposure on containers by Services. It is the recommended way to expose ports, as a cluster policy might prevent to use ",(0,s.jsx)(i.code,{children:"hostPort"}),"."]})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Expose service locally using Kubernetes LoadBalancer"}),": if your container is exposing a service, you can use ",(0,s.jsx)(i.code,{children:"minikube service"})," to get a web browser or an URL to use."]}),"\n",(0,s.jsx)(i.li,{children:"Optionally, if your container is exposing more than one port, select the port to expose."}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Kubernetes namespaces"}),": select ",(0,s.jsx)(i.code,{children:"default"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["Click ",(0,s.jsxs)(i.strong,{children:[(0,s.jsx)(n,{icon:"fa-solid fa-rocket",size:"lg"})," Deploy"]}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["Wait for the pod to reach the state: ",(0,s.jsx)(i.strong,{children:"Phase: Running"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["Click ",(0,s.jsx)(i.strong,{children:"Done"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"verification",children:"Verification"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["The ",(0,s.jsxs)(i.strong,{children:[(0,s.jsx)(n,{icon:"fa-solid fa-cubes",size:"lg"})," Pods"]})," screen lists the running ",(0,s.jsx)(i.code,{children:"my-image-container-pod"})," pod."]}),"\n",(0,s.jsx)(i.li,{children:"Click on the pod name to view details and logs."}),"\n",(0,s.jsx)(i.li,{children:"Optionally, if your container is exposing a service, go to the server URL: your application is running."}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},43023:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>l});var s=n(63696);const r={},t=s.createContext(r);function o(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);