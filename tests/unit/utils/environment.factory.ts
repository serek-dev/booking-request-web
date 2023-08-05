import {IEnvironment} from '../../../src/app/core/ienvironment';

export function createEnvironment(useMocks: boolean = true): IEnvironment {
    return {
        clientUrl: (): string => {
            return 'http://localhost:80/';
        },

        isProduction(): boolean {
            return true;
        },

        name(): string {
            return 'development';
        },

        useMocks(): boolean {
            return useMocks;
        },
    }
}
