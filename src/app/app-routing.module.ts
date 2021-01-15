import { UserComponent } from './user/user.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './admin/edit/edit.component';

import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { FormsModule} 

const routes: Routes = [
  {
    path:'', redirectTo:'/login',pathMatch:'full'
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'admin', component: AdminComponent
  },
  // {
  //   path:'user', component: UserComponent
  // },
  {
    path:"add/:loanNumber", component: AddComponent
  },
  {
    path:'edit/:loanNumber', component: EditComponent
  },
  {
    path:'user', component: UserComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
