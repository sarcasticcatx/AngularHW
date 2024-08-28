import { Component, inject, input, OnInit } from '@angular/core';
import { JobService } from '../../../../services/job.service';
import { LoggerService } from '../../../../services/logger.service';
import { JobDetailsComponent } from '../job-details/job-details.component';
import { JobApplication } from '../../job.model';
import { JobItemComponent } from '../job-item/job-item.component';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [JobItemComponent, JobDetailsComponent],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss',
})
export class JobListComponent implements OnInit {
  private jobsService = inject(JobService);
  private loggersService = inject(LoggerService);

  //the reference to the property in the service
  jobs = this.jobsService.jobs;

  ngOnInit(): void {
    this.loggersService.logDetails('Jobs List');
  }

  onJobSelect(jobs: JobApplication) {
    this.jobsService.jobSelect(jobs);
  }
}
//remeake this without the service in here but with the service for something else