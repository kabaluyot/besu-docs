"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[98144],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16345:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Start Besu",sidebar_position:3,description:"Start Besu on a public Ethereum network.",tags:["public networks"]},i="Start Besu",l={unversionedId:"public-networks/get-started/start-node",id:"public-networks/get-started/start-node",title:"Start Besu",description:"Start Besu on a public Ethereum network.",source:"@site/docs/public-networks/get-started/start-node.md",sourceDirName:"public-networks/get-started",slug:"/public-networks/get-started/start-node",permalink:"/development/public-networks/get-started/start-node",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/get-started/start-node.md",tags:[{label:"public networks",permalink:"/development/tags/public-networks"}],version:"current",lastUpdatedAt:1689380948,formattedLastUpdatedAt:"Jul 15, 2023",sidebarPosition:3,frontMatter:{title:"Start Besu",sidebar_position:3,description:"Start Besu on a public Ethereum network.",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Install binary distribution",permalink:"/development/public-networks/get-started/install/binary-distribution"},next:{title:"Connect to a network overview",permalink:"/development/public-networks/get-started/connect/"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Local block data",id:"local-block-data",level:2},{value:"Genesis configuration",id:"genesis-configuration",level:2},{value:"Syncing and storage",id:"syncing-and-storage",level:2},{value:"Run a node for testing",id:"run-a-node-for-testing",level:2},{value:"Run a node on Goerli testnet",id:"run-a-node-on-goerli-testnet",level:2},{value:"Run a node on Sepolia testnet",id:"run-a-node-on-sepolia-testnet",level:2},{value:"Run a node on Ethereum Mainnet",id:"run-a-node-on-ethereum-mainnet",level:2},{value:"Confirm node is running",id:"confirm-node-is-running",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"start-besu"},"Start Besu"),(0,r.kt)("p",null,"Nodes can connect to Ethereum Mainnet and public testnets."),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options"},(0,r.kt)("inlineCode",{parentName:"a"},"besu"))," command with the required command line options to start a node."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/get-started/install/binary-distribution"},"Besu installed")),(0,r.kt)("h2",{id:"local-block-data"},"Local block data"),(0,r.kt)("p",null,"When connecting to a network other than the network previously connected to, you must either delete the local block data or use the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#data-path"},(0,r.kt)("inlineCode",{parentName:"a"},"--data-path"))," option to specify a different data directory."),(0,r.kt)("p",null,"To delete the local block data, delete the ",(0,r.kt)("inlineCode",{parentName:"p"},"database")," directory in the ",(0,r.kt)("inlineCode",{parentName:"p"},"besu/build/distribution/besu-<version>")," directory."),(0,r.kt)("h2",{id:"genesis-configuration"},"Genesis configuration"),(0,r.kt)("p",null,"Besu specifies the genesis configuration, and sets the network ID and bootnodes when connecting to ",(0,r.kt)("a",{parentName:"p",href:"#run-a-node-on-goerli-testnet"},"Goerli"),", ",(0,r.kt)("a",{parentName:"p",href:"#run-a-node-on-sepolia-testnet"},"Sepolia"),", and ",(0,r.kt)("a",{parentName:"p",href:"#run-a-node-on-ethereum-mainnet"},"Mainnet"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The Ropsten, Rinkeby, and Kiln testnets are deprecated.")),(0,r.kt)("p",null,"When you specify ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#network"},(0,r.kt)("inlineCode",{parentName:"a"},"--network=dev")),", Besu uses the development mode genesis configuration with a fixed low difficulty. A node started with ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#network"},(0,r.kt)("inlineCode",{parentName:"a"},"--network=dev"))," has an empty bootnodes list by default."),(0,r.kt)("p",null,"The genesis files defining the genesis configurations are in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/besu/tree/master/config/src/main/resources"},"Besu source files"),"."),(0,r.kt)("p",null,"To define a genesis configuration, create a genesis file (for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"genesis.json"),") and specify the file using the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#genesis-file"},(0,r.kt)("inlineCode",{parentName:"a"},"--genesis-file"))," option."),(0,r.kt)("h2",{id:"syncing-and-storage"},"Syncing and storage"),(0,r.kt)("p",null,"By default, Besu syncs to the current state of the blockchain using ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/get-started/connect/sync-node#fast-synchronization"},"fast sync")," in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Networks specified using ",(0,r.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#network"},(0,r.kt)("inlineCode",{parentName:"a"},"--network"))," except for the ",(0,r.kt)("inlineCode",{parentName:"li"},"dev")," development network."),(0,r.kt)("li",{parentName:"ul"},"Ethereum Mainnet.")),(0,r.kt)("p",null,"We recommend using ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/get-started/connect/sync-node#snap-synchronization"},"snap sync")," for a faster sync, by starting Besu with ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#sync-mode"},(0,r.kt)("inlineCode",{parentName:"a"},"--sync-mode=X_SNAP")),"."),(0,r.kt)("p",null,"By default, Besu stores data in the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/concepts/data-storage-formats#forest-of-tries"},"Forest of Tries")," format. We recommend using ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/concepts/data-storage-formats#bonsai-tries"},"Bonsai Tries")," for lower storage requirements, by starting Besu with ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#data-storage-format"},(0,r.kt)("inlineCode",{parentName:"a"},"--data-storage-format=BONSAI")),"."),(0,r.kt)("h2",{id:"run-a-node-for-testing"},"Run a node for testing"),(0,r.kt)("p",null,"To run a node that mines blocks at a rate suitable for testing purposes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu --network=dev --miner-enabled --miner-coinbase=0xfe3b557e8fb62b89f4916b721be55ceb828dbd73 --rpc-http-cors-origins="all" --host-allowlist="*" --rpc-ws-enabled --rpc-http-enabled --data-path=/tmp/tmpDatdir\n')),(0,r.kt)("p",null,"You can also use the following ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/how-to/configuration-file"},"configuration file")," on the command line to start a node with the same options as above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'network="dev"\nminer-enabled=true\nminer-coinbase="0xfe3b557e8fb62b89f4916b721be55ceb828dbd73"\nrpc-http-cors-origins=["all"]\nhost-allowlist=["*"]\nrpc-ws-enabled=true\nrpc-http-enabled=true\ndata-path="/tmp/tmpdata-path"\n')),(0,r.kt)("admonition",{title:"Warning",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"The following settings are a security risk in production environments:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Enabling the HTTP JSON-RPC service (",(0,r.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#rpc-http-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-enabled")),") and setting ",(0,r.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#rpc-http-host"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-host"))," to 0.0.0.0 exposes the RPC connection on your node to any remote connection."),(0,r.kt)("li",{parentName:"ul"},"Setting ",(0,r.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#host-allowlist"},(0,r.kt)("inlineCode",{parentName:"a"},"--host-allowlist"))," to ",(0,r.kt)("inlineCode",{parentName:"li"},'"*"')," allows JSON-RPC API access from any host."),(0,r.kt)("li",{parentName:"ul"},"Setting ",(0,r.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#rpc-http-cors-origins"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-cors-origins"))," to ",(0,r.kt)("inlineCode",{parentName:"li"},'"all"')," or ",(0,r.kt)("inlineCode",{parentName:"li"},'"*"')," allows cross-origin resource sharing (CORS) access from any domain."))),(0,r.kt)("h2",{id:"run-a-node-on-goerli-testnet"},"Run a node on Goerli testnet"),(0,r.kt)("p",null,"To run a node on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/goerli/testnet"},"Goerli")," specifying a data directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu --network=goerli --data-path=<path>/<goerlidata-path>\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"<path>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<goerlidata-path>")," are the path and directory to save the Goerli chain data to."),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/get-started/connect/testnet"},"guide on connecting to a testnet")," for more information."),(0,r.kt)("h2",{id:"run-a-node-on-sepolia-testnet"},"Run a node on Sepolia testnet"),(0,r.kt)("p",null,"To run a node on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/goerli/sepolia"},"Sepolia")," specifying a data directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu --network=sepolia --data-path=<path>/<sepoliadata-path>\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"<path>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<sepoliadata-path>")," are the path and directory to save the Sepolia chain data to."),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/get-started/connect/testnet"},"guide on connecting to a testnet")," for more information."),(0,r.kt)("h2",{id:"run-a-node-on-ethereum-mainnet"},"Run a node on Ethereum Mainnet"),(0,r.kt)("p",null,"To run a node on the Ethereum Mainnet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu\n")),(0,r.kt)("p",null,"To run a node on Mainnet with the HTTP JSON-RPC service enabled and available for localhost only:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu --rpc-http-enabled\n")),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/get-started/connect/mainnet"},"guide on connecting to Mainnet")," for more information."),(0,r.kt)("h2",{id:"confirm-node-is-running"},"Confirm node is running"),(0,r.kt)("p",null,"If you started Besu with the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#rpc-http-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-enabled"))," option, use ",(0,r.kt)("a",{parentName:"p",href:"https://curl.haxx.se/"},"cURL")," to call ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/api/"},"JSON-RPC API methods")," to confirm the node is running."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"eth_chainId")," returns the chain ID of the network."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{"jsonrpc":"2.0","method":"eth_chainId","params":[],"id":1}\' localhost:8545\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"eth_syncing")," returns the starting, current, and highest block."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":1}\' localhost:8545\n')),(0,r.kt)("p",{parentName:"li"},"For example, after connecting to Mainnet, ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_syncing")," will return something similar to:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "startingBlock": "0x0",\n    "currentBlock": "0x2d0",\n    "highestBlock": "0x66c0"\n  }\n}\n')))))}u.isMDXComponent=!0}}]);