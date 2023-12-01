"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[63817],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),d=n,b=c["".concat(i,".").concat(d)]||c[d]||h[d]||o;return a?r.createElement(b,s(s({ref:t},p),{},{components:a})):r.createElement(b,s({ref:t},p))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:n,s[1]=l;for(var u=2;u<o;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(67294),n=a(86010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,s),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(87462),n=a(67294),o=a(86010),s=a(12466),l=a(16550),i=a(91980),u=a(67392),p=a(50012);function c(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=h(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,u]=b({queryString:a,groupId:r}),[c,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,p.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),f=(()=>{const e=i??c;return d({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,o]),tabValues:o}}var f=a(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:l,selectValue:i,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),h=e=>{const t=e.currentTarget,a=p.indexOf(t),r=u[a].value;r!==l&&(c(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:h},s,{className:(0,o.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":l===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=m(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},n.createElement(k,(0,r.Z)({},e,t)),n.createElement(v,(0,r.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},62797:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var r=a(87462),n=(a(67294),a(3905)),o=a(74866),s=a(85162);const l={title:"Use GraphQL over HTTP",sidebar_position:3,description:"How to access the Hyperledger Besu API using GraphQL",tags:["private networks"]},i="Use GraphQL over HTTP",u={unversionedId:"public-networks/how-to/use-besu-api/graphql",id:"version-23.4.0/public-networks/how-to/use-besu-api/graphql",title:"Use GraphQL over HTTP",description:"How to access the Hyperledger Besu API using GraphQL",source:"@site/versioned_docs/version-23.4.0/public-networks/how-to/use-besu-api/graphql.md",sourceDirName:"public-networks/how-to/use-besu-api",slug:"/public-networks/how-to/use-besu-api/graphql",permalink:"/23.4.0/public-networks/how-to/use-besu-api/graphql",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/public-networks/how-to/use-besu-api/graphql.md",tags:[{label:"private networks",permalink:"/23.4.0/tags/private-networks"}],version:"23.4.0",lastUpdatedAt:1701453670,formattedLastUpdatedAt:"Dec 1, 2023",sidebarPosition:3,frontMatter:{title:"Use GraphQL over HTTP",sidebar_position:3,description:"How to access the Hyperledger Besu API using GraphQL",tags:["private networks"]},sidebar:"publicDocSidebar",previous:{title:"Use RPC Pub/Sub over WS",permalink:"/23.4.0/public-networks/how-to/use-besu-api/rpc-pubsub"},next:{title:"Authenticate over JSON-RPC requests",permalink:"/23.4.0/public-networks/how-to/use-besu-api/authenticate"}},p={},c=[{value:"GraphQL requests with cURL",id:"graphql-requests-with-curl",level:2},{value:"GraphQL requests with GraphiQL app",id:"graphql-requests-with-graphiql-app",level:2},{value:"Pending",id:"pending",level:2}],h={toc:c},d="wrapper";function b(e){let{components:t,...l}=e;return(0,n.kt)(d,(0,r.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"use-graphql-over-http"},"Use GraphQL over HTTP"),(0,n.kt)("p",null,"GraphQL can reduce the overhead needed for common queries. For example, instead of querying each receipt in a block, GraphQL can get the same result with a single query for the entire block."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/besu/blob/750580dcca349d22d024cc14a8171b2fa74b505a/ethereum/api/src/main/resources/schema.graphqls"},"Besu GraphQL schema")," describes the GraphQL implementation for Ethereum. Enable the GraphQL service using ",(0,n.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/how-to/use-besu-api/#enable-api-access"},"command line options"),"."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"GraphQL is not supported over WebSocket.")),(0,n.kt)("p",null,"Access the GraphQL endpoint at ",(0,n.kt)("inlineCode",{parentName:"p"},"http://<HOST>:<PORT>/graphql"),". Configure ",(0,n.kt)("inlineCode",{parentName:"p"},"<HOST>")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"<PORT>")," using ",(0,n.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#graphql-http-host"},(0,n.kt)("inlineCode",{parentName:"a"},"graphql-http-host"))," and ",(0,n.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#graphql-http-port"},(0,n.kt)("inlineCode",{parentName:"a"},"graphql-http-port")),". The default endpoint is ",(0,n.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8547/graphql"),"."),(0,n.kt)("h2",{id:"graphql-requests-with-curl"},"GraphQL requests with cURL"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/api/"},"Hyperledger Besu JSON-RPC API methods")," with an equivalent ",(0,n.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/how-to/use-besu-api/graphql"},"GraphQL")," query include a GraphQL request and result in the method example."),(0,n.kt)("p",null,"The following ",(0,n.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/api/#eth_syncing"},(0,n.kt)("inlineCode",{parentName:"a"},"syncing"))," request returns data about the synchronization status."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -H "Content-Type: application/json" --data \'{ "query": "{syncing{startingBlock currentBlock highestBlock}}"}\' http://localhost:8547/graphql\n')),(0,n.kt)("h2",{id:"graphql-requests-with-graphiql-app"},"GraphQL requests with GraphiQL app"),(0,n.kt)("p",null,"The third-party tool, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/skevy/graphiql-app"},"GraphiQL"),", provides a tabbed interface for editing and testing GraphQL queries and mutations. GraphiQL also provides access to the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/besu/blob/750580dcca349d22d024cc14a8171b2fa74b505a/ethereum/api/src/main/resources/schema.graphqls"},"Besu GraphQL schema")," from within the app."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"GraphiQL",src:a(42822).Z,width:"2002",height:"786"})),(0,n.kt)("h2",{id:"pending"},"Pending"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"transactionCount")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"transactions")," supports the Pending query."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Besu does not execute pending transactions so results from ",(0,n.kt)("inlineCode",{parentName:"p"},"account"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"call"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"estimateGas")," for Pending do not reflect pending transactions.")),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{label:"Pending transaction count",value:"tab1",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -H "Content-Type: application/json" --data \'{ "query": "{pending {transactionCount}}"}\' http://localhost:8547/graphql\n'))),(0,n.kt)(s.Z,{label:"Result",value:"tab2",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "pending": {\n      "transactionCount": 2\n    }\n  }\n}\n')))),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{label:"Pending transactions",value:"tab1",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -H "Content-Type: application/json" --data \'{ "query": "{pending {transactions{hash}}}"}\' http://localhost:8547/graphql\n'))),(0,n.kt)(s.Z,{label:"Result",value:"tab2",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "pending": {\n      "transactions": [\n        {\n          "hash": "0xbb3ab8e2113a4afdde9753782cb0680408c0d5b982572dda117a4c72fafbf3fa"\n        },\n        {\n          "hash": "0xf6bd6b1bccf765024bd482a71c6855428e2903895982090ab5dbb0feda717af6"\n        }\n      ]\n    }\n  }\n}\n')))))}b.isMDXComponent=!0},42822:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/GraphiQL-a6360ff9467a3f33ade0bf00e6eec49e.png"}}]);