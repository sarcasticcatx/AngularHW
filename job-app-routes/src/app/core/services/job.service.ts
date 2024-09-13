import { computed, inject, Injectable, signal } from '@angular/core';
import { JobApplication } from '../../feature/jobs/models/job.model';
import { JobsMock } from '../../feature/jobs/models/job.mock';

@Injectable({
  providedIn: 'root',
})
export class JobService {

  //all jobs
  jobs = signal<JobApplication[]>(JobsMock);

  jobSelection = signal<JobApplication>(null);

  jobSelect(jobs: JobApplication) {
    console.log('job select called', this.jobSelection);
    this.jobSelection.set(jobs);
  }

  selectedCompany = signal<JobApplication>(null)

// get job by id
getJobById(id: number) {
// return (this.jobs().find(job => job.id === id)) 
 if(this.selectedCompany()) return
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

// ! ako e writable signal mora da ima (vakvi zagradi) dont forget
