import {AppConfig} from './appConfig'

export class App {
    private _isDebug: boolean = false;
    private _config: AppConfig = new AppConfig();

    getConfig(): AppConfig {
        return this._config;
    }

    setConfig(config: AppConfig): void {
        this._config = config;
    }

    run(): void {

    }
}