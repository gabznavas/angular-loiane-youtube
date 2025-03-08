import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-pipes',
  templateUrl: './exemplo-pipes.component.html',
  styleUrl: './exemplo-pipes.component.scss'
})
export class ExemploPipesComponent {
  book = {
    title: 'learning JavaSCript Data Sctructures and Algorithms 2nd...',
    rating: 4.54321,
    pageCount: 314,
    price: 44.99,
    launch: new Date(2016, 5,23),
    url: 'http://a.co/glqjpRP'
  }
}
