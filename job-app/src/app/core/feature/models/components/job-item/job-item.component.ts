import { Component, inject, input, OnInit } from '@angular/core';
import { JobApplication } from '../../job.model';
import { ToggleReadMoreDirective } from '../../../../directives/toggle-read-more.directive';
import { CommonModule } from '@angular/common';
import { ShortenPipe } from '../../../../pipes/shorten.pipe';
import { ApplyOrCancelButtonComponent } from '../../../../../shared/apply-buttons/a.button.component';
import { JobService } from '../../../../services/job.service';

@Component({
  selector: 'app-job-item',
  standalone: true,
  imports: [CommonModule, ToggleReadMoreDirective,ShortenPipe, ApplyOrCancelButtonComponent ],
  templateUrl: './job-item.component.html',
  styleUrl: './job-item.component.scss'
})
export class JobItemComponent {
  private jobService = inject(JobService)


jobs = input.required<JobApplication>();

appliedJob = input<JobApplication>(null);


jobSelection = this.jobService.jobSelection


onClickApply(type: 'Apply') {
  console.log("apply called");

   this.jobService.apply(type, this.jobs().id);
   
}

onClickCancel(type: 'Cancel') {
  console.log("cancel called")
  this.jobService.cancel(type, this.jobs().id)
}


}

