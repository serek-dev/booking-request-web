import {Email} from '../../../../src/app/shared/values/email';

describe('Email', () => {
    it('should create value', () => {

        // Given email with initial values
        new Email('valid@email.com');
        expect(true).toBe(true);
    });

    it('should throw an error on invalid value', () => {

        const cases = [
            'bademail',
            'another@bad',
            'toomany@@ihave.com',
        ];

        for (let email of cases) {
            expect(function () {
                // Given email with initial values
                new Email(email);
            }).toThrow(new Error('Invalid email'));
        }
    });
});
