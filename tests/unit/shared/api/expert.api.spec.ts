import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import {ExpertApi} from '../../../../src/app/shared/api/expert.api';
import {createEnvironment} from '../../utils/environment.factory';

describe('ExpertApi', () => {
    it('should return object via http client', () => {
        // Given I have http client
        const expectedUrl = 'http://localhost:80/bookings/experts';
        let client: jasmine.SpyObj<HttpClient>;
        client = jasmine.createSpyObj('HttpClient', ['get']);
        client.get.withArgs(expectedUrl).and.returnValue(of([{id: 1}, {id: 2}]));
        const env = createEnvironment();
        
        // And Expert API
        const sut = new ExpertApi(client, env);

        // When I call method
        sut.findAll().subscribe(
            function(res) {
                // Then results from http should be returned
                expect(res.length).toBe(2);
            }
        );
    });
});
