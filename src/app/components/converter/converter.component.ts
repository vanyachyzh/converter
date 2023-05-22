import { Component, Input } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';
import { RatesSet } from 'src/types/rates-set';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent {
  @Input() currencies!: RatesSet;
  selectFrom = 'USD';
  selectTo = 'EUR';
  inputFrom: number | null = null;
  inputTo: number | null = null;

  constructor(private currencyService: CurrencyService) {}

  updateToAmount() {
    if (this.inputFrom !== null) {
      this.currencyService.getCurrency(this.selectFrom).subscribe((response) => {
        this.inputTo = this.inputFrom !== null ? +(this.inputFrom * response.conversion_rates[this.selectTo]).toFixed(4) : null;
      });
    } else {
      this.inputTo = null;
    }
  }

  updateFromAmount() {
    if (this.inputTo !== null) {
      this.currencyService.getCurrency(this.selectTo).subscribe((response) => {
        this.inputFrom = this.inputTo !== null ? +(this.inputTo * response.conversion_rates[this.selectFrom]).toFixed(4) : null;
      });
    } else {
      this.inputFrom = null;
    }
  }
}
