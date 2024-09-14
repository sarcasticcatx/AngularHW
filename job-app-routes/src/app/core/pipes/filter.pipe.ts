import { Pipe, PipeTransform } from '@angular/core';
import { JobApplication } from '../../feature/jobs/models/job.model';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(
    jobsValue: JobApplication[],
    searchValue: string
  ): JobApplication[] {
    if (!searchValue) return jobsValue;

    const filteredJobs = jobsValue.filter((job) =>
      job.position.toLowerCase().includes(searchValue.toLowerCase().trim())
    );
    return filteredJobs;
  }
}
