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

  // Password indicators
  first: string = Colors.gray;
  second: string = Colors.gray;
  third: string = Colors.gray;

  hintText: string = 'Check your password strength';

  checkPassword(password: FormControl): void {
    let passwordText = password.value;
    let passwordArr = passwordText.split('');

    //don't allow white spaces in the password
    if (passwordArr.includes(' ')) {
      let passwordFiltered = passwordArr
        .filter((item: string) => item !== ' ')
        .join('')
        .toString();
      return password.setValue(passwordFiltered);
    }

    //reset styles if empty field
    if (passwordText === '') {
      this.first = this.second = this.third = Colors.gray;
      this.hintText = 'Check your password strength';
    }

    // Password less than 8 chars condition
    if (passwordText.length > 0 && passwordText.length < 8) {
      this.first = this.second = this.third = Colors.red;
      this.hintText = 'Must be at least 8 characters';
    }

    // Password more than 8 chars condition
    if (passwordText.length >= 8) {
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
      else if (Symbols.all.test(passwordText)) {
        this.first = this.second = this.third = Colors.green;
        this.hintText = 'Really good password';
      }
    }
  }
}
