// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Horizen EON Documentation',
  url: 'https://eon.horizen.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/EON-favicon.svg',

  plugins: [
    "./matomo",
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/docs/',
            from: '/',
          },
        ],
      },
    ],
  ],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          routeBasePath: '/docs/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Horizen EON Logo',
          src: 'img/HEON_logo_dark_1.svg',
          srcDark: 'img/HEON_logo_light_1.svg',
          href: '/docs/',
        },
        items: [
          {
            type: 'doc',
            docId: 'get-started',
            position: 'left',
            label: 'Documentation',
          },
        ],
      },
      colorMode: {
        defaultMode: 'dark',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
