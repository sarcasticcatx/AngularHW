import { Component, computed, inject, input } from '@angular/core';
import { JobService } from '../../../../core/services/job.service';
import { JobApplication } from '../../models/job.model';
import { JobItemComponent } from '../job-item/job-item.component';
import { JobPanelComponent } from '../job-panel/job-panel.component';

@Component({
  selector: 'app-applied-job-list',
  standalone: true,
  imports: [JobItemComponent, JobPanelComponent],
  templateUrl: './applied-job-list.component.html',
  styleUrl: './applied-job-list.component.scss',
})
export class AppliedJobListComponent {
  private jobsService = inject(JobService);

  //filterin jobs
  filteredJobs = computed(() =>
    this.jobsService.jobs().filter((job) => job.isApplied)
  );

  onCanceledJobSelect(job: JobApplication) {
    this.jobsService.cancel('Cancel', job.id);
    return this.jobsService.appliedJobs();
  }
}
