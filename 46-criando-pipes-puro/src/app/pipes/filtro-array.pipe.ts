import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray',
})
export class FiltroArrayPipe implements PipeTransform {

  transform(value: string[], filtro: string) {
    return value.filter(item => item.toLocaleLowerCase().includes(filtro.toLocaleLowerCase()))
  }

}
