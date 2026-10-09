import { Component, Input } from '@angular/core';

@Component({
  selector: 'luna-heading',
  standalone: true,
  template: `
    @switch (level) {
      @case (1) {
        <h1 [class]="headingClasses"><ng-content /></h1>
      }
      @case (2) {
        <h2 [class]="headingClasses"><ng-content /></h2>
      }
      @case (3) {
        <h3 [class]="headingClasses"><ng-content /></h3>
      }
      @case (4) {
        <h4 [class]="headingClasses"><ng-content /></h4>
      }
      @case (5) {
        <h5 [class]="headingClasses"><ng-content /></h5>
      }
      @default {
        <h6 [class]="headingClasses"><ng-content /></h6>
      }
    }
  `,
  styles: [`
    :host { display: block; min-width: 0; }
    h1, h2, h3, h4, h5, h6 { margin: 0; }
    .heading-display { font-size: clamp(2rem, 4vw, 3.5rem); }
    .heading-xl { font-size: clamp(1.75rem, 3vw, 2.5rem); }
    .heading-lg { font-size: 1.5rem; }
    .heading-md { font-size: 1.25rem; }
    .heading-sm { font-size: 1rem; }
    .heading-xs { font-size: .875rem; }
    .heading-normal { font-weight: 400; }
    .heading-medium { font-weight: 500; }
    .heading-semibold { font-weight: 600; }
    .heading-bold { font-weight: 700; }
    .heading-extrabold { font-weight: 800; }
    .heading-default { color: var(--color-luna-heading); }
    .heading-muted { color: var(--color-luna-muted); }
    .heading-primary { color: var(--luna-role-primary); }
  `],
})
export class HeadingComponent {
  @Input() level: 1 | 2 | 3 | 4 | 5 | 6 = 2;

  @Input() size:
    | 'display' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' = 'lg';

  @Input() weight:
    | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' = 'bold';

  @Input() color: 'default' | 'muted' | 'primary' = 'default';

  get headingClasses(): string {
    return `heading-${this.size} heading-${this.weight} heading-${this.color}`;
  }
}