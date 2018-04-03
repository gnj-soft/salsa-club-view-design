import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstCapitalLetter'
})
export class FirstCapitalLetterPipe implements PipeTransform {

  values: string[];
  returnValue = "";
  transform(value: string, args: any[]): any {
    if (value === null) {
      return 'Not assigned';
    }
    this.values = value.split(' ');
    for (let val of this.values) {
      this.returnValue = this.returnValue + " " + val.charAt(0).toUpperCase() + val.slice(1);
    }
    return this.returnValue;
  }
}
