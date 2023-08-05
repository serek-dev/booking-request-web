import {Injectable} from '@angular/core';

import {map, Observable} from 'rxjs';
import {Expert} from '../expert.model';
import {ExpertRepository} from './expert.repository';

import {ExpertApi} from '../../shared/api/expert.api';

@Injectable()
export class ExpertApiRepository implements ExpertRepository {
    private api: ExpertApi;

    constructor(api: ExpertApi) {
        this.api = api;
    }

    findAll(): Observable<Expert[]> {
        return this.api.findAll().pipe(
            map(
                o => o.map(o => new Expert(o['id'], o['name']))
            ),
        );
    }
}
