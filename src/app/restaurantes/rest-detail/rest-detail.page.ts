import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { rest } from '../rest.model';
import { RestaurantesService } from '../restaurantes.service';

@Component({
  selector: 'app-rest-detail',
  templateUrl: './rest-detail.page.html',
  styleUrls: ['./rest-detail.page.scss'],
})
export class RestDetailPage implements OnInit {

  miRest: rest = { id: '', nombre: '', descripcion: '', tenedores: '', logo: '', comments: [] };

  constructor(private activatedRouted: ActivatedRoute, private restauranteService: RestaurantesService) { }

  ngOnInit() {
    this.activatedRouted.paramMap.subscribe(paramMap => {
      const recipeId = paramMap.get('restID');
      console.log(recipeId);
      this.miRest = this.restauranteService.getRest(recipeId);
    })
  }

}
