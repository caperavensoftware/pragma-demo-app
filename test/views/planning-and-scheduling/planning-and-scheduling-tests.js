
import {expect} from 'chai';
import 'aurelia-polyfills';
import {PlanningAndScheduling} from './../../../src/views/planning-and-scheduling/planning-and-scheduling';

describe('PlanningAndScheduling Tests', function() {
    let planningAndScheduling;

    beforeEach(function() {
        planningAndScheduling = new PlanningAndScheduling ();
    });
    
    it('constructor', function() {
        expect(planningAndScheduling).to.not.be.null;
    });
    
    it('not constructor', function() {
        expect(() => PlanningAndScheduling()).to.throw("Cannot call a class as a function");
    });    
})
