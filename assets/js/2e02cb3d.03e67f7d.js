"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[47020],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=d(n),u=o,f=c["".concat(s,".").concat(u)]||c[u]||k[u]||i;return n?a.createElement(f,r(r({ref:t},l),{},{components:n})):a.createElement(f,r({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:o,r[1]=p;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},40979:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const i={title:"Node keys",sidebar_position:8,description:"Learn about node public and private keys, and the node address.",tags:["public networks","private networks"]},r="Node keys and node address",p={unversionedId:"public-networks/concepts/node-keys",id:"version-23.10.0/public-networks/concepts/node-keys",title:"Node keys",description:"Learn about node public and private keys, and the node address.",source:"@site/versioned_docs/version-23.10.0/public-networks/concepts/node-keys.md",sourceDirName:"public-networks/concepts",slug:"/public-networks/concepts/node-keys",permalink:"/23.10.0/public-networks/concepts/node-keys",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.0/public-networks/concepts/node-keys.md",tags:[{label:"public networks",permalink:"/23.10.0/tags/public-networks"},{label:"private networks",permalink:"/23.10.0/tags/private-networks"}],version:"23.10.0",lastUpdatedAt:1701453670,formattedLastUpdatedAt:"Dec 1, 2023",sidebarPosition:8,frontMatter:{title:"Node keys",sidebar_position:8,description:"Learn about node public and private keys, and the node address.",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Genesis file",permalink:"/23.10.0/public-networks/concepts/genesis-file"},next:{title:"Tutorials",permalink:"/23.10.0/public-networks/tutorials"}},s={},d=[{value:"Node private key",id:"node-private-key",level:2},{value:"Node public key",id:"node-public-key",level:2},{value:"Node address",id:"node-address",level:2},{value:"Specify a custom node private key file",id:"specify-a-custom-node-private-key-file",level:2},{value:"Enode URL",id:"enode-url",level:2},{value:"Domain name support",id:"domain-name-support",level:3}],l={toc:d},c="wrapper";function k(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"node-keys-and-node-address"},"Node keys and node address"),(0,o.kt)("p",null,"Each node has a private and public key pair, and a node address. Hyperledger Besu uses the private and public key pair to sign and verify transactions, and the node address as an identifier for the node."),(0,o.kt)("h2",{id:"node-private-key"},"Node private key"),(0,o.kt)("p",null,"When starting Hyperledger Besu, if the ",(0,o.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/cli/options#node-private-key-file"},(0,o.kt)("inlineCode",{parentName:"a"},"--node-private-key-file"))," option is not specified and a ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," file does not exist in the data directory for the node, Besu generates a node private key and writes it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," file."),(0,o.kt)("p",null,"If a ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," file does exist in the data directory when starting Besu, the node starts using the private key in the ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," file."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The private key is not encrypted.")),(0,o.kt)("h2",{id:"node-public-key"},"Node public key"),(0,o.kt)("p",null,"The node public key displays in the log after starting Besu. Also referred to as the node ID, the node public key forms part of the enode URL of a node."),(0,o.kt)("p",null,"You can export the node public key, either to standard output or to a specified file, using the ",(0,o.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/cli/subcommands#public-key"},(0,o.kt)("inlineCode",{parentName:"a"},"public-key export"))," subcommand."),(0,o.kt)("h2",{id:"node-address"},"Node address"),(0,o.kt)("p",null,"Besu generates the node address by creating a hash of the node public key and using the last 20 bytes of the hash as the node address. It is also displayed in the logs after starting Besu."),(0,o.kt)("p",null,"You can export the node address, either to standard output or to a specified file, using the ",(0,o.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/cli/subcommands#public-key"},(0,o.kt)("inlineCode",{parentName:"a"},"public-key export-address"))," subcommand."),(0,o.kt)("h2",{id:"specify-a-custom-node-private-key-file"},"Specify a custom node private key file"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/cli/options#node-private-key-file"},(0,o.kt)("inlineCode",{parentName:"a"},"--node-private-key-file"))," option to specify a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," file in any location."),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," file exists, the node starts with the private key in the ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," file. If the ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," file does not exist, Besu generates a node private key and writes it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," file."),(0,o.kt)("p",null,"For example, the following command either reads the node private key from ",(0,o.kt)("inlineCode",{parentName:"p"},"privatekeyfile")," or writes a generated private key to ",(0,o.kt)("inlineCode",{parentName:"p"},"privatekeyfile"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'besu --node-private-key-file="/Users/username/privatekeyfile"\n')),(0,o.kt)("h2",{id:"enode-url"},"Enode URL"),(0,o.kt)("p",null,"The enode URL identifies a node. For example, the ",(0,o.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/cli/options#bootnodes"},(0,o.kt)("inlineCode",{parentName:"a"},"--bootnodes"))," option and the ",(0,o.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/api/#perm_addnodestoallowlist"},(0,o.kt)("inlineCode",{parentName:"a"},"perm_addNodesToAllowlist"))," method specify nodes by enode URL."),(0,o.kt)("p",null,"The enode URL format is ",(0,o.kt)("inlineCode",{parentName:"p"},"enode://<id>@<host:port>[?discport=<port>]")," where:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"<id>")," is the node public key, excluding the initial 0x.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"<host:port>")," is the host and TCP port the bootnode is listening on for P2P discovery. Specify the host and TCP port using the ",(0,o.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/cli/options#p2p-host"},(0,o.kt)("inlineCode",{parentName:"a"},"--p2p-host"))," and ",(0,o.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/cli/options#p2p-port"},(0,o.kt)("inlineCode",{parentName:"a"},"--p2p-port"))," options. The default host is ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," and the default port is ",(0,o.kt)("inlineCode",{parentName:"p"},"30303"),"."),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Standard Ethereum enode URLs allow hostnames as IP addresses only, however Besu provides ",(0,o.kt)("a",{parentName:"p",href:"#domain-name-support"},"domain name support")," in private permissioned networks."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If the TCP listening and UDP discovery ports differ, the UDP port is specified as query parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"discport"),"."))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If the node public key is ",(0,o.kt)("inlineCode",{parentName:"p"},"0xc35c3ec90a8a51fd5703594c6303382f3ae6b2ecb9589bab2c04b3794f2bc3fc2631dabb0c08af795787a6c004d8f532230ae6e9925cbbefb0b28b79295d615f"),", the host is ",(0,o.kt)("inlineCode",{parentName:"p"},"10.3.58.6"),", the TCP listening port is ",(0,o.kt)("inlineCode",{parentName:"p"},"30303"),", and the UDP discovery port is ",(0,o.kt)("inlineCode",{parentName:"p"},"30301"),", then the enode URL is ",(0,o.kt)("inlineCode",{parentName:"p"},"enode://c35c3ec90a8a51fd5703594c6303382f3ae6b2ecb9589bab2c04b3794f2bc3fc2631dabb0c08af795787a6c004d8f532230ae6e9925cbbefb0b28b79295d615f@10.3.58.6:30303?discport=30301")),(0,o.kt)("p",{parentName:"admonition"},"If the ",(0,o.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/cli/options#p2p-host"},(0,o.kt)("inlineCode",{parentName:"a"},"--p2p-host"))," or ",(0,o.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/cli/options#p2p-port"},(0,o.kt)("inlineCode",{parentName:"a"},"--p2p-port"))," options are not specified and the node public key is ",(0,o.kt)("inlineCode",{parentName:"p"},"0xc35c3ec90a8a51fd5703594c6303382f3ae6b2ecb9589bab2c04b3794f2bc3fc2631dabb0c08af795787a6c004d8f532230ae6e9925cbbefb0b28b79295d615f"),", then the enode URL is ",(0,o.kt)("inlineCode",{parentName:"p"},"enode://c35c3ec90a8a51fd5703594c6303382f3ae6b2ecb9589bab2c04b3794f2bc3fc2631dabb0c08af795787a6c004d8f532230ae6e9925cbbefb0b28b79295d615f@127.0.0.1:30303"))),(0,o.kt)("p",null,"The enode URL displays when starting a Besu node. Use the ",(0,o.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/api/#net_enode"},(0,o.kt)("inlineCode",{parentName:"a"},"net_enode"))," JSON-RPC API method to get the enode URL of the node."),(0,o.kt)("p",null,"The enode advertised to other nodes during discovery is the external IP address and port, as defined by ",(0,o.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/how-to/connect/specify-nat"},(0,o.kt)("inlineCode",{parentName:"a"},"--nat-method")),"."),(0,o.kt)("h3",{id:"domain-name-support"},"Domain name support"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Enode URL domain name support is an early access feature that you can use in private ",(0,o.kt)("a",{parentName:"p",href:"/23.10.0/private-networks/concepts/permissioning/"},"permissioned networks")," only.")),(0,o.kt)("p",null,"To use domain names in enode URLs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Configure DNS reverse lookup."),(0,o.kt)("li",{parentName:"ul"},"Enable DNS support using the early access option ",(0,o.kt)("inlineCode",{parentName:"li"},"--Xdns-enabled"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Example enode URL using a domain name"',title:'"Example',enode:!0,URL:!0,using:!0,a:!0,domain:!0,'name"':!0},"enode://c35c3ec90a8a51fd5703594c6303382f3ae6b2ecb9589bab2c04b3794f2bc3fc2631dabb0c08af795787a6c004d8f532230ae6e9925cbbefb0b28b79295d615f@mydomain.dev.example.net:30301\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If deploying Besu using Kubernetes in private permissioned networks, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--Xdns-enabled")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--Xdns-update-enabled")," options to ensure that Besu can connect to a container after restarting even if the IP address of the container changes."),(0,o.kt)("p",{parentName:"admonition"},"Use the ",(0,o.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/cli/options#xhelp"},(0,o.kt)("inlineCode",{parentName:"a"},"--Xhelp"))," command line option to view early access options and their descriptions.")),(0,o.kt)("p",null,"If nodes are not connecting as expected, set the ",(0,o.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/api/#admin_changeloglevel"},"log level to TRACE")," to help troubleshoot the issue."))}k.isMDXComponent=!0}}]);