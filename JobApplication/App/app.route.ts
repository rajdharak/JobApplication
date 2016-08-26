import { provideRouter, RouterConfig }  from '@angular/router';
import {Admin}from './Admin/Admin.component';
import {AddJobComponent}from './Admin/AddJob.component';
import {GetJobComponent}from './EndUser/GetJobs.component';
import {ApplyJobComponent}from './EndUser/ApplyJob.component';
const routes: RouterConfig = [
    {
        path: 'Admin',
        component: Admin
    },
    {
        path: 'EndUsers',
        component: GetJobComponent
    },
    {
        path: 'addjob',
        component: AddJobComponent
    },
    {
        path: 'apply/:id',
        component: ApplyJobComponent
    },

];
export const appRouterProviders = [
    provideRouter(routes)
];