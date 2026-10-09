
import { Component, Input } from '@angular/core';

@Component({
  selector: 'luna-button',
  standalone: true,
  template: `
    <button
      [type]="type"
      [class]="buttonClasses"
      [disabled]="disabled || loading"
      [attr.aria-busy]="loading"
    >
      @if (loading) {
        <span class="luna-button-spinner" aria-hidden="true"></span>
      }
      <ng-content />
    </button>
  `,
  styles: [`
    :host { display: inline-flex; max-width: 100%; }
    button { max-width: 100%; }
    .luna-btn-sm { min-height: 1.75rem; padding: .35rem .65rem; }
    .luna-btn-md { min-height: 2.25rem; padding: .55rem 1rem; }
    .luna-btn-lg { min-height: 2.75rem; padding: .7rem 1.25rem; font-size: .875rem; }
    .luna-btn-block { width: 100%; }
    .luna-button-spinner {
      width: .85rem;
      height: .85rem;
      flex: 0 0 auto;
      border: 2px solid currentColor;
      border-right-color: transparent;
      border-radius: 50%;
      animation: luna-spin .7s linear infinite;
    }
    @keyframes luna-spin { to { transform: rotate(360deg); } }
    @media (prefers-reduced-motion: reduce) {
      .luna-button-spinner { animation-duration: 2s; }
    }
  `],
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'ghost' = 'primary';

  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  @Input() disabled = false;

  @Input() loading = false;

  @Input() block = false;

  get buttonClasses(): string {
    return [
      'luna-btn',
      `luna-btn-${this.variant}`,
      `luna-btn-${this.size}`,
      this.block ? 'luna-btn-block' : '',
    ].filter(Boolean).join(' ');
  }
}