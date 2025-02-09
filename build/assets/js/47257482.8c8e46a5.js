"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[23494],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),g=m(a),k=r,u=g["".concat(o,".").concat(k)]||g[k]||c[k]||l;return a?n.createElement(u,i(i({ref:e},d),{},{components:a})):n.createElement(u,i({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=g;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},88022:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={title:"\u6570\u636e\u8868\u7ea6\u675f",description:"\u6570\u636e\u8868\u884c\u6570\u636e\u7ea6\u675f",keywords:["\u6570\u636e\u5e93","\u7ea6\u675f"],tags:["SQL"],sidebar_position:4,author:"7Wate",date:new Date("2022-08-31T00:00:00.000Z")},i=void 0,p={unversionedId:"MySQL/\u6570\u636e\u8868\u7ea6\u675f",id:"MySQL/\u6570\u636e\u8868\u7ea6\u675f",title:"\u6570\u636e\u8868\u7ea6\u675f",description:"\u6570\u636e\u8868\u884c\u6570\u636e\u7ea6\u675f",source:"@site/wiki/programming-language/MySQL/\u6570\u636e\u8868\u7ea6\u675f.md",sourceDirName:"MySQL",slug:"/MySQL/\u6570\u636e\u8868\u7ea6\u675f",permalink:"/programming-language/MySQL/\u6570\u636e\u8868\u7ea6\u675f",draft:!1,editUrl:"https://git.7wate.org/zhouzhongping/wiki/src/branch/master/wiki/programming-language/MySQL/\u6570\u636e\u8868\u7ea6\u675f.md",tags:[{label:"SQL",permalink:"/programming-language/tags/sql"}],version:"current",lastUpdatedBy:"7Wate",lastUpdatedAt:1666670858,formattedLastUpdatedAt:"2022\u5e7410\u670825\u65e5",sidebarPosition:4,frontMatter:{title:"\u6570\u636e\u8868\u7ea6\u675f",description:"\u6570\u636e\u8868\u884c\u6570\u636e\u7ea6\u675f",keywords:["\u6570\u636e\u5e93","\u7ea6\u675f"],tags:["SQL"],sidebar_position:4,author:"7Wate",date:"2022-08-31T00:00:00.000Z"},sidebar:"tutorialSidebar",previous:{title:"SQL \u51fd\u6570",permalink:"/programming-language/MySQL/SQL \u51fd\u6570"},next:{title:"\u6570\u636e\u5e93\u67e5\u8be2",permalink:"/programming-language/MySQL/\u6570\u636e\u5e93\u67e5\u8be2"}},o={},m=[{value:"\u6570\u636e\u7ea6\u675f",id:"\u6570\u636e\u7ea6\u675f",level:2},{value:"\u5e38\u7528\u7ea6\u675f",id:"\u5e38\u7528\u7ea6\u675f",level:3},{value:"\u5916\u952e\u7ea6\u675f",id:"\u5916\u952e\u7ea6\u675f",level:3},{value:"\u5220\u9664 / \u66f4\u65b0\u884c\u4e3a",id:"\u5220\u9664--\u66f4\u65b0\u884c\u4e3a",level:3}],d={toc:m};function c(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u6570\u636e\u7ea6\u675f"},"\u6570\u636e\u7ea6\u675f"),(0,r.kt)("p",null,"\u7ea6\u675f\u662f\u4f5c\u7528\u4e8e\u8868\u4e2d\u5b57\u6bb5\u4e0a\u7684\uff0c\u7528\u4e8e\u9650\u5236\u5b58\u50a8\u5728\u8868\u4e2d\u7684\u6570\u636e\u3002\u76ee\u7684\u662f\u4fdd\u8bc1\u6570\u636e\u4e2d\u6570\u636e\u7684\u6b63\u786e\u3001\u6709\u6548\u6027\u548c\u5b8c\u6574\u6027\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u5728\u521b\u5efa\u8868 / \u4fee\u6539\u8868\u7684\u65f6\u5019\u6dfb\u52a0\u7ea6\u675f\u3002"),(0,r.kt)("p",null,"\u5e38\u89c1\u7ea6\u675f\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7ea6\u675f"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5173\u952e\u5b57"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u975e\u7a7a\u7ea6\u675f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9650\u5236\u8be5\u5b57\u6bb5\u7684\u6570\u636e\u4e0d\u80fd\u4e3a null"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NOT NULL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u552f\u4e00\u7ea6\u675f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4fdd\u8bc1\u8be5\u5b57\u6bb5\u7684\u6240\u6709\u6570\u636e\u90fd\u662f\u552f\u4e00\u3001\u4e0d\u91cd\u590d\u7684"),(0,r.kt)("td",{parentName:"tr",align:"left"},"UNIQUE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e3b\u952e\u7ea6\u675f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e3b\u952e\u662f\u4e00\u884c\u6570\u636e\u7684\u552f\u4e00\u6807\u8bc6\uff0c\u8981\u6c42\u975e\u7a7a\u4e14\u552f\u4e00"),(0,r.kt)("td",{parentName:"tr",align:"left"},"PRIMARY KEY\uff08\u81ea\u589e\uff1aAUTO_INCREMENT\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u7ea6\u675f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4fdd\u5b58\u6570\u636e\u65f6\uff0c\u5982\u679c\u672a\u6307\u5b9a\u8be5\u5b57\u6bb5\u7684\u503c\uff0c\u5219\u91c7\u7528\u9ed8\u8ba4\u503c"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DEFAULT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u68c0\u67e5\u7ea6\u675f\uff088.0.1 \u7248\u672c\u540e\uff09"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4fdd\u8bc1\u5b57\u6bb5\u503c\u6ee1\u8db3\u67d0\u4e00\u4e2a\u6761\u4ef6"),(0,r.kt)("td",{parentName:"tr",align:"left"},"CHECK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5916\u952e\u7ea6\u675f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6765\u8ba9\u4e24\u5f20\u56fe\u7684\u6570\u636e\u4e4b\u95f4\u5efa\u7acb\u8fde\u63a5\uff0c\u4fdd\u8bc1\u6570\u636e\u7684\u4e00\u81f4\u6027\u548c\u5b8c\u6574\u6027"),(0,r.kt)("td",{parentName:"tr",align:"left"},"FOREIGN KEY")))),(0,r.kt)("h3",{id:"\u5e38\u7528\u7ea6\u675f"},"\u5e38\u7528\u7ea6\u675f"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.7wate.com/img/2022/05/11/58a6b68ad6471.png",alt:"img"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create table user(\n    id int primary key auto_increment comment '\u4e3b\u952eid',\n    name varchar(10) not null unique comment '\u59d3\u540d',\n    age int check(age between 0 and 120) comment '\u5e74\u9f84',\n    status char(1) default '1' comment '\u72b6\u6001',\n    gender char(1) comment '\u6027\u522b'\n) comment '\u7528\u6237\u8868';\n")),(0,r.kt)("h3",{id:"\u5916\u952e\u7ea6\u675f"},"\u5916\u952e\u7ea6\u675f"),(0,r.kt)("p",null,"\u5916\u952e\u7ea6\u675f\u662f\u7528\u6765\u8ba9\u4e24\u4e2a\u8868\u7684\u6570\u636e\u4e4b\u95f4\u5efa\u7acb\u8fde\u63a5\uff0c\u4ece\u800c\u4fdd\u8bc1\u6570\u636e\u7684\u4e00\u81f4\u6027\u548c\u5b8c\u6574\u6027\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.7wate.com/img/2022/05/11/110dd22cdc2cf.png",alt:"img"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u5728\u521b\u5efa\u8868\u65f6\u6dfb\u52a0\u5916\u952e\nCREATE TABLE \u8868\u540d(\n    \u5b57\u6bb5\u540d \u5b57\u6bb5\u7c7b\u578b,\n    ...\n    [CONSTRAINT] [\u5916\u952e\u540d\u79f0] FOREIGN KEY(\u5916\u952e\u5b57\u6bb5\u540d) REFERENCES \u4e3b\u8868(\u4e3b\u8868\u5217\u540d)\n);\n-- \u4e3a\u8868\u8865\u4e0a\u5916\u952e\nALTER TABLE \u8868\u540d ADD CONSTRAINT \u5916\u952e\u540d\u79f0 FOREIGN KEY (\u5916\u952e\u5b57\u6bb5\u540d) REFERENCES \u4e3b\u8868(\u4e3b\u8868\u5217\u540d);\n-- \u5220\u9664\u5916\u952e\nALTER TABLE \u8868\u540d DROP FOREIGN KEY \u5916\u952e\u540d;\n")),(0,r.kt)("p",null,"\u6848\u4f8b\uff1a\u4e3a emp \u8868\u8865\u4e0a\u5916\u952e\uff0cdept_id \u5173\u8054 dep \u4e2d\u7684 id"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"alter table emp add constraint fk_emp_dept_id foreign key dept_id references dep(id);\n")),(0,r.kt)("h3",{id:"\u5220\u9664--\u66f4\u65b0\u884c\u4e3a"},"\u5220\u9664 / \u66f4\u65b0\u884c\u4e3a"),(0,r.kt)("p",null,"\u8868\u6dfb\u52a0\u4e86\u5916\u952e\u4e4b\u540e\uff0c\u518d\u5220\u9664\u7236\u8868\u6570\u636e\u65f6\u4ea7\u751f\u7684\u7ea6\u675f\u884c\u4e3a\uff0c\u6211\u4eec\u5c31\u79f0\u4e3a\u5220\u9664 / \u66f4\u65b0\u884c\u4e3a\u3002\u6709\u4ee5\u4e0b\u5e38\u89c1\u7684\u51e0\u79cd\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u884c\u4e3a"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"NO ACTION"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5f53\u5728\u7236\u8868\u4e2d\u5220\u9664 / \u66f4\u65b0\u5bf9\u5e94\u8bb0\u5f55\u65f6\uff0c\u9996\u5148\u68c0\u67e5\u8be5\u8bb0\u5f55\u662f\u5426\u6709\u5bf9\u5e94\u5916\u952e\uff0c\u5982\u679c\u6709\u5219\u4e0d\u5141\u8bb8\u5220\u9664 / \u66f4\u65b0\uff08\u4e0e RESTRICT \u4e00\u81f4\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"RESTRICT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5f53\u5728\u7236\u8868\u4e2d\u5220\u9664 / \u66f4\u65b0\u5bf9\u5e94\u8bb0\u5f55\u65f6\uff0c\u9996\u5148\u68c0\u67e5\u8be5\u8bb0\u5f55\u662f\u5426\u6709\u5bf9\u5e94\u5916\u952e\uff0c\u5982\u679c\u6709\u5219\u4e0d\u5141\u8bb8\u5220\u9664 / \u66f4\u65b0\uff08\u4e0e NO ACTION \u4e00\u81f4\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CASCADE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5f53\u5728\u7236\u8868\u4e2d\u5220\u9664 / \u66f4\u65b0\u5bf9\u5e94\u8bb0\u5f55\u65f6\uff0c\u9996\u5148\u68c0\u67e5\u8be5\u8bb0\u5f55\u662f\u5426\u6709\u5bf9\u5e94\u5916\u952e\uff0c\u5982\u679c\u6709\u5219\u4e5f\u5220\u9664 / \u66f4\u65b0\u5916\u952e\u5728\u5b50\u8868\u4e2d\u7684\u8bb0\u5f55")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SET NULL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5f53\u5728\u7236\u8868\u4e2d\u5220\u9664 / \u66f4\u65b0\u5bf9\u5e94\u8bb0\u5f55\u65f6\uff0c\u9996\u5148\u68c0\u67e5\u8be5\u8bb0\u5f55\u662f\u5426\u6709\u5bf9\u5e94\u5916\u952e\uff0c\u5982\u679c\u6709\u5219\u8bbe\u7f6e\u5b50\u8868\u4e2d\u8be5\u5916\u952e\u503c\u4e3a null\uff08\u8981\u6c42\u8be5\u5916\u952e\u5141\u8bb8\u4e3a null\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SET DEFAULT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7236\u8868\u6709\u53d8\u66f4\u65f6\uff0c\u5b50\u8868\u5c06\u5916\u952e\u8bbe\u4e3a\u4e00\u4e2a\u9ed8\u8ba4\u503c\uff08Innodb \u4e0d\u652f\u6301\uff09")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE \u8868\u540d ADD CONSTRAINT \u5916\u952e\u540d\u79f0 FOREIGN KEY (\u5916\u952e\u5b57\u6bb5) REFERENCES \u4e3b\u8868\u540d(\u4e3b\u8868\u5b57\u6bb5\u540d) ON UPDATE \u884c\u4e3a ON DELETE \u884c\u4e3a;\n-- \u5176\u5b9e\u5c31\u662f\u5728\u6dfb\u52a0\u5916\u952e\u65f6\u7684\u591a\u4e00\u4e2a\u5b9a\u4e49\n-- \u4f8b\u5982\uff1a\u5728\u7236\u8868\u4e2d\u5220\u9664/\u66f4\u65b0\u5bf9\u5e94\u8bb0\u5f55\u65f6\uff0c\u9996\u5148\u68c0\u67e5\u8be5\u8bb0\u5f55\u662f\u5426\u6709\u5bf9\u5e94\u5916\u952e\uff0c\u5982\u679c\u6709\u5219\u4e5f\u5220\u9664/\u66f4\u65b0\u5916\u952e\u5728\u5b50\u8868\u4e2d\u7684\u8bb0\u5f55\nalter table emp add constraint fk_emp_dept_id foreign key dept_id references dep(id) on update cascade on delete cascade;\n")))}c.isMDXComponent=!0}}]);