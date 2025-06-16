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

  ngOnInit() {
    this.nomePokemon = this.route.snapshot.paramMap.get('name');
    if (this.nomePokemon) {
      this.apiService
        .getDadosPokemon(this.nomePokemon)
        .subscribe((pokemon: any) => {
          this.dadosPokemon = pokemon;
          this.apiService.setPokemonSelecionado(pokemon);
        });
    }
  }

  detalhesPokemon() {
    this.router.navigate(['/tabs/tab3']);
  }
}
