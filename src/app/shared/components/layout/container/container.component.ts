
import { Component, Input } from '@angular/core';

@Component({
  selector: 'luna-container',
  standalone: true,
  template: `
    <div [class]="'luna-container luna-container-' + width">
      <ng-content />
    </div>
  `,
  styles: [`
    .luna-container-narrow { max-width: 48rem; }
    .luna-container-default { max-width: 80rem; }
    .luna-container-wide { max-width: 90rem; }
    .luna-container-full { max-width: none; }
  `],
})
export class ContainerComponent {
  @Input() width: 'narrow' | 'default' | 'wide' | 'full' = 'default';
}