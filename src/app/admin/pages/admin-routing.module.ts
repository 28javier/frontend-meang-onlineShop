import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path:'', 
    component: AdminComponent,
    children:[
      {path:'admin',
      loadChildren: ()=> import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {path:'users',
      loadChildren: ()=> import('./users/users.module').then(m => m.UsersModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
