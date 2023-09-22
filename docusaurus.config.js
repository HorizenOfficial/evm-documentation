// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// read versions names
// const versions = require('./versions.json');

// remove the first version from the list, which is the current one, and will be used as the default version
// versions.shift();

// const dynamicVersions = versions.reduce((result, version) => {
//   const path = version.toLowerCase().replace(/\s+/g, '-');
//   result[version] = { path };
//   return result;
// }, {});

// Algolia search config
// Values are stored in cloudflare
const algoliaConfig = process.env.ALGOLIA_APP_ID
  ? {
      algolia: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        replaceSearchResultPathname: {
          from: '/docs/',
          to: '/',
        },
      },
    }
  : {};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Horizen Documentation",
  url: "https://docs.horizen.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.svg",

  plugins: ["./matomo"],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // includeCurrentVersion: false,
          // versions: dynamicVersions
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "Horizen EON Logo",
          src: "img/horizenDOCS-dark.svg",
          srcDark: "img/horizenDOCS-white.svg",
          href: '/',
          target: "_self",
        },
        items: [
          {
            type: "doc",
            docId: "horizen_eon/introduction_what_is_eon/introduction",
            position: "left",
            label: "Horizen EON",
          },
          // {
          //   type: 'doc',
          //   docId: "governance/overview/about",
          //   position: "left",
          //   label: "Governance",
          // },
        ],
      },
      ...algoliaConfig,
      colorMode: {
        defaultMode: "dark",
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      image:
        "https://eon.horizen.io/docs/img/Meta_Image_Horizen-documentation.jpg",
    }),
};

module.exports = config;
