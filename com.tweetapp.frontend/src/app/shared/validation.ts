import { AbstractControl } from '@angular/forms';

export function emailValidator(control: AbstractControl) {
  if (control.value.length > 0) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result = re.test(String(control.value).toLowerCase());
    return result ? null : { email: { value: 'Please provide a valid email' } };
  }
}

export function dobValidator(control: AbstractControl) {
  if (control.value.length > 0) {
    const pattern = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
    const result = pattern.test(String(control.value));
    return result
      ? null
      : { dob: { value: 'Please provide the dob in specified format' } };
  }
}
export function phoneNumber(control: AbstractControl) {
  if (control.value.length > 0) {
    const pattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    const result = pattern.test(String(control.value));
    return result
      ? null
      : { number: { value: 'Please provide valid phone number' } };
  }
}
