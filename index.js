var pug = require("pug");
var phantom = require("phantom");
var Promise = require("promise");

// String -> Number -> Number -> String -> Promise
function pugToImage(imageType, width, height, pugString) {
    let page, status, instance, base64;
    const address = pugString;

    return new Promise(function (resolve, reject) {
        phantom.create().then(function (_instance) {
            instance = _instance;

            return instance.createPage();
        }).then(function (_page) {
            page = _page;
            page.property("viewportSize", { width: width, height: height });

            return page.open(address);
        }).then(function (_status) {
            status = _status;

            return page.renderBase64(imageType);
        }).then(function (_base64) {
            base64 = _base64;

            resolve(Buffer.from(base64, "base64"));

            instance.exit(0);
        }).catch(function (error) {
            reject(error);

            instance.exit(1);
        });
    });
}

module.exports = pugToImage;
