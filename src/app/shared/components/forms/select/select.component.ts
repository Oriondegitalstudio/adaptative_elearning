
import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface LunaSelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

@Component({
  selector: 'luna-select',
  standalone: true,
  template: `
    <div class="luna-field">
      @if (label) {
        <label class="luna-label" [for]="inputId">
          {{ label }}
          @if (required) { <span aria-hidden="true">*</span> }
        </label>
      }

      <select
        class="luna-select"
        [id]="inputId"
        [name]="name"
        [value]="value"
        [disabled]="disabled"
        [required]="required"
        [attr.aria-invalid]="error ? 'true' : null"
        [attr.aria-describedby]="error ? inputId + '-error' : hint ? inputId + '-hint' : null"
        (change)="onChange($event)"
      >
        <option value="" disabled>{{ placeholder }}</option>

        @for (option of options; track option.value) {
          <option [value]="option.value" [disabled]="option.disabled">
            {{ option.label }}
          </option>
        }
      </select>

      @if (error) {
        <small class="luna-error" [id]="inputId + '-error'">{{ error }}</small>
      } @else if (hint) {
        <small class="luna-help" [id]="inputId + '-hint'">{{ hint }}</small>
      }
    </div>
  `,
})
export class SelectComponent {
  @Input() inputId = `luna-select-${Math.random().toString(36).slice(2, 9)}`;

  @Input() label = '';

  @Input() name = '';

  @Input() value = '';

  @Input() placeholder = 'Select an option';

  @Input() options: LunaSelectOption[] = [];

  @Input() hint = '';

  @Input() error = '';

  @Input() required = false;

  @Input() disabled = false;

  @Output() valueChange = new EventEmitter<string>();

  onChange(event: Event): void {
    this.valueChange.emit((event.target as HTMLSelectElement).value);
  }
}