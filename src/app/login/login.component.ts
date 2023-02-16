import { IndicatorsService } from './features/validation.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
  constructor(public indicatorsService: IndicatorsService){}
}
