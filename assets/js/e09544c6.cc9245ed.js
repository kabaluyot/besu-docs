"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[28983],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||r;return n?o.createElement(m,i(i({ref:t},l),{},{components:n})):o.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},49571:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={title:"Transaction pool",sidebar_position:2,description:"Transaction pool overview",tags:["public networks","private networks"]},i="Transaction pool",s={unversionedId:"public-networks/concepts/transactions/pool",id:"version-23.4.1/public-networks/concepts/transactions/pool",title:"Transaction pool",description:"Transaction pool overview",source:"@site/versioned_docs/version-23.4.1/public-networks/concepts/transactions/pool.md",sourceDirName:"public-networks/concepts/transactions",slug:"/public-networks/concepts/transactions/pool",permalink:"/23.4.1/public-networks/concepts/transactions/pool",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/public-networks/concepts/transactions/pool.md",tags:[{label:"public networks",permalink:"/23.4.1/tags/public-networks"},{label:"private networks",permalink:"/23.4.1/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1700670990,formattedLastUpdatedAt:"Nov 22, 2023",sidebarPosition:2,frontMatter:{title:"Transaction pool",sidebar_position:2,description:"Transaction pool overview",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Transaction types",permalink:"/23.4.1/public-networks/concepts/transactions/types"},next:{title:"Transaction validation",permalink:"/23.4.1/public-networks/concepts/transactions/validation"}},p={},c=[{value:"Dropping transactions when the transaction pool is full",id:"dropping-transactions-when-the-transaction-pool-is-full",level:2},{value:"Replacing transactions with the same sender and nonce",id:"replacing-transactions-with-the-same-sender-and-nonce",level:2},{value:"Size of the transaction pool",id:"size-of-the-transaction-pool",level:2}],l={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"transaction-pool"},"Transaction pool"),(0,a.kt)("p",null,"All nodes maintain a transaction pool to store pending transactions before processing."),(0,a.kt)("p",null,"Options and methods for configuring and monitoring the transaction pool include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/23.4.1/public-networks/reference/api/#txpool_besutransactions"},(0,a.kt)("inlineCode",{parentName:"a"},"txpool_besuTransactions"))," JSON-RPC API method to list transactions in the transaction pool."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/23.4.1/public-networks/reference/cli/options#tx-pool-max-size"},(0,a.kt)("inlineCode",{parentName:"a"},"--tx-pool-max-size"))," command line option to specify the maximum number of transactions in the transaction pool."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/23.4.1/public-networks/reference/cli/options#tx-pool-price-bump"},(0,a.kt)("inlineCode",{parentName:"a"},"--tx-pool-price-bump"))," command line option to specify the price bump percentage to replace an existing transaction."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/23.4.1/public-networks/reference/cli/options#tx-pool-retention-hours"},(0,a.kt)("inlineCode",{parentName:"a"},"--tx-pool-retention-hours"))," command line option to specify the maximum number of hours to keep pending transactions in the transaction pool."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/23.4.1/public-networks/how-to/use-besu-api/rpc-pubsub#pending-transactions"},(0,a.kt)("inlineCode",{parentName:"a"},"newPendingTransactions"))," and ",(0,a.kt)("a",{parentName:"li",href:"/23.4.1/public-networks/how-to/use-besu-api/rpc-pubsub#dropped-transactions"},(0,a.kt)("inlineCode",{parentName:"a"},"droppedPendingTransactions"))," RPC subscriptions to notify of transactions added to and dropped from the transaction pool.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"When submitting ",(0,a.kt)("a",{parentName:"p",href:"/23.4.1/private-networks/concepts/privacy/private-transactions/#nonce-validation"},"private transactions"),", the ",(0,a.kt)("a",{parentName:"p",href:"/23.4.1/private-networks/concepts/privacy/private-transactions/processing"},"privacy marker transaction")," is submitted to the transaction pool, not the private transaction itself.")),(0,a.kt)("h2",{id:"dropping-transactions-when-the-transaction-pool-is-full"},"Dropping transactions when the transaction pool is full"),(0,a.kt)("p",null,"When the transaction pool is full, it accepts and retains local transactions in preference to remote transactions. If the transaction pool is full of local transactions, Besu drops the oldest local transactions first. That is, a full transaction pool continues to accept new local transactions by first dropping remote transactions and then by dropping the oldest local transactions."),(0,a.kt)("h2",{id:"replacing-transactions-with-the-same-sender-and-nonce"},"Replacing transactions with the same sender and nonce"),(0,a.kt)("p",null,"You can replace a pending transaction with a transaction that has the same sender and nonce but a higher gas price."),(0,a.kt)("p",null,"If sending a ",(0,a.kt)("a",{parentName:"p",href:"/23.4.1/public-networks/concepts/transactions/types#frontier-transactions"},"legacy transaction"),", the old transaction is replaced if the new transaction has a gas price higher than the existing gas price by the percentage specified by ",(0,a.kt)("a",{parentName:"p",href:"/23.4.1/public-networks/reference/cli/options#tx-pool-price-bump"},(0,a.kt)("inlineCode",{parentName:"a"},"--tx-pool-price-bump")),"."),(0,a.kt)("p",null,"If sending an ",(0,a.kt)("a",{parentName:"p",href:"/23.4.1/public-networks/concepts/transactions/types#eip1559-transactions"},(0,a.kt)("inlineCode",{parentName:"a"},"EIP1559")," transaction"),", the old transaction is replaced if one of the following is true:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The new transaction's effective gas price is higher than the existing gas price by the percentage specified by ",(0,a.kt)("a",{parentName:"p",href:"/23.4.1/public-networks/reference/cli/options#tx-pool-price-bump"},(0,a.kt)("inlineCode",{parentName:"a"},"--tx-pool-price-bump"))," AND the new effective priority fee is greater than or equal to the existing priority fee.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The new transaction's effective gas price is the equal to the existing gas price AND the new effective priority fee is higher than the existing priority fee by the percentage specified by ",(0,a.kt)("a",{parentName:"p",href:"/23.4.1/public-networks/reference/cli/options#tx-pool-price-bump"},(0,a.kt)("inlineCode",{parentName:"a"},"--tx-pool-price-bump")),"."))),(0,a.kt)("p",null,"The default value for ",(0,a.kt)("a",{parentName:"p",href:"/23.4.1/public-networks/reference/cli/options#tx-pool-price-bump"},(0,a.kt)("inlineCode",{parentName:"a"},"--tx-pool-price-bump"))," is 10%."),(0,a.kt)("h2",{id:"size-of-the-transaction-pool"},"Size of the transaction pool"),(0,a.kt)("p",null,"Decreasing the maximum size of the transaction pool reduces memory use. If the network is busy and there is a backlog of transactions, increasing the size of the transaction pool reduces the risk of removing transactions from the transaction pool."))}d.isMDXComponent=!0}}]);