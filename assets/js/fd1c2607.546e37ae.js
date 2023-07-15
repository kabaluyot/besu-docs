"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[18726],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46237:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={title:"Interact with a deployed contract",sidebar_position:2,description:"calling smart contracts functions"},i="Interact with deployed smart contracts",s={unversionedId:"private-networks/tutorials/contracts/interact",id:"version-23.4.0/private-networks/tutorials/contracts/interact",title:"Interact with a deployed contract",description:"calling smart contracts functions",source:"@site/versioned_docs/version-23.4.0/private-networks/tutorials/contracts/interact.md",sourceDirName:"private-networks/tutorials/contracts",slug:"/private-networks/tutorials/contracts/interact",permalink:"/23.4.0/private-networks/tutorials/contracts/interact",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/private-networks/tutorials/contracts/interact.md",tags:[],version:"23.4.0",lastUpdatedAt:1689380948,formattedLastUpdatedAt:"Jul 15, 2023",sidebarPosition:2,frontMatter:{title:"Interact with a deployed contract",sidebar_position:2,description:"calling smart contracts functions"},sidebar:"privateDocSidebar",previous:{title:"Transfer account funds",permalink:"/23.4.0/private-networks/tutorials/contracts/transfer-funds"},next:{title:"Deploy a Hyperledger Besu private network with Kubernetes",permalink:"/23.4.0/private-networks/tutorials/kubernetes/"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Interact with public contracts",id:"interact-with-public-contracts",level:2},{value:"1. Perform a read operation",id:"1-perform-a-read-operation",level:3},{value:"2. Perform a write operation",id:"2-perform-a-write-operation",level:3},{value:"3. Verify an updated value",id:"3-verify-an-updated-value",level:3},{value:"Interact with private contracts",id:"interact-with-private-contracts",level:2},{value:"1. Perform a read operation",id:"1-perform-a-read-operation-1",level:3},{value:"2. Perform a write operation",id:"2-perform-a-write-operation-1",level:3},{value:"3. Verify an updated value",id:"3-verify-an-updated-value-1",level:3}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"interact-with-deployed-smart-contracts"},"Interact with deployed smart contracts"),(0,r.kt)("p",null,"You can get started with the ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/tutorials/quickstart"},"Developer Quickstart")," to rapidly generate local blockchain networks."),(0,r.kt)("p",null,"This tutorial shows you how to interact with smart contracts that have been deployed to a network."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A network with a deployed smart contract as in the ",(0,r.kt)("a",{parentName:"li",href:"/23.4.0/private-networks/tutorials/contracts/"},"deploying smart contracts tutorial"))),(0,r.kt)("h2",{id:"interact-with-public-contracts"},"Interact with public contracts"),(0,r.kt)("p",null,"This tutorial uses the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-dev-quickstart/blob/1e8cc281098923802845cd829ec20c88513c2e1c/files/common/smart_contracts/privacy/contracts/SimpleStorage.sol"},(0,r.kt)("inlineCode",{parentName:"a"},"SimpleStorage.sol"))," contract:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"pragma solidity ^0.7.0;\n\ncontract SimpleStorage {\n  uint public storedData;\n\n  constructor(uint initVal) public {\n    storedData = initVal;\n  }\n\n  function set(uint x) public {\n    storedData = x;\n  }\n\n  function get() view public returns (uint retVal) {\n    return storedData;\n  }\n}\n")),(0,r.kt)("p",null,"Once the contract is deployed, you can perform a read operation using the ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," function call and a write operation using the ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," function call. This tutorial uses the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/web3"},"web3js")," library to interact with the contract. A ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-dev-quickstart/blob/1e8cc281098923802845cd829ec20c88513c2e1c/files/besu/smart_contracts/privacy/scripts/public_tx.js"},"full example")," of these calls can be found in the ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/tutorials/quickstart"},"Developer Quickstart"),"."),(0,r.kt)("h3",{id:"1-perform-a-read-operation"},"1. Perform a read operation"),(0,r.kt)("p",null,"To perform a read operation, you need the address that the contract was deployed to and the contract's ABI. The contract's ABI can be obtained from compiling the contract; see the ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/tutorials/contracts/"},"deploying smart contracts tutorial")," for an example."),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"https://web3js.readthedocs.io/en/v1.3.4/web3-eth-contract.html"},(0,r.kt)("inlineCode",{parentName:"a"},"web3.eth.Contract"))," object to create a new instance of the smart contract, then make the ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," function call from the contract's list of methods, which will return the value stored:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'async function getValueAtAddress(\n  host,\n  deployedContractAbi,\n  deployedContractAddress,\n) {\n  const web3 = new Web3(host);\n  const contractInstance = new web3.eth.Contract(\n    deployedContractAbi,\n    deployedContractAddress,\n  );\n  const res = await contractInstance.methods.get().call();\n  console.log("Obtained value at deployed contract is: " + res);\n  return res;\n}\n')),(0,r.kt)("h3",{id:"2-perform-a-write-operation"},"2. Perform a write operation"),(0,r.kt)("p",null,"To perform a write operation, send a transaction to update the stored value. As with the ",(0,r.kt)("a",{parentName:"p",href:"#1-perform-a-read-operation"},(0,r.kt)("inlineCode",{parentName:"a"},"get")," call"),", you need to use the address that the contract was deployed to and the contract's ABI. The account address must correspond to an actual account with some ETH in it to perform the transaction. Because Besu doesn't manage accounts, this address is the address you use in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.ethsigner.consensys.net/en/stable/"},"EthSigner")," (or equivalent) to manage your accounts."),(0,r.kt)("p",null,"Make the ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," call passing in your account address, ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," as the updated value of the contract, and the amount of gas you are willing to spend for the transaction:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// You need to use the accountAddress details provided to Besu to send/interact with contracts\nasync function setValueAtAddress(\n  host,\n  accountAddress,\n  value,\n  deployedContractAbi,\n  deployedContractAddress,\n) {\n  const web3 = new Web3(host);\n  const contractInstance = new web3.eth.Contract(\n    deployedContractAbi,\n    deployedContractAddress,\n  );\n  const res = await contractInstance.methods\n    .set(value)\n    .send({ from: accountAddress, gasPrice: "0xFF", gasLimit: "0x24A22" });\n  return res;\n}\n')),(0,r.kt)("h3",{id:"3-verify-an-updated-value"},"3. Verify an updated value"),(0,r.kt)("p",null,"To verify that a value has been updated, perform a ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," call after a ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," update call."),(0,r.kt)("h2",{id:"interact-with-private-contracts"},"Interact with private contracts"),(0,r.kt)("p",null,"This private contracts example uses the same ",(0,r.kt)("inlineCode",{parentName:"p"},"SimpleStorage.sol")," contract as in the ",(0,r.kt)("a",{parentName:"p",href:"#interact-with-public-contracts"},"public contracts example"),", but it uses the ",(0,r.kt)("a",{parentName:"p",href:"https://consensys.github.io/web3js-quorum/latest/index.html"},"web3js-quorum")," library and the ",(0,r.kt)("a",{parentName:"p",href:"https://consensys.github.io/web3js-quorum/latest/module-priv.html#~generateAndSendRawTransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"generateAndSendRawTransaction"))," method to interact with the contract. Both read and write operations are performed using the ",(0,r.kt)("inlineCode",{parentName:"p"},"generateAndSendRawTransaction")," API call. A ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-dev-quickstart/blob/1e8cc281098923802845cd829ec20c88513c2e1c/files/besu/smart_contracts/privacy/scripts/private_tx.js"},"full example")," can be found in the ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/tutorials/quickstart"},"Developer Quickstart"),"."),(0,r.kt)("h3",{id:"1-perform-a-read-operation-1"},"1. Perform a read operation"),(0,r.kt)("p",null,"As in the public contracts example, to perform a read operation, you need the address that the contract was deployed to and the contract's ABI. You also need your private and public keys and the recipient's public key."),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"https://web3js.readthedocs.io/en/v1.3.4/web3-eth-contract.html"},(0,r.kt)("inlineCode",{parentName:"a"},"web3.eth.Contract"))," object to create a new instance of the smart contract, extract the signature of function's ABI for the ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," method, and then use this value as the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," parameter for the ",(0,r.kt)("inlineCode",{parentName:"p"},"generateAndSendRawTransaction")," transaction."),(0,r.kt)("p",null,"The keys remain the same for the sender and recipient, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"to")," field is the contract's address. Once you make the request, you receive a ",(0,r.kt)("inlineCode",{parentName:"p"},"transactionHash"),", which you can use to get a ",(0,r.kt)("inlineCode",{parentName:"p"},"transactionReceipt")," containing the value stored:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'async function getValueAtAddress(\n  clientUrl,\n  address,\n  contractAbi,\n  fromPrivateKey,\n  fromPublicKey,\n  toPublicKey,\n) {\n  const Web3 = require("web3");\n  const Web3Quorum = require("web3js-quorum");\n  const web3 = new Web3Quorum(new Web3("http://localhost:22000"));\n  // eslint-disable-next-line no-underscore-dangle\n  const functionAbi = contract._jsonInterface.find((e) => {\n    return e.name === "get";\n  });\n  const functionParams = {\n    to: address,\n    data: functionAbi.signature,\n    privateKey: fromPrivateKey,\n    privateFrom: fromPublicKey,\n    privateFor: [toPublicKey],\n  };\n  const transactionHash = await web3quorum.priv.generateAndSendRawTransaction(\n    functionParams,\n  );\n  // console.log(`Transaction hash: ${transactionHash}`);\n  const result = await web3quorum.priv.waitForTransactionReceipt(\n    transactionHash,\n  );\n  console.log(\n    "" + nodeName + " value from deployed contract is: " + result.output,\n  );\n  return result;\n}\n')),(0,r.kt)("h3",{id:"2-perform-a-write-operation-1"},"2. Perform a write operation"),(0,r.kt)("p",null,"Performing a write operation is almost the same process as the read operation, except that you encode the new value to the ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," function's ABI, and then append these arguments to the ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," function's ABI and use this as the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," field:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'async function setValueAtAddress(\n  clientUrl,\n  address,\n  value,\n  contractAbi,\n  fromPrivateKey,\n  fromPublicKey,\n  toPublicKey,\n) {\n  const Web3 = require("web3");\n  const Web3Quorum = require("web3js-quorum");\n  const web3 = new Web3Quorum(new Web3("http://localhost:22000"));\n  // eslint-disable-next-line no-underscore-dangle\n  const functionAbi = contract._jsonInterface.find((e) => {\n    return e.name === "set";\n  });\n  const functionArgs = web3quorum.eth.abi\n    .encodeParameters(functionAbi.inputs, [value])\n    .slice(2);\n  const functionParams = {\n    to: address,\n    data: functionAbi.signature + functionArgs,\n    privateKey: fromPrivateKey,\n    privateFrom: fromPublicKey,\n    privateFor: [toPublicKey],\n  };\n  const transactionHash = await web3quorum.priv.generateAndSendRawTransaction(\n    functionParams,\n  );\n  console.log(`Transaction hash: ${transactionHash}`);\n  const result = await web3quorum.priv.waitForTransactionReceipt(\n    transactionHash,\n  );\n  return result;\n}\n')),(0,r.kt)("h3",{id:"3-verify-an-updated-value-1"},"3. Verify an updated value"),(0,r.kt)("p",null,"To verify that a value has been updated, perform a ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," call after a ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," update call."))}d.isMDXComponent=!0}}]);