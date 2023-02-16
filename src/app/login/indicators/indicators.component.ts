import { IndicatorsService } from './../features/validation.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.scss'],
})
export class IndicatorsComponent {
  constructor(public indicatorsService: IndicatorsService) {}
}
