import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SavebuttonComponent } from './savebutton/savebutton.component';
import { PagesummaryComponent } from './pagesummary/pagesummary.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SavebuttonComponent,
    PagesummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
