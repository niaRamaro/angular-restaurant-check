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
