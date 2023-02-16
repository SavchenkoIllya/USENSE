import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Colors } from '../assets/Colors';

@Injectable({
  providedIn: 'root',
})
export class IndicatorsService {
  //hints
  public hintText = new BehaviorSubject<string>('Your password strength meter');
  public details = new BehaviorSubject<boolean>(false);
  //validators
  public validators = new BehaviorSubject<string[]>([
    Colors.gray,
    Colors.gray,
    Colors.gray,
  ]);

  setHintText(value: string) {
    this.hintText.next(value);
  }
  openDetails() {
    this.details.next(true);
  }

  //set validators colors
  setValidators(firstColor: string, secondColor: string, thirdColor: string) {
    this.validators.next([firstColor, secondColor, thirdColor]);
  }
}
