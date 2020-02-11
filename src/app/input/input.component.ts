import { Component, Input, forwardRef, OnInit } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {
  _value = "";
  @Input("disabled") _disabled: boolean;
  constructor() {}

  ngOnInit() {}

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
    this.propagateChange(this._value);
  }

  writeValue(value: string) {
    if (value !== undefined) {
      this.value = value;
    }
  }

  propagateChange = (_: any) => {};
  propagateTouched = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn) {
    this.propagateTouched = fn;
  }

  touched($event) {
    this.propagateTouched($event);
  }
  setDisabledState(isDisabled: boolean) {
    this._disabled = isDisabled;
  }
}
