import {ExpertApi} from '../../../../src/app/shared/api/expert.api';
import {ExpertMockRepository} from '../../../../src/app/booking/mocks/expert.mock.repository';
import {createEnvironment} from '../../utils/environment.factory';
import {createExpertRepository} from '../../../../src/app/booking/providers/expert-repository.provider';

describe('ExpertRepositoryProvider', () => {

    it(`should create ExpertRepository with mocks`, () => {

        // Given I have Environment that uses mocks
        const env = createEnvironment(true);

        // When new service is created
        const service = createExpertRepository(
            env,
            jasmine.createSpyObj('ExpertApi', ['get'])
        );

        // Then it should be mock Repository
        expect(service).toBeInstanceOf(ExpertMockRepository);
    });

    it(`should create ExpertRepository without mocks`, () => {

        // Given I have Environment that uses mocks
        const env = createEnvironment(false);

        // When new service is created
        const service = createExpertRepository(
            env,
            jasmine.createSpyObj('ExpertApi', ['get'])
        );

        // Then it should not be a mock Repository
        expect(service).not.toBeInstanceOf(ExpertMockRepository);
    });
});
