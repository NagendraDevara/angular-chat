import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { theme1 } from './themes/theme1.component';
import { ChatComponentComponent } from './chat-component/chat-component.component';

@NgModule({
  declarations: [
    AppComponent,
    theme1,
    ChatComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
