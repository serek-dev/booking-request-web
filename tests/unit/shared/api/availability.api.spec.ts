import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import {AvailabilityApi} from '../../../../src/app/shared/api/availability.api';
import {createEnvironment} from '../../utils/environment.factory';

describe('AvailabilityApi', () => {
    it('should return object via http client', () => {
        // Given I have http client
        const expectedUrl = 'http://localhost:80/bookings/experts/expertId/available';
        let client: jasmine.SpyObj<HttpClient>;
        client = jasmine.createSpyObj('HttpClient', ['get']);
        client.get.withArgs(expectedUrl).and.returnValue(of([{id: 1}, {id: 2}]));
        const env = createEnvironment();

        // And Expert API
        const sut = new AvailabilityApi(client, env);

        // When I call method
        sut.findMany('expertId').subscribe(
            function (res) {
                // Then results from http should be returned
                expect(res.length).toBe(2);
            }
        );
    });
});
