import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.services';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {


  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzService: DbzService) {

  }

  //  @Output() onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

  flush() {
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

  agregar() {
    if (this.nuevo.nombre.trim().length == 0) { return; }
    this.dbzService.agregarPersonaje(this.nuevo);
    //this.onNewPersonaje.emit(this.nuevo);
    this.flush();
  }

}
