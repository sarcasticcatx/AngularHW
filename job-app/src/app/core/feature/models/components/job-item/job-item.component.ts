import { Component, input, OnInit } from '@angular/core';
import { JobApplication } from '../../job.model';
import { ToggleReadMoreDirective } from '../../../../directives/toggle-read-more.directive';
import { CommonModule } from '@angular/common';
import { ShortenPipe } from '../../../../pipes/shorten.pipe';
import { ApplyButtonComponent } from '../../../../../shared/apply-buttons/a.button.component';

@Component({
  selector: 'app-job-item',
  standalone: true,
  imports: [CommonModule, ToggleReadMoreDirective,ShortenPipe, ApplyButtonComponent],
  templateUrl: './job-item.component.html',
  styleUrl: './job-item.component.scss'
})
export class JobItemComponent implements OnInit {
jobs = input.required<JobApplication>();

ngOnInit(): void {
  console.log(" jobies " ,this.jobs())
}

// onClickApplyOrCancel(type: 'Apply' | 'Cancel') {
//   console.log("apply/cancel method called");

//    this.jobsService.applyOrCancelJob(type, this.jobs().id);
// }
}
