import {Email} from '../shared/values/email';

export class Customer {
    constructor(
        readonly email: Email,
        readonly firstName: string,
        readonly lastName: string,
        readonly phoneNumber: string,
    ) {

    }
}
