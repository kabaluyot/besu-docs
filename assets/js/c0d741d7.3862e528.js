"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[2188],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76140:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={title:"Understand metrics",sidebar_position:2,description:"Understand Besu performance metrics",tags:["public networks"]},i="Understand metrics",s={unversionedId:"public-networks/how-to/monitor/understand-metrics",id:"version-23.10.2/public-networks/how-to/monitor/understand-metrics",title:"Understand metrics",description:"Understand Besu performance metrics",source:"@site/versioned_docs/version-23.10.2/public-networks/how-to/monitor/understand-metrics.md",sourceDirName:"public-networks/how-to/monitor",slug:"/public-networks/how-to/monitor/understand-metrics",permalink:"/public-networks/how-to/monitor/understand-metrics",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.2/public-networks/how-to/monitor/understand-metrics.md",tags:[{label:"public networks",permalink:"/tags/public-networks"}],version:"23.10.2",lastUpdatedAt:1700670990,formattedLastUpdatedAt:"Nov 22, 2023",sidebarPosition:2,frontMatter:{title:"Understand metrics",sidebar_position:2,description:"Understand Besu performance metrics",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Use metrics",permalink:"/public-networks/how-to/monitor/metrics"},next:{title:"Configure logging",permalink:"/public-networks/how-to/monitor/logging"}},l={},c=[{value:"CPU usage",id:"cpu-usage",level:2},{value:"1. Blocks import and world state download",id:"1-blocks-import-and-world-state-download",level:3},{value:"2. World state healing",id:"2-world-state-healing",level:3},{value:"3. Blocks import",id:"3-blocks-import",level:3},{value:"4. Blocks full import",id:"4-blocks-full-import",level:3},{value:"5. Blocks production and propagation",id:"5-blocks-production-and-propagation",level:3},{value:"Block time",id:"block-time",level:2},{value:"1. Block import time",id:"1-block-import-time",level:3},{value:"2. Block full import time",id:"2-block-full-import-time",level:3},{value:"3. Block network time",id:"3-block-network-time",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"understand-metrics"},"Understand metrics"),(0,r.kt)("p",null,"When running Besu on Ethereum Mainnet using ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/get-started/connect/sync-node#snap-synchronization"},"snap sync"),", you might notice graphical patterns that stand out in different metrics charts. These patterns are related to the ",(0,r.kt)("a",{parentName:"p",href:"#cpu-usage"},"CPU usage")," and ",(0,r.kt)("a",{parentName:"p",href:"#block-time"},"block time")," of the Besu sync process."),(0,r.kt)("h2",{id:"cpu-usage"},"CPU usage"),(0,r.kt)("p",null,"The following screenshot from ",(0,r.kt)("a",{parentName:"p",href:"/private-networks/tutorials/quickstart#monitor-nodes-with-prometheus-and-grafana"},"monitoring Besu with Prometheus and Grafana")," shows patterns related to CPU usage."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CPU Grafana Besu dashboard patterns screenshot",src:n(79599).Z,width:"3278",height:"1542"})),(0,r.kt)("p",null,'The CPU pattern is a "staircase" pattern, where each step represents one of the Besu running stages.'),(0,r.kt)("h3",{id:"1-blocks-import-and-world-state-download"},"1. Blocks import and world state download"),(0,r.kt)("p",null,"Step 1 highlights blocks import and world state download, two tasks executed in parallel in Besu. Besu manages these two tasks with two different pipelines."),(0,r.kt)("p",null,"This step is CPU-bound.",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," The two pipeline stages run on multiple threads."),(0,r.kt)("p",null,"As displayed in the following screenshot (for a VM with 8 CPUs) the CPU load average is about 7.5 and sometimes exceeds 10 (a 100% load for the 8 CPUs is 8). This means there's more work to be done than what the CPUs can handle."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"System load metrics screenshot",src:n(36472).Z,width:"3278",height:"1542"})),(0,r.kt)("h3",{id:"2-world-state-healing"},"2. World state healing"),(0,r.kt)("p",null,"Step 2, world state healing, starts just after the world state download in step 1 is complete. The peak in system CPU is related to the high rate of input and output (IO) required during this step. IO usage is around 61% during healing, and it's only 39% during the remaining sync."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IO utilization metrics screenshot",src:n(3325).Z,width:"3278",height:"1542"})),(0,r.kt)("h3",{id:"3-blocks-import"},"3. Blocks import"),(0,r.kt)("p",null,"After steps 1 and 2, world state is downloaded and healed, and block import continues."),(0,r.kt)("p",null,"The visible drop in CPU shows that Besu finished the world state nodes download."),(0,r.kt)("p",null,"The block import step is long because Besu can't parallelize block import -- it must validate each parent block before importing a child."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The Besu team is currently working on other algorithm and implementations to make this block import faster.")),(0,r.kt)("h3",{id:"4-blocks-full-import"},"4. Blocks full import"),(0,r.kt)("p",null,"In step 4, Besu executes all transactions of each block. This is when Besu updates the world state after the healing step."),(0,r.kt)("p",null,"The quantity of imported blocks in this step depends on the speed of the sync. This number indicates the cumulated blocks quantity behind head since the last healing step."),(0,r.kt)("p",null,"This step consumes less CPU than the previous steps because the sequential part -- executing transactions on the EVM -- must be single-threaded, reducing the concurrent work at the CPU level."),(0,r.kt)("h3",{id:"5-blocks-production-and-propagation"},"5. Blocks production and propagation"),(0,r.kt)("p",null,"Once Besu is completely synced, it propagates blocks and executes the transactions inside each block. Step 5, block production and propagation, shows a reduction in CPU consumption due to the idle time while waiting for the new block and the sequential nature of executing transactions on the EVM."),(0,r.kt)("h2",{id:"block-time"},"Block time"),(0,r.kt)("p",null,"Block time measures the duration of getting new blocks in Besu. Block time is closely related to ",(0,r.kt)("a",{parentName:"p",href:"#cpu-usage"},"CPU usage"),"."),(0,r.kt)("p",null,"The following screenshot shows patterns related to block time as available in the ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards/16455-besu-full/"},"Besu Grafana full dashboard"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Block time Grafana Besu dashboard patterns screenshot",src:n(61061).Z,width:"3278",height:"1542"})),(0,r.kt)("p",null,'The block time pattern is also a "staircase" pattern.'),(0,r.kt)("h3",{id:"1-block-import-time"},"1. Block import time"),(0,r.kt)("p",null,"Step 1, block import time, is the duration of importing a block."),(0,r.kt)("p",null,"Import includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Data retrieval over the network."),(0,r.kt)("li",{parentName:"ul"},"Headers, body, and receipt validation."),(0,r.kt)("li",{parentName:"ul"},"Persisting the block in the database.")),(0,r.kt)("p",null,"Block import takes between a few and tens of milliseconds."),(0,r.kt)("h3",{id:"2-block-full-import-time"},"2. Block full import time"),(0,r.kt)("p",null,"Step 2, block full import time, is the duration of importing a block (step 1) and executing all its transactions."),(0,r.kt)("p",null,"Block full import takes between 1 and 2 seconds per block, depending on the number and complexity of the transactions."),(0,r.kt)("h3",{id:"3-block-network-time"},"3. Block network time"),(0,r.kt)("p",null,"Step 3, block network time, is the duration of propagating a block over the network and executing all its transactions."),(0,r.kt)("p",null,"Block network takes between 13 and 16 seconds."),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"A CPU-bound task means that the time required to execute the task is determined only by the CPU speed.",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0},79599:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/besu-cpu-pattern-during-sync-9dc0a3001d32b5c874786314294831a1.png"},61061:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/block-time-36affada807e42dd327dd24806dbdc08.png"},3325:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/io-utilization-dfd3d125732a0f304100b4f3c9e4ae76.png"},36472:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/system-load-f37361d1a1cd21c6384bfde9cf10ce2f.png"}}]);