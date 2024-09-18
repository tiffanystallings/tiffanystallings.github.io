import { Routes } from '@angular/router';
import { ProjectComponent } from './components/project/project.component';

export const routes: Routes = [
    {
        path: 'projects/:category', 
        component: ProjectComponent
    },
    {
        path: '',
        redirectTo: '/projects/all',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/projects/all'
    }
];
