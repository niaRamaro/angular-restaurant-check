import { Component, OnInit, Input } from '@angular/core';

import { Drink } from 'src/app/types';

@Component({
  selector: 'app-ordered-drink-item',
  templateUrl: './ordered-drink-item.component.html',
  styleUrls: ['./ordered-drink-item.component.scss']
})
export class OrderedDrinkItemComponent implements OnInit {
  @Input() drink: Drink;

  total: number;

  constructor() {}

  ngOnInit(): void {
    this.total = this.drink.count * this.drink.price;
  }
}
