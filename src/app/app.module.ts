import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PentHouseComponent } from './penthouse/penthouse.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlatListComponent } from './flats/flat-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsListComponent } from './products/products-list.component';
import { StarComponent } from './star/star.component';
import { ProductEditComponent } from './products/product-edit.component';
import { C1Component } from './c1/c1.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CartComponent } from './cart/cart.component';
import { TransformDataPipe } from './transform-data.pipe';
import { RepeatPipe } from './repeat.pipe';
import { ProductService } from 'shared/product.service';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './navbar/navbar.component';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailComponent } from './events/event-detail.component';
import { httpClientInMemBackendServiceFactory, HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryEventDbService } from 'src/app/inmeoryeventdbservice';
import { ProductAddComponent } from './products/product-add.component';
import { CreateTrusteeComponent } from './trustees/create-trustee.component';
import { EditTrusteeComponent } from './trustees/edit-trustee.component';
import { HeaderComponent } from './trustees/header.component';
import { SidebarComponent } from './trustees/sidebar.component';
import { TrusteeListComponent } from './trustees/trustee-list.component';
import { ViewTrusteeComponent } from './trustees/view-trustee.component';
import { EmojiDirective } from './emoji.directive';
import { EmployeeComponent } from './employee/employee.component';
import { GetValidatorDirective } from './employee/get-validator.directive';
import { StudentAddComponent } from './student/student-add.component';
import { EmployeeArrayComponent } from './employee/employee-array.component';
import { HomeComponent } from './home/home.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmployeeListComponent } from './employee/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeLeaveComponent } from './employee/employee-leave.component';
import { EmployeeSuggestionsComponent } from './employee/employee-suggestions.component';
import { GreetComponent } from './greet/greet.component';


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
    RepeatPipe,
    NavBarComponent,
    EventsListComponent,
    EventDetailComponent,
    ProductAddComponent,
    CreateTrusteeComponent,
    EditTrusteeComponent,
    HeaderComponent,
    SidebarComponent,
    TrusteeListComponent,
    ViewTrusteeComponent,
    EmojiDirective,
    EmployeeComponent,
    GetValidatorDirective,
    StudentAddComponent,
    EmployeeArrayComponent,
    HomeComponent,
    DashBoardComponent,
    AboutUsComponent,
    PagenotfoundComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeLeaveComponent,
    EmployeeSuggestionsComponent,
    GreetComponent


  ],
  //imports mention the names of the modules on which my appmodule is dependent
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryEventDbService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
