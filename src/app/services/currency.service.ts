import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Currency } from 'src/types/currency';

const API_URL = 'https://v6.exchangerate-api.com/v6/d830031915e98e4f358a90a3/latest/';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  constructor(
    private http: HttpClient,
  ) { }

  getCurrency(from: string) {
    return this.http.get<Currency>(API_URL + from);
  }
}
