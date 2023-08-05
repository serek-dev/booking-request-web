import {Status} from './appointment.status';
import {DateTime} from '../shared/values/date-time';

export class Appointment {
    constructor(readonly id: string,
                readonly status: Status,
                readonly date: DateTime,
                readonly expertName: string
    ) {
    }
}
