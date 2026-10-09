
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'luna-textarea',
  standalone: true,
  template: `
    <div class="luna-field">
      @if (label) {
        <label class="luna-label" [for]="inputId">
          {{ label }}
          @if (required) { <span aria-hidden="true">*</span> }
        </label>
      }

      <textarea
        class="luna-textarea"
        [id]="inputId"
        [name]="name"
        [value]="value"
        [placeholder]="placeholder"
        [rows]="rows"
        [maxlength]="maxLength"
        [disabled]="disabled"
        [required]="required"
        [attr.aria-invalid]="error ? 'true' : null"
        [attr.aria-describedby]="error ? inputId + '-error' : hint ? inputId + '-hint' : null"
        (input)="onInput($event)"
      ></textarea>

      @if (error) {
        <small class="luna-error" [id]="inputId + '-error'">{{ error }}</small>
      } @else if (hint) {
        <small class="luna-help" [id]="inputId + '-hint'">{{ hint }}</small>
      }
    </div>
  `,
})
export class TextareaComponent {
  @Input() inputId = `luna-textarea-${Math.random().toString(36).slice(2, 9)}`;

  @Input() label = '';

  @Input() name = '';

  @Input() value = '';

  @Input() placeholder = '';

  @Input() rows = 4;

  @Input() maxLength: number | null = null;

  @Input() hint = '';

  @Input() error = '';

  @Input() required = false;

  @Input() disabled = false;

  @Output() valueChange = new EventEmitter<string>();

  onInput(event: Event): void {
    this.valueChange.emit((event.target as HTMLTextAreaElement).value);
  }
}