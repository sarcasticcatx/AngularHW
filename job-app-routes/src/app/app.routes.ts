import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { ProfilePageComponent } from './feature/profile-page/profile-page.component';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';
import { JobListComponent } from './feature/jobs/components/job-list/job-list.component';
import { AddJobsComponent } from './feature/jobs/components/add-jobs/add-jobs.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
  },
  {
    path: 'jobs',
    component: JobListComponent,
  },
  {
    path: 'company/:id',
    loadComponent: () =>
      import('./feature/company-page-details/company-page.component').then(
        (c) => c.CompanyPageComponent
      ),
  },
  {
    path: 'add-job',
    component: AddJobsComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];
