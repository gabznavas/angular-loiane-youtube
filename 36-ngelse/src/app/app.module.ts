import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivaTestarComponent } from './diretiva-testar/diretiva-testar.component';
import { NgElseDirective } from './directives/ng-else.directive';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaTestarComponent,
    NgElseDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
