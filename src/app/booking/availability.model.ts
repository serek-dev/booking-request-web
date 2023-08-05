import {EventDto} from '../shared/components/calendar/event.dto';
import {Period} from '../shared/values/period';

export class Availability implements EventDto {
    constructor(readonly id: string, readonly expert: string, readonly period: Period) {

    }

    get title(): string {
        return 'Wizyta';
    }

    get start(): string {
        return this.period.from.date;
    }

    get end(): string {
        return this.period.to.date;
    }
}
