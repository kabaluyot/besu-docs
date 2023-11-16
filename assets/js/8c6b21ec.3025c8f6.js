"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[83717],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},60938:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={title:"Use Elastic Stack",sidebar_position:3,description:"Using Elastic Stack (ELK) with Hyperledger Besu",tags:["private networks"]},i="Use Elastic Stack",s={unversionedId:"private-networks/how-to/monitor/elastic-stack",id:"version-23.7.3/private-networks/how-to/monitor/elastic-stack",title:"Use Elastic Stack",description:"Using Elastic Stack (ELK) with Hyperledger Besu",source:"@site/versioned_docs/version-23.7.3/private-networks/how-to/monitor/elastic-stack.md",sourceDirName:"private-networks/how-to/monitor",slug:"/private-networks/how-to/monitor/elastic-stack",permalink:"/23.7.3/private-networks/how-to/monitor/elastic-stack",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.3/private-networks/how-to/monitor/elastic-stack.md",tags:[{label:"private networks",permalink:"/23.7.3/tags/private-networks"}],version:"23.7.3",lastUpdatedAt:1700146786,formattedLastUpdatedAt:"Nov 16, 2023",sidebarPosition:3,frontMatter:{title:"Use Elastic Stack",sidebar_position:3,description:"Using Elastic Stack (ELK) with Hyperledger Besu",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Use Grafana Loki",permalink:"/23.7.3/private-networks/how-to/monitor/loki"},next:{title:"Use Quorum Hibernate",permalink:"/23.7.3/private-networks/how-to/monitor/quorum-hibernate"}},l={},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"use-elastic-stack"},"Use Elastic Stack"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.elastic.co/what-is/elk-stack"},"Elastic Stack")," (ELK) is an open-source log management platform that is available when using the ",(0,n.kt)("a",{parentName:"p",href:"/23.7.3/private-networks/tutorials/quickstart"},"Developer Quickstart"),"."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-dev-quickstart/blob/b72a0f64d685c851bf8be399a8e33bbdf0e09982/files/common/filebeat/filebeat.yml"},"Filebeat")," configuration ingests logs and the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-dev-quickstart/blob/b72a0f64d685c851bf8be399a8e33bbdf0e09982/files/common/metricbeat/metricbeat.yml"},"Metricbeat")," configuration collects metrics from the nodes at regular defined intervals and outputs them to Redis for storage. Redis provides a highly available mechanism enabling storage by any of the Elastic Beats and pulled by Logstash as required."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-dev-quickstart/blob/b72a0f64d685c851bf8be399a8e33bbdf0e09982/files/common/logstash/pipeline/20_besu.conf"},"pipeline configuration")," defines the JSON format used for Besu logs and automatically picks up any new log fields."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The pipeline configuration must match the your log format. If using the default log format, you can use the ",(0,n.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html"},"grok plugin")," to extract the log fields.")),(0,n.kt)("p",null,"To see the Besu Quickstart network logs in Kibana:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/23.7.3/private-networks/tutorials/quickstart"},"Start the Developer Quickstart with Besu"),", selecting ELK monitoring.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open the ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:5601/app/kibana#/discover"},(0,n.kt)("inlineCode",{parentName:"a"},"Kibana logs address"))," listed by the sample networks ",(0,n.kt)("inlineCode",{parentName:"p"},"list.sh")," script. The logs display in Kibana."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Kibana",src:r(73685).Z,width:"1513",height:"737"})))))}m.isMDXComponent=!0},73685:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/KibanaQuickstart-6c27f6f292b9d10869daeddd552aeca0.png"}}]);