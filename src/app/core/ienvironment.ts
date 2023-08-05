// @see https://seangwright.medium.com/the-best-way-to-use-angulars-environment-files-a0c098551abc
export interface IEnvironment {
    name(): string;
    isProduction(): boolean;
    clientUrl(): string;
    useMocks(): boolean;
}
