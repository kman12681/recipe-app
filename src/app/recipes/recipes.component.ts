import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ViewChild
} from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor() {}

  @Input() recipes: Recipe;

  ngOnInit() {}

  onSelectedRecipe(recipe) {
    this.selectedRecipe = recipe;
  }
}
