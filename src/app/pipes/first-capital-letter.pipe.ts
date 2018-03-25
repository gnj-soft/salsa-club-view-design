import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstCapitalLetter'
})
export class FirstCapitalLetterPipe implements PipeTransform {

  transform(value: string, args: any[]): any {
    if (value === null) return 'Not assigned';
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
