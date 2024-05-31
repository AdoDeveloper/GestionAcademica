import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { endpoints } from '../utils/endpoints';
import { Profesor } from '../interfaces/profesor.interface'; // Cambiar a Profesor

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService { // Cambiar el nombre del servicio a ProfesoresService
  private readonly http = inject(HttpClient);

  constructor() { }

  obtenerProfesores() { // Cambiar el nombre del método a obtenerProfesores
    return this.http.get<Profesor[]>(endpoints.obtenerProfesores); // Cambiar el tipo de respuesta a Profesor[]
  }
}
