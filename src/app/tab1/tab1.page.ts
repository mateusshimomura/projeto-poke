import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {
  constructor(private apiService: ApiService, private router: Router) {}
  listaPokemons: any;

  ngOnInit() {
    this.apiService.getLista(20, 0).subscribe((lista: any) => {
      this.listaPokemons = lista.results;
    });
  }

  escolherPokemon(nome: string) {
    this.router.navigate(['/tabs/tab2', nome]);
  }
}
