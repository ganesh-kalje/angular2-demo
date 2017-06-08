import {Ingredient} from '../ingredient';

export class ShoppingListService {
  private items:Ingredient[] = [];
  constructor() { }

  getItem() {
  	return this.items;
  }

  addItem(item:Ingredient[]) {
  		//Array.prototype.push.apply(this.items. item);
  }

}
	