var _ = require("lodash");
var expect = require("chai").expect;
var pugToImage = require(".");

describe("pugToImage()", function () {
    context("given github.com", function () {
        it("returns the correct buffer", function (done) {
            this.timeout(10000);

            pugToImage("http://github.com").then(function (buffer) {
                var val = _.take(buffer, 3);

                expect(val).to.deep.equal([137, 80, 78]);

                done();
            });
        });
    });
});
