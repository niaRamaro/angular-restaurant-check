import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { INGREDIENTS } from './mocks/ingredients';
import { RECIPES } from './mocks/recipes';

export interface Ingredients {
  [key: string]: {
    name: string;
    value: string;
  }[];
}

export interface Recipe {
  name: string;
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  constructor() {}

  getIngredients(): Observable<Ingredients> {
    return of(INGREDIENTS);
  }

  getRecipes(): Observable<Recipe[]> {
    return of(RECIPES);
  }
}
