import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormCompComponent } from './form-comp/form-comp.component';
import { FormsModule } from '@angular/forms';
import { MessagecompComponent } from './messagecomp/messagecomp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormCompComponent,
    MessagecompComponent
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
