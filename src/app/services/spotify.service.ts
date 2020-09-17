import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery( query: string ){
    
    const url = `https://api.spotify.com/v1/${ query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCawJHv1dKuu56DtAaPHl2HW_1qbx_25eNeoNWyYHuEPoJ9U1PTdtJ5WHhi_fbxWw3TRCCysDsTsrZwKoU'
    });

    return this.http.get(url, { headers});

  }

  getNewReleases(){
   return this.getQuery('browse/new-releases?limit=20')
              .pipe( map( data => data['albums'].items ));
  }

  getArtistas( termino: string){

   return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
              .pipe( map( arts => arts['artists'].items ));
  }

  getArtista( id: string){

    return this.getQuery(`artists/${ id }`);
              // .pipe( map( arts => arts['artists'].items ));
   }

   getTopTracks( id: string){

    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
               .pipe( map( tracks => tracks['tracks'] ));
   }
}
