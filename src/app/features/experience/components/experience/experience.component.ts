import { Component, signal } from '@angular/core';
import { Experience } from '@features/experience/models/experience.model';
import { ExperienceItemComponent } from '../experience-item/experience-item.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExperienceItemComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  readonly experiences = signal<Experience[]>([
    {
      id: 1,
      company: 'NTT Data',
      role: 'Backend Developer',
      startDate: 'October 2025',
      endDate: 'Present',
      currentWorkplace: true,
      location: 'Arequipa, Peru',
      logoUrl: 'https://placehold.co/48x48',
      description:
        'Development of APIs, microservices, and scalable backend solutions using Spring Boot, integrating legacy systems and optimizing internal processes.',
      achievements: [
        'Implemented microservices using Java Spring Boot.',
        'Integrated internal systems using REST and SOAP services.',
        'Optimized backend performance and database queries.',
        'Actively participated in architecture discussions and code reviews.'
      ],
      technologies: [
        'Java',
        'Spring Boot',
        'Microservices',
        'SQL Server',
        'Docker',
        'CI/CD'
      ]
    },
    {
      id: 2,
      company: 'Indra S.A.',
      role: 'Full Stack Developer',
      startDate: 'August 2024',
      endDate: 'September 2025',
      currentWorkplace: false,
      location: 'Arequipa, Peru',
      logoUrl: 'https://placehold.co/48x48',
      description:
        'Development and maintenance of solutions integrating internal systems with modern architectures, improving critical business processes.',
      achievements: [
        'Developed and maintained applications using Java Spring Boot and .NET.',
        'Implemented REST and SOAP services connecting COBOL / AS400 with modern systems.',
        'Created payment gateways and budgeting systems with .NET Core, Blazor, and SQL Server.',
        'Worked with QA on test case definition, mapping, and automation.',
        'Gathered requirements and provided technical support for business users.'
      ],
      technologies: [
        'Java',
        'Spring Boot',
        '.NET Core',
        'Blazor',
        'SQL Server',
        'SOAP',
        'REST'
      ]
    },
    {
      id: 3,
      company: 'Estudios Creativos del Perú',
      role: 'Full Stack Developer',
      startDate: 'October 2023',
      endDate: 'August 2024',
      currentWorkplace: false,
      location: 'Arequipa, Peru',
      logoUrl: 'https://placehold.co/48x48',
      description:
        'Development of custom solutions for companies and organizations, including POS systems, administrative platforms, and scalable web applications.',
      achievements: [
        'Developed POS systems in Laravel and Vue.js used by over 50 restaurants.',
        'Implemented a web platform for Antapaccay using .NET, Blazor, and MySQL.',
        'Built management systems including Remasur, Cappricio, and UCSM application platform.',
        'Integrated authentication and authorization using Spring Security.'
      ],
      technologies: [
        'Laravel',
        'Vue.js',
        'JavaScript',
        'TypeScript',
        '.NET',
        'Blazor',
        'MySQL'
      ]
    }
  ]);
}
