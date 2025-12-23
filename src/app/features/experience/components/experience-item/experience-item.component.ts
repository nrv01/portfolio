import { Component, input } from '@angular/core';
import { Experience } from '@features/experience/models/experience.model';

@Component({
  selector: 'app-experience-item',
  imports: [],
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.scss',
})
export class ExperienceItemComponent {
  readonly experience = input<Experience>({
    id: 0,
    role: '',
    company: '',
    startDate: '',
    endDate: '',
    currentWorkplace: false,
    description: '',
    achievements: [],
    technologies: [],
    location: '',
    logoUrl: ''
  });
}
