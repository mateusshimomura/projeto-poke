import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page implements OnInit {
  constructor(private apiService: ApiService) {}

  listaDeFotos: any[] = [];
  pokemon: any;

  ngOnInit() {}

  ionViewWillEnter() {
    this.apiService.getPokemonSelecionado().subscribe((pokemon: any) => {
      this.pokemon = pokemon;
      this.listaDeFotos = Object.values(pokemon.sprites)
        .filter((img: any) => img !== null)
        .slice(0, 4);
    });
  }
}
