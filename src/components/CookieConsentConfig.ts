import type { CookieConsentConfig } from "vanilla-cookieconsent";

const getConfig = () => {
  const config: CookieConsentConfig = {
    onFirstConsent: ({ cookie }) => {
      console.log("onFirstConsent fired", cookie);
    },

    onConsent: ({ cookie }) => {
      console.log("onConsent fired!", cookie);
    },

    onChange: ({ changedCategories, changedServices }) => {
      console.log("onChange fired!", changedCategories, changedServices);
    },

    onModalReady: ({ modalName }) => {
      console.log("ready:", modalName);
    },

    onModalShow: ({ modalName }) => {
      console.log("visible:", modalName);
    },

    onModalHide: ({ modalName }) => {
      console.log("hidden:", modalName);
    },

    guiOptions: {
      consentModal: {
        layout: "box inline",
        position: "bottom left",
        equalWeightButtons: true,
        flipButtons: false,
      },
      preferencesModal: {
        layout: "box",
        equalWeightButtons: true,
        flipButtons: false,
      },
    },

    categories: {
      necessary: {
        enabled: true,
        readOnly: true,
      },
      analytics: {
        autoClear: {
          cookies: [
            {
              name: /^_ga/,
            },
            {
              name: "_gid",
            },
          ],
        },

        services: {
          ga: {
            label: "Google Analytics",
            onAccept: () => {
              if (typeof window.gtag !== "undefined") {
                window.gtag("consent", "update", {
                  ad_storage: "granted",
                  analytics_storage: "granted",
                });
              }
            },
            onReject: () => {
              if (typeof window.gtag !== "undefined") {
                window.gtag("consent", "update", {
                  ad_storage: "denied",
                  analytics_storage: "denied",
                });
              }
            },
          },
        },
      },
    },

    language: {
      default: "en",
      translations: {
        en: {
          consentModal: {
            title: "We Value Your Privacy",
            description:
              "We use cookies to enhance your browsing experience, analyze site traffic, and provide personalized content. You can manage your preferences or accept all cookies.",
            acceptAllBtn: "Accept All Cookies",
            acceptNecessaryBtn: "Only Necessary Cookies",
            showPreferencesBtn: "Manage Cookie Preferences",
            closeIconLabel: "Reject All and Close",
            footer: `
      <a href="#privacy-policy" target="_blank">Privacy Policy</a>
      <a href="#terms" target="_blank">Terms & Conditions</a>
    `,
          },
          preferencesModal: {
            title: "Manage Your Cookie Preferences",
            acceptAllBtn: "Accept All Cookies",
            acceptNecessaryBtn: "Only Necessary Cookies",
            savePreferencesBtn: "Save Preferences",
            closeIconLabel: "Close Preferences",
            serviceCounterLabel: "Service|Services",
            sections: [
              {
                title: "Your Privacy Choices",
                description: `This panel allows you to choose which types of cookies you allow us to use. You can update these preferences at any time.`,
              },
              {
                title: "Strictly Necessary Cookies",
                description:
                  "These cookies are essential for the website to function properly. They cannot be disabled.",
                linkedCategory: "necessary",
              },
              {
                title: "Performance and Analytics Cookies",
                description:
                  "These cookies help us understand how visitors interact with our site, so we can improve performance. All data is anonymized.",
                linkedCategory: "analytics",
                cookieTable: {
                  caption: "Analytics Cookies",
                  headers: {
                    name: "Cookie",
                    domain: "Domain",
                    desc: "Purpose",
                  },
                  body: [
                    {
                      name: "_ga",
                      domain: location.hostname,
                      desc: "Used by Google Analytics to distinguish users",
                    },
                    {
                      name: "_gid",
                      domain: location.hostname,
                      desc: "Used by Google Analytics to distinguish users",
                    },
                  ],
                },
              },
              {
                title: "Targeting and Advertising Cookies",
                description:
                  "These cookies are used to deliver ads that are relevant to your interests. They help us measure the effectiveness of our advertising campaigns.",
                linkedCategory: "ads",
              },
              {
                title: "More Information",
                description:
                  'For any questions regarding our use of cookies, please <a href="#contact-page">contact us</a>.',
              },
            ],
          },
        },
      },
    },
  };

  return config;
};

export default getConfig;
