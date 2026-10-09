
import { Component, Input } from '@angular/core';

@Component({
  selector: 'luna-card',
  standalone: true,
  template: `
    <article [class]="cardClasses">
      @if (title) {
        <h3 class="luna-card-title">{{ title }}</h3>
      }

      <ng-content />
    </article>
  `,
  styles: [`
    :host { display: block; min-width: 0; }
    .luna-card { height: 100%; }
    .luna-card-compact { padding: .75rem; }
    .luna-card-comfortable { padding: 1.25rem; }
    .luna-card-flat { box-shadow: none; }
    .luna-card-interactive { cursor: pointer; }
    .luna-card-interactive:focus-visible {
      outline: 2px solid var(--luna-role-primary);
      outline-offset: 3px;
    }
  `],
})
export class BaseCardComponent {
  @Input() title = '';

  @Input() padding: 'compact' | 'default' | 'comfortable' = 'default';

  @Input() hover = false;

  @Input() flat = false;

  @Input() interactive = false;

  get cardClasses(): string {
    return [
      'luna-card',
      this.hover ? 'luna-card-hover' : '',
      this.padding === 'default' ? '' : `luna-card-${this.padding}`,
      this.flat ? 'luna-card-flat' : '',
      this.interactive ? 'luna-card-interactive' : '',
    ].filter(Boolean).join(' ');
  }
}