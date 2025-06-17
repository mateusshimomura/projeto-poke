import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {
  constructor(private apiService: ApiService, private router: Router) {}
  listaPokemons: any = [];

  ngOnInit() {
    this.getLista(20, 0);
  }

  escolherPokemon(nome: string) {
    this.router.navigate(['/tabs/tab2', nome]);
  }

  getLista(limit: number, offset: number, event?: InfiniteScrollCustomEvent) {
    this.apiService.getLista(limit, offset).subscribe((lista: any) => {
      this.listaPokemons = [...this.listaPokemons, ...lista.results];
      if (event) {
        event.target.complete();
      }
    });
  }

  onIonInfinite(event: InfiniteScrollCustomEvent) {
    this.getLista(20, this.listaPokemons.length, event);
  }
}
