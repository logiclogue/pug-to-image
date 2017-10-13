var pug = require("pug");
var phantom = require("phantom");

(async function () {
    const instance = await phantom.create();
    const page = await instance.createPage();
    const address = "http://github.com";

    page.property("viewportSize", { width: 600, height: 600 })

    const status = await page.open(address);
    const content = await page.property("renderBuffer", "png", -1);

    console.log("HERE");

    for (var method in page) {
        console.log(method);
    }

    var buffer = page.renderBuffer("png", -1);

    phantom.exit(1);
}());

// String -> Buffer
function pugToImage(pugString) {
    
}

module.exports = pugToImage;
