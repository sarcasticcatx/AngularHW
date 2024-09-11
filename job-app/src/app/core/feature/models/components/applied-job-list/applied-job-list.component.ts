import { Component, computed, inject, input } from '@angular/core';
import { JobService } from '../../../../services/job.service';
import { JobApplication } from '../../job.model';
import { JobItemComponent } from '../job-item/job-item.component';

@Component({
  selector: 'app-applied-job-list',
  standalone: true,
  imports: [JobItemComponent],
  templateUrl: './applied-job-list.component.html',
  styleUrl: './applied-job-list.component.scss'
})
export class AppliedJobListComponent {
  private jobsService = inject(JobService);

  //filterin jobs
  plsworkfilteredjobs = computed(() => this.jobsService.jobs().filter((job) => job.isApplied));

  appliedJob = input<JobApplication>(null);

  onCanceledJobSelect(job: JobApplication) {
    this.jobsService.cancel('Cancel', job.id);
    return this.jobsService.appliedJobs()
  }
}
