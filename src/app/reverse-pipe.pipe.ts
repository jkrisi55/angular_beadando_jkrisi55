import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'reversePipe'/*, pure: false*/})
export class ReversePipePipe implements PipeTransform {

  transform(value: string): string {
    let value_lowercase = value.toLowerCase();
    let value_split = value_lowercase.split("");
    let value_reversed = value_split.reverse();
    value_reversed[0] = value_reversed[0].toLocaleUpperCase();
    let value_out = value_reversed.join("");
    return value_out;
  }
}
