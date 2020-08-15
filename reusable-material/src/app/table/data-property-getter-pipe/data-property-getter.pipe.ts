import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'dataPropertyGetter'
})
export class DataPropertyGetterPipe implements PipeTransform {

  transform(object: any, keyName: string, ...args: unknown[]): unknown {
    return object[keyName];
  }

}
