import {Observable} from 'rxjs';
import {Expert} from '../expert.model';

export interface ExpertRepository {
    findAll(): Observable<Expert[]>;
}
