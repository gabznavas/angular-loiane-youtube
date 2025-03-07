import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.scss'
})
export class NgForComponent {
  cursos: string[] = ['Angular 16', 'Spring boot!', 'Gnu/Linux']
}
