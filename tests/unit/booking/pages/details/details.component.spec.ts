import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DetailsComponent} from '../../../../../src/app/booking/pages/details/details.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../../../src/app/shared/shared.module';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {SAppointmentComponent} from '../../../../../src/app/booking/components/s-appointment/s-appointment.component';
import {Router} from '@angular/router';
import {AppointmentRepository} from '../../../../../src/app/booking/repositories/appointment.repository';
import {of} from 'rxjs';
import {Appointment} from '../../../../../src/app/booking/appointment.model';
import {Status} from '../../../../../src/app/booking/appointment.status';
import {DateTime} from '../../../../../src/app/shared/values/date-time';

describe('DetailsComponent',
    () => {
        let component: DetailsComponent;
        let fixture: ComponentFixture<DetailsComponent>;

        let appointmentRepository: jasmine.SpyObj<AppointmentRepository>;

        const appointment = new Appointment(
            'uuid',
            Status.PENDING,
            new DateTime('2020-01-01 20:20'),
            'Przemysław',
        )

        let router: Router;

        beforeEach(async () => {
            appointmentRepository = jasmine.createSpyObj('AppointmentRepository', ['get']);
            appointmentRepository.get.and.returnValue(of(appointment))

            await TestBed.configureTestingModule({
                declarations: [DetailsComponent, SAppointmentComponent],
                imports: [
                    CommonModule,
                    SharedModule,
                    FormsModule,
                    RouterTestingModule
                ],
                providers: [
                    {provide: 'AppointmentRepository', useValue: appointmentRepository},
                ],
            })
                .compileComponents();

            router = TestBed.inject(Router);
        });

        beforeEach(() => {
            fixture = TestBed.createComponent(DetailsComponent);
            component = fixture.componentInstance;
            component.appointmentId = 'uuid';
            fixture.detectChanges();
        });

        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });
