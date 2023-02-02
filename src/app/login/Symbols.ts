export class Symbols {

  //RegExp rules.

  static letters = new RegExp(/^[a-zA-Z]+$/);
  static numbers = new RegExp(/^[0-9]+$/);
  static symbols = new RegExp(/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/);
  static lettersNumbers = new RegExp(/^[a-zA-Z0-9]+$/);
  static lettersSymbols = new RegExp(/^[a-zA-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/);
  static numbersSymbols = new RegExp(/^[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/);
  static all = new RegExp(/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/);
}
