import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemploPipeAsyncComponent } from './exemplo-pipe-async/exemplo-pipe-async.component';

@NgModule({
  declarations: [
    AppComponent,
    ExemploPipeAsyncComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
