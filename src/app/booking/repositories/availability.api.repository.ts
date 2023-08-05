import {map, Observable} from 'rxjs';
import {Availability} from '../availability.model';
import {AvailabilityRepository} from './availability.repository';
import {Injectable} from '@angular/core';
import {AvailabilityApi} from '../../shared/api/availability.api';
import {Period} from '../../shared/values/period';
import {DateTime} from '../../shared/values/date-time';

@Injectable()
export class AvailabilityApiRepository implements AvailabilityRepository {

    constructor(private readonly api: AvailabilityApi) {
    }

    findMany(expertId: string): Observable<Availability[]> {
        return this.api.findMany(expertId).pipe(
            map(o => o.map(o => new Availability(
                o['id'],
                o['expert'],
                new Period(
                    new DateTime(o['from']),
                    new DateTime(o['to']),
                )
            ))),
        );
    }
}
