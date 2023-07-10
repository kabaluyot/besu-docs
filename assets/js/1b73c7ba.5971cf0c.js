"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[73495],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),k=o,f=c["".concat(p,".").concat(k)]||c[k]||m[k]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},18514:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={description:"Private networks how to overview",tags:["private networks"]},i="How to",l={unversionedId:"private-networks/how-to/index",id:"private-networks/how-to/index",title:"How to",description:"Private networks how to overview",source:"@site/docs/private-networks/how-to/index.md",sourceDirName:"private-networks/how-to",slug:"/private-networks/how-to/",permalink:"/development/private-networks/how-to/",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/how-to/index.md",tags:[{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1689007540,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{description:"Private networks how to overview",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Start Besu",permalink:"/development/private-networks/get-started/start-node"},next:{title:"Consensus protocols",permalink:"/development/private-networks/how-to/configure/consensus/"}},p={},s=[],u={toc:s},c="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to"},"How to"),(0,o.kt)("p",null,"This section provides instructional content for private network features."),(0,o.kt)("p",null,"The following features are shared with ",(0,o.kt)("a",{parentName:"p",href:"/development/public-networks/"},"public networks")," and the content can be found in the public networks section:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Configure and manage:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/how-to/configuration-file"},"Use a configuration file")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/how-to/configure-ha/"},"Configure high availability")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/how-to/use-pow/mining"},"Configure mining")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/how-to/use-besu-api/"},"Use the Besu API"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/how-to/use-besu-api/json-rpc"},"Use JSON-RPC over HTTP, WS, and IPC")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/how-to/use-besu-api/rpc-pubsub"},"Use RPC Pub/Sub over WS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/how-to/use-besu-api/graphql"},"Use GraphQL over HTTP")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/how-to/use-besu-api/authenticate"},"Authenticate JSON-RPC requests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/how-to/use-besu-api/access-logs"},"Access logs using JSON-RPC API")))),(0,o.kt)("li",{parentName:"ul"},"Find and connect to peers:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/how-to/connect/static-nodes"},"Configure static nodes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/how-to/connect/configure-ports"},"Configure ports")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/how-to/connect/manage-peers"},"Manage peers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/how-to/connect/specify-nat"},"Specify NAT method")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/how-to/configure-jvm/"},"Configure the Java Virtual Machine"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/how-to/configure-jvm/pass-jvm-options"},"Pass JVM options")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/how-to/configure-jvm/manage-memory"},"Manage JVM memory")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/how-to/configure-jvm/java-flight-recorder"},"Use Java Flight Recorder")))),(0,o.kt)("li",{parentName:"ul"},"Develop dapps:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/how-to/develop/truffle"},"Use Truffle")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/how-to/develop/client-libraries"},"Use client libraries")))),(0,o.kt)("li",{parentName:"ul"},"Troubleshoot:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/how-to/troubleshoot/evm-tool"},"Use EVM tool")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/how-to/troubleshoot/trace-transactions"},"Trace transactions"))))))}m.isMDXComponent=!0}}]);