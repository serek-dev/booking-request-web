import {AppointmentRepository} from '../../../src/app/booking/repositories/appointment.repository';
import {AppointmentApiRepository} from '../../../src/app/booking/repositories/appointment.api.repository';
import {Appointment} from '../../../src/app/booking/appointment.model';
import {AppointmentApi} from '../../../src/app/shared/api/mock/appointment';

describe('AppointmentApiRepository', () => {
    let repository: AppointmentRepository;

    beforeEach(() => {
        repository = new AppointmentApiRepository(
            new AppointmentApi()
        )
    });

    it('should return API result mapped to Appointment model', () => {
        const res = repository.get('id');

        res.subscribe(
            m => {
                expect(m instanceof Appointment).toBeTruthy();
                expect(m.id).not.toBeNull();
                expect(m.status).not.toBeNull();
                expect(m.expertName).not.toBeNull();
                expect(m.date).not.toBeNull();
            }
        );

        expect(true).toBeTruthy();
    });
});
