import { Component } from '@angular/core';

import { HeroComponent } from '@features/home/components/hero/hero.component';
import { AboutComponent } from '@features/about/components/about/about.component';
import { ExperienceComponent } from '@features/experience/components/experience/experience.component';
import { ProjectsComponent } from '@features/project/components/projects/projects.component';
import { SkillsComponent } from '@features/skills/components/skills/skills.component';


@Component({
  selector: 'app-home',
  imports: [HeroComponent, AboutComponent, ExperienceComponent, ProjectsComponent, SkillsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

}
