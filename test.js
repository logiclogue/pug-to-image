var _ = require("lodash");
var expect = require("chai").expect;
var fs = require("fs");
var pugToImage = require(".");

describe("pugToImage()", function () {
    context("given github.com", function () {
        it("returns the correct buffer", function (done) {
            this.timeout(10000);

            pugToImage("PNG", 100, 100, "http://github.com")
            .then(function (buffer) {
                var val = _.take(buffer, 3);

                expect(val).to.deep.equal([137, 80, 78]);

                done();
            });
        });

        it("writes to a file", function (done) {
            this.timeout(10000);

            pugToImage("PNG", 100, 100, "http://github.com")
            .then(function (buffer) {
                fs.writeFile("test.png", buffer, function () {
                    done();
                });
            })
        });
    });
});
