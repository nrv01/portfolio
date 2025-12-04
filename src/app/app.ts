import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LayoutComponent } from '@layout/layout/layout.component';
import { HeroComponent } from '@features/home/components/hero/hero.component';
import { AboutComponent } from '@features/about/components/about/about.component';
import { ExperienceComponent } from '@features/experience/components/experience/experience.component';
import { ProjectsComponent } from '@features/project/components/projects/projects.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutComponent, HeroComponent, AboutComponent, ExperienceComponent, ProjectsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ng-portfolio');
}
