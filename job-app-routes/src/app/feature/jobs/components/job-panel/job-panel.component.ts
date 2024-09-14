import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { AppliedJobListComponent } from '../applied-job-list/applied-job-list.component';
import { ApplyOrCancelButtonComponent } from '../../../../shared/apply-buttons/a.button.component';
import { JobService } from '../../../../core/services/job.service';
import { WorkType } from '../../models/job.model';

@Component({
  selector: 'app-job-panel',
  standalone: true,
  imports: [
    CommonModule,
    AppliedJobListComponent,
    ApplyOrCancelButtonComponent,
  ],
  templateUrl: './job-panel.component.html',
  styleUrl: './job-panel.component.scss',
})
export class JobPanelComponent implements OnInit {
  private jobService = inject(JobService);

  totsJobsLength: number;

  workTypeStatus = WorkType;

  ngOnInit(): void {
    this.totsJobsLength = this.jobService.totalAvailableJobs();
  }

  totalAppliedJobs = inject(JobService).totalAppliedJobs;
}
