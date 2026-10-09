
import { Component, Input } from '@angular/core';

@Component({
  selector: 'luna-alert',
  standalone: true,
  template: `
    <div
      [class]="'luna-alert luna-alert-' + variant"
      [attr.role]="variant === 'danger' ? 'alert' : 'status'"
      [attr.aria-live]="variant === 'danger' ? 'assertive' : 'polite'"
    >
      <div class="luna-alert-content">
        @if (title) {
          <strong class="luna-alert-title">{{ title }}</strong>
        }
        <div><ng-content /></div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
    .luna-alert-content { min-width: 0; }
    .luna-alert-title {
      display: block;
      margin-bottom: .2rem;
      color: var(--color-luna-heading);
    }
  `],
})
export class AlertComponent {
  @Input() variant: 'success' | 'warning' | 'danger' | 'info' = 'info';

  @Input() title = '';
}