import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DrinkFormComponent } from './menu-form/drink-form/drink-form.component';
import { MenuFormComponent } from './menu-form/menu-form.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderedDrinkItemComponent } from './order-list/ordered-drink-item/ordered-drink-item.component';
import { OrderedRecipeItemComponent } from './order-list/ordered-recipe-item/ordered-recipe-item.component';
import { RecipeFormComponent } from './menu-form/recipe-form/recipe-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DrinkFormComponent,
    MenuFormComponent,
    OrderListComponent,
    OrderedDrinkItemComponent,
    OrderedRecipeItemComponent,
    RecipeFormComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
