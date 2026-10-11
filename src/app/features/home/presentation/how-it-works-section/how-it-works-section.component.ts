import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContainerComponent, BadgeComponent, ButtonComponent } from '../../../../shared/components';

interface StepItem {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-how-it-works-section',
  standalone: true,
  imports: [RouterLink, ContainerComponent, BadgeComponent, ButtonComponent],
  templateUrl: './how-it-works-section.component.html',
  styleUrl: './how-it-works-section.component.css',
})
export class HowItWorksSectionComponent {
  readonly steps: StepItem[] = [
    {
      number: '01',
      title: 'Create your account',
      description: 'A welcoming space for students and their families to get started in 2 minutes.',
    },
    {
      number: '02',
      title: 'Discover your level',
      description: 'A gentle 10-minute diagnostic reveals strengths and growth opportunities without stress.',
    },
    {
      number: '03',
      title: 'Get your learning path',
      description: 'Courses and interactive practice tailored specifically to their grade and personal learning rhythm.',
    },
    {
      number: '04',
      title: 'Learn. Try. Grow.',
      description: 'Bite-sized activities and immediate, encouraging feedback that keep motivation and confidence high.',
    },
  ];
}

