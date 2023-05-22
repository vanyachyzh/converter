import { Component, Input } from '@angular/core';
import { RatesSet } from 'src/types/rates-set';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() rates!: RatesSet;
  @Input() date!: Date;
}
