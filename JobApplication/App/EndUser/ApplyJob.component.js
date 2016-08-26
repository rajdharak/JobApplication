"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Model_1 = require('./../Comman/Model');
var Service_1 = require('./../Comman/Service');
var router_1 = require('@angular/router');
var ApplyJobComponent = (function () {
    function ApplyJobComponent(jobservice) {
        this.jobservice = jobservice;
        this.applies = new Array();
        this.aply = new Model_1.Apply();
    }
    ApplyJobComponent.prototype.ngOnInit = function () {
    };
    ApplyJobComponent.prototype.onSubmit = function (product) {
        this.AddJobs();
    };
    ApplyJobComponent.prototype.ResumeUpload = function (path) {
        this.aply.Resume = path.target.value;
    };
    ApplyJobComponent.prototype.AddJobs = function () {
        var _this = this;
        this.jobservice.applyJob(this.aply)
            .subscribe(function (response) {
            console.log("Success Response" + response);
        }, function (error) { console.log("Error happened" + error); }, function () {
            _this.aply = _this.aply;
        });
    };
    ApplyJobComponent = __decorate([
        core_1.Component({
            selector: 'add-Job',
            providers: [Service_1.Service],
            directives: [router_1.ROUTER_DIRECTIVES],
            templateUrl: 'App/Admin/AddJob.component.html'
        }), 
        __metadata('design:paramtypes', [Service_1.Service])
    ], ApplyJobComponent);
    return ApplyJobComponent;
}());
exports.ApplyJobComponent = ApplyJobComponent;
//# sourceMappingURL=ApplyJob.component.js.map