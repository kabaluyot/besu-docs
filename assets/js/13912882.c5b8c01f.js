"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[56142],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),b=o,h=d["".concat(l,".").concat(b)]||d[b]||c[b]||a;return r?n.createElement(h,s(s({ref:t},u),{},{components:r})):n.createElement(h,s({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},3541:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"Upgrade Besu",sidebar_position:11,description:"Upgrade your Besu node to a new version.",tags:["public networks"]},s="Upgrade your Besu node",i={unversionedId:"public-networks/how-to/upgrade-node",id:"public-networks/how-to/upgrade-node",title:"Upgrade Besu",description:"Upgrade your Besu node to a new version.",source:"@site/docs/public-networks/how-to/upgrade-node.md",sourceDirName:"public-networks/how-to",slug:"/public-networks/how-to/upgrade-node",permalink:"/development/public-networks/how-to/upgrade-node",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/how-to/upgrade-node.md",tags:[{label:"public networks",permalink:"/development/tags/public-networks"}],version:"current",lastUpdatedAt:1689360554,formattedLastUpdatedAt:"Jul 14, 2023",sidebarPosition:11,frontMatter:{title:"Upgrade Besu",sidebar_position:11,description:"Upgrade your Besu node to a new version.",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Configure mining",permalink:"/development/public-networks/how-to/use-pow/mining"},next:{title:"Use EVM tool",permalink:"/development/public-networks/how-to/troubleshoot/evm-tool"}},l={},p=[{value:"Ansible",id:"ansible",level:2},{value:"Find peers on restarting",id:"find-peers-on-restarting",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"upgrade-your-besu-node"},"Upgrade your Besu node"),(0,o.kt)("p",null,"When upgrading your Besu node, we recommend:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using an orchestration method (for example, Ansible or Chef) to keep all nodes in sync with your desired configuration."),(0,o.kt)("li",{parentName:"ul"},"Storing your configuration under version control.")),(0,o.kt)("h2",{id:"ansible"},"Ansible"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("a",{parentName:"p",href:"https://galaxy.ansible.com/consensys/hyperledger_besu"},"Ansible role on Galaxy")," directly or customize it to suit your needs."),(0,o.kt)("p",null,"Upgrade the Besu version on nodes by running the play with the new version. For more information, For more information, select ",(0,o.kt)("strong",{parentName:"p"},"Read Me")," on the ",(0,o.kt)("a",{parentName:"p",href:"https://galaxy.ansible.com/consensys/hyperledger_besu"},"Ansible Galaxy Besu page"),"."),(0,o.kt)("p",null,"The playbook:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Stops Besu."),(0,o.kt)("li",{parentName:"ol"},"Downloads the updated version."),(0,o.kt)("li",{parentName:"ol"},"Applies any new configuration."),(0,o.kt)("li",{parentName:"ol"},"Starts Besu.")),(0,o.kt)("h2",{id:"find-peers-on-restarting"},"Find peers on restarting"),(0,o.kt)("p",null,"Nodes store known peers in the peer table. The peer table is not persisted to disk. When a node restarts, the node connects to the specified bootnodes and discovers other nodes through the peer discovery process. The node continues collecting data from where it left off before the restart (assuming there was no data corruption in a failure scenario)."),(0,o.kt)("p",null,"Before the node restarted, connected peers saved the node details in their peer tables. These peers can reconnect to the restarted node. The restarted node uses these peers and the bootnodes, to discover more peers. To ensure that the restarted node successfully rejoins the network, ensure you specify at least one operational bootnode."))}c.isMDXComponent=!0}}]);