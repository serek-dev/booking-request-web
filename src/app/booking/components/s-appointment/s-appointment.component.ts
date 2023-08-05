import {Component, Inject, Input, OnDestroy, OnInit} from '@angular/core';
import {AppointmentRepository} from '../../repositories/appointment.repository';
import {Appointment} from '../../appointment.model';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-s-appointment',
    templateUrl: './s-appointment.component.html',
    styleUrls: ['./s-appointment.component.scss']
})
export class SAppointmentComponent implements OnInit, OnDestroy {

    @Input() appointmentId: string;
    appointment: Appointment;
    subscriptions: Subscription[] = [];

    constructor(@Inject('AppointmentRepository') private repo: AppointmentRepository,) {
    }

    ngOnInit(): void {
        this.subscriptions.push(
            this.repo.get(this.appointmentId).subscribe(
                a => this.appointment = a
            )
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(
            sub => sub.unsubscribe()
        )
    }

}
