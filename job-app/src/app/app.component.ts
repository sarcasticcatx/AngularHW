import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { JobDetailsComponent } from './core/feature/models/components/job-details/job-details.component';
import { JobListComponent } from './core/feature/models/components/job-list/job-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    JobDetailsComponent,
    JobListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'JOB-SEEKER';

}
