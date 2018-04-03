import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {

  level: string[] = ['1', '2', '3', '4', '5'];

  lessonsList: string[] = [
    'El Uno',
    'El Dos',
    'Dile Que No',
    'Vacilala',
    'Vacilente',
    'Enchufla',
    'Enchufla Doble',
    'Sombrero',
    'Sombrero abajo complicado',
    'Sombrero Por Debajo Complicado',
    'Setenta',
    'Setenta Complicado',
    'Setenta Y Siete',
    'Ochenta Y Quatro',
    'Pirouli',
    'Siete Loco',
    'Montagna',
    'Registrala',
    'Copelia',
    'Copelia complicada',
    'Melao',
    'Cunada',
    'Vacuna',
    'Guanabo'
  ];

  constructor() { }

}
