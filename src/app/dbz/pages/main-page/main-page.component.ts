import { Component } from '@angular/core';
import { DbzCharacter } from '../../interfaces';
import { DbzService } from '../../services/dbz-service.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  constructor( private dbzService: DbzService) {}

  get characters(): DbzCharacter[] {
    return [...this.dbzService.characters]
  }

  addCharacter( character: DbzCharacter ): void {
    this.dbzService.onNewCharacter( character );
  }

  deleteCharacter( id: string ): void {
    this.dbzService.deleteCharacterById(id);
  }

}
