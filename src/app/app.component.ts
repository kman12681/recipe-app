import { Component } from '@angular/core';
import { Ingredient } from './shared/ingredient.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-app';

  ingredients: Ingredient[];

  feature: string;

  onNavigate(event: string) {
    this.feature = event;
  }

}
