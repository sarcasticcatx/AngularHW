import { Component, effect, inject, input, output, signal } from '@angular/core';
import {
  JobApplication,
  JobsFormValue,
  WorkType,
} from '../../models/job.model';
import {
  FormControl,
  Validators,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { Router } from '@angular/router';
import { JobService } from '../../../../core/services/job.service';

@Component({
  selector: 'app-job-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './job-form.component.html',
  styleUrl: './job-form.component.scss',
})
export class JobFormComponent {
  private jobService = inject(JobService)

  editJobData = input<JobApplication>();

  submitOutput = output<JobsFormValue>();

// createNewJob = this.jobService.createNewJob;

  jobsForm = this.generateForm();

  workTypes = WorkType;

  jobSubmitted = signal(false);

  // constructor() {
  //   effect(() => {
  //     if (this.editJobData()) this.populateForm(this.editJobData());

  //   });
  //   console.log()
  // }

  generateForm() {
    return new FormGroup({
      company: new FormGroup({
        companyName: new FormControl('', Validators.required),
        owner: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        companyAdress: new FormControl('', Validators.required),
        companyWebsite: new FormControl('', Validators.required),
      }),
      expires: new FormControl('', Validators.required),
      position: new FormControl('', Validators.required),
      startingSalary: new FormControl<number>(null, [
        Validators.required,
        Validators.min(1),
      ]),
      workType: new FormControl<WorkType>(null, Validators.required),

      location: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      qualifications: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      isApplied: new FormControl<boolean>(false, Validators.requiredTrue),
    });
  }

  populateForm(jobs: JobApplication) {
    this.jobsForm.setValue({
      company: {
        companyName: jobs.company.companyName,
        owner: jobs.company.owner,
        email: jobs.company.email,
        companyAdress: jobs.company.companyAdress,
        companyWebsite: jobs.company.companyWebsite,
      },
      expires: jobs.expires,
      position: jobs.position,
      startingSalary: jobs.startingSalary,
      workType: jobs.workType,
      location: jobs.location,
      country: jobs.country,
      qualifications: jobs.qualifications,
      description: jobs.description,
      isApplied: jobs.isApplied,
    });
  }

  onFormSubmit() {
    this.jobSubmitted.set(true);
    this.jobsForm.markAllAsTouched();

    // if (this.jobsForm.invalid) return;


    console.log('form submitted');

    console.log(this.jobsForm.value);

   this.submitOutput.emit(this.jobsForm.value as JobsFormValue);

  }

}
