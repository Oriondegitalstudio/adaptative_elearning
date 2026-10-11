import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  BadgeComponent,
  BaseCardComponent,
  ButtonComponent,
  ContainerComponent,
  SectionComponent,
  TextComponent
} from '../../../../shared/components';
import { ImagePath } from '../../../../shared/enum/imagePath.enum';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    RouterLink,
    SectionComponent,
    ContainerComponent,
    TextComponent,
    ButtonComponent,
    BadgeComponent,
    BaseCardComponent,
  ],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {
  readonly imagepath = ImagePath;
}

