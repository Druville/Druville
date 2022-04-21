import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WinesComponent } from './wines/wines.component';
import { WineDetailComponent } from './components/wine-detail/wine-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WinesComponent,
    WineDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
