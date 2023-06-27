"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[45182],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=p(a),m=n,b=k["".concat(s,".").concat(m)]||k[m]||u[m]||o;return a?r.createElement(b,l(l({ref:t},c),{},{components:a})):r.createElement(b,l({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[k]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>T});var r=a(87462),n=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),p=a(67392),c=a(50012);function k(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function u(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??k(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function d(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=u(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,p]=b({queryString:a,groupId:r}),[k,d]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),f=(()=>{const e=s??k;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),d(e)}),[p,d,o]),tabValues:o}}var f=a(72389);const y="tabList__CuJ",h="tabItem_LNqP";function g(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:k}=(0,l.o5)(),u=e=>{const t=e.currentTarget,a=c.indexOf(t),r=p[a].value;r!==i&&(k(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:u},l,{className:(0,o.Z)("tabs__item",h,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=d(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",y)},n.createElement(g,(0,r.Z)({},e,t)),n.createElement(v,(0,r.Z)({},e,t)))}function T(e){const t=(0,f.Z)();return n.createElement(N,(0,r.Z)({key:String(t)},e))}},91774:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>k});var r=a(87462),n=(a(67294),a(3905)),o=a(74866),l=a(85162);const i={title:"Block proposal permissioning",description:"Block proposal permissioning",sidebar_position:7,tags:["private networks"]},s="Block proposal permissioning",p={unversionedId:"private-networks/how-to/configure/block-proposal-permissioning",id:"private-networks/how-to/configure/block-proposal-permissioning",title:"Block proposal permissioning",description:"Block proposal permissioning",source:"@site/docs/private-networks/how-to/configure/block-proposal-permissioning.md",sourceDirName:"private-networks/how-to/configure",slug:"/private-networks/how-to/configure/block-proposal-permissioning",permalink:"/development/private-networks/how-to/configure/block-proposal-permissioning",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/how-to/configure/block-proposal-permissioning.md",tags:[{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1687906161,formattedLastUpdatedAt:"Jun 27, 2023",sidebarPosition:7,frontMatter:{title:"Block proposal permissioning",description:"Block proposal permissioning",sidebar_position:7,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Peer-to-peer TLS",permalink:"/development/private-networks/how-to/configure/tls/p2p"},next:{title:"Alternative elliptic curves",permalink:"/development/private-networks/how-to/configure/curves"}},c={},k=[{value:"Configure block proposal permissioning",id:"configure-block-proposal-permissioning",level:2},{value:"Command line options",id:"command-line-options",level:2},{value:"<code>Xpki-block-creation-crl-file</code>",id:"xpki-block-creation-crl-file",level:3},{value:"<code>Xpki-block-creation-enabled</code>",id:"xpki-block-creation-enabled",level:3},{value:"<code>Xpki-block-creation-keystore-certificate-alias</code>",id:"xpki-block-creation-keystore-certificate-alias",level:3},{value:"<code>Xpki-block-creation-keystore-file</code>",id:"xpki-block-creation-keystore-file",level:3},{value:"<code>Xpki-block-creation-keystore-password-file</code>",id:"xpki-block-creation-keystore-password-file",level:3},{value:"<code>Xpki-block-creation-keystore-type</code>",id:"xpki-block-creation-keystore-type",level:3},{value:"<code>Xpki-block-creation-truststore-file</code>",id:"xpki-block-creation-truststore-file",level:3},{value:"<code>Xpki-block-creation-truststore-password-file</code>",id:"xpki-block-creation-truststore-password-file",level:3},{value:"<code>Xpki-block-creation-truststore-type</code>",id:"xpki-block-creation-truststore-type",level:3}],u={toc:k};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"block-proposal-permissioning"},"Block proposal permissioning"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Only private networks using the ",(0,n.kt)("a",{parentName:"p",href:"/development/private-networks/how-to/configure/consensus/qbft"},"QBFT consensus protocol")," support block proposal permissioning."),(0,n.kt)("p",{parentName:"admonition"},"Block proposal permissioning is an early access feature, and functionality and options may be updated between releases.")),(0,n.kt)("p",null,"You can configure ",(0,n.kt)("a",{parentName:"p",href:"/development/private-networks/concepts/pki#block-proposal-permissioning"},"block proposal permissioning")," to ensure only authorized validator nodes can propose blocks in the network."),(0,n.kt)("p",null,"Use certificates issued by a trusted authority to ensure validators are authorized to propose blocks."),(0,n.kt)("h2",{id:"configure-block-proposal-permissioning"},"Configure block proposal permissioning"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Prerequisites"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A configured network. For example, ",(0,n.kt)("a",{parentName:"li",href:"/development/private-networks/tutorials/qbft"},"see steps 1 to 5 in the QBFT tutorial"),"."),(0,n.kt)("li",{parentName:"ul"},"A keystore containing the certificate and key for each network node."),(0,n.kt)("li",{parentName:"ul"},"A truststore containing all the trusted certificates for the network.")),(0,n.kt)("p",null,"Start Besu and include the following command line options on the required nodes:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'besu --Xpki-block-creation-enabled=true \\\n--Xpki-block-creation-keystore-type="pkcs12" \\\n--Xpki-block-creation-keystore-file="keystore" \\\n--Xpki-block-creation-keystore-password-file="keystore.password" \\\n--Xpki-block-creation-crl-file="crl2.pem" \\\n--Xpki-block-creation-keystore-certificate-alias="validator" \\\n--Xpki-block-creation-truststore-type="pkcs12" \\\n--Xpki-block-creation-truststore-file="truststore" \\\n--Xpki-block-creation-truststore-password-file="truststore.password"\n')),(0,n.kt)("p",null,"In the command line:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Enable block proposal permissioning using ",(0,n.kt)("a",{parentName:"li",href:"#xpki-block-creation-enabled"},(0,n.kt)("inlineCode",{parentName:"a"},"--Xpki-block-creation-enabled=true")),"."),(0,n.kt)("li",{parentName:"ul"},"Specify the keystore type and keystore file using ",(0,n.kt)("a",{parentName:"li",href:"#xpki-block-creation-keystore-type"},(0,n.kt)("inlineCode",{parentName:"a"},"Xpki-block-creation-keystore-type"))," and ",(0,n.kt)("a",{parentName:"li",href:"#xpki-block-creation-keystore-file"},(0,n.kt)("inlineCode",{parentName:"a"},"--Xpki-block-creation-keystore-file")),"."),(0,n.kt)("li",{parentName:"ul"},"Specify the text file containing the password to unlock the keystore file using ",(0,n.kt)("a",{parentName:"li",href:"#xpki-block-creation-keystore-password-file"},(0,n.kt)("inlineCode",{parentName:"a"},"Xpki-block-creation-keystore-password-file")),"."),(0,n.kt)("li",{parentName:"ul"},"Specify the optional ",(0,n.kt)("a",{parentName:"li",href:"https://www.securew2.com/blog/certificate-revocation-crl-explained"},"certificate revocation list (CRL)")," file using ",(0,n.kt)("a",{parentName:"li",href:"#xpki-block-creation-crl-file"},(0,n.kt)("inlineCode",{parentName:"a"},"Xpki-block-creation-crl-file")),"."),(0,n.kt)("li",{parentName:"ul"},"Specify the alias of the certificate to be included in blocks proposed by this validator using ",(0,n.kt)("a",{parentName:"li",href:"#xpki-block-creation-keystore-certificate-alias"},(0,n.kt)("inlineCode",{parentName:"a"},"Xpki-block-creation-keystore-certificate-alias")),"."),(0,n.kt)("li",{parentName:"ul"},"Specify the truststore type and truststore file using ",(0,n.kt)("a",{parentName:"li",href:"#xpki-block-creation-truststore-type"},(0,n.kt)("inlineCode",{parentName:"a"},"Xpki-block-creation-truststore-type"))," and ",(0,n.kt)("a",{parentName:"li",href:"#xpki-block-creation-truststore-file"},(0,n.kt)("inlineCode",{parentName:"a"},"Xpki-block-creation-truststore-file")),"."),(0,n.kt)("li",{parentName:"ul"},"Specify the text file containing the password to unlock the truststore file using ",(0,n.kt)("a",{parentName:"li",href:"#xpki-block-creation-truststore-password-file"},(0,n.kt)("inlineCode",{parentName:"a"},"Xpki-block-creation-truststore-password-file")),".")),(0,n.kt)("h2",{id:"command-line-options"},"Command line options"),(0,n.kt)("h3",{id:"xpki-block-creation-crl-file"},(0,n.kt)("inlineCode",{parentName:"h3"},"Xpki-block-creation-crl-file")),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--Xpki-block-creation-crl-file=<FILE>\n"))),(0,n.kt)(l.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--Xpki-block-creation-crl-file=/home/cert/cert.crl.pem\n"))),(0,n.kt)(l.Z,{label:"Environment variable",value:"tab3",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"BESU_XPKI_BLOCK_CREATION_CRL_FILE=/home/cert/cert.crl.pem\n")))),(0,n.kt)("p",null,"Path to the optional certificate revocation list (CRL) file."),(0,n.kt)("h3",{id:"xpki-block-creation-enabled"},(0,n.kt)("inlineCode",{parentName:"h3"},"Xpki-block-creation-enabled")),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--Xpki-block-creation-enabled[=<true|false>]\n"))),(0,n.kt)(l.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--Xpki-block-creation-enabled=true\n"))),(0,n.kt)(l.Z,{label:"Environment variable",value:"tab3",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"BESU_XPKI_BLOCK_CREATION_ENABLED=true\n")))),(0,n.kt)("p",null,"Enable PKI integration. The default is ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,n.kt)("h3",{id:"xpki-block-creation-keystore-certificate-alias"},(0,n.kt)("inlineCode",{parentName:"h3"},"Xpki-block-creation-keystore-certificate-alias")),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--Xpki-block-creation-keystore-certificate-alias=<NAME>\n"))),(0,n.kt)(l.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--Xpki-block-creation-keystore-certificate-alias=validatorA\n"))),(0,n.kt)(l.Z,{label:"Environment variable",value:"tab3",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"BESU_XPKI_BLOCK_CREATION_KEYSTORE_CERTIFICATE_ALIAS=validatorA\n")))),(0,n.kt)("p",null,"Alias of the certificate to be included in the blocks proposed by this validator. The default is ",(0,n.kt)("inlineCode",{parentName:"p"},"validator"),"."),(0,n.kt)("h3",{id:"xpki-block-creation-keystore-file"},(0,n.kt)("inlineCode",{parentName:"h3"},"Xpki-block-creation-keystore-file")),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--Xpki-block-creation-keystore-file=<FILE>\n"))),(0,n.kt)(l.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--Xpki-block-creation-keystore-file=/home/cert/keystore.jks\n"))),(0,n.kt)(l.Z,{label:"Environment variable",value:"tab3",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"BESU_XPKI_BLOCK_CREATION_KEYSTORE_FILE=/home/cert/keystore.jks\n")))),(0,n.kt)("p",null,"Keystore file containing the key and certificate for PKI block creation."),(0,n.kt)("h3",{id:"xpki-block-creation-keystore-password-file"},(0,n.kt)("inlineCode",{parentName:"h3"},"Xpki-block-creation-keystore-password-file")),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--Xpki-block-creation-keystore-password-file=<FILE>\n"))),(0,n.kt)(l.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--Xpki-block-creation-keystore-password-file=/home/cert/password.txt\n"))),(0,n.kt)(l.Z,{label:"Environment variable",value:"tab3",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"BESU_XPKI_BLOCK_CREATION_KEYSTORE_PASSWORD-FILE=/home/cert/password.txt\n")))),(0,n.kt)("p",null,"Text file containing the password to unlock the keystore file."),(0,n.kt)("h3",{id:"xpki-block-creation-keystore-type"},(0,n.kt)("inlineCode",{parentName:"h3"},"Xpki-block-creation-keystore-type")),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--Xpki-block-creation-keystore-type=<TYPE>\n"))),(0,n.kt)(l.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--Xpki-block-creation-keystore-type=JKS\n"))),(0,n.kt)(l.Z,{label:"Environment variable",value:"tab3",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"BESU_XPKI_BLOCK_CREATION_KEYSTORE_TYPE=JKS\n")))),(0,n.kt)("p",null,"PKI keystore type. Valid options are ",(0,n.kt)("inlineCode",{parentName:"p"},"JKS")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"PKCS12"),". The default is ",(0,n.kt)("inlineCode",{parentName:"p"},"JKS"),"."),(0,n.kt)("h3",{id:"xpki-block-creation-truststore-file"},(0,n.kt)("inlineCode",{parentName:"h3"},"Xpki-block-creation-truststore-file")),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--Xpki-block-creation-truststore-file=<FILE>\n"))),(0,n.kt)(l.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--Xpki-block-creation-truststore-file=/home/cert/truststore.jks\n"))),(0,n.kt)(l.Z,{label:"Environment variable",value:"tab3",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"BESU_XPKI_BLOCK_CREATION_TRUSTSTORE_FILE=/home/cert/truststore.jks\n")))),(0,n.kt)("p",null,"Truststore containing the trusted certificates for PKI block creation."),(0,n.kt)("h3",{id:"xpki-block-creation-truststore-password-file"},(0,n.kt)("inlineCode",{parentName:"h3"},"Xpki-block-creation-truststore-password-file")),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--Xpki-block-creation-truststore-password-file=<FILE>\n"))),(0,n.kt)(l.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--Xpki-block-creation-truststore-password-file=/home/cert/password.txt\n"))),(0,n.kt)(l.Z,{label:"Environment variable",value:"tab3",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"BESU_XPKI_BLOCK_CREATION_TRUSTSTORE_PASSWORD_FILE=/home/cert/password.txt\n")))),(0,n.kt)("p",null,"Text file containing the password to unlock the truststore file."),(0,n.kt)("h3",{id:"xpki-block-creation-truststore-type"},(0,n.kt)("inlineCode",{parentName:"h3"},"Xpki-block-creation-truststore-type")),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--Xpki-block-creation-truststore-type=<TYPE>\n"))),(0,n.kt)(l.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--Xpki-block-creation-truststore-type=JKS\n"))),(0,n.kt)(l.Z,{label:"Environment variable",value:"tab3",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"BESU_XPKI_BLOCK_CREATION_TRUSTSTORE_TYPE=JKS\n")))),(0,n.kt)("p",null,"PKI truststore type. Valid options are ",(0,n.kt)("inlineCode",{parentName:"p"},"JKS")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"PKCS12"),". The default is ",(0,n.kt)("inlineCode",{parentName:"p"},"JKS"),"."))}m.isMDXComponent=!0}}]);