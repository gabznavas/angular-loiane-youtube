import { NgModule } from '@angular/core';
import { CursosComponent } from './cursos.component';
import { CursosService } from './cursos.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CursosComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CursosComponent
  ],
})
export class CursosModule { }
