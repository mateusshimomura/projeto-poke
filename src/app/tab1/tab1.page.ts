import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { StringUtilsService } from '../services/string-utils.service';
import { forkJoin, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {
  constructor(
    private apiService: ApiService,
    private router: Router,
    public stringUtils: StringUtilsService
  ) {}
  listaPokemons: any = [];
  isLoading: boolean = false;

  ngOnInit() {
    this.getLista(20, 0);
  }

  escolherPokemon(nome: string) {
    this.router.navigate(['/tabs/tab2', nome]);
  }

  getLista(limit: number, offset: number, event?: InfiniteScrollCustomEvent) {
    this.isLoading = true;
    this.apiService
      .getLista(limit, offset)
      .pipe(
        switchMap((response: any) => {
          const lista = response.results.map((pokemon: any) =>
            this.apiService.getDadosPokemon(pokemon.name).pipe(
              map((p: any) => ({
                name: p.name,
                image: p.sprites.other.dream_world.front_default,
              }))
            )
          );
          return forkJoin(lista);
        })
      )
      .subscribe((pokemons: any) => {
        this.listaPokemons = [...this.listaPokemons, ...pokemons];
        this.isLoading = false;
        if (event) event.target.complete();
      });
  }

  onIonInfinite(event: InfiniteScrollCustomEvent) {
    if (!this.isLoading) this.getLista(20, this.listaPokemons.length, event);
  }
}
