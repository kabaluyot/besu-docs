"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[33468],{3905:(e,o,t)=>{t.d(o,{Zo:()=>c,kt:()=>b});var n=t(67294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function s(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),p=function(e){var o=n.useContext(d),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},c=function(e){var o=p(e.components);return n.createElement(d.Provider,{value:o},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},f=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=p(t),f=r,b=l["".concat(d,".").concat(f)]||l[f]||u[f]||a;return t?n.createElement(b,i(i({ref:o},c),{},{components:t})):n.createElement(b,i({ref:o},c))}));function b(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var d in o)hasOwnProperty.call(o,d)&&(s[d]=o[d]);s.originalType=e,s[l]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},17068:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=t(87462),r=(t(67294),t(3905));const a={title:"Bootnodes",description:"Configuring bootnodes",sidebar_position:3},i="Configure bootnodes",s={unversionedId:"private-networks/how-to/configure/bootnodes",id:"version-23.4.0/private-networks/how-to/configure/bootnodes",title:"Bootnodes",description:"Configuring bootnodes",source:"@site/versioned_docs/version-23.4.0/private-networks/how-to/configure/bootnodes.md",sourceDirName:"private-networks/how-to/configure",slug:"/private-networks/how-to/configure/bootnodes",permalink:"/23.4.0/private-networks/how-to/configure/bootnodes",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/private-networks/how-to/configure/bootnodes.md",tags:[],version:"23.4.0",lastUpdatedAt:1688668846,formattedLastUpdatedAt:"Jul 6, 2023",sidebarPosition:3,frontMatter:{title:"Bootnodes",description:"Configuring bootnodes",sidebar_position:3},sidebar:"privateDocSidebar",previous:{title:"Free gas network",permalink:"/23.4.0/private-networks/how-to/configure/free-gas"},next:{title:"Validators",permalink:"/23.4.0/private-networks/how-to/configure/validators"}},d={},p=[{value:"Specify a bootnode",id:"specify-a-bootnode",level:2},{value:"Configure bootnodes in a production network",id:"configure-bootnodes-in-a-production-network",level:2},{value:"Add and remove bootnodes",id:"add-and-remove-bootnodes",level:2}],c={toc:p},l="wrapper";function u(e){let{components:o,...t}=e;return(0,r.kt)(l,(0,n.Z)({},c,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configure-bootnodes"},"Configure bootnodes"),(0,r.kt)("p",null,"You can use bootnodes to initially discover peers. Bootnodes are regular nodes used to discover other nodes."),(0,r.kt)("p",null,"In private networks for development or testing purposes, specify at least one bootnode."),(0,r.kt)("p",null,"In production networks, ",(0,r.kt)("a",{parentName:"p",href:"#configure-bootnodes-in-a-production-network"},"configure two or more nodes as bootnodes"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Bootnodes and static nodes are parallel methods for finding peers. Depending on your use case, you can use only bootnodes, only static nodes, or both bootnodes and static nodes."),(0,r.kt)("p",{parentName:"admonition"},"To find peers, configure one or more bootnodes. To configure a specific set of peer connections, use ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/how-to/connect/static-nodes"},"static nodes"),".")),(0,r.kt)("admonition",{title:"Mainnet and public testnets",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For Mainnet and the Sepolia and Goerli testnets, Hyperledger Besu has an internal list of enode URLs and uses this list automatically when you specify the ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#network"},(0,r.kt)("inlineCode",{parentName:"a"},"--network"))," option.")),(0,r.kt)("h2",{id:"specify-a-bootnode"},"Specify a bootnode"),(0,r.kt)("p",null,"To start a node, specify a bootnode ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/concepts/node-keys"},"enode")," for P2P discovery, using the ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#bootnodes"},(0,r.kt)("inlineCode",{parentName:"a"},"--bootnodes"))," option."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu --genesis-file=privateNetworkGenesis.json --data-path=nodeDataPath --bootnodes=enode://c35c3ec90a8a51fd5703594c6303382f3ae6b2ecb99bab2c04b3794f2bc3fc2631dabb0c08af795787a6c004d8f532230ae6e9925cbbefb0b28b79295d615f@127.0.0.1:30303\n")),(0,r.kt)("p",null,"The default host and port advertised to other peers for P2P discovery is ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1:30303"),". To specify a different host or port, use the ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#p2p-host"},(0,r.kt)("inlineCode",{parentName:"a"},"--p2p-host"))," and ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#p2p-port"},(0,r.kt)("inlineCode",{parentName:"a"},"--p2p-port"))," options."),(0,r.kt)("p",null,"By default, peer discovery listens on all available network interfaces. If the device Besu is running on must bind to a specific network interface, specify the interface using the ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#p2p-interface"},(0,r.kt)("inlineCode",{parentName:"a"},"--p2p-interface"))," option."),(0,r.kt)("h2",{id:"configure-bootnodes-in-a-production-network"},"Configure bootnodes in a production network"),(0,r.kt)("p",null,"A network must have at least one operating bootnode. To allow for continuity in the event of failure, configure two or more bootnodes in a production network."),(0,r.kt)("p",null,"We don't recommend putting bootnodes behind a load balancer because the ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/concepts/node-keys#enode-url"},"enode")," relates to the node public key, IP address, and discovery ports. Any changes to a bootnode enode prevents other nodes from being able to establish a connection with the bootnode. This is why we recommend putting more bootnodes on the network itself."),(0,r.kt)("p",null,"To ensure a bootnode enode doesn't change when recovering from a complete bootnode failure:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/concepts/node-keys"},"node key pair")," (that is, the private and public key) before starting the bootnode.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When creating bootnodes in the cloud (for example, AWS and Azure), attempt to assign a static IP address to them. If your network is:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Publicly accessible, assign an elastic IP."),(0,r.kt)("li",{parentName:"ul"},"Internal only, specify a private IP address when you create the instance and record this IP address.")))),(0,r.kt)("p",null,"We recommend storing the bootnode configuration under source control."),(0,r.kt)("p",null,"To allow for failure, specify all bootnodes on the command line (even to the bootnodes themselves)."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Having each bootnode list the other bootnodes increases the speed of discovery. Nodes ignore their own enode in the bootnodes list so it isn't required to specify different bootnode lists to the bootnodes themselves.")),(0,r.kt)("h2",{id:"add-and-remove-bootnodes"},"Add and remove bootnodes"),(0,r.kt)("p",null,"Adding new bootnodes is a similar process to creating bootnodes. After creating the bootnodes and adding them to the network, update the ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#bootnodes"},(0,r.kt)("inlineCode",{parentName:"a"},"--bootnodes"))," command line option for each node to include the new bootnodes."),(0,r.kt)("p",null,"When adding bootnodes, you don't need to restart running nodes. By updating the ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#bootnodes"},(0,r.kt)("inlineCode",{parentName:"a"},"--bootnodes"))," option, the next time you restart the nodes (for example, when ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/how-to/upgrade-node"},"upgrading"),"), the nodes connect to the new bootnodes."))}u.isMDXComponent=!0}}]);