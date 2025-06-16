import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getLista(limit: number, offset: number) {
    return this.http.get(`${this.url}?offset=${offset}&limit=${limit}`);
  }

  getDadosPokemon(nome: string) {
    return this.http.get(`${this.url}/${nome}`);
  }
}
