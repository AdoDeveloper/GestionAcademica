import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { endpoints } from '../utils/endpoints';
import { Materia } from '../interfaces/materia.interface'; // Cambiar a Materia

@Injectable({
  providedIn: 'root'
})
export class MateriasService { // Cambiar el nombre del servicio a MateriasService
  private readonly http = inject(HttpClient);

  constructor() { }

  obtenerMaterias() { // Cambiar el nombre del método a obtenerMaterias
    return this.http.get<Materia[]>(endpoints.obtenerMaterias); // Cambiar el tipo de respuesta a Materia[]
  }
}
