import { Component, EventEmitter, Output } from '@angular/core';

import { v4 as uuid } from 'uuid';
import { DbzCharacter } from '../../interfaces';

@Component({
  selector: 'dbz-form-character',
  templateUrl: './form-character.component.html',
  styleUrl: './form-character.component.css'
})
export class FormCharacterComponent {

  @Output("newCharacter")
  public onNewCharacter: EventEmitter<DbzCharacter> = new EventEmitter();

  public character: DbzCharacter = {
    id: uuid(),
    name: '',
    power: 0
  }

  emitCharacter(): void {

    if( this.character.name.length === 0 ) return;

    this.onNewCharacter.emit(this.character);

    this.character = { id: uuid(), name: '', power: 0}

  }
}
