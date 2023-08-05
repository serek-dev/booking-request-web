import {Period} from '../../../src/app/shared/values/period';
import {Availability} from '../../../src/app/booking/availability.model';
import {DateTime} from '../../../src/app/shared/values/date-time';

describe('Availability', () => {
    it('should create model', () => {
        // Given model with initial values
        const id: string = '4a160ff7-some-id';
        const expert: string = '4a160ff7-c4b4-42ed-9b5f-144fc3daa428';
        const period: Period = new Period(
            new DateTime('2020-01-01T13:45:00'),
            new DateTime('2020-01-01T14:00:00'),
        );

        // When created
        const model = new Availability(id, expert, period);

        // Then each property should have initial value
        expect(model.expert).toBe(expert);
        expect(model.period).toBe(period);
    });

    it('should be valid event dto object', () => {
        // Given model with initial values
        const id: string = '4a160ff7-some-id';
        const expert: string = '4a160ff7-c4b4-42ed-9b5f-144fc3daa428';
        const period: Period = new Period(
            new DateTime('2020-01-01T13:45:00'),
            new DateTime('2020-01-01T14:00:00'),
        );

        // When created
        const model = new Availability(id, expert, period);

        // Then each property should have initial value
        expect(model.title).toBe('Wizyta');
        expect(model.start).toBe('1/1/2020, 1:45:00 PM');
        expect(model.end).toBe('1/1/2020, 2:00:00 PM');
    });
});
