"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[46587],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),r=a(67294),o=a(86010),i=a(12466),l=a(16550),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=f({queryString:a,groupId:n}),[p,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),b(e)}),[c,b,o]),tabValues:o}}var k=a(72389);const h="tabList__CuJ",g="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==l&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",g,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function T(e){const t=b(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",h)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return r.createElement(T,(0,n.Z)({key:String(t)},e))}},38900:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),i=a(85162);const l={title:"Private network subcommands",sidebar_position:2,description:"Hyperledger Besu command line interface subcommands",tags:["private networks"]},s="Private network subcommands",c={unversionedId:"private-networks/reference/cli/subcommands",id:"version-23.7.3/private-networks/reference/cli/subcommands",title:"Private network subcommands",description:"Hyperledger Besu command line interface subcommands",source:"@site/versioned_docs/version-23.7.3/private-networks/reference/cli/subcommands.md",sourceDirName:"private-networks/reference/cli",slug:"/private-networks/reference/cli/subcommands",permalink:"/23.7.3/private-networks/reference/cli/subcommands",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.3/private-networks/reference/cli/subcommands.md",tags:[{label:"private networks",permalink:"/23.7.3/tags/private-networks"}],version:"23.7.3",lastUpdatedAt:1697011484,formattedLastUpdatedAt:"Oct 11, 2023",sidebarPosition:2,frontMatter:{title:"Private network subcommands",sidebar_position:2,description:"Hyperledger Besu command line interface subcommands",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Private network options",permalink:"/23.7.3/private-networks/reference/cli/options"},next:{title:"Private network API methods",permalink:"/23.7.3/private-networks/reference/api/"}},u={},p=[{value:"<code>operator</code>",id:"operator",level:2},{value:"<code>generate-blockchain-config</code>",id:"generate-blockchain-config",level:3},{value:"<code>rlp</code>",id:"rlp",level:2},{value:"<code>encode</code>",id:"encode",level:3},{value:"IBFT 2.0 extra data",id:"ibft-20-extra-data",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"private-network-subcommands"},"Private network subcommands"),(0,r.kt)("p",null,"This reference describes the syntax of the Hyperledger Besu private network command line interface (CLI) subcommands."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"This reference contains subcommands that apply to only private networks. For subcommands that apply to both private and public networks, see the ",(0,r.kt)("a",{parentName:"p",href:"/23.7.3/public-networks/reference/cli/subcommands"},"public network subcommands reference"),".")),(0,r.kt)("p",null,"To start a Besu node using subcommands, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu [OPTIONS] [SUBCOMMAND] [SUBCOMMAND OPTIONS]\n")),(0,r.kt)("p",null,"If using Bash or Z shell, you can view subcommand suggestions by pressing the Tab key twice."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu Tab+Tab\n")),(0,r.kt)("h2",{id:"operator"},(0,r.kt)("inlineCode",{parentName:"h2"},"operator")),(0,r.kt)("p",null,"Provides operator actions."),(0,r.kt)("h3",{id:"generate-blockchain-config"},(0,r.kt)("inlineCode",{parentName:"h3"},"generate-blockchain-config")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu operator generate-blockchain-config --config-file=<FILE> --to=<DIRECTORY> [--genesis-file-name=<FILE>] [--private-key-file-name=<FILE>] [--public-key-file-name=<FILE>]\n"))),(0,r.kt)(i.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu operator generate-blockchain-config --config-file=config.json --to=myNetworkFiles\n")))),(0,r.kt)("p",null,"Generates an ",(0,r.kt)("a",{parentName:"p",href:"/23.7.3/private-networks/how-to/configure/consensus/ibft#genesis-file"},"IBFT 2.0")," or ",(0,r.kt)("a",{parentName:"p",href:"/23.7.3/private-networks/how-to/configure/consensus/qbft#genesis-file"},"QBFT")," genesis file."),(0,r.kt)("p",null,"The configuration file has two nested JSON nodes. The first is the ",(0,r.kt)("inlineCode",{parentName:"p"},"genesis")," property defining the IBFT 2.0 or QBFT genesis file, except for the ",(0,r.kt)("inlineCode",{parentName:"p"},"extraData")," string. The second is the ",(0,r.kt)("inlineCode",{parentName:"p"},"blockchain")," property defining the number of key pairs to generate."),(0,r.kt)("h2",{id:"rlp"},(0,r.kt)("inlineCode",{parentName:"h2"},"rlp")),(0,r.kt)("p",null,"Provides RLP related actions."),(0,r.kt)("h3",{id:"encode"},(0,r.kt)("inlineCode",{parentName:"h3"},"encode")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu rlp encode [--from=<FILE>] [--to=<FILE>] [--type=<type>]\n"))),(0,r.kt)(i.Z,{label:"File example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```bash\nbesu rlp encode --from=ibft_extra_data.json --to=extra_data_for_ibft_genesis.txt --type=IBFT_EXTRA_DATA\n```\n"))),(0,r.kt)(i.Z,{label:"Standard input/output example",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat extra_data.json | besu rlp encode > rlp.txt\n")))),(0,r.kt)("p",null,"Encodes the RLP hexadecimal string for use in an ",(0,r.kt)("a",{parentName:"p",href:"/23.7.3/private-networks/how-to/configure/consensus/ibft#genesis-file"},"IBFT 2.0")," or ",(0,r.kt)("a",{parentName:"p",href:"/23.7.3/private-networks/how-to/configure/consensus/qbft#genesis-file"},"QBFT")," genesis file. The default type is ",(0,r.kt)("inlineCode",{parentName:"p"},"IBFT_EXTRA_DATA"),"."),(0,r.kt)("p",null,"Supported types are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"IBFT_EXTRA_DATA")," - The IBFT 2.0 genesis file includes the ",(0,r.kt)("inlineCode",{parentName:"p"},"IBFT_EXTRA_DATA")," type in the ",(0,r.kt)("a",{parentName:"p",href:"/23.7.3/private-networks/how-to/configure/consensus/ibft#extra-data"},(0,r.kt)("inlineCode",{parentName:"a"},"extraData"))," property.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"QBFT_EXTRA_DATA")," - The QBFT genesis file includes the ",(0,r.kt)("inlineCode",{parentName:"p"},"QBFT_EXTRA_DATA")," type in the ",(0,r.kt)("a",{parentName:"p",href:"/23.7.3/private-networks/how-to/configure/consensus/qbft#extra-data"},(0,r.kt)("inlineCode",{parentName:"a"},"extraData"))," property."))),(0,r.kt)("h2",{id:"ibft-20-extra-data"},"IBFT 2.0 extra data"),(0,r.kt)("p",null,"To generate the RLP encoded ",(0,r.kt)("inlineCode",{parentName:"p"},"extraData")," string, specify a JSON input that is an array of validator addresses in ascending order."),(0,r.kt)("admonition",{title:"JSON Schema for IBFT_EXTRA_DATA",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Use the following JSON Schema to validate that your JSON data is well formed. To validate your JSON content, use an online validation tool, such as ",(0,r.kt)("a",{parentName:"p",href:"https://www.jsonschemavalidator.net/"},"JSON Schema Validator"),"."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "$id": "http://org.hyperledger.besu/cli_rlp_ibft_extra_data.json",\n  "type": "array",\n  "definitions": {},\n  "title": "IBFT extra data",\n  "description": "JSON format used as input to generate an IBFT extra data RLP string",\n  "items": {\n    "$id": "#/address",\n    "type": "string",\n    "title": "Validator address",\n    "description": "The validator node address",\n    "default": "",\n    "examples": [\n      "be068f726a13c8d46c44be6ce9d275600e1735a4",\n      "5ff6f4b66a46a2b2310a6f3a93aaddc0d9a1c193"\n    ],\n    "pattern": "^([0-9a-f]{40})$"\n  }\n}\n')),(0,r.kt)("p",{parentName:"admonition"},"Example IBFT_EXTRA_DATA encoding"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"JSON input",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  "be068f726a13c8d46c44be6ce9d275600e1735a4",\n  "5ff6f4b66a46a2b2310a6f3a93aaddc0d9a1c193"\n]\n'))),(0,r.kt)(i.Z,{label:"RLP output",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"0xf853a00000000000000000000000000000000000000000000000000000000000000000ea94be068f726a13c8d46c44be6ce9d275600e1735a4945ff6f4b66a46a2b2310a6f3a93aaddc0d9a1c193808400000000c0\n"))))))}m.isMDXComponent=!0}}]);