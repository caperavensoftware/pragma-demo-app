
import {expect} from 'chai';
import 'aurelia-polyfills';
import {Details} from './../../../src/views/details/details';

describe('Details Tests', function() {
    let details;

    beforeEach(function() {
        details = new Details ();
    });
    
    it('constructor', function() {
        expect(details).to.not.be.null;
    });
    
    it('not constructor', function() {
        expect(() => Details()).to.throw("Cannot call a class as a function");
    });    
})
