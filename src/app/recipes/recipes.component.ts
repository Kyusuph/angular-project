import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipeService } from '../services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  recipeToDetail: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  onShowRecipeDetails(item: Recipe) {
    this.recipeToDetail = item;
  }

}
