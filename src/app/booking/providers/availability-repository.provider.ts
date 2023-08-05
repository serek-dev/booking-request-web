import {IEnvironment} from '../../core/ienvironment';
import {AvailabilityMockRepository} from '../mocks/availability.mock.repository';
import {AvailabilityRepository} from '../repositories/availability.repository';
import {AvailabilityApi} from '../../shared/api/availability.api';
import {AvailabilityApiRepository} from '../repositories/availability.api.repository';

export function createAvailabilityRepository(env: IEnvironment, api: AvailabilityApi): AvailabilityRepository {
    if (env.useMocks()) {
        return new AvailabilityMockRepository();
    }

    return new AvailabilityApiRepository(api);
}
