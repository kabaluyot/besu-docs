"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[20816],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(a),u=r,b=f["".concat(o,".").concat(u)]||f[u]||d[u]||l;return a?n.createElement(b,i(i({ref:t},c),{},{components:a})):n.createElement(b,i({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[f]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},65258:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"Access logs using JSON-RPC",sidebar_position:5,description:"Accessing logs using the Hyperledger Besu API",tags:["private networks"]},i="Access logs using the Hyperledger Besu API",s={unversionedId:"public-networks/how-to/use-besu-api/access-logs",id:"version-23.4.1/public-networks/how-to/use-besu-api/access-logs",title:"Access logs using JSON-RPC",description:"Accessing logs using the Hyperledger Besu API",source:"@site/versioned_docs/version-23.4.1/public-networks/how-to/use-besu-api/access-logs.md",sourceDirName:"public-networks/how-to/use-besu-api",slug:"/public-networks/how-to/use-besu-api/access-logs",permalink:"/stable/public-networks/how-to/use-besu-api/access-logs",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/public-networks/how-to/use-besu-api/access-logs.md",tags:[{label:"private networks",permalink:"/stable/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1689007540,formattedLastUpdatedAt:"Jul 10, 2023",sidebarPosition:5,frontMatter:{title:"Access logs using JSON-RPC",sidebar_position:5,description:"Accessing logs using the Hyperledger Besu API",tags:["private networks"]},sidebar:"publicDocSidebar",previous:{title:"Authenticate over JSON-RPC requests",permalink:"/stable/public-networks/how-to/use-besu-api/authenticate"},next:{title:"Use the Engine API",permalink:"/stable/public-networks/how-to/use-engine-api"}},o={},p=[{value:"Create a filter",id:"create-a-filter",level:2},{value:"Poll a filter for changes",id:"poll-a-filter-for-changes",level:3},{value:"Get all logs for a filter",id:"get-all-logs-for-a-filter",level:3},{value:"Uninstall a filter",id:"uninstall-a-filter",level:2},{value:"Filters for private contracts",id:"filters-for-private-contracts",level:2},{value:"Get logs using a filter options object",id:"get-logs-using-a-filter-options-object",level:2}],c={toc:p},f="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(f,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"access-logs-using-the-hyperledger-besu-api"},"Access logs using the Hyperledger Besu API"),(0,r.kt)("p",null,"Subscribe to events, such as logs, using either ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/how-to/use-besu-api/rpc-pubsub"},"RPC Pub/Sub over WebSockets")," or filters over HTTP."),(0,r.kt)("p",null,"Access logs using the following Hyperledger Besu API methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/api/#eth_getfilterchanges"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_getFilterChanges"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/api/#eth_getfilterlogs"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_getFilterLogs"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/api/#eth_getlogs"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_getLogs")),".")),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/api/#eth_newfilter"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_newFilter"))," to create the filter before using ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/api/#eth_getfilterchanges"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_getFilterChanges"))," and ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/api/#eth_getfilterlogs"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_getFilterLogs")),")."),(0,r.kt)("p",null,"Access logs for ",(0,r.kt)("a",{parentName:"p",href:"/stable/private-networks/concepts/privacy/"},"private contracts")," using the equivalent ",(0,r.kt)("a",{parentName:"p",href:"#filters-for-private-contracts"},(0,r.kt)("inlineCode",{parentName:"a"},"priv_*")," methods and specifying the privacy group ID"),". For example, ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/api/#priv_getlogs"},(0,r.kt)("inlineCode",{parentName:"a"},"priv_getLogs")),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The following examples use the sample contract included in ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/concepts/events-and-logs"},"events and logs"),".")),(0,r.kt)("h2",{id:"create-a-filter"},"Create a filter"),(0,r.kt)("p",null,"Create a filter using ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/api/#eth_newfilter"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_newFilter")),"."),(0,r.kt)("p",null,"If the ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/concepts/events-and-logs"},"example contract")," was deployed to 0x42699a7612a82f1d9c36148af9c77354759b210b, the following request for ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_newFilter")," creates a filter to log when ",(0,r.kt)("inlineCode",{parentName:"p"},"valueIndexed")," is set to 5:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "eth_newFilter",\n  "params": [\n    {\n      "fromBlock": "earliest",\n      "toBlock": "latest",\n      "address": "0x42699a7612a82f1d9c36148af9c77354759b210b",\n      "topics": [\n        ["0xd3610b1c54575b7f4f0dc03d210b8ac55624ae007679b7a928a4f25a709331a8"],\n        ["0x0000000000000000000000000000000000000000000000000000000000000005"]\n      ]\n    }\n  ],\n  "id": 1\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/api/#eth_newfilter"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_newFilter"))," returns a filter ID hash (for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"0x1ddf0c00989044e9b41cc0ae40272df3"),")."),(0,r.kt)("h3",{id:"poll-a-filter-for-changes"},"Poll a filter for changes"),(0,r.kt)("p",null,"To poll the filter for changes since the last poll, use ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/api/#eth_getfilterchanges"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_getFilterChanges"))," with the filter ID hash returned by ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/api/#eth_newfilter"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_newFilter")),"."),(0,r.kt)("p",null,"If the contract had been executed twice since the last poll, with ",(0,r.kt)("inlineCode",{parentName:"p"},"valueIndexed")," set to 1 and 5, ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/api/#eth_getfilterchanges"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_getFilterChanges"))," returns only the log where the ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/concepts/events-and-logs#event-parameters"},"topic")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"valueIndexed")," is 5:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": [\n    {\n      "logIndex": "0x0",\n      "removed": false,\n      "blockNumber": "0x21c",\n      "blockHash": "0xc7e6c9d5b9f522b2c9d2991546be0a8737e587beb6628c056f3c327a44b45132",\n      "transactionHash": "0xfd1a40f9fbf89c97b4545ec9db774c85e51dd8a3545f969418a22f9cb79417c5",\n      "transactionIndex": "0x0",\n      "address": "0x42699a7612a82f1d9c36148af9c77354759b210b",\n      "data": "0x0000000000000000000000000000000000000000000000000000000000000005",\n      "topics": [\n        "0xd3610b1c54575b7f4f0dc03d210b8ac55624ae007679b7a928a4f25a709331a8",\n        "0x0000000000000000000000000000000000000000000000000000000000000005"\n      ]\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"get-all-logs-for-a-filter"},"Get all logs for a filter"),(0,r.kt)("p",null,"To get all logs for a filter, use ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/api/#eth_getfilterlogs"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_getFilterLogs")),"."),(0,r.kt)("p",null,"If the contract had been executed twice with ",(0,r.kt)("inlineCode",{parentName:"p"},"valueIndexed")," set to 5 since the filter was created using ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_newFilter"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_getFilterLogs")," returns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": [\n    {\n      "logIndex": "0x0",\n      "removed": false,\n      "blockNumber": "0x1a7",\n      "blockHash": "0x4edda22a242ddc7bc51e2b6b11e63cd67be1af7389470cdea9c869768ff75d42",\n      "transactionHash": "0x9535bf8830a72ca7d0020df0b547adc4d0ecc4321b7d5b5d6beb1eccee5c0afa",\n      "transactionIndex": "0x0",\n      "address": "0x42699a7612a82f1d9c36148af9c77354759b210b",\n      "data": "0x0000000000000000000000000000000000000000000000000000000000000005",\n      "topics": [\n        "0xd3610b1c54575b7f4f0dc03d210b8ac55624ae007679b7a928a4f25a709331a8",\n        "0x0000000000000000000000000000000000000000000000000000000000000005"\n      ]\n    },\n    {\n      "logIndex": "0x0",\n      "removed": false,\n      "blockNumber": "0x21c",\n      "blockHash": "0xc7e6c9d5b9f522b2c9d2991546be0a8737e587beb6628c056f3c327a44b45132",\n      "transactionHash": "0xfd1a40f9fbf89c97b4545ec9db774c85e51dd8a3545f969418a22f9cb79417c5",\n      "transactionIndex": "0x0",\n      "address": "0x42699a7612a82f1d9c36148af9c77354759b210b",\n      "data": "0x0000000000000000000000000000000000000000000000000000000000000005",\n      "topics": [\n        "0xd3610b1c54575b7f4f0dc03d210b8ac55624ae007679b7a928a4f25a709331a8",\n        "0x0000000000000000000000000000000000000000000000000000000000000005"\n      ]\n    }\n  ]\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can use ",(0,r.kt)("a",{parentName:"p",href:"#get-logs-using-a-filter-options-object"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_getLogs"))," with a filter options object to get all logs matching the filter options instead of using ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/api/#eth_newfilter"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_newFilter"))," followed by ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/api/#eth_getfilterlogs"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_getFilterLogs")),".")),(0,r.kt)("h2",{id:"uninstall-a-filter"},"Uninstall a filter"),(0,r.kt)("p",null,"When a filter is no longer required, use ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/api/#eth_uninstallfilter"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_uninstallFilter"))," to remove the filter."),(0,r.kt)("h2",{id:"filters-for-private-contracts"},"Filters for private contracts"),(0,r.kt)("p",null,"Filters for private contracts are created, accessed, and uninstalled using:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/api/#priv_getfilterchanges"},(0,r.kt)("inlineCode",{parentName:"a"},"priv_getFilterChanges"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/api/#priv_getfilterlogs"},(0,r.kt)("inlineCode",{parentName:"a"},"priv_getFilterLogs"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/api/#priv_getlogs"},(0,r.kt)("inlineCode",{parentName:"a"},"priv_getLogs"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/api/#priv_newfilter"},(0,r.kt)("inlineCode",{parentName:"a"},"priv_newFilter"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/api/#priv_uninstallfilter"},(0,r.kt)("inlineCode",{parentName:"a"},"priv_uninstallFilter")),".")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/stable/private-networks/concepts/privacy/"},"privacy group ID")," must be specified as parameter 0 for the ",(0,r.kt)("inlineCode",{parentName:"p"},"priv")," methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "priv_newFilter",\n  "params": [\n    "4rFldHM792LeP/e2WPkTXZedjwKuTr/KwCFTt6mBbkI=",\n    {\n      "fromBlock": "earliest",\n      "toBlock": "latest",\n      "addresses": ["0x991cc548c154b2953cc48c02f782e1314097dfbb"],\n      "topics": [\n        "0x85bea11d86cefb165374e0f727bacf21dc2f4ea816493981ecf72dcfb212a410"\n      ]\n    }\n  ],\n  "id": 1\n}\n')),(0,r.kt)("h2",{id:"get-logs-using-a-filter-options-object"},"Get logs using a filter options object"),(0,r.kt)("p",null,"To get all logs for a filter options object, use ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/api/#eth_getlogs"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_getLogs"))," or ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/api/#priv_getlogs"},(0,r.kt)("inlineCode",{parentName:"a"},"priv_getLogs"))," for a private contract."),(0,r.kt)("p",null,"The following request for ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_getLogs")," returns all the logs where the example contract has been deployed to ",(0,r.kt)("inlineCode",{parentName:"p"},"0x42699a7612a82f1d9c36148af9c77354759b210b")," and executed with ",(0,r.kt)("inlineCode",{parentName:"p"},"valueIndexed")," set to 5."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "eth_getLogs",\n  "params": [\n    {\n      "fromBlock": "earliest",\n      "toBlock": "latest",\n      "address": "0x42699a7612a82f1d9c36148af9c77354759b210b",\n      "topics": [\n        ["0xd3610b1c54575b7f4f0dc03d210b8ac55624ae007679b7a928a4f25a709331a8"],\n        ["0x0000000000000000000000000000000000000000000000000000000000000005"]\n      ]\n    }\n  ],\n  "id": 1\n}\n')),(0,r.kt)("p",null,"The above example returns the same result as calling ",(0,r.kt)("a",{parentName:"p",href:"#creating-a-filter"},"eth_newFilter")," followed by ",(0,r.kt)("a",{parentName:"p",href:"#getting-all-logs-for-a-filter"},"eth_getFilterLogs"),"."))}d.isMDXComponent=!0}}]);