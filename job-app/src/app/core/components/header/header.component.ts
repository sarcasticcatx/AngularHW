import { Component } from '@angular/core';
import { JobPanelComponent } from '../../feature/models/components/job-panel/job-panel.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [JobPanelComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
