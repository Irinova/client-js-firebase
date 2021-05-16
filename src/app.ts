import {AppConfig} from './appConfig'

export class App {
    private _isDebug = false;
    private _config: AppConfig = new AppConfig();

    getConfig(): AppConfig {
        return this._config;
    }

    setConfig(config: AppConfig): void {
        this._config = config;
    }

    run(): void {
        console.log(1)

    }
}