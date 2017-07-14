import {Component, OnDestroy, OnInit} from '@angular/core';
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
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;

  constructor(private shopListService: ShoppingListService) {}

  ngOnInit() {
      this.subscription = this.shopListService.startedEditing
          .subscribe(
              (index: number) => {
                  this.editMode = true;
                  this.editedItemIndex = index;
              }
          );
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);

    this.shopListService.addIngredient(newIngredient);
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }
}
