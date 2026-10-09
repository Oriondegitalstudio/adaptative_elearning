
import { Component, Input } from '@angular/core';

@Component({
  selector: 'luna-text',
  standalone: true,
  template: `
    <p [class]="textClasses" [attr.aria-live]="live">
      <ng-content />
    </p>
  `,
  styles: [`
    :host { display: block; min-width: 0; }
    p { margin: 0; }
    .text-body { font-size: .8125rem; }
    .text-sm { font-size: .75rem; }
    .text-xs { font-size: .6875rem; }
    .text-caption { font-size: .625rem; }
    .text-default { color: var(--color-luna-text); }
    .text-muted { color: var(--color-luna-muted); }
    .text-heading { color: var(--color-luna-heading); }
    .text-primary { color: var(--luna-role-primary); }
    .text-normal { font-weight: 400; }
    .text-medium { font-weight: 500; }
    .text-semibold { font-weight: 600; }
    .text-bold { font-weight: 700; }
    .text-compact { line-height: 1.3; }
    .text-relaxed { line-height: 1.75; }
  `],
})
export class TextComponent {
  @Input() size: 'body' | 'sm' | 'xs' | 'caption' = 'body';

  @Input() color: 'default' | 'muted' | 'heading' | 'primary' = 'default';

  @Input() weight: 'normal' | 'medium' | 'semibold' | 'bold' = 'normal';

  @Input() lineHeight: 'normal' | 'compact' | 'relaxed' = 'normal';

  @Input() live: 'polite' | 'assertive' | 'off' = 'off';

  get textClasses(): string {
    return [
      `text-${this.size}`,
      `text-${this.color}`,
      `text-${this.weight}`,
      this.lineHeight === 'normal' ? '' : `text-${this.lineHeight}`,
    ].filter(Boolean).join(' ');
  }
}