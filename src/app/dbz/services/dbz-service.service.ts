import { Injectable } from '@angular/core';
import { DbzCharacter } from '../interfaces';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: DbzCharacter[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 100
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 10000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 9000
    },
    {
      id: uuid(),
      name: 'Picoro',
      power: 6000
    },
    {
      id: uuid(),
      name: 'Trunks',
      power: 7000
    }
  ];

  onNewCharacter(character: DbzCharacter): void {

    this.characters.push(character);

  }

  deleteCharacterById( id: string ) {
    this.characters = this.characters.filter( character => character.id !== id);
  }

}
