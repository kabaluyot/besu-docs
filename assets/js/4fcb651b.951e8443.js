"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[20798],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),h=r,f=c["".concat(l,".").concat(h)]||c[h]||u[h]||o;return a?n.createElement(f,i(i({ref:t},d),{},{components:a})):n.createElement(f,i({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),r=a(67294),o=a(86010),i=a(12466),s=a(16550),l=a(91980),p=a(67392),d=a(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=u(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,p]=f({queryString:a,groupId:n}),[c,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),m=(()=>{const e=l??c;return h({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{m&&s(m)}),[m]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),k(e)}),[p,k,o]),tabValues:o}}var m=a(72389);const b="tabList__CuJ",g="tabItem_LNqP";function N(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:p}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const t=e.currentTarget,a=d.indexOf(t),n=p[a].value;n!==s&&(c(t),l(n))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:h,onClick:u},i,{className:(0,o.Z)("tabs__item",g,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(N,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,m.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},25764:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),i=a(85162);const s={title:"Create a QBFT network",sidebar_position:2,description:"Create a private network using the QBFT consensus protocol.",tags:["private networks"]},l="Create a private network using QBFT",p={unversionedId:"private-networks/tutorials/qbft",id:"version-23.7.2/private-networks/tutorials/qbft",title:"Create a QBFT network",description:"Create a private network using the QBFT consensus protocol.",source:"@site/versioned_docs/version-23.7.2/private-networks/tutorials/qbft.md",sourceDirName:"private-networks/tutorials",slug:"/private-networks/tutorials/qbft",permalink:"/23.7.2/private-networks/tutorials/qbft",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.2/private-networks/tutorials/qbft.md",tags:[{label:"private networks",permalink:"/23.7.2/tags/private-networks"}],version:"23.7.2",lastUpdatedAt:1698354162,formattedLastUpdatedAt:"Oct 26, 2023",sidebarPosition:2,frontMatter:{title:"Create a QBFT network",sidebar_position:2,description:"Create a private network using the QBFT consensus protocol.",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Quorum Developer Quickstart",permalink:"/23.7.2/private-networks/tutorials/quickstart"},next:{title:"Create a private network using IBFT 2.0",permalink:"/23.7.2/private-networks/tutorials/ibft/"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Create directories",id:"1-create-directories",level:3},{value:"2. Create a configuration file",id:"2-create-a-configuration-file",level:3},{value:"3. Generate node keys and a genesis file",id:"3-generate-node-keys-and-a-genesis-file",level:3},{value:"4. Copy the genesis file to the QBFT-Network directory",id:"4-copy-the-genesis-file-to-the-qbft-network-directory",level:3},{value:"5. Copy the node private keys to the node directories",id:"5-copy-the-node-private-keys-to-the-node-directories",level:3},{value:"6. Start the first node as the bootnode",id:"6-start-the-first-node-as-the-bootnode",level:3},{value:"7. Start Node-2",id:"7-start-node-2",level:3},{value:"8. Start Node-3",id:"8-start-node-3",level:3},{value:"9. Start Node-4",id:"9-start-node-4",level:3},{value:"10. Confirm the private network is working",id:"10-confirm-the-private-network-is-working",level:3},{value:"Next steps",id:"next-steps",level:2},{value:"Stop the nodes",id:"stop-the-nodes",level:2}],u={toc:c};function h(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-private-network-using-qbft"},"Create a private network using QBFT"),(0,r.kt)("p",null,"A private network provides a configurable network for testing. This private network uses the ",(0,r.kt)("a",{parentName:"p",href:"/23.7.2/private-networks/how-to/configure/consensus/qbft"},"QBFT (proof of authority) consensus protocol"),"."),(0,r.kt)("p",null,"The QBFT network in this tutorial implements the ",(0,r.kt)("a",{parentName:"p",href:"/23.7.2/private-networks/how-to/configure/consensus/qbft#add-and-remove-validators-using-block-headers"},"block header validator selection method")," to manage validators. For a tutorial on how to implement the ",(0,r.kt)("a",{parentName:"p",href:"/23.7.2/private-networks/how-to/configure/consensus/qbft#add-and-remove-validators-using-a-smart-contract"},"contract validator selection method"),", follow the steps in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/validator-smart-contracts"},"example smart contract repository"),"."),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"The steps in this tutorial create an isolated, but not protected or secure, Ethereum private network. We recommend running the private network behind a properly configured firewall."),(0,r.kt)("p",{parentName:"admonition"},"This tutorial configures a private network using QBFT for educational purposes only. QBFT requires 4 validators to be Byzantine fault tolerant.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/23.7.2/private-networks/get-started/install/binary-distribution"},"Hyperledger Besu")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://curl.haxx.se/download.html"},"Curl (or similar webservice client)"),".")),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("p",null,"Listed on the right-hand side of the page are the steps to create a private network using QBFT with four nodes. The four nodes are all validators."),(0,r.kt)("h3",{id:"1-create-directories"},"1. Create directories"),(0,r.kt)("p",null,"Each node requires a data directory for the blockchain data."),(0,r.kt)("p",null,"Create directories for your private network, each of the four nodes, and a data directory for each node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"QBFT-Network/\n\u251c\u2500\u2500 Node-1\n\u2502   \u251c\u2500\u2500 data\n\u251c\u2500\u2500 Node-2\n\u2502   \u251c\u2500\u2500 data\n\u251c\u2500\u2500 Node-3\n\u2502   \u251c\u2500\u2500 data\n\u2514\u2500\u2500 Node-4\n    \u251c\u2500\u2500 data\n")),(0,r.kt)("h3",{id:"2-create-a-configuration-file"},"2. Create a configuration file"),(0,r.kt)("p",null,"The configuration file defines the ",(0,r.kt)("a",{parentName:"p",href:"/23.7.2/private-networks/how-to/configure/consensus/qbft#genesis-file"},"QBFT genesis file")," and the number of node key pairs to generate."),(0,r.kt)("p",null,"The configuration file has two nested JSON nodes. The first is the ",(0,r.kt)("inlineCode",{parentName:"p"},"genesis")," property defining the QBFT genesis file, except for the ",(0,r.kt)("inlineCode",{parentName:"p"},"extraData")," string, which Besu generates automatically in the resulting genesis file. The second is the ",(0,r.kt)("inlineCode",{parentName:"p"},"blockchain")," property defining the number of key pairs to generate."),(0,r.kt)("p",null,"Copy the following configuration file definition to a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"qbftConfigFile.json")," and save it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"QBFT-Network")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "genesis": {\n    "config": {\n      "chainId": 1337,\n      "berlinBlock": 0,\n      "qbft": {\n        "blockperiodseconds": 2,\n        "epochlength": 30000,\n        "requesttimeoutseconds": 4\n      }\n    },\n    "nonce": "0x0",\n    "timestamp": "0x58ee40ba",\n    "gasLimit": "0x47b760",\n    "difficulty": "0x1",\n    "mixHash": "0x63746963616c2062797a616e74696e65206661756c7420746f6c6572616e6365",\n    "coinbase": "0x0000000000000000000000000000000000000000",\n    "alloc": {\n      "fe3b557e8fb62b89f4916b721be55ceb828dbd73": {\n        "privateKey": "8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63",\n        "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n        "balance": "0xad78ebc5ac6200000"\n      },\n      "627306090abaB3A6e1400e9345bC60c78a8BEf57": {\n        "privateKey": "c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3",\n        "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n        "balance": "90000000000000000000000"\n      },\n      "f17f52151EbEF6C7334FAD080c5704D77216b732": {\n        "privateKey": "ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f",\n        "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n        "balance": "90000000000000000000000"\n      }\n    }\n  },\n  "blockchain": {\n    "nodes": {\n      "generate": true,\n      "count": 4\n    }\n  }\n}\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"We recommend specifying the latest ",(0,r.kt)("a",{parentName:"p",href:"/23.7.2/public-networks/reference/genesis-items#milestone-blocks"},"milestone")," when creating the genesis file for a private network. This ensures you are using the most up-to-date protocol and have access to the most recent opcodes.")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Do not use the accounts in ",(0,r.kt)("inlineCode",{parentName:"p"},"alloc")," in the genesis file on Mainnet or any public network except for testing. The private keys display, which means the accounts are not secure.")),(0,r.kt)("h3",{id:"3-generate-node-keys-and-a-genesis-file"},"3. Generate node keys and a genesis file"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"QBFT-Network")," directory, generate the node key and genesis file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu operator generate-blockchain-config --config-file=qbftConfigFile.json --to=networkFiles --private-key-file-name=key\n")),(0,r.kt)("p",null,"Besu creates the following in the ",(0,r.kt)("inlineCode",{parentName:"p"},"networkFiles")," directory:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"genesis.json")," - The genesis file including the ",(0,r.kt)("inlineCode",{parentName:"li"},"extraData")," property specifying the four nodes are validators."),(0,r.kt)("li",{parentName:"ul"},"A directory for each node named using the node address and containing the public and private key for each node.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"networkFiles/\n\u251c\u2500\u2500 genesis.json\n\u2514\u2500\u2500 keys\n    \u251c\u2500\u2500 0x438821c42b812fecdcea7fe8235806a412712fc0\n    \u2502   \u251c\u2500\u2500 key\n    \u2502   \u2514\u2500\u2500 key.pub\n    \u251c\u2500\u2500 0xca9c2dfa62f4589827c0dd7dcf48259aa29f22f5\n    \u2502   \u251c\u2500\u2500 key\n    \u2502   \u2514\u2500\u2500 key.pub\n    \u251c\u2500\u2500 0xcd5629bd37155608a0c9b28c4fd19310d53b3184\n    \u2502   \u251c\u2500\u2500 key\n    \u2502   \u2514\u2500\u2500 key.pub\n    \u2514\u2500\u2500 0xe96825c5ab8d145b9eeca1aba7ea3695e034911a\n        \u251c\u2500\u2500 key\n        \u2514\u2500\u2500 key.pub\n")),(0,r.kt)("h3",{id:"4-copy-the-genesis-file-to-the-qbft-network-directory"},"4. Copy the genesis file to the QBFT-Network directory"),(0,r.kt)("p",null,"Copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"genesis.json")," file to the ",(0,r.kt)("inlineCode",{parentName:"p"},"QBFT-Network")," directory."),(0,r.kt)("h3",{id:"5-copy-the-node-private-keys-to-the-node-directories"},"5. Copy the node private keys to the node directories"),(0,r.kt)("p",null,"For each node, copy the key files to the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," directory for that node"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"QBFT-Network/\n\u251c\u2500\u2500 genesis.json\n\u251c\u2500\u2500 Node-1\n\u2502   \u251c\u2500\u2500 data\n\u2502   \u2502    \u251c\u2500\u2500 key\n\u2502   \u2502    \u251c\u2500\u2500 key.pub\n\u251c\u2500\u2500 Node-2\n\u2502   \u251c\u2500\u2500 data\n\u2502   \u2502    \u251c\u2500\u2500 key\n\u2502   \u2502    \u251c\u2500\u2500 key.pub\n\u251c\u2500\u2500 Node-3\n\u2502   \u251c\u2500\u2500 data\n\u2502   \u2502    \u251c\u2500\u2500 key\n\u2502   \u2502    \u251c\u2500\u2500 key.pub\n\u251c\u2500\u2500 Node-4\n\u2502   \u251c\u2500\u2500 data\n\u2502   \u2502    \u251c\u2500\u2500 key\n\u2502   \u2502    \u251c\u2500\u2500 key.pub\n")),(0,r.kt)("h3",{id:"6-start-the-first-node-as-the-bootnode"},"6. Start the first node as the bootnode"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Node-1")," directory, start Node-1:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"MacOS",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=../genesis.json --rpc-http-enabled --rpc-http-api=ETH,NET,QBFT --host-allowlist="*" --rpc-http-cors-origins="all"\n'))),(0,r.kt)(i.Z,{label:"Windows",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=..\\genesis.json --rpc-http-enabled --rpc-http-api=ETH,NET,QBFT --host-allowlist="*" --rpc-http-cors-origins="all"\n')))),(0,r.kt)("p",null,"The command line:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Specifies the data directory for Node-1 using the ",(0,r.kt)("a",{parentName:"li",href:"/23.7.2/public-networks/reference/cli/options#data-path"},(0,r.kt)("inlineCode",{parentName:"a"},"--data-path"))," option."),(0,r.kt)("li",{parentName:"ul"},"Enables the JSON-RPC API using the ",(0,r.kt)("a",{parentName:"li",href:"/23.7.2/public-networks/reference/cli/options#rpc-http-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-enabled"))," option."),(0,r.kt)("li",{parentName:"ul"},"Enables the ETH, NET, and QBFT APIs using the ",(0,r.kt)("a",{parentName:"li",href:"/23.7.2/public-networks/reference/cli/options#rpc-http-api"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-api"))," option."),(0,r.kt)("li",{parentName:"ul"},"Enables all-host access to the HTTP JSON-RPC API using the ",(0,r.kt)("a",{parentName:"li",href:"/23.7.2/public-networks/reference/cli/options#host-allowlist"},(0,r.kt)("inlineCode",{parentName:"a"},"--host-allowlist"))," option."),(0,r.kt)("li",{parentName:"ul"},"Enables all-domain access to the node through the HTTP JSON-RPC API using the ",(0,r.kt)("a",{parentName:"li",href:"/23.7.2/public-networks/reference/cli/options#rpc-http-cors-origins"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-cors-origins"))," option.")),(0,r.kt)("p",null,"When the node starts, the ",(0,r.kt)("a",{parentName:"p",href:"/23.7.2/public-networks/concepts/node-keys#enode-url"},"enode URL")," displays. Copy the enode URL to specify Node-1 as the bootnode in the following steps."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Node 1 Enode URL",src:a(91604).Z,width:"988",height:"126"})),(0,r.kt)("h3",{id:"7-start-node-2"},"7. Start Node-2"),(0,r.kt)("p",null,"Start another terminal, change to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Node-2")," directory and start Node-2 specifying the Node-1 enode URL copied when starting Node-1 as the bootnode:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"MacOS",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=../genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30304 --rpc-http-enabled --rpc-http-api=ETH,NET,QBFT --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8546\n'))),(0,r.kt)(i.Z,{label:"Windows",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=..\\genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30304 --rpc-http-enabled --rpc-http-api=ETH,NET,QBFT --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8546\n')))),(0,r.kt)("p",null,"The command line specifies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The data directory for Node-2 using the ",(0,r.kt)("a",{parentName:"li",href:"/23.7.2/public-networks/reference/cli/options#data-path"},(0,r.kt)("inlineCode",{parentName:"a"},"--data-path"))," option."),(0,r.kt)("li",{parentName:"ul"},"A different port to Node-1 for P2P discovery using the ",(0,r.kt)("a",{parentName:"li",href:"/23.7.2/public-networks/reference/cli/options#p2p-port"},(0,r.kt)("inlineCode",{parentName:"a"},"--p2p-port"))," option."),(0,r.kt)("li",{parentName:"ul"},"A different port to Node-1 for HTTP JSON-RPC using the ",(0,r.kt)("a",{parentName:"li",href:"/23.7.2/public-networks/reference/cli/options#rpc-http-port"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-port"))," option."),(0,r.kt)("li",{parentName:"ul"},"The enode URL of Node-1 using the ",(0,r.kt)("a",{parentName:"li",href:"/23.7.2/public-networks/reference/cli/options#bootnodes"},(0,r.kt)("inlineCode",{parentName:"a"},"--bootnodes"))," option."),(0,r.kt)("li",{parentName:"ul"},"Other options as for ",(0,r.kt)("a",{parentName:"li",href:"#6-start-the-first-node-as-the-bootnode"},"Node-1"),".")),(0,r.kt)("h3",{id:"8-start-node-3"},"8. Start Node-3"),(0,r.kt)("p",null,"Start another terminal, change to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Node-3")," directory and start Node-3 specifying the Node-1 enode URL copied when starting Node-1 as the bootnode:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"MacOS",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=../genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30305 --rpc-http-enabled --rpc-http-api=ETH,NET,QBFT --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8547\n'))),(0,r.kt)(i.Z,{label:"Windows",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=..\\genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30305 --rpc-http-enabled --rpc-http-api=ETH,NET,QBFT --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8547\n')))),(0,r.kt)("p",null,"The command line specifies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The data directory for Node-3 using the ",(0,r.kt)("a",{parentName:"li",href:"/23.7.2/public-networks/reference/cli/options#data-path"},(0,r.kt)("inlineCode",{parentName:"a"},"--data-path"))," option."),(0,r.kt)("li",{parentName:"ul"},"A different port to Node-1 and Node-2 for P2P discovery using the ",(0,r.kt)("a",{parentName:"li",href:"/23.7.2/public-networks/reference/cli/options#p2p-port"},(0,r.kt)("inlineCode",{parentName:"a"},"--p2p-port"))," option."),(0,r.kt)("li",{parentName:"ul"},"A different port to Node-1 and Node-2 for HTTP JSON-RPC using the ",(0,r.kt)("a",{parentName:"li",href:"/23.7.2/public-networks/reference/cli/options#rpc-http-port"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-port"))," option."),(0,r.kt)("li",{parentName:"ul"},"The bootnode as for ",(0,r.kt)("a",{parentName:"li",href:"#7-start-node-2"},"Node-2"),"."),(0,r.kt)("li",{parentName:"ul"},"Other options as for ",(0,r.kt)("a",{parentName:"li",href:"#6-start-the-first-node-as-the-bootnode"},"Node-1"),".")),(0,r.kt)("h3",{id:"9-start-node-4"},"9. Start Node-4"),(0,r.kt)("p",null,"Start another terminal, change to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Node-4")," directory and start Node-4 specifying the Node-1 enode URL copied when starting Node-1 as the bootnode:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"MacOS",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=../genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30306 --rpc-http-enabled --rpc-http-api=ETH,NET,QBFT --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8548\n'))),(0,r.kt)(i.Z,{label:"Windows",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=..\\genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30306 --rpc-http-enabled --rpc-http-api=ETH,NET,QBFT --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8548\n')))),(0,r.kt)("p",null,"The command line specifies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The data directory for Node-4 using the ",(0,r.kt)("a",{parentName:"li",href:"/23.7.2/public-networks/reference/cli/options#data-path"},(0,r.kt)("inlineCode",{parentName:"a"},"--data-path"))," option."),(0,r.kt)("li",{parentName:"ul"},"A different port to Node-1, Node-2, and Node-3 for P2P discovery using the ",(0,r.kt)("a",{parentName:"li",href:"/23.7.2/public-networks/reference/cli/options#p2p-port"},(0,r.kt)("inlineCode",{parentName:"a"},"--p2p-port"))," option."),(0,r.kt)("li",{parentName:"ul"},"A different port to Node-1, Node-2, and Node-3 for HTTP JSON-RPC using the ",(0,r.kt)("a",{parentName:"li",href:"/23.7.2/public-networks/reference/cli/options#rpc-http-port"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-port"))," option."),(0,r.kt)("li",{parentName:"ul"},"The bootnode as for ",(0,r.kt)("a",{parentName:"li",href:"#7-start-node-2"},"Node-2"),"."),(0,r.kt)("li",{parentName:"ul"},"Other options as for ",(0,r.kt)("a",{parentName:"li",href:"#6-start-the-first-node-as-the-bootnode"},"Node-1"),".")),(0,r.kt)("h3",{id:"10-confirm-the-private-network-is-working"},"10. Confirm the private network is working"),(0,r.kt)("p",null,"Start another terminal, use curl to call the JSON-RPC API ",(0,r.kt)("a",{parentName:"p",href:"/23.7.2/private-networks/reference/api/#qbft_getvalidatorsbyblocknumber"},(0,r.kt)("inlineCode",{parentName:"a"},"qbft_getvalidatorsbyblocknumber"))," method and confirm the network has four validators:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{"jsonrpc":"2.0","method":"qbft_getValidatorsByBlockNumber","params":["latest"], "id":1}\' localhost:8545\n')),(0,r.kt)("p",null,"The result displays the four validators:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": [\n    "0x73ced0bd3def2e2d9859e3bd0882683a2e6835fb",\n    "0x7a175f3542ceb60bf80fb536b3f42e7a30c0a6d7",\n    "0x7f6efa6e34f8c9b591a9ad4763e21b3fca31bcd6",\n    "0xc64140f1c9d5bb82e54976e568ad39958c3e94be"\n  ]\n}\n')),(0,r.kt)("p",null,"Look at the logs to confirm Besu is producing blocks:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"2021-05-26 08:47:00.221+10:00 | EthScheduler-Workers-0 | INFO  | PersistBlockTask | Imported #1 / 0 tx / 0 om / 0 (0.0%) gas / (0x4ee4456536e2793523df87288fae76518089eec91c3f7e05e220f1f4d3f6f95b) in 0.016s. Peers: 4\n2021-05-26 08:47:02.071+10:00 | pool-8-thread-1 | INFO  | QbftBesuControllerBuilder | Imported #2 / 0 tx / 0 pending / 0 (0.0%) gas / (0x6fc47ada7146d75f6a46911d8d4038795b0c99970bbd4ce0c6d6aa60955f66fe)\n2021-05-26 08:47:04.051+10:00 | pool-8-thread-1 | INFO  | QbftBesuControllerBuilder | Imported #3 / 0 tx / 0 pending / 0 (0.0%) gas / (0x3cb663880a65103266b11a8d8631beca5c482d515ac287125aa077b2e31b80b0)\n2021-05-26 08:47:06.058+10:00 | pool-8-thread-1 | INFO  | QbftBesuControllerBuilder | Produced #4 / 0 tx / 0 pending / 0 (0.0%) gas / (0xc2927915ac0c94bab5fc9acea6608455f1c857d69e97191dc2c39e4ac411817b)\n2021-05-26 08:47:08.058+10:00 | pool-8-thread-1 | INFO  | QbftBesuControllerBuilder | Imported #5 / 0 tx / 0 pending / 0 (0.0%) gas / (0xba63471d62c936733add9b884f5213c3842af9f52460268e39e0666ab82f02a5)\n")),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"If the key files were not copied to the correct directory in ",(0,r.kt)("a",{parentName:"p",href:"#5-copy-the-node-private-keys-to-the-node-directories"},"step 5"),", the network will not start producing blocks."),(0,r.kt)("p",{parentName:"admonition"},"The logs for each node should indicate the public key was loaded from the ",(0,r.kt)("inlineCode",{parentName:"p"},"data/key")," directory:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"2021-05-26 08:43:16.592+10:00 | main | INFO  | KeyPairUtil | Loaded public key 0x931d32f1aec4e45b150ee38f3c74157a750fc53f523e63fe2b07bf3fce43a3de64587fc9aaf3736444f2e3eef0eea90be3b67d18be7b5b2b7cb2fcd670416a7e from <path-to-network>/QBFT-Network/Node-1/data/key\n")),(0,r.kt)("p",{parentName:"admonition"},"If the keys were not copied to the correct directory, Besu creates a key when starting up:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"2021-05-26 08:43:16.592+10:00 | main | INFO  | KeyPairUtil | Generated new public key 0x1a4a2ade5ebc0a85572e2492e0cdf3e96b8928c75fa55b4425de8849850cf9b3a8cad1e27d98a3d3afac326a5e8788dbe6cc40249715c92825aebb28abe3e346 and stored it to <path-to-network>/QBFT-Network/Node-1/data/key\n")),(0,r.kt)("p",{parentName:"admonition"},"If a new key was created, the validator key specified in the configuration does not match the created key and the node cannot participate in creating blocks.")),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"/23.7.2/private-networks/reference/api/#qbft-methods"},"QBFT API")," to remove or add validators, or import accounts to MetaMask and send transactions as described in the ",(0,r.kt)("a",{parentName:"p",href:"/23.7.2/private-networks/tutorials/quickstart#create-a-transaction-using-metamask"},"Quickstart tutorial"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To add or remove nodes as validators you need the node address. The directory ",(0,r.kt)("a",{parentName:"p",href:"#3-generate-node-keys-and-a-genesis-file"},"created for each node")," has the node address as the name."),(0,r.kt)("p",{parentName:"admonition"},"Besu doesn't support ",(0,r.kt)("a",{parentName:"p",href:"/23.7.2/public-networks/how-to/send-transactions"},"private key management"),".")),(0,r.kt)("p",null,"You can switch from the ",(0,r.kt)("a",{parentName:"p",href:"/23.7.2/private-networks/how-to/configure/consensus/qbft#add-and-remove-validators-using-block-headers"},"block header validator selection method")," configured here, to the ",(0,r.kt)("a",{parentName:"p",href:"/23.7.2/private-networks/how-to/configure/consensus/qbft#add-and-remove-validators-using-a-smart-contract"},"contract validator selection method")," by updating the genesis file and ",(0,r.kt)("a",{parentName:"p",href:"/23.7.2/private-networks/how-to/configure/consensus/qbft#transitions"},"configuring a transition"),"."),(0,r.kt)("h2",{id:"stop-the-nodes"},"Stop the nodes"),(0,r.kt)("p",null,"When finished using the private network, stop all nodes using ++ctrl+c++ in each terminal window."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To restart the QBFT network in the future, start from ",(0,r.kt)("a",{parentName:"p",href:"#6-start-the-first-node-as-the-bootnode"},"step 6"),".")),(0,r.kt)("p",null,"*","[Byzantine fault tolerant]",": Ability to function correctly and reach consensus despite nodes failing or propagating incorrect information to peers."))}h.isMDXComponent=!0},91604:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/EnodeStartup-145939e1c789c28e464db82faa0fb3ca.png"}}]);