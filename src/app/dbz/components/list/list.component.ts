import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DbzCharacter } from '../../interfaces';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public indexEmitter: EventEmitter<string> = new EventEmitter();

  @Input()
  public characters: DbzCharacter[] = []

  onDeletedCharacter( id: string ): void {

    this.indexEmitter.emit(id);

  }

}
