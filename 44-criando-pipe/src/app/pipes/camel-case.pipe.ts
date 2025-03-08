import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.split(' ')
    .map(this.capitalize)
    .join(' ')
  }

  private  capitalize(value: string): string {
    const firstLetter = value[0].toUpperCase()
    const rest = value.substring(1)
    return `${firstLetter}${rest}`
  }
}
