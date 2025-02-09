"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[49120],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),b=a,y=c["".concat(s,".").concat(b)]||c[b]||k[b]||l;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},39113:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const l={title:"Flask Web\u5f00\u53d1\uff1a\u57fa\u4e8ePython\u7684Web\u5e94\u7528\u5f00\u53d1\u5b9e\u6218\uff08\u7b2c2\u7248\uff09",description:"\u672c\u4e66\u5171\u5206\u4e09\u90e8\u5206\uff0c\u5168\u9762\u4ecb\u7ecd\u5982\u4f55\u57fa\u4e8ePython\u5fae\u6846\u67b6Flask\u8fdb\u884cWeb\u5f00\u53d1\u3002\u7b2c\u4e00\u90e8\u5206\u662fFlask\u7b80\u4ecb\uff0c\u4ecb\u7ecd\u4f7f\u7528Flask\u6846\u67b6\u53ca\u6269\u5c55\u5f00\u53d1Web\u7a0b\u5e8f\u7684\u5fc5\u5907\u57fa\u7840\u77e5\u8bc6\u3002\u7b2c\u4e8c\u90e8\u5206\u5219\u7ed9\u51fa\u4e00\u4e2a\u5b9e\u4f8b\uff0c\u771f\u6b63\u5e26\u9886\u5927\u5bb6\u4e00\u6b65\u6b65\u5f00\u53d1\u5b8c\u6574\u7684\u535a\u5ba2\u548c\u793e\u4ea4\u5e94\u7528Flasky\uff0c\u4ece\u800c\u5c06\u524d\u8ff0\u77e5\u8bc6\u878d",keywords:["Flask Web\u5f00\u53d1\uff1a\u57fa\u4e8ePython\u7684Web\u5e94\u7528\u5f00\u53d1\u5b9e\u6218\uff08\u7b2c2\u7248\uff09","\u8ba1\u7b97\u673a"],tags:["\u9605\u8bfb"],author:"7Wate",date:new Date("2023-07-17T00:00:00.000Z")},o=void 0,i={unversionedId:"\u9605\u8bfb/\u8ba1\u7b97\u673a/Flask Web\u5f00\u53d1\uff1a\u57fa\u4e8ePython\u7684Web\u5e94\u7528\u5f00\u53d1\u5b9e\u6218\uff08\u7b2c2\u7248\uff09",id:"\u9605\u8bfb/\u8ba1\u7b97\u673a/Flask Web\u5f00\u53d1\uff1a\u57fa\u4e8ePython\u7684Web\u5e94\u7528\u5f00\u53d1\u5b9e\u6218\uff08\u7b2c2\u7248\uff09",title:"Flask Web\u5f00\u53d1\uff1a\u57fa\u4e8ePython\u7684Web\u5e94\u7528\u5f00\u53d1\u5b9e\u6218\uff08\u7b2c2\u7248\uff09",description:"\u672c\u4e66\u5171\u5206\u4e09\u90e8\u5206\uff0c\u5168\u9762\u4ecb\u7ecd\u5982\u4f55\u57fa\u4e8ePython\u5fae\u6846\u67b6Flask\u8fdb\u884cWeb\u5f00\u53d1\u3002\u7b2c\u4e00\u90e8\u5206\u662fFlask\u7b80\u4ecb\uff0c\u4ecb\u7ecd\u4f7f\u7528Flask\u6846\u67b6\u53ca\u6269\u5c55\u5f00\u53d1Web\u7a0b\u5e8f\u7684\u5fc5\u5907\u57fa\u7840\u77e5\u8bc6\u3002\u7b2c\u4e8c\u90e8\u5206\u5219\u7ed9\u51fa\u4e00\u4e2a\u5b9e\u4f8b\uff0c\u771f\u6b63\u5e26\u9886\u5927\u5bb6\u4e00\u6b65\u6b65\u5f00\u53d1\u5b8c\u6574\u7684\u535a\u5ba2\u548c\u793e\u4ea4\u5e94\u7528Flasky\uff0c\u4ece\u800c\u5c06\u524d\u8ff0\u77e5\u8bc6\u878d",source:"@site/life/\u9605\u8bfb/\u8ba1\u7b97\u673a/Flask Web\u5f00\u53d1\uff1a\u57fa\u4e8ePython\u7684Web\u5e94\u7528\u5f00\u53d1\u5b9e\u6218\uff08\u7b2c2\u7248\uff09.md",sourceDirName:"\u9605\u8bfb/\u8ba1\u7b97\u673a",slug:"/\u9605\u8bfb/\u8ba1\u7b97\u673a/Flask Web\u5f00\u53d1\uff1a\u57fa\u4e8ePython\u7684Web\u5e94\u7528\u5f00\u53d1\u5b9e\u6218\uff08\u7b2c2\u7248\uff09",permalink:"/life/\u9605\u8bfb/\u8ba1\u7b97\u673a/Flask Web\u5f00\u53d1\uff1a\u57fa\u4e8ePython\u7684Web\u5e94\u7528\u5f00\u53d1\u5b9e\u6218\uff08\u7b2c2\u7248\uff09",draft:!1,editUrl:"https://git.7wate.org/zhouzhongping/wiki/src/branch/master/life/\u9605\u8bfb/\u8ba1\u7b97\u673a/Flask Web\u5f00\u53d1\uff1a\u57fa\u4e8ePython\u7684Web\u5e94\u7528\u5f00\u53d1\u5b9e\u6218\uff08\u7b2c2\u7248\uff09.md",tags:[{label:"\u9605\u8bfb",permalink:"/life/tags/\u9605\u8bfb"}],version:"current",lastUpdatedBy:"7Wate",lastUpdatedAt:1689565719,formattedLastUpdatedAt:"2023\u5e747\u670817\u65e5",frontMatter:{title:"Flask Web\u5f00\u53d1\uff1a\u57fa\u4e8ePython\u7684Web\u5e94\u7528\u5f00\u53d1\u5b9e\u6218\uff08\u7b2c2\u7248\uff09",description:"\u672c\u4e66\u5171\u5206\u4e09\u90e8\u5206\uff0c\u5168\u9762\u4ecb\u7ecd\u5982\u4f55\u57fa\u4e8ePython\u5fae\u6846\u67b6Flask\u8fdb\u884cWeb\u5f00\u53d1\u3002\u7b2c\u4e00\u90e8\u5206\u662fFlask\u7b80\u4ecb\uff0c\u4ecb\u7ecd\u4f7f\u7528Flask\u6846\u67b6\u53ca\u6269\u5c55\u5f00\u53d1Web\u7a0b\u5e8f\u7684\u5fc5\u5907\u57fa\u7840\u77e5\u8bc6\u3002\u7b2c\u4e8c\u90e8\u5206\u5219\u7ed9\u51fa\u4e00\u4e2a\u5b9e\u4f8b\uff0c\u771f\u6b63\u5e26\u9886\u5927\u5bb6\u4e00\u6b65\u6b65\u5f00\u53d1\u5b8c\u6574\u7684\u535a\u5ba2\u548c\u793e\u4ea4\u5e94\u7528Flasky\uff0c\u4ece\u800c\u5c06\u524d\u8ff0\u77e5\u8bc6\u878d",keywords:["Flask Web\u5f00\u53d1\uff1a\u57fa\u4e8ePython\u7684Web\u5e94\u7528\u5f00\u53d1\u5b9e\u6218\uff08\u7b2c2\u7248\uff09","\u8ba1\u7b97\u673a"],tags:["\u9605\u8bfb"],author:"7Wate",date:"2023-07-17T00:00:00.000Z"},sidebar:"tutorialSidebar",previous:{title:"\u6c5f\u6e56\u4e1b\u8c08\uff08\u6ce8\u97f3\u6ce8\u91ca\u63d2\u56fe\u672c\uff09",permalink:"/life/\u9605\u8bfb/\u827a\u672f/\u6c5f\u6e56\u4e1b\u8c08\uff08\u6ce8\u97f3\u6ce8\u91ca\u63d2\u56fe\u672c\uff09"},next:{title:"Linux\u662f\u600e\u6837\u5de5\u4f5c\u7684",permalink:"/life/\u9605\u8bfb/\u8ba1\u7b97\u673a/Linux\u662f\u600e\u6837\u5de5\u4f5c\u7684"}},s={},u=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u5212\u7ebf",id:"\u5212\u7ebf",level:2},{value:"\u7b14\u8bb0",id:"\u7b14\u8bb0",level:2},{value:"\u4e66\u8bc4",id:"\u4e66\u8bc4",level:2},{value:"\u70b9\u8bc4",id:"\u70b9\u8bc4",level:2}],p={toc:u};function k(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4e66\u540d"),"\uff1a\u300aFlask Web\u5f00\u53d1\uff1a\u57fa\u4e8ePython\u7684Web\u5e94\u7528\u5f00\u53d1\u5b9e\u6218\uff08\u7b2c2\u7248\uff09\u300b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4f5c\u8005"),"\uff1a \u7c73\u683c\u5c14\xb7\u683c\u6797\u8d1d\u683c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5206\u7c7b"),"\uff1a \u8ba1\u7b97\u673a-\u7f16\u7a0b\u8bbe\u8ba1"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ISBN"),"\uff1a9787115489456"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u51fa\u7248\u793e"),"\uff1a\u4eba\u6c11\u90ae\u7535\u51fa\u7248\u793e")),(0,a.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.kt)("p",null,"\u672c\u4e66\u5171\u5206\u4e09\u90e8\u5206\uff0c\u5168\u9762\u4ecb\u7ecd\u5982\u4f55\u57fa\u4e8ePython\u5fae\u6846\u67b6Flask\u8fdb\u884cWeb\u5f00\u53d1\u3002\u7b2c\u4e00\u90e8\u5206\u662fFlask\u7b80\u4ecb\uff0c\u4ecb\u7ecd\u4f7f\u7528Flask\u6846\u67b6\u53ca\u6269\u5c55\u5f00\u53d1Web\u7a0b\u5e8f\u7684\u5fc5\u5907\u57fa\u7840\u77e5\u8bc6\u3002\u7b2c\u4e8c\u90e8\u5206\u5219\u7ed9\u51fa\u4e00\u4e2a\u5b9e\u4f8b\uff0c\u771f\u6b63\u5e26\u9886\u5927\u5bb6\u4e00\u6b65\u6b65\u5f00\u53d1\u5b8c\u6574\u7684\u535a\u5ba2\u548c\u793e\u4ea4\u5e94\u7528Flasky\uff0c\u4ece\u800c\u5c06\u524d\u8ff0\u77e5\u8bc6\u878d\u4f1a\u8d2f\u901a\uff0c\u4ed8\u8bf8\u5b9e\u8df5\u3002\u7b2c\u4e09\u90e8\u5206\u4ecb\u7ecd\u4e86\u53d1\u5e03\u5e94\u7528\u4e4b\u524d\u5fc5\u987b\u8003\u8651\u7684\u4e8b\u9879\uff0c\u5982\u5355\u5143\u6d4b\u8bd5\u7b56\u7565\u3001\u6027\u80fd\u5206\u6790\u6280\u672f\u3001Flask\u7a0b\u5e8f\u7684\u90e8\u7f72\u65b9\u5f0f\u7b49\u3002\u7b2c2\u7248\u9488\u5bf9Python 3.6\u5168\u9762\u4fee\u8ba2\u3002"),(0,a.kt)("h2",{id:"\u5212\u7ebf"},"\u5212\u7ebf"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Flask\u81ea\u5f00\u53d1\u4f0a\u59cb\u5c31\u88ab\u8bbe\u8ba1\u4e3a\u53ef\u6269\u5c55\u7684\u6846\u67b6\uff0c\u5b83\u5177\u6709\u4e00\u4e2a\u5305\u542b\u57fa\u672c\u670d\u52a1\u7684\u5f3a\u5065\u6838\u5fc3\uff0c\u5176\u4ed6\u529f\u80fd\u5219\u53ef\u901a\u8fc7\u6269\u5c55\u5b9e\u73b0 ")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8fd9\u4e24\u4e2a\u8fc7\u7a0b\u5206\u522b\u79f0\u4e3a\u4e1a\u52a1\u903b\u8f91\u548c\u8868\u73b0\u903b\u8f91\u3002 ")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e0d\u8fc7\u8fd1\u5e74\u6765\u6587\u6863\u6570\u636e\u5e93\u548c\u952e\u2013\u503c\u5bf9\u6570\u636e\u5e93\u6210\u4e86\u6d41\u884c\u7684\u66ff\u4ee3\u9009\u62e9\uff0c\u8fd9\u4e24\u79cd\u6570\u636e\u5e93\u5408\u79f0NoSQL\u6570\u636e\u5e93\u3002 ")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NoSQL\u6570\u636e\u5e93\u4e00\u822c\u4f7f\u7528\u96c6\u5408\u4ee3\u66ff\u8868\uff0c\u4f7f\u7528\u6587\u6863\u4ee3\u66ff\u8bb0\u5f55 ")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u9009\u62e9\u6570\u636e\u5e93\u6846\u67b6\u65f6\uff0c\u4e0d\u4e00\u5b9a\u975e\u5f97\u9009\u62e9\u5df2\u7ecf\u96c6\u6210\u4e86Flask\u7684\u6846\u67b6\uff0c\u4f46\u9009\u62e9\u8fd9\u6837\u7684\u6846\u67b6\u53ef\u4ee5\u8282\u7701\u7f16\u5199\u96c6\u6210\u4ee3\u7801\u7684\u65f6\u95f4\u3002\u4f7f\u7528\u96c6\u6210\u4e86Flask\u7684\u6846\u67b6\u53ef\u4ee5\u7b80\u5316\u914d\u7f6e\u548c\u64cd\u4f5c\uff0c\u6240\u4ee5\u4e13\u95e8\u4e3aFlask\u5f00\u53d1\u7684\u6269\u5c55\u662f\u4f60\u7684\u9996\u9009\u3002")),(0,a.kt)("h2",{id:"\u7b14\u8bb0"},"\u7b14\u8bb0"),(0,a.kt)("h2",{id:"\u4e66\u8bc4"},"\u4e66\u8bc4"),(0,a.kt)("h2",{id:"\u70b9\u8bc4"},"\u70b9\u8bc4"))}k.isMDXComponent=!0}}]);