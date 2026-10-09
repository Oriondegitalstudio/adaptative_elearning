
import { Component, Input } from '@angular/core';

@Component({
  selector: 'luna-section',
  standalone: true,
  template: `
    <section [class]="'luna-section luna-section-' + spacing">
      @if (title || description) {
        <header class="luna-section-header">
          @if (title) {
            <h2>{{ title }}</h2>
          }
          @if (description) {
            <p>{{ description }}</p>
          }
        </header>
      }

      <ng-content />
    </section>
  `,
  styles: [`
    :host { display: block; }
    .luna-section-compact { padding-block: 1rem; }
    .luna-section-default { padding-block: clamp(1.5rem, 4vw, 3rem); }
    .luna-section-spacious { padding-block: clamp(3rem, 7vw, 5rem); }
    .luna-section-header { margin-bottom: 1.5rem; }
    .luna-section-header h2 {
      margin: 0 0 .5rem;
      color: var(--color-luna-heading);
      font-size: clamp(1.25rem, 2.5vw, 2rem);
    }
    .luna-section-header p {
      margin: 0;
      color: var(--color-luna-muted);
      font-size: .875rem;
      line-height: 1.65;
    }
  `],
})
export class SectionComponent {
  @Input() title = '';

  @Input() description = '';

  @Input() spacing: 'compact' | 'default' | 'spacious' = 'default';
}