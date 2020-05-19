import { Component, OnInit } from '@angular/core';

import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  order = {
    drinks: [],
    recipes: []
  };

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.restaurantService.orderedDrinks$.subscribe(
      (drink) => (this.order.drinks = [...this.order.drinks, ...drink])
    );
    this.restaurantService.orderedRecipes$.subscribe(
      (recipe) => (this.order.recipes = [...this.order.recipes, recipe])
    );
  }
}
