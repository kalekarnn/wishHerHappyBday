import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CakeComponent } from './cake/cake.component';
import { HappyBdayComponent } from './happy-bday/happy-bday.component';
import { LoadingComponent } from './loading/loading.component';
import { CountdownComponent } from './countdown/countdown.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    CakeComponent,
    HappyBdayComponent,
    LoadingComponent,
    CountdownComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
