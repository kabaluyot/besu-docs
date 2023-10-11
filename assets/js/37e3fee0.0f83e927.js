"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[91464],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,h=d["".concat(p,".").concat(u)]||d[u]||k[u]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},15055:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"Network ID and chain ID",sidebar_position:5,description:"Learn about network ID and chain ID in Besu.",tags:["public networks","private networks"]},o="Network ID and chain ID",l={unversionedId:"public-networks/concepts/network-and-chain-id",id:"version-23.4.1/public-networks/concepts/network-and-chain-id",title:"Network ID and chain ID",description:"Learn about network ID and chain ID in Besu.",source:"@site/versioned_docs/version-23.4.1/public-networks/concepts/network-and-chain-id.md",sourceDirName:"public-networks/concepts",slug:"/public-networks/concepts/network-and-chain-id",permalink:"/23.4.1/public-networks/concepts/network-and-chain-id",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/public-networks/concepts/network-and-chain-id.md",tags:[{label:"public networks",permalink:"/23.4.1/tags/public-networks"},{label:"private networks",permalink:"/23.4.1/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1697011484,formattedLastUpdatedAt:"Oct 11, 2023",sidebarPosition:5,frontMatter:{title:"Network ID and chain ID",sidebar_position:5,description:"Learn about network ID and chain ID in Besu.",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Transaction validation",permalink:"/23.4.1/public-networks/concepts/transactions/validation"},next:{title:"Events and logs",permalink:"/23.4.1/public-networks/concepts/events-and-logs"}},p={},s=[{value:"Specify a different network ID",id:"specify-a-different-network-id",level:2},{value:"Start a new chain with a new chain ID",id:"start-a-new-chain-with-a-new-chain-id",level:2}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"network-id-and-chain-id"},"Network ID and chain ID"),(0,r.kt)("p",null,"Ethereum networks have two identifiers, a network ID and a chain ID. Although they often have the same value, they have different uses."),(0,r.kt)("p",null,"Peer-to-peer communication between nodes uses the ",(0,r.kt)("em",{parentName:"p"},"network ID"),", while the transaction signature process uses the ",(0,r.kt)("em",{parentName:"p"},"chain ID"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-155.md"},"EIP-155")," introduced using the chain ID as part of the transaction signing process to protect against transaction replay attacks.")),(0,r.kt)("p",null,"For most networks, including Mainnet and the public testnets, the network ID and the chain ID are the same, with the network ID defaulting to the chain ID, as specified in the genesis file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Chain ID in the genesis file"',title:'"Chain',ID:!0,in:!0,the:!0,genesis:!0,'file"':!0},'{\n  "config": {\n    "ethash": {\n    },\n    "chainID": 1981\n  },\n  ...\n}\n')),(0,r.kt)("p",null,"Besu sets the chain ID (and by default the network ID) automatically, using either the ",(0,r.kt)("a",{parentName:"p",href:"/23.4.1/public-networks/reference/cli/options#genesis-file"},(0,r.kt)("inlineCode",{parentName:"a"},"--genesis-file"))," option or when specifying a network using the ",(0,r.kt)("a",{parentName:"p",href:"/23.4.1/public-networks/reference/cli/options#network"},(0,r.kt)("inlineCode",{parentName:"a"},"--network"))," option. The following table lists the available networks and their chain and network IDs."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Network"),(0,r.kt)("th",{parentName:"tr",align:null},"Chain"),(0,r.kt)("th",{parentName:"tr",align:null},"Chain ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Network ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mainnet")),(0,r.kt)("td",{parentName:"tr",align:null},"ETH"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Production")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"goerli")),(0,r.kt)("td",{parentName:"tr",align:null},"ETH"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"Test")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sepolia")),(0,r.kt)("td",{parentName:"tr",align:null},"ETH"),(0,r.kt)("td",{parentName:"tr",align:null},"11155111"),(0,r.kt)("td",{parentName:"tr",align:null},"11155111"),(0,r.kt)("td",{parentName:"tr",align:null},"Test")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dev")),(0,r.kt)("td",{parentName:"tr",align:null},"ETH"),(0,r.kt)("td",{parentName:"tr",align:null},"2018"),(0,r.kt)("td",{parentName:"tr",align:null},"2018"),(0,r.kt)("td",{parentName:"tr",align:null},"Development")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"classic")),(0,r.kt)("td",{parentName:"tr",align:null},"ETC"),(0,r.kt)("td",{parentName:"tr",align:null},"61"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Production")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mordor")),(0,r.kt)("td",{parentName:"tr",align:null},"ETC"),(0,r.kt)("td",{parentName:"tr",align:null},"63"),(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"Test")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kotti")),(0,r.kt)("td",{parentName:"tr",align:null},"ETC"),(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"Test")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"astor")),(0,r.kt)("td",{parentName:"tr",align:null},"ETC"),(0,r.kt)("td",{parentName:"tr",align:null},"212"),(0,r.kt)("td",{parentName:"tr",align:null},"212"),(0,r.kt)("td",{parentName:"tr",align:null},"Test")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The Ropsten, Rinkeby, and Kiln testnets are deprecated.")),(0,r.kt)("h2",{id:"specify-a-different-network-id"},"Specify a different network ID"),(0,r.kt)("p",null,"Usually the network ID is the same as the chain ID, but if you want to separate specific nodes from the rest of the network so they can't connect or synchronize with other nodes, you can override the default network ID for those nodes using the ",(0,r.kt)("a",{parentName:"p",href:"/23.4.1/public-networks/reference/cli/options#network-id"},(0,r.kt)("inlineCode",{parentName:"a"},"--network-id"))," option."),(0,r.kt)("h2",{id:"start-a-new-chain-with-a-new-chain-id"},"Start a new chain with a new chain ID"),(0,r.kt)("p",null,"If you update the chain ID (or network ID) of existing nodes, they can no longer peer with other nodes in the network. Nodes need to have a matching ",(0,r.kt)("a",{parentName:"p",href:"/23.4.1/public-networks/concepts/genesis-file"},"genesis file"),", including the chain ID, in order to peer. In this case, you're effectively running two chains that can't communicate with each other."),(0,r.kt)("p",null,"To change a chain ID and start a new chain:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Stop all your nodes using ",(0,r.kt)("kbd",null,"ctrl+c")," in each terminal window."),(0,r.kt)("li",{parentName:"ol"},"Update the ",(0,r.kt)("a",{parentName:"li",href:"/23.4.1/public-networks/concepts/genesis-file"},"genesis file")," with the new chain ID."),(0,r.kt)("li",{parentName:"ol"},"Make sure all nodes have the same genesis file."),(0,r.kt)("li",{parentName:"ol"},"Delete the old data directory or point to a new location for each node."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/23.4.1/private-networks/tutorials/ibft/#6-start-the-first-node-as-the-bootnode"},"Restart the nodes"),".")),(0,r.kt)("admonition",{title:"Warning",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Starting a new chain is starting from block zero."),(0,r.kt)("p",{parentName:"admonition"},"This means when you start a new chain with a new chain ID, you lose all previous data.")))}d.isMDXComponent=!0}}]);