import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

import { Drink, OrderedRecipe, Ingredients, Recipe } from './types';
import { INGREDIENTS } from './mocks/ingredients';
import { RECIPES } from './mocks/recipes';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  orderedDrinks$ = new Subject<Drink[]>();
  orderedRecipes$ = new Subject<OrderedRecipe>();

  constructor() {}

  getIngredients(): Observable<Ingredients> {
    return of(INGREDIENTS);
  }

  getRecipes(): Observable<Recipe[]> {
    return of(RECIPES);
  }
}
