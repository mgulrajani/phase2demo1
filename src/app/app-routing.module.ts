import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EventDetailComponent } from './events/event-detail.component';
import { ProductAddComponent } from './products/product-add.component';

const routes: Routes = [
  {path:'events/:id',component:EventDetailComponent},
{path:'addProduct',component:ProductAddComponent},
{path:'',pathMatch:'full' ,component:AppComponent}]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
