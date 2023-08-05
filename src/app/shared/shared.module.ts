import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FullCalendarModule} from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import {ExpertApi} from './api/expert.api';
import {RwdDirective} from './directives/rwd.directive';
import {CalendarComponent} from './components/calendar/calendar.component';
import {SkeletonModule} from 'primeng/skeleton';

FullCalendarModule.registerPlugins([
    dayGridPlugin,
    timeGridPlugin,
]);

@NgModule({
    declarations: [
        CalendarComponent,
        RwdDirective
    ],
    imports: [
        CommonModule,
        FullCalendarModule,
        SkeletonModule,
    ],
    exports: [
        CalendarComponent,
        RwdDirective
    ],
    providers: [ExpertApi]
})
export class SharedModule {
}
