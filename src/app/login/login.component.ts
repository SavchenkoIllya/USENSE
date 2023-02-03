import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

// Colors for indicators
import { Colors } from './Colors.enum';

// RegExp rules
import { Symbols } from './Symbols';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  password = new FormControl('');

  //hints
  hintText: string = 'Your password strength meter';
  details: boolean = false;

  // Password indicators
  first: string = Colors.gray;
  second: string = Colors.gray;
  third: string = Colors.gray;

  checkPassword(password: FormControl): void {
    let passwordText: string = password.value;
    let passwordLength: number = password.value.length;

    // Password less than 8 chars condition
    if (passwordLength > 0 && passwordLength < 8) {
      this.first = this.second = this.third = Colors.red;
      this.hintText = 'Must be at least 8 characters';
    }

    //prevent typing unincluded characters
    if (Symbols.else.test(passwordText)) {
      let filtered = passwordText.replace(Symbols.else, '');
      password.setValue(filtered);
      this.details = true;
    }

    //reset styles if empty field
    if (passwordText === '') {
      this.first = this.second = this.third = Colors.gray;
      this.hintText = 'Check your password strength';
    }

    // Password more than 8 chars condition
    if (passwordLength >= 8) {
      //weak password conditions
      if (
        Symbols.letters.test(passwordText) ||
        Symbols.numbers.test(passwordText) ||
        Symbols.symbols.test(passwordText)
      ) {
        this.first = Colors.red;
        this.second = this.third = Colors.gray;
        this.hintText = 'Too weak';
      }

      //medium password conditions
      else if (
        Symbols.lettersNumbers.test(passwordText) ||
        Symbols.lettersSymbols.test(passwordText) ||
        Symbols.numbersSymbols.test(passwordText)
      ) {
        this.first = this.second = Colors.yellow;
        this.third = Colors.gray;
        this.hintText = 'Might be better';
      }

      //strong password conditions
      else if (Symbols.allAllowed.test(passwordText)) {
        this.first = this.second = this.third = Colors.green;
        this.hintText = 'Really good password';
      }
    }
  }
}
