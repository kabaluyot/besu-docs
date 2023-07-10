"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[41384],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),b=o,h=p["".concat(l,".").concat(b)]||p[b]||m[b]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},96966:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={description:"Troubleshoot poor performance and resource constraints.",sidebar_label:"Troubleshoot performance",sidebar_position:3,tags:["public networks"]},i="Troubleshoot poor performance and resource constraints",s={unversionedId:"public-networks/how-to/troubleshoot/performance",id:"version-23.4.1/public-networks/how-to/troubleshoot/performance",title:"Troubleshoot poor performance and resource constraints",description:"Troubleshoot poor performance and resource constraints.",source:"@site/versioned_docs/version-23.4.1/public-networks/how-to/troubleshoot/performance.md",sourceDirName:"public-networks/how-to/troubleshoot",slug:"/public-networks/how-to/troubleshoot/performance",permalink:"/stable/public-networks/how-to/troubleshoot/performance",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/public-networks/how-to/troubleshoot/performance.md",tags:[{label:"public networks",permalink:"/stable/tags/public-networks"}],version:"23.4.1",lastUpdatedAt:1689007540,formattedLastUpdatedAt:"Jul 10, 2023",sidebarPosition:3,frontMatter:{description:"Troubleshoot poor performance and resource constraints.",sidebar_label:"Troubleshoot performance",sidebar_position:3,tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Trace transactions",permalink:"/stable/public-networks/how-to/troubleshoot/trace-transactions"},next:{title:"Troubleshoot peering",permalink:"/stable/public-networks/how-to/troubleshoot/peering"}},l={},c=[],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"troubleshoot-poor-performance-and-resource-constraints"},"Troubleshoot poor performance and resource constraints"),(0,o.kt)("p",null,"Your hardware, machine environment, and node configuration can affect your node's ability to serve\nrequests and perform ",(0,o.kt)("a",{parentName:"p",href:"/stable/public-networks/concepts/proof-of-stake/"},"validator duties"),", including\n",(0,o.kt)("a",{parentName:"p",href:"/stable/public-networks/concepts/proof-of-stake/attestations"},"attestation performance"),"."),(0,o.kt)("p",null,"If you notice high resource usage when ",(0,o.kt)("a",{parentName:"p",href:"/stable/public-networks/how-to/monitor/"},"monitoring your node"),", you can\ntry the following suggestions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Disable swapping.\nBesu is an I/O intensive application, especially during sync, enabling swapping hurts Besu's performance.\nYou can disable swap at the OS level.\n",(0,o.kt)("a",{parentName:"li",href:"https://www.tecmint.com/disable-swap-partition/"},"This article")," provides information on how to\ndisable swap (and caveats)."),(0,o.kt)("li",{parentName:"ul"},"Use a high performance SSD disk with NVMe, since Besu's performance bottleneck is often slow disk I/O."),(0,o.kt)("li",{parentName:"ul"},"Configure memory and RAM:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If you have RAM constraints, use ",(0,o.kt)("a",{parentName:"li",href:"/stable/public-networks/get-started/system-requirements"},"OpenJ9")," if you're\nrunning on ",(0,o.kt)("inlineCode",{parentName:"li"},"x86_64")," Linux architecture to reduce memory usage."),(0,o.kt)("li",{parentName:"ul"},"Review and change your ",(0,o.kt)("a",{parentName:"li",href:"/stable/public-networks/how-to/configure-jvm/manage-memory"},"Java heap size")," if necessary.\n5GB is an appropriate limit.\nHigher values may improve sync time, but can be reduced after completing sync."),(0,o.kt)("li",{parentName:"ul"},"Ensure Besu is using ",(0,o.kt)("a",{parentName:"li",href:"/stable/public-networks/get-started/install/binary-distribution"},"jemalloc"),"."),(0,o.kt)("li",{parentName:"ul"},"If you have 32GB RAM or more, set the ",(0,o.kt)("inlineCode",{parentName:"li"},"Xplugin-rocksdb-high-spec-enabled")," configuration option\nto ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),".\nDon't use this on RAM machines with 16GB RAM or less if you're running a consensus client on the\nsame hardware."))),(0,o.kt)("li",{parentName:"ul"},"If you're running on ARM64, make sure the glibc version is greater than 2.29.\nIf not, Besu uses a Java implementation instead of the native one for some precompiled contracts,\nwhich results in lower performance.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"On Ubuntu, run ",(0,o.kt)("inlineCode",{parentName:"li"},"ldd --version"),".\nSee ",(0,o.kt)("a",{parentName:"li",href:"https://dev.to/0xbf/how-to-get-glibc-version-c-lang-26he"},"the methods for other environments"),"."))),(0,o.kt)("li",{parentName:"ul"},"Pay attention to what processes are running on the same machine/VM as Besu.\nJava applications, with default settings, are designed to run alone on the machine.\nYou can run your consensus client on the same machine, but this adds overhead on Besu, and vice\nversa (on CPU cache misses, CPU scheduler latency, IO, etc.).")),(0,o.kt)("p",null,"You should continue to monitor your node after following these suggestions."))}m.isMDXComponent=!0}}]);