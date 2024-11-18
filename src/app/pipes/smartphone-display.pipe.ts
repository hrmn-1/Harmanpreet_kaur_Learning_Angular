import { Pipe, PipeTransform } from '@angular/core';
import {smartPhone} from "../../shared/models/user";

@Pipe({
  name: 'smartphoneDisplay',
  standalone: true
})
export class SmartphoneDisplayPipe implements PipeTransform {

  transform(smartphone: smartPhone): string {
    return `${smartphone.model} in ${smartphone.color} color`;
  }

}
