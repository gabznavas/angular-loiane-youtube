import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivaTestarComponent } from './diretiva-testar/diretiva-testar.component';
import { HighlightMouseDirective } from './directives/highlight-mouse.directive';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaTestarComponent,
    HighlightMouseDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
