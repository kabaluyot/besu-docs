"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[85408],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(n),u=o,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||r;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[h]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},15108:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={title:"Use Chainlens Explorer",sidebar_position:7,description:"Use Chainlens Explorer on a privacy-enabled Besu network",tags:["private networks"]},s="Use Chainlens Blockchain Explorer",i={unversionedId:"private-networks/how-to/monitor/chainlens",id:"version-23.7.1/private-networks/how-to/monitor/chainlens",title:"Use Chainlens Explorer",description:"Use Chainlens Explorer on a privacy-enabled Besu network",source:"@site/versioned_docs/version-23.7.1/private-networks/how-to/monitor/chainlens.md",sourceDirName:"private-networks/how-to/monitor",slug:"/private-networks/how-to/monitor/chainlens",permalink:"/23.7.1/private-networks/how-to/monitor/chainlens",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.1/private-networks/how-to/monitor/chainlens.md",tags:[{label:"private networks",permalink:"/23.7.1/tags/private-networks"}],version:"23.7.1",lastUpdatedAt:1695677638,formattedLastUpdatedAt:"Sep 25, 2023",sidebarPosition:7,frontMatter:{title:"Use Chainlens Explorer",sidebar_position:7,description:"Use Chainlens Explorer on a privacy-enabled Besu network",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Use OpenTelemetry",permalink:"/23.7.1/private-networks/how-to/monitor/opentelemetry"},next:{title:"Use EEA-compliant privacy",permalink:"/23.7.1/private-networks/how-to/use-privacy/eea-compliant"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Start Chainlens",id:"start-chainlens",level:2},{value:"View on Chainlens",id:"view-on-chainlens",level:2},{value:"Stop Chainlens",id:"stop-chainlens",level:2}],p={toc:c};function h(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-chainlens-blockchain-explorer"},"Use Chainlens Blockchain Explorer"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://chainlens.com/"},"Chainlens Blockchain Explorer")," supports public and private EVM networks.\nThis page describes how to use the free version of Chainlens with its built-in support for\n",(0,o.kt)("a",{parentName:"p",href:"/23.7.1/private-networks/concepts/privacy/"},"privacy-enabled")," Besu networks created using the\n",(0,o.kt)("a",{parentName:"p",href:"/23.7.1/private-networks/tutorials/quickstart"},"Developer Quickstart"),"."),(0,o.kt)("p",null,"Chainlens provides an overview of the entire network, including block information, contract\nmetadata, transaction searches, and ",(0,o.kt)("a",{parentName:"p",href:"https://chainlens.com/"},"more"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You must connect to one of the privacy nodes (for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"member1besu"),"), not the dedicated RPC, to\nallow access for Besu ",(0,o.kt)("a",{parentName:"p",href:"/23.7.1/private-networks/reference/api/#priv-methods"},"privacy API methods"),".\nIn production networks, you must ",(0,o.kt)("a",{parentName:"p",href:"/23.7.1/public-networks/how-to/use-besu-api/authenticate"},"secure access"),"\nto RPC nodes.")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"Docker and Docker Compose")," installed."),(0,o.kt)("h2",{id:"start-chainlens"},"Start Chainlens"),(0,o.kt)("p",null,"Clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/web3labs/chainlens-free"},"Chainlens GitHub repository"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/web3labs/chainlens-free\n")),(0,o.kt)("p",null,"The repository contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose")," directory to allow Chainlens to start with a Developer\nQuickstart test network.\nFrom the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose")," directory, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"NODE_ENDPOINT=http://rpcnode:8545 docker-compose -f docker-compose.yml -f chainlens-extensions/docker-compose-quorum-dev-quickstart.yml up\n")),(0,o.kt)("p",null,"This command does two things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sets up the node endpoint"),(0,o.kt)("li",{parentName:"ul"},"Tells Docker to run by using the two Docker Compose files provided")),(0,o.kt)("p",null,"The first ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file in the command contains all the services required for Chainlens."),(0,o.kt)("p",null,"The second file named ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose-quorum-dev-quickstart")," contains the network settings required to start\nChainlens on the same network as the Besu development node."),(0,o.kt)("p",null,"Next, open ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost/")," on your browser.\nYou\u2019ll see the new initialization page while it boots up.\nThis may take 5\u201310 minutes for the all services to start and the ingestion sync to complete."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"`Chainlens_loading`",src:n(82577).Z,width:"2432",height:"1308"})),(0,o.kt)("h2",{id:"view-on-chainlens"},"View on Chainlens"),(0,o.kt)("p",null,"After starting Chainlens, you can view information about your network."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Screenshots in this section are taken from the ",(0,o.kt)("a",{parentName:"p",href:"https://goerli.chainlens.com/dashboard"},"Chainlens Goerli network"),".")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Dashboard")," page provides an aggregated view of network activities."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"`Chainlens_dashboard`",src:n(12525).Z,width:"2860",height:"1906"})),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Network")," page provides an overview of the network status and connected peers.\nThis page is disabled by default, and is only visible if you set ",(0,o.kt)("inlineCode",{parentName:"p"},"DISPLAY_NETWOR_TAB=enabled")," using\nthe following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"NODE_ENDPOINT=http://member1besu:8545 DISPLAY_NETWORK_TAB=enabled docker-compose -f docker-compose.yml -f chainlens-extensions/docker-compose-quorum-dev-quickstart.yml up\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Blocks")," page shows a real-time view of the finalized blocks."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Chainlens blocks",src:n(29369).Z,width:"2692",height:"1920"})),(0,o.kt)("p",null,"You can view a given block details by selecting a block hash or number."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Chainlens block details",src:n(53172).Z,width:"2608",height:"1924"})),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Transactions")," page shows a paginated view of new and historical transactions."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Chainlens transactions",src:n(80466).Z,width:"2766",height:"1922"})),(0,o.kt)("p",null,"If you select any transaction hash, you can get the ",(0,o.kt)("strong",{parentName:"p"},"transaction details.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Chainlens transaction_details",src:n(83448).Z,width:"4166",height:"3206"})),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Contracts")," page shows all the smart contracts deployed on the network."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Chainlens contracts",src:n(26900).Z,width:"2844",height:"1924"})),(0,o.kt)("p",null,"You can view a smart contract details by selecting the contract address."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Chainlens contract details",src:n(73480).Z,width:"2706",height:"1918"})),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Events")," page shows all the events generated on the network."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Chainlens events",src:n(53606).Z,width:"4264",height:"3204"})),(0,o.kt)("h2",{id:"stop-chainlens"},"Stop Chainlens"),(0,o.kt)("p",null,"To stop all the services from running, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose down\n")))}h.isMDXComponent=!0},53172:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/chainlens-block-details-df6e36c4bd72ce823087f9faf9470d4c.png"},29369:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/chainlens-block-42b56c10be9794c4f7fa59148d876ae1.png"},73480:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/chainlens-contract-details-aa987d5cb4567c531b027d594b7102d8.png"},26900:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/chainlens-contracts-1070acb58fc0b4c26e5244e1a0de2467.png"},12525:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/chainlens-dashboard-0a9dc4f45e20c2d0e82a40a62185776e.png"},53606:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/chainlens-events-a72036c7a41af2abc3e7158fc65e95b1.png"},82577:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/chainlens-loading-6892fc684a7239dcf9bc2d70d0ec7b40.png"},83448:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/chainlens-transaction-details-2f78a8932e911d945bd54740e2d43ec2.png"},80466:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/chainlens-transactions-23e6efc701865a9616ed778d5deb6b2f.png"}}]);