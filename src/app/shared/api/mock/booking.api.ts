import {Injectable} from '@angular/core';
import {delay, Observable, of} from 'rxjs';
import {getRandomInt} from '../../../../../tests/random.util';
import {HttpResponse} from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class BookingApi {
    store(data: object): Observable<HttpResponse<object>> {
        return of(new HttpResponse({
            status: 200,
            body: {
                id: '7c17a32c-2b83-4597-af93-18fb07126991'
            }
        })).pipe(
            delay(
                getRandomInt(100, 2000)
            )
        );
    }
}
