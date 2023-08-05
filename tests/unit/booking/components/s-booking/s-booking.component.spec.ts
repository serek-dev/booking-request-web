import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SBookingComponent} from '../../../../../src/app/booking/components/s-booking/s-booking.component';
import {BookingComponent} from '../../../../../src/app/booking/pages/book/booking.component';
import {ExpertRepository} from '../../../../../src/app/booking/repositories/expert.repository';
import {AvailabilityRepository} from '../../../../../src/app/booking/repositories/availability.repository';
import {SharedModule} from '../../../../../src/app/shared/shared.module';
import {Expert} from '../../../../../src/app/booking/expert.model';
import {of} from 'rxjs';
import {Availability} from '../../../../../src/app/booking/availability.model';
import {Period} from '../../../../../src/app/shared/values/period';
import {DateTime} from '../../../../../src/app/shared/values/date-time';
import {BookingRepository} from '../../../../../src/app/booking/repositories/booking.repository';
import {FormsModule} from '@angular/forms';
import {DetailsComponent} from '../../../../../src/app/booking/pages/details/details.component';
import {CommonModule} from '@angular/common';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import {SAppointmentComponent} from '../../../../../src/app/booking/components/s-appointment/s-appointment.component';
import {OrderListModule} from 'primeng/orderlist';
import {ButtonModule} from 'primeng/button';
import {SkeletonModule} from 'primeng/skeleton';
import {Customer} from '../../../../../src/app/booking/customer.model';
import {Email} from '../../../../../src/app/shared/values/email';
import {MessageModule} from 'primeng/message';

describe('SBookingComponent', () => {
    let component: SBookingComponent;
    let fixture: ComponentFixture<SBookingComponent>;
    let expertRepository: jasmine.SpyObj<ExpertRepository>;
    let availabilityRepository: jasmine.SpyObj<AvailabilityRepository>;
    let bookingRepository: jasmine.SpyObj<BookingRepository>;

    const experts = [
        new Expert('uuid1', 'name1'),
        new Expert('uuid2', 'name2'),
    ];

    let router: Router;

    beforeEach(async () => {
        expertRepository = jasmine.createSpyObj('ExpertRepository', ['findAll']);
        expertRepository.findAll.and.returnValue(of(experts))

        availabilityRepository = jasmine.createSpyObj('AvailabilityRepository', ['findMany']);
        availabilityRepository.findMany.and.returnValue(of([]))

        bookingRepository = jasmine.createSpyObj('BookingRepository', ['store']);

        await TestBed.configureTestingModule({
            declarations: [
                BookingComponent,
                SBookingComponent,
                DetailsComponent,
                SAppointmentComponent,
            ],
            providers: [
                {provide: 'ExpertRepository', useValue: expertRepository},
                {provide: 'AvailabilityRepository', useValue: availabilityRepository},
                {provide: 'BookingRepository', useValue: bookingRepository},
            ],
            imports: [
                CommonModule,
                SharedModule,
                FormsModule,
                RouterTestingModule,
                OrderListModule,
                ButtonModule,
                SkeletonModule,
                MessageModule
            ]
        })
            .compileComponents();

        router = TestBed.inject(Router);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SBookingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create and load experts', () => {
        // all experts from API
        expect(expertRepository.findAll.calls.count()).toBe(1);
    });

    it('should have selected first expert on init', () => {
        // Given component
        component = fixture.componentInstance;
        expect(component.selectedExpert).toBe(experts[0]);
    });

    it('should have not selectedEvent on init', () => {
        // Given component
        component = fixture.componentInstance;
        expect(component.selectedEvent).toBeNull()
    });

    it('selectExpert should change selected expert and load availability', () => {
        // Given component
        component = fixture.componentInstance;

        // When I select expert
        component.selectExpert(experts[1]);

        // Then current expert should be set
        expect(component.selectedExpert).toBe(experts[1])

        // And experts should be loaded
        expect(availabilityRepository.findMany.calls.count()).toBe(2);
    });

    it('onSelectedEvent should change selected availability', () => {
        // Given component
        component = fixture.componentInstance;

        // When I select an event (it's triggered from calendar)
        const period = new Period(
            new DateTime('2020-01-01 20:20'),
            new DateTime('2020-01-01 20:20')
        );
        const $event = {
            event: {
                '_def': {
                    publicId: 'uuid',
                    extendedProps: {
                        expert: 'uuid2',
                        period
                    }
                }
            }
        }
        component.onSelectedEvent($event);

        // Then current event should be set
        expect(component.selectedEvent).toEqual(new Availability(
            'uuid',
            'uuid2',
            period,
        ))
    });

    it('on submit success should redirect to confirmation page', () => {
        // Given component
        component = fixture.componentInstance;
        component.selectedExpert = new Expert('uuid', 'name');
        component.selectedEvent = new Availability(
            'uuid',
            'expert',
            new Period(
                new DateTime('2020-01-01 20:00'),
                new DateTime('2020-01-01 20:00')
            )
        );
        component.email = 'new@email.com';

        const navigateSpy = spyOn(router, 'navigate');

        // And repository that stored successfully
        bookingRepository.store.and.returnValue(of('uuid'));

        // When submitted
        component.submit(
            new Customer(
                new Email('email@email.com'),
                'name',
                'last name',
                '500355031'
            )
        );

        // Then should be redirected to confirmation page
        expect(navigateSpy).toHaveBeenCalledWith(['appointments/uuid/details']);
    });

    // todo: add case for API failure
});
