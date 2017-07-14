import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form') shopListForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shopListService: ShoppingListService) {}

  ngOnInit() {
      this.subscription = this.shopListService.startedEditing
          .subscribe(
              (index: number) => {
                  this.editMode = true;
                  this.editedItemIndex = index;
                  this.editedItem = this.shopListService.getIngredient(index);
                  this.shopListForm.setValue({
                      name: this.editedItem.name,
                      amount: this.editedItem.amount
                  });
              }
          );
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
        this.shopListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
        this.shopListService.addIngredient(newIngredient);
    }
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }
}
