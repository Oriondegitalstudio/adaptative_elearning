
import { Component, Input } from '@angular/core';

@Component({
  selector: 'luna-spinner',
  standalone: true,
  template: `
    <span
      class="luna-spinner"
      [class.luna-spinner-sm]="size === 'sm'"
      [class.luna-spinner-lg]="size === 'lg'"
      role="status"
      [attr.aria-label]="label"
    >
      <span class="luna-spinner-circle" aria-hidden="true"></span>
    </span>
  `,
  styles: [`
    :host { display: inline-flex; }
    .luna-spinner { display: inline-flex; align-items: center; justify-content: center; }
    .luna-spinner-circle {
      display: block;
      width: 1.25rem;
      height: 1.25rem;
      border: 2px solid var(--color-luna-border);
      border-top-color: var(--luna-role-primary);
      border-radius: 50%;
      animation: luna-spinner-rotate .7s linear infinite;
    }
    .luna-spinner-sm .luna-spinner-circle { width: .875rem; height: .875rem; }
    .luna-spinner-lg .luna-spinner-circle { width: 2rem; height: 2rem; }
    @keyframes luna-spinner-rotate { to { transform: rotate(360deg); } }
    @media (prefers-reduced-motion: reduce) {
      .luna-spinner-circle { animation-duration: 2s; }
    }
  `],
})
export class SpinnerComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  @Input() label = 'Loading';
}