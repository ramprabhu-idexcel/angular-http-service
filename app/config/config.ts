import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()

export class Config {

    private _env: Object;
    private _configCustom: Object; 

    private _config: Object = {
        "server" : "http://localhost",
        "port" : "4000"
    } 

    constructor(http: Http) { 
        http.get('app/config/development.json')
                  .map(response => response.json())
                  .subscribe(result => this._config = result);
    }   

    
    getEnv(key: any) {
        return this._env[key];
    }

    get(key: any) {
        return this._config[key];
    }


    setCustom(key: any, val: any) {
        this._configCustom[key] = val;
    }

    getCustom(key: any) {
        return this._configCustom[key];
    }

};
