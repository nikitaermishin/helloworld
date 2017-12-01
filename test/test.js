// test.js
var chai = require('chai'),
    expect = chai.expect,
    sinonChai = require('sinon-chai'),
    sinon = require('sinon'),
    helloWorldModule = require('../index.js');

chai.use(sinonChai);

describe('Hello World Module', function () {

    beforeEach(function () {
        sinon.spy(console, 'log');
    });

    afterEach(function () {
        console.log.restore();
    });

    describe('log to console', function () {
        it('should log to console', function () {
            helloWorldModule();
            expect(console.log).to.be.called;
        });
    });

    describe('log to console "Hello World"', function () {
        it('should log to console', function () {
            helloWorldModule();
            expect(console.log).to.have.been.calledWith("Hello World");
        });
    });
});