import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/component/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddItemComponent } from './components/add-item/add-item.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'}, 
  {path:'home', loadChildren:()=>import('./core/modules/home/home.module').then((m)=>m.HomeModule)},
  {path:'add',component:AddItemComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
