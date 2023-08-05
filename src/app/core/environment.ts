import {IEnvironment} from './ienvironment';
import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Environment implements IEnvironment {
    clientUrl(): string {
        return environment.clientUrl;
    }

    isProduction(): boolean {
        return environment.production;
    }

    name(): string {
        return environment.name;
    }

    useMocks(): boolean {
        return environment.useMock;
    }
}
