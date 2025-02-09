"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[77117],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),s=p(t),d=l,m=s["".concat(c,".").concat(d)]||s[d]||h[d]||i;return t?a.createElement(m,o(o({ref:n},u),{},{components:t})):a.createElement(m,o({ref:n},u))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,o=new Array(i);o[0]=s;var r={};for(var c in n)hasOwnProperty.call(n,c)&&(r[c]=n[c]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},80990:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=t(87462),l=(t(67294),t(3905));const i={title:"langchain-ChatGLM \u90e8\u7f72\u6559\u7a0b",description:"langchain-ChatGLM Linux\u90e8\u7f72\u6559\u7a0b pip\u7248",keywords:["\u5f00\u6e90"],tags:["\u5f00\u6e90"],authors:["Lay Cheng"],date:new Date("2023-06-15T00:00:00.000Z")},o=void 0,r={permalink:"/blog/langchain-ChatGLM\u90e8\u7f72\u6559\u7a0b",editUrl:"https://github.com/leicheng42/Home/tree/main/blog/langchain-ChatGLM\u90e8\u7f72\u6559\u7a0b.md",source:"@site/blog/langchain-ChatGLM\u90e8\u7f72\u6559\u7a0b.md",title:"langchain-ChatGLM \u90e8\u7f72\u6559\u7a0b",description:"langchain-ChatGLM Linux\u90e8\u7f72\u6559\u7a0b pip\u7248",date:"2023-06-15T00:00:00.000Z",formattedDate:"2023\u5e746\u670815\u65e5",tags:[{label:"\u5f00\u6e90",permalink:"/blog/tags/\u5f00\u6e90"}],readingTime:2.175,hasTruncateMarker:!1,authors:[{name:"Lay Cheng",title:"Speed Up !",url:"https://www.leicheng42.com",imageURL:"https://leicheng42img-1252305483.cos.ap-shanghai.myqcloud.com/pictures/1331692286790_.pic.jpg",key:"Lay Cheng"}],frontMatter:{title:"langchain-ChatGLM \u90e8\u7f72\u6559\u7a0b",description:"langchain-ChatGLM Linux\u90e8\u7f72\u6559\u7a0b pip\u7248",keywords:["\u5f00\u6e90"],tags:["\u5f00\u6e90"],authors:["Lay Cheng"],date:"2023-06-15T00:00:00.000Z"},nextItem:{title:"ChatGPT \u8d26\u53f7\u6ce8\u518c\u53ca\u4f7f\u7528",permalink:"/blog/1-ChatGPT\u8d26\u53f7\u6ce8\u518c\u53ca\u4f7f\u7528"}},c={authorsImageUrls:[void 0]},p=[{value:"1. \u51c6\u5907linux\u7cfb\u7edf",id:"1-\u51c6\u5907linux\u7cfb\u7edf",level:2},{value:"3. \u521b\u5efa\u73af\u5883",id:"3-\u521b\u5efa\u73af\u5883",level:2},{value:"1.  Install\xa0Anaconda\xa0or\xa0Pip. Here we install miniconda",id:"1--installanacondaorpip-here-we-install-miniconda",level:3},{value:"2. \u5b89\u88c5\u663e\u5361\u9a71\u52a8",id:"2-\u5b89\u88c5\u663e\u5361\u9a71\u52a8",level:3},{value:"3. \u521b\u5efaconda\u73af\u5883",id:"3-\u521b\u5efaconda\u73af\u5883",level:3},{value:"3. Clone\u4ed3\u5e93\uff0c\u5b89\u88c5\u4f9d\u8d56\uff0c\u8fd0\u884c\u7a0b\u5e8f",id:"3-clone\u4ed3\u5e93\u5b89\u88c5\u4f9d\u8d56\u8fd0\u884c\u7a0b\u5e8f",level:2},{value:"1. clone\u4ed3\u5e93",id:"1-clone\u4ed3\u5e93",level:3},{value:"2. \u5b89\u88c5\u4f9d\u8d56",id:"2-\u5b89\u88c5\u4f9d\u8d56",level:3},{value:"3. \u8fd0\u884c\u7a0b\u5e8f",id:"3-\u8fd0\u884c\u7a0b\u5e8f",level:3},{value:"4. webui \u6548\u679c",id:"4-webui-\u6548\u679c",level:3},{value:"4. \u5982\u6709\u95ee\u9898\uff0c\u53ef\u4ee5\u79c1\u804a\u8054\u7cfb",id:"4-\u5982\u6709\u95ee\u9898\u53ef\u4ee5\u79c1\u804a\u8054\u7cfb",level:2}],u={toc:p};function h(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u53c2\u8003\u8fde\u63a5\uff1a\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/imClumsyPanda/langchain-ChatGLM#%E5%BC%80%E5%8F%91%E9%83%A8%E7%BD%B2"},"https://github.com/imClumsyPanda/langchain-ChatGLM#%E5%BC%80%E5%8F%91%E9%83%A8%E7%BD%B2")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/imClumsyPanda/langchain-ChatGLM/blob/master/docs/INSTALL.md"},"https://github.com/imClumsyPanda/langchain-ChatGLM/blob/master/docs/INSTALL.md")),(0,l.kt)("h2",{id:"1-\u51c6\u5907linux\u7cfb\u7edf"},"1. \u51c6\u5907linux\u7cfb\u7edf"),(0,l.kt)("p",null,"\u8fd9\u91cc\u53c2\u6570\u5982\u4e0b\uff08\u5177\u4f53\u7cfb\u7edf\u8981\u6c42\uff0c\u7b26\u5408\u5b98\u65b9\u8981\u6c42\u5c31\u884c\uff09\n\u7cfb\u7edf\u7248\u672c\uff1aUbuntu 18.04 64\u4f4d\nGPU\u578b\u53f7\uff1aV100 32GB"),(0,l.kt)("h2",{id:"3-\u521b\u5efa\u73af\u5883"},"3. \u521b\u5efa\u73af\u5883"),(0,l.kt)("h3",{id:"1--installanacondaorpip-here-we-install-miniconda"},"1.  Install\xa0",(0,l.kt)("a",{parentName:"h3",href:"https://pytorch.org/get-started/locally/#anaconda"},"Anaconda"),"\xa0or\xa0",(0,l.kt)("a",{parentName:"h3",href:"https://pytorch.org/get-started/locally/#pip"},"Pip"),". Here we install miniconda"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u4e0b\u8f7dconda\u5b89\u88c5\u5305\nwget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh\n# \u6388\u6743\u6743\u9650\nchmod +x Miniconda3-latest-Linux-x86_64.sh\n# \u4ece\u5b89\u88c5\u5305\u5b89\u88c5conda\uff0c\u4e00\u8defenter\u548cyes\uff0c\u76f4\u5230\u5b89\u88c5\u6210\u529f\n./Miniconda3-latest-Linux-x86_64.sh\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u53c2\u8003\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.conda.io/en/latest/miniconda.html"},"https://docs.conda.io/en/latest/miniconda.html"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://varhowto.com/install-miniconda-ubuntu-18-04/"},"https://varhowto.com/install-miniconda-ubuntu-18-04/"))),(0,l.kt)("h3",{id:"2-\u5b89\u88c5\u663e\u5361\u9a71\u52a8"},"2. \u5b89\u88c5\u663e\u5361\u9a71\u52a8"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u66f4\u65b0 apt-get\nsudo apt-get update\n# \u5b89\u88c5\u663e\u5361\u9a71\u52a8\uff0c\u4e00\u8def y+enter\nsudo apt-get install nvidia-driver-460\n\n# \u5fc5\u987b\u6267\u884c\uff1a\u91cd\u542f\u7535\u8111\uff0c\u4f7f\u663e\u5361\u9a71\u52a8\u751f\u6548 reboot your computer after installation!!!\uff0c\u624b\u52a8\u91cd\u542f\u6216\u8005sudo reboot\u547d\u4ee4\n\n# \u91cd\u542f\u540e\u67e5\u770b\u663e\u5361\u9a71\u52a8\u9762\u677f\uff0c\u662f\u5426\u80fd\u663e\u793a\u663e\u5361\u4fe1\u606f\nnvidia-smi\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u53c2\u8003\n",(0,l.kt)("a",{parentName:"p",href:"https://medium.com/analytics-vidhya/install-cuda-11-2-cudnn-8-1-0-and-python-3-9-on-rtx3090-for-deep-learning-fcf96c95f7a1"},"https://medium.com/analytics-vidhya/install-cuda-11-2-cudnn-8-1-0-and-python-3-9-on-rtx3090-for-deep-learning-fcf96c95f7a1"))),(0,l.kt)("h3",{id:"3-\u521b\u5efaconda\u73af\u5883"},"3. \u521b\u5efaconda\u73af\u5883"),(0,l.kt)("p",null,"\u7531\u4e8e\u9879\u76ee\u4e2d\u7684\u67d0\u4e9b\u7b2c\u4e09\u65b9\u5305\u4e0d\u652f\u6301\u6700\u65b0\u7684python3.11\uff0c\u8fd9\u91cc\u5c31\u5b89\u88c5python3.8"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u521b\u5efaconda\u73af\u5883\nconda create -n langchain python=3.8\n# \u8fdb\u5165conda\u73af\u5883\nconda activate langchain\n# \u5173\u95edconda\u73af\u5883\uff0c\u4e0d\u4f7f\u7528conda\u73af\u5883\u65f6\u518d\u7528\n# conda deactivate\n")),(0,l.kt)("h2",{id:"3-clone\u4ed3\u5e93\u5b89\u88c5\u4f9d\u8d56\u8fd0\u884c\u7a0b\u5e8f"},"3. Clone\u4ed3\u5e93\uff0c\u5b89\u88c5\u4f9d\u8d56\uff0c\u8fd0\u884c\u7a0b\u5e8f"),(0,l.kt)("h3",{id:"1-clone\u4ed3\u5e93"},"1. clone\u4ed3\u5e93"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u62c9\u53d6\u4ed3\u5e93\ngit clone https://github.com/imClumsyPanda/langchain-ChatGLM.git\n")),(0,l.kt)("h3",{id:"2-\u5b89\u88c5\u4f9d\u8d56"},"2. \u5b89\u88c5\u4f9d\u8d56"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u8fdb\u5165\u76ee\u5f55\ncd langchain-ChatGLM\n\n# \u627e\u5230\u5f53\u524d\u8fd0\u884c\u7684python\nwhich python # /home/ubuntu/miniconda3/bin/python\n\n\n# \u6307\u5b9apython\u7684pip \u5b89\u88c5\u4f9d\u8d56\uff0c\u4f7f\u7528\u4e2d\u79d1\u5927\u955c\u50cf\u6e90\u52a0\u901f\u4e0b\u8f7d\n/home/ubuntu/miniconda3/bin/python -m pip install -r requirements.txt -i https://pypi.mirrors.ustc.edu.cn/simple/\n\n")),(0,l.kt)("h3",{id:"3-\u8fd0\u884c\u7a0b\u5e8f"},"3. \u8fd0\u884c\u7a0b\u5e8f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u4f7f\u7528\u4e0a\u9762\u7684\u6307\u5b9apython\u8fd0\u884cwebui.py\uff0c\u52a0\u8f7d\u5b8c\uff0c\u6253\u5f00webui\u7684\u94fe\u63a5\u5c31\u53ef\u4ee5\u4f7f\u7528\u4e86\n# \u8fd9\u4e00\u6b65\u4f1a\u4e0b\u8f7d\u6a21\u578b\u53c2\u6570\uff0c\u5982\u679c\u7f51\u7edc\u4e0d\u597d\u53ef\u4ee5\u53c2\u7167\u5b98\u65b9ChatGLM\u624b\u52a8\u4e0b\u8f7d\u53c2\u6570\u7684\u65b9\u6cd5\n/home/ubuntu/miniconda3/bin/python webui.py\n\n")),(0,l.kt)("h3",{id:"4-webui-\u6548\u679c"},"4. webui \u6548\u679c"),(0,l.kt)("p",null,"http://localhost:7860/"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://leicheng42img-1252305483.cos.ap-shanghai.myqcloud.com/pictures/20230608144750.png",alt:"image.png"})),(0,l.kt)("h2",{id:"4-\u5982\u6709\u95ee\u9898\u53ef\u4ee5\u79c1\u804a\u8054\u7cfb"},"4. \u5982\u6709\u95ee\u9898\uff0c\u53ef\u4ee5\u79c1\u804a\u8054\u7cfb"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://leicheng42img-1252305483.cos.ap-shanghai.myqcloud.com/pictures/20230608144458.png",alt:"image.png|200"})))}h.isMDXComponent=!0}}]);