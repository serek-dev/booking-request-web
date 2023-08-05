import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SAppointmentComponent} from '../../../../../src/app/booking/components/s-appointment/s-appointment.component';
import {of} from 'rxjs';
import {Appointment} from '../../../../../src/app/booking/appointment.model';
import {Status} from '../../../../../src/app/booking/appointment.status';
import {DateTime} from '../../../../../src/app/shared/values/date-time';
import {AppointmentRepository} from '../../../../../src/app/booking/repositories/appointment.repository';

describe('SAppointmentComponent', () => {
  let component: SAppointmentComponent;
  let fixture: ComponentFixture<SAppointmentComponent>;
  let appointmentRepository: jasmine.SpyObj<AppointmentRepository>;

  const appointment = new Appointment('id', Status.PENDING, new DateTime('2020-01-01 20:00'), 'Przemo');

  beforeEach(async () => {
    appointmentRepository = jasmine.createSpyObj('AppointmentRepository', ['get']);
    appointmentRepository.get.and.returnValue(of(appointment))

    await TestBed.configureTestingModule({
      declarations: [ SAppointmentComponent ],
      providers: [
        {provide: 'AppointmentRepository', useValue: appointmentRepository},
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SAppointmentComponent);
    component = fixture.componentInstance;
    component.appointmentId = 'uuid';
    fixture.detectChanges();
  });

  it('should call appointments API to fetch details', () => {
    expect(appointmentRepository.get.calls.count()).toBe(1);
    expect(appointmentRepository.get).toHaveBeenCalledWith('uuid');
  });

  it('should ad subject to the stack', () => {
    component = fixture.componentInstance;
    expect(component.subscriptions.length > 0).toBeTruthy();
  });
});
