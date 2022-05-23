import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Maestro Mutenroi',
    poder: 1000
  }

  constructor( ){}
}
