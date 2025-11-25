import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"item/home", component:HomeComponent},
  {path:"item", redirectTo:"item/home", pathMatch:"full"},
  {path:"", redirectTo:"item/home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
