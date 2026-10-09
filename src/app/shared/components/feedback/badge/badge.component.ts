
import { Component, Input } from '@angular/core';

@Component({
  selector: 'luna-badge',
  standalone: true,
  template: `
    <span [class]="'luna-badge luna-badge-' + variant">
      <ng-content />
    </span>
  `,
})
export class BadgeComponent {
  @Input() variant:
    | 'primary' | 'success' | 'warning' | 'danger' | 'muted' = 'primary';
}