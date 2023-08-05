import {delay, Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {AvailabilityRepository} from '../repositories/availability.repository';
import {Availability} from '../availability.model';
import {Period} from '../../shared/values/period';
import {DateTime} from '../../shared/values/date-time';
import {getRandomInt} from '../../../../tests/random.util';

@Injectable()
export class AvailabilityMockRepository implements AvailabilityRepository {

    findMany(expertId: string): Observable<Availability[]> {
        switch (expertId) {
            case '14c105f1-8a85-475d-b3e3-ed7d4a5c5313':
                return of([
                    new Availability(
                        'c232a57c-8e8f-4e33-bde3-9bcbe7620c3f',
                        '14c105f1-8a85-475d-b3e3-ed7d4a5c5313',
                        new Period(
                            new DateTime('2023-02-20 10:00'),
                            new DateTime('2023-02-20 10:50'),
                        )
                    ),
                    new Availability(
                        '1826dfae-ae1b-4b5a-94eb-4d0d36d766d0',
                        '14c105f1-8a85-475d-b3e3-ed7d4a5c5313',
                        new Period(
                            new DateTime('2023-02-20 12:00'),
                            new DateTime('2023-02-20 12:50'),
                        )
                    ),
                    new Availability(
                        '9723c469-cabb-47aa-ac24-1b047f63c86d',
                        '14c105f1-8a85-475d-b3e3-ed7d4a5c5313',
                        new Period(
                            new DateTime('2023-02-02 13:05'),
                            new DateTime('2023-02-02 12:55'),
                        )
                    ),
                ]).pipe(delay(getRandomInt(100, 2000)));

            case '43a52f59-c1fb-4182-afbd-5741fb516a01':
                return of([
                    new Availability(
                        'cbbc8acc-3111-4ca2-8598-5a3aeeb91ff2',
                        '43a52f59-c1fb-4182-afbd-5741fb516a01',
                        new Period(
                            new DateTime('2023-02-19 10:00'),
                            new DateTime('2023-02-19 10:50'),
                        )
                    ),
                    new Availability(
                        '7bd63121-4b80-4077-8dd7-6f12cee9765a',
                        '43a52f59-c1fb-4182-afbd-5741fb516a01',
                        new Period(
                            new DateTime('2023-02-18 12:00'),
                            new DateTime('2023-02-18 12:50'),
                        )
                    ),
                ]).pipe(delay(getRandomInt(100, 2000)));

            default:
                return of([]).pipe(delay(getRandomInt(100, 2000)));
        }
    }
}
