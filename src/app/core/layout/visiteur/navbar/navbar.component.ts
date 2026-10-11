import { Component, signal, HostListener, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { ImagePath } from '../../../../shared/enum/imagePath.enum';
import {
  ContainerComponent,
  ButtonComponent,
  IconButtonComponent,
} from '../../../../shared/components';

export interface NavLink {
  label: string;
  path: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    ContainerComponent,
    ButtonComponent,
    IconButtonComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  readonly imagepath = ImagePath;
  private readonly router = inject(Router);

  readonly navLinks: NavLink[] = [
    { label: 'Home', path: '/home' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Subjects', path: '/subjects' },
    { label: 'For Parents', path: '/for-parents' },
    { label: 'About', path: '/about' },
  ];

  readonly isMobileMenuOpen = signal<boolean>(false);

  constructor() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.closeMobileMenu();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((open) => !open);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  navigateTo(path: string): void {
    this.closeMobileMenu();
    this.router.navigate([path]).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  scrollToTop(event?: Event): void {
    this.closeMobileMenu();
    if (this.router.url === '/' || this.router.url === '/home') {
      if (event) {
        event.preventDefault();
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  @HostListener('window:keydown.escape')
  handleEscapeKey(): void {
    if (this.isMobileMenuOpen()) {
      this.closeMobileMenu();
    }
  }
}