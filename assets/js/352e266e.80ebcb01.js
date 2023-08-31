"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[97441],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(r),y=a,d=u["".concat(p,".").concat(y)]||u[y]||l[y]||i;return r?n.createElement(d,o(o({ref:t},m),{},{components:r})):n.createElement(d,o({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=y;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},83037:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"Sign privacy marker transactions",description:"How to sign a privacy marker transaction with Hyperledger Besu",sidebar_position:7,tags:["private networks"]},o="Sign privacy marker transactions",s={unversionedId:"private-networks/how-to/use-privacy/sign-pmts",id:"version-23.7.1/private-networks/how-to/use-privacy/sign-pmts",title:"Sign privacy marker transactions",description:"How to sign a privacy marker transaction with Hyperledger Besu",source:"@site/versioned_docs/version-23.7.1/private-networks/how-to/use-privacy/sign-pmts.md",sourceDirName:"private-networks/how-to/use-privacy",slug:"/private-networks/how-to/use-privacy/sign-pmts",permalink:"/private-networks/how-to/use-privacy/sign-pmts",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.1/private-networks/how-to/use-privacy/sign-pmts.md",tags:[{label:"private networks",permalink:"/tags/private-networks"}],version:"23.7.1",lastUpdatedAt:1693496692,formattedLastUpdatedAt:"Aug 31, 2023",sidebarPosition:7,frontMatter:{title:"Sign privacy marker transactions",description:"How to sign a privacy marker transaction with Hyperledger Besu",sidebar_position:7,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Access private and privacy marker transactions",permalink:"/private-networks/how-to/use-privacy/access-private-transactions"},next:{title:"Use the web3js-quorum library",permalink:"/private-networks/how-to/use-privacy/web3js-quorum"}},p={},c=[],m={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sign-privacy-marker-transactions"},"Sign privacy marker transactions"),(0,a.kt)("p",null,"You can sign privacy marker transactions (PMTs) with either a random key or a specified key. To sign privacy marker transactions with a specified private key, use ",(0,a.kt)("a",{parentName:"p",href:"/private-networks/reference/cli/options#privacy-marker-transaction-signing-key-file"},(0,a.kt)("inlineCode",{parentName:"a"},"--privacy-marker-transaction-signing-key-file"))," when starting Hyperledger Besu."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The private key file can be the same file used by ",(0,a.kt)("a",{parentName:"p",href:"#node-private-key-file"},(0,a.kt)("inlineCode",{parentName:"a"},"--node-private-key-file")),", or a different key file to identify who signed the privacy marker transaction.")),(0,a.kt)("p",null,"In networks where you pay gas, you must specify a key and the associated account must contain adequate funds."),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"/private-networks/how-to/configure/free-gas"},"free gas networks"),", to provide further anonymity by signing each privacy marker transaction with a different random key, exclude the ",(0,a.kt)("a",{parentName:"p",href:"/private-networks/reference/cli/options#privacy-marker-transaction-signing-key-file"},(0,a.kt)("inlineCode",{parentName:"a"},"--privacy-marker-transaction-signing-key-file"))," command line option when starting Besu."),(0,a.kt)("admonition",{title:'"Using account permissioning and privacy"',type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"You can't use ",(0,a.kt)("a",{parentName:"p",href:"/private-networks/concepts/permissioning/#account-permissioning"},"account permissioning")," with random key signing."),(0,a.kt)("p",{parentName:"admonition"},"If using account permissioning and privacy, a signing key must be specified using the ",(0,a.kt)("a",{parentName:"p",href:"/private-networks/reference/cli/options#privacy-marker-transaction-signing-key-file"},(0,a.kt)("inlineCode",{parentName:"a"},"--privacy-marker-transaction-signing-key-file"))," command line option and the corresponding public key included in the accounts allowlist.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Besu signs privacy marker transactions during the ",(0,a.kt)("a",{parentName:"p",href:"/private-networks/concepts/privacy/private-transactions/processing"},"private transaction process"),".")))}u.isMDXComponent=!0}}]);