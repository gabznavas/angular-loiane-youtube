import { NgModule } from "@angular/core";
import { CursosComponent } from "./cursos.component";
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CursoNaoEncontradoComponent } from "./curso-nao-encontrado/curso-nao-encontrado.component";
import { CursosService } from "./services/cursos.service";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CursosRoutingModule } from "./cursos-routing.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CursosRoutingModule,
  ],
  exports: [],
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent,
  ],
  providers: [
    CursosService
  ],
  
})
export class CursosModule {}