"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[51028],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),b=r,m=u["".concat(s,".").concat(b)]||u[b]||d[b]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),l=n(16550),s=n(91980),c=n(67392),p=n(50012);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=m({queryString:n,groupId:a}),[u,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=s??u;return b({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var f=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==l&&(u(t),s(a))},b=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:b,onClick:d},i,{className:(0,o.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},80261:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),i=n(85162);const l={title:"Use the Engine API",sidebar_position:2,description:"Use the Engine API to communicate with a consensus client.",tags:["public networks"]},s="Use the Engine API",c={unversionedId:"public-networks/how-to/use-engine-api",id:"public-networks/how-to/use-engine-api",title:"Use the Engine API",description:"Use the Engine API to communicate with a consensus client.",source:"@site/docs/public-networks/how-to/use-engine-api.md",sourceDirName:"public-networks/how-to",slug:"/public-networks/how-to/use-engine-api",permalink:"/development/public-networks/how-to/use-engine-api",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/how-to/use-engine-api.md",tags:[{label:"public networks",permalink:"/development/tags/public-networks"}],version:"current",lastUpdatedAt:1689360554,formattedLastUpdatedAt:"Jul 14, 2023",sidebarPosition:2,frontMatter:{title:"Use the Engine API",sidebar_position:2,description:"Use the Engine API to communicate with a consensus client.",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Access logs using JSON-RPC",permalink:"/development/public-networks/how-to/use-besu-api/access-logs"},next:{title:"Use a configuration file",permalink:"/development/public-networks/how-to/configuration-file"}},p={},u=[{value:"Configure the Engine API",id:"configure-the-engine-api",level:2},{value:"Enable the Engine API",id:"enable-the-engine-api",level:3},{value:"Service ports",id:"service-ports",level:3},{value:"Host allowlist",id:"host-allowlist",level:3},{value:"Authentication",id:"authentication",level:2},{value:"Send a payload using the Engine API",id:"send-a-payload-using-the-engine-api",level:2},{value:"1. Prepare a payload",id:"1-prepare-a-payload",level:3},{value:"2. Get the payload",id:"2-get-the-payload",level:3},{value:"3. Execute the payload",id:"3-execute-the-payload",level:3},{value:"4. Update the fork choice",id:"4-update-the-fork-choice",level:3}],d={toc:u},b="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-the-engine-api"},"Use the Engine API"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/concepts/the-merge#execution-and-consensus-clients"},"Consensus and execution clients")," communicate with each other using the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/engine-api/"},"Engine API"),". These API methods are a separate subsection of the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/how-to/use-besu-api/"},"JSON-RPC API"),"."),(0,r.kt)("h2",{id:"configure-the-engine-api"},"Configure the Engine API"),(0,r.kt)("p",null,"To configure the Engine API:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#enable-the-engine-api"},"Enable the Engine API")," (it's disabled by default)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/development/public-networks/how-to/use-besu-api/#enable-api-access"},"Enable the JSON-RPC API"),". Ensure the ",(0,r.kt)("a",{parentName:"li",href:"/development/public-networks/how-to/use-besu-api/json-rpc#api-methods-enabled-by-default"},(0,r.kt)("inlineCode",{parentName:"a"},"ETH")," method is enabled")," (it's enabled by default)."),(0,r.kt)("li",{parentName:"ul"},"Specify the ",(0,r.kt)("a",{parentName:"li",href:"#service-ports"},"service ports"),"."),(0,r.kt)("li",{parentName:"ul"},"Specify the ",(0,r.kt)("a",{parentName:"li",href:"#host-allowlist"},"host allowlist"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Example Engine API configuration"',title:'"Example',Engine:!0,API:!0,'configuration"':!0},"besu --engine-rpc-enabled --rpc-http-enabled --engine-rpc-port=8551 --engine-host-allowlist=localhost,127.0.0.1 --engine-jwt-secret=jwt.hex\n")),(0,r.kt)("h3",{id:"enable-the-engine-api"},"Enable the Engine API"),(0,r.kt)("p",null,"Enable the Engine API with the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#engine-rpc-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--engine-rpc-enabled"))," CLI option."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--engine-rpc-enabled")," CLI option enables the Engine API even if no consensus client configuration exists.")),(0,r.kt)("h3",{id:"service-ports"},"Service ports"),(0,r.kt)("p",null,"To specify the port the Engine API service listens on for HTTP and WebSocket, use the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#engine-rpc-port"},(0,r.kt)("inlineCode",{parentName:"a"},"--engine-rpc-port"))," option. The default is ",(0,r.kt)("inlineCode",{parentName:"p"},"8551"),"."),(0,r.kt)("h3",{id:"host-allowlist"},"Host allowlist"),(0,r.kt)("p",null,"To prevent DNS rebinding attacks, Besu checks incoming HTTP request host headers, WebSocket connections, and GraphQL requests. Besu accepts requests only when hostnames specified using the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#engine-host-allowlist"},(0,r.kt)("inlineCode",{parentName:"a"},"--engine-host-allowlist"))," option matches the request host headers. By default, Besu accepts requests and connections from ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This isn't a permissioning feature. To restrict access to the Engine API, we recommend using ",(0,r.kt)("a",{parentName:"p",href:"#authentication"},"authentication"),".")),(0,r.kt)("p",null,"If your application publishes RPC ports, specify the hostnames when starting Besu."),(0,r.kt)("p",null,"Specify ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"--engine-host-allowlist")," to effectively disable host protection."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"We don't recommend specifying ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"--engine-host-allowlist")," in production.")),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"By default, ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/how-to/use-besu-api/authenticate"},"authentication")," for the Engine API is enabled. To disable, set the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#engine-jwt-disabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--engine-jwt-disabled"))," option to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Don't disable JWT authentication in production environments."),(0,r.kt)("p",{parentName:"admonition"},"Disable only for testing purposes.")),(0,r.kt)("p",null,"Set the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/how-to/use-besu-api/authenticate#jwt-public-key-authentication"},"JWT secret")," by using the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#engine-jwt-secret"},(0,r.kt)("inlineCode",{parentName:"a"},"--engine-jwt-secret"))," option."),(0,r.kt)("h2",{id:"send-a-payload-using-the-engine-api"},"Send a payload using the Engine API"),(0,r.kt)("h3",{id:"1-prepare-a-payload"},"1. Prepare a payload"),(0,r.kt)("p",null,"Prepare to send a payload using ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/engine-api/#engine_forkchoiceupdatedv1"},(0,r.kt)("inlineCode",{parentName:"a"},"engine_forkchoiceUpdatedV1")),"."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"curl HTTP request",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{"jsonrpc":"2.0","method":"engine_forkchoiceUpdatedV1","params":[{"headBlockHash": "0x3b8fb240d288781d4aac94d3fd16809ee413bc99294a085798a589dae51ddd4a", "safeBlockHash": "0x3b8fb240d288781d4aac94d3fd16809ee413bc99294a085798a589dae51ddd4a", "finalizedBlockHash": "0x0000000000000000000000000000000000000000000000000000000000000000"},{"timestamp": "0x5","prevRandao": "0x0000000000000000000000000000000000000000000000000000000000000000","suggestedFeeRecipient": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b"}],"id":67}\' http://127.0.0.1:8550\n'))),(0,r.kt)(i.Z,{label:"JSON result",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 67,\n  "result": {\n    "payloadStatus": {\n      "status": "VALID",\n      "latestValidHash": "0x3b8fb240d288781d4aac94d3fd16809ee413bc99294a085798a589dae51ddd4a",\n      "validationError": null\n    },\n    "payloadId": "0x0000000021f32cc1"\n  }\n}\n')))),(0,r.kt)("h3",{id:"2-get-the-payload"},"2. Get the payload"),(0,r.kt)("p",null,"Get the payload using ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/engine-api/#engine_getpayloadv1"},(0,r.kt)("inlineCode",{parentName:"a"},"engine_getPayloadV1"))),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"curl HTTP request",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{"jsonrpc":"2.0","method":"engine_getPayloadV1","params":["0x1"],"id":1}\' http://127.0.0.1:8550\n'))),(0,r.kt)(i.Z,{label:"JSON result",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "parentHash": "0x3b8fb240d288781d4aac94d3fd16809ee413bc99294a085798a589dae51ddd4a",\n    "feeRecipient": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",\n    "stateRoot": "0xca3149fa9e37db08d1cd49c9061db1002ef1cd58db2210f2115c8c989b2bdf45",\n    "receiptsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",\n    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n    "prevRandao": "0x0000000000000000000000000000000000000000000000000000000000000000",\n    "blockNumber": "0x1",\n    "gasLimit": "0x1c9c380",\n    "gasUsed": "0x0",\n    "timestamp": "0x5",\n    "extraData": "0x",\n    "baseFeePerGas": "0x7",\n    "blockHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858",\n    "transactions": []\n  }\n}\n')))),(0,r.kt)("h3",{id:"3-execute-the-payload"},"3. Execute the payload"),(0,r.kt)("p",null,"Execute the payload using ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/engine-api/#engine_newpayloadv1"},(0,r.kt)("inlineCode",{parentName:"a"},"engine_newPayloadV1"))),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"curl HTTP request",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{"jsonrpc":"2.0","method":"engine_newPayloadV1","params":[\n  {\n    "parentHash": "0x3b8fb240d288781d4aac94d3fd16809ee413bc99294a085798a589dae51ddd4a",\n    "feeRecipient": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",\n    "stateRoot": "0xca3149fa9e37db08d1cd49c9061db1002ef1cd58db2210f2115c8c989b2bdf45",\n    "receiptsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",\n    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n    "prevRandao": "0x0000000000000000000000000000000000000000000000000000000000000000",\n    "blockNumber": "0x1",\n    "gasLimit": "0x1c9c380",\n    "gasUsed": "0x0",\n    "timestamp": "0x5",\n    "extraData": "0x",\n    "baseFeePerGas": "0x7",\n    "blockHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858",\n    "transactions": []\n  }\n],"id":67}\' http://127.0.0.1:8550\n'))),(0,r.kt)(i.Z,{label:"JSON result",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "status": "VALID",\n    "latestValidHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858",\n    "validationError": null\n  }\n}\n')))),(0,r.kt)("h3",{id:"4-update-the-fork-choice"},"4. Update the fork choice"),(0,r.kt)("p",null,"Update the fork choice using ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/engine-api/#engine_forkchoiceupdatedv1"},(0,r.kt)("inlineCode",{parentName:"a"},"engine_forkchoiceUpdatedV1"))," again."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"curl HTTP request",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{"jsonrpc":"2.0","method":"engine_forkchoiceUpdatedV1","params":[{"headBlockHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858", "safeBlockHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858", "finalizedBlockHash": "0x3b8fb240d288781d4aac94d3fd16809ee413bc99294a085798a589dae51ddd4a"},null],"id":67}\' http://127.0.0.1:8550\n'))),(0,r.kt)(i.Z,{label:"JSON result",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 67,\n  "result": {\n    "payloadStatus": {\n      "status": "VALID",\n      "latestValidHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858",\n      "validationError": null\n    },\n    "payloadId": null\n  }\n}\n')))))}m.isMDXComponent=!0}}]);