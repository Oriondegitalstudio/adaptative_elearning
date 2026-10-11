import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContainerComponent, BadgeComponent, ButtonComponent } from '../../../../shared/components';

@Component({
  selector: 'app-parent-experience-section',
  standalone: true,
  imports: [RouterLink, ContainerComponent, BadgeComponent, ButtonComponent],
  templateUrl: './parent-experience-section.component.html',
  styleUrl: './parent-experience-section.component.css',
})
export class ParentExperienceSectionComponent {}

