var pug = require("pug");
var phantom = require("phantom");

(function () {
    let page, status, instance, base64;
    const address = "http://github.com";

    phantom.create().then(function (_instance) {
        instance = _instance;

        return instance.createPage();
    }).then(function (_page) {
        page = _page;
        page.property("viewportSize", { width: 600, height: 600 });

        return page.open(address);
    }).then(function (_status) {
        status = _status;

        return page.renderBase64("PNG");
    }).then(function (_base64) {
        base64 = _base64;

        console.log(Buffer.from(base64, "base64"));

        phantom.exit(1);
    });
}());

// String -> Buffer
function pugToImage(pugString) {
    
}

module.exports = pugToImage;
