import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Important!
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  declarations: [AppComponent, CarouselComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
