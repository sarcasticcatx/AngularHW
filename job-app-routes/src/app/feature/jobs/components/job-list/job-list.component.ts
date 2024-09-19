import { Component, computed, inject, input, NgModule, OnInit, signal } from '@angular/core';
import { JobItemComponent } from '../job-item/job-item.component';
import { LoggerService } from '../../../../core/services/logger.service';
import { JobService } from '../../../../core/services/job.service';
import { JobApplication, WorkType } from '../../models/job.model';
import { JobPanelComponent } from '../job-panel/job-panel.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../../../core/pipes/filter.pipe';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [JobItemComponent, JobPanelComponent,CommonModule,FormsModule,FilterPipe],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss',
})
export class JobListComponent implements OnInit {
  private jobsService = inject(JobService);
  private loggersService = inject(LoggerService);

  searchValue = signal('');

  totsJobsLength: number;

  workTypeStatus = WorkType;

  totalAppliedJobs = this.jobsService.totalAppliedJobs;


  jobs = computed(() =>
    this.jobsService.jobs().filter((job) => !job.isApplied)
  );

  ngOnInit(): void {
    this.loggersService.logDetails('Jobs List' );
    this.totsJobsLength = this.jobsService.totalAvailableJobs()
  }

  onJobSelect(jobs: JobApplication) {
    this.jobsService.jobSelect(jobs);
  }

  sortBySalary() {
    this.jobsService.sortBySalary();
  }

  sortByWorkType(event: Event) {
    console.log('filter values', event);
    const selectEl = event.target as HTMLSelectElement;
    const value = selectEl.value;
    this.jobsService.sortByWorkType(value);
  }
}
