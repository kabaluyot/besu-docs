"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[97540],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},f="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,v=f["".concat(u,".").concat(d)]||f[d]||c[d]||l;return r?n.createElement(v,a(a({ref:t},s),{},{components:r})):n.createElement(v,a({ref:t},s))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[f]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},47190:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const l={title:"Use Truffle",sidebar_position:1,description:"Using Hyperledger Besu with Truffle",tags:["private networks"]},a="Use Truffle",i={unversionedId:"public-networks/how-to/develop/truffle",id:"version-23.4.0/public-networks/how-to/develop/truffle",title:"Use Truffle",description:"Using Hyperledger Besu with Truffle",source:"@site/versioned_docs/version-23.4.0/public-networks/how-to/develop/truffle.md",sourceDirName:"public-networks/how-to/develop",slug:"/public-networks/how-to/develop/truffle",permalink:"/23.4.0/public-networks/how-to/develop/truffle",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/public-networks/how-to/develop/truffle.md",tags:[{label:"private networks",permalink:"/23.4.0/tags/private-networks"}],version:"23.4.0",lastUpdatedAt:1700670990,formattedLastUpdatedAt:"Nov 22, 2023",sidebarPosition:1,frontMatter:{title:"Use Truffle",sidebar_position:1,description:"Using Hyperledger Besu with Truffle",tags:["private networks"]},sidebar:"publicDocSidebar",previous:{title:"Use Java Flight Recorder",permalink:"/23.4.0/public-networks/how-to/configure-jvm/java-flight-recorder"},next:{title:"Use client libraries",permalink:"/23.4.0/public-networks/how-to/develop/client-libraries"}},u={},p=[{value:"Install a Truffle wallet",id:"install-a-truffle-wallet",level:2},{value:"Update the Truffle configuration file",id:"update-the-truffle-configuration-file",level:3},{value:"Start a Besu node",id:"start-a-besu-node",level:3},{value:"Deploy a contract",id:"deploy-a-contract",level:3}],s={toc:p},f="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-truffle"},"Use Truffle"),(0,o.kt)("p",null,"Developing for Hyperledger Besu using Truffle is the same as developing for public Ethereum networks using Truffle. Truffle supports Besu with the only difference being Besu does not support private key management. To use Besu with Truffle, you must configure a Truffle wallet."),(0,o.kt)("h2",{id:"install-a-truffle-wallet"},"Install a Truffle wallet"),(0,o.kt)("p",null,"To install a Truffle wallet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @truffle/hdwallet-provider\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"With Truffle 5, you must use a Web3 1.0 enabled wallet or the Truffle tasks hang.")),(0,o.kt)("h3",{id:"update-the-truffle-configuration-file"},"Update the Truffle configuration file"),(0,o.kt)("p",null,"To add the wallet provider, update the ",(0,o.kt)("inlineCode",{parentName:"p"},"truffle-config.js")," file in the project directory. Replace:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<JSON-RPC-http-endpoint>")," with the JSON-RPC endpoint (IP address and port) of a Besu node."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<account-private-key>")," with the private key of an Ethereum account containing Ether.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const PrivateKeyProvider = require("@truffle/hdwallet-provider");\nconst privateKey = "<account-private-key>";\nconst privateKeyProvider = new PrivateKeyProvider(\n  privateKey,\n  "<JSON-RPC-http-endpoint>",\n);\n\nmodule.exports = {\n  // See <http://truffleframework.com/docs/advanced/configuration>\n  // for more about customizing your Truffle configuration!\n  networks: {\n    besuWallet: {\n      provider: privateKeyProvider,\n      network_id: "*",\n    },\n  },\n};\n')),(0,o.kt)("h3",{id:"start-a-besu-node"},"Start a Besu node"),(0,o.kt)("p",null,"Start a Besu node with JSON-RPC enabled on the endpoint specified in the Truffle configuration file."),(0,o.kt)("h3",{id:"deploy-a-contract"},"Deploy a contract"),(0,o.kt)("p",null,"To deploy a contract onto the Besu network:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"truffle migrate --network besuWallet\n")))}c.isMDXComponent=!0}}]);