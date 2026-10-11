import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImagePath } from '../../../../shared/enum/imagePath.enum';
import { ContainerComponent, TextComponent } from '../../../../shared/components';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, ContainerComponent, TextComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  readonly imagepath = ImagePath;
  readonly currentYear = new Date().getFullYear();

  readonly platformLinks = [
    { label: 'Home', path: '/home' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Subjects', path: '/subjects' },
    { label: 'Learning Levels', path: '/levels' },
    { label: 'Features', path: '/features' },
  ];

  readonly familiesLinks = [
    { label: 'For Parents', path: '/for-parents' },
    { label: 'Student Space', path: '/student-space' },
    { label: 'Success Stories', path: '/stories' },
    { label: 'Pricing & Free Trial', path: '/pricing' },
  ];

  readonly aboutLinks = [
    { label: 'Our Mission', path: '/about' },
    { label: 'Adaptive Pedagogy', path: '/pedagogy' },
    { label: 'Safety & Privacy', path: '/privacy' },
    { label: 'Contact Us', path: '/contact' },
  ];
}

