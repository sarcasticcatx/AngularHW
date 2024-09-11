import { Component, computed, inject, input, OnInit } from '@angular/core';
import { JobService } from '../../../../services/job.service';
import { LoggerService } from '../../../../services/logger.service';
import { JobApplication } from '../../job.model';
import { JobItemComponent } from '../job-item/job-item.component';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [JobItemComponent],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss',
})
export class JobListComponent implements OnInit {
  private jobsService = inject(JobService);
  private loggersService = inject(LoggerService);

  //the reference to the property in the service
  jobs = computed(() => this.jobsService.jobs().filter((job) => !job.isApplied))

  ngOnInit(): void {
    this.loggersService.logDetails('Jobs List');
  }

  onJobSelect(jobs: JobApplication) {
    this.jobsService.jobSelect(jobs);
  }
}
