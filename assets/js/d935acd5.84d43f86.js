"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[56168],{37037:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var i=s(85893),t=s(11151);const r={title:"Get started with onchain permissioning",sidebar_position:1,description:"Setting up and using Hyperledger Besu onchain permissioning",tags:["private networks"]},o="Get started with onchain permissioning",c={id:"private-networks/tutorials/permissioning/onchain",title:"Get started with onchain permissioning",description:"Setting up and using Hyperledger Besu onchain permissioning",source:"@site/versioned_docs/version-23.10.2/private-networks/tutorials/permissioning/onchain.md",sourceDirName:"private-networks/tutorials/permissioning",slug:"/private-networks/tutorials/permissioning/onchain",permalink:"/private-networks/tutorials/permissioning/onchain",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.2/private-networks/tutorials/permissioning/onchain.md",tags:[{label:"private networks",permalink:"/tags/private-networks"}],version:"23.10.2",lastUpdatedAt:1703117844,formattedLastUpdatedAt:"Dec 21, 2023",sidebarPosition:1,frontMatter:{title:"Get started with onchain permissioning",sidebar_position:1,description:"Setting up and using Hyperledger Besu onchain permissioning",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Create a permissioned network",permalink:"/private-networks/tutorials/permissioning/"},next:{title:"Upgrade permissioning contracts",permalink:"/private-networks/tutorials/permissioning/upgrade-contracts"}},d={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Create folders",id:"1-create-folders",level:3},{value:"2. Create the configuration file",id:"2-create-the-configuration-file",level:3},{value:"3. Generate node keys and a genesis file",id:"3-generate-node-keys-and-a-genesis-file",level:3},{value:"4. Copy the genesis file to the Permissioned-Network directory",id:"4-copy-the-genesis-file-to-the-permissioned-network-directory",level:3},{value:"5. Add the Ingress contracts to the genesis file",id:"5-add-the-ingress-contracts-to-the-genesis-file",level:3},{value:"6. Copy the node private keys to the node directories",id:"6-copy-the-node-private-keys-to-the-node-directories",level:3},{value:"7. Start Node-1",id:"7-start-node-1",level:3},{value:"8. Start Node-2",id:"8-start-node-2",level:3},{value:"9. Start Node-3",id:"9-start-node-3",level:3},{value:"10. Start Node-4",id:"10-start-node-4",level:3},{value:"11. Clone the contracts and install dependencies",id:"11-clone-the-contracts-and-install-dependencies",level:3},{value:"12. Set the environment variables",id:"12-set-the-environment-variables",level:3},{value:"13. Deploy the contracts",id:"13-deploy-the-contracts",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"get-started-with-onchain-permissioning",children:"Get started with onchain permissioning"}),"\n",(0,i.jsx)(n.p,{children:"The following steps describe bootstrapping a permissioned network using a Hyperledger Besu node."}),"\n",(0,i.jsxs)(n.p,{children:["This tutorial configures permissioning on a ",(0,i.jsx)(n.a,{href:"/private-networks/how-to/configure/consensus/ibft",children:"IBFT 2.0 proof of authority (PoA)"})," network."]}),"\n",(0,i.jsxs)(n.admonition,{title:"Please use this as reference material only!",type:"caution",children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://github.com/ConsenSys/permissioning-smart-contracts",children:"permissioning-contract-repo"})," has been archived and is intended as reference material only.\nPlease update all dependencies in there before proceeding."]}),(0,i.jsxs)(n.p,{children:["In addition, we also recommend using ",(0,i.jsx)(n.a,{href:"https://hardhat.org/hardhat-runner/docs/guides/deploying",children:"Hardhat"})," instead of ",(0,i.jsx)(n.a,{href:"https://trufflesuite.com/",children:"Truffle"}),",\nas the development environment. Please refer to the ",(0,i.jsx)(n.a,{href:"/private-networks/tutorials/quickstart",children:"Quorum Dev Quickstart"})," for an example."]})]}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://nodejs.org/en/",children:"Node.js"})," v10.16.0 or later"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://yarnpkg.com/en/",children:"Yarn"})," v1.15 or later"]}),"\n",(0,i.jsxs)(n.li,{children:["Browser with ",(0,i.jsx)(n.a,{href:"https://metamask.io/",children:"MetaMask installed"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,i.jsx)(n.h3,{id:"1-create-folders",children:"1. Create folders"}),"\n",(0,i.jsx)(n.p,{children:"Each node requires a data directory for the blockchain data."}),"\n",(0,i.jsx)(n.p,{children:"Create directories for your permissioned network and each of the three nodes, and a data directory for each node:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"Permissioned-Network/\n\u251c\u2500\u2500 Node-1\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u251c\u2500\u2500 Node-2\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2514\u2500\u2500 Node-3\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2514\u2500\u2500 Node-4\n    \u251c\u2500\u2500 data\n"})}),"\n",(0,i.jsx)(n.h3,{id:"2-create-the-configuration-file",children:"2. Create the configuration file"}),"\n",(0,i.jsxs)(n.p,{children:["The configuration file defines the ",(0,i.jsx)(n.a,{href:"/private-networks/how-to/configure/consensus/ibft#genesis-file",children:"IBFT 2.0 genesis file"})," and the number of node key pairs to generate."]}),"\n",(0,i.jsxs)(n.p,{children:["The configuration file has two nested JSON nodes. The first is the ",(0,i.jsx)(n.code,{children:"genesis"})," property defining the IBFT 2.0 genesis file, except for the ",(0,i.jsx)(n.code,{children:"extraData"})," string, which Besu generates automatically in the resulting genesis file. The second is the ",(0,i.jsx)(n.code,{children:"blockchain"})," property defining the number of key pairs to generate."]}),"\n",(0,i.jsxs)(n.p,{children:["Copy the following configuration file definition to a file called ",(0,i.jsx)(n.code,{children:"ibftConfigFile.json"})," and save it in the ",(0,i.jsx)(n.code,{children:"Permissioned-Network"})," directory:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "genesis": {\n    "config": {\n      "chainId": 1337,\n      "berlinBlock": 0,\n      "ibft2": {\n        "blockperiodseconds": 2,\n        "epochlength": 30000,\n        "requesttimeoutseconds": 4\n      }\n    },\n    "nonce": "0x0",\n    "timestamp": "0x58ee40ba",\n    "gasLimit": "0x47b760",\n    "difficulty": "0x1",\n    "mixHash": "0x63746963616c2062797a616e74696e65206661756c7420746f6c6572616e6365",\n    "coinbase": "0x0000000000000000000000000000000000000000",\n    "alloc": {\n      "fe3b557e8fb62b89f4916b721be55ceb828dbd73": {\n        "privateKey": "8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63",\n        "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n        "balance": "0xad78ebc5ac6200000"\n      },\n      "627306090abaB3A6e1400e9345bC60c78a8BEf57": {\n        "privateKey": "c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3",\n        "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n        "balance": "90000000000000000000000"\n      },\n      "f17f52151EbEF6C7334FAD080c5704D77216b732": {\n        "privateKey": "ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f",\n        "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n        "balance": "90000000000000000000000"\n      }\n    }\n  },\n  "blockchain": {\n    "nodes": {\n      "generate": true,\n      "count": 4\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:":::critical Security warning"}),"\n",(0,i.jsx)(n.p,{children:"Don't use the accounts in the genesis file on Mainnet or any public network except for testing. The private keys display, which means the accounts are not secure."}),"\n",(0,i.jsx)(n.p,{children:":::"}),"\n",(0,i.jsx)(n.h3,{id:"3-generate-node-keys-and-a-genesis-file",children:"3. Generate node keys and a genesis file"}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"Permissioned-Network"})," directory, generate the node key and genesis file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"besu operator generate-blockchain-config --config-file=ibftConfigFile.json --to=networkFiles --private-key-file-name=key\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Besu creates the following in the ",(0,i.jsx)(n.code,{children:"networkFiles"})," directory:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"genesis.json"})," - The genesis file including the ",(0,i.jsx)(n.code,{children:"extraData"})," property specifying the four nodes are validators."]}),"\n",(0,i.jsx)(n.li,{children:"A directory for each node named using the node address and containing the public and private key for each node."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"networkFiles/\n\u251c\u2500\u2500 genesis.json\n\u2514\u2500\u2500 keys\n    \u251c\u2500\u2500 0x438821c42b812fecdcea7fe8235806a412712fc0\n    \u2502\xa0\xa0 \u251c\u2500\u2500 key\n    \u2502\xa0\xa0 \u2514\u2500\u2500 key.pub\n    \u251c\u2500\u2500 0xca9c2dfa62f4589827c0dd7dcf48259aa29f22f5\n    \u2502\xa0\xa0 \u251c\u2500\u2500 key\n    \u2502\xa0\xa0 \u2514\u2500\u2500 key.pub\n    \u251c\u2500\u2500 0xcd5629bd37155608a0c9b28c4fd19310d53b3184\n    \u2502\xa0\xa0 \u251c\u2500\u2500 key\n    \u2502\xa0\xa0 \u2514\u2500\u2500 key.pub\n    \u2514\u2500\u2500 0xe96825c5ab8d145b9eeca1aba7ea3695e034911a\n        \u251c\u2500\u2500 key\n        \u2514\u2500\u2500 key.pub\n"})}),"\n",(0,i.jsx)(n.h3,{id:"4-copy-the-genesis-file-to-the-permissioned-network-directory",children:"4. Copy the genesis file to the Permissioned-Network directory"}),"\n",(0,i.jsxs)(n.p,{children:["Copy the ",(0,i.jsx)(n.code,{children:"genesis.json"})," file to the ",(0,i.jsx)(n.code,{children:"Permisssioned-Network"})," directory."]}),"\n",(0,i.jsx)(n.h3,{id:"5-add-the-ingress-contracts-to-the-genesis-file",children:"5. Add the Ingress contracts to the genesis file"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"If the network is using only account or node permissioning, add only the relevant Ingress contract to the genesis file."})}),"\n",(0,i.jsxs)(n.p,{children:["Add the Ingress contracts to the genesis file for your network by copying them from ",(0,i.jsx)(n.a,{href:"https://github.com/ConsenSys/permissioning-smart-contracts/blob/e6c2d4d5a728c11cdb8e97a07ddda3c0bfb57b5d/genesis.json",children:(0,i.jsx)(n.code,{children:"genesis.json"})})," in the ",(0,i.jsxs)(n.a,{href:"https://github.com/ConsenSys/permissioning-smart-contracts",children:[(0,i.jsx)(n.code,{children:"permissioning-smart-contracts"})," repository"]})," to the ",(0,i.jsx)(n.code,{children:"alloc"})," section of the contract:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"0x0000000000000000000000000000000000008888": {\n      "comment": "Account Ingress smart contract",\n      "balance": "0",\n      "code": <stripped>,\n      "storage": {\n        <stripped>\n      }\n}\n\n"0x0000000000000000000000000000000000009999": {\n      "comment": "Node Ingress smart contract",\n      "balance": "0",\n      "code": <stripped>,\n      "storage": {\n        <stripped>\n      }\n}\n'})}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["To support the permissioning contracts, ensure your genesis file includes at least the ",(0,i.jsx)(n.code,{children:"constantinopleFixBlock"})," milestone."]}),(0,i.jsxs)(n.p,{children:["The permissioning contract has multiple interfaces, and each interface maps to a specific version of the ",(0,i.jsx)(n.a,{href:"https://entethalliance.org/technical-specifications/",children:"Enterprise Ethereum Alliance Client Specification"}),". Ensure that you specify the ",(0,i.jsx)(n.a,{href:"/private-networks/how-to/use-permissioning/onchain",children:"permissioning contract interface"})," being used when starting Besu."]})]}),"\n",(0,i.jsx)(n.h3,{id:"6-copy-the-node-private-keys-to-the-node-directories",children:"6. Copy the node private keys to the node directories"}),"\n",(0,i.jsxs)(n.p,{children:["For each node, copy the key files to the ",(0,i.jsx)(n.code,{children:"data"})," directory for that node"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"Permissioned-Network/\n\u251c\u2500\u2500 genesis.json\n\u251c\u2500\u2500 Node-1\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key.pub\n\u251c\u2500\u2500 Node-2\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key.pub\n\u251c\u2500\u2500 Node-3\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key.pub\n\u251c\u2500\u2500 Node-4\n\u2502   \u251c\u2500\u2500 data\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key.pub\n"})}),"\n",(0,i.jsx)(n.h3,{id:"7-start-node-1",children:"7. Start Node-1"}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:"The specified node must be producing blocks, that is, be a miner (PoW networks) or validator (PoA networks)."}),(0,i.jsxs)(n.p,{children:["To allow MetaMask to connect, the node must have JSON-RPC HTTP enabled, and have ",(0,i.jsx)(n.code,{children:"--rpc-http-cors-origins"})," set to allow MetaMask."]}),(0,i.jsxs)(n.p,{children:["If your network is not a ",(0,i.jsx)(n.a,{href:"/private-networks/how-to/configure/free-gas",children:"free gas network"}),", the account used to interact with the permissioning contracts must have a balance."]})]}),"\n",(0,i.jsxs)(n.p,{children:["Start the first node with command line options to enable onchain permissioning and the location of the ",(0,i.jsx)(n.strong,{children:"data"})," folder and genesis file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cmd",children:'besu --data-path=data --genesis-file=../genesis.json --permissions-accounts-contract-enabled --permissions-accounts-contract-address "0x0000000000000000000000000000000000008888" --permissions-nodes-contract-enabled  --permissions-nodes-contract-address "0x0000000000000000000000000000000000009999" --permissions-nodes-contract-version=2 --rpc-http-enabled --rpc-http-cors-origins="*" --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*"\n'})}),"\n",(0,i.jsx)(n.p,{children:"On the command line:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Enable onchain accounts permissioning using ",(0,i.jsx)(n.a,{href:"/private-networks/reference/cli/options#permissions-accounts-contract-enabled",children:(0,i.jsx)(n.code,{children:"--permissions-accounts-contract-enabled"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Set the address of the Account Ingress contract in the genesis file using ",(0,i.jsx)(n.a,{href:"/private-networks/reference/cli/options#permissions-accounts-contract-address",children:(0,i.jsx)(n.code,{children:"--permissions-accounts-contract-address"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Enable onchain nodes permissioning using ",(0,i.jsx)(n.a,{href:"/private-networks/reference/cli/options#permissions-nodes-contract-enabled",children:(0,i.jsx)(n.code,{children:"--permissions-nodes-contract-enabled"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Set the address of the Node Ingress contract in the genesis file using ",(0,i.jsx)(n.a,{href:"/private-networks/reference/cli/options#permissions-nodes-contract-address",children:(0,i.jsx)(n.code,{children:"--permissions-nodes-contract-address"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Set the version of the ",(0,i.jsx)(n.a,{href:"/private-networks/how-to/use-permissioning/onchain#specify-the-permissioning-contract-interface-version",children:"permissioning contract interface"})," using ",(0,i.jsx)(n.a,{href:"/private-networks/reference/cli/options#permissions-nodes-contract-version",children:(0,i.jsx)(n.code,{children:"--permissions-nodes-contract-version"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Enable the JSON-RPC API using ",(0,i.jsx)(n.a,{href:"/public-networks/reference/cli/options#rpc-http-enabled",children:(0,i.jsx)(n.code,{children:"--rpc-http-enabled"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Enable the ",(0,i.jsx)(n.code,{children:"ADMIN"}),", ",(0,i.jsx)(n.code,{children:"ETH"}),", ",(0,i.jsx)(n.code,{children:"NET"}),", ",(0,i.jsx)(n.code,{children:"PERM"}),", and ",(0,i.jsx)(n.code,{children:"IBFT"})," APIs using ",(0,i.jsx)(n.a,{href:"/public-networks/reference/cli/options#rpc-http-api",children:(0,i.jsx)(n.code,{children:"--rpc-http-api"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Allow all-host access to the HTTP JSON-RPC API using ",(0,i.jsx)(n.a,{href:"/public-networks/reference/cli/options#host-allowlist",children:(0,i.jsx)(n.code,{children:"--host-allowlist"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Allow all-domain access to the node through the HTTP JSON-RPC API using ",(0,i.jsx)(n.a,{href:"/public-networks/reference/cli/options#rpc-http-cors-origins",children:(0,i.jsx)(n.code,{children:"--rpc-http-cors-origins"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When the node starts, the ",(0,i.jsx)(n.a,{href:"/public-networks/concepts/node-keys#enode-url",children:"enode URL"})," displays. Copy the enode URL to use when starting Node-2, Node-3, and Node-4."]}),"\n",(0,i.jsx)(n.h3,{id:"8-start-node-2",children:"8. Start Node-2"}),"\n",(0,i.jsx)(n.p,{children:"Use the following command to start Node-2:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cmd",children:'besu --data-path=data --genesis-file=../genesis.json --bootnodes=<Node-1 Enode URL> --permissions-accounts-contract-enabled --permissions-accounts-contract-address "0x0000000000000000000000000000000000008888" --permissions-nodes-contract-enabled  --permissions-nodes-contract-address "0x0000000000000000000000000000000000009999" --permissions-nodes-contract-version=2 --rpc-http-enabled --rpc-http-cors-origins="*" --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*" --p2p-port=30304 --rpc-http-port=8546\n'})}),"\n",(0,i.jsx)(n.p,{children:"The command line specifies:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A different port to Node-1 for P2P discovery using ",(0,i.jsx)(n.a,{href:"/public-networks/reference/cli/options#p2p-port",children:(0,i.jsx)(n.code,{children:"--p2p-port"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["A different port to Node-1 for HTTP JSON-RPC using ",(0,i.jsx)(n.a,{href:"/public-networks/reference/cli/options#rpc-http-port",children:(0,i.jsx)(n.code,{children:"--rpc-http-port"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The enode URL of Node-1 using ",(0,i.jsx)(n.a,{href:"/public-networks/reference/cli/options#bootnodes",children:(0,i.jsx)(n.code,{children:"--bootnodes"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Other options as for ",(0,i.jsx)(n.a,{href:"#7-start-node-1",children:"Node-1"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"9-start-node-3",children:"9. Start Node-3"}),"\n",(0,i.jsx)(n.p,{children:"Use the following command to start Node-3:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cmd",children:'besu --data-path=data --genesis-file=../genesis.json --bootnodes=<Node-1 Enode URL> --permissions-accounts-contract-enabled --permissions-accounts-contract-address "0x0000000000000000000000000000000000008888" --permissions-nodes-contract-enabled  --permissions-nodes-contract-address "0x0000000000000000000000000000000000009999" --permissions-nodes-contract-version=2 --rpc-http-enabled --rpc-http-cors-origins="*" --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*" --p2p-port=30305 --rpc-http-port=8547\n'})}),"\n",(0,i.jsx)(n.p,{children:"The command line specifies:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A different port to Node-1 and Node-2 for P2P discovery using ",(0,i.jsx)(n.a,{href:"/public-networks/reference/cli/options#p2p-port",children:(0,i.jsx)(n.code,{children:"--p2p-port"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["A different port to Node-1 and Node-2 for HTTP JSON-RPC using ",(0,i.jsx)(n.a,{href:"/public-networks/reference/cli/options#rpc-http-port",children:(0,i.jsx)(n.code,{children:"--rpc-http-port"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The enode URL of Node-1 using ",(0,i.jsx)(n.a,{href:"/public-networks/reference/cli/options#bootnodes",children:(0,i.jsx)(n.code,{children:"--bootnodes"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Other options as for ",(0,i.jsx)(n.a,{href:"#7-start-node-1",children:"Node-1"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"10-start-node-4",children:"10. Start Node-4"}),"\n",(0,i.jsx)(n.p,{children:"Use the following command to start Node-4:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cmd",children:'besu --data-path=data --genesis-file=../genesis.json --bootnodes=<Node-1 Enode URL> --permissions-accounts-contract-enabled --permissions-accounts-contract-address "0x0000000000000000000000000000000000008888" --permissions-nodes-contract-enabled  --permissions-nodes-contract-address "0x0000000000000000000000000000000000009999" --permissions-nodes-contract-version=2 --rpc-http-enabled --rpc-http-cors-origins="*" --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*" --p2p-port=30306 --rpc-http-port=8548\n'})}),"\n",(0,i.jsx)(n.p,{children:"The command line specifies:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A different port to Node-1, Node-2, and Node-3 for P2P discovery using ",(0,i.jsx)(n.a,{href:"/public-networks/reference/cli/options#p2p-port",children:(0,i.jsx)(n.code,{children:"--p2p-port"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["A different port to Node-1, Node-2, and Node-3 for HTTP JSON-RPC using ",(0,i.jsx)(n.a,{href:"/public-networks/reference/cli/options#rpc-http-port",children:(0,i.jsx)(n.code,{children:"--rpc-http-port"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The enode URL of Node-1 using ",(0,i.jsx)(n.a,{href:"/public-networks/reference/cli/options#bootnodes",children:(0,i.jsx)(n.code,{children:"--bootnodes"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Other options as for ",(0,i.jsx)(n.a,{href:"#7-start-node-1",children:"Node-1"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["If your nodes are having trouble connecting as peers, update the ",(0,i.jsx)(n.code,{children:"--bootnodes"})," option for each node to include all four enode URLs."]})}),"\n",(0,i.jsx)(n.h3,{id:"11-clone-the-contracts-and-install-dependencies",children:"11. Clone the contracts and install dependencies"}),"\n",(0,i.jsxs)(n.p,{children:["Clone the ",(0,i.jsx)(n.code,{children:"permissioning-smart-contracts"})," repository:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/ConsenSys/permissioning-smart-contracts.git\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Change into the ",(0,i.jsx)(n.code,{children:"permissioning-smart-contracts"})," directory."]}),"\n",(0,i.jsx)(n.h3,{id:"12-set-the-environment-variables",children:"12. Set the environment variables"}),"\n",(0,i.jsx)(n.p,{children:"Create the following environment variables and set to the specified values:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"BESU_NODE_PERM_ACCOUNT"})," - Account to deploy the permissioning contracts and become the first admin account."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"BESU_NODE_PERM_KEY"})," - Private key of the account to deploy the permissioning contracts."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ACCOUNT_INGRESS_CONTRACT_ADDRESS"})," - Address of the Account Ingress contract in the genesis file."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"NODE_INGRESS_CONTRACT_ADDRESS"})," - Address of the Node Ingress contract in the genesis file."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"BESU_NODE_PERM_ENDPOINT"})," - Required only if your node is not using the default JSON-RPC host and port (",(0,i.jsx)(n.code,{children:"http://127.0.0.1:8545"}),"). Set to JSON-RPC host and port. When bootstrapping the network, Besu uses the specified node to deploy the contracts and is the first node in the network."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"CHAIN_ID"})," - The chain ID from the genesis file."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"INITIAL_ALLOWLISTED_NODES"}),"(optional) - The enode URLs of permitted nodes. Specify multiple nodes (Node-1, Node-2, Node-3) as a comma-separated list."]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["A simple way to set multiple environment variables is to create a file called ",(0,i.jsx)(n.code,{children:".env"})," with the required settings:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-env",children:"NODE_INGRESS_CONTRACT_ADDRESS=0x0000000000000000000000000000000000009999\nACCOUNT_INGRESS_CONTRACT_ADDRESS=0x0000000000000000000000000000000000008888\nBESU_NODE_PERM_ACCOUNT=627306090abaB3A6e1400e9345bC60c78a8BEf57\nBESU_NODE_PERM_KEY=c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3\nBESU_NODE_PERM_ENDPOINT=http://127.0.0.1:8545\nCHAIN_ID=1337\nINITIAL_ALLOWLISTED_NODES=enode://c35c3...d615f@1.2.3.4:30303,enode://f42c13...fc456@1.2.3.5:30303\n"})}),(0,i.jsxs)(n.p,{children:["If using a ",(0,i.jsx)(n.code,{children:".env"})," file, save the file to the ",(0,i.jsx)(n.code,{children:"permissioning-smart-contracts"})," directory."]})]}),"\n",(0,i.jsx)(n.h3,{id:"13-deploy-the-contracts",children:"13. Deploy the contracts"}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"permissioning-smart-contracts"})," directory, while your network is running, deploy the Admin and Rules contracts:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn truffle migrate --reset --network besu\n"})}),"\n",(0,i.jsx)(n.p,{children:"This also updates the Ingress contract with the name and version of the Admin and Rules contracts. The migration logs the addresses of the Admin and Rules contracts."}),"\n",(0,i.jsx)(n.admonition,{type:"important",children:(0,i.jsx)(n.p,{children:"The account that deploys the contracts is automatically an admin account."})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>o});var i=s(67294);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);