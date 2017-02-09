import {ViewBase} from 'pragma-screengen/lib/view-base';
import {schema} from './work-order-schema';
import {template} from './work-order-template';
import {createTestWorkOrders, workOrderPrototype} from './work-order-data';

export class WorkOrders extends ViewBase {
    attached() {
        super.attached();
        this.datasource = createTestWorkOrders();
        this.schema = schema;
    }

    schemaUpdated() {
        this.model = this.createModel(workOrderPrototype);
        this.templateSchema = template;
    }

    validate() {
        console.log(this.rules.validate(this.model));
    }
}
