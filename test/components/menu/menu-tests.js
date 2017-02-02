
import {expect} from 'chai';
import 'aurelia-polyfills';
import {Menu} from './../../../src/components/menu/menu';

describe('Menu Tests', function() {
    let menu;

    beforeEach(function() {
        menu = new Menu ({});
    });
    
    it('constructor', function() {
        expect(menu).to.not.be.null;
    });
    
    it('not constructor', function() {
        expect(() => Menu()).to.throw("Cannot call a class as a function");
    });    
})
