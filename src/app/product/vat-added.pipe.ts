import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  transform(value: number, args?: number): number {
    var vatPercantage:number = 18;
    if(args){
      vatPercantage = args[0];
    }
    return value + (value / 100 * vatPercantage) ;
  }

}
