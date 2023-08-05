import {Expert} from '../../../src/app/booking/expert.model';

describe('Expert', () => {
    it('should create model', () => {

        // Given model with initial values
        const model = new Expert(
            'uuid',
            'name',
        );

        // When created
        // Then each property should have initial value
        expect(model.id).toBe('uuid');
        expect(model.name).toBe('name');
    });
});
