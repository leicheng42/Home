"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[25907],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=a.createContext({}),o=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=o(e.components);return a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=o(t),k=l,f=c["".concat(u,".").concat(k)]||c[k]||s[k]||r;return t?a.createElement(f,p(p({ref:n},m),{},{components:t})):a.createElement(f,p({ref:n},m))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,p=new Array(r);p[0]=c;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var o=2;o<r;o++)p[o]=t[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},53464:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var a=t(87462),l=(t(67294),t(3905));const r={},p="stdio.h",i={unversionedId:"C/lib \u6807\u51c6\u5e93/stdio.h",id:"C/lib \u6807\u51c6\u5e93/stdio.h",title:"stdio.h",description:"stdio.h\u662f C \u8bed\u8a00\u7684\u6807\u51c6 I/O \u5e93\uff0c\u7528\u4e8e\u8bfb\u53d6\u548c\u5199\u5165\u6587\u4ef6\uff0c\u4e5f\u7528\u4e8e\u63a7\u5236\u53f0\u7684\u8f93\u5165\u548c\u8f93\u51fa\u3002",source:"@site/wiki/programming-language/C/lib \u6807\u51c6\u5e93/stdio.h.md",sourceDirName:"C/lib \u6807\u51c6\u5e93",slug:"/C/lib \u6807\u51c6\u5e93/stdio.h",permalink:"/programming-language/C/lib \u6807\u51c6\u5e93/stdio.h",draft:!1,editUrl:"https://git.7wate.org/zhouzhongping/wiki/src/branch/master/wiki/programming-language/C/lib \u6807\u51c6\u5e93/stdio.h.md",tags:[],version:"current",lastUpdatedBy:"7Wate",lastUpdatedAt:1666670858,formattedLastUpdatedAt:"2022\u5e7410\u670825\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"stdint.h",permalink:"/programming-language/C/lib \u6807\u51c6\u5e93/stdint.h"},next:{title:"stdlib.h",permalink:"/programming-language/C/lib \u6807\u51c6\u5e93/stdlib.h"}},u={},o=[{value:"\u6807\u51c6 I/O \u51fd\u6570",id:"\u6807\u51c6-io-\u51fd\u6570",level:2},{value:"\u6587\u4ef6\u64cd\u4f5c\u51fd\u6570",id:"\u6587\u4ef6\u64cd\u4f5c\u51fd\u6570",level:2},{value:"\u5b57\u7b26\u4e32\u64cd\u4f5c\u51fd\u6570",id:"\u5b57\u7b26\u4e32\u64cd\u4f5c\u51fd\u6570",level:2},{value:"tmpfile()",id:"tmpfile",level:2},{value:"tmpnam()",id:"tmpnam",level:2},{value:"fflush()",id:"fflush",level:2},{value:"setvbuf()",id:"setvbuf",level:2},{value:"setbuf()",id:"setbuf",level:2},{value:"ungetc()",id:"ungetc",level:2},{value:"perror()",id:"perror",level:2},{value:"\u53ef\u53d8\u53c2\u6570\u64cd\u4f5c\u51fd\u6570",id:"\u53ef\u53d8\u53c2\u6570\u64cd\u4f5c\u51fd\u6570",level:2}],m={toc:o};function s(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"stdioh"},"stdio.h"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"stdio.h"),"\u662f C \u8bed\u8a00\u7684\u6807\u51c6 I/O \u5e93\uff0c\u7528\u4e8e\u8bfb\u53d6\u548c\u5199\u5165\u6587\u4ef6\uff0c\u4e5f\u7528\u4e8e\u63a7\u5236\u53f0\u7684\u8f93\u5165\u548c\u8f93\u51fa\u3002"),(0,l.kt)("h2",{id:"\u6807\u51c6-io-\u51fd\u6570"},"\u6807\u51c6 I/O \u51fd\u6570"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u51fd\u6570\u7528\u4e8e\u63a7\u5236\u53f0\u7684\u8f93\u5165\u548c\u8f93\u51fa\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"printf()\uff1a\u8f93\u51fa\u5230\u63a7\u5236\u53f0\uff0c\u8be6\u89c1\u300a\u57fa\u672c\u8bed\u6cd5\u300b\u4e00\u7ae0\u3002"),(0,l.kt)("li",{parentName:"ul"},"scanf()\uff1a\u4ece\u63a7\u5236\u53f0\u8bfb\u53d6\u8f93\u5165\uff0c\u8be6\u89c1\u300aI/O \u51fd\u6570\u300b\u4e00\u7ae0\u3002"),(0,l.kt)("li",{parentName:"ul"},"getchar()\uff1a\u4ece\u63a7\u5236\u53f0\u8bfb\u53d6\u4e00\u4e2a\u5b57\u7b26\uff0c\u8be6\u89c1\u300aI/O \u51fd\u6570\u300b\u4e00\u7ae0\u3002"),(0,l.kt)("li",{parentName:"ul"},"putchar()\uff1a\u5411\u63a7\u5236\u53f0\u5199\u5165\u4e00\u4e2a\u5b57\u7b26\uff0c\u8be6\u89c1\u300aI/O \u51fd\u6570\u300b\u4e00\u7ae0\u3002"),(0,l.kt)("li",{parentName:"ul"},"gets()\uff1a\u4ece\u63a7\u5236\u53f0\u8bfb\u53d6\u6574\u884c\u8f93\u5165\uff08\u5df2\u5e9f\u9664\uff09\uff0c\u8be6\u89c1\u300aI/O \u51fd\u6570\u300b\u4e00\u7ae0\u3002"),(0,l.kt)("li",{parentName:"ul"},"puts()\uff1a\u5411\u63a7\u5236\u53f0\u5199\u5165\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u8be6\u89c1\u300aI/O \u51fd\u6570\u300b\u4e00\u7ae0\u3002")),(0,l.kt)("h2",{id:"\u6587\u4ef6\u64cd\u4f5c\u51fd\u6570"},"\u6587\u4ef6\u64cd\u4f5c\u51fd\u6570"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u51fd\u6570\u7528\u4e8e\u6587\u4ef6\u64cd\u4f5c\uff0c\u8be6\u89c1\u300a\u6587\u4ef6\u64cd\u4f5c\u300b\u4e00\u7ae0\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"fopen()\uff1a\u6253\u5f00\u6587\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},"fclose()\uff1a\u5173\u95ed\u6587\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},"freopen()\uff1a\u6253\u5f00\u4e00\u4e2a\u65b0\u6587\u4ef6\uff0c\u5173\u8054\u4e00\u4e2a\u5df2\u7ecf\u6253\u5f00\u7684\u6587\u4ef6\u6307\u9488\u3002"),(0,l.kt)("li",{parentName:"ul"},"fprintf()\uff1a\u8f93\u51fa\u5230\u6587\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},"fscanf()\uff1a\u4ece\u6587\u4ef6\u8bfb\u53d6\u6570\u636e\u3002"),(0,l.kt)("li",{parentName:"ul"},"getc()\uff1a\u4ece\u6587\u4ef6\u8bfb\u53d6\u4e00\u4e2a\u5b57\u7b26\u3002"),(0,l.kt)("li",{parentName:"ul"},"fgetc()\uff1a\u4ece\u6587\u4ef6\u8bfb\u53d6\u4e00\u4e2a\u5b57\u7b26\u3002"),(0,l.kt)("li",{parentName:"ul"},"putc()\uff1a\u5411\u6587\u4ef6\u5199\u5165\u4e00\u4e2a\u5b57\u7b26\u3002"),(0,l.kt)("li",{parentName:"ul"},"fputc()\uff1a\u5411\u6587\u4ef6\u5199\u5165\u4e00\u4e2a\u5b57\u7b26\u3002"),(0,l.kt)("li",{parentName:"ul"},"fgets()\uff1a\u4ece\u6587\u4ef6\u8bfb\u53d6\u6574\u884c\u3002"),(0,l.kt)("li",{parentName:"ul"},"fputs()\uff1a\u5411\u6587\u4ef6\u5199\u5165\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("li",{parentName:"ul"},"fread()\uff1a\u4ece\u6587\u4ef6\u8bfb\u53d6\u4e8c\u8fdb\u5236\u6570\u636e\u3002"),(0,l.kt)("li",{parentName:"ul"},"fwrite()\uff1a\u5411\u6587\u4ef6\u5199\u5165\u4e8c\u8fdb\u5236\u6570\u636e\u3002"),(0,l.kt)("li",{parentName:"ul"},"fseek()\uff1a\u5c06\u6587\u4ef6\u5185\u90e8\u6307\u9488\u79fb\u5230\u6307\u5b9a\u4f4d\u7f6e\u3002"),(0,l.kt)("li",{parentName:"ul"},"ftell()\uff1a\u83b7\u53d6\u6587\u4ef6\u5185\u90e8\u6307\u9488\u7684\u5f53\u524d\u4f4d\u7f6e\u3002"),(0,l.kt)("li",{parentName:"ul"},"rewind()\uff1a\u5c06\u6587\u4ef6\u5185\u90e8\u6307\u9488\u91cd\u7f6e\u5230\u6587\u4ef6\u5f00\u59cb\u5904\u3002"),(0,l.kt)("li",{parentName:"ul"},"fgetpos()\uff1a\u83b7\u53d6\u6587\u4ef6\u5185\u90e8\u6307\u9488\u7684\u5f53\u524d\u4f4d\u7f6e\u3002"),(0,l.kt)("li",{parentName:"ul"},"fsetpos()\uff1a\u8bbe\u7f6e\u6587\u4ef6\u5185\u90e8\u6307\u9488\u7684\u5f53\u524d\u4f4d\u7f6e\u3002"),(0,l.kt)("li",{parentName:"ul"},"feof()\uff1a\u5224\u65ad\u6587\u4ef6\u5185\u90e8\u6307\u9488\u662f\u5426\u6307\u5411\u6587\u4ef6\u7ed3\u5c3e\u3002"),(0,l.kt)("li",{parentName:"ul"},"ferror()\uff1a\u8fd4\u56de\u6587\u4ef6\u9519\u8bef\u6307\u793a\u5668\u7684\u72b6\u6001\u3002"),(0,l.kt)("li",{parentName:"ul"},"clearerr()\uff1a\u91cd\u7f6e\u6587\u4ef6\u9519\u8bef\u6307\u793a\u5668\u3002"),(0,l.kt)("li",{parentName:"ul"},"remove()\uff1a\u5220\u9664\u6587\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},"rename()\uff1a\u6587\u4ef6\u6539\u540d\uff0c\u4ee5\u53ca\u79fb\u52a8\u6587\u4ef6\u3002")),(0,l.kt)("h2",{id:"\u5b57\u7b26\u4e32\u64cd\u4f5c\u51fd\u6570"},"\u5b57\u7b26\u4e32\u64cd\u4f5c\u51fd\u6570"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u51fd\u6570\u7528\u4e8e\u64cd\u4f5c\u5b57\u7b26\u4e32\uff0c\u8be6\u89c1\u300a\u5b57\u7b26\u4e32\u64cd\u4f5c\u300b\u4e00\u7ae0\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"sscanf()\uff1a\u4ece\u5b57\u7b26\u4e32\u8bfb\u53d6\u6570\u636e\uff0c\u8be6\u89c1\u300aI/O \u51fd\u6570\u300b\u4e00\u7ae0\u3002"),(0,l.kt)("li",{parentName:"ul"},"sprintf()\uff1a\u8f93\u51fa\u5230\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("li",{parentName:"ul"},"snprintf()\uff1a\u8f93\u51fa\u5230\u5b57\u7b26\u4e32\u7684\u66f4\u5b89\u5168\u7248\u672c\uff0c\u6307\u5b9a\u4e86\u8f93\u51fa\u5b57\u7b26\u4e32\u7684\u6570\u91cf\u3002")),(0,l.kt)("h2",{id:"tmpfile"},"tmpfile()"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"tmpfile()"),"\u51fd\u6570\u521b\u5efa\u4e00\u4e2a\u4e34\u65f6\u6587\u4ef6\uff0c\u8be5\u6587\u4ef6\u53ea\u5728\u7a0b\u5e8f\u8fd0\u884c\u671f\u95f4\u5b58\u5728\uff0c\u9664\u975e\u624b\u52a8\u5173\u95ed\u5b83\u3002\u5b83\u7684\u539f\u578b\u5982\u4e0b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"FILE* tmpfile(void);\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"tmpfile()"),"\u8fd4\u56de\u4e00\u4e2a\u6587\u4ef6\u6307\u9488\uff0c\u53ef\u4ee5\u7528\u4e8e\u8bbf\u95ee\u8be5\u51fd\u6570\u521b\u5efa\u7684\u4e34\u65f6\u6587\u4ef6\u3002\u5982\u679c\u521b\u5efa\u5931\u8d25\uff0c\u8fd4\u56de\u4e00\u4e2a\u7a7a\u6307\u9488 NULL\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"FILE* tempptr;\ntempptr = tmpfile();\n")),(0,l.kt)("p",null,"\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"close()"),"\u65b9\u6cd5\u5173\u95ed\u4e34\u65f6\u6587\u4ef6\u540e\uff0c\u8be5\u6587\u4ef6\u5c06\u88ab\u81ea\u52a8\u5220\u9664\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"tmpfile()"),"\u6709\u4e24\u4e2a\u7f3a\u70b9\u3002\u4e00\u662f\u65e0\u6cd5\u77e5\u9053\u4e34\u65f6\u6587\u4ef6\u7684\u6587\u4ef6\u540d\uff0c\u4e8c\u662f\u65e0\u6cd5\u8ba9\u8be5\u6587\u4ef6\u6210\u4e3a\u6c38\u4e45\u6587\u4ef6\u3002"),(0,l.kt)("h2",{id:"tmpnam"},"tmpnam()"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"tmpname()"),"\u51fd\u6570\u4e3a\u4e34\u65f6\u6587\u4ef6\u751f\u6210\u4e00\u4e2a\u540d\u5b57\uff0c\u786e\u4fdd\u4e0d\u4f1a\u4e0e\u5176\u4ed6\u6587\u4ef6\u91cd\u540d\u3002\u5b83\u7684\u539f\u578b\u5982\u4e0b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"char* tmpname(char* s);\n")),(0,l.kt)("p",null,"\u5b83\u7684\u53c2\u6570\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\u53d8\u91cf\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"tmpnam()"),"\u4f1a\u628a\u4e34\u65f6\u6587\u4ef6\u7684\u6587\u4ef6\u540d\u590d\u5236\u5230\u8fd9\u4e2a\u53d8\u91cf\u91cc\u9762\uff0c\u5e76\u8fd4\u56de\u6307\u5411\u8be5\u5b57\u7b26\u4e32\u53d8\u91cf\u7684\u6307\u9488\u3002\u5982\u679c\u751f\u6210\u6587\u4ef6\u540d\u5931\u8d25\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"tmpnam()"),"\u8fd4\u56de\u7a7a\u6307\u9488 NULL\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'char filename[L_tmpname];\n\nif (tmpnam(filename) != NULL)\n  // \u8f93\u51fa\u8bf8\u5982 /tmp/filew9PMuZ \u7684\u6587\u4ef6\u540d\n  printf("%s\\n", filename);\nelse\n  printf("Something wrong!\\n");\n')),(0,l.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"L_tmpname"),"\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"stdio.h"),"\u5b9a\u4e49\u7684\u4e00\u4e2a\u5b8f\uff0c\u6307\u5b9a\u4e86\u4e34\u65f6\u6587\u4ef6\u7684\u6587\u4ef6\u540d\u957f\u5ea6\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"tmpname()"),"\u7684\u53c2\u6570\u4e5f\u53ef\u4ee5\u662f\u4e00\u4e2a\u7a7a\u6307\u9488 NULL\uff0c\u540c\u6837\u8fd4\u56de\u6307\u5411\u6587\u4ef6\u540d\u5b57\u7b26\u4e32\u7684\u6307\u9488\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"char* filename;\nfilename = tmpnam(NULL);\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u53d8\u91cf",(0,l.kt)("inlineCode",{parentName:"p"},"filename"),"\u5c31\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"tmpnam()"),"\u751f\u6210\u7684\u6587\u4ef6\u540d\u3002"),(0,l.kt)("p",null,"\u8be5\u51fd\u6570\u53ea\u662f\u751f\u6210\u4e00\u4e2a\u6587\u4ef6\u540d\uff0c\u7a0d\u540e\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"fopen()"),"\u6253\u5f00\u8be5\u6587\u4ef6\u5e76\u4f7f\u7528\u5b83\u3002"),(0,l.kt)("h2",{id:"fflush"},"fflush()"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"fflush()"),"\u7528\u4e8e\u6e05\u7a7a\u7f13\u5b58\u533a\u3002\u5b83\u63a5\u53d7\u4e00\u4e2a\u6587\u4ef6\u6307\u9488\u4f5c\u4e3a\u53c2\u6570\uff0c\u5c06\u7f13\u5b58\u533a\u5185\u5bb9\u5199\u5165\u8be5\u6587\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"fflush(fp);\n")),(0,l.kt)("p",null,"\u5982\u679c\u4e0d\u9700\u8981\u4fdd\u5b58\u7f13\u5b58\u533a\u5185\u5bb9\uff0c\u5219\u53ef\u4ee5\u4f20\u5165\u7a7a\u6307\u9488 NULL\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"fflush(NULL);\n")),(0,l.kt)("p",null,"\u5982\u679c\u6e05\u7a7a\u6210\u529f\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"fflush()"),"\u8fd4\u56de0\uff0c\u5426\u5219\u8fd4\u56de EOF\u3002"),(0,l.kt)("p",null,"\u6ce8\u610f\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"fflush()"),"\u4e00\u822c\u53ea\u7528\u6765\u6e05\u7a7a\u8f93\u51fa\u7f13\u5b58\u533a\uff08\u6bd4\u5982\u5199\u6587\u4ef6\uff09\u3002\u5982\u679c\u4f7f\u7528\u5b83\u6765\u6e05\u7a7a\u8f93\u5165\u7f13\u5b58\u533a\uff08\u6bd4\u5982\u8bfb\u6587\u4ef6\uff09\uff0c\u5c5e\u4e8e\u672a\u5b9a\u4e49\u884c\u4e3a\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"fflush()"),"\u7684\u4e00\u4e2a\u7528\u9014\u662f\u4e0d\u7b49\u56de\u8f66\u952e\uff0c\u5c31\u5f3a\u8feb\u8f93\u51fa\u7f13\u5b58\u533a\u3002\u5927\u591a\u6570\u7cfb\u7edf\u90fd\u662f\u884c\u7f13\u5b58\uff0c\u8fd9\u610f\u5473\u7740\u53ea\u6709\u9047\u5230\u56de\u8f66\u952e\uff08\u6216\u8005\u7f13\u5b58\u533a\u6ee1\u4e86\uff0c\u6216\u8005\u6587\u4ef6\u8bfb\u5230\u7ed3\u5c3e\uff09\uff0c\u7f13\u5b58\u533a\u7684\u5185\u5bb9\u624d\u4f1a\u8f93\u51fa\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"fflush()"),"\u53ef\u4ee5\u4e0d\u7b49\u56de\u8f66\u952e\uff0c\u7acb\u5373\u8f93\u51fa\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'for (int i = 9; i >= 0; i--) {\n  printf("\\r%d", i);\n  fflush(stdout);\n  sleep(1);\n}\n')),(0,l.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u662f\u4e00\u4e2a\u5012\u8ba1\u65f6\u6548\u679c\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"\\r"),"\u662f\u56de\u8f66\u952e\uff0c\u8868\u793a\u6bcf\u8f6e\u5faa\u73af\u90fd\u4f1a\u56de\u5230\u5f53\u524d\u884c\u7684\u884c\u9996\uff0c\u7b49\u4e8e\u5220\u9664\u4e0a\u4e00\u8f6e\u5faa\u73af\u7684\u8f93\u51fa\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"fflush(stdout)"),"\u8868\u793a\u7acb\u5373\u5c06\u7f13\u5b58\u8f93\u51fa\u5230\u663e\u793a\u5668\uff0c\u8fd9\u4e00\u884c\u662f\u5fc5\u9700\u7684\uff0c\u5426\u5219\u7531\u4e8e\u4e0a\u4e00\u884c\u7684\u8f93\u51fa\u6ca1\u6709\u56de\u8f66\u952e\uff0c\u4e0d\u4f1a\u89e6\u53d1\u7f13\u5b58\u8f93\u51fa\uff0c\u5c4f\u5e55\u4e0a\u4e0d\u4f1a\u663e\u793a\u4efb\u4f55\u5185\u5bb9\uff0c\u53ea\u4f1a\u7b49\u5230\u7a0b\u5e8f\u8fd0\u884c\u7ed3\u675f\u518d\u4e00\u6b21\u6027\u8f93\u51fa\u3002"),(0,l.kt)("h2",{id:"setvbuf"},"setvbuf()"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"setvbuf()"),"\u51fd\u6570\u7528\u4e8e\u5b9a\u4e49\u67d0\u4e2a\u5b57\u8282\u6d41\u5e94\u8be5\u5982\u4f55\u7f13\u5b58\u3002\u5b83\u53ef\u4ee5\u63a5\u53d7\u56db\u4e2a\u53c2\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"int setvbuf(FILE* stream, char* buffer, int mode, size_t size)\n")),(0,l.kt)("p",null,"\u7b2c\u4e00\u4e2a\u53c2\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"stream"),"\u662f\u6587\u4ef6\u6d41\u3002"),(0,l.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u53c2\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"buffer"),"\u662f\u7f13\u5b58\u533a\u7684\u5730\u5740\u3002"),(0,l.kt)("p",null,"\u7b2c\u4e09\u4e2a\u53c2\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"mode"),"\u6307\u5b9a\u7f13\u5b58\u7684\u884c\u4e3a\u6a21\u5f0f\uff0c\u5b83\u662f\u4e0b\u9762\u4e09\u4e2a\u5b8f\u4e4b\u4e00\uff0c\u8fd9\u4e9b\u5b8f\u90fd\u5b9a\u4e49\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"stdio.h"),"\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_IOFBF"),"\uff1a\u6ee1\u7f13\u5b58\u3002\u5f53\u7f13\u5b58\u4e3a\u7a7a\u65f6\uff0c\u624d\u4ece\u6d41\u8bfb\u5165\u6570\u636e\uff1b\u5f53\u7f13\u5b58\u6ee1\u4e86\uff0c\u624d\u5411\u6d41\u5199\u5165\u6570\u636e\u3002\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u8fd9\u662f\u9ed8\u8ba4\u8bbe\u7f6e\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_IOLBF"),"\uff1a\u884c\u7f13\u5b58\u3002\u6bcf\u6b21\u4ece\u6d41\u8bfb\u5165\u4e00\u884c\u6570\u636e\uff0c\u6216\u5411\u6d41\u5199\u5165\u4e00\u884c\u6570\u636e\uff0c\u5373\u4ee5\u884c\u4e3a\u5355\u4f4d\u8bfb\u5199\u7f13\u5b58\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_IONBF"),"\uff1a\u65e0\u7f13\u5b58\u3002\u4e0d\u4f7f\u7528\u7f13\u5b58\u533a\uff0c\u76f4\u63a5\u8bfb\u5199\u8bbe\u5907\u3002")),(0,l.kt)("p",null,"\u7b2c\u56db\u4e2a\u53c2\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"size"),"\u6307\u5b9a\u7f13\u5b58\u533a\u7684\u5927\u5c0f\u3002\u8f83\u5927\u7684\u7f13\u5b58\u533a\u63d0\u4f9b\u66f4\u597d\u7684\u6027\u80fd\uff0c\u800c\u8f83\u5c0f\u7684\u7f13\u5b58\u533a\u53ef\u4ee5\u8282\u7701\u7a7a\u95f4\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"stdio.h"),"\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5b8f",(0,l.kt)("inlineCode",{parentName:"p"},"BUFSIZ"),"\uff0c\u8868\u793a\u7cfb\u7edf\u9ed8\u8ba4\u7684\u7f13\u5b58\u533a\u5927\u5c0f\u3002"),(0,l.kt)("p",null,"\u5b83\u7684\u610f\u4e49\u5728\u4e8e\uff0c\u4f7f\u5f97\u7528\u6237\u53ef\u4ee5\u5728\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\u4e4b\u524d\uff0c\u5b9a\u4e49\u81ea\u5df1\u7684\u6587\u4ef6\u7f13\u51b2\u533a\uff0c\u800c\u4e0d\u5fc5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"fopen()"),"\u51fd\u6570\u6253\u5f00\u6587\u4ef6\u65f6\u8bbe\u5b9a\u7684\u9ed8\u8ba4\u7f13\u51b2\u533a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"char buffer[N];\n\nsetvbuf(stream, buffer, _IOFBF, N);\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u8bbe\u7f6e\u6587\u4ef6\u6d41",(0,l.kt)("inlineCode",{parentName:"p"},"stream"),"\u7684\u7f13\u5b58\u533a\u4ece\u5730\u5740",(0,l.kt)("inlineCode",{parentName:"p"},"buffer"),"\u5f00\u59cb\uff0c\u5927\u5c0f\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"N"),"\uff0c\u6a21\u5f0f\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"_IOFBF"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"setvbuf()"),"\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u53ef\u4ee5\u4e3a\u7a7a\u6307\u9488 NULL\u3002\u8fd9\u6837\u7684\u8bdd\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"setvbuf()"),"\u4f1a\u81ea\u5df1\u521b\u5efa\u4e00\u4e2a\u7f13\u5b58\u533a\u3002"),(0,l.kt)("p",null,"\u6ce8\u610f\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"setvbuf()"),"\u7684\u8c03\u7528\u5fc5\u987b\u5728\u5bf9\u6587\u4ef6\u6d41\u6267\u884c\u4efb\u4f55\u64cd\u4f5c\u4e4b\u524d\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u8c03\u7528\u6210\u529f\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"setvbuf()"),"\u7684\u8fd4\u56de\u503c\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"0"),"\uff0c\u5426\u5219\u8fd4\u56de\u975e\u96f6\u503c\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u7684\u4f8b\u5b50\u662f\u5c06\u7f13\u5b58\u533a\u8c03\u6574\u4e3a\u884c\u7f13\u5b58\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'FILE *fp;\nchar lineBuf[1024];\n\nfp = fopen("somefile.txt", "r");\nsetvbuf(fp, lineBuf, _IOLBF, 1024);\n')),(0,l.kt)("h2",{id:"setbuf"},"setbuf()"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"setbuf()"),"\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"setvbuf()"),"\u7684\u65e9\u671f\u7248\u672c\uff0c\u53ef\u4ee5\u89c6\u4e3a\u540e\u8005\u7684\u7b80\u5316\u7248\u672c\uff0c\u4e5f\u7528\u6765\u5b9a\u4e49\u67d0\u4e2a\u5b57\u8282\u6d41\u7684\u7f13\u5b58\u533a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"void setbuf(FILE* stream, char* buffer);\n")),(0,l.kt)("p",null,"\u5b83\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"stream"),"\u662f\u6587\u4ef6\u6d41\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"buffer"),"\u662f\u7f13\u5b58\u533a\u7684\u5730\u5740\u3002"),(0,l.kt)("p",null,"\u5b83\u603b\u662f\u53ef\u4ee5\u6539\u5199\u6210",(0,l.kt)("inlineCode",{parentName:"p"},"setvbuf()"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"char buffer[BUFSIZ];\n\nsetbuf(stream, buffer);\n\n// \u7b49\u540c\u4e8e\nsetvbuf(stream, buffer, _IOFBF, BUFSIZ);\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"BUFSIZ"),"\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"stdio.h"),"\u5b9a\u4e49\u7684\u5b8f\uff0c\u8868\u793a\u7cfb\u7edf\u9ed8\u8ba4\u7684\u7f13\u5b58\u533a\u5927\u5c0f\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"setbuf()"),"\u51fd\u6570\u6ca1\u6709\u8fd4\u56de\u503c\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"setbuf()"),"\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u5982\u679c\u8bbe\u7f6e\u4e3a NULL\uff0c\u8868\u793a\u4e0d\u8fdb\u884c\u7f13\u5b58\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"setbuf(stdout, NULL);\n\n// \u7b49\u540c\u4e8e\nsetvbuf(stdout, NULL, _IONBF, 0);\n")),(0,l.kt)("h2",{id:"ungetc"},"ungetc()"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ungetc()"),"\u5c06\u4ece\u7f13\u5b58\u91cc\u9762\u8bfb\u53d6\u7684\u4e0a\u4e00\u4e2a\u5b57\u7b26\uff0c\u91cd\u65b0\u653e\u56de\u7f13\u5b58\uff0c\u4e0b\u4e00\u4e2a\u8bfb\u53d6\u7f13\u5b58\u7684\u64cd\u4f5c\u4f1a\u4ece\u8fd9\u4e2a\u5b57\u7b26\u5f00\u59cb\u3002\u6709\u4e9b\u64cd\u4f5c\u9700\u8981\u4e86\u89e3\u4e0b\u4e00\u4e2a\u5b57\u7b26\u662f\u4ec0\u4e48\uff0c\u518d\u51b3\u5b9a\u5e94\u8be5\u600e\u4e48\u5904\u7406\uff0c\u8fd9\u65f6\u8fd9\u4e2a\u51fd\u6570\u5c31\u5f88\u6709\u7528\u3002"),(0,l.kt)("p",null,"\u5b83\u7684\u539f\u578b\u5982\u4e0b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"int ungetc(int c, FILE *stream);\n")),(0,l.kt)("p",null,"\u5b83\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a\u5b57\u7b26\u53d8\u91cf\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a\u6253\u5f00\u7684\u6587\u4ef6\u6d41\u3002\u5b83\u7684\u8fd4\u56de\u503c\u662f\u653e\u56de\u7f13\u5b58\u7684\u90a3\u4e2a\u5b57\u7b26\uff0c\u64cd\u4f5c\u5931\u8d25\u65f6\uff0c\u8fd4\u56de EOF\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"int ch = fgetc(fp);\n\nif (isdigit(ch)) {\n  ch = fgetc(fp);\n}\n\nungetc(ch, fp);\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u5982\u679c\u8bfb\u53d6\u7684\u5b57\u7b26\u4e0d\u662f\u6570\u5b57\uff0c\u5c31\u5c06\u5176\u653e\u56de\u7f13\u5b58\u3002"),(0,l.kt)("h2",{id:"perror"},"perror()"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"perror()"),"\u7528\u4e8e\u5728 stderr \u7684\u9519\u8bef\u4fe1\u606f\u4e4b\u524d\uff0c\u6dfb\u52a0\u4e00\u4e2a\u81ea\u5b9a\u4e49\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"void perror(const char *s);\n")),(0,l.kt)("p",null,"\u8be5\u51fd\u6570\u7684\u53c2\u6570\u5c31\u662f\u5728\u62a5\u9519\u4fe1\u606f\u524d\u6dfb\u52a0\u7684\u5b57\u7b26\u4e32\u3002\u5b83\u6ca1\u6709\u8fd4\u56de\u503c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#include <stdlib.h>\n#include <math.h>\n#include <errno.h>\n\nint main(void) {\n  int x = -1;\n\n  errno = 0;\n  float y = sqrt(x);\n  if (errno != 0) {\n    perror("sqrt error");\n    exit(EXIT_FAILURE);\n  }\n}\n')),(0,l.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u6c42",(0,l.kt)("inlineCode",{parentName:"p"},"-1"),"\u7684\u5e73\u65b9\u6839\uff0c\u5bfc\u81f4\u62a5\u9519\u3002\u5934\u6587\u4ef6",(0,l.kt)("inlineCode",{parentName:"p"},"errno.h"),"\u63d0\u4f9b\u5b8f",(0,l.kt)("inlineCode",{parentName:"p"},"errno"),"\uff0c\u53ea\u8981\u4e0a\u4e00\u6b65\u64cd\u4f5c\u51fa\u9519\uff0c\u8fd9\u4e2a\u5b8f\u5c31\u4f1a\u8bbe\u7f6e\u6210\u975e\u96f6\u503c\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"perror()"),"\u7528\u6765\u5728\u62a5\u9519\u4fe1\u606f\u524d\uff0c\u52a0\u4e0a",(0,l.kt)("inlineCode",{parentName:"p"},"sqrt error"),"\u7684\u81ea\u5b9a\u4e49\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("p",null,"\u6267\u884c\u4e0a\u9762\u7684\u7a0b\u5e8f\uff0c\u5c31\u4f1a\u5f97\u5230\u4e0b\u9762\u7684\u62a5\u9519\u4fe1\u606f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ gcc test.c -lm\n$ ./a.out\nsqrt error: Numerical argument out of domain\n")),(0,l.kt)("h2",{id:"\u53ef\u53d8\u53c2\u6570\u64cd\u4f5c\u51fd\u6570"},"\u53ef\u53d8\u53c2\u6570\u64cd\u4f5c\u51fd\u6570"),(0,l.kt)("p",null,"\uff081\uff09\u8f93\u51fa\u51fd\u6570"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"printf()"),"\u7684\u53d8\u4f53\u51fd\u6570\uff0c\u7528\u4e8e\u6309\u7167\u7ed9\u5b9a\u683c\u5f0f\uff0c\u8f93\u51fa\u51fd\u6570\u7684\u53ef\u53d8\u53c2\u6570\u5217\u8868\uff08va_list\uff09\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"vprintf()\uff1a\u6309\u7167\u7ed9\u5b9a\u683c\u5f0f\uff0c\u8f93\u51fa\u5230\u63a7\u5236\u53f0\uff0c\u9ed8\u8ba4\u662f\u663e\u793a\u5668\u3002"),(0,l.kt)("li",{parentName:"ul"},"vfprintf()\uff1a\u6309\u7167\u7ed9\u5b9a\u683c\u5f0f\uff0c\u8f93\u51fa\u5230\u6587\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},"vsprintf()\uff1a\u6309\u7167\u7ed9\u5b9a\u683c\u5f0f\uff0c\u8f93\u51fa\u5230\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("li",{parentName:"ul"},"vsnprintf()\uff1a\u6309\u7167\u7ed9\u5b9a\u683c\u5f0f\uff0c\u8f93\u51fa\u5230\u5b57\u7b26\u4e32\u7684\u5b89\u5168\u7248\u672c\u3002")),(0,l.kt)("p",null,"\u5b83\u4eec\u7684\u539f\u578b\u5982\u4e0b\uff0c\u57fa\u672c\u4e0e\u5bf9\u5e94\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"printf()"),"\u7cfb\u5217\u51fd\u6570\u4e00\u81f4\uff0c\u9664\u4e86\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u662f\u53ef\u53d8\u53c2\u6570\u5bf9\u8c61\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"#include <stdio.h>\n#include <stdarg.h>\n    \nint vprintf(\n  const char * restrict format,\n  va_list arg\n);\n\nint vfprintf(\n  FILE * restrict stream,\n  const char * restrict format,\n  va_list arg\n);\n    \nint vsprintf(\n  char * restrict s,\n  const char * restrict format,\n  va_list arg\n);\n    \nint vsnprintf(\n  char * restrict s,\n  size_t n,\n  const char * restrict format,\n  va_list arg\n);\n")),(0,l.kt)("p",null,"\u5b83\u4eec\u7684\u8fd4\u56de\u503c\u90fd\u4e3a\u8f93\u51fa\u7684\u5b57\u7b26\u6570\uff0c\u5982\u679c\u51fa\u9519\uff0c\u8fd4\u56de\u8d1f\u503c\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"vsprintf()"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"vsnprintf()"),"\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u53ef\u4ee5\u4e3a NULL\uff0c\u7528\u6765\u67e5\u770b\u591a\u5c11\u4e2a\u5b57\u7b26\u4f1a\u88ab\u5199\u5165\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'int logger(char *format, ...) {\n  va_list va;\n  va_start(va, format);\n  int result = vprintf(format, va);\n  va_end(va);\n\n  printf("\\n");\n\n  return result;\n}\n\n// \u8f93\u51fa x = 12 and y = 3.20\nlogger("x = %d and y = %.2f", x, y);\n')),(0,l.kt)("p",null,"\uff082\uff09\u8f93\u5165\u51fd\u6570"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"scanf()"),"\u7684\u53d8\u4f53\u51fd\u6570\uff0c\u7528\u4e8e\u6309\u7167\u7ed9\u5b9a\u683c\u5f0f\uff0c\u8f93\u5165\u53ef\u53d8\u53c2\u6570\u5217\u8868 (va_list)\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"vscanf()\uff1a\u6309\u7167\u7ed9\u5b9a\u683c\u5f0f\uff0c\u4ece\u63a7\u5236\u53f0\u8bfb\u53d6\uff08\u9ed8\u8ba4\u4e3a\u952e\u76d8\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"vfscanf()\uff1a\u6309\u7167\u7ed9\u5b9a\u683c\u5f0f\uff0c\u4ece\u6587\u4ef6\u8bfb\u53d6\u3002"),(0,l.kt)("li",{parentName:"ul"},"vsscanf()\uff1a\u6309\u7167\u7ed9\u5b9a\u683c\u5f0f\uff0c\u4ece\u5b57\u7b26\u4e32\u8bfb\u53d6\u3002")),(0,l.kt)("p",null,"\u5b83\u4eec\u7684\u539f\u578b\u5982\u4e0b\uff0c\u8ddf\u5bf9\u5e94\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"scanf()"),"\u51fd\u6570\u57fa\u672c\u4e00\u81f4\uff0c\u9664\u4e86\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u662f\u53ef\u53d8\u53c2\u6570\u5bf9\u8c61\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"#include <stdio.h>\n#include <stdarg.h>\n    \nint vscanf(\n  const char * restrict format,\n  va_list arg\n);\n    \nint vfscanf(\n  FILE * restrict stream,\n  const char * restrict format,\n  va_list arg\n);\n    \nint vsscanf(\n  const char * restrict s,\n  const char * restrict format,\n  va_list arg\n);\n")),(0,l.kt)("p",null,"\u5b83\u4eec\u8fd4\u56de\u6210\u529f\u8bfb\u53d6\u7684\u9879\u6570\uff0c\u9047\u5230\u6587\u4ef6\u7ed3\u5c3e\u6216\u9519\u8bef\uff0c\u5219\u8fd4\u56de EOF\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'int error_check_scanf(int expected_count, char *format, ...) {\n  va_list va;\n\n  va_start(va, format);\n  int count = vscanf(format, va);\n  va_end(va);\n\n  assert(count == expected_count);\n\n  return count;\n}\n\nerror_check_scanf(3, "%d, %d/%f", &a, &b, &c);\n')))}s.isMDXComponent=!0}}]);