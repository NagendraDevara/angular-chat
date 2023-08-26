import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { theme1 } from './themes/theme1.component';
import { ChatComponentComponent } from './chat-component/chat-component.component';

const routes: Routes = [
  {path:'',component:ChatComponentComponent},
  { path: 'resume', component: theme1 },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
