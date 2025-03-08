import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-exemplo-pipe-async',
  templateUrl: './exemplo-pipe-async.component.html',
  styleUrl: './exemplo-pipe-async.component.scss'
})
export class ExemploPipeAsyncComponent {
  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello world!')
    }, 2000)
  })

  valorAsync2 = interval(2000).pipe(
    map(() => 'Valor assíncrono 2')
  );
}
