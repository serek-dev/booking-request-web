import {ExpertRepository} from '../repositories/expert.repository';
import {delay, Observable, of} from 'rxjs';
import {Expert} from '../expert.model';
import {getRandomInt} from '../../../../tests/random.util';

export class ExpertMockRepository implements ExpertRepository {
    findAll(): Observable<Expert[]> {
        return of([
            new Expert('14c105f1-8a85-475d-b3e3-ed7d4a5c5313', 'Przemysław MOCK'),
            new Expert('43a52f59-c1fb-4182-afbd-5741fb516a01', 'Zbyszek MOCK'),
            new Expert('4489821f-c3eb-4767-94d6-15e84fa80a02', 'Kazek MOCK'),
        ])
            .pipe(
                delay(
                    getRandomInt(100, 2000)
                ));
    }
}
