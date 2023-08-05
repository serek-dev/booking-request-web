import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {IEnvironment} from '../../core/ienvironment';

@Injectable({
    providedIn: 'root',
})
export class AvailabilityApi {
    private url: string = 'bookings/experts/{expertId}/available';

    constructor(private http: HttpClient, @Inject('IEnvironment') private env: IEnvironment) {
    }

    findMany(expertId: string): Observable<object[]> {
        return this.http.get<object[]>(
            this.env.clientUrl() + this.url.replace('{expertId}', expertId)
        );
    }
}
