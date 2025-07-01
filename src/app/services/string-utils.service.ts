import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StringUtilsService {
  constructor() {}

  primeiraLetraMaiuscula(str: String) {
    return !str ? str : str[0].toUpperCase() + str.slice(1);
  }
}
