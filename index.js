var pug = require("pug");
var phantom = require("phantom");

(async function () {
    const instance = await phantom.create();
    const page = await instance.createPage();
    const address = "http://github.com";

    page.property("viewportSize", { width: 600, height: 600 })

    const status = await page.open(address);

    var base64 = await page.renderBase64("PNG");

    console.log(Buffer.from(base64, "base64"));

    phantom.exit(1);
}());

// String -> Buffer
function pugToImage(pugString) {
    
}

module.exports = pugToImage;
