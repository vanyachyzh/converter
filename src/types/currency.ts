export interface Currency {
  conversion_rates: {[key:string]: number},
  time_last_update_utc: Date
}
