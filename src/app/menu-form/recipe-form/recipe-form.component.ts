import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatSelectionListChange,
  MatSelectionList
} from '@angular/material/list';

import { Ingredients, Recipe, OrderedRecipe } from '../../types';
import { RestaurantService } from '../../restaurant.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {
  @ViewChild('ingredientsSelectionList')
  ingredientsSelectionList: MatSelectionList;

  hasInvalidPrice: boolean;
  ingredients: Ingredients;
  ingredientsForm;
  recipes: Recipe[];
  selectedRecipe: string;

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.restaurantService
      .getRecipes()
      .subscribe((recipes) => (this.recipes = recipes));
    this.restaurantService
      .getIngredients()
      .subscribe((ingredients) => (this.ingredients = ingredients));
  }

  changeRecipe() {
    const ingredients = this.ingredients[this.selectedRecipe];
    this.ingredientsForm = ingredients.map((ingredient) => ({
      ...ingredient,
      isSelected: true,
      price: 1
    }));
  }

  saveRecipe() {
    const newRecipe: OrderedRecipe = {
      recipe: this.recipes.find(({ value }) => value === this.selectedRecipe),
      ingredients: this.ingredientsForm
    };
    this.restaurantService.orderedRecipes$.next(newRecipe);
    this.resetForm();
  }

  toggleIngredient({ option }: MatSelectionListChange) {
    this.ingredientsForm.forEach((ingredient) => {
      if (ingredient.value === option.value) {
        ingredient.isSelected = option.selected;
      }
    });
  }

  validatePrice() {
    this.hasInvalidPrice = this.ingredientsForm.some(({ price }) => price <= 0);
  }

  private resetForm() {
    this.selectedRecipe = '';
    this.ingredientsForm = [];
  }
}
