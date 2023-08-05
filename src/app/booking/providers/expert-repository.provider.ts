import {IEnvironment} from '../../core/ienvironment';
import {ExpertApi} from '../../shared/api/expert.api';
import {ExpertRepository} from '../repositories/expert.repository';
import {ExpertMockRepository} from '../mocks/expert.mock.repository';
import {ExpertApiRepository} from '../repositories/expert.api.repository';

export function createExpertRepository(env: IEnvironment, api: ExpertApi): ExpertRepository {
    if (env.useMocks()) {
        return new ExpertMockRepository();
    }

    return new ExpertApiRepository(api);
}
