import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
      new Recipe('Easy Fava Bean and Carrot Salad With Ricotta Recipe',
          'This quick and easy salad takes some of spring`s best produce—bright green fava beans and tender young' +
          ' carrots—and does just the right thing to them, which is very little. With a simple vinaigrette, some' +
          ' thinly sliced shallots, and a generous serving of fresh ricotta cheese to add richness, it`s all they' +
          ' need to taste their best.',
          'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-' +
          'ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg',
          [
              new Ingredient('Beans', 10),
              new Ingredient('Carrot', 5),
              new Ingredient('Ricotta cheese', 2)
          ]),
      new Recipe('30-Minute Pressure Cooker Chicken With Chickpeas, Tomatoes, and Chorizo',
          'The secret to this recipe is the addition of canned fire-roasted tomatoes, which add lots of flavor with hardly any effort. ' +
          'We bolster the dish`s savory side with Spanish chorizo and smoked paprika and add in chicken and canned' +
          ' chickpeas for a dinner that`s as hearty as it is easy.',
          'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
          [
              new Ingredient('Chicken', 1),
              new Ingredient('Chickpeas', 1),
              new Ingredient('Tomatoes', 6),
              new Ingredient('Chorizo', 1)
          ])
    ];

    constructor(private shopListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shopListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice())
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice())
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice())
    }
}
