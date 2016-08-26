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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/do');
var Service = (function () {
    function Service(http) {
        this.http = http;
        this.jobsrUrl = 'api/Jobs/';
        this.applyjobUrl = 'api/Applies';
    }
    Service.prototype.addJobs = function (job) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
        });
        return this.http.post(this.jobsrUrl, JSON.stringify(job), { headers: headers }).map(function (res) { return res.json(); });
    };
    Service.prototype.getJobs = function () {
        return this.http.get(this.jobsrUrl)
            .map(function (response) { return response.json(); });
    };
    Service.prototype.applyJob = function (job) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
        });
        return this.http.post(this.applyjobUrl, JSON.stringify(job), { headers: headers }).map(function (res) { return res.json(); });
    };
    Service = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Service);
    return Service;
}());
exports.Service = Service;
//# sourceMappingURL=Service.js.map