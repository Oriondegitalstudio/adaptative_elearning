import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContainerComponent, ButtonComponent } from '../../../../shared/components';

@Component({
  selector: 'app-cta-banner-section',
  standalone: true,
  imports: [RouterLink, ContainerComponent, ButtonComponent],
  templateUrl: './cta-banner-section.component.html',
  styleUrl: './cta-banner-section.component.css',
})
export class CtaBannerSectionComponent {}

