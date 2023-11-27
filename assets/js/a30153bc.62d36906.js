"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[782],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,g=c["".concat(p,".").concat(u)]||c[u]||d[u]||i;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5485:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={title:"Name Change Types & Entities",sidebar_position:1},l="Name Change Types & Entities",o={unversionedId:"names-api/name-type-definitions",id:"names-api/name-type-definitions",title:"Name Change Types & Entities",description:"(Enum) Name Change Status",source:"@site/docs/names-api/name-type-definitions.md",sourceDirName:"names-api",slug:"/names-api/name-type-definitions",permalink:"/names-api/name-type-definitions",draft:!1,editUrl:"https://github.com/wise-old-man/wise-old-man/tree/master/docs/docs/names-api/name-type-definitions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Name Change Types & Entities",sidebar_position:1},sidebar:"sidebar",previous:{title:"Name Changes API",permalink:"/category/name-changes-api"},next:{title:"Name Change Endpoints",permalink:"/names-api/name-endpoints"}},p={},s=[{value:"<code>(Enum)</code> Name Change Status",id:"enum-name-change-status",level:3},{value:"Name Change Review Context",id:"name-change-review-context",level:3},{value:"Denied Context",id:"denied-context",level:4},{value:"Skipped Context",id:"skipped-context",level:4},{value:"<code>(Object)</code> Name Change",id:"object-name-change",level:3}],m={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"name-change-types--entities"},"Name Change Types & Entities"),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"enum-name-change-status"},(0,r.kt)("inlineCode",{parentName:"h3"},"(Enum)")," Name Change Status"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"'pending', 'approved', 'denied'\n")),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"name-change-review-context"},"Name Change Review Context"),(0,r.kt)("p",null,"This JSON object can have many shapes, depending on the context that lead to the name change being denied or skipped.\nThese are examples of all possible shapes:"),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"denied-context"},"Denied Context"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"{\n    reason: 'manual_review';\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"{\n    reason: 'old_stats_cannot_be_found';\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"{\n    reason: 'new_name_not_on_the_hiscores';\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"{\n    reason: 'negative_gains';\n    negativeGains: {\n        attack: -5867834,\n        hunter: -12355,\n        zulrah: -53\n    }\n}\n")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"skipped-context"},"Skipped Context"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"{\n    reason: 'transition_period_too_long';\n    maxHoursDiff: 504;\n    hoursDiff: 596;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"{\n    reason: 'excessive_gains';\n    ehpDiff: 407;\n    ehbDiff: 204;\n    hoursDiff: 596;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"{\n    reason: 'total_level_too_low';\n    minTotalLevel: 700;\n    totalLevel: 384;\n}\n")),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"object-name-change"},(0,r.kt)("inlineCode",{parentName:"h3"},"(Object)")," Name Change"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name change's unique ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"playerId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name change's parent player ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"oldName"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'The player\'s "previous" username.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"newName"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'The player\'s "new" username.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/names-api/name-type-definitions#enum-name-change-status"},"NameChangeStatus")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name change's status.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"reviewContext"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/names-api/name-type-definitions#name-change-review-context"},"ReviewContext"),"?"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name change's reason to have been denied or skipped during auto-review.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"resolvedAt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"date?"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The date at which the name change has been approved/denied.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"updatedAt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"date"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The date at which the name change was last modified.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"createdAt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"date"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The date at which the name change was submitted.")))),(0,r.kt)("br",null))}d.isMDXComponent=!0}}]);