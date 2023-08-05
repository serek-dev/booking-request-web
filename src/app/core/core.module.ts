import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {Environment} from './environment';

@NgModule({
    declarations: [
    NotFoundComponent
  ],
    imports: [
        CommonModule
    ],
    providers: [
        {
            provide: 'IEnvironment',
            useClass: Environment
        }
    ]
})
export class CoreModule {
}
