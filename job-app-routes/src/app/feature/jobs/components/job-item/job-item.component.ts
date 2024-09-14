import { Component, inject, input } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';
import { ToggleReadMoreDirective } from '../../../../core/directives/toggle-read-more.directive';
import { ShortenPipe } from '../../../../core/pipes/shorten.pipe';
import { ApplyOrCancelButtonComponent } from '../../../../shared/apply-buttons/a.button.component';
import { JobService } from '../../../../core/services/job.service';
import { JobApplication } from '../../models/job.model';
import { JobPanelComponent } from '../job-panel/job-panel.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-item',
  standalone: true,
  imports: [
    CommonModule,
    ToggleReadMoreDirective,
    ShortenPipe,
    ApplyOrCancelButtonComponent,
    NgStyle,
  ],
  templateUrl: './job-item.component.html',
  styleUrl: './job-item.component.scss',
})
export class JobItemComponent {
  private jobService = inject(JobService);
  private router = inject(Router);

  jobs = input.required<JobApplication>();

  selectedCompany = this.jobService.selectedCompany;

  onClickApply(type: 'Apply') {
    console.log('apply called');

    this.jobService.apply(type, this.jobs().id);
  }

  onClickCancel(type: 'Cancel') {
    console.log('cancel called');
    this.jobService.cancel(type, this.jobs().id);
  }

  onCompanySelect(jobs: JobApplication, id: number) {
    this.jobService.jobSelect(jobs);
    this.selectedCompany.set(jobs);
    this.router.navigate(['company', id]);
    console.log('id', id);
  }
}
