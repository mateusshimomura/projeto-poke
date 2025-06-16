import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

  setPokemonSelecionado(pokemon: any) {
    this.pokemonSelecionado = pokemon;
  }

  getLista(limit: number, offset: number) {
    return this.http.get(`${this.url}?offset=${offset}&limit=${limit}`);
  }

  getDadosPokemon(nome: string) {
    return this.http.get(`${this.url}/${nome}`);
    // this.http.get(`${this.url}/${nome}`).subscribe((p: any) => {
    //   this.pokemonSelecionado = p;
    //   return p;
    // });
  }
}
