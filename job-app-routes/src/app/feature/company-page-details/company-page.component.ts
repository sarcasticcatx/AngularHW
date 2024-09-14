import { Component, inject, input, OnInit, signal } from '@angular/core';
import { LoggerService } from '../../core/services/logger.service';
import { JobService } from '../../core/services/job.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-page',
  standalone: true,
  imports: [],
  templateUrl: './company-page.component.html',
  styleUrl: './company-page.component.scss',
})
export class CompanyPageComponent implements OnInit {
  private loggerService = inject(LoggerService);
  private jobsService = inject(JobService);

  private route = inject(ActivatedRoute);

  selectedCompany = this.jobsService.selectedCompany;

  ngOnInit(): void {
    this.loggerService.logDetails('company Details');

    const id: string = this.route.snapshot.params['id'];

    this.jobsService.getJobById(Number(id));
    console.log(this.selectedCompany());
  }
}
