"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[63792],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),s=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),y=n,m=u["".concat(p,".").concat(y)]||u[y]||d[y]||i;return r?o.createElement(m,a(a({ref:t},c),{},{components:r})):o.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}y.displayName="MDXCreateElement"},66570:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const i={title:"Deploy to the cloud",sidebar_position:1,description:"Deploying Besu to the cloud",tags:["private networks"]},a="Deploy Besu to the cloud",l={unversionedId:"private-networks/how-to/deploy/cloud",id:"private-networks/how-to/deploy/cloud",title:"Deploy to the cloud",description:"Deploying Besu to the cloud",source:"@site/docs/private-networks/how-to/deploy/cloud.md",sourceDirName:"private-networks/how-to/deploy",slug:"/private-networks/how-to/deploy/cloud",permalink:"/development/private-networks/how-to/deploy/cloud",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/how-to/deploy/cloud.md",tags:[{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1697011484,formattedLastUpdatedAt:"Oct 11, 2023",sidebarPosition:1,frontMatter:{title:"Deploy to the cloud",sidebar_position:1,description:"Deploying Besu to the cloud",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Use onchain permissioning",permalink:"/development/private-networks/how-to/use-permissioning/onchain"},next:{title:"Use Ansible",permalink:"/development/private-networks/how-to/deploy/ansible"}},p={},s=[],c={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"deploy-besu-to-the-cloud"},"Deploy Besu to the cloud"),(0,n.kt)("p",null,"When deploying Besu to the cloud:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ensure you have enough spread across Availability Zones (AZs) and Regions, especially for bootnodes and validators."),(0,n.kt)("li",{parentName:"ul"},"If your network is a multi-region network, consider using VPC Peering to reduce latency."),(0,n.kt)("li",{parentName:"ul"},"Where required, use VPNs to connect to your on premise systems, or single private chains."),(0,n.kt)("li",{parentName:"ul"},"If deploying to Kubernetes, please refer to the ",(0,n.kt)("a",{parentName:"li",href:"/development/private-networks/tutorials/kubernetes/"},"tutorial"),".")))}u.isMDXComponent=!0}}]);