import { Component, computed, inject, input, OnInit } from '@angular/core';
import { JobItemComponent } from '../job-item/job-item.component';
import { LoggerService } from '../../../../core/services/logger.service';
import { JobService } from '../../../../core/services/job.service';
import { JobApplication } from '../../models/job.model';
import { JobPanelComponent } from '../job-panel/job-panel.component';


@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [JobItemComponent,JobPanelComponent],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss',
})
export class JobListComponent implements OnInit {
  private jobsService = inject(JobService);
  private loggersService = inject(LoggerService);




  jobs = computed(() => this.jobsService.jobs().filter((job) => !job.isApplied))

  ngOnInit(): void {
    this.loggersService.logDetails('Jobs List');
  }

  onJobSelect(jobs: JobApplication) {
    this.jobsService.jobSelect(jobs);
  }

 
}
