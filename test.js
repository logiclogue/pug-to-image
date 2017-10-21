var _ = require("lodash");
var expect = require("chai").expect;
var fs = require("fs");
var pugToImage = require(".");

describe("pugToImage()", function () {
    context("given github.com", function () {
        let createImage;

        before(function () {
            createImage = pugToImage("PNG", 512, 512, "test.pug");
        });

        it("returns the correct buffer", function (done) {
            this.timeout(10000);

            createImage({ name: "Jordan" })
                .then((buffer) => {
                    var val = _.take(buffer, 3);

                    expect(val).to.deep.equal([137, 80, 78]);

                    done();
                });
        });

        it("writes to a file", function (done) {
            this.timeout(10000);

            createImage({ name: "Jordan" })
                .then((buffer) => {
                    fs.writeFile("test.png", buffer, done);
                })
        });
    });
});
