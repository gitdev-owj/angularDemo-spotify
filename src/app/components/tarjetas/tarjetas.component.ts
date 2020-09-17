import { Route } from '@angular/compiler/src/core';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: [
  ]
})
export class TarjetasComponent {

 @Input() items: any[] = [];

  constructor(private router : Router) { }

  verArtista( artista: any ){
   let artistId = (artista.type === 'artist') ?
                    artista.id : artista.artists[0].id;

    this.router.navigate(['/artist', artistId]); 
  }

}
