import { Component, inject } from '@angular/core';
import { JobService } from '../../../../core/services/job.service';
import { JobApplication, JobsFormValue } from '../../models/job.model';
import { JobFormComponent } from '../job-form/job-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-jobs',
  standalone: true,
  imports: [JobFormComponent],
  templateUrl: './add-jobs.component.html',
  styleUrl: './add-jobs.component.scss'
})
export class AddJobsComponent {
private jobService = inject(JobService)

addJob(value: JobsFormValue) {
  console.log('add submit' , value)
  this.jobService.onAddJob(value);
}

}

