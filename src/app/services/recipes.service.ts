import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';

import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { AddIngredients } from '../shopping-list/store/shopping-list.actions';
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';

@Injectable({providedIn: 'root'})
export class RecipeService {
  updateRecipes = new Subject<Recipe[]>();
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'A Pizza',
  //     'This is a vegetable pizza',
  //     'https://chocolatecoveredkatie.com/wp-content/uploads/2020/02/The-Best-Vegan-Pizza-Recipe-500x500.jpg',
  //     [
  //       new Ingredient('Spinach', 7),
  //       new Ingredient('Potatoes', 5),
  //       new Ingredient('Eggs', 3),
  //     ]),
  //   new Recipe(
  //     'A Bugger',
  //     'This is a bugger',
  //     'https://previews.123rf.com/images/luizrocha/luizrocha1602/luizrocha160200666/51638539-buger.jpg',
  //     [
  //       new Ingredient('Eggs', 5),
  //       new Ingredient('chicken Meat', 1),
  //       new Ingredient('Bread', 6)
  //     ])
  // ];

  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService, private store: Store<fromShoppingList.AppState>) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.updateRecipes.next(this.recipes.slice());
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
    this.updateRecipes.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.updateRecipes.next(this.recipes.slice());
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.updateRecipes.next(this.recipes.slice());
    return this.recipes.length - 1;
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.store.dispatch(new AddIngredients({ingredients}))
    // this.slService.addIngredients(ingredients);
  }
}
