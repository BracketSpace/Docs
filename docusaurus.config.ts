import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'BracketSpace Documentation',
  tagline: 'Complete documentation for BracketSpace WordPress plugins',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.bracketspace.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'bracketspace', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'notification',
        path: 'plugins/notification/docs',
        routeBasePath: 'notification',
        sidebarPath: './plugins/notification/notification.ts',
        breadcrumbs: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'advanced-cron-manager',
        path: 'plugins/advanced-cron-manager/docs',
        routeBasePath: 'advanced-cron-manager',
        sidebarPath: './plugins/advanced-cron-manager/advanced-cron-manager.ts',
        breadcrumbs: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'pretty-email',
        path: 'plugins/pretty-email/docs',
        routeBasePath: 'pretty-email',
        sidebarPath: './plugins/pretty-email/pretty-email.ts',
        breadcrumbs: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'easy-watermark',
        path: 'plugins/easy-watermark/docs',
        routeBasePath: 'easy-watermark',
        sidebarPath: './plugins/easy-watermark/easy-watermark.ts',
        breadcrumbs: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Remove edit links for now
          // editUrl: 'https://github.com/bracketspace/docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en"],
        docsRouteBasePath: ["/docs", "/notification", "/advanced-cron-manager", "/pretty-email", "/easy-watermark"],
        docsDir: ["docs", "plugins/notification/docs", "plugins/advanced-cron-manager/docs", "plugins/pretty-email/docs", "plugins/easy-watermark/docs"],
        searchContextByPaths: [
          "docs",
          "notification", 
          "advanced-cron-manager",
          "pretty-email",
          "easy-watermark"
        ],
        indexDocs: true,
        indexBlog: false,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchBarShortcut: true,
        searchBarShortcutHint: true,
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'BracketSpace',
      logo: {
        alt: 'BracketSpace Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: 'Notification',
          to: '/notification',
          position: 'left',
        },
        {
          label: 'Advanced Cron Manager',
          to: '/advanced-cron-manager',
          position: 'left',
        },
        {
          label: 'Pretty Email',
          to: '/pretty-email',
          position: 'left',
        },
        {
          label: 'Easy Watermark',
          to: '/easy-watermark',
          position: 'left',
        },
        {
          href: 'https://bracketspace.com',
          label: 'BracketSpace',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Plugins',
          items: [
            {
              label: 'Notification',
              to: '/notification',
            },
            {
              label: 'Advanced Cron Manager',
              to: '/advanced-cron-manager',
            },
            {
              label: 'Pretty Email',
              to: '/pretty-email',
            },
            {
              label: 'Easy Watermark',
              to: '/easy-watermark',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'WordPress.org',
              href: 'https://profiles.wordpress.org/bracketspace/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/bracketspace',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'BracketSpace',
              href: 'https://bracketspace.com',
            },
            {
              label: 'Support',
              href: 'https://bracketspace.com/support/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BracketSpace. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
