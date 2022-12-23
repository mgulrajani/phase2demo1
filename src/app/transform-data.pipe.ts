import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformData'
})
export class TransformDataPipe implements PipeTransform {

  transform(value: string, char1: string): string {
    const strings=value.split(' ');
    console.log(strings);
    const joinedString = strings.join('-')
     return joinedString;
  }

}
