import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmpComponent } from './emp/emp.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'emp', component: EmpComponent},
  { path: 'about', component: AboutComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
