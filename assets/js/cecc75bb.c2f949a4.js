"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[69937],{1131:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var t=s(62540),i=s(43023);const l={title:"Using RHEL as a WSL podman machine",description:"Build RHEL image and use it as the operating system for the WSL podman machine",authors:["jeffmaury"],tags:["podman-desktop","podman","rhel","wsl","machine"],hide_table_of_contents:!1},r="Requirements",a={permalink:"/blog/2024/08/01/using-rhel-wsl-podman-machine",source:"@site/blog/2024-08-01-using-rhel-wsl-podman-machine.md",title:"Using RHEL as a WSL podman machine",description:"Build RHEL image and use it as the operating system for the WSL podman machine",date:"2024-08-01T00:00:00.000Z",tags:[{inline:!0,label:"podman-desktop",permalink:"/blog/tags/podman-desktop"},{inline:!0,label:"podman",permalink:"/blog/tags/podman"},{inline:!0,label:"rhel",permalink:"/blog/tags/rhel"},{inline:!0,label:"wsl",permalink:"/blog/tags/wsl"},{inline:!0,label:"machine",permalink:"/blog/tags/machine"}],readingTime:4.045,hasTruncateMarker:!1,authors:[{name:"Jeff Maury",title:"Engineering Manager",url:"https://github.com/jeffmaury",imageURL:"https://github.com/jeffmaury.png",key:"jeffmaury",page:null}],frontMatter:{title:"Using RHEL as a WSL podman machine",description:"Build RHEL image and use it as the operating system for the WSL podman machine",authors:["jeffmaury"],tags:["podman-desktop","podman","rhel","wsl","machine"],hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"Podman Desktop 1.12 Release",permalink:"/blog/podman-desktop-release-1.12"},nextItem:{title:"Podman Desktop 1.11 Release",permalink:"/blog/podman-desktop-release-1.11"}},c={authorsImageUrls:[void 0]},d=[];function h(e){const n={a:"a",code:"code",h1:"h1",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Red Hat provides a tool called Image Builder that allows developers to build their own custom image of RHEL in a variety of formats. Recently, Image Builder added WSL as a target, enabling you to run RHEL on Windows as a WSL distribution."}),"\n",(0,t.jsxs)(n.p,{children:["This ",(0,t.jsx)(n.a,{href:"https://developers.redhat.com/articles/2023/11/15/create-customized-rhel-images-wsl-environment",children:"article"})," details the steps and actions required to build and run your RHEL WSL image."]}),"\n",(0,t.jsx)(n.p,{children:"The purpose of this article is to describe the options needed for the RHEL WSL distribution so that it can be used as a Podman machine."}),"\n",(0,t.jsx)(n.p,{children:"To use the RHEL WSL image as a Podman machine, ensure that the following packages are installed:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"podman"}),"\n",(0,t.jsx)(n.li,{children:"podman-docker"}),"\n",(0,t.jsx)(n.li,{children:"procps-ng"}),"\n",(0,t.jsx)(n.li,{children:"openssh-server"}),"\n",(0,t.jsx)(n.li,{children:"net-tools"}),"\n",(0,t.jsx)(n.li,{children:"iproute"}),"\n",(0,t.jsx)(n.li,{children:"dhcp-client"}),"\n",(0,t.jsx)(n.li,{children:"sudo"}),"\n",(0,t.jsx)(n.li,{children:"systemd-networkd"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Luckily, all but the last package are available from the pre-configured RHEL 9 repositories. The last package (systemd-networkd) is available from the EPEL 9 repository and will need to be configured when building the image."}),"\n",(0,t.jsx)(n.h1,{id:"build-the-image",children:"Build the image"}),"\n",(0,t.jsxs)(n.p,{children:["Navigate to ",(0,t.jsx)(n.a,{href:"https://console.redhat.com/insights/image-builder",children:"image builder"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image builder",src:s(68666).A+"",width:"1920",height:"1032"})}),"\n",(0,t.jsxs)(n.p,{children:["On the upper right menu, enable the ",(0,t.jsx)(n.strong,{children:"Preview"})," mode."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image builder preview",src:s(89777).A+"",width:"1920",height:"1032"})}),"\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Add blueprint"})," to open the ",(0,t.jsx)(n.strong,{children:"Create image"})," dialog wizard."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image wizard",src:s(79560).A+"",width:"1920",height:"1032"})}),"\n",(0,t.jsxs)(n.p,{children:["On the ",(0,t.jsx)(n.strong,{children:"Image output"})," page, select the following:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["From the ",(0,t.jsx)(n.strong,{children:"Release"})," list, select Red Hat Enterprise Linux (RHEL) 9."]}),"\n",(0,t.jsxs)(n.li,{children:["From the ",(0,t.jsx)(n.strong,{children:"Select target environments"})," option, select ",(0,t.jsx)(n.strong,{children:"WSL - Windows Subsystem for Linux ("}),(0,t.jsx)(n.code,{children:".tar.gz"}),(0,t.jsx)(n.strong,{children:")"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["On the ",(0,t.jsx)(n.strong,{children:"Register"})," page, select ",(0,t.jsx)(n.strong,{children:"Automatically register and enable advanced capabilities."})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["From the dropdown menu, choose an activation key to use for the image. See ",(0,t.jsx)(n.a,{href:"https://access.redhat.com/documentation/en-us/subscription_central/2023/html/getting_started_with_activation_keys_on_the_hybrid_cloud_console/assembly-creating-managing-activation-keys#proc-creating-act-keys-console_",children:"Creating an activation key"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["On the ",(0,t.jsx)(n.strong,{children:"OpenSCAP"})," page, as it is not supported for WSL images, click ",(0,t.jsx)(n.strong,{children:"Next"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["On the ",(0,t.jsx)(n.strong,{children:"File system configuration"})," page, select ",(0,t.jsx)(n.strong,{children:"Recommended: Use automatic partitioning"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["On the ",(0,t.jsx)(n.strong,{children:"Content"})," page, complete the following steps to add additional packages to your image:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"On the Repository snapshot step:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Select Use latest content."}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Next"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"On the Custom repositories step:"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"custom repositories",src:s(59175).A+"",width:"1920",height:"1032"})}),"\n",(0,t.jsxs)(n.p,{children:["Click on the ",(0,t.jsx)(n.a,{href:"https://console.redhat.com/preview/settings/content",children:"Create and manage repositories here"})," link. This will open a new tab"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"custom repositories",src:s(6686).A+"",width:"1920",height:"1032"})}),"\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Add repositories now"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"add custom repository",src:s(8789).A+"",width:"1920",height:"1032"})}),"\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Add repositories"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"add custom repository",src:s(56524).A+"",width:"1920",height:"1032"})}),"\n",(0,t.jsxs)(n.p,{children:["On the ",(0,t.jsx)(n.strong,{children:"Add custom repositories"})," page, select the following:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["In the ",(0,t.jsx)(n.strong,{children:"Name"})," list, enter EPEL 9."]}),"\n",(0,t.jsxs)(n.li,{children:["In the ",(0,t.jsx)(n.strong,{children:"URL"})," field, enter ",(0,t.jsx)(n.a,{href:"https://dl.fedoraproject.org/pub/epel/9/Everything/x86_64/",children:"https://dl.fedoraproject.org/pub/epel/9/Everything/x86_64/"})]}),"\n",(0,t.jsxs)(n.li,{children:["In the ",(0,t.jsx)(n.strong,{children:"GPG key"})," field, enter ",(0,t.jsx)(n.a,{href:"https://dl.fedoraproject.org/pub/epel/RPM-GPG-KEY-EPEL-9",children:"https://dl.fedoraproject.org/pub/epel/RPM-GPG-KEY-EPEL-9"})]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Close the tab and switch back to the previous one"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"In the filter input field, type EPEL"}),"\n",(0,t.jsx)(n.li,{children:"Select the EPEL 9 repository"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"custom repository created",src:s(36411).A+"",width:"1920",height:"1032"})}),"\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Next"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"On the Additional packages step:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["On the ",(0,t.jsx)(n.strong,{children:"Available packages"})," search field, enter podman and click the ",(0,t.jsx)(n.strong,{children:"\u2192"})," button."]}),"\n",(0,t.jsx)(n.li,{children:"Select the podman and podman-docker packages."}),"\n",(0,t.jsxs)(n.li,{children:["On the ",(0,t.jsx)(n.strong,{children:"Available packages"})," search field, enter procps-ng and click the ",(0,t.jsx)(n.strong,{children:"\u2192"})," button."]}),"\n",(0,t.jsx)(n.li,{children:"Select the procps-ng package."}),"\n",(0,t.jsxs)(n.li,{children:["On the ",(0,t.jsx)(n.strong,{children:"Available packages"})," search field, enter openssh-server and click the ",(0,t.jsx)(n.strong,{children:"\u2192"})," button."]}),"\n",(0,t.jsx)(n.li,{children:"Select the openssh-server package."}),"\n",(0,t.jsxs)(n.li,{children:["On the ",(0,t.jsx)(n.strong,{children:"Available packages"})," search field, enter net-tools and click the ",(0,t.jsx)(n.strong,{children:"\u2192"})," button."]}),"\n",(0,t.jsx)(n.li,{children:"Select the net-tools package."}),"\n",(0,t.jsxs)(n.li,{children:["On the ",(0,t.jsx)(n.strong,{children:"Available packages"})," search field, enter iproute and click the ",(0,t.jsx)(n.strong,{children:"\u2192"})," button."]}),"\n",(0,t.jsx)(n.li,{children:"Select the iproute package."}),"\n",(0,t.jsxs)(n.li,{children:["On the ",(0,t.jsx)(n.strong,{children:"Available packages"})," search field, enter dhcp-client and click the ",(0,t.jsx)(n.strong,{children:"\u2192"})," button."]}),"\n",(0,t.jsx)(n.li,{children:"Select the dhcp-client package."}),"\n",(0,t.jsxs)(n.li,{children:["On the ",(0,t.jsx)(n.strong,{children:"Available packages"})," search field, enter sudo and click the ",(0,t.jsx)(n.strong,{children:"\u2192"})," button."]}),"\n",(0,t.jsxs)(n.li,{children:["Select the sudo package and click the ",(0,t.jsx)(n.strong,{children:">"})," button to add the selected package shown in the package search results to the ",(0,t.jsx)(n.strong,{children:"Chosen packages"})," dual list box."]}),"\n",(0,t.jsxs)(n.li,{children:["On the ",(0,t.jsx)(n.strong,{children:"Available packages"})," search field, enter systemd and click the ",(0,t.jsx)(n.strong,{children:"\u2192"})," button."]}),"\n",(0,t.jsx)(n.li,{children:"Select the systemd-networkd package."}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Next"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["On the ",(0,t.jsx)(n.strong,{children:"First boot script configuration"})," page:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["On the ",(0,t.jsx)(n.strong,{children:"Details"})," page:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["In the ",(0,t.jsx)(n.strong,{children:"Blueprint name"}),", enter rhel-wsl."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["On the ",(0,t.jsx)(n.strong,{children:"Review"})," page:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Create blueprint and build image"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"images list",src:s(21586).A+"",width:"1920",height:"1032"})}),"\n",(0,t.jsxs)(n.p,{children:["The image is being built. Once the build is finished, the download link will be available. Click on the ",(0,t.jsx)(n.strong,{children:"Download (.tar.gz)"})," link and save the downloaded file to one of your local folders."]}),"\n",(0,t.jsx)(n.h1,{id:"create-the-rhel-wsl-podman-machine",children:"Create the RHEL WSL podman machine"}),"\n",(0,t.jsxs)(n.p,{children:["Launch Podman Desktop and go to the ",(0,t.jsx)(n.strong,{children:"Settings -> Resources"})," page:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"images list",src:s(19456).A+"",width:"1314",height:"876"})}),"\n",(0,t.jsxs)(n.p,{children:["On the Podman provider, click on ",(0,t.jsx)(n.strong,{children:"Create new ..."})]}),"\n",(0,t.jsxs)(n.p,{children:["On the ",(0,t.jsx)(n.strong,{children:"Create Podman machine"})," page, click the ",(0,t.jsx)(n.strong,{children:"Browse"})," button for the ",(0,t.jsx)(n.strong,{children:"Image Path"})," field and select the file downloaded from Image Builder."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"create podman machine",src:s(97577).A+"",width:"1314",height:"1020"})}),"\n",(0,t.jsxs)(n.p,{children:["Click on the ",(0,t.jsx)(n.strong,{children:"Create"})," button: the machine will be created and started. After a short time, the operation status should be reported."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"podman machine created",src:s(66610).A+"",width:"1314",height:"1020"})}),"\n",(0,t.jsx)(n.h1,{id:"lets-play-with-the-rhel-wsl-podman-machine",children:"Let's play with the RHEL WSL podman machine"}),"\n",(0,t.jsxs)(n.p,{children:["Go to the ",(0,t.jsx)(n.strong,{children:"Images"})," page and pull the ",(0,t.jsx)(n.strong,{children:"httpd"})," image"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"pull httpd image",src:s(81435).A+"",width:"1314",height:"1020"})}),"\n",(0,t.jsxs)(n.p,{children:["Click on ",(0,t.jsx)(n.strong,{children:"Done"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"images list",src:s(17572).A+"",width:"1314",height:"1020"})}),"\n",(0,t.jsxs)(n.p,{children:["Start the image by clicking on the ",(0,t.jsx)(n.strong,{children:"Run image"})," icon"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"images list",src:s(71469).A+"",width:"1314",height:"1020"})}),"\n",(0,t.jsxs)(n.p,{children:["Once the container is started, the Apache server can be accessed on ",(0,t.jsx)(n.a,{href:"http://localhost:9000",children:"http://localhost:9000"})]})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},68666:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/rhel-wsl-podman-machine1-a03f67afde625190d74d0e7aa117528a.png"},19456:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/rhel-wsl-podman-machine10-6b7afc55336df9306d0d9a43aced99a1.png"},97577:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/rhel-wsl-podman-machine11-e62f8ba4c90180494a862954dc2c9e7d.png"},66610:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/rhel-wsl-podman-machine12-dc8c5c8da02f8bc30f77e061540dd502.png"},81435:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/rhel-wsl-podman-machine13-6b5d5d6b88bb552fad67b7e6c532c8eb.png"},17572:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/rhel-wsl-podman-machine14-2787f96f2d303d0738a032ba87b413f0.png"},71469:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/rhel-wsl-podman-machine15-36a0a93c5e31b7fb4967daa43f545961.png"},89777:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/rhel-wsl-podman-machine2-cd1aedd3acf8bf835fe3761f5331e065.png"},79560:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/rhel-wsl-podman-machine3-3722e30a8756b4114c518e869ec034aa.png"},59175:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/rhel-wsl-podman-machine4-85bd2ff6a0121c1e269baf50be44e5e5.png"},6686:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/rhel-wsl-podman-machine5-bbc7d7a14a6b6fda13bc70f5000d34b6.png"},8789:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/rhel-wsl-podman-machine6-9475a7bcf94316356a15c48df3308a44.png"},56524:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/rhel-wsl-podman-machine7-115c825fbcff74a9f074995d29811662.png"},36411:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/rhel-wsl-podman-machine8-1eb9c53d13af934379575dfbfe18b719.png"},21586:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/rhel-wsl-podman-machine9-016d0ae2258367bed247abcd6248cc9c.png"},43023:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(63696);const i={},l=t.createContext(i);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);