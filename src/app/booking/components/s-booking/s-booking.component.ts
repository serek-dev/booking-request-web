import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {ExpertRepository} from '../../repositories/expert.repository';
import {Subscription} from 'rxjs';
import {Expert} from '../../expert.model';
import {AvailabilityRepository} from '../../repositories/availability.repository';
import {Availability} from '../../availability.model';
import {BookingRepository} from '../../repositories/booking.repository';
import {Router} from '@angular/router';
import {StatusEnum} from 'src/app/shared/values/status.enum';
import {Customer} from '../../customer.model';
import {Booking} from '../../booking.model';

@Component({
    selector: 'app-s-booking',
    templateUrl: './s-booking.component.html',
    styleUrls: ['./s-booking.component.scss']
})
export class SBookingComponent implements OnInit, OnDestroy {

    experts: Expert[];
    selectedExpert: Expert;

    events: Availability[];
    selectedEvent: Availability = null;

    email: string;

    status = StatusEnum.INITIAL;

    subscriptions: Subscription[] = [];

    // ngPrime
    selectedExperts: Expert[] = [];

    constructor(
        @Inject('ExpertRepository') private expertRepo: ExpertRepository,
        @Inject('AvailabilityRepository') private availabilityRepo: AvailabilityRepository,
        @Inject('BookingRepository') private bookingRepo: BookingRepository,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.subscriptions.push(
            this.expertRepo.findAll().subscribe(
                experts => {
                    this.experts = experts;
                    this.selectExpert(experts[0]);
                }
            )
        );
    }

    // ugly trick to prevent multiple choice
    onSelectionChange(e: Event) {
        const experts = e['value'] as Expert[];
        this.selectExpert(experts[experts.length - 1]);
        this.events = [];
    }

    selectExpert(expert: Expert) {
        this.selectedExperts = [expert];
        this.selectedExpert = expert;
        this.selectedEvent = null;
        this.events = [];
        this.status = StatusEnum.LOADING;
        this.subscriptions.push(this.availabilityRepo.findMany(expert.id).subscribe(
            events => {
                this.events = events;
                this.status = StatusEnum.LOADED;
            }
        ));
    }

    onSelectedEvent($e: any) {
        this.selectedEvent = new Availability(
            $e['event']['_def']['publicId'],
            $e['event']['_def']['extendedProps']['expert'],
            $e['event']['_def']['extendedProps']['period'],
        );
    }

    submit(customer: Customer) {
        this.subscriptions.push(this.bookingRepo.store(
            new Booking(
                this.selectedExpert,
                this.selectedEvent,
                customer
            )
        ).subscribe(
            appointmentId => this.router.navigate([`appointments/${appointmentId}/details`])
        ))
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(
            sub => sub.unsubscribe()
        )
    }
}
