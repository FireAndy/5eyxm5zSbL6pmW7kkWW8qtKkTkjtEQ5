(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'ezypro10.myshopify.com',
      apiKey: '1678ed29c862abcacb72952f163bd3d0',
      appId: '6',
    });

    var userLanguage = navigator.language || navigator.userLanguageuage;
    if (userLanguage === 'da-DK' || userLanguage === 'da' || userLanguage === 'no' || userLanguage === 'sv' || userLanguage === 'sv-FI' ) {
      var pageLanguage = 'da';
    } else {
      var pageLanguage = 'en';
    }

    var buttonText = "BUY NOW";
    if (pageLanguage === 'da') { buttonText = "KØB NU"; }

    var options = {
      "product": {
        "variantId": "all",
        "width": "100%",
        "@media (min-width: 992px) and (max-width: 1199px)": {
          // "width": "130px !important",
        },
        "@media (max-width: 991px)": {
          // "width": "100% !important",
        },
        "contents": {
          "img": false,
          "title": false,
          "variantTitle": false,
          "price": false,
          "description": false,
          "buttonWithQuantity": false,
          "quantity": false
        },
        "text": {
          "button": "BUY NOW"
        },
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "calc(25% - 20px)",
              "margin-left": "20px",
              "margin-bottom": "50px"
            },
          },
          "buttonWrapper": {
            "margin-top": "8px",
          },
          "button": {
            "background-color": "#ffbf25",
            "padding-left": "12px",
            "padding-right": "12px",
            "width": "100%",
            "@media (min-width: 992px) and (max-width: 1199px)": {
              "width": "130px",
            },
            "@media (max-width: 991px)": {
              "width": "100%",
            },
            ":hover": {
              "background-color": "#f8e450"
            },
            ":focus": {
              "background-color": "#387bb8"
            },
          }
        }
      },
      "cart": {
        "contents": {
          "button": true
        },
        "styles": {
          "button": {
            "background-color": "#3e89cc",
            ":hover": {
              "background-color": "#387bb8"
            },
            ":focus": {
              "background-color": "#387bb8"
            }
          },
          "footer": {
            "background-color": "#ffffff"
          }
        }
      },
      "modalProduct": {
        "contents": {
          "variantTitle": false,
          "buttonWithQuantity": false,
          "quantity": false
        },
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "100%",
              "margin-left": "0px",
              "margin-bottom": "0px"
            }
          },
          "button": {
            "background-color": "#3e89cc",
            "padding-left": "80px",
            "padding-right": "80px",
            ":hover": {
              "background-color": "#387bb8"
            },
            ":focus": {
              "background-color": "#387bb8"
            }
          }
        }
      },
      "toggle": {
        "styles": {
          "toggle": {
            "background-color": "#3e89cc",
            ":hover": {
              "background-color": "#387bb8"
            },
            ":focus": {
              "background-color": "#387bb8"
            }
          }
        }
      },
      "productSet": {
        "styles": {
          "products": {
            "@media (min-width: 601px)": {
              "margin-left": "-20px"
            }
          }
        }
      }
    }

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [9762837319],
        node: document.getElementById('product-component-c69768b99ab'),
        moneyFormat: '%7B%7Bamount_with_comma_separator%7D%7D%20kr',
        options: options
      });
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [10348262867],
        node: document.getElementById('product-component-91fcf53eab0'),
        moneyFormat: '%7B%7Bamount_with_comma_separator%7D%7D%20kr',
        options: options
      });
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [9718377607],
        node: document.getElementById('product-component-32e80b34e9c'),
        moneyFormat: '%7B%7Bamount_with_comma_separator%7D%7D%20kr',
        options: options
      });
    });

    //PB Coffee
     ShopifyBuy.UI.onReady(client).then(function (ui) {
       ui.createComponent('product', {
         id: [536334860348],
         node: document.getElementById('product-component-k3h113au84g'),
         moneyFormat: '%7B%7Bamount_with_comma_separator%7D%7D%20kr',
         options: options
       });
     });    
    
      //PB Strawberry
    // ShopifyBuy.UI.onReady(client).then(function (ui) {
    //   ui.createComponent('product', {
    //     id: [9542082567],
    //     node: document.getElementById('product-component-a15233353a7'),
    //     moneyFormat: '%7B%7Bamount_with_comma_separator%7D%7D%20kr',
    //     options: options
    //   });
    // }); 
      
    //PB 3 variant 200g
     ShopifyBuy.UI.onReady(client).then(function (ui) {
       ui.createComponent('product', {
         id: [12450101075],
         node: document.getElementById('product-component-a15233353a7'),
         moneyFormat: '%7B%7Bamount_with_comma_separator%7D%7D%20kr',
         options: options
       });
     }); 
      
      //OMEGA 3
     ShopifyBuy.UI.onReady(client).then(function (ui) {
       ui.createComponent('product', {
         id: [12273117651],
         node: document.getElementById('product-component-ef1da729b1e'),
         moneyFormat: '%7B%7Bamount_with_comma_separator%7D%7D%20kr',
         options: options
       });
     }); 

    //PB 3 variant
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [10031751623],
        node: document.getElementById('product-component-2a9a660baca'),
        moneyFormat: '%7B%7Bamount_with_comma_separator%7D%7D%20kr',
        options: options
      });
    });
      
    //10 PCS Shakes
     ShopifyBuy.UI.onReady(client).then(function (ui) {
       ui.createComponent('product', {
         id: [190660476947],
         node: document.getElementById('product-component-f5b0a504361'),
         moneyFormat: '%7B%7Bamount_with_comma_separator%7D%7D%20kr',
         options: options
       });
     });       

    // Make a unique copy, not a linked reference:
    var powerMoringaOptions = JSON.parse(JSON.stringify(options));
    powerMoringaOptions['product']['styles']['button']['background-color'] = '#c8c9d2';
    powerMoringaOptions['product']['styles']['buttonWrapper']['margin-top'] = '26px';

    //4 pcs Moringa Shake
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [7762674055],
        node: document.getElementById('product-component-613b1dc7cc5'),
        moneyFormat: '%7B%7Bamount_with_comma_separator%7D%7D%20kr',
        options: powerMoringaOptions
      });
    }); 

    //4 pcs Power Shake
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [5429689543],
        node: document.getElementById('product-component-6e9b8307985'),
        moneyFormat: '%7B%7Bamount_with_comma_separator%7D%7D%20kr',
        options: powerMoringaOptions
      });
    }); 
    
  }
})();