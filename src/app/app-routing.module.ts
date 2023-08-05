import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookingComponent} from './booking/pages/book/booking.component';
import {NotFoundComponent} from './core/pages/not-found/not-found.component';
import {DetailsComponent} from './booking/pages/details/details.component';

const routes: Routes = [
    {path: '', component: BookingComponent, pathMatch: 'full'},
    {path: 'appointments/:id/details', component: DetailsComponent, pathMatch: 'full'},
    {path: '**', component: NotFoundComponent, pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
