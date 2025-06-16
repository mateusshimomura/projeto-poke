import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit {
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  nomePokemon: string | null = '';
  dadosPokemon: any;

  ngOnInit() {
    this.nomePokemon = this.route.snapshot.paramMap.get('name');

    if (this.nomePokemon) {
      this.apiService
        .getDadosPokemon(this.nomePokemon)
        .subscribe((pokemon: any) => {
          this.dadosPokemon = pokemon;
        });
    }
  }
}
