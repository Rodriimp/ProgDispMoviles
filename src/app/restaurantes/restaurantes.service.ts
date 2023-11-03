import { Injectable } from '@angular/core';
import { rest } from './rest.model'

@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {
  restaurantes: rest[] = [
    {
      id: '1',
      nombre: 'Nusret Salt Bae',
      descripcion: 'Restaurante de carnes turco y exquisita gastronomía en Dubái',
      tenedores: 'https://www.lasplacas.com/WebRoot/StoreES3/Shops/64043259/5ECD/243E/23BB/A372/AED4/0A0C/6D0E/8D4C/SAC586.JPG',
      logo: 'https://media-cdn.tripadvisor.com/media/photo-p/28/db/b8/7c/nusretsocial.jpg',
      comments: ['La carne es de excelente calidad, pero muy caro', 'Experiencia estafadora pero buena', 'Hay que vivir la experiencia!!']
    },
    {
      id: '2',
      nombre: 'La Comilona',
      descripcion: 'Restaurante amplio que ofrece tapas, como crepes y croquetas, carnes a la brasa y platos principales de pescado.',
      tenedores: 'https://www.lasplacas.com/WebRoot/StoreES3/Shops/64043259/557C/9FE3/EE78/5D32/39A2/C0A8/2BB9/C6CD/placa-senal-xSEC738.jpg',
      logo: 'data:image/png;base64,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',
      comments: ['Buenos platos calidad/precio', 'Fuimos almorzar con la familia bar muy lleno servicio impecable camareros súper amables comida espectacular volveremos']
    },
    {
      id: '3',
      nombre: 'Aponiente',
      descripcion: 'Restaurante refinado de renombre con menús de varios platos, maridajes con vinos y platos de marisco experimentales',
      tenedores: 'https://www.lasplacas.com/WebRoot/StoreES3/Shops/64043259/5ECD/243E/23BB/A372/AED4/0A0C/6D0E/8D4C/SAC586.JPG',
      logo: 'https://www.juntadeandalucia.es/medioambiente/portal/documents/255035/15196573/LogoAponiente.png/8d077500-6aac-dc66-0043-a7a47703e653?t=1686914900735',
      comments: ['"Restaurante diferente,raro ,con carta enfocada a productos del mar ,te sorprenderá..."', 'Mar, mar y más mar!', 'El mejor viaje gastronomico de mi vida...']
    },
    {
      id: '4',
      nombre: 'DiverXO',
      descripcion: 'Menús degustación sofisticados y vanguardistas servidos en llamativas vajillas de cerámica en un restaurante moderno y refinado.',
      tenedores: 'https://www.lasplacas.com/WebRoot/StoreES3/Shops/64043259/5ECD/243E/23BB/A372/AED4/0A0C/6D0E/8D4C/SAC586.JPG',
      logo: 'https://newgestionfood.com/wp-content/uploads/2021/03/Logo-diverxoweb-1.png',
      comments: ['“Sin lugar a dudas el mejor 3 estrellas Michelin de España y un futuro mejor resturante del mundo.”', 'Mar, mar y más mar!', 'El mejor viaje gastronomico de mi vida...']
    },
    {
      id: '5',
      nombre: 'ABaC',
      descripcion: 'La gastronomía es el eje fundamental del proyecto dirigido por el prestigioso chef Jordi Cruz',
      tenedores: 'https://www.lasplacas.com/WebRoot/StoreES3/Shops/64043259/5ECD/243E/23BB/A372/AED4/0A0C/6D0E/8D4C/SAC586.JPG',
      logo: 'https://media.licdn.com/dms/image/D4E22AQEMoziUekJgbA/feedshare-shrink_800/0/1698240085941?e=2147483647&v=beta&t=An5-NXxg1GziEyHoBPyZp2at5ezHQKMUbye0yBmKms0',
      comments: ['“Sin lugar a dudas el mejor 3 estrellas Michelin de España y un futuro mejor resturante del mundo.”', 'Mar, mar y más mar!', 'El mejor viaje gastronomico de mi vida...']
    },
    {
      id: '6',
      nombre: 'Tabanco la Duquesa',
      descripcion: 'La gastronomía es el eje fundamental del proyecto dirigido por el prestigioso chef Jordi Cruz',
      tenedores: 'https://www.lasplacas.com/WebRoot/StoreES3/Shops/64043259/557C/9E86/5282/9F45/9C09/C0A8/2AB9/12B1/placa-senal-xSEC737.jpg',
      logo: 'https://media-cdn.tripadvisor.com/media/photo-s/1c/ff/cd/7f/tabanco-la-duquesa-perfil.jpg',
      comments: ['“Sin lugar a dudas el mejor 3 estrellas Michelin de España y un futuro mejor resturante del mundo.”', 'Mar, mar y más mar!', 'El mejor viaje gastronomico de mi vida...']
    },

  ]

  constructor() { }

  getRests() {
    return [...this.restaurantes]
  }

  getRest(restID: String | null) {
    return {
      ...this.restaurantes.find(rest => {
        return rest.id === restID
      })
    }
  }

}
