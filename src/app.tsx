import {AppConfig} from './appConfig'
import React from 'react';
import ReactDOM from 'react-dom'
import { Routes } from "./Routes";

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
        ReactDOM.render(
            <Routes/>,
            document.getElementById('root')
        );
    }
}