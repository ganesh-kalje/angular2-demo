import { Component } from '@angular/core';

import { HeaderComponent } from './header.component';

import { RecipeService } from './recipe/recipe.service';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  providers: [RecipeService],
})
export class AppComponent {
  title = 'rb works!';
}
