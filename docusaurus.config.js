// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Lei Cheng's HomePage",
  tagline: "Speed Up!",
  url: "https://www.leicheng42.com",
  baseUrl: "/",
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "log",
  favicon: "img/avatar.jpg",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: '7wate', // Usually your GitHub org/user name.
  // projectName: 'wiki', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/leicheng42/Home/tree/main",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: false,
        },
        blog: {
          blogTitle: "Lay`s Blog",
          blogDescription: "Lay 的博客",
          blogSidebarCount: 7,
          blogSidebarTitle: "近期文章",
          showReadingTime: true,
          editUrl: "https://github.com/leicheng42/Home/tree/main",
          feedOptions: {
            title: "Lay`s Blog",
            description: "Lay 的博客",
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Lei Cheng, Inc.`,
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        // sitemap: {
        //   changefreq: "weekly",
        //   priority: 0.5,
        //   filename: 'sitemap.xml',
        // },
        // googleAnalytics: {
        //   trackingID: "G-MHMEL0F832",
        //   anonymizeIP: true,
        // },
        // gtag: {
        //   trackingID: 'G-MHMEL0F832',
        //   anonymizeIP: true,
        // },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "getting-started",
        path: "wiki/getting-started",
        routeBasePath: "getting-started",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/leicheng42/Home/tree/main",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "programming-language",
        path: "wiki/programming-language",
        routeBasePath: "programming-language",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://git.7wate.org/zhouzhongping/wiki/src/branch/master",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "structures-algorithms",
        path: "wiki/structures-algorithms",
        routeBasePath: "structures-algorithms",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://git.7wate.org/zhouzhongping/wiki/src/branch/master",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "computer-composition",
        path: "wiki/computer-composition",
        routeBasePath: "computer-composition",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://git.7wate.org/zhouzhongping/wiki/src/branch/master",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "computer-network",
        path: "wiki/computer-network",
        routeBasePath: "computer-network",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://git.7wate.org/zhouzhongping/wiki/src/branch/master",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "operating-system",
        path: "wiki/operating-system",
        routeBasePath: "operating-system",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://git.7wate.org/zhouzhongping/wiki/src/branch/master",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "database-system",
        path: "wiki/database-system",
        routeBasePath: "database-system",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://git.7wate.org/zhouzhongping/wiki/src/branch/master",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "computer-security",
        path: "wiki/computer-security",
        routeBasePath: "computer-security",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://git.7wate.org/zhouzhongping/wiki/src/branch/master",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "software-engineering",
        path: "wiki/software-engineering",
        routeBasePath: "software-engineering",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://git.7wate.org/zhouzhongping/wiki/src/branch/master",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "compilation-principle",
        path: "wiki/compilation-principle",
        routeBasePath: "compilation-principle",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://git.7wate.org/zhouzhongping/wiki/src/branch/master",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
// -----------------------------------------------------------------------------------
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "org",
        path: "group/organization",
        routeBasePath: "org",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://git.7wate.org/zhouzhongping/wiki/src/branch/master",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "com",
        path: "group/company",
        routeBasePath: "com",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://git.7wate.org/zhouzhongping/wiki/src/branch/master",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "gov",
        path: "group/government",
        routeBasePath: "gov",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://git.7wate.org/zhouzhongping/wiki/src/branch/master",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
// -----------------------------------------------------------------------------------
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "roadmap",
        path: "work/roadmap",
        routeBasePath: "roadmap",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://git.7wate.org/zhouzhongping/wiki/src/branch/master",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "devops",
        path: "work/devops",
        routeBasePath: "devops",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://git.7wate.org/zhouzhongping/wiki/src/branch/master",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "sre",
        path: "work/sre",
        routeBasePath: "sre",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://git.7wate.org/zhouzhongping/wiki/src/branch/master",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
// -----------------------------------------------------------------------------------
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "life",
        path: "life",
        routeBasePath: "life",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://git.7wate.org/zhouzhongping/wiki/src/branch/master",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
// -----------------------------------------------------------------------------------
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "journal",
        path: "journal",
        routeBasePath: "journal",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://git.7wate.org/zhouzhongping/wiki/src/branch/master",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],

    // "docusaurus-plugin-umami",
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     'Always For Freedom. The site by 7Wate.',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: false,
      // },
      metadata: [
        {
          name: "keywords",
          content: "7wate, wiki, blog, c, c++, java, python, linux",
        },
      ],
      navbar: {
        title: "🏠 Lay 的主页",
        hideOnScroll: true,
        // logo: {
        //   alt: 'Site Logo',
        //   src: 'img/logo.svg',
        //   srcDark: 'img/logo_dark.svg',
        //   href: 'https://docusaurus.io/',
        //   target: '_self',
        //   width: 32,
        //   height: 32,
        // },
        items: [
          { to: "/blog", label: "📝 博客", position: "right" },
          // {
          //   position: "right",
          //   label: "👨🏻‍🎓 维基",
          //   items: [
          //     {
          //       label: "基础入门",
          //       to: "/getting-started",
          //     },
          //     {
          //       label: "程序设计语言",
          //       to: "/programming-language",
          //     },
          //     {
          //       label: "数据结构与算法",
          //       to: "/structures-algorithms",
          //     },
          //     {
          //       label: "计算机组成",
          //       to: "/computer-composition",
          //     },
          //     {
          //       label: "计算机网络",
          //       to: "/computer-network",
          //     },
          //     {
          //       label: "计算机安全",
          //       to: "/computer-security",
          //     },
          //     {
          //       label: "操作系统",
          //       to: "/operating-system",
          //     },
          //     {
          //       label: "数据库系统",
          //       to: "/database-system",
          //     },
          //     {
          //       label: "软件工程",
          //       to: "/software-engineering",
          //     },       
          //     {
          //       label: "编译原理",
          //       to: "/compilation-principle",
          //     },
          //   ],
          // },
          // {
          //   position: "right",
          //   label: "👨‍💻 职业",
          //   items: [
          //     {
          //       label: "求职之路",
          //       to: "/roadmap",
          //     },
          //     {
          //       label: "SRE 工程师",
          //       to: "/sre",
          //     },
          //     {
          //       label: "DevOps 工程师",
          //       to: "/devops",
          //     },
          //   ]
          // },
          // {
          //   position: "right",
          //   label: "💼 组织",
          //   items: [
          //     {
          //       label: "自由社区",
          //       to: "/org",
          //     },
          //     {
          //       label: "现代企业",
          //       to: "/com",
          //     },
          //     {
          //       label: "国家政府",
          //       to: "/gov",
          //     },
          //   ]
          // },
          // { to: "/life", label: "🚴🏻‍♀️ 生活", position: "right" },
          // { to: "/journal", label: "📽️ 日志", position: "right" },
        ],
      },
      algolia: {
        apiKey: "6d29e679fd6cfdd7256e1e15b52817dc",
        appId: "YN0RH7UG4B",
        indexName: "leicheng42",
      },
      // umami: {
      //   websiteid: "7efcd733-c232-43db-9f17-10a00c53b152",
      //   src: "https://umami.7wate.org/script.js",
      // },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Lei Cheng, Inc. Built with <a href="https://www.docusaurus.cn/" target="_blank" rel="noopener noreferrer">Docusaurus</a>.<br>Powered by <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">Vercel</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: "markdown",
        additionalLanguages: ["java", "git","nginx","http"],
      },
      mermaid: {
        theme: {light: 'neutral', dark: 'forest'},
      },
    }),
    markdown: {
      mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid'],
};

module.exports = config;
