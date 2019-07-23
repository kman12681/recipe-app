import { Component, OnInit, Input, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Grilled Shrimp Salad',
      'Fresh from the sea',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'
    ),
    new Recipe(
      'Lasagna',
      'The most delicious casserole straight from your Grandma\'s kitchen',
      'https://upload.wikimedia.org/wikipedia/commons/f/fe/Lasagna_with_salad%2C_May_2011.jpg'
    )
  ];

  constructor() {}

  onClick(recipe) {
    this.selectedRecipe.emit(recipe);
  }

  ngOnInit() {}
}
