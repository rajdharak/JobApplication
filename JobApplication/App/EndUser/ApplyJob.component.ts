import { Component, Injectable, OnInit} from '@angular/core';
import { Apply } from './../Comman/Model';
import {Service} from './../Comman/Service';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
    selector: 'add-Job',
    providers: [Service],
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'App/Admin/AddJob.component.html'
})

export class ApplyJobComponent implements OnInit {

    applies: Array<Apply>;
    errorMessage: string;
    aply: Apply;
    constructor(private jobservice: Service) {
        this.applies = new Array<Apply>();
        this.aply = new Apply();
    }

    ngOnInit() {

    }
    onSubmit(product: Apply) {
        this.AddJobs();
    }
    ResumeUpload(path: any) {
        this.aply.Resume = path.target.value;
    }
    AddJobs() {
        this.jobservice.applyJob(this.aply)
            .subscribe(function (response) {
                console.log("Success Response" + response)
            },
            function (error) { console.log("Error happened" + error) },
            () => {
                this.aply = this.aply
            });
    }
}