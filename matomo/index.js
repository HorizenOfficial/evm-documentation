const path = require("path");

module.exports = function (context) {
  const isProd = process.env.NODE_ENV === "production";

  return {
    name: "docusaurus-plugin-matomo",

    getClientModules() {
      return isProd ? [path.resolve(__dirname, "./track")] : [];
    },

    injectHtmlTags() {
      if (!isProd) {
        return {};
      }
      return {
        headTags: [
          {
            tagName: "link",
            attributes: {
              rel: "preconnect",
              href: `https://horizen.matomo.cloud/`,
            },
          },
          {
            tagName: "script",
            innerHTML: `
            var _paq = window._paq = window._paq || [];
            /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
            _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
            _paq.push(["setCookieDomain", "*.dune.horizen.io"]);
            _paq.push(["setDomains", ["*.dune.horizen.io","*.dune-explorer.horizen.io"]]);
            _paq.push(["enableCrossDomainLinking"]);
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="https://horizen.matomo.cloud/";
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', '7']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; g.src='//cdn.matomo.cloud/horizen.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
            })();
            `,
          },
        ],
      };
    },
  };
};
