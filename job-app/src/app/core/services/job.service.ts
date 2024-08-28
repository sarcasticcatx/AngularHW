import { computed, Injectable, signal } from '@angular/core';
import { JobApplication } from '../feature/models/job.model';
import { JobsMock } from '../feature/models/job.mock';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  jobs = signal<JobApplication[]>([]);

  jobSelection = signal<JobApplication>(null);

  jobSelect(jobs: JobApplication) {
    console.log('job select called', this.jobSelection);
    this.jobSelection.set(jobs);
  }
//how many are applied to
  totalJobs = computed(() => this.jobs().filter((job) => job.isApplied).length);

  // applyOrCancelJob(type: 'Apply' | 'Cancel', movieId: number) {
  //   this.jobs.update((prevJobs) =>
  //     prevJobs.map((job) => {
  //       if (job.id === movieId) {
  //         return {
  //           ...job,
  //           isApplied:
  //             type === 'Apply' ? job.isApplied : job.isApplied ,
  //         };
  //       }

  //       return job;
  //     })
  //   );
  // }
}
// By clicking "apply," the job posting is 
// then transferred to the applied jobs list,
//  where it can also be viewed with its details.
//   The application can be canceled, which will
//    return the posting to the available jobs list 
// (use services to handle this functionality).
