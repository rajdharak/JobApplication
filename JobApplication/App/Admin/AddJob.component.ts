import { Component, Injectable, OnInit} from '@angular/core';
import { AddJob } from './../Comman/Model';
import {Service} from './../Comman/Service';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
    selector: 'add-Job',
    providers: [Service],
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'App/Admin/AddJob.component.html'
})

export class AddJobComponent implements OnInit {

    jobs: Array<AddJob>;
    errorMessage: string;
    job: AddJob;
    constructor(private jobservice: Service) {
        this.jobs = new Array<AddJob>();
        this.job = new AddJob();
    }

    ngOnInit() {

    }
    onSubmit(product: AddJob) {
        this.AddJobs();
    }
    AddJobs() {
        this.jobservice.addJobs(this.job)
            .subscribe(function (response) {
                console.log("Success Response" + response)
            },
            function (error) { console.log("Error happened" + error) },
            () => {
                this.job = this.job
            });
    }
}