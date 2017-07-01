import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
      new Recipe('Easy Fava Bean and Carrot Salad With Ricotta Recipe',
          'This quick and easy salad takes some of spring`s best produce—bright green fava beans and tender young' +
          ' carrots—and does just the right thing to them, which is very little. With a simple vinaigrette, some' +
          ' thinly sliced shallots, and a generous serving of fresh ricotta cheese to add richness, it`s all they' +
          ' need to taste their best.', 'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-' +
          'ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
