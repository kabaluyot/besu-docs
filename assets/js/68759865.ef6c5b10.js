"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[13224],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,b=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return a?n.createElement(b,i(i({ref:t},c),{},{components:a})):n.createElement(b,i({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),r=a(67294),o=a(86010),i=a(12466),s=a(16550),l=a(91980),p=a(67392),c=a(50012);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,p]=b({queryString:a,groupId:n}),[u,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=l??u;return h({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),m(e)}),[p,m,o]),tabValues:o}}var k=a(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=p[a].value;n!==s&&(u(t),l(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:d},i,{className:(0,o.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=m(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},25742:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),i=a(85162);const s={title:"Create an Ethash network",sidebar_position:5,description:"Create a private network using the Ethash consensus protocol.",tags:["private networks"]},l="Create a private network using Ethash",p={unversionedId:"private-networks/tutorials/ethash",id:"version-23.4.1/private-networks/tutorials/ethash",title:"Create an Ethash network",description:"Create a private network using the Ethash consensus protocol.",source:"@site/versioned_docs/version-23.4.1/private-networks/tutorials/ethash.md",sourceDirName:"private-networks/tutorials",slug:"/private-networks/tutorials/ethash",permalink:"/stable/private-networks/tutorials/ethash",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/tutorials/ethash.md",tags:[{label:"private networks",permalink:"/stable/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1688668846,formattedLastUpdatedAt:"Jul 6, 2023",sidebarPosition:5,frontMatter:{title:"Create an Ethash network",sidebar_position:5,description:"Create a private network using the Ethash consensus protocol.",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Create a Clique network",permalink:"/stable/private-networks/tutorials/clique"},next:{title:"Create a privacy enabled network using the Quickstart",permalink:"/stable/private-networks/tutorials/privacy/"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Create directories",id:"1-create-directories",level:3},{value:"2. Create a genesis file",id:"2-create-a-genesis-file",level:3},{value:"3. Start the first node as a bootnode",id:"3-start-the-first-node-as-a-bootnode",level:3},{value:"4. Start Node-2",id:"4-start-node-2",level:3},{value:"5. Start Node-3",id:"5-start-node-3",level:3},{value:"6. Confirm the private network is working",id:"6-confirm-the-private-network-is-working",level:3},{value:"Next steps",id:"next-steps",level:2},{value:"Stop the nodes",id:"stop-the-nodes",level:2}],d={toc:u},h="wrapper";function b(e){let{components:t,...s}=e;return(0,r.kt)(h,(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-private-network-using-ethash"},"Create a private network using Ethash"),(0,r.kt)("p",null,"A private network provides a configurable network for testing. By configuring a low difficulty and enabling mining, this allows for fast block creation."),(0,r.kt)("p",null,"You can test multi-block and multi-user scenarios on a private network before moving to one of the public testnets."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"The steps in this tutorial create an isolated, but not protected or secure, Ethereum private network. We recommend running the private network behind a properly configured firewall.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/stable/private-networks/get-started/install/binary-distribution"},"Hyperledger Besu")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://curl.haxx.se/download.html"},"Curl (or similar webservice client)"),".")),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("p",null,"Listed on the right-hand side of the page are the steps to create a private network using Ethash."),(0,r.kt)("h3",{id:"1-create-directories"},"1. Create directories"),(0,r.kt)("p",null,"Each node requires a data directory for the blockchain data. When the node starts, Besu saves the ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/concepts/node-keys"},"node key")," in this directory."),(0,r.kt)("p",null,"Create directories for your private network, each of the three nodes, and a data directory for each node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Private-Network/\n\u251c\u2500\u2500 Node-1\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u251c\u2500\u2500 Node-2\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2514\u2500\u2500 Node-3\n    \u251c\u2500\u2500 data\n")),(0,r.kt)("h3",{id:"2-create-a-genesis-file"},"2. Create a genesis file"),(0,r.kt)("p",null,"The genesis file defines the genesis block of the blockchain (that is, the start of the blockchain). The genesis file includes entries for configuring the blockchain, such as the mining difficulty and initial accounts and balances."),(0,r.kt)("p",null,"All nodes in a network must use the same genesis file. The ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/concepts/network-and-chain-id"},"network ID")," defaults to the ",(0,r.kt)("inlineCode",{parentName:"p"},"chainID")," in the genesis file. The ",(0,r.kt)("inlineCode",{parentName:"p"},"fixeddifficulty")," enables fast block mining."),(0,r.kt)("p",null,"Copy the following genesis definition to a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"privateNetworkGenesis.json")," and save it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Private-Network")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "config": {\n    "berlinBlock": 0,\n    "ethash": {\n      "fixeddifficulty": 1000\n    },\n    "chainID": 1337\n  },\n  "nonce": "0x42",\n  "gasLimit": "0x1000000",\n  "difficulty": "0x10000",\n  "alloc": {\n    "fe3b557e8fb62b89f4916b721be55ceb828dbd73": {\n      "privateKey": "8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63",\n      "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n      "balance": "0xad78ebc5ac6200000"\n    },\n    "f17f52151EbEF6C7334FAD080c5704D77216b732": {\n      "privateKey": "ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f",\n      "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n      "balance": "90000000000000000000000"\n    }\n  }\n}\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"We recommend specifying the latest ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/genesis-items#milestone-blocks"},"milestone")," when creating the genesis file for a private network. This ensures you are using the most up-to-date protocol and have access to the most recent opcodes.")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Don't use the accounts in ",(0,r.kt)("inlineCode",{parentName:"p"},"alloc")," in the genesis file on Mainnet or any public network except for testing. The private keys display, which means the accounts are not secure.")),(0,r.kt)("h3",{id:"3-start-the-first-node-as-a-bootnode"},"3. Start the first node as a bootnode"),(0,r.kt)("p",null,"Start Node-1:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"MacOS",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=../privateNetworkGenesis.json --miner-enabled --miner-coinbase fe3b557e8fb62b89f4916b721be55ceb828dbd73 --rpc-http-enabled --host-allowlist="*" --rpc-http-cors-origins="all"\n'))),(0,r.kt)(i.Z,{label:"Windows",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=..\\privateNetworkGenesis.json --miner-enabled --miner-coinbase fe3b557e8fb62b89f4916b721be55ceb828dbd73 --rpc-http-enabled --host-allowlist="*" --rpc-http-cors-origins="all"\n')))),(0,r.kt)("p",null,"The command line enables:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mining and specifies the account to pay mining rewards to using the ",(0,r.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/cli/options#miner-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--miner-enabled"))," and ",(0,r.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/cli/options#miner-coinbase"},(0,r.kt)("inlineCode",{parentName:"a"},"--miner-coinbase"))," options."),(0,r.kt)("li",{parentName:"ul"},"JSON-RPC API using the ",(0,r.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/cli/options#rpc-http-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-enabled"))," option."),(0,r.kt)("li",{parentName:"ul"},"All-host access to the HTTP JSON-RPC API using the ",(0,r.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/cli/options#host-allowlist"},(0,r.kt)("inlineCode",{parentName:"a"},"--host-allowlist"))," option."),(0,r.kt)("li",{parentName:"ul"},"All-domain access to the node through the HTTP JSON-RPC API using the ",(0,r.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/cli/options#rpc-http-cors-origins"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-cors-origins"))," option.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The miner coinbase account is one of the accounts defined in the genesis file.")),(0,r.kt)("p",null,"When the node starts, the ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/concepts/node-keys#enode-url"},"enode URL")," displays. Copy the enode URL to specify Node-1 as the bootnode in the following steps."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Node 1 Enode URL",src:a(57198).Z,width:"988",height:"126"})),(0,r.kt)("h3",{id:"4-start-node-2"},"4. Start Node-2"),(0,r.kt)("p",null,"Start another terminal, change to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Node-2")," directory and start Node-2 specifying the Node-1 enode URL copied when starting Node-1 as the bootnode:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"MacOS",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu --data-path=data --genesis-file=../privateNetworkGenesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30304\n"))),(0,r.kt)(i.Z,{label:"Windows",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu --data-path=data --genesis-file=..\\privateNetworkGenesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30304\n")))),(0,r.kt)("p",null,"The command line specifies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A different port to Node-1 for P2P discovery using the ",(0,r.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/cli/options#p2p-port"},(0,r.kt)("inlineCode",{parentName:"a"},"--p2p-port"))," option."),(0,r.kt)("li",{parentName:"ul"},"The enode URL of Node-1 using the ",(0,r.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/cli/options#bootnodes"},(0,r.kt)("inlineCode",{parentName:"a"},"--bootnodes"))," option."),(0,r.kt)("li",{parentName:"ul"},"A data directory for Node-2 using the ",(0,r.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/cli/options#data-path"},(0,r.kt)("inlineCode",{parentName:"a"},"--data-path"))," option."),(0,r.kt)("li",{parentName:"ul"},"A genesis file as for Node-1.")),(0,r.kt)("h3",{id:"5-start-node-3"},"5. Start Node-3"),(0,r.kt)("p",null,"Start another terminal, change to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Node-3")," directory and start Node-3 specifying the Node-1 enode URL copied when starting Node-1 as the bootnode:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"MacOS",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu --data-path=data --genesis-file=../privateNetworkGenesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30305\n"))),(0,r.kt)(i.Z,{label:"Windows",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu --data-path=data --genesis-file=..\\privateNetworkGenesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30305\n")))),(0,r.kt)("p",null,"The command line specifies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A different port to Node-1 and Node-2 for P2P discovery."),(0,r.kt)("li",{parentName:"ul"},"A data directory for Node-3 using the ",(0,r.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/cli/options#data-path"},(0,r.kt)("inlineCode",{parentName:"a"},"--data-path"))," option."),(0,r.kt)("li",{parentName:"ul"},"A bootnode and genesis file as for Node-2.")),(0,r.kt)("h3",{id:"6-confirm-the-private-network-is-working"},"6. Confirm the private network is working"),(0,r.kt)("p",null,"Start another terminal, use curl to call the JSON-RPC API ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/api/#net_peercount"},(0,r.kt)("inlineCode",{parentName:"a"},"net_peerCount"))," method and confirm the nodes are functioning as peers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":1}\' localhost:8545\n')),(0,r.kt)("p",null,"The result confirms Node-1 (the node running the JSON-RPC service) has two peers (Node-2 and Node-3):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "0x2"\n}\n')),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"Import accounts to MetaMask and send transactions as described in the ",(0,r.kt)("a",{parentName:"p",href:"/stable/private-networks/tutorials/quickstart#create-a-transaction-using-metamask"},"Quickstart tutorial"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Besu doesn't support ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/how-to/send-transactions"},"private key management"),".")),(0,r.kt)("p",null,"Send transactions using ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_sendRawTransaction")," to ",(0,r.kt)("a",{parentName:"p",href:"/stable/private-networks/how-to/send-transactions/"},"send ether or, deploy or invoke contracts"),"."),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/how-to/use-besu-api/json-rpc"},"JSON-RPC API"),"."),(0,r.kt)("p",null,"Start a node with the ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/cli/options#rpc-ws-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-ws-enabled"))," option and use the ",(0,r.kt)("a",{parentName:"p",href:"/stable/public-networks/how-to/use-besu-api/rpc-pubsub"},"RPC Pub/Sub API"),"."),(0,r.kt)("h2",{id:"stop-the-nodes"},"Stop the nodes"),(0,r.kt)("p",null,"When finished using the private network, stop all nodes using ++ctrl+c++ in each terminal window."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To restart the private network in the future, start from ",(0,r.kt)("a",{parentName:"p",href:"#3-start-the-first-node-as-a-bootnode"},"3. Start the first node as a bootnode"),".")))}b.isMDXComponent=!0},57198:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/EnodeStartup-145939e1c789c28e464db82faa0fb3ca.png"}}]);