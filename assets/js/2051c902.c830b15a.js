"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[88804],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(o),m=r,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return o?n.createElement(f,i(i({ref:t},u),{},{components:o})):n.createElement(f,i({ref:t},u))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},7723:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=o(87462),r=(o(67294),o(3905));const a={title:"Proof of authority consensus",sidebar_position:1,description:"Besu proof of authority consensus protocols comparison",tags:["private networks"]},i="Proof of authority consensus",s={unversionedId:"private-networks/concepts/poa",id:"version-23.7.1/private-networks/concepts/poa",title:"Proof of authority consensus",description:"Besu proof of authority consensus protocols comparison",source:"@site/versioned_docs/version-23.7.1/private-networks/concepts/poa.md",sourceDirName:"private-networks/concepts",slug:"/private-networks/concepts/poa",permalink:"/23.7.1/private-networks/concepts/poa",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.1/private-networks/concepts/poa.md",tags:[{label:"private networks",permalink:"/23.7.1/tags/private-networks"}],version:"23.7.1",lastUpdatedAt:1696540378,formattedLastUpdatedAt:"Oct 5, 2023",sidebarPosition:1,frontMatter:{title:"Proof of authority consensus",sidebar_position:1,description:"Besu proof of authority consensus protocols comparison",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Concepts",permalink:"/23.7.1/private-networks/concepts/"},next:{title:"Privacy",permalink:"/23.7.1/private-networks/concepts/privacy/"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"Immediate finality",id:"immediate-finality",level:3},{value:"Minimum number of validators",id:"minimum-number-of-validators",level:3},{value:"Liveness",id:"liveness",level:3},{value:"Speed",id:"speed",level:3}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"proof-of-authority-consensus"},"Proof of authority consensus"),(0,r.kt)("p",null,"Besu implements the QBFT, IBFT 2.0, and Clique proof of authority (PoA) ",(0,r.kt)("a",{parentName:"p",href:"/23.7.1/private-networks/how-to/configure/consensus/"},"consensus protocols"),". PoA consensus protocols work when participants know each other and there is a level of trust between them. For example, in a permissioned consortium network."),(0,r.kt)("p",null,"PoA consensus protocols have faster block times and a much greater transaction throughput than the Ethash proof of work consensus protocol used on the Ethereum Mainnet."),(0,r.kt)("p",null,"In QBFT, IBFT 2.0, or Clique, a group of nodes in the network act as validators (QBFT and IBFT 2.0) or signers (Clique). The existing nodes in the signer/validator pool vote to add nodes to or remove nodes from the pool."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For the rest of this page, the term validator is used to refer to signers and validators.")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("p",null,"Properties to consider when comparing QBFT, IBFT 2.0, and Clique are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Immediate finality."),(0,r.kt)("li",{parentName:"ul"},"Minimum number of validators."),(0,r.kt)("li",{parentName:"ul"},"Liveness."),(0,r.kt)("li",{parentName:"ul"},"Speed.")),(0,r.kt)("h3",{id:"immediate-finality"},"Immediate finality"),(0,r.kt)("p",null,"QBFT and IBFT 2.0 have immediate finality; there are no forks and all valid blocks get included in the main chain."),(0,r.kt)("p",null,"Clique does not have immediate finality. Implementations using Clique must be aware of forks and chain reorganizations occurring."),(0,r.kt)("h3",{id:"minimum-number-of-validators"},"Minimum number of validators"),(0,r.kt)("p",null,"To be Byzantine fault tolerant, QBFT and IBFT 2.0 require a minimum of four validators."),(0,r.kt)("p",null,"Clique can operate with a single validator but operating with a single validator offers no redundancy if the validator fails."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Byzantine fault tolerant is the ability to function correctly and reach consensus despite nodes failing or propagating incorrect information to peers.")),(0,r.kt)("h3",{id:"liveness"},"Liveness"),(0,r.kt)("p",null,"Clique is more fault tolerant than QBFT and IBFT 2.0. Clique tolerates up to half of the validators failing. QBFT and IBFT 2.0 networks require greater than or equal to two-thirds of validators to be operating to create blocks. For example, an QBFT and IBFT 2.0 network of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Four to five validators tolerates one unresponsive validator."),(0,r.kt)("li",{parentName:"ul"},"Six to eight validators tolerates two unresponsive validators.")),(0,r.kt)("p",null,"Networks with three or less validators can produce blocks but do not guarantee finality when operating in adversarial environments."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"We recommend using QBFT or IBFT 2.0 networks with at least four nodes in production environments.")),(0,r.kt)("h3",{id:"speed"},"Speed"),(0,r.kt)("p",null,"Reaching consensus and adding blocks is faster in Clique networks. For Clique, the probability of a fork increases as the number of validators increases."),(0,r.kt)("p",null,"For QBFT and IBFT 2.0, the time to add new blocks increases as the number of validators increases."))}c.isMDXComponent=!0}}]);