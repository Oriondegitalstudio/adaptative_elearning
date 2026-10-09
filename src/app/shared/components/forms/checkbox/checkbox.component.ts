
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'luna-checkbox',
  standalone: true,
  template: `
    <label class="luna-checkbox">
      <input
        [id]="inputId"
        type="checkbox"
        [name]="name"
        [checked]="checked"
        [disabled]="disabled"
        [required]="required"
        (change)="onChange($event)"
      />
      <span class="luna-checkbox-label"><ng-content /></span>
    </label>
  `,
  styles: [`
    :host { display: inline-block; }
    .luna-checkbox {
      display: inline-flex;
      align-items: flex-start;
      gap: .5rem;
      cursor: pointer;
      color: var(--color-luna-text);
      font-size: .75rem;
      line-height: 1.5;
    }
    input {
      width: 1rem;
      height: 1rem;
      flex: 0 0 auto;
      margin: .125rem 0 0;
      accent-color: var(--luna-role-primary);
    }
    input:disabled { cursor: not-allowed; }
    .luna-checkbox:has(input:disabled) {
      cursor: not-allowed;
      opacity: .6;
    }
  `],
})
export class CheckboxComponent {
  @Input() inputId = `luna-checkbox-${Math.random().toString(36).slice(2, 9)}`;

  @Input() name = '';

  @Input() checked = false;

  @Input() disabled = false;

  @Input() required = false;

  @Output() checkedChange = new EventEmitter<boolean>();

  onChange(event: Event): void {
    this.checkedChange.emit((event.target as HTMLInputElement).checked);
  }
}