"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[68797],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},f="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),f=c(a),u=r,b=f["".concat(p,".").concat(u)]||f[u]||l[u]||i;return a?n.createElement(b,s(s({ref:t},d),{},{components:a})):n.createElement(b,s({ref:t},d))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[f]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},90226:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={title:"Create and send private transactions",description:"Creating and sending private transactions with Hyperledger Besu",sidebar_position:1},s="Create and send private transactions",o={unversionedId:"private-networks/how-to/send-transactions/private-transactions",id:"version-23.4.0/private-networks/how-to/send-transactions/private-transactions",title:"Create and send private transactions",description:"Creating and sending private transactions with Hyperledger Besu",source:"@site/versioned_docs/version-23.4.0/private-networks/how-to/send-transactions/private-transactions.md",sourceDirName:"private-networks/how-to/send-transactions",slug:"/private-networks/how-to/send-transactions/private-transactions",permalink:"/23.4.0/private-networks/how-to/send-transactions/private-transactions",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/private-networks/how-to/send-transactions/private-transactions.md",tags:[],version:"23.4.0",lastUpdatedAt:1698354162,formattedLastUpdatedAt:"Oct 26, 2023",sidebarPosition:1,frontMatter:{title:"Create and send private transactions",description:"Creating and sending private transactions with Hyperledger Besu",sidebar_position:1},sidebar:"privateDocSidebar",previous:{title:"Create and send transactions",permalink:"/23.4.0/private-networks/how-to/send-transactions/"},next:{title:"Send concurrent private transactions",permalink:"/23.4.0/private-networks/how-to/send-transactions/concurrent-private-transactions"}},p={},c=[{value:"eea_sendRawTransaction",id:"eea_sendrawtransaction",level:2},{value:"priv_distributeRawTransaction",id:"priv_distributerawtransaction",level:2},{value:"EEA-compliant or Besu-extended privacy",id:"eea-compliant-or-besu-extended-privacy",level:2},{value:"Unsigned and unencoded private transactions",id:"unsigned-and-unencoded-private-transactions",level:2}],d={toc:c};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-and-send-private-transactions"},"Create and send private transactions"),(0,r.kt)("p",null,"Create and send ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/concepts/privacy/"},"private transactions")," using:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/23.4.0/private-networks/how-to/use-privacy/web3js-quorum"},"web3js-quorum client library")," or ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/web3j/web3j"},"web3j client library")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.ethsigner.consensys.net/Reference/API-Methods#eea_sendtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eea_sendTransaction")," with EthSigner")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#eea_sendrawtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eea_sendRawTransaction"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#priv_distributerawtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"priv_distributeRawTransaction")),".")),(0,r.kt)("p",null,"All private transaction participants must be online for a private transaction to be successfully distributed. If any participants are offline when submitting the private transaction, the transaction is not attempted and you must resubmit the transaction."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"gas")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"gasPrice")," specified when sending a private transaction are used by the ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/concepts/privacy/private-transactions/processing"},"privacy marker transaction (PMT)"),", not the private transaction itself."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Private transactions either deploy contracts or call contract functions. Ether transfer transactions cannot be private.")),(0,r.kt)("h2",{id:"eea_sendrawtransaction"},"eea_sendRawTransaction"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/reference/api/#eea_sendrawtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eea_sendRawTransaction"))," distributes the private transaction to the participating nodes, and signs and submits the PMT, as described in ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/concepts/privacy/private-transactions/processing"},"Private transaction processing"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/how-to/send-transactions/concurrent-private-transactions"},"sending concurrent transactions"),", you must use ",(0,r.kt)("a",{parentName:"p",href:"#priv_distributerawtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"priv_distributeRawTransaction"))," instead of ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/reference/api/#eea_sendrawtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eea_sendRawTransaction")),".")),(0,r.kt)("h2",{id:"priv_distributerawtransaction"},"priv_distributeRawTransaction"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/reference/api/#priv_distributerawtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"priv_distributeRawTransaction"))," instead of ",(0,r.kt)("a",{parentName:"p",href:"#eea_sendrawtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eea_sendRawTransaction"))," when sending ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/how-to/send-transactions/concurrent-private-transactions"},"concurrent private transactions"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/reference/api/#priv_distributerawtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"priv_distributeRawTransaction"))," distributes the private transaction to the participating nodes but does not sign and submit the PMT. That is, it performs steps 1 to 5 of ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/concepts/privacy/private-transactions/processing"},"private transaction processing"),"."),(0,r.kt)("p",null,"If using ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/reference/api/#priv_distributerawtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"priv_distributeRawTransaction"))," instead of ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/reference/api/#eea_sendrawtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eea_sendRawTransaction")),", use the value returned by ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/reference/api/#priv_distributerawtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"priv_distributeRawTransaction")),", which is the enclave key to the private transaction in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.tessera.consensys.net/"},"Tessera"),", in the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," field of a call to ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/api/#eth_sendrawtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_sendRawTransaction")),". Use the value returned by ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/reference/api/#priv_getprivacyprecompileaddress"},(0,r.kt)("inlineCode",{parentName:"a"},"priv_getPrivacyPrecompileAddress")),", which is the address of the ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/concepts/privacy/private-transactions/processing"},"privacy precompiled contract"),", in the ",(0,r.kt)("inlineCode",{parentName:"p"},"to")," field of the call."),(0,r.kt)("p",null,"By using the ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/how-to/send-transactions/"},"public Ethereum transaction"),", ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/api/#eth_sendrawtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_sendRawTransaction")),", you are signing and submitting the PMT yourself instead of having it signed by the Besu node, giving you greater control over the PMT."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"If the PMT is not sent after distributing the private transaction, the distributed private transaction is not executed and the private states are not updated.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Distribute private transaction using priv_distributeRawTransaction"',title:'"Distribute',private:!0,transaction:!0,using:!0,'priv_distributeRawTransaction"':!0},'{\n  "jsonrpc": "2.0",\n  "method": "priv_distributeRawTransaction",\n  "params": [\n    "0xf90198808203e8832dc6c08080b8fb608060405234801561001057600080fd5b5060dc8061001f6000396000f3006080604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633fa4f24514604e57806355241077146076575b600080fd5b348015605957600080fd5b50606060a0565b6040518082815260200191505060405180910390f35b348015608157600080fd5b50609e6004803603810190808035906020019092919050505060a6565b005b60005481565b80600081905550505600a165627a7a723058202bdbba2e694dba8fff33d9d0976df580f57bff0a40e25a46c398f8063b4c003600291ba05393543d483654fd01d9ee818cddfc7527dd6e13e6ef7b45a61e2ca13ffb6b70a0452338873862803ffe04056aea98cd0e3417ff971dcb384e54fce8ca1756a665a09de8260dc3763f8383a6a9ffe96909d36cd3ff4c346e3846a6467c50feaf0119e1a0839f41993789227ec721c9eaf1541683287fa436ef6edd9ec8fd088bad1a0c3c8a72657374726963746564"\n  ],\n  "id": 1\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Enclave key to the private transaction in Tessera returned by priv_distributeRawTransaction"',title:'"Enclave',key:!0,to:!0,the:!0,private:!0,transaction:!0,in:!0,Tessera:!0,returned:!0,by:!0,'priv_distributeRawTransaction"':!0},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "0xfd0d90ab824574abc19c0776ca0210e764561d0ef6d621f2bbbea316eccfe56b"\n}\n')),(0,r.kt)("p",null,"Send the enclave key in the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," field, and the ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/reference/api/#priv_getprivacyprecompileaddress"},"privacy precompile address")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"to")," field of ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_sendRawTransaction"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "eth_sendRawTransaction",\n  "params": [\n    {\n      "from": "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73",\n      "to": "0x000000000000000000000000000000000000007e",\n      "data": "0xfd0d90ab824574abc19c0776ca0210e764561d0ef6d621f2bbbea316eccfe56b",\n      "gas": "0x2E1800",\n      "gasPrice": "0x9184e72a000"\n    }\n  ],\n  "id": 1\n}\n')),(0,r.kt)("h2",{id:"eea-compliant-or-besu-extended-privacy"},"EEA-compliant or Besu-extended privacy"),(0,r.kt)("p",null,"To create an ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/concepts/privacy/privacy-groups#enterprise-ethereum-alliance-privacy"},"EEA-compliant private transaction"),", specify ",(0,r.kt)("inlineCode",{parentName:"p"},"privateFor")," when creating the signed transaction passed as an input parameter to ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/reference/api/#eea_sendrawtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eea_sendRawTransaction")),"."),(0,r.kt)("p",null,"To create a ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/concepts/privacy/privacy-groups#besu-extended-privacy"},"Besu-extended private transaction"),", specify a ",(0,r.kt)("inlineCode",{parentName:"p"},"privacyGroupId")," when creating the signed transaction passed as an input parameter to ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/reference/api/#eea_sendrawtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eea_sendRawTransaction")),"."),(0,r.kt)("h2",{id:"unsigned-and-unencoded-private-transactions"},"Unsigned and unencoded private transactions"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/reference/api/#eea_sendrawtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eea_sendRawTransaction"))," parameter is a signed RLP-encoded private transaction. Shown below are examples of unsigned and unencoded private transactions to create a contract."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Unencoded and unsigned EEA-compliant private transaction"',title:'"Unencoded',and:!0,unsigned:!0,"EEA-compliant":!0,private:!0,'transaction"':!0},'{\n  "to": null,\n  "from": "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73",\n  "gas": "0x7600",\n  "gasPrice": "0x0",\n  "data": "0x608060405234801561001057600080fd5b5060dc8061001f6000396000f3006080604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633fa4f24514604e57806355241077146076575b600080fd5b348015605957600080fd5b50606060a0565b6040518082815260200191505060405180910390f35b348015608157600080fd5b50609e6004803603810190808035906020019092919050505060a6565b005b60005481565b80600081905550505600a165627a7a723058202bdbba2e694dba8fff33d9d0976df580f57bff0a40e25a46c398f8063b4c00360029",\n  "nonce": "0x0",\n  "privateFrom": "negmDcN2P4ODpqn/6WkJ02zT/0w0bjhGpkZ8UP6vARk=",\n  "privateFor": [\n    "g59BmTeJIn7HIcnq8VQWgyh/pDbvbt2eyP0Ii60aDDw=",\n    "6fg8q5rWMBoAT2oIiU3tYJbk4b7oAr7dxaaVY7TeM3U="\n  ],\n  "restriction": "restricted"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Unencoded and unsigned Besu-extended private transaction"',title:'"Unencoded',and:!0,unsigned:!0,"Besu-extended":!0,private:!0,'transaction"':!0},'{\n  "to": null,\n  "from": "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73",\n  "gas": "0x7600",\n  "gasPrice": "0x0",\n  "data": "0x608060405234801561001057600080fd5b5060dc8061001f6000396000f3006080604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633fa4f24514604e57806355241077146076575b600080fd5b348015605957600080fd5b50606060a0565b6040518082815260200191505060405180910390f35b348015608157600080fd5b50609e6004803603810190808035906020019092919050505060a6565b005b60005481565b80600081905550505600a165627a7a723058202bdbba2e694dba8fff33d9d0976df580f57bff0a40e25a46c398f8063b4c00360029",\n  "nonce": "0x0",\n  "privateFrom": "negmDcN2P4ODpqn/6WkJ02zT/0w0bjhGpkZ8UP6vARk=",\n  "privacyGroupId": "kAbelwaVW7okoEn1+okO+AbA4Hhz/7DaCOWVQz9nx5M=",\n  "restriction": "restricted"\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"example")," directory in the ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/how-to/use-privacy/web3js-quorum"},"web3js-quorum client library")," contains examples of signing and encoding private transactions.")))}f.isMDXComponent=!0}}]);