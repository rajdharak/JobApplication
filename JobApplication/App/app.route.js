"use strict";
var router_1 = require('@angular/router');
var Admin_component_1 = require('./Admin/Admin.component');
var AddJob_component_1 = require('./Admin/AddJob.component');
var GetJobs_component_1 = require('./EndUser/GetJobs.component');
var ApplyJob_component_1 = require('./EndUser/ApplyJob.component');
var routes = [
    {
        path: 'Admin',
        component: Admin_component_1.Admin
    },
    {
        path: 'EndUsers',
        component: GetJobs_component_1.GetJobComponent
    },
    {
        path: 'addjob',
        component: AddJob_component_1.AddJobComponent
    },
    {
        path: 'apply/:id',
        component: ApplyJob_component_1.ApplyJobComponent
    },
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.route.js.map