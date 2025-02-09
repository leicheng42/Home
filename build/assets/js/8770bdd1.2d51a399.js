"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[19619],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(r),d=a,f=s["".concat(u,".").concat(d)]||s[d]||y[d]||i;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},67575:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={title:"\u4ece0\u52301\uff1ajQuery\u5feb\u901f\u4e0a\u624b",description:"\u4f5c\u8005\u6839\u636e\u81ea\u5df1\u591a\u5e74\u7684\u524d\u540e\u7aef\u5f00\u53d1\u7ecf\u9a8c\uff0c\u7ad9\u5728\u5b8c\u5168\u96f6\u57fa\u7840\u8bfb\u8005\u7684\u89d2\u5ea6\uff0c\u57fa\u4e8ejQuery 1.12.x\u7248\u672c\uff0c\u8be6\u5c3d\u4ecb\u7ecd\u4e86jQuery\u7684\u57fa\u7840\u77e5\u8bc6\u53ca\u5f00\u53d1\u6280\u5de7\u3002 \u300a\u4ece0\u52301 jQuery\u5feb\u901f\u4e0a\u624b\u300b\u5206\u4e3a14\u7ae0\uff0c\u524d10\u7ae0\u4e3b\u8981\u4ecb\u7ecdjQuery\u7684\u57fa\u672c\u6280\u672f\uff0c\u5305\u62ec\u5e38\u7528\u9009\u62e9\u5668\u3001DOM\u64cd\u4f5c\u3001",keywords:["\u4ece0\u52301\uff1ajQuery\u5feb\u901f\u4e0a\u624b","\u8ba1\u7b97\u673a"],tags:["\u9605\u8bfb"],author:"7Wate",date:new Date("2023-07-17T00:00:00.000Z")},l=void 0,o={unversionedId:"\u9605\u8bfb/\u8ba1\u7b97\u673a/\u4ece0\u52301\uff1ajQuery\u5feb\u901f\u4e0a\u624b",id:"\u9605\u8bfb/\u8ba1\u7b97\u673a/\u4ece0\u52301\uff1ajQuery\u5feb\u901f\u4e0a\u624b",title:"\u4ece0\u52301\uff1ajQuery\u5feb\u901f\u4e0a\u624b",description:"\u4f5c\u8005\u6839\u636e\u81ea\u5df1\u591a\u5e74\u7684\u524d\u540e\u7aef\u5f00\u53d1\u7ecf\u9a8c\uff0c\u7ad9\u5728\u5b8c\u5168\u96f6\u57fa\u7840\u8bfb\u8005\u7684\u89d2\u5ea6\uff0c\u57fa\u4e8ejQuery 1.12.x\u7248\u672c\uff0c\u8be6\u5c3d\u4ecb\u7ecd\u4e86jQuery\u7684\u57fa\u7840\u77e5\u8bc6\u53ca\u5f00\u53d1\u6280\u5de7\u3002 \u300a\u4ece0\u52301 jQuery\u5feb\u901f\u4e0a\u624b\u300b\u5206\u4e3a14\u7ae0\uff0c\u524d10\u7ae0\u4e3b\u8981\u4ecb\u7ecdjQuery\u7684\u57fa\u672c\u6280\u672f\uff0c\u5305\u62ec\u5e38\u7528\u9009\u62e9\u5668\u3001DOM\u64cd\u4f5c\u3001",source:"@site/life/\u9605\u8bfb/\u8ba1\u7b97\u673a/\u4ece0\u52301\uff1ajQuery\u5feb\u901f\u4e0a\u624b.md",sourceDirName:"\u9605\u8bfb/\u8ba1\u7b97\u673a",slug:"/\u9605\u8bfb/\u8ba1\u7b97\u673a/\u4ece0\u52301\uff1ajQuery\u5feb\u901f\u4e0a\u624b",permalink:"/life/\u9605\u8bfb/\u8ba1\u7b97\u673a/\u4ece0\u52301\uff1ajQuery\u5feb\u901f\u4e0a\u624b",draft:!1,editUrl:"https://git.7wate.org/zhouzhongping/wiki/src/branch/master/life/\u9605\u8bfb/\u8ba1\u7b97\u673a/\u4ece0\u52301\uff1ajQuery\u5feb\u901f\u4e0a\u624b.md",tags:[{label:"\u9605\u8bfb",permalink:"/life/tags/\u9605\u8bfb"}],version:"current",lastUpdatedBy:"7Wate",lastUpdatedAt:1689565719,formattedLastUpdatedAt:"2023\u5e747\u670817\u65e5",frontMatter:{title:"\u4ece0\u52301\uff1ajQuery\u5feb\u901f\u4e0a\u624b",description:"\u4f5c\u8005\u6839\u636e\u81ea\u5df1\u591a\u5e74\u7684\u524d\u540e\u7aef\u5f00\u53d1\u7ecf\u9a8c\uff0c\u7ad9\u5728\u5b8c\u5168\u96f6\u57fa\u7840\u8bfb\u8005\u7684\u89d2\u5ea6\uff0c\u57fa\u4e8ejQuery 1.12.x\u7248\u672c\uff0c\u8be6\u5c3d\u4ecb\u7ecd\u4e86jQuery\u7684\u57fa\u7840\u77e5\u8bc6\u53ca\u5f00\u53d1\u6280\u5de7\u3002 \u300a\u4ece0\u52301 jQuery\u5feb\u901f\u4e0a\u624b\u300b\u5206\u4e3a14\u7ae0\uff0c\u524d10\u7ae0\u4e3b\u8981\u4ecb\u7ecdjQuery\u7684\u57fa\u672c\u6280\u672f\uff0c\u5305\u62ec\u5e38\u7528\u9009\u62e9\u5668\u3001DOM\u64cd\u4f5c\u3001",keywords:["\u4ece0\u52301\uff1ajQuery\u5feb\u901f\u4e0a\u624b","\u8ba1\u7b97\u673a"],tags:["\u9605\u8bfb"],author:"7Wate",date:"2023-07-17T00:00:00.000Z"},sidebar:"tutorialSidebar",previous:{title:"\u4ece0\u52301\uff1aJavaScript \u5feb\u901f\u4e0a\u624b",permalink:"/life/\u9605\u8bfb/\u8ba1\u7b97\u673a/\u4ece0\u52301\uff1aJavaScript \u5feb\u901f\u4e0a\u624b"},next:{title:"\u660e\u89e3Python",permalink:"/life/\u9605\u8bfb/\u8ba1\u7b97\u673a/\u660e\u89e3Python"}},u={},p=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u5212\u7ebf",id:"\u5212\u7ebf",level:2},{value:"\u7b14\u8bb0",id:"\u7b14\u8bb0",level:2},{value:"\u4e66\u8bc4",id:"\u4e66\u8bc4",level:2},{value:"\u70b9\u8bc4",id:"\u70b9\u8bc4",level:2}],c={toc:p};function y(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4e66\u540d"),"\uff1a\u300a\u4ece0\u52301\uff1ajQuery\u5feb\u901f\u4e0a\u624b\u300b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4f5c\u8005"),"\uff1a \u83ab\u632f\u6770"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5206\u7c7b"),"\uff1a \u8ba1\u7b97\u673a-\u7f16\u7a0b\u8bbe\u8ba1"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ISBN"),"\uff1a9787115526335"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u51fa\u7248\u793e"),"\uff1a\u4eba\u6c11\u90ae\u7535\u51fa\u7248\u793e")),(0,a.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.kt)("p",null,"\u4f5c\u8005\u6839\u636e\u81ea\u5df1\u591a\u5e74\u7684\u524d\u540e\u7aef\u5f00\u53d1\u7ecf\u9a8c\uff0c\u7ad9\u5728\u5b8c\u5168\u96f6\u57fa\u7840\u8bfb\u8005\u7684\u89d2\u5ea6\uff0c\u57fa\u4e8ejQuery 1.12.x\u7248\u672c\uff0c\u8be6\u5c3d\u4ecb\u7ecd\u4e86jQuery\u7684\u57fa\u7840\u77e5\u8bc6\u53ca\u5f00\u53d1\u6280\u5de7\u3002 \u300a\u4ece0\u52301 jQuery\u5feb\u901f\u4e0a\u624b\u300b\u5206\u4e3a14\u7ae0\uff0c\u524d10\u7ae0\u4e3b\u8981\u4ecb\u7ecdjQuery\u7684\u57fa\u672c\u6280\u672f\uff0c\u5305\u62ec\u5e38\u7528\u9009\u62e9\u5668\u3001DOM\u64cd\u4f5c\u3001\u4e8b\u4ef6\u64cd\u4f5c\u3001jQuery\u52a8\u753b\u3001\u8fc7\u6ee4\u65b9\u6cd5\u3001\u67e5\u627e\u65b9\u6cd5\u7b49\uff1b\u540e4\u7ae0\u4e3b\u8981\u4ecb\u7ecdjQuery\u7684\u8fdb\u9636\u6280\u5de7\uff0c\u5305\u62ec\u5de5\u5177\u51fd\u6570\u3001\u5f00\u53d1\u63d2\u4ef6\u3001Ajax\u64cd\u4f5c\u4ee5\u53ca\u9ad8\u7ea7\u6280\u5de7\u3002 \u6b64\u5916\uff0c\u672c\u4e66\u4e0d\u4f46\u914d\u5907\u4e86\u6240\u6709\u6848\u4f8b\u7684\u6e90\u4ee3\u7801\uff0c\u4f5c\u8005\u8fd8\u7ed3\u5408\u5b9e\u9645\u5de5\u4f5c\u548c\u524d\u7aef\u9762\u8bd5\u7684\u7ecf\u9a8c\uff0c\u7cbe\u9009\u4e86\u5f88\u591a\u9ad8\u8d28\u91cf\u7684\u7ec3\u4e60\u9898\u3002\u4e3a\u4e86\u65b9\u4fbf\u9ad8\u6821\u8001\u5e08\u6559\u5b66\uff0c\u672c\u4e66\u8fd8\u63d0\u4f9b\u4e86\u914d\u5957\u7684PPT\u8bfe\u4ef6\u3002\u672c\u4e66\u9002\u5408\u4f5c\u4e3a\u524d\u7aef\u5f00\u53d1\u4eba\u5458\u7684\u53c2\u8003\u4e66\uff0c\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u5927\u4e2d\u4e13\u9662\u6821\u76f8\u5173\u4e13\u4e1a\u7684\u6559\u5b66\u53c2\u8003\u4e66\u3002"),(0,a.kt)("h2",{id:"\u5212\u7ebf"},"\u5212\u7ebf"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\xb7\u4ee3\u7801\u7b80\u6d01\u3002\xb7\u5b8c\u7f8e\u517c\u5bb9\u3002\xb7\u8f7b\u91cf\u7ea7\u3002\xb7\u5f3a\u5927\u7684\u9009\u62e9\u5668\u3002\xb7\u5b8c\u5584\u7684Ajax\u3002\xb7\u4e30\u5bcc\u7684\u63d2\u4ef6\u3002")),(0,a.kt)("h2",{id:"\u7b14\u8bb0"},"\u7b14\u8bb0"),(0,a.kt)("h2",{id:"\u4e66\u8bc4"},"\u4e66\u8bc4"),(0,a.kt)("h2",{id:"\u70b9\u8bc4"},"\u70b9\u8bc4"))}y.isMDXComponent=!0}}]);