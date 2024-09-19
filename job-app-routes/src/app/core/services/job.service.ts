import { computed, inject, Injectable, signal } from '@angular/core';
import {
  JobApplication,
  JobsFormValue,
} from '../../feature/jobs/models/job.model';
import { JobsMock } from '../../feature/jobs/models/job.mock';
import { Router } from '@angular/router';
import { JobFormComponent } from '../../feature/jobs/components/job-form/job-form.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  //all jobs
  jobs = signal<JobApplication[]>(JobsMock);

  jobSelection = signal<JobApplication>(null);

  jobForm = signal<JobsFormValue>(null);
  private router = inject(Router);
  
  // newJobForm: JobsFormValue[] = [];
  // job: JobApplication[] = []
  

  selectedCompany = signal<JobApplication>(null);

  jobSelect(jobs: JobApplication) {
    console.log('job select called', this.jobSelection);
    this.jobSelection.set(jobs);
  }

  // get job by id
  getJobById(id: number) {
    return this.jobs().find((job) => job.id === id);
  }


  onAddJob(value: JobsFormValue) {
    const addJob: JobApplication = {
      id: this.jobSelection().id,
      company: {
        companyName: value.company.companyName,
        owner: value.company.owner,
        email: value.company.email,
        companyAdress: value.company.companyAdress,
        companyWebsite: value.company.companyWebsite,
      },
      expires: value.expires,
      position: value.position,
      startingSalary: value.startingSalary,
      workType: value.workType,
      location: value.location,
      country: value.country,
      qualifications: value.qualifications,
      description: value.description,
      isApplied: value.isApplied,
    };
  
    this.jobs.update(prevJob => [...prevJob, addJob])

    this.jobForm.set(addJob)

    console.log('added job to the list')
  
    this.router.navigate(['jobs'])
  }


  //how many are applied to
  totalAppliedJobs = computed(
    () => this.jobs().filter((job) => job.isApplied).length
  );

  //site available jobs
  totalAvailableJobs() {
    return this.jobs().length;
  }

  //aplied jobs list
  appliedJobs(): JobApplication[] {
    return this.jobs().filter((job) => job.isApplied);
  }
  //sort by salary
  sortBySalary() {
    const copyJobsMock = [...this.jobs()];

    copyJobsMock.sort((a, b) => a.startingSalary - b.startingSalary);
    this.jobs.set(copyJobsMock);
  }
  //sort by work type
  sortByWorkType(value: string) {
    console.log('the value ', value);
    const filteredJobs = this.jobs().filter((job) => job.workType === value);
    console.log('filtered version in console', filteredJobs);
    this.jobs.set(filteredJobs);
  }

  // apply and cancel
  apply(type: 'Apply', jobId: number) {
    this.jobs.update((prevJob) =>
      prevJob.map((job) => {
        if (job.id === jobId) {
          return {
            ...job,
            isApplied: type === 'Apply' ? true : false,
          };
        }
        return job;
      })
    );
  }

  cancel(type: 'Cancel', jobId: number) {
    this.jobs.update((prevJob) =>
      prevJob.map((job) => {
        if (job.id === jobId) {
          return {
            ...job,
            isApplied: type === 'Cancel' ? false : true,
          };
        }
        return job;
      })
    );
  }
}
