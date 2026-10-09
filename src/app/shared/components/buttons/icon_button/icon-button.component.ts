
import { Component, Input } from '@angular/core';

@Component({
  selector: 'luna-icon-button',
  standalone: true,
  template: `
    <button
      class="luna-icon-button"
      [type]="type"
      [disabled]="disabled"
      [attr.aria-label]="label"
      [attr.title]="label"
    >
      <ng-content />
    </button>
  `,
  styles: [`
    :host { display: inline-flex; }
    .luna-icon-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2.5rem;
      height: 2.5rem;
      padding: .5rem;
      border: 1px solid var(--color-luna-border);
      border-radius: var(--radius-control);
      background: var(--color-luna-surface);
      color: var(--color-luna-heading);
      cursor: pointer;
      transition: background-color 160ms ease, border-color 160ms ease;
    }
    .luna-icon-button:hover:not(:disabled) {
      background: var(--color-luna-surface-muted);
      border-color: var(--luna-role-primary);
    }
    .luna-icon-button:disabled {
      opacity: .55;
      cursor: not-allowed;
    }
  `],
})
export class IconButtonComponent {
  @Input({ required: true }) label!: string;

  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  @Input() disabled = false;
}