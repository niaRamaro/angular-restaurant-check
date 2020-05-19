import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

import { INGREDIENTS } from './mocks/ingredients';
import { RECIPES } from './mocks/recipes';

export interface Drink {
  name: string;
  count: number;
  price: number;
}

export interface Ingredients {
  [key: string]: {
    name: string;
    value: string;
  }[];
}

export interface OrderedRecipe {
  recipe: Recipe;
  ingredients: ({
    price: number;
    isSelected: boolean;
  } & Ingredients)[];
}

export interface Recipe {
  name: string;
  value: string;
}

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
