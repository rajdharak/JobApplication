import { Component, Injectable, OnInit} from '@angular/core';
import { AddJob } from './../Comman/Model';
import {Service} from './../Comman/Service';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
    selector: 'add-Job',
    providers: [Service],
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'App/EndUser/GetJobs.component.html'
})

export class GetJobComponent implements OnInit {

    jobs: Array<AddJob>;
    errorMessage: string;
    job: AddJob;
    constructor(private jobservice: Service) {
        this.jobs = new Array<AddJob>();
        this.job = new AddJob();
    }

    ngOnInit() {
        this.getJobs();
    }
   
    getJobs() {
        var displayOwner = this.jobservice.getJobs()
            .subscribe((jobs) => {
                this.jobs = jobs
            }, err => {
                this.errorMessage = err;
            });
    }
    
}