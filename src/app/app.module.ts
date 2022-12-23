import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PentHouseComponent } from './penthouse/penthouse.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlatListComponent } from './flats/flat-list.component';
import { FormsModule } from '@angular/forms';
import { ProductsListComponent } from './products/products-list.component';
import { StarComponent } from './star/star.component';
import { ProductEditComponent } from './products/product-edit.component';
import { C1Component } from './c1/c1.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CartComponent } from './cart/cart.component';
import { TransformDataPipe } from './transform-data.pipe';
import { RepeatPipe } from './repeat.pipe';


@NgModule({

  //declarations array will have the
  // declarations of the components or pipes or services declared in this class

  declarations: [
    AppComponent,
    PentHouseComponent,
    WelcomeComponent,
    FlatListComponent,
    ProductsListComponent,
    StarComponent,
    ProductEditComponent,
    C1Component,
    AComponent,
    BComponent,
    CartComponent,
    TransformDataPipe,
    RepeatPipe

  ],
  //imports mention the names of the modules on which my appmodule is dependent
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
