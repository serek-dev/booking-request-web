import {Observable} from 'rxjs';
import {Availability} from '../availability.model';

export interface AvailabilityRepository {
    findMany(expert: string): Observable<Availability[]>;
}
