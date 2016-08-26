import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import {AddJob,Apply} from './Model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class Service {
    jobs: AddJob;
    private jobsrUrl = 'api/Jobs/';
    private applyjobUrl = 'api/Applies';
    constructor(private http: Http) { }

    addJobs(job: AddJob) {
        let headers = new Headers({
            'Content-Type': 'application/json',
        });
        return this.http.post(this.jobsrUrl, JSON.stringify(job), { headers: headers }).map(res => res.json());
    }
    getJobs() {
        return this.http.get(this.jobsrUrl)
            .map(response => response.json());
    }
    applyJob(job: Apply) {
        let headers = new Headers({
            'Content-Type': 'application/json',
        });
        return this.http.post(this.applyjobUrl, JSON.stringify(job), { headers: headers }).map(res => res.json());
    }
}