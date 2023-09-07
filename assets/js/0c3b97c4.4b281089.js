"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[2686],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,h=p["".concat(l,".").concat(d)]||p[d]||c[d]||i;return r?n.createElement(h,o(o({ref:t},m),{},{components:r})):n.createElement(h,o({ref:t},m))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},74939:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={title:"System requirements",description:"Ensure you meet the system requirements to sync and run Besu.",sidebar_position:1,tags:["private networks"]},o="System requirements",s={unversionedId:"private-networks/get-started/system-requirements",id:"private-networks/get-started/system-requirements",title:"System requirements",description:"Ensure you meet the system requirements to sync and run Besu.",source:"@site/docs/private-networks/get-started/system-requirements.md",sourceDirName:"private-networks/get-started",slug:"/private-networks/get-started/system-requirements",permalink:"/development/private-networks/get-started/system-requirements",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/get-started/system-requirements.md",tags:[{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1694117469,formattedLastUpdatedAt:"Sep 7, 2023",sidebarPosition:1,frontMatter:{title:"System requirements",description:"Ensure you meet the system requirements to sync and run Besu.",sidebar_position:1,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Get started",permalink:"/development/private-networks/get-started"},next:{title:"Installation options",permalink:"/development/private-networks/get-started/install/"}},l={},u=[{value:"Determining system requirements",id:"determining-system-requirements",level:2},{value:"Java Virtual Machine size",id:"java-virtual-machine-size",level:2},{value:"VM requirements",id:"vm-requirements",level:2},{value:"Disk type",id:"disk-type",level:2}],m={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"system-requirements"},"System requirements"),(0,a.kt)("p",null,"Private network system requirements depend on many factors, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Size of the world state for the network."),(0,a.kt)("li",{parentName:"ul"},"Number of transactions submitted to the network."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/development/public-networks/reference/genesis-items#genesis-block-parameters"},"Block gas limit"),"."),(0,a.kt)("li",{parentName:"ul"},"Number and complexity of ",(0,a.kt)("a",{parentName:"li",href:"/development/public-networks/how-to/use-besu-api/json-rpc"},"JSON-RPC"),", ",(0,a.kt)("a",{parentName:"li",href:"/development/public-networks/how-to/use-besu-api/rpc-pubsub"},"PubSub"),", or ",(0,a.kt)("a",{parentName:"li",href:"/development/public-networks/how-to/use-besu-api/graphql"},"GraphQL")," queries handled by the node.")),(0,a.kt)("p",null,"Participation in private networks is typically restricted in some way, so the volume of traffic is much lower than on Mainnet, resulting in lower system requirements."),(0,a.kt)("h2",{id:"determining-system-requirements"},"Determining system requirements"),(0,a.kt)("p",null,"To determine system requirements, check CPU and disk space requirements using ",(0,a.kt)("a",{parentName:"p",href:"/development/public-networks/how-to/monitor/metrics"},"Prometheus"),". Grafana provides a ",(0,a.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards/10273"},"sample dashboard")," for Besu."),(0,a.kt)("h2",{id:"java-virtual-machine-size"},"Java Virtual Machine size"),(0,a.kt)("p",null,"Depending on your environment and network setup, the minimum Java Virtual Machine (JVM) memory requirement for private networks is 4 GB."),(0,a.kt)("p",null,"JVM memory requirements are highest when syncing, but will reduce after the node is synchronized to the chain head. Monitor your system to determine your actual JVM memory needs."),(0,a.kt)("h2",{id:"vm-requirements"},"VM requirements"),(0,a.kt)("p",null,"If you set up your own VM locally using a VM manager such as ",(0,a.kt)("a",{parentName:"p",href:"https://www.oracle.com/virtualization/virtualbox/"},"VirtualBox"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ensure you enable Intel Virtualization Technology (VTx) and Virtualization Technology for Directed I/O (VT-d) in the BIOS settings."),(0,a.kt)("li",{parentName:"ul"},"On Windows, you might need to disable Hyper-V in the Windows Feature list.")),(0,a.kt)("p",null,"We recommend you create a VM with the following attributes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Memory size: Set to 6 GB (recommended)"),(0,a.kt)("li",{parentName:"ul"},"Create a virtual hard disk with at least 10 GB (20 GB recommended)"),(0,a.kt)("li",{parentName:"ul"},"Virtual hard disk file type: VDI (if you need to share it with other apps, use VHD)"),(0,a.kt)("li",{parentName:"ul"},'(Optional) You can create a shared directory to copy block files or genesis files from the host computer to the VM. For details on how to create a shared directory, see "Share Folders" in the ',(0,a.kt)("a",{parentName:"li",href:"https://docs.oracle.com/en/virtualization/virtualbox/6.1/user/"},"Oracle VirtualBox documentation"),".")),(0,a.kt)("h2",{id:"disk-type"},"Disk type"),(0,a.kt)("p",null,"Use ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/disks"},"local SSD storage")," for high throughput nodes (validators and RPC nodes). Read-only nodes can use a lower performance setup."),(0,a.kt)("p",null,"You can use local SSDs through ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SCSI"},"SCSI interfaces"),". For higher performance in production settings, we recommend upgrading to ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/disks/local-ssd#performance"},"NVMe interfaces"),"."))}p.isMDXComponent=!0}}]);