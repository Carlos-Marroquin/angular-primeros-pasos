import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  //TODO: Emitir el ID del personaje
  onDeleteCharacter( id?:string):void {

    if( !id ) return; // Nunca se va a llamar si no tiene un ID

  this.onDelete.emit( id );
  }
}
