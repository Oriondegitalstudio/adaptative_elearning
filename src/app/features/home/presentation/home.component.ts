import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { WhyLunaSectionComponent } from './why-luna-section/why-luna-section.component';
import { HowItWorksSectionComponent } from './how-it-works-section/how-it-works-section.component';
import { SubjectsSectionComponent } from './subjects-section/subjects-section.component';
import { LevelsSectionComponent } from './levels-section/levels-section.component';
import { StudentExperienceSectionComponent } from './student-experience-section/student-experience-section.component';
import { ParentExperienceSectionComponent } from './parent-experience-section/parent-experience-section.component';
import { CtaBannerSectionComponent } from './cta-banner-section/cta-banner-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    WhyLunaSectionComponent,
    HowItWorksSectionComponent,
    SubjectsSectionComponent,
    LevelsSectionComponent,
    StudentExperienceSectionComponent,
    ParentExperienceSectionComponent,
    CtaBannerSectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
