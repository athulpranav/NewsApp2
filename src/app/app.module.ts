import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { ViewallnewsComponent } from './viewallnews/viewallnews.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

const myroutes=[{
  path:"",component:NewsComponent},
  {path:"view",component:ViewallnewsComponent 
}]

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    ViewallnewsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
RouterModule.forRoot(myroutes),
HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
