import { Component } from '@angular/core';
import { ContainerComponent } from '../../../../shared/components';

interface WhyCard {
  title: string;
  description: string;
  iconColor: string;
  iconType: 'sparkle' | 'heart' | 'shield' | 'medal';
}

@Component({
  selector: 'app-why-luna-section',
  standalone: true,
  imports: [ContainerComponent],
  templateUrl: './why-luna-section.component.html',
  styleUrl: './why-luna-section.component.css',
})
export class WhyLunaSectionComponent {
  readonly whyCards: WhyCard[] = [
    {
      title: 'Adapted for you',
      description: 'Every lesson and exercise adapts to their pace, reinforcing foundational concepts before moving ahead.',
      iconColor: '#F4510B',
      iconType: 'sparkle',
    },
    {
      title: 'Room to find your voice',
      description: 'A safe, supportive space for exploring, making mistakes, and growing without pressure or embarrassment.',
      iconColor: '#7541C8',
      iconType: 'heart',
    },
    {
      title: 'True peace of mind',
      description: 'Parents stay clearly in the loop with weekly progress digests without feeling like a hover-parent.',
      iconColor: '#267B5B',
      iconType: 'shield',
    },
    {
      title: 'Learning you can trust',
      description: 'Designed by pedagogues and certified teachers, aligned with official school standards from CP to Terminale.',
      iconColor: '#C45B14',
      iconType: 'medal',
    },
  ];
}

