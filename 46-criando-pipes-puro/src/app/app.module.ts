import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemploPipesComponent } from './exemplo-pipes/exemplo-pipes.component';
import { FiltroArrayPipe } from './pipes/filtro-array.pipe';
import { FormsModule } from '@angular/forms';
import { FiltroArrayImpuroPipe } from './pipes/filtro-array-impuro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExemploPipesComponent,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
