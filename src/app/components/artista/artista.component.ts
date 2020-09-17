import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent  {

  artista: any = {};
  topTracks: any = []
  loadingArtists: boolean;

  constructor(private router: ActivatedRoute,
              private spofity: SpotifyService) {
    this.router.params.subscribe( params => {
      console.log(params['id']);
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtista(id: string){
    this.loadingArtists = true;
      this.spofity.getArtista( id )
                .subscribe( r_artista => {
                this.artista = r_artista;
                });
    this.loadingArtists = false;
  }

  getTopTracks(id: string){
    this.spofity.getTopTracks( id )
      .subscribe( topTracks => {
        this.topTracks = topTracks;       
      });
  }
}
