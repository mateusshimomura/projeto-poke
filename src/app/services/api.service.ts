import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon';
  private pokemonSelecionado: any;
  constructor(private http: HttpClient) {}

  getPokemonSelecionado() {
    return this.pokemonSelecionado;
  }

  getLista(limit: number, offset: number) {
    return this.http.get(`${this.url}?offset=${offset}&limit=${limit}`);
  }

  getDadosPokemon(nome: string) {
    this.pokemonSelecionado = this.http.get(`${this.url}/${nome}`);
    return this.pokemonSelecionado;
  }
}
