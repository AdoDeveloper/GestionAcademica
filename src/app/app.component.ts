import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EstudiantesService } from './services/estudiantes.service';
import { CarrerasService } from './services/carreras.service';
import { CommonModule } from '@angular/common';
import { Carrera } from './interfaces/carrera.interface';

@Component({
selector: 'app-root',
standalone: true,
imports: [RouterOutlet],
templateUrl: './app.component.html',
styleUrl: './app.component.scss'
})
export class AppComponent {
title = 'GestionAcademica';

readonly estudiantesServices = inject(EstudiantesService);
// Creando observable
estudiantes$ = this.estudiantesServices.obtenerEstudiantes();

readonly carrerasServices = inject(CarrerasService);
// Creando observable
carreras$ = this.carrerasServices.obtenerCarreras();
}