import {Pipe, PipeTransform} from '@angular/core';



@Pipe({
  name: 'converterCurrency'
})

export class ConverterCurrencyPipe implements PipeTransform{
  transform(value: number, unit: string): any {
    if (value && !isNaN(value)) {
      if (unit === 'US') {
        const price = value / 420 ;
        return price.toFixed(3);
      } else if (unit === 'RU'){
        const price = value / 5.7;
        return price.toFixed(3);
      }
      else {
        return value;
      }
    }
    return;
  }
}
