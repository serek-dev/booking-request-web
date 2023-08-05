import {DateTime} from '../../../../src/app/shared/values/date-time';

describe('DateTime', () => {
    it('should create date time from string in format YYYY-MM-DD H:i', () => {
        // Given I have valid DateTime from string
        const dateTime: DateTime = new DateTime('2020-01-01 12:45');
        expect(dateTime.date).toBe('2020-01-01 12:45');
    });

    it('should create date time from string in format ISO_8601', () => {
        // Given I have valid DateTime from string
        const dateTime: DateTime = new DateTime('2020-01-01T10:05:33');
        expect(dateTime.date).toBe('1/1/2020, 10:05:33 AM');
    });

    it('should throw an error when invalid string format', () => {
        const cases: Array<Object> = [
            {
                name: 'Too short',
                date: '2020-01-01 1'
            },
            {
                name: 'Too loong',
                date: '2020-01-01 1241:20'
            },
            {
                name: 'Unsupported characters',
                date: '202a-01-01 12:41'
            },
        ];

        cases.forEach(testCase => {
            expect(function () {
                // Given I have invalid DateTime from string
                const dateTime: DateTime = new DateTime(testCase['date']);
            }).toThrow(new Error('Invalid date time format'));
        });

    });
});
