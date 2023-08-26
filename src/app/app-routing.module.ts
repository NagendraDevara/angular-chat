import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { theme1 } from './themes/theme1.component';

const routes: Routes = [
  { path: 'resume', component: theme1 },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
