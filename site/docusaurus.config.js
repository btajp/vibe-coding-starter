// @ts-check

const config = {
  title: 'ゼロから始める Vibe Coding',
  tagline: 'AIを相棒に、理解しながら作るための開発入門教材',
  favicon: 'img/favicon.ico',

  url: 'https://btajp.github.io',
  baseUrl: '/vibe-coding-starter/',
  organizationName: 'btajp',
  projectName: 'vibe-coding-starter',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: '../docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({docPath}) =>
            `https://github.com/btajp/vibe-coding-starter/edit/main/docs/${docPath}`,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'ゼロから始める Vibe Coding',
      items: [
        {
          to: '/route',
          position: 'left',
          label: '基本編',
        },
        {
          to: '/advanced',
          position: 'left',
          label: '発展編',
        },
        {
          to: '/reference',
          position: 'left',
          label: 'リファレンス',
        },
        {
          href: 'https://github.com/btajp/vibe-coding-starter',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: '教材',
          items: [
            {
              label: 'まずここから',
              to: '/',
            },
            {
              label: '基本編',
              to: '/route',
            },
            {
              label: '発展編',
              to: '/advanced',
            },
            {
              label: 'リファレンス',
              to: '/reference',
            },
          ],
        },
        {
          title: 'リポジトリ',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/btajp/vibe-coding-starter',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} btajp.`,
    },
    prism: {
      additionalLanguages: ['bash'],
    },
  },
};

module.exports = config;
