import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeLeaveComponent } from './employee/employee-leave.component';
import { EmployeeListComponent } from './employee/employee-list.component';
import { EmployeeSuggestionsComponent } from './employee/employee-suggestions.component';
import { EventDetailComponent } from './events/event-detail.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductAddComponent } from './products/product-add.component';
import { ProductsListComponent } from './products/products-list.component';
import { StudentAddComponent } from './student/student-add.component';
import { CreateTrusteeComponent } from './trustees/create-trustee.component';
import { EditTrusteeComponent } from './trustees/edit-trustee.component';
import { TrusteeListComponent } from './trustees/trustee-list.component';
import { ViewTrusteeComponent } from './trustees/view-trustee.component';

//created  a Routes array
//Routes
//[ { path , component},
//{  path , component , } ]
/* const routes: Routes = [
  {
    path: '',
    component: TrusteeListComponent
  },
  {
    path: 'trustees/:id/view',
    component: ViewTrusteeComponent
  },
  {
    path: 'trustees/:id/edit',
    component: EditTrusteeComponent
  },
  {
    path: 'trustees/new',
    component: CreateTrusteeComponent
  },
  {
    path: '**',
    component: TrusteeListComponent
  }
]; *//*
  {path:'events/:id',component:EventDetailComponent},
  {path:'addProduct',component:ProductAddComponent},
  {path:'',pathMatch:'full' ,component:AppComponent}]


*/
const routes:Routes=[

  {

path:'',component:HomeComponent,pathMatch:'full',

},
{
  path:'about-us',component:AboutUsComponent

},
{
path:'student',component:StudentAddComponent
},
{path:'emps',component:EmployeeListComponent,
children:[
  {path:'detail/:id',component:EmployeeDetailComponent},
  {path:'leaves',component:EmployeeLeaveComponent},
  {path:'suggestions',component:EmployeeSuggestionsComponent}

]},
{path:'products',component:ProductsListComponent,
children:[{path:'addProduct',component:ProductAddComponent},]},
{path:'**',component:PagenotfoundComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
