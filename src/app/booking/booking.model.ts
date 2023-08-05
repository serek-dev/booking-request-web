import {Availability} from './availability.model';
import {Expert} from './expert.model';
import {Customer} from './customer.model';

// todo: missing unit test
export class Booking {
    constructor(readonly expert: Expert,
                readonly availability: Availability,
                readonly customer: Customer
    ) {
    }
}
