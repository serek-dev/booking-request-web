import {Observable} from 'rxjs';
import {Appointment} from '../appointment.model';

export interface AppointmentRepository {
    get(id: string): Observable<Appointment>;
}
