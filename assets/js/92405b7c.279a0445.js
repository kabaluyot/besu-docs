"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[21353],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,b=c["".concat(s,".").concat(m)]||c[m]||k[m]||o;return r?a.createElement(b,i(i({ref:t},u),{},{components:r})):a.createElement(b,i({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5914:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={description:"Private networks how to overview",tags:["private networks"]},i="How to",l={unversionedId:"private-networks/how-to/index",id:"version-23.4.1/private-networks/how-to/index",title:"How to",description:"Private networks how to overview",source:"@site/versioned_docs/version-23.4.1/private-networks/how-to/index.md",sourceDirName:"private-networks/how-to",slug:"/private-networks/how-to/",permalink:"/stable/private-networks/how-to/",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/how-to/index.md",tags:[{label:"private networks",permalink:"/stable/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1689007540,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{description:"Private networks how to overview",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Start Besu",permalink:"/stable/private-networks/get-started/start-node"},next:{title:"Consensus protocols",permalink:"/stable/private-networks/how-to/configure/consensus/"}},s={},p=[],u={toc:p},c="wrapper";function k(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to"},"How to"),(0,n.kt)("p",null,"This section provides instructional content for private network features."),(0,n.kt)("p",null,"The following features are shared with ",(0,n.kt)("a",{parentName:"p",href:"/stable/public-networks/"},"public networks")," and the content can be found in the public networks section:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Configure and manage:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/stable/public-networks/how-to/configuration-file"},"Use a configuration file")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/stable/public-networks/how-to/configure-ha/"},"Configure high availability")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/stable/public-networks/how-to/use-pow/mining"},"Configure mining")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/stable/public-networks/how-to/use-besu-api/"},"Use the Besu API"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/stable/public-networks/how-to/use-besu-api/json-rpc"},"Use JSON-RPC over HTTP, WS, and IPC")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/stable/public-networks/how-to/use-besu-api/rpc-pubsub"},"Use RPC Pub/Sub over WS")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/stable/public-networks/how-to/use-besu-api/graphql"},"Use GraphQL over HTTP")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/stable/public-networks/how-to/use-besu-api/authenticate"},"Authenticate JSON-RPC requests")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/stable/public-networks/how-to/use-besu-api/access-logs"},"Access logs using JSON-RPC API")))),(0,n.kt)("li",{parentName:"ul"},"Find and connect to peers:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/stable/public-networks/how-to/connect/static-nodes"},"Configure static nodes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/stable/public-networks/how-to/connect/configure-ports"},"Configure ports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/stable/public-networks/how-to/connect/manage-peers"},"Manage peers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/stable/public-networks/how-to/connect/specify-nat"},"Specify NAT method")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/stable/public-networks/how-to/configure-jvm/"},"Configure the Java Virtual Machine"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/stable/public-networks/how-to/configure-jvm/pass-jvm-options"},"Pass JVM options")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/stable/public-networks/how-to/configure-jvm/manage-memory"},"Manage JVM memory")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/stable/public-networks/how-to/configure-jvm/java-flight-recorder"},"Use Java Flight Recorder")))),(0,n.kt)("li",{parentName:"ul"},"Develop dapps:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/stable/public-networks/how-to/develop/truffle"},"Use Truffle")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/stable/public-networks/how-to/develop/client-libraries"},"Use client libraries")))),(0,n.kt)("li",{parentName:"ul"},"Troubleshoot:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/stable/public-networks/how-to/troubleshoot/evm-tool"},"Use EVM tool")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/stable/public-networks/how-to/troubleshoot/trace-transactions"},"Trace transactions"))))))}k.isMDXComponent=!0}}]);