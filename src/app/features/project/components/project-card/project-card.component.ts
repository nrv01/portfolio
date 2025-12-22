import { Component, input } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { Project } from '@features/project/models/project.model';

@Component({
  selector: 'app-project-card',
  imports: [SvgIconComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  readonly project = input<Project>();
}
