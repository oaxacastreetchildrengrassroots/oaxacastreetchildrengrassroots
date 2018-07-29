import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { DonationpageComponent } from './donationpage/donationpage.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutpageComponent,
    DonationpageComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
