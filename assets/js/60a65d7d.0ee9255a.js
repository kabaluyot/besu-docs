"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[71189],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||a;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51339:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={title:"The Merge",sidebar_position:1,description:"What is the Merge?"},s="The Merge",i={unversionedId:"public-networks/concepts/the-merge",id:"version-23.4.0/public-networks/concepts/the-merge",title:"The Merge",description:"What is the Merge?",source:"@site/versioned_docs/version-23.4.0/public-networks/concepts/the-merge.md",sourceDirName:"public-networks/concepts",slug:"/public-networks/concepts/the-merge",permalink:"/23.4.0/public-networks/concepts/the-merge",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/public-networks/concepts/the-merge.md",tags:[],version:"23.4.0",lastUpdatedAt:1698354162,formattedLastUpdatedAt:"Oct 26, 2023",sidebarPosition:1,frontMatter:{title:"The Merge",sidebar_position:1,description:"What is the Merge?"},sidebar:"publicDocSidebar",previous:{title:"Troubleshoot peering",permalink:"/23.4.0/public-networks/how-to/troubleshoot/peering"},next:{title:"Proof of stake consensus",permalink:"/23.4.0/public-networks/concepts/proof-of-stake/"}},c={},l=[{value:"Execution and consensus clients",id:"execution-and-consensus-clients",level:2},{value:"Execution clients",id:"execution-clients",level:3},{value:"Consensus clients",id:"consensus-clients",level:3},{value:"What happened during The Merge",id:"what-happened-during-the-merge",level:2}],u={toc:l};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-merge"},"The Merge"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The Merge was executed on ",(0,o.kt)("strong",{parentName:"p"},"September 15, 2022"),".")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ethereum.org/en/upgrades/merge/"},"The Merge")," was an Ethereum upgrade that merged the ",(0,o.kt)("a",{parentName:"p",href:"https://ethereum.org/en/upgrades/beacon-chain/"},"Beacon Chain")," into Ethereum Mainnet, turning Mainnet into a combination of an ",(0,o.kt)("a",{parentName:"p",href:"#execution-and-consensus-clients"},"execution layer and consensus layer"),". The Merge transitioned Mainnet from proof of work to ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/concepts/proof-of-stake/"},"proof of stake consensus"),"."),(0,o.kt)("p",null,"You can run Besu as an execution client with:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/23.4.0/public-networks/get-started/connect/mainnet"},"Any consensus client on Mainnet"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/23.4.0/public-networks/get-started/connect/testnet"},"Any consensus client on a testnet"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/23.4.0/public-networks/tutorials/besu-teku-mainnet"},"Teku on Mainnet"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/23.4.0/public-networks/tutorials/besu-teku-testnet"},"Teku on a testnet"),".")),(0,o.kt)("h2",{id:"execution-and-consensus-clients"},"Execution and consensus clients"),(0,o.kt)("p",null,"After The Merge, a full Ethereum Mainnet node is a combination of an execution client (previously called an ",(0,o.kt)("a",{parentName:"p",href:"https://blog.ethereum.org/2022/01/24/the-great-eth2-renaming/"},"Ethereum 1.0")," client) and a consensus client (previously called an ",(0,o.kt)("a",{parentName:"p",href:"https://blog.ethereum.org/2022/01/24/the-great-eth2-renaming/"},"Ethereum 2.0")," client)."),(0,o.kt)("p",null,"Execution and consensus clients communicate with each other using the ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/how-to/use-engine-api"},"Engine API"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Ethereum Merge node",src:n(74470).Z,width:"1512",height:"1164"})),(0,o.kt)("h3",{id:"execution-clients"},"Execution clients"),(0,o.kt)("p",null,"Execution clients, such as Besu, manage the execution layer, including executing transactions and updating the world state. Execution clients serve ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/engine-api/"},"JSON-RPC API")," requests and communicate with each other in a peer-to-peer network."),(0,o.kt)("h3",{id:"consensus-clients"},"Consensus clients"),(0,o.kt)("p",null,"Consensus clients, such as ",(0,o.kt)("a",{parentName:"p",href:"https://docs.teku.consensys.net/en/stable/"},"Teku"),", contain beacon node and validator client implementations. The beacon node is the primary link to the ",(0,o.kt)("a",{parentName:"p",href:"https://ethereum.org/en/upgrades/beacon-chain/"},"Beacon Chain")," (consensus layer). The validator client performs ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/concepts/proof-of-stake/"},"validator duties")," on the consensus layer. Consensus clients serve ",(0,o.kt)("a",{parentName:"p",href:"https://docs.teku.consensys.net/en/stable/Reference/Rest_API/Rest/"},"REST API")," requests and communicate with each other in a peer-to-peer network."),(0,o.kt)("h2",{id:"what-happened-during-the-merge"},"What happened during The Merge"),(0,o.kt)("p",null,"Before The Merge, the execution and consensus clients' configurations were updated to listen for a certain total terminal difficulty (TTD) to be reached."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The TTD is a specific value for the total difficulty, which is the sum of the proof-of-work mining difficulty for all blocks up to some point in the blockchain.")),(0,o.kt)("p",null,"The consensus layer enabled the Merge configuration (Bellatrix) before reaching the TTD. Once the execution layer blocks reached the TTD, the Beacon Chain merged into Ethereum Mainnet, and Ethereum transitioned to a proof of stake network."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"After The Merge, a Mainnet node operator must run both an execution client and a beacon node at the same time. To become a validator, you must also run a validator client (either ",(0,o.kt)("a",{parentName:"p",href:"https://docs.teku.consensys.net/en/stable/HowTo/Get-Started/Run-Teku/#start-the-clients-in-a-single-process"},"in the same process as the beacon node")," or ",(0,o.kt)("a",{parentName:"p",href:"https://docs.teku.consensys.net/en/stable/HowTo/Get-Started/Run-Teku/#run-the-clients-separately"},"separately"),".")),(0,o.kt)("p",null,"After The Merge, validators earn rewards for performing ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/concepts/proof-of-stake/"},"validator duties"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax#validators-proposer-default-fee-recipient"},"fee recipients")," also earn rewards for the inclusion of execution layer transactions."))}p.isMDXComponent=!0},74470:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Execution-Consensus-Clients-fb025b4b0cea4f3e3efef43657540e27.png"}}]);