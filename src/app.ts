import {AppConfig} from './appConfig'
import {Home} from "./view/home/Home";

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
        if (this._config.root) {
            this._config.root.append(Home())
        }
    }
}


