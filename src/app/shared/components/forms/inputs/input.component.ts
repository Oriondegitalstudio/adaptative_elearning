
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'luna-input',
  standalone: true,
  template: `
    <div class="luna-field">
      @if (label) {
        <label class="luna-label" [for]="inputId">
          {{ label }}
          @if (required) {
            <span aria-hidden="true">*</span>
          }
        </label>
      }

      <input
        class="luna-input"
        [id]="inputId"
        [type]="type"
        [name]="name"
        [value]="value"
        [placeholder]="placeholder"
        [disabled]="disabled"
        [required]="required"
        [attr.autocomplete]="autocomplete"
        [attr.aria-invalid]="error ? 'true' : null"
        [attr.aria-describedby]="error ? inputId + '-error' : hint ? inputId + '-hint' : null"
        (input)="onInput($event)"
      />

      @if (error) {
        <small class="luna-error" [id]="inputId + '-error'">{{ error }}</small>
      } @else if (hint) {
        <small class="luna-help" [id]="inputId + '-hint'">{{ hint }}</small>
      }
    </div>
  `,
})
export class InputComponent {
  @Input() inputId = `luna-input-${Math.random().toString(36).slice(2, 9)}`;

  @Input() label = '';

  @Input() name = '';

  @Input() type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' = 'text';

  @Input() value = '';

  @Input() placeholder = '';

  @Input() autocomplete = '';

  @Input() hint = '';

  @Input() error = '';

  @Input() required = false;

  @Input() disabled = false;

  @Output() valueChange = new EventEmitter<string>();

  onInput(event: Event): void {
    const element = event.target as HTMLInputElement;
    this.valueChange.emit(element.value);
  }
}