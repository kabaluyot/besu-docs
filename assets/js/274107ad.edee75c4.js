"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[52590],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),y=o,b=u["".concat(l,".").concat(y)]||u[y]||d[y]||a;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},25222:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:2,title:"Use Ansible",description:"Deploying Hyperledger Besu with Ansible role on Galaxy",tags:["private networks"]},i="Deploy Besu with Ansible",s={unversionedId:"private-networks/how-to/deploy/ansible",id:"version-23.4.1/private-networks/how-to/deploy/ansible",title:"Use Ansible",description:"Deploying Hyperledger Besu with Ansible role on Galaxy",source:"@site/versioned_docs/version-23.4.1/private-networks/how-to/deploy/ansible.md",sourceDirName:"private-networks/how-to/deploy",slug:"/private-networks/how-to/deploy/ansible",permalink:"/stable/private-networks/how-to/deploy/ansible",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/how-to/deploy/ansible.md",tags:[{label:"private networks",permalink:"/stable/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1688668846,formattedLastUpdatedAt:"Jul 6, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Use Ansible",description:"Deploying Hyperledger Besu with Ansible role on Galaxy",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Deploy to the cloud",permalink:"/stable/private-networks/how-to/deploy/cloud"},next:{title:"Use Kubernetes",permalink:"/stable/private-networks/how-to/deploy/kubernetes"}},l={},p=[],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-besu-with-ansible"},"Deploy Besu with Ansible"),(0,o.kt)("p",null,"To deploy Besu using Ansible, use the ",(0,o.kt)("a",{parentName:"p",href:"https://galaxy.ansible.com/consensys/hyperledger_besu"},"Hyperledger Besu role")," published on Galaxy."),(0,o.kt)("p",null,'For more information, see the "Read Me" button on the ',(0,o.kt)("a",{parentName:"p",href:"https://galaxy.ansible.com/consensys/hyperledger_besu"},"Ansible Galaxy Besu page"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"We strongly recommend automating network creation. Automating makes updates easier and ensures your configuration is synchronized across the network.")))}d.isMDXComponent=!0}}]);