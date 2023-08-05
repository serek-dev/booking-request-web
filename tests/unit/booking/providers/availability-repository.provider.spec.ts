import {createEnvironment} from '../../utils/environment.factory';
import {createAvailabilityRepository} from '../../../../src/app/booking/providers/availability-repository.provider';
import {AvailabilityMockRepository} from '../../../../src/app/booking/mocks/availability.mock.repository';

describe('AvailabilityRepositoryProvider', () => {

    it(`should create AvailabilityRepository with mocks`, () => {

        // Given I have Environment that uses mocks
        const env = createEnvironment(true);

        // When new service is created
        const service = createAvailabilityRepository(
            env,
            jasmine.createSpyObj('AvailabilityApi', ['get'])
        );

        // Then it should be mock Repository
        expect(service).toBeInstanceOf(AvailabilityMockRepository);
    });

    it(`should create AvailabilityRepository without mocks`, () => {

        // Given I have Environment that uses mocks
        const env = createEnvironment(false);

        // When new service is created
        const service = createAvailabilityRepository(
            env,
            jasmine.createSpyObj('AvailabilityApi', ['get'])
        );

        // Then it should not be a mock Repository
        expect(service).not.toBeInstanceOf(AvailabilityMockRepository);
    });
});
