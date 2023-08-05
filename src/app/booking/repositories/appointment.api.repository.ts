import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {DateTime} from '../../shared/values/date-time';
import {AppointmentApi} from '../../shared/api/mock/appointment';
import {Appointment} from '../appointment.model';
import {AppointmentRepository} from './appointment.repository';

@Injectable()
export class AppointmentApiRepository implements AppointmentRepository {
    constructor(private readonly api: AppointmentApi) {
    }

    get(id: string): Observable<Appointment> {
        return this.api.get(id).pipe(
            map(o => o.body),
            map(o => new Appointment(
                o['id'],
                o['status'],
                new DateTime(o['date']),
                o['expertName'],
            )),
        );
    }
}
