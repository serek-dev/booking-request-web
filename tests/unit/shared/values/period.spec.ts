import {Period} from '../../../../src/app/shared/values/period';
import {DateTime} from '../../../../src/app/shared/values/date-time';

describe('Period', () => {
    it('should create value', () => {

        // Given period with initial values
        const date1: DateTime = new DateTime('2020-01-01T13:45:00');
        const date2: DateTime = new DateTime('2020-01-01T13:45:00');

        const period: Period = new Period(date1, date2);

        // When created
        // Then each property should have initial value
        expect(period.from).toBe(date1);
        expect(period.to).toBe(date2);
    });
});
