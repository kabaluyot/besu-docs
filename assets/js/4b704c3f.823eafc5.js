"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[71517],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),i=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=i(a),m=n,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return a?r.createElement(k,s(s({ref:t},u),{},{components:a})):r.createElement(k,s({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:n,s[1]=o;for(var i=2;i<l;i++)s[i]=a[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(67294),n=a(86010);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,s),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>T});var r=a(87462),n=a(67294),l=a(86010),s=a(12466),o=a(16550),p=a(91980),i=a(67392),u=a(50012);function c(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,p._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=d(e),[s,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[p,i]=k({queryString:a,groupId:r}),[c,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),f=(()=>{const e=p??c;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),i(e),b(e)}),[i,b,l]),tabValues:l}}var f=a(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:a,selectedValue:o,selectValue:p,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),r=i[a].value;r!==o&&(c(t),p(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},s,{className:(0,l.Z)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":o===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function g(e){const t=b(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",y.tabList)},n.createElement(h,(0,r.Z)({},e,t)),n.createElement(v,(0,r.Z)({},e,t)))}function T(e){const t=(0,f.Z)();return n.createElement(g,(0,r.Z)({key:String(t)},e))}},67015:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905)),l=a(74866),s=a(85162);const o={title:"Peer-to-peer TLS",sidebar_position:2,description:"Configure P2P TLS communication",tags:["private networks"]},p="Configure P2P TLS",i={unversionedId:"private-networks/how-to/configure/tls/p2p",id:"version-23.7.1/private-networks/how-to/configure/tls/p2p",title:"Peer-to-peer TLS",description:"Configure P2P TLS communication",source:"@site/versioned_docs/version-23.7.1/private-networks/how-to/configure/tls/p2p.md",sourceDirName:"private-networks/how-to/configure/tls",slug:"/private-networks/how-to/configure/tls/p2p",permalink:"/23.7.1/private-networks/how-to/configure/tls/p2p",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.1/private-networks/how-to/configure/tls/p2p.md",tags:[{label:"private networks",permalink:"/23.7.1/tags/private-networks"}],version:"23.7.1",lastUpdatedAt:1700670990,formattedLastUpdatedAt:"Nov 22, 2023",sidebarPosition:2,frontMatter:{title:"Peer-to-peer TLS",sidebar_position:2,description:"Configure P2P TLS communication",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Client and server TLS",permalink:"/23.7.1/private-networks/how-to/configure/tls/client-and-server"},next:{title:"Block proposal permissioning",permalink:"/23.7.1/private-networks/how-to/configure/block-proposal-permissioning"}},u={},c=[{value:"Configure P2P TLS",id:"configure-p2p-tls-1",level:2},{value:"Command line options",id:"command-line-options",level:2},{value:"<code>Xp2p-tls-crl-file</code>",id:"xp2p-tls-crl-file",level:3},{value:"<code>Xp2p-tls-enabled</code>",id:"xp2p-tls-enabled",level:3},{value:"<code>Xp2p-tls-keystore-file</code>",id:"xp2p-tls-keystore-file",level:3},{value:"<code>Xp2p-tls-keystore-password-file</code>",id:"xp2p-tls-keystore-password-file",level:3},{value:"<code>Xp2p-tls-keystore-type</code>",id:"xp2p-tls-keystore-type",level:3},{value:"<code>Xp2p-tls-truststore-file</code>",id:"xp2p-tls-truststore-file",level:3},{value:"<code>Xp2p-tls-truststore-password-file</code>",id:"xp2p-tls-truststore-password-file",level:3},{value:"<code>Xp2p-tls-truststore-type</code>",id:"xp2p-tls-truststore-type",level:3}],d={toc:c},m="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"configure-p2p-tls"},"Configure P2P TLS"),(0,n.kt)("p",null,"You can configure TLS to secure the P2P communication between nodes by ensuring only authorized nodes can communicate with each other. Use certificates issued by a trusted authority to connect authorized nodes in the network."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"P2P TLS is an early access feature, and functionality and options may be updated between releases.")),(0,n.kt)("p",null,"Besu supports PKCS11, PKCS12, and JKS keystore and truststore types for P2P TLS."),(0,n.kt)("h2",{id:"configure-p2p-tls-1"},"Configure P2P TLS"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Prerequisites"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A configured network. For example, ",(0,n.kt)("a",{parentName:"li",href:"/23.7.1/private-networks/tutorials/qbft"},"see steps 1 to 5 in the QBFT tutorial"),"."),(0,n.kt)("li",{parentName:"ul"},"Each node requires a keystore that contains the node's certificate and key."),(0,n.kt)("li",{parentName:"ul"},"A truststore containing all the trusted certificates for the network.")),(0,n.kt)("p",null,"Start Besu and include the following command line options on the required nodes:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'besu --Xp2p-tls-enabled=true \\\n--Xp2p-tls-keystore-type="PKCS12" \\\n--Xp2p-tls-keystore-file="keystore" \\\n--Xp2p-tls-keystore-password-file="keystore.password" \\\n--Xp2p-tls-crl-file="crl2.pem" \\\n--Xp2p-tls-truststore-type="JKS" \\\n--Xp2p-tls-truststore-file="truststore.jks" \\\n--Xp2p-tls-truststore-password-file="truststore_password.txt"\n')),(0,n.kt)("p",null,"In the command line:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Enable TLS for P2P communication using ",(0,n.kt)("a",{parentName:"li",href:"#xp2p-tls-enabled"},(0,n.kt)("inlineCode",{parentName:"a"},"--Xp2p-tls-enabled=true")),"."),(0,n.kt)("li",{parentName:"ul"},"Specify the keystore type and keystore file using ",(0,n.kt)("a",{parentName:"li",href:"#xp2p-tls-keystore-type"},(0,n.kt)("inlineCode",{parentName:"a"},"--Xp2p-tls-keystore-type"))," and ",(0,n.kt)("a",{parentName:"li",href:"#xp2p-tls-keystore-file"},(0,n.kt)("inlineCode",{parentName:"a"},"--Xp2p-tls-keystore-file")),"."),(0,n.kt)("li",{parentName:"ul"},"Specify the text file containing the password to unlock the keystore file using ",(0,n.kt)("a",{parentName:"li",href:"#xp2p-tls-keystore-password-file"},(0,n.kt)("inlineCode",{parentName:"a"},"--Xp2p-tls-keystore-password-file")),"."),(0,n.kt)("li",{parentName:"ul"},"Specify the optional ",(0,n.kt)("a",{parentName:"li",href:"https://www.securew2.com/blog/certificate-revocation-crl-explained"},"certificate revocation list (CRL)")," file using ",(0,n.kt)("a",{parentName:"li",href:"#xp2p-tls-crl-file"},(0,n.kt)("inlineCode",{parentName:"a"},"--Xp2p-tls-crl-file")),"."),(0,n.kt)("li",{parentName:"ul"},"Specify the truststore type and truststore file using ",(0,n.kt)("a",{parentName:"li",href:"#xp2p-tls-truststore-type"},(0,n.kt)("inlineCode",{parentName:"a"},"--Xp2p-tls-truststore-type"))," and ",(0,n.kt)("a",{parentName:"li",href:"#xp2p-tls-truststore-file"},(0,n.kt)("inlineCode",{parentName:"a"},"--Xp2p-tls-truststore-file")),"."),(0,n.kt)("li",{parentName:"ul"},"Specify the text file containing the password to unlock the truststore file using ",(0,n.kt)("a",{parentName:"li",href:"#xp2p-tls-keystore-password-file"},(0,n.kt)("inlineCode",{parentName:"a"},"--Xp2p-tls-truststore-password-file")),".")),(0,n.kt)("h2",{id:"command-line-options"},"Command line options"),(0,n.kt)("h3",{id:"xp2p-tls-crl-file"},(0,n.kt)("inlineCode",{parentName:"h3"},"Xp2p-tls-crl-file")),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--Xp2p-tls-crl-file=<FILE>\n"))),(0,n.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--Xp2p-tls-crl-file=/home/cert/cert.crl.pem\n"))),(0,n.kt)(s.Z,{label:"Environment variable",value:"tab3",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"BESU_XP2P_TLS_CRL_FILE=/home/cert/cert.crl.pem\n")))),(0,n.kt)("p",null,"Path to the optional certificate revocation list (CRL) file."),(0,n.kt)("h3",{id:"xp2p-tls-enabled"},(0,n.kt)("inlineCode",{parentName:"h3"},"Xp2p-tls-enabled")),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--Xp2p-tls-enabled[=<true|false>]\n"))),(0,n.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--Xp2p-tls-enabled=true\n"))),(0,n.kt)(s.Z,{label:"Environment variable",value:"tab3",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"BESU_XP2P_TLS_ENABLED=true\n")))),(0,n.kt)("p",null,"Enable TLS for P2P communication. The default is ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,n.kt)("h3",{id:"xp2p-tls-keystore-file"},(0,n.kt)("inlineCode",{parentName:"h3"},"Xp2p-tls-keystore-file")),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--Xp2p-tls-keystore-file=<FILE>\n"))),(0,n.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--Xp2p-tls-keystore-file=/home/cert/keystore.jks\n"))),(0,n.kt)(s.Z,{label:"Environment variable",value:"tab3",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"BESU_XP2P_TLS_KEYSTORE_FILE=/home/cert/keystore.jks\n")))),(0,n.kt)("p",null,"Keystore file containing the key and certificate to allow TLS for P2P communication."),(0,n.kt)("h3",{id:"xp2p-tls-keystore-password-file"},(0,n.kt)("inlineCode",{parentName:"h3"},"Xp2p-tls-keystore-password-file")),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--Xp2p-tls-keystore-password-file=<FILE>\n"))),(0,n.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--Xp2p-tls-keystore-password-file=/home/cert/password.txt\n"))),(0,n.kt)(s.Z,{label:"Environment variable",value:"tab3",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"BESU_XP2P_TLS_KEYSTORE_PASSWORD_FILE=/home/cert/password.txt\n")))),(0,n.kt)("p",null,"Text file containing the password to unlock the keystore file."),(0,n.kt)("h3",{id:"xp2p-tls-keystore-type"},(0,n.kt)("inlineCode",{parentName:"h3"},"Xp2p-tls-keystore-type")),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--Xp2p-tls-keystore-type=<TYPE>\n"))),(0,n.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--Xp2p-tls-keystore-type=JKS\n"))),(0,n.kt)(s.Z,{label:"Environment variable",value:"tab3",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"BESU_XP2P_TLS_KEYSTORE_TYPE=JKS\n")))),(0,n.kt)("p",null,"Keystore type that allows TLS for P2P communication. Valid options are ",(0,n.kt)("inlineCode",{parentName:"p"},"JKS"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"PKCS11"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"PKCS12"),". The default is ",(0,n.kt)("inlineCode",{parentName:"p"},"JKS"),"."),(0,n.kt)("h3",{id:"xp2p-tls-truststore-file"},(0,n.kt)("inlineCode",{parentName:"h3"},"Xp2p-tls-truststore-file")),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--Xp2p-tls-truststore-file=<FILE>\n"))),(0,n.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--Xp2p-tls-truststore-file=/home/cert/truststore.jks\n"))),(0,n.kt)(s.Z,{label:"Environment variable",value:"tab3",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"BESU_XP2P_TLS_TRUSTSTORE_FILE=/home/cert/truststore.jks\n")))),(0,n.kt)("p",null,"Truststore containing the trusted certificates that allows TLS for P2P communication."),(0,n.kt)("h3",{id:"xp2p-tls-truststore-password-file"},(0,n.kt)("inlineCode",{parentName:"h3"},"Xp2p-tls-truststore-password-file")),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--Xp2p-tls-truststore-password-file=<FILE>\n"))),(0,n.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--Xp2p-tls-truststore-password-file=/home/cert/password.txt\n"))),(0,n.kt)(s.Z,{label:"Environment variable",value:"tab3",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"BESU_XP2P_TLS_TRUSTSTORE_PASSWORD_FILE=/home/cert/password.txt\n")))),(0,n.kt)("p",null,"Text file containing the password to unlock the truststore file."),(0,n.kt)("h3",{id:"xp2p-tls-truststore-type"},(0,n.kt)("inlineCode",{parentName:"h3"},"Xp2p-tls-truststore-type")),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--Xp2p-tls-truststore-type=<TYPE>\n"))),(0,n.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--Xp2p-tls-truststore-type=JKS\n"))),(0,n.kt)(s.Z,{label:"Environment variable",value:"tab3",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"BESU_XP2P_TLS_TRUSTSTORE_TYPE=JKS\n")))),(0,n.kt)("p",null,"Truststore type. Valid options are ",(0,n.kt)("inlineCode",{parentName:"p"},"JKS"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"PKCS11"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"PKCS12"),". The default is ",(0,n.kt)("inlineCode",{parentName:"p"},"JKS"),"."))}k.isMDXComponent=!0}}]);