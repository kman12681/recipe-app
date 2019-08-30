import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [];

  index: number;

  constructor() {}

  addIngredient(item) {
    this.ingredients.push(item);
  }

  removeIngredient() {
    this.ingredients.splice(this.index, 1);
  }

  onSelected(i) {
    this.index = i;
  }

  onClear() {
    this.ingredients = [];
  }
}
