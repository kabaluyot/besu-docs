"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[68454],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=c(r),k=o,m=l["".concat(p,".").concat(k)]||l[k]||d[k]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=k;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[l]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},28175:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={title:"Public key infrastructure",sidebar_position:5,description:"Public key infrastructure",tags:["private networks"]},a="Public key infrastructure",s={unversionedId:"private-networks/concepts/pki",id:"version-23.4.1/private-networks/concepts/pki",title:"Public key infrastructure",description:"Public key infrastructure",source:"@site/versioned_docs/version-23.4.1/private-networks/concepts/pki.md",sourceDirName:"private-networks/concepts",slug:"/private-networks/concepts/pki",permalink:"/23.4.1/private-networks/concepts/pki",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/concepts/pki.md",tags:[{label:"private networks",permalink:"/23.4.1/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1693496692,formattedLastUpdatedAt:"Aug 31, 2023",sidebarPosition:5,frontMatter:{title:"Public key infrastructure",sidebar_position:5,description:"Public key infrastructure",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Permissioning plugin",permalink:"/23.4.1/private-networks/concepts/permissioning/plugin"},next:{title:"Plugins",permalink:"/23.4.1/private-networks/concepts/plugins"}},p={},c=[{value:"Node permissioning",id:"node-permissioning",level:2},{value:"Block proposal permissioning",id:"block-proposal-permissioning",level:2}],u={toc:c};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"public-key-infrastructure"},"Public key infrastructure"),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Public key infrastructure (PKI) support is an early access feature, and functionality and options may be updated between releases.")),(0,o.kt)("p",null,"Hyperledger Besu's public key infrastructure allows you to use certificates issued by a trusted authority to manage node and account identities in the following ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Node permissioning - Only authorized nodes can connect to other nodes in the network using TLS for the P2P communication."),(0,o.kt)("li",{parentName:"ul"},"Block proposal permissioning - Only blocks proposed by authorized validators are accepted.")),(0,o.kt)("p",null,"Supported keystore and truststore formats used to store the certificates include PKCS11, PKCS12, and JKS."),(0,o.kt)("h2",{id:"node-permissioning"},"Node permissioning"),(0,o.kt)("p",null,"Allow TLS communication between nodes by using certificates issued by a trusted authority to connect to other authorized nodes in the network."),(0,o.kt)("p",null,"When receiving connection requests, the incoming connection must be from another authorized node. Similarly, when connecting to a node the initiator ensures that the remote node is authorized to participate in the network."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/23.4.1/private-networks/how-to/configure/tls/p2p"},"Configure TLS for the P2P communication using the Besu command line options"),"."),(0,o.kt)("h2",{id:"block-proposal-permissioning"},"Block proposal permissioning"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Only private networks using the ",(0,o.kt)("a",{parentName:"p",href:"/23.4.1/private-networks/how-to/configure/consensus/qbft"},"QBFT consensus protocol")," support block proposal permissioning.")),(0,o.kt)("p",null,"Use certificates issued by a trusted authority to ensure only authorized validator nodes can propose new blocks in the network. The block hash is signed by the validator private certificate and included in the header of the proposed block as a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cryptographic_Message_Syntax"},"CMS (Cryptographic Message Syntax)"),". This is used by other validators to verify that the proposer is authorized to create a block in the network."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/23.4.1/private-networks/how-to/configure/block-proposal-permissioning"},"Configure block proposal permissioning using the Besu command line options"),"."))}l.isMDXComponent=!0}}]);