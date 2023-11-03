import { Component, OnInit } from '@angular/core';
import { RestaurantesService } from './restaurantes.service';
import { rest } from './rest.model'

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.page.html',
  styleUrls: ['./restaurantes.page.scss'],
})
export class RestaurantesPage implements OnInit {

  titulo = 'Restaurantes Famosos'
  restaurantes: rest[] = [];

  constructor(private restauranteService: RestaurantesService) { }

  ngOnInit() {
    this.restaurantes = this.restauranteService.getRests();
  }

}
