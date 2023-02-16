export class Symbols {

  //RegExp rules.

  static letters = new RegExp(/[a-zA-Z]/);
  static numbers = new RegExp(/[0-9]/);
  static symbols = new RegExp(/[!@#$%^&*()_+\-=~`\[\]{};':"\\|,.<>\/?]/);
  static allAllowed = new RegExp(/^[a-zA-Z0-9!@#$%^&*()_+\-=~`\[\]{};':"\\|,.<>\/?]+$/);

  //all that doesn't included in allAllowed
  static else = new RegExp(/[^a-zA-Z0-9!@#$%^&*()_+\-=~`[\]{};':"\\|,.<>/?]/g);
}
