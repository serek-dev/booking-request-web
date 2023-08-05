import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookingComponent} from './pages/book/booking.component';
import {SharedModule} from '../shared/shared.module';
import {SBookingComponent} from './components/s-booking/s-booking.component';
import {AvailabilityRepository} from './repositories/availability.repository';
import {FormsModule} from '@angular/forms';
import {BookingApiRepository} from './repositories/booking.api.repository';
import {DetailsComponent} from './pages/details/details.component';
import {SAppointmentComponent} from './components/s-appointment/s-appointment.component';
import {AppointmentApiRepository} from './repositories/appointment.api.repository';
import {ExpertApi} from '../shared/api/expert.api';
import {createExpertRepository} from './providers/expert-repository.provider';
import {Environment} from '../core/environment';
import {createAvailabilityRepository} from './providers/availability-repository.provider';
import {AvailabilityApi} from '../shared/api/availability.api';
import {OrderListModule} from 'primeng/orderlist';
import {ButtonModule} from 'primeng/button';
import {SkeletonModule} from 'primeng/skeleton';
import {MessageModule} from 'primeng/message';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {ConfirmationComponent} from './components/confirmation/confirmation.component';
import {ConfirmPopupModule} from "primeng/confirmpopup";
import {ConfirmationService} from "primeng/api";

@NgModule({
    declarations: [
        BookingComponent,
        SBookingComponent,
        DetailsComponent,
        SAppointmentComponent,
        ConfirmationComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        OrderListModule,
        ButtonModule,
        SkeletonModule,
        MessageModule,
        CardModule,
        InputTextModule,
        ConfirmPopupModule
    ],
    providers: [
        {provide: 'ExpertRepository', useFactory: createExpertRepository, deps: [Environment, ExpertApi]},
        {
            provide: 'AvailabilityRepository',
            useFactory: createAvailabilityRepository,
            deps: [Environment, AvailabilityApi]
        },
        {provide: 'BookingRepository', useClass: BookingApiRepository},
        {provide: 'AppointmentRepository', useClass: AppointmentApiRepository},
        ConfirmationService
    ],
})
export class BookingModule {
}
