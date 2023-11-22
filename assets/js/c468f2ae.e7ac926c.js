"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[70874],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||s;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),s=n(86010),o=n(12466),l=n(16550),i=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=d(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[i,u]=h({queryString:n,groupId:a}),[p,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),f=(()=>{const e=i??p;return m({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),k(e)}),[u,k,s]),tabValues:s}}var f=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(p(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,s.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=k(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",b.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},4408:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),s=n(74866),o=n(85162);const l={title:"Run Besu and Teku on Mainnet",sidebar_position:1,description:"Run Besu and Teku on Ethereum Mainnet.",tags:["public networks"]},i="Run Besu and Teku on Mainnet",u={unversionedId:"public-networks/tutorials/besu-teku-mainnet",id:"version-23.4.1/public-networks/tutorials/besu-teku-mainnet",title:"Run Besu and Teku on Mainnet",description:"Run Besu and Teku on Ethereum Mainnet.",source:"@site/versioned_docs/version-23.4.1/public-networks/tutorials/besu-teku-mainnet.md",sourceDirName:"public-networks/tutorials",slug:"/public-networks/tutorials/besu-teku-mainnet",permalink:"/23.4.1/public-networks/tutorials/besu-teku-mainnet",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/public-networks/tutorials/besu-teku-mainnet.md",tags:[{label:"public networks",permalink:"/23.4.1/tags/public-networks"}],version:"23.4.1",lastUpdatedAt:1700670990,formattedLastUpdatedAt:"Nov 22, 2023",sidebarPosition:1,frontMatter:{title:"Run Besu and Teku on Mainnet",sidebar_position:1,description:"Run Besu and Teku on Ethereum Mainnet.",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Tutorials",permalink:"/23.4.1/public-networks/tutorials"},next:{title:"Run Besu and Teku on a testnet",permalink:"/23.4.1/public-networks/tutorials/besu-teku-testnet"}},c={},p=[{value:"1. Install Besu and Teku",id:"1-install-besu-and-teku",level:2},{value:"2. Generate the shared secret",id:"2-generate-the-shared-secret",level:2},{value:"3. Generate validator keys",id:"3-generate-validator-keys",level:2},{value:"4. Start Besu",id:"4-start-besu",level:2},{value:"5. Start Teku",id:"5-start-teku",level:2},{value:"Beacon node only",id:"beacon-node-only",level:3},{value:"Beacon node and validator client",id:"beacon-node-and-validator-client",level:3},{value:"6. Wait for Besu and Teku to sync",id:"6-wait-for-besu-and-teku-to-sync",level:2},{value:"7. Stake ETH",id:"7-stake-eth",level:2}],d={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"run-besu-and-teku-on-mainnet"},"Run Besu and Teku on Mainnet"),(0,r.kt)("p",null,"Run Besu as an ",(0,r.kt)("a",{parentName:"p",href:"/23.4.1/public-networks/concepts/the-merge#execution-clients"},"execution client")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.teku.consensys.net/"},"Teku")," as a ",(0,r.kt)("a",{parentName:"p",href:"/23.4.1/public-networks/concepts/the-merge#consensus-clients"},"consensus client")," on Ethereum Mainnet."),(0,r.kt)("h2",{id:"1-install-besu-and-teku"},"1. Install Besu and Teku"),(0,r.kt)("p",null,"Install ",(0,r.kt)("a",{parentName:"p",href:"/23.4.1/public-networks/get-started/install/binary-distribution"},"Besu")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.teku.consensys.net/HowTo/Get-Started/Installation-Options/Install-Binaries/"},"Teku"),"."),(0,r.kt)("p",null,"Ensure you meet the prerequisites for the installation option you use. For example, you must have Java 17+ if using the Besu and Teku binary distributions."),(0,r.kt)("p",null,"Ensure you meet the ",(0,r.kt)("a",{parentName:"p",href:"/23.4.1/public-networks/get-started/system-requirements"},"system requirements for Besu on public networks"),"."),(0,r.kt)("h2",{id:"2-generate-the-shared-secret"},"2. Generate the shared secret"),(0,r.kt)("p",null,"Run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'openssl rand -hex 32 | tr -d "\\n" > jwtsecret.hex\n')),(0,r.kt)("p",null,"You will specify ",(0,r.kt)("inlineCode",{parentName:"p"},"jwtsecret.hex")," when starting Besu and Teku. This is a shared JWT secret the clients use to authenticate each other when using the ",(0,r.kt)("a",{parentName:"p",href:"/23.4.1/public-networks/how-to/use-engine-api"},"Engine API"),"."),(0,r.kt)("h2",{id:"3-generate-validator-keys"},"3. Generate validator keys"),(0,r.kt)("p",null,"If you're running Teku as a beacon node only, skip to the ",(0,r.kt)("a",{parentName:"p",href:"#4-start-besu"},"next step"),"."),(0,r.kt)("p",null,"If you're also running Teku as a validator client, have a funded Ethereum address ready (32 ETH and gas fees for each validator)."),(0,r.kt)("p",null,"Generate validator keys and stake your ETH for one or more validators using the ",(0,r.kt)("a",{parentName:"p",href:"https://launchpad.ethereum.org/en/"},"Staking Launchpad"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Save the password you use to generate each key pair in a ",(0,r.kt)("inlineCode",{parentName:"p"},".txt")," file."),(0,r.kt)("p",{parentName:"admonition"},"You should also have a ",(0,r.kt)("inlineCode",{parentName:"p"},".json")," file for each validator key pair.")),(0,r.kt)("h2",{id:"4-start-besu"},"4. Start Besu"),(0,r.kt)("p",null,"Run the following command or specify the options in a ",(0,r.kt)("a",{parentName:"p",href:"/23.4.1/public-networks/how-to/configuration-file"},"configuration file"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu \\\n  --sync-mode=X_SNAP           \\\n  --data-storage-format=BONSAI \\\n  --rpc-http-enabled=true      \\\n  --rpc-http-host="0.0.0.0"    \\\n  --rpc-ws-enabled=true        \\\n  --rpc-ws-host="0.0.0.0"      \\\n  --host-allowlist=<IP of Besu node>,127.0.0.1,localhost        \\\n  --engine-host-allowlist=<IP of Besu node>,127.0.0.1,localhost \\\n  --engine-rpc-enabled         \\\n  --engine-jwt-secret=<path to jwtsecret.hex>\n')),(0,r.kt)("p",null,"Specify:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The path to the ",(0,r.kt)("inlineCode",{parentName:"li"},"jwtsecret.hex")," file generated in ",(0,r.kt)("a",{parentName:"li",href:"#2-generate-the-shared-secret"},"step 2")," using the ",(0,r.kt)("a",{parentName:"li",href:"/23.4.1/public-networks/reference/cli/options#engine-jwt-secret"},(0,r.kt)("inlineCode",{parentName:"a"},"--engine-jwt-secret"))," option."),(0,r.kt)("li",{parentName:"ul"},"The IP address of your Besu node using the ",(0,r.kt)("a",{parentName:"li",href:"/23.4.1/public-networks/reference/cli/options#host-allowlist"},(0,r.kt)("inlineCode",{parentName:"a"},"--host-allowlist"))," and ",(0,r.kt)("a",{parentName:"li",href:"/23.4.1/public-networks/reference/cli/options#engine-host-allowlist"},(0,r.kt)("inlineCode",{parentName:"a"},"--engine-host-allowlist"))," options.")),(0,r.kt)("p",null,"Also, in the command:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/23.4.1/public-networks/reference/cli/options#sync-mode"},(0,r.kt)("inlineCode",{parentName:"a"},"--sync-mode"))," specifies using ",(0,r.kt)("a",{parentName:"li",href:"/23.4.1/public-networks/get-started/connect/sync-node#snap-synchronization"},"snap sync"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/23.4.1/public-networks/reference/cli/options#data-storage-format"},(0,r.kt)("inlineCode",{parentName:"a"},"--data-storage-format"))," specifies using ",(0,r.kt)("a",{parentName:"li",href:"/23.4.1/public-networks/concepts/data-storage-formats#bonsai-tries"},"Bonsai Tries"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/23.4.1/public-networks/reference/cli/options#rpc-http-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-enabled"))," enables the HTTP JSON-RPC service."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/23.4.1/public-networks/reference/cli/options#rpc-http-host"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-host"))," is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"0.0.0.0")," to allow remote RPC connections."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/23.4.1/public-networks/reference/cli/options#rpc-ws-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-ws-enabled"))," enables the WebSocket JSON-RPC service."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/23.4.1/public-networks/reference/cli/options#rpc-ws-host"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-ws-host"))," is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"0.0.0.0")," to allow remote RPC connections."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/23.4.1/public-networks/reference/cli/options#engine-rpc-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--engine-rpc-enabled"))," enables the ",(0,r.kt)("a",{parentName:"li",href:"/23.4.1/public-networks/reference/engine-api/"},"Engine API"),".")),(0,r.kt)("p",null,"You can modify the option values and add other ",(0,r.kt)("a",{parentName:"p",href:"/23.4.1/public-networks/reference/cli/options"},"command line options")," as needed."),(0,r.kt)("h2",{id:"5-start-teku"},"5. Start Teku"),(0,r.kt)("p",null,"Open a new terminal window."),(0,r.kt)("h3",{id:"beacon-node-only"},"Beacon node only"),(0,r.kt)("p",null,"To run Teku as a beacon node only (without validator duties), run the following command or specify the options in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.teku.consensys.net/HowTo/Configure/Use-Configuration-File/"},"Teku configuration file"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"teku \\\n  --ee-endpoint=http://localhost:8551          \\\n  --ee-jwt-secret-file=<path to jwtsecret.hex> \\\n  --metrics-enabled=true                       \\\n  --rest-api-enabled=true\n")),(0,r.kt)("p",null,"Specify the path to the ",(0,r.kt)("inlineCode",{parentName:"p"},"jwtsecret.hex")," file generated in ",(0,r.kt)("a",{parentName:"p",href:"#2-generate-the-shared-secret"},"step 2")," using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax/#ee-jwt-secret-file"},(0,r.kt)("inlineCode",{parentName:"a"},"--ee-jwt-secret-file"))," option."),(0,r.kt)("p",null,"Also, in the command:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax/#ee-endpoint"},(0,r.kt)("inlineCode",{parentName:"a"},"--ee-endpoint"))," is set to the default URL of Besu's Engine API."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax/#metrics-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--metrics-enabled"))," enables Teku's metrics exporter."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax/#rest-api-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--rest-api-enabled"))," enables Teku's REST API service.")),(0,r.kt)("p",null,"You can modify the option values and add other ",(0,r.kt)("a",{parentName:"p",href:"https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax/"},"Teku command line options")," as needed."),(0,r.kt)("h3",{id:"beacon-node-and-validator-client"},"Beacon node and validator client"),(0,r.kt)("p",null,"To run Teku as a beacon node and validator in a single process, run the following command or specify the options in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.teku.consensys.net/HowTo/Configure/Use-Configuration-File/"},"Teku configuration file"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"teku \\\n  --ee-endpoint http://localhost:8551                       \\\n  --ee-jwt-secret-file <path to jwtsecret.hex>              \\\n  --metrics-enabled=true                                    \\\n  --rest-api-enabled=true                                   \\\n  --validators-proposer-default-fee-recipient=<ETH address> \\\n  --validator-keys=<path to key file>:<path to password file>[,<path to key file>:<path to password file>,...]\n")),(0,r.kt)("p",null,"Specify:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The path to the ",(0,r.kt)("inlineCode",{parentName:"li"},"jwtsecret.hex")," file generated in ",(0,r.kt)("a",{parentName:"li",href:"#2-generate-the-shared-secret"},"step 2")," using the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax/#ee-jwt-secret-file"},(0,r.kt)("inlineCode",{parentName:"a"},"--ee-jwt-secret-file"))," option."),(0,r.kt)("li",{parentName:"ul"},"An Ethereum address you own as the default fee recipient using the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax/#validators-proposer-default-fee-recipient"},(0,r.kt)("inlineCode",{parentName:"a"},"--validators-proposer-default-fee-recipient"))," option."),(0,r.kt)("li",{parentName:"ul"},"The paths to the keystore ",(0,r.kt)("inlineCode",{parentName:"li"},".json")," file and password ",(0,r.kt)("inlineCode",{parentName:"li"},".txt")," file created in ",(0,r.kt)("a",{parentName:"li",href:"#3-generate-validator-keys"},"step 3")," for each validator using the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax/#validator-keys"},(0,r.kt)("inlineCode",{parentName:"a"},"--validator-keys"))," option. Separate the ",(0,r.kt)("inlineCode",{parentName:"li"},".json")," and ",(0,r.kt)("inlineCode",{parentName:"li"},".txt")," files with a colon, and separate entries for multiple validators with commas.")),(0,r.kt)("p",null,"Also, in the command:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax/#ee-endpoint"},(0,r.kt)("inlineCode",{parentName:"a"},"--ee-endpoint"))," is set to the default URL of Besu's Engine API."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax/#metrics-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--metrics-enabled"))," enables Teku's metrics exporter."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax/#rest-api-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--rest-api-enabled"))," enables Teku's REST API service.")),(0,r.kt)("p",null,"You can modify the option values and add other ",(0,r.kt)("a",{parentName:"p",href:"https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax/"},"Teku command line options")," as needed."),(0,r.kt)("h2",{id:"6-wait-for-besu-and-teku-to-sync"},"6. Wait for Besu and Teku to sync"),(0,r.kt)("p",null,"After starting Besu and Teku, your node starts syncing and connecting to peers."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Besu logs",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"@timestamp":"2023-02-03T04:43:49,555","level":"INFO","thread":"main","class":"DefaultSynchronizer","message":"Starting synchronizer.","throwable":""}\n{"@timestamp":"2023-02-03T04:43:49,556","level":"INFO","thread":"main","class":"FastSyncDownloader","message":"Starting sync","throwable":""}\n{"@timestamp":"2023-02-03T04:43:49,559","level":"INFO","thread":"main","class":"Runner","message":"Ethereum main loop is up.","throwable":""}\n{"@timestamp":"2023-02-03T04:43:53,106","level":"INFO","thread":"Timer-0","class":"DNSResolver","message":"Resolved 2409 nodes","throwable":""}\n{"@timestamp":"2023-02-03T04:45:04,803","level":"INFO","thread":"nioEventLoopGroup-3-10","class":"SnapWorldStateDownloader","message":"Downloading world state from peers for pivot block 16545859 (0x616ae3c4cf85f95a9bce2814a7282d75dc2eac36\ncb9f0fcc6f16386df70da3c5). State root 0xa7114541f42c62a72c8b6bb9901c2ccf4b424cd7f76570a67b82a183b02f25dc pending requests 0","throwable":""}\n{"@timestamp":"2023-02-03T04:46:04,834","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.08%, Peer count: 8","throwable":""}\n{"@timestamp":"2023-02-03T04:48:01,840","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.23%, Peer count: 8","throwable":""}\n{"@timestamp":"2023-02-03T04:49:09,931","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.41%, Peer count: 11","throwable":""}\n{"@timestamp":"2023-02-03T04:50:12,466","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.61%, Peer count: 10","throwable":""}\n{"@timestamp":"2023-02-03T04:51:20,977","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.75%, Peer count: 10","throwable":""}\n{"@timestamp":"2023-02-03T04:51:28,985","level":"INFO","thread":"EthScheduler-Services-29 (importBlock)","class":"FastImportBlocksStep","message":"Block import progress: 180400 of 16545859 (1%)","throwable":""}\n'))),(0,r.kt)(o.Z,{label:"Teku logs",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"2022-03-21 20:43:24.355 INFO  - Syncing     *** Target slot: 76092, Head slot: 2680, Remaining slots: 73412, Connected peers: 8\n2022-03-21 20:43:36.363 INFO  - Syncing     *** Target slot: 76093, Head slot: 2879, Remaining slots: 73214, Connected peers: 10\n2022-03-21 20:43:48.327 INFO  - Syncing     *** Target slot: 76094, Head slot: 3080, Remaining slots: 73014, Connected peers: 8\n2022-03-21 20:44:00.339 INFO  - Syncing     *** Target slot: 76095, Head slot: 3317, Remaining slots: 72778, Connected peers: 6\n2022-03-21 20:44:12.353 INFO  - Syncing     *** Target slot: 76096, Head slot: 3519, Remaining slots: 72577, Connected peers: 9\n")))),(0,r.kt)("p",null,"If you're running Teku as a beacon node only, you're all set. If you're also running Teku as a validator client, ensure Besu and Teku are fully synced before submitting your staking deposit in the next step. Syncing Besu can take several days."),(0,r.kt)("h2",{id:"7-stake-eth"},"7. Stake ETH"),(0,r.kt)("p",null,"Stake your ETH for one or more validators using the ",(0,r.kt)("a",{parentName:"p",href:"https://launchpad.ethereum.org/en/"},"Staking Launchpad"),"."),(0,r.kt)("p",null,"You can check your validator status by searching your Ethereum address on the ",(0,r.kt)("a",{parentName:"p",href:"https://beaconcha.in/"},"Beacon Chain explorer"),". It may take up to multiple days for your validator to be activated and start proposing blocks."))}h.isMDXComponent=!0}}]);