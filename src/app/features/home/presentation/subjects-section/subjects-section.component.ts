import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContainerComponent, ButtonComponent } from '../../../../shared/components';

interface SubjectItem {
  title: string;
  description: string;
  levels: string;
  bgColor: string;
  borderColor: string;
  iconColor: string;
  iconType: 'calc' | 'flask' | 'chat' | 'globe' | 'star';
}

@Component({
  selector: 'app-subjects-section',
  standalone: true,
  imports: [RouterLink, ContainerComponent, ButtonComponent],
  templateUrl: './subjects-section.component.html',
  styleUrl: './subjects-section.component.css',
})
export class SubjectsSectionComponent {
  readonly subjects: SubjectItem[] = [
    {
      title: 'Mathematics',
      description: 'Fractions, mental arithmetic, geometry, algebra, word problems & functions.',
      levels: 'Primary · Middle school · Lycée',
      bgColor: '#FFF4EC',
      borderColor: '#FCE1D2',
      iconColor: '#F4510B',
      iconType: 'calc',
    },
    {
      title: 'Science',
      description: 'Physics, chemistry, biology, earth sciences, space exploration & nature.',
      levels: 'Primary · Middle school · Lycée',
      bgColor: '#EDF7F2',
      borderColor: '#D4EFE1',
      iconColor: '#267B5B',
      iconType: 'flask',
    },
    {
      title: 'Languages',
      description: 'French, English, reading comprehension, grammar, phonics & vocabulary.',
      levels: 'Primary · Middle school · Lycée',
      bgColor: '#F5F0FC',
      borderColor: '#E8DEF8',
      iconColor: '#7541C8',
      iconType: 'chat',
    },
    {
      title: 'History & Geography',
      description: 'World civilizations, geography & maps, climate challenges, and citizenship.',
      levels: 'Middle school · Lycée',
      bgColor: '#F0F4FC',
      borderColor: '#D9E4FA',
      iconColor: '#3B68B5',
      iconType: 'globe',
    },
    {
      title: 'And new worlds to discover',
      description: 'Digital literacy, study habits, logic puzzles, coding basics & personal growth.',
      levels: 'All levels',
      bgColor: '#FFF9EB',
      borderColor: '#FDEBBD',
      iconColor: '#C45B14',
      iconType: 'star',
    },
  ];
}

