import { Component, OnInit } from '@angular/core';

import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  drinkDiscount = {
    from: 100000,
    discount: 0.2
  };
  order = {
    drinks: [],
    recipes: []
  };
  total = {
    order: 0,
    discountedOrder: 0,
    drinks: 0,
    recipes: 0
  };

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.restaurantService.orderedDrinks$.subscribe((drinks) => {
      this.order.drinks = [...this.order.drinks, ...drinks];
      const drinkAmount = drinks
        .map(({ count, price }) => count * price)
        .reduce((total, amount) => {
          total += amount;

          return total;
        }, 0);
      this.total.drinks += drinkAmount;
      this.setTotalOrder();
    });
    this.restaurantService.orderedRecipes$.subscribe((recipe) => {
      this.order.recipes = [...this.order.recipes, recipe];
      const recipeAmount = recipe.ingredients
        .filter(({ isSelected }) => isSelected)
        .reduce((amount, { price }) => {
          amount += price;

          return amount;
        }, 0);
      this.total.recipes += recipeAmount;
      this.setTotalOrder();
    });
  }

  private setTotalOrder() {
    this.total.order = this.total.drinks + this.total.recipes;
    if (this.total.drinks >= this.drinkDiscount.from) {
      this.total.discountedOrder =
        this.total.order * (1 - this.drinkDiscount.discount);
    }
  }
}
