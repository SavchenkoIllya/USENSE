import { IndicatorsService } from './../features/validation.service';
import { Component } from '@angular/core';
import { FormControl, ControlValueAccessor } from '@angular/forms';

// Colors for indicators
import { Colors } from '../assets/Colors';

// RegExp rules
import { Symbols } from '../assets/Symbols';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent implements ControlValueAccessor {
  constructor(private indicatorsService: IndicatorsService) {}
  password = new FormControl('');

  public onInputValueChange(password: FormControl): void {
    this.checkPassword(password.value);
  }

  writeValue(fn: void): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}

  checkPassword(value: string): void {
    let passwordText: string = value;
    let passwordLength: number = value.length;

    let minLength: number = 8;
    let strength = 0;

    //prevent typing unincluded characters
    if (Symbols.else.test(passwordText)) {
      let filtered = passwordText.replace(Symbols.else, '');
      this.password.setValue(filtered);
      this.indicatorsService.setValidators(
        Colors.gray,
        Colors.gray,
        Colors.gray
      );
      this.indicatorsService.openDetails();
    }

    passwordLength > 0 && passwordLength < minLength
      ? (strength = strength + 10)
      : strength;
    passwordText === '' ? (strength = 0) : strength;
    passwordLength >= minLength ? (strength = strength + 20) : strength;
    Symbols.letters.test(passwordText) ? ++strength : strength;
    Symbols.numbers.test(passwordText) ? ++strength : strength;
    Symbols.symbols.test(passwordText) ? ++strength : strength;
    this.changeIndicatorsColors(strength, minLength)
  }
  
  changeIndicatorsColors(strength, minLength){
    switch (true) {
      case strength == 0:
        this.indicatorsService.setValidators(
          Colors.gray,
          Colors.gray,
          Colors.gray
        );
        this.indicatorsService.setHintText('Check your password strength');
        break;
      case strength >= 10 && strength <= 13:
        this.indicatorsService.setValidators(
          Colors.red,
          Colors.red,
          Colors.red
        );
        this.indicatorsService.setHintText(
          `Must be at least ${minLength} characters`
        );
        break;
      case strength == 21:
        this.indicatorsService.setHintText('Too weak');
        this.indicatorsService.setValidators(
          Colors.red,
          Colors.gray,
          Colors.gray
        );
        break;
      case strength == 22:
        this.indicatorsService.setHintText('Might be better');
        this.indicatorsService.setValidators(
          Colors.yellow,
          Colors.yellow,
          Colors.gray
        );
        break;
      case strength == 23:
        this.indicatorsService.setHintText('Really good password');
        this.indicatorsService.setValidators(
          Colors.green,
          Colors.green,
          Colors.green
        );
        break;
    }
  }

}
