import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {IEnvironment} from '../../core/ienvironment';

@Injectable({
    providedIn: 'root',
})
export class ExpertApi {
    private url: string = 'bookings/experts';

    constructor(private http: HttpClient, @Inject('IEnvironment') private env: IEnvironment) {
    }

    findAll(): Observable<object[]> {
        return this.http.get<object[]>(this.env.clientUrl() + this.url);
    }
}
