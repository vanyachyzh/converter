import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './services/currency.service';
import { RatesSet } from 'src/types/rates-set';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'converter';
  uahRates: RatesSet = {
    usd: 0,
    eur: 0,
    pln: 0
  };
  date: Date = new Date;

  constructor(
    private currencyService: CurrencyService,
  ) {}
  
  ngOnInit(): void {
    this.currencyService.getCurrency("UAH")
      .subscribe((response) => {
        console.log(response);
        this.uahRates = {
          usd: response.conversion_rates['USD'],
          eur: response.conversion_rates['EUR'],
          pln: response.conversion_rates['PLN'],
        };

        this.date = response.time_last_update_utc;
      })
  }
;
}
