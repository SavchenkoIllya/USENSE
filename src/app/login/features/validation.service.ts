import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Colors } from '../assets/Colors';

@Injectable({
  providedIn: 'root',
})
export class IndicatorsService {
  public hintText = new BehaviorSubject<string>('Your password strength meter');
  public details = new BehaviorSubject<boolean>(false);
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

  setValidators(firstColor: string, secondColor: string, thirdColor: string) {
    this.validators.next([firstColor, secondColor, thirdColor]);
  }
}
