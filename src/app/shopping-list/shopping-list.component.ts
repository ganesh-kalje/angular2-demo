import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../ingredient';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
	item : Ingredient[]
  constructor(private sls:ShoppingListService) { }

  ngOnInit() {
  	this.item = this.sls.getItem();
  }

}
