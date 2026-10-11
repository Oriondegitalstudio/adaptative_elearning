import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContainerComponent, ButtonComponent } from '../../../../shared/components';

interface LevelItem {
  title: string;
  ages: string;
  description: string;
  cta: string;
  path: string;
  textColor: string;
}

@Component({
  selector: 'app-levels-section',
  standalone: true,
  imports: [RouterLink, ContainerComponent, ButtonComponent],
  templateUrl: './levels-section.component.html',
  styleUrl: './levels-section.component.css',
})
export class LevelsSectionComponent {
  readonly levels: LevelItem[] = [
    {
      title: 'Primary school',
      ages: '6–10',
      description: 'Playful, visual, and supportive. Clear instructions, friendly feedback, and joyful milestone celebrations.',
      cta: 'Discover Primary',
      path: '/levels/primary',
      textColor: '#F4510B',
    },
    {
      title: 'Middle school',
      ages: '11–14',
      description: 'More autonomy, structured exploration, and deeper conceptual problem-solving across all core subjects.',
      cta: 'Explore 11–14 level',
      path: '/levels/middle',
      textColor: '#7541C8',
    },
    {
      title: 'Lycée',
      ages: '15–18',
      description: 'Rigorous academic preparation, Baccalauréat readiness, advanced synthesis, and exam confidence.',
      cta: 'Explore 15–18 level',
      path: '/levels/lycee',
      textColor: '#2762C2',
    },
  ];
}

