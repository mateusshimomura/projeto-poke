import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { StringUtilsService } from '../services/string-utils.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page implements OnInit {
  constructor(
    private apiService: ApiService,
    public stringUtils: StringUtilsService,
    private router: Router,
  ) {}

  listaDeFotos: any[] = [];
  pokemon: any;

  ngOnInit() {}

  getPokemonTypes() {
    let types = this.pokemon.types.map((t: any) => t.type.name).join(', ');
    return types;
  }

  ionViewWillEnter() {
    this.pokemon = this.apiService.getPokemonSelecionado();
    if(!this.pokemon) {
      this.router.navigate(['/tabs/tab1']);
      return;
    }
    this.listaDeFotos = Object.values(this.pokemon.sprites)
      .filter((img: any) => img !== null)
      .slice(0, 4);
  }
}
