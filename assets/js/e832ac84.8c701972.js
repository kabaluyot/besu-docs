"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[65600],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>b});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,b=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return t?n.createElement(b,i(i({ref:a},c),{},{components:t})):n.createElement(b,i({ref:a},c))}));function b(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(67294),r=t(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:a,hidden:t,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:t},a)}},74866:(e,a,t)=>{t.d(a,{Z:()=>N});var n=t(87462),r=t(67294),l=t(86010),i=t(12466),s=t(16550),o=t(91980),p=t(67392),c=t(50012);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}function u(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??m(t);return function(e){const a=(0,p.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function d(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function b(e){let{queryString:a=!1,groupId:t}=e;const n=(0,s.k6)(),l=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(n.location.search);a.set(l,e),n.replace({...n.location,search:a.toString()})}),[l,n])]}function k(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,l=u(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:l}))),[o,p]=b({queryString:t,groupId:n}),[m,k]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,l]=(0,c.Nk)(t);return[n,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:n}),f=(()=>{const e=o??m;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),k(e)}),[p,k,l]),tabValues:l}}var f=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:a,block:t,selectedValue:s,selectValue:o,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),u=e=>{const a=e.currentTarget,t=c.indexOf(a),n=p[t].value;n!==s&&(m(a),o(n))},d=e=>{let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}a?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},a)},p.map((e=>{let{value:a,label:t,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===a?0:-1,"aria-selected":s===a,key:a,ref:e=>c.push(e),onKeyDown:d,onClick:u},i,{className:(0,l.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":s===a})}),t??a)})))}function g(e){let{lazy:a,children:t,selectedValue:n}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function h(e){const a=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},r.createElement(y,(0,n.Z)({},e,a)),r.createElement(g,(0,n.Z)({},e,a)))}function N(e){const a=(0,f.Z)();return r.createElement(h,(0,n.Z)({key:String(a)},e))}},22994:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>b,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var n=t(87462),r=(t(67294),t(3905)),l=t(74866),i=t(85162);const s={title:"Private network options",sidebar_position:1,description:"Hyperledger Besu private networks CLI reference",tags:["private networks"]},o="Private network command line options",p={unversionedId:"private-networks/reference/cli/options",id:"version-23.10.1/private-networks/reference/cli/options",title:"Private network options",description:"Hyperledger Besu private networks CLI reference",source:"@site/versioned_docs/version-23.10.1/private-networks/reference/cli/options.md",sourceDirName:"private-networks/reference/cli",slug:"/private-networks/reference/cli/options",permalink:"/23.10.1/private-networks/reference/cli/options",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.1/private-networks/reference/cli/options.md",tags:[{label:"private networks",permalink:"/23.10.1/tags/private-networks"}],version:"23.10.1",lastUpdatedAt:1700146786,formattedLastUpdatedAt:"Nov 16, 2023",sidebarPosition:1,frontMatter:{title:"Private network options",sidebar_position:1,description:"Hyperledger Besu private networks CLI reference",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Reference",permalink:"/23.10.1/private-networks/reference/"},next:{title:"Private network subcommands",permalink:"/23.10.1/private-networks/reference/cli/subcommands"}},c={},m=[{value:"Specify options",id:"specify-options",level:2},{value:"Options",id:"options",level:2},{value:"<code>permissions-accounts-config-file</code>",id:"permissions-accounts-config-file",level:3},{value:"<code>permissions-accounts-config-file-enabled</code>",id:"permissions-accounts-config-file-enabled",level:3},{value:"<code>permissions-accounts-contract-address</code>",id:"permissions-accounts-contract-address",level:3},{value:"<code>permissions-accounts-contract-enabled</code>",id:"permissions-accounts-contract-enabled",level:3},{value:"<code>permissions-nodes-config-file</code>",id:"permissions-nodes-config-file",level:3},{value:"<code>permissions-nodes-config-file-enabled</code>",id:"permissions-nodes-config-file-enabled",level:3},{value:"<code>permissions-nodes-contract-address</code>",id:"permissions-nodes-contract-address",level:3},{value:"<code>permissions-nodes-contract-enabled</code>",id:"permissions-nodes-contract-enabled",level:3},{value:"<code>permissions-nodes-contract-version</code>",id:"permissions-nodes-contract-version",level:3},{value:"<code>privacy-enabled</code>",id:"privacy-enabled",level:3},{value:"<code>privacy-marker-transaction-signing-key-file</code>",id:"privacy-marker-transaction-signing-key-file",level:3},{value:"<code>privacy-multi-tenancy-enabled</code>",id:"privacy-multi-tenancy-enabled",level:3},{value:"<code>privacy-flexible-groups-enabled</code>",id:"privacy-flexible-groups-enabled",level:3},{value:"<code>privacy-public-key-file</code>",id:"privacy-public-key-file",level:3},{value:"<code>privacy-tls-enabled</code>",id:"privacy-tls-enabled",level:3},{value:"<code>privacy-tls-keystore-file</code>",id:"privacy-tls-keystore-file",level:3},{value:"<code>privacy-tls-keystore-password-file</code>",id:"privacy-tls-keystore-password-file",level:3},{value:"<code>privacy-tls-known-enclave-file</code>",id:"privacy-tls-known-enclave-file",level:3},{value:"<code>privacy-url</code>",id:"privacy-url",level:3}],u={toc:m},d="wrapper";function b(e){let{components:a,...t}=e;return(0,r.kt)(d,(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"private-network-command-line-options"},"Private network command line options"),(0,r.kt)("p",null,"This reference describes the syntax of the Hyperledger Besu private network command line interface (CLI) options."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"This reference contains options that apply to only private networks. For options that apply to both private and public networks, see the ",(0,r.kt)("a",{parentName:"p",href:"/23.10.1/public-networks/reference/cli/options"},"public network options reference"),".")),(0,r.kt)("h2",{id:"specify-options"},"Specify options"),(0,r.kt)("p",null,"You can specify Besu options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"On the command line."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu [OPTIONS] [SUBCOMMAND]\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"As an environment variable. For each command line option, the equivalent environment variable is:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Uppercase."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_")," replaces ",(0,r.kt)("inlineCode",{parentName:"li"},"-"),"."),(0,r.kt)("li",{parentName:"ul"},"Has a ",(0,r.kt)("inlineCode",{parentName:"li"},"BESU_")," prefix.")),(0,r.kt)("p",{parentName:"li"},"For example, set ",(0,r.kt)("inlineCode",{parentName:"p"},"--miner-coinbase")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"BESU_MINER_COINBASE")," environment variable.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In a ",(0,r.kt)("a",{parentName:"p",href:"/23.10.1/public-networks/how-to/configuration-file"},"configuration file"),"."))),(0,r.kt)("p",null,"If you specify an option in more than one place, the order of priority is command line, environment variable, configuration file."),(0,r.kt)("p",null,"If using Bash or Z shell, you can view option suggestions by entering ",(0,r.kt)("inlineCode",{parentName:"p"},"--")," and pressing the Tab key twice."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu --Tab+Tab\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Characters such as smart quotes and long (em) hyphens don't work in Besu command line options. Ensure quotes aren't automatically converted to smart quotes, or double hyphens combined into em hyphens.")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"permissions-accounts-config-file"},(0,r.kt)("inlineCode",{parentName:"h3"},"permissions-accounts-config-file")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--permissions-accounts-config-file=<FILE>\n"))),(0,r.kt)(i.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--permissions-accounts-config-file=/home/me/me_configFiles/myPermissionsFile\n"))),(0,r.kt)(i.Z,{label:"Environment variable",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"BESU_PERMISSIONS_ACCOUNTS_CONFIG_FILE=/home/me/me_configFiles/myPermissionsFile\n"))),(0,r.kt)(i.Z,{label:"Configuration file",value:"tab4",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'permissions-accounts-config-file="/home/me/me_configFiles/myPermissionsFile"\n')))),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/23.10.1/private-networks/how-to/use-permissioning/local#permissions-configuration-file"},"accounts permissions configuration file"),". The default is the ",(0,r.kt)("inlineCode",{parentName:"p"},"permissions_config.toml")," file in the ",(0,r.kt)("a",{parentName:"p",href:"/23.10.1/public-networks/reference/cli/options#data-path"},"data directory"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"--permissions-accounts-config-file")," and ",(0,r.kt)("a",{parentName:"p",href:"#permissions-nodes-config-file"},(0,r.kt)("inlineCode",{parentName:"a"},"--permissions-nodes-config-file"))," can use the same file.")),(0,r.kt)("h3",{id:"permissions-accounts-config-file-enabled"},(0,r.kt)("inlineCode",{parentName:"h3"},"permissions-accounts-config-file-enabled")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--permissions-accounts-config-file-enabled[=<true|false>]\n"))),(0,r.kt)(i.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--permissions-accounts-config-file-enabled=true\n"))),(0,r.kt)(i.Z,{label:"Environment variable",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"BESU_PERMISSIONS_ACCOUNTS_CONFIG_FILE_ENABLED=true\n"))),(0,r.kt)(i.Z,{label:"Configuration file",value:"tab4",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"permissions-accounts-config-file-enabled=true\n")))),(0,r.kt)("p",null,"Enables or disables file-based account level permissions. The default is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("h3",{id:"permissions-accounts-contract-address"},(0,r.kt)("inlineCode",{parentName:"h3"},"permissions-accounts-contract-address")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--permissions-accounts-contract-address=<ContractAddress>\n"))),(0,r.kt)(i.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--permissions-accounts-contract-address=xyz\n"))),(0,r.kt)(i.Z,{label:"Environment variable",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"BESU_PERMISSIONS_ACCOUNTS_CONTRACT_ADDRESS=xyz\n"))),(0,r.kt)(i.Z,{label:"Configuration file",value:"tab4",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'permissions-accounts-contract-address="xyz"\n')))),(0,r.kt)("p",null,"The contract address for ",(0,r.kt)("a",{parentName:"p",href:"/23.10.1/private-networks/concepts/permissioning/onchain"},"onchain account permissioning"),"."),(0,r.kt)("h3",{id:"permissions-accounts-contract-enabled"},(0,r.kt)("inlineCode",{parentName:"h3"},"permissions-accounts-contract-enabled")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--permissions-accounts-contract-enabled[=<true|false>]\n"))),(0,r.kt)(i.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--permissions-accounts-contract-enabled=true\n"))),(0,r.kt)(i.Z,{label:"Environment variable",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"BESU_PERMISSIONS_ACCOUNTS_CONTRACT_ENABLED=true\n"))),(0,r.kt)(i.Z,{label:"Configuration file",value:"tab4",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"permissions-accounts-contract-enabled=true\n")))),(0,r.kt)("p",null,"Enables or disables contract-based ",(0,r.kt)("a",{parentName:"p",href:"/23.10.1/private-networks/concepts/permissioning/onchain"},"onchain account permissioning"),". The default is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("h3",{id:"permissions-nodes-config-file"},(0,r.kt)("inlineCode",{parentName:"h3"},"permissions-nodes-config-file")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--permissions-nodes-config-file=<FILE>\n"))),(0,r.kt)(i.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--permissions-nodes-config-file=/home/me/me_configFiles/myPermissionsFile\n"))),(0,r.kt)(i.Z,{label:"Environment variable",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"BESU_PERMISSIONS_NODES_CONFIG_FILE=/home/me/me_configFiles/myPermissionsFile\n"))),(0,r.kt)(i.Z,{label:"Configuration file",value:"tab4",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'permissions-nodes-config-file="/home/me/me_configFiles/myPermissionsFile"\n')))),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/23.10.1/private-networks/how-to/use-permissioning/local#permissions-configuration-file"},"nodes permissions configuration file"),". The default is the ",(0,r.kt)("inlineCode",{parentName:"p"},"permissions_config.toml")," file in the ",(0,r.kt)("a",{parentName:"p",href:"/23.10.1/public-networks/reference/cli/options#data-path"},"data directory"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"--permissions-nodes-config-file")," and ",(0,r.kt)("a",{parentName:"p",href:"#permissions-accounts-config-file"},(0,r.kt)("inlineCode",{parentName:"a"},"--permissions-accounts-config-file"))," can use the same file.")),(0,r.kt)("h3",{id:"permissions-nodes-config-file-enabled"},(0,r.kt)("inlineCode",{parentName:"h3"},"permissions-nodes-config-file-enabled")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--permissions-nodes-config-file-enabled[=<true|false>]\n"))),(0,r.kt)(i.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--permissions-nodes-config-file-enabled=true\n"))),(0,r.kt)(i.Z,{label:"Environment variable",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"BESU_PERMISSIONS_NODES_CONFIG_FILE_ENABLED=true\n"))),(0,r.kt)(i.Z,{label:"Configuration file",value:"tab4",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"permissions-nodes-config-file-enabled=true\n")))),(0,r.kt)("p",null,"Enables or disables file-based node level permissions. The default is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("h3",{id:"permissions-nodes-contract-address"},(0,r.kt)("inlineCode",{parentName:"h3"},"permissions-nodes-contract-address")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--permissions-nodes-contract-address=<ContractAddress>\n"))),(0,r.kt)(i.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--permissions-nodes-contract-address=xyz\n"))),(0,r.kt)(i.Z,{label:"Environment variable",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"BESU_PERMISSIONS_NODES_CONTRACT_ADDRESS=xyz\n"))),(0,r.kt)(i.Z,{label:"Configuration file",value:"tab4",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'permissions-nodes-contract-address="xyz"\n')))),(0,r.kt)("p",null,"The contract address for ",(0,r.kt)("a",{parentName:"p",href:"/23.10.1/private-networks/concepts/permissioning/onchain"},"onchain node permissioning"),"."),(0,r.kt)("h3",{id:"permissions-nodes-contract-enabled"},(0,r.kt)("inlineCode",{parentName:"h3"},"permissions-nodes-contract-enabled")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--permissions-nodes-contract-enabled[=<true|false>]\n"))),(0,r.kt)(i.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--permissions-nodes-contract-enabled=true\n"))),(0,r.kt)(i.Z,{label:"Environment variable",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"BESU_PERMISSIONS_NODES_CONTRACT_ENABLED=true\n"))),(0,r.kt)(i.Z,{label:"Configuration file",value:"tab4",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"permissions-nodes-contract-enabled=true\n")))),(0,r.kt)("p",null,"Enables or disables contract-based ",(0,r.kt)("a",{parentName:"p",href:"/23.10.1/private-networks/concepts/permissioning/onchain"},"onchain node permissioning"),". The default is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("h3",{id:"permissions-nodes-contract-version"},(0,r.kt)("inlineCode",{parentName:"h3"},"permissions-nodes-contract-version")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--permissions-nodes-contract-version=<ContractVersion>\n"))),(0,r.kt)(i.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--permissions-nodes-contract-version=2\n"))),(0,r.kt)(i.Z,{label:"Environment variable",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"BESU_PERMISSIONS_NODES_CONTRACT_VERSION=2\n"))),(0,r.kt)(i.Z,{label:"Configuration file",value:"tab4",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"permissions-nodes-contract-version=2\n")))),(0,r.kt)("p",null,"Version of the EEA ",(0,r.kt)("a",{parentName:"p",href:"/23.10.1/private-networks/how-to/use-permissioning/onchain#specify-the-permissioning-contract-interface-version"},"node permissioning interface"),". The default is 1."),(0,r.kt)("h3",{id:"privacy-enabled"},(0,r.kt)("inlineCode",{parentName:"h3"},"privacy-enabled")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--privacy-enabled[=<true|false>]\n"))),(0,r.kt)(i.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--privacy-enabled=false\n"))),(0,r.kt)(i.Z,{label:"Environment variable",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"BESU_PRIVACY_ENABLED=false\n"))),(0,r.kt)(i.Z,{label:"Configuration file",value:"tab4",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"privacy-enabled=false\n")))),(0,r.kt)("p",null,"Enables or disables ",(0,r.kt)("a",{parentName:"p",href:"/23.10.1/private-networks/concepts/privacy/"},"private transactions"),". The default is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Using private transactions with ",(0,r.kt)("a",{parentName:"p",href:"/23.10.1/public-networks/concepts/data-storage-formats"},"pruning")," or ",(0,r.kt)("a",{parentName:"p",href:"/23.10.1/public-networks/reference/cli/options#sync-mode"},"fast sync")," is not supported.")),(0,r.kt)("h3",{id:"privacy-marker-transaction-signing-key-file"},(0,r.kt)("inlineCode",{parentName:"h3"},"privacy-marker-transaction-signing-key-file")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--privacy-marker-transaction-signing-key-file=<FILE>\n"))),(0,r.kt)(i.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--privacy-marker-transaction-signing-key-file=/home/me/me_node/myPrivateKey\n"))),(0,r.kt)(i.Z,{label:"Environment variable",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"BESU_PRIVACY_MARKER_TRANSACTION_SIGNING_KEY_FILE=/home/me/me_node/myPrivateKey\n"))),(0,r.kt)(i.Z,{label:"Configuration file",value:"tab4",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'privacy-marker-transaction-signing-key-file="/home/me/me_node/myPrivateKey"\n')))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<FILE>")," is the name of the private key file used to ",(0,r.kt)("a",{parentName:"p",href:"/23.10.1/private-networks/how-to/use-privacy/sign-pmts"},"sign privacy marker transactions"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This can be the same file used by ",(0,r.kt)("a",{parentName:"p",href:"/23.10.1/public-networks/reference/cli/options#node-private-key-file"},(0,r.kt)("inlineCode",{parentName:"a"},"--node-private-key-file")),", or a different key file to identify who signed the privacy marker transaction.")),(0,r.kt)("p",null,"You must specify this option if you're using:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a privacy network where you pay gas. Also, the associated account must contain adequate funds."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/23.10.1/private-networks/concepts/permissioning/#account-permissioning"},"account permissioning")," and privacy. You must include the corresponding public key in the accounts allowlist.")),(0,r.kt)("p",null,"If you do not specify this option (for example, in a free gas network), Besu signs each transaction with a different randomly generated key."),(0,r.kt)("h3",{id:"privacy-multi-tenancy-enabled"},(0,r.kt)("inlineCode",{parentName:"h3"},"privacy-multi-tenancy-enabled")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--privacy-multi-tenancy-enabled[=<true|false>]\n"))),(0,r.kt)(i.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--privacy-multi-tenancy-enabled=false\n"))),(0,r.kt)(i.Z,{label:"Environment variable",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"BESU_PRIVACY_MULTI_TENANCY_ENABLED=false\n"))),(0,r.kt)(i.Z,{label:"Configuration file",value:"tab4",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"privacy-multi-tenancy-enabled=false\n")))),(0,r.kt)("p",null,"Enables or disables ",(0,r.kt)("a",{parentName:"p",href:"/23.10.1/private-networks/concepts/privacy/multi-tenancy"},"multi-tenancy")," for private transactions. The default is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("h3",{id:"privacy-flexible-groups-enabled"},(0,r.kt)("inlineCode",{parentName:"h3"},"privacy-flexible-groups-enabled")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--privacy-flexible-groups-enabled[=<true|false>]\n"))),(0,r.kt)(i.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--privacy-flexible-groups-enabled=true\n"))),(0,r.kt)(i.Z,{label:"Environment variable",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"BESU_PRIVACY_FLEXIBLE_GROUPS_ENABLED=true\n"))),(0,r.kt)(i.Z,{label:"Configuration file",value:"tab4",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"privacy-flexible-groups-enabled=true\n")))),(0,r.kt)("p",null,"Enables or disables ",(0,r.kt)("a",{parentName:"p",href:"/23.10.1/private-networks/concepts/privacy/flexible-privacy"},"flexible privacy groups"),". The default is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("p",null,"Deprecated syntax for this option is ",(0,r.kt)("inlineCode",{parentName:"p"},"--privacy-onchain-groups-enabled"),"."),(0,r.kt)("h3",{id:"privacy-public-key-file"},(0,r.kt)("inlineCode",{parentName:"h3"},"privacy-public-key-file")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--privacy-public-key-file=<privacyPublicKeyFile>\n"))),(0,r.kt)(i.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--privacy-public-key-file=Tessera/nodeKey.pub\n"))),(0,r.kt)(i.Z,{label:"Environment variable",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"BESU_PRIVACY_PUBLIC_KEY_FILE=Tessera/nodeKey.pub\n"))),(0,r.kt)(i.Z,{label:"Configuration file",value:"tab4",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'privacy-public-key-file="Tessera/nodeKey.pub"\n')))),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.tessera.consensys.net/"},"public key of the Tessera node"),"."),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"You cannot specify ",(0,r.kt)("inlineCode",{parentName:"p"},"privacy-public-key-file")," when ",(0,r.kt)("a",{parentName:"p",href:"#privacy-multi-tenancy-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--privacy-multi-tenancy-enabled"))," is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"))),(0,r.kt)("h3",{id:"privacy-tls-enabled"},(0,r.kt)("inlineCode",{parentName:"h3"},"privacy-tls-enabled")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--privacy-tls-enabled[=<true|false>]\n"))),(0,r.kt)(i.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--privacy-tls-enabled=false\n"))),(0,r.kt)(i.Z,{label:"Environment variable",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"BESU_PRIVACY_TLS_ENABLED=false\n"))),(0,r.kt)(i.Z,{label:"Configuration file",value:"tab4",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"privacy-tls-enabled=false\n")))),(0,r.kt)("p",null,"Enables or disables ",(0,r.kt)("a",{parentName:"p",href:"/23.10.1/private-networks/concepts/privacy/#private-transaction-manager"},"TLS on communication with the private transaction manager"),". The default is false."),(0,r.kt)("h3",{id:"privacy-tls-keystore-file"},(0,r.kt)("inlineCode",{parentName:"h3"},"privacy-tls-keystore-file")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--privacy-tls-keystore-file=<FILE>\n"))),(0,r.kt)(i.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--privacy--keystore-file=/home/me/me_node/key\n"))),(0,r.kt)(i.Z,{label:"Environment variable",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"BESU_PRIVACY_TLS_KEYSTORE_FILE=/home/me/me_node/key\n"))),(0,r.kt)(i.Z,{label:"Configuration file",value:"tab4",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'privacy-tls-keystore-file="/home/me/me_node/key"\n')))),(0,r.kt)("p",null,"The keystore file (in PKCS #12 format) containing the private key and the certificate presented during authentication."),(0,r.kt)("p",null,"You must specify ",(0,r.kt)("inlineCode",{parentName:"p"},"privacy-tls-keystore-file")," if ",(0,r.kt)("a",{parentName:"p",href:"#privacy-tls-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--privacy-tls-enabled"))," is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h3",{id:"privacy-tls-keystore-password-file"},(0,r.kt)("inlineCode",{parentName:"h3"},"privacy-tls-keystore-password-file")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--privacy-tls-keystore-password-file=<FILE>\n"))),(0,r.kt)(i.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--privacy-tls-keystore-password-file=/home/me/me_node/password\n"))),(0,r.kt)(i.Z,{label:"Environment variable",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"BESU_PRIVACY_TLS_KEYSTORE_PASSWORD_FILE=/home/me/me_node/password\n"))),(0,r.kt)(i.Z,{label:"Configuration file",value:"tab4",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'privacy-tls-keystore-password-file="/home/me/me_node/password"\n')))),(0,r.kt)("p",null,"The path to the file containing the password to decrypt the keystore."),(0,r.kt)("h3",{id:"privacy-tls-known-enclave-file"},(0,r.kt)("inlineCode",{parentName:"h3"},"privacy-tls-known-enclave-file")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--privacy-tls-known-enclave-file=<FILE>\n"))),(0,r.kt)(i.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--privacy-tls-known-enclave-file=/home/me/me_node/knownEnclave\n"))),(0,r.kt)(i.Z,{label:"Environment variable",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"BESU_PRIVACY_TLS_KNOWN_ENCLAVE_FILE=/home/me/me_node/knownEnclave\n"))),(0,r.kt)(i.Z,{label:"Configuration file",value:"tab4",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'privacy-tls-known-enclave-file="/home/me/me_node/knownEnclave"\n')))),(0,r.kt)("p",null,"The path to the file containing the hostnames, ports, and SHA256 certificate fingerprints of the ",(0,r.kt)("a",{parentName:"p",href:"/23.10.1/private-networks/how-to/configure/tls/client-and-server#create-the-known-servers-file"},"authorized privacy enclave"),"."),(0,r.kt)("h3",{id:"privacy-url"},(0,r.kt)("inlineCode",{parentName:"h3"},"privacy-url")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--privacy-url=<privacyUrl>\n"))),(0,r.kt)(i.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--privacy-url=http://127.0.0.1:8888\n"))),(0,r.kt)(i.Z,{label:"Environment variable",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"BESU_PRIVACY_URL=http://127.0.0.1:8888\n"))),(0,r.kt)(i.Z,{label:"Configuration file",value:"tab4",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'privacy-url="http://127.0.0.1:8888"\n')))),(0,r.kt)("p",null,"The URL on which the ",(0,r.kt)("a",{parentName:"p",href:"/23.10.1/private-networks/tutorials/privacy/#3-create-tessera-configuration-files"},"Tessera node")," is running."))}b.isMDXComponent=!0}}]);