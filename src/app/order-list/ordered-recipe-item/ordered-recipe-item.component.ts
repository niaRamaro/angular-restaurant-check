import { Component, OnInit, Input } from '@angular/core';

import { OrderedRecipe } from 'src/app/types';

@Component({
  selector: 'app-ordered-recipe-item',
  templateUrl: './ordered-recipe-item.component.html',
  styleUrls: ['./ordered-recipe-item.component.scss']
})
export class OrderedRecipeItemComponent implements OnInit {
  @Input() orderedRecipe: OrderedRecipe;

  defaultAmount: number;
  orderAmount: number;

  constructor() {}

  ngOnInit(): void {
    this.defaultAmount = this.orderedRecipe.ingredients.reduce(
      (amount, { price }) => {
        amount += price;
        return amount;
      },
      0
    );
    this.orderAmount = this.orderedRecipe.ingredients
      .filter(({ isSelected }) => isSelected)
      .reduce((amount, { price }) => {
        amount += price;

        return amount;
      }, 0);
  }
}
