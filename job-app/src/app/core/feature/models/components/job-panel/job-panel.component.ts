import { Component, computed, inject, input, OnInit } from '@angular/core';
import { JobService } from '../../../../services/job.service';
import { CommonModule } from '@angular/common';
import { JobApplication, WorkType } from '../../job.model';
import { AppliedJobListComponent } from '../applied-job-list/applied-job-list.component';
import { ApplyOrCancelButtonComponent } from '../../../../../shared/apply-buttons/a.button.component';


@Component({
  selector: 'app-job-panel',
  standalone: true,
  imports: [CommonModule, AppliedJobListComponent, ApplyOrCancelButtonComponent],
  templateUrl: './job-panel.component.html',
  styleUrl: './job-panel.component.scss'
})
export class JobPanelComponent implements OnInit {
  private jobService = inject(JobService)

  appliedJob = input<JobApplication>(null);

  totsJobsLength: number;

  ngOnInit(): void {
    this.totsJobsLength = this.jobService.totalAvailableJobs()
  }
  

  totalAppliedJobs = inject(JobService).totalAppliedJobs;

  //filter ama bez length
  plswork = computed(() => this.jobService.jobs().filter((job) => job.isApplied));

  sortBySalary() {
    this.jobService.sortBySalary()
  }

 sortByWorkType(event: Event) {
  console.log("filter values" , event)
  const selectEl = event.target as HTMLSelectElement;
  const value = selectEl.value;
  this.jobService.sortByWorkType(value)
 }

 workTypeStatus = WorkType;
}
