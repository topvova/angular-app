import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
      new Recipe('Easy Fava Bean and Carrot Salad With Ricotta Recipe',
          'This quick and easy salad takes some of spring`s best produce—bright green fava beans and tender young' +
          ' carrots—and does just the right thing to them, which is very little. With a simple vinaigrette, some' +
          ' thinly sliced shallots, and a generous serving of fresh ricotta cheese to add richness, it`s all they' +
          ' need to taste their best.', 'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-' +
          'ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg'),
      new Recipe('30-Minute Pressure Cooker Chicken With Chickpeas, Tomatoes, and Chorizo', 'The secret to this recipe' +
          ' is the addition of canned fire-roasted tomatoes, which add lots of flavor with hardly any effort. ' +
          'We bolster the dish`s savory side with Spanish chorizo and smoked paprika and add in chicken and canned' +
          ' chickpeas for a dinner that`s as hearty as it is easy.', 'http://www.seriouseats.com/images/2015/09/' +
          '20150914-pressure-cooker-recipes-roundup-09.jpg')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}
