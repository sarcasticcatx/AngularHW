import { Component, input, OnInit, signal } from '@angular/core';
import { UserModel } from '../jobs/models/user.model';
import { UserMock } from '../jobs/models/user.mock';
import { JobPanelComponent } from '../jobs/components/job-panel/job-panel.component';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [JobPanelComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
})
export class ProfilePageComponent implements OnInit {
  userInfo = signal<UserModel[]>(UserMock);

  user = signal<UserModel | null>(null);

  ngOnInit(): void {
    this.user.set(this.userInfo()[0] || null);
  }
}
