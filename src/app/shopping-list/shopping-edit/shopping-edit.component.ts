import {
  Component,
  EventEmitter,
  Output,
  ElementRef,
  ViewChild
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  // accesses the template reference variable and sets to elementRef variables
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @Output() ingredientRemoved = new EventEmitter<void>();
  @Output() ingredientsCleared = new EventEmitter<void>();

  // uses values from input fields(now stored in elementRef variables) as arguments for new Ingredient object
  onAddItem() {
    const newIngredient = new Ingredient(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value
    );
    this.ingredientAdded.emit(newIngredient);
  }

  onRemoveItem() {
    this.ingredientRemoved.emit();
  }

  onClear() {
    this.ingredientsCleared.emit();
  }

  constructor() {}
}
