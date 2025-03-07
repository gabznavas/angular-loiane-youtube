import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FundoAmareloDirective } from './directives/fundo-amarelo.directive';
import { DiretivaTestarComponent } from './diretiva-testar/diretiva-testar.component';
import { FundoVermelhoDirective } from './directives/fundo-vermelho.directive';

@NgModule({
  declarations: [
    AppComponent,
    FundoAmareloDirective,
    DiretivaTestarComponent,
    FundoVermelhoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
