import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  nomePokemon: string | null = '';
  dadosPokemon: any;
  favorito: boolean = false;

  ngOnInit() {
    this.nomePokemon = this.route.snapshot.paramMap.get('name');
    if (this.nomePokemon) {
      this.apiService
        .getDadosPokemon(this.nomePokemon)
        .subscribe((pokemon: any) => {
          this.dadosPokemon = pokemon;
          this.apiService.setPokemonSelecionado(pokemon);
          if (this.getFavoritos().find((f: any) => f === pokemon.id)) {
            this.favorito = true;
          }
        });
    }
  }

  adiocionarFavorito() {
    let favoritosId = JSON.parse(localStorage.getItem('favoritos') || '[]');
    favoritosId.push(this.dadosPokemon.id);
    localStorage.setItem('favoritos', JSON.stringify(favoritosId));
  }

  getFavoritos() {
    return JSON.parse(localStorage.getItem('favoritos') || '[]');
  }

  removeFavorito() {
    let favoritos = this.getFavoritos();
    favoritos = favoritos.filter((f: any) => f !== this.dadosPokemon.id);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }

  mudarFavorito() {
    if (this.favorito) {
      this.removeFavorito();
    } else {
      this.adiocionarFavorito();
    }
    this.favorito = !this.favorito;
  }

  detalhesPokemon() {
    this.router.navigate(['/tabs/tab3']);
  }
}
