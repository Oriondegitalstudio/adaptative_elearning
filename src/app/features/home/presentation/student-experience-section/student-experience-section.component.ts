import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContainerComponent, BadgeComponent, ButtonComponent } from '../../../../shared/components';

@Component({
  selector: 'app-student-experience-section',
  standalone: true,
  imports: [RouterLink, ContainerComponent, BadgeComponent, ButtonComponent],
  templateUrl: './student-experience-section.component.html',
  styleUrl: './student-experience-section.component.css',
})
export class StudentExperienceSectionComponent {}

