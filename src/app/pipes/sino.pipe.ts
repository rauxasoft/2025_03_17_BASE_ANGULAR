import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sino'
})
export class SinoPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? "Sí" : "No";
  }

}

