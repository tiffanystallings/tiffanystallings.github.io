import { Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';

export const routes: Routes = [
    {
        path: 'projects', 
        component: ProjectComponent
    },
    {
        path: '',
        redirectTo: '/projects',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/projects'
    }
];
