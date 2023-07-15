"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[51323],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,m=u["".concat(c,".").concat(d)]||u[d]||v[d]||i;return a?r.createElement(m,s(s({ref:t},l),{},{components:a})):r.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},91602:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>v,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={title:"Access private and privacy marker transactions",description:"Methods for accessing and managing private transactions and privacy groups in Hyperledger Besu",sidebar_position:6,tags:["private networks"]},s="Access private and privacy marker transactions",o={unversionedId:"private-networks/how-to/use-privacy/access-private-transactions",id:"version-23.4.1/private-networks/how-to/use-privacy/access-private-transactions",title:"Access private and privacy marker transactions",description:"Methods for accessing and managing private transactions and privacy groups in Hyperledger Besu",source:"@site/versioned_docs/version-23.4.1/private-networks/how-to/use-privacy/access-private-transactions.md",sourceDirName:"private-networks/how-to/use-privacy",slug:"/private-networks/how-to/use-privacy/access-private-transactions",permalink:"/stable/private-networks/how-to/use-privacy/access-private-transactions",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/how-to/use-privacy/access-private-transactions.md",tags:[{label:"private networks",permalink:"/stable/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1689380948,formattedLastUpdatedAt:"Jul 15, 2023",sidebarPosition:6,frontMatter:{title:"Access private and privacy marker transactions",description:"Methods for accessing and managing private transactions and privacy groups in Hyperledger Besu",sidebar_position:6,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Use flexible privacy groups",permalink:"/stable/private-networks/how-to/use-privacy/flexible"},next:{title:"Sign privacy marker transactions",permalink:"/stable/private-networks/how-to/use-privacy/sign-pmts"}},c={},p=[{value:"Transaction receipts",id:"transaction-receipts",level:2},{value:"Transactions",id:"transactions",level:2}],l={toc:p},u="wrapper";function v(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"access-private-and-privacy-marker-transactions"},"Access private and privacy marker transactions"),(0,n.kt)("p",null,"A Hyperledger Besu private transaction creates a ",(0,n.kt)("a",{parentName:"p",href:"/stable/private-networks/concepts/privacy/private-transactions/processing"},"privacy marker transaction")," and the private transaction itself."),(0,n.kt)("h2",{id:"transaction-receipts"},"Transaction receipts"),(0,n.kt)("p",null,"With the transaction hash returned when submitting the private transaction, to get the transaction receipt for the:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Private transaction, use ",(0,n.kt)("a",{parentName:"li",href:"/stable/private-networks/reference/api/#priv_gettransactionreceipt"},(0,n.kt)("inlineCode",{parentName:"a"},"priv_getTransactionReceipt")),"."),(0,n.kt)("li",{parentName:"ul"},"Privacy marker transaction, use ",(0,n.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/api/#eth_gettransactionreceipt"},(0,n.kt)("inlineCode",{parentName:"a"},"eth_getTransactionReceipt")),".")),(0,n.kt)("p",null,"The transaction receipt includes a ",(0,n.kt)("inlineCode",{parentName:"p"},"status")," indicating if the transaction failed (",(0,n.kt)("inlineCode",{parentName:"p"},"0x0"),"), succeeded (",(0,n.kt)("inlineCode",{parentName:"p"},"0x1"),"), or was invalid (",(0,n.kt)("inlineCode",{parentName:"p"},"0x2"),")."),(0,n.kt)("admonition",{title:"Private transaction failure example",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"To deploy a private contract, you submit a transaction using ",(0,n.kt)("a",{parentName:"p",href:"/stable/private-networks/how-to/send-transactions/private-transactions"},(0,n.kt)("inlineCode",{parentName:"a"},"eea_sendRawTransaction")),". If contract deployment fails because of insufficient gas, the privacy marker transaction receipt has a status of success and the private transaction receipt has a status of failure.")),(0,n.kt)("h2",{id:"transactions"},"Transactions"),(0,n.kt)("p",null,"With the transaction hash returned when submitting the private transaction, to get the:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Private transaction, use ",(0,n.kt)("a",{parentName:"li",href:"/stable/private-networks/reference/api/#priv_getprivatetransaction"},(0,n.kt)("inlineCode",{parentName:"a"},"priv_getPrivateTransaction")),"."),(0,n.kt)("li",{parentName:"ul"},"Privacy marker transaction, use ",(0,n.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/api/#eth_gettransactionbyhash"},(0,n.kt)("inlineCode",{parentName:"a"},"eth_getTransactionByHash")),".")))}v.isMDXComponent=!0}}]);