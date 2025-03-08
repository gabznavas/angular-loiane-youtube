import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArrayImpuro',
  pure: false
})
export class FiltroArrayImpuroPipe implements PipeTransform {
  transform(value: string[], filtro: string) {
    return value.filter(item => item.toLocaleLowerCase().includes(filtro.toLocaleLowerCase()))
  }
}
