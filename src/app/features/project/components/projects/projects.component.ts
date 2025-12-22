import { Component, signal } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { ProjectCardComponent } from '@features/project/components/project-card/project-card.component';
import { Project } from '@features/project/models/project.model';

@Component({
  selector: 'app-projects',
  imports: [SvgIconComponent, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly projects = signal<Project[]>([
    {
      id: 1,
      name: 'Portfolio Website',
      description: 'Personal portfolio built with Angular and Tailwind CSS showcasing my projects and skills.',
      imageUrl: 'https://placehold.co/600x300',
      tags: ['Angular', 'Tailwind', 'TypeScript'],
      repoUrl: 'https://github.com/your-username/portfolio',
      liveUrl: 'https://your-portfolio.com',
    },
    {
      id: 2,
      name: 'Task Management App',
      description: 'A simple task management application with CRUD operations and responsive design.',
      imageUrl: 'https://placehold.co/600x300',
      tags: ['Angular', 'Signals', 'REST API'],
      repoUrl: 'https://github.com/your-username/task-manager',
      liveUrl: 'https://task-manager-demo.com',
    },
    {
      id: 3,
      name: 'E-commerce Landing Page',
      description: 'Landing page for an e-commerce product focused on performance and clean UI.',
      imageUrl: 'https://placehold.co/600x300',
      tags: ['HTML', 'CSS', 'JavaScript'],
      repoUrl: 'https://github.com/your-username/ecommerce-landing',
      liveUrl: 'https://ecommerce-landing.com',
    },
  ]);
}
