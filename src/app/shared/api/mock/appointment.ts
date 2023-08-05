import {delay, Observable, of} from 'rxjs';
import {HttpResponse} from '@angular/common/http';
import {getRandomInt} from '../../../../../tests/random.util';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AppointmentApi {
    get(id: string): Observable<HttpResponse<object>> {
        return of(new HttpResponse({
            status: 200,
            body: {
                id: id,
                date: '2020-01-01T13:45:00',
                expertName: 'Przemysław Ch.',
                status: 'pending'
            }
        })).pipe(
            delay(
                getRandomInt(100, 2000)
            )
        );
    }
}
