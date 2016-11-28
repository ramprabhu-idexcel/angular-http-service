import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class Config {
    private _config;
    private Env: string = "production";

    constructor(private http: Http) {  }

    /*
     * Load configuration files
     */
    load(): Promise<Config> {
        this.http.get("app/config/"+this.Env+".json")
            .map(response => response.json())
            .subscribe(result => this._config = result);
        return Promise.resolve(this._config);
    }

    /*
     * Get the details of configuration key
     */
    get(key: any) {
        return this._config[key];
    }

}
