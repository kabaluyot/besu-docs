"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[68431],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var o=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=o.createContext({}),l=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=l(t.components);return o.createElement(c.Provider,{value:e},t.children)},h="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),h=l(n),u=a,m=h["".concat(c,".").concat(u)]||h[u]||d[u]||r;return n?o.createElement(m,s(s({ref:e},p),{},{components:n})):o.createElement(m,s({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[h]="string"==typeof t?t:a,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},66700:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const r={sidebar_position:4,title:"Use Ethstats network monitor",description:"Ethstats network monitor",tags:["private networks"]},s="Connect to Ethstats network monitor",i={unversionedId:"private-networks/how-to/deploy/ethstats",id:"version-23.7.3/private-networks/how-to/deploy/ethstats",title:"Use Ethstats network monitor",description:"Ethstats network monitor",source:"@site/versioned_docs/version-23.7.3/private-networks/how-to/deploy/ethstats.md",sourceDirName:"private-networks/how-to/deploy",slug:"/private-networks/how-to/deploy/ethstats",permalink:"/23.7.3/private-networks/how-to/deploy/ethstats",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.3/private-networks/how-to/deploy/ethstats.md",tags:[{label:"private networks",permalink:"/23.7.3/tags/private-networks"}],version:"23.7.3",lastUpdatedAt:1700670990,formattedLastUpdatedAt:"Nov 22, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Use Ethstats network monitor",description:"Ethstats network monitor",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Use Kubernetes",permalink:"/23.7.3/private-networks/how-to/deploy/kubernetes"},next:{title:"Backup and restore",permalink:"/23.7.3/private-networks/how-to/backup"}},c={},l=[{value:"Components",id:"components",level:2},{value:"Statistics",id:"statistics",level:2},{value:"Connect through a client and server",id:"connect-through-a-client-and-server",level:2},{value:"Connect through the command line",id:"connect-through-the-command-line",level:2}],p={toc:l},h="wrapper";function d(t){let{components:e,...r}=t;return(0,a.kt)(h,(0,o.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"connect-to-ethstats-network-monitor"},"Connect to Ethstats network monitor"),(0,a.kt)("p",null,"Connect to ",(0,a.kt)("a",{parentName:"p",href:"https://ethstats.dev"},"Ethstats")," to display real time and historical ",(0,a.kt)("a",{parentName:"p",href:"#statistics"},"statistics")," about the network and nodes. You can connect to the Ethstats dashboard by ",(0,a.kt)("a",{parentName:"p",href:"#connect-through-a-client-and-server"},"connecting to a client and server")," or by ",(0,a.kt)("a",{parentName:"p",href:"#connect-through-the-command-line"},"connecting through the command line"),"."),(0,a.kt)("h2",{id:"components"},"Components"),(0,a.kt)("p",null,"Ethstats consists of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/goerli/ethstats-server"},"server"),", which consumes node data received from the client."),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/goerli/ethstats-client"},"client"),", which extracts data from the node and sends it to the server."),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/goerli/ethstats-client#available-dashboards"},"dashboard"),", which displays statistics.")),(0,a.kt)("h2",{id:"statistics"},"Statistics"),(0,a.kt)("p",null,"Statistics displayed by Ethstats include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Nodes in the network. Metrics for nodes include:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Information about the last received block such as block number, block hash, transaction count, uncle count, block time, and propagation time."),(0,a.kt)("li",{parentName:"ul"},"Connected peers, whether the node is mining, hash rate, latency, and uptime."))),(0,a.kt)("li",{parentName:"ul"},"Charts for block time, block difficulty, block gas limit, block uncles, block transactions, block gas used, block propagation histogram, and top miners."),(0,a.kt)("li",{parentName:"ul"},"IP-based geolocation overview."),(0,a.kt)("li",{parentName:"ul"},"Node logs, which display the data sent by a node."),(0,a.kt)("li",{parentName:"ul"},"Block history, which provides the ability to go back in time and playback the block propagation through the nodes.")),(0,a.kt)("h2",{id:"connect-through-a-client-and-server"},"Connect through a client and server"),(0,a.kt)("p",null,"Refer to the external ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/goerli/ethstats-client"},"Ethstats client")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/goerli/ethstats-server"},"Ethstats server")," documentation for installing those components and connecting to a dashboard."),(0,a.kt)("h2",{id:"connect-through-the-command-line"},"Connect through the command line"),(0,a.kt)("p",null,"You can use command line options to connect a node directly to a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/goerli/ethstats-client#available-dashboards"},"dashboard"),", without using a client."),(0,a.kt)("p",null,"Start a node using the ",(0,a.kt)("a",{parentName:"p",href:"/23.7.3/public-networks/reference/cli/options#ethstats"},(0,a.kt)("inlineCode",{parentName:"a"},"--ethstats"))," option to specify the Ethstats server URL. You can specify a contact email to send to the server using ",(0,a.kt)("a",{parentName:"p",href:"/23.7.3/public-networks/reference/cli/options#ethstats-contact"},(0,a.kt)("inlineCode",{parentName:"a"},"--ethstats-contact")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"besu --ethstats=Dev-Node-1:secret@127.0.0.1:3001 --ethstats-contact=contact@mail.com\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"A server must be specified by ",(0,a.kt)("inlineCode",{parentName:"p"},"--ethstats")," in order to use ",(0,a.kt)("inlineCode",{parentName:"p"},"--ethstats-contact"),".")),(0,a.kt)("p",null,"Open the selected dashboard website. Find your node under the list of nodes to see the statistics for the node and the network."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dashboard",src:n(79037).Z,width:"2636",height:"1874"})))}d.isMDXComponent=!0},79037:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/dashboard-62de99e929247a02f835d87c68166f76.png"}}]);