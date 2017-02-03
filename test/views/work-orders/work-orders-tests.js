
import {expect} from 'chai';
import 'aurelia-polyfills';
import {WorkOrders} from './../../../src/views/work-orders/work-orders';

describe('WorkOrders Tests', function() {
    let workOrders;

    beforeEach(function() {
        workOrders = new WorkOrders ();
    });
    
    it('constructor', function() {
        expect(workOrders).to.not.be.null;
    });
    
    it('not constructor', function() {
        expect(() => WorkOrders()).to.throw("Cannot call a class as a function");
    });    
})
