import { Component, inject, OnInit } from '@angular/core';
import { JobService } from '../../../../services/job.service';
import { LoggerService } from '../../../../services/logger.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss',
})
export class JobDetailsComponent implements OnInit {
  private jobsService = inject(JobService);
  private loggersService = inject(LoggerService);
 

  //referencata od servisot
  jobSelection = this.jobsService.jobSelection;

totalJobs = inject(JobService).totalJobs;

  ngOnInit(): void {
    this.loggersService.logDetails('job details');
    //why you give me null
    console.log('who are you?', this.jobSelection());
  }


}
