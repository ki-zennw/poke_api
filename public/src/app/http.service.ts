import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
    // this.getPokemon();
  }
  getPokemon() {
    let pikachu = this._http.get('https://pokeapi.co/api/v2/pokemon/25');
    pikachu.subscribe(data => {
      console.log("Got pika data!", data);
      console.log("Pikachu's abilities are", data.abilities[0].ability.name, "and", data.abilities[1].ability.name);
      let lightning_rod = this._http.get(data.abilities[0].ability.url);
      lightning_rod.subscribe(quantity => console.log(quantity.pokemon.length.toString(), "Pokemon have the lightning-rod ability."));
    });
  }
}
