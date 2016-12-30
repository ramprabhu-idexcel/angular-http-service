import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class Config {
    private _config;
    private _env: string;
    private _quizConfig;

    constructor(private http: Http) {  }

    /*
     * Load configuration files
     */
    load(): Promise<Config> {
       this.http.get('app/config/env.json')
           .map(res => res.json())
           .subscribe((env_data) => {
               this._env = env_data;
               this.http.get('app/config/' + env_data.env + '.json')
                   .map(res => res.json())
                   .catch((error: any) => {
                       return Observable.throw(error.json().error || 'Server error'); })
                        .subscribe((data) => {
                            this._config = data;
                            this.http.get('app/config/quiz.json')
                                 .map(res => res.json())
                                .subscribe((quiz_data) => {
                                    this._quizConfig = quiz_data;
                                });
                        });
                });
        return Promise.resolve(this._config);
    }

    /*
     * Get the details of configuration key
     */
    get(key: any) {
        return this._config[key];
    }

    /*
     * Quiz details
     */
    quizDetails(){
        return this._quizConfig;
    }

}
