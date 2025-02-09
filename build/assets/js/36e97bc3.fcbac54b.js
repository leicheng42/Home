"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[51103],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,d=m["".concat(o,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(d,p(p({ref:t},c),{},{components:n})):r.createElement(d,p({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var s=2;s<i;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9094:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={id:"sftp \u547d\u4ee4",title:"sftp \u547d\u4ee4",sidebar_position:9,data:"2022\u5e744\u670813\u65e5"},p=void 0,l={unversionedId:"OpenSSH/sftp \u547d\u4ee4",id:"OpenSSH/sftp \u547d\u4ee4",title:"sftp \u547d\u4ee4",description:"sftp\u662f SSH \u63d0\u4f9b\u7684\u4e00\u4e2a\u5ba2\u6237\u7aef\u5e94\u7528\u7a0b\u5e8f\uff0c\u4e3b\u8981\u7528\u6765\u5b89\u5168\u5730\u8bbf\u95ee FTP\u3002\u56e0\u4e3a FTP \u662f\u4e0d\u52a0\u5bc6\u534f\u8bae\uff0c\u5f88\u4e0d\u5b89\u5168\uff0csftp\u5c31\u76f8\u5f53\u4e8e\u5c06 FTP \u653e\u5165\u4e86 SSH\u3002",source:"@site/docs/OpenSSH/sftp \u547d\u4ee4.md",sourceDirName:"OpenSSH",slug:"/OpenSSH/sftp \u547d\u4ee4",permalink:"/docs/OpenSSH/sftp \u547d\u4ee4",draft:!1,editUrl:"https://github.com/leicheng42/Home/tree/main/docs/OpenSSH/sftp \u547d\u4ee4.md",tags:[],version:"current",lastUpdatedBy:"7Wate",lastUpdatedAt:1687924611,formattedLastUpdatedAt:"2023\u5e746\u670828\u65e5",sidebarPosition:9,frontMatter:{id:"sftp \u547d\u4ee4",title:"sftp \u547d\u4ee4",sidebar_position:9,data:"2022\u5e744\u670813\u65e5"},sidebar:"tutorialSidebar",previous:{title:"rsync \u547d\u4ee4",permalink:"/docs/OpenSSH/rsync \u547d\u4ee4"}},o={},s=[],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sftp"),"\u662f SSH \u63d0\u4f9b\u7684\u4e00\u4e2a\u5ba2\u6237\u7aef\u5e94\u7528\u7a0b\u5e8f\uff0c\u4e3b\u8981\u7528\u6765\u5b89\u5168\u5730\u8bbf\u95ee FTP\u3002\u56e0\u4e3a FTP \u662f\u4e0d\u52a0\u5bc6\u534f\u8bae\uff0c\u5f88\u4e0d\u5b89\u5168\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"sftp"),"\u5c31\u76f8\u5f53\u4e8e\u5c06 FTP \u653e\u5165\u4e86 SSH\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u547d\u4ee4\u8fde\u63a5 FTP \u4e3b\u673a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sftp username@hostname\n")),(0,a.kt)("p",null,"\u6267\u884c\u4e0a\u9762\u7684\u547d\u4ee4\uff0c\u4f1a\u8981\u6c42\u8f93\u5165 FTP \u7684\u5bc6\u7801\u3002\u5bc6\u7801\u9a8c\u8bc1\u6210\u529f\u4ee5\u540e\uff0c\u5c31\u4f1a\u51fa\u73b0 FTP \u7684\u63d0\u793a\u7b26",(0,a.kt)("inlineCode",{parentName:"p"},"sftp>"),"\uff0c\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ sftp USER@penguin.example.com\nUSER@penguin.example.com's password:\nConnected to penguin.example.com.\nsftp>\n")),(0,a.kt)("p",null,"FTP \u7684\u63d0\u793a\u7b26\u4e0b\u9762\uff0c\u5c31\u53ef\u4ee5\u8f93\u5165\u5404\u79cd FTP \u547d\u4ee4\u4e86\uff0c\u8fd9\u90e8\u5206\u5b8c\u5168\u8ddf\u4f20\u7edf\u7684 FTP \u7528\u6cd5\u5b8c\u5168\u4e00\u6837\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ls [directory]"),"\uff1a\u5217\u51fa\u4e00\u4e2a\u8fdc\u7a0b\u76ee\u5f55\u7684\u5185\u5bb9\u3002\u5982\u679c\u6ca1\u6709\u6307\u5b9a\u76ee\u6807\u76ee\u5f55\uff0c\u5219\u9ed8\u8ba4\u5217\u51fa\u5f53\u524d\u76ee\u5f55\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cd directory"),"\uff1a\u4ece\u5f53\u524d\u76ee\u5f55\u6539\u5230\u6307\u5b9a\u76ee\u5f55\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mkdir directory"),"\uff1a\u521b\u5efa\u4e00\u4e2a\u8fdc\u7a0b\u76ee\u5f55\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rmdir path"),"\uff1a\u5220\u9664\u4e00\u4e2a\u8fdc\u7a0b\u76ee\u5f55\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"put localfile [remotefile]"),"\uff1a\u672c\u5730\u6587\u4ef6\u4f20\u8f93\u5230\u8fdc\u7a0b\u4e3b\u673a\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"get remotefile [localfile]"),"\uff1a\u8fdc\u7a0b\u6587\u4ef6\u4f20\u8f93\u5230\u672c\u5730\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"help"),"\uff1a\u663e\u793a\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bye"),"\uff1a\u9000\u51fa sftp\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"quit"),"\uff1a\u9000\u51fa sftp\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"exit"),"\uff1a\u9000\u51fa sftp\u3002")))}u.isMDXComponent=!0}}]);