// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Integrated Retail Knowledge Hub',
  tagline:
    'Omnichannel POS, unified commerce and retail technology guides for fashion, lifestyle and CPG retailers in Asia Pacific',
  favicon: 'img/ir-icon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://kb.integratedretail.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'Integratedretail', // GitHub user name.
  projectName: 'KnowledgeBase', // GitHub repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      // GLPI-authored content can include images uploaded directly into
      // its editor, which serialize to GLPI-internal URLs (e.g.
      // /front/document.send.php?...) that can never resolve from a
      // static build. Warn instead of failing the whole build.
      onBrokenMarkdownImages: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          routeBasePath: '/blog',
          showReadingTime: true,
          blogTitle: 'Retail Technology Insights',
          blogDescription:
            'Guides on unified commerce, POS and retail technology for fashion, lifestyle and CPG retailers in Asia Pacific.',
          postsPerPage: 10,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        hashed: true,
        indexBlog: true,
        indexPages: true,
        docsRouteBasePath: '/docs',
        blogRouteBasePath: '/blog',
      }),
    ],
  ],

  headTags: [
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Integrated Retail',
        url: 'https://integratedretail.com',
        logo: 'https://kb.integratedretail.com/img/ir-logo.png',
      }),
    },
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Integrated Retail Knowledge Hub',
        url: 'https://kb.integratedretail.com/',
      }),
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Social share preview image (shown on LinkedIn/Facebook/X link previews).
      image: 'img/ir-logo.png',
      metadata: [
        {
          name: 'keywords',
          content:
            'retail POS system, unified commerce, omnichannel retail, retail technology Asia Pacific, Cegid, Retail Pro Prism, FootfallCam, POS software Singapore',
        },
        {
          name: 'google-site-verification',
          content: 'b1t5w47igNe-u1do8UFbE09Ckb_Yik3ewV9SzVrtG7Q',
        },
      ],
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        // Explicit empty title — the logo image already contains the
        // company name, so showing both would be redundant. Omitting this
        // key isn't enough; Docusaurus falls back to siteConfig.title.
        title: '',
        logo: {
          alt: 'Integrated Retail — Strategize, Execute, Grow',
          src: 'img/ir-logo.png',
          height: 40,
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Knowledge Base',
          },
          { to: '/blog', label: 'Insights', position: 'left' },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Knowledge Base',
            items: [
              { label: 'Product Documentation', to: '/docs/product-documentation/brochure' },
              { label: 'Cegid Retail Platform', to: '/docs/product-documentation/cegid-retail-platform' },
              { label: 'Retail Pro Prism Platform', to: '/docs/product-documentation/retail-pro-prism-platform' },
              { label: 'FootfallCam Platform', to: '/docs/product-documentation/footfallcam-platform' },
            ],
          },
          {
            title: 'Insights',
            items: [{ label: 'Retail Technology Blog', to: '/blog' }],
          },
          {
            title: 'Company',
            items: [
              { label: 'integratedretail.com', href: 'https://integratedretail.com' },
              { label: 'Contact us', href: 'https://integratedretail.com/contact/' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Integrated Retail. Content synced from the internal knowledge base.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
