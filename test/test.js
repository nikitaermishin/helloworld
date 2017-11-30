'use strict';

const chai = require('chai');
const expect = chai.expect;
const helloWorld = require('../index');
chai.use(require('sinon-chai'));
require('mocha-sinon');

describe('#helloWorld', function() {

    beforeEach(function() {
        this.sinon.stub(console, 'log');
    });

    it('should log "Hello World"', function() {
        helloWorld();
        expect( console.log.calledOnce ).to.be.true;
        expect( console.log.calledWith('Hello World') ).to.be.true;
    });
});