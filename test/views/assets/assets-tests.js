
import {expect} from 'chai';
import 'aurelia-polyfills';
import {Assets} from './../../../src/views/assets/assets';

describe('Assets Tests', function() {
    let assets;

    beforeEach(function() {
        assets = new Assets ();
    });
    
    it('constructor', function() {
        expect(assets).to.not.be.null;
    });
    
    it('not constructor', function() {
        expect(() => Assets()).to.throw("Cannot call a class as a function");
    });    
})
