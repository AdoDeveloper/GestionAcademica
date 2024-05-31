import { Routes } from '@angular/router';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { CarrerasComponent } from './carreras/carreras.component';
import { GruposComponent } from './grupos/grupos.component';
import { MateriasComponent } from './materias/materias.component';
import { ProfesoresComponent } from './profesores/profesores.component';
export const routes: Routes = [
{path: '', component: EstudiantesComponent, pathMatch: 'full'}, // Ruta por defecto
{ path:'agregarEstudiante', component: EstudiantesComponent},
{ path:'agregarEstudiante/:idEstudiante', component: EstudiantesComponent},
//{path: '', component: CarrerasComponent, pathMatch: 'full'},
//{path: '', component: GruposComponent, pathMatch: 'full'},
//{path: '', component: MateriasComponent, pathMatch: 'full'},
//{path: '', component: ProfesoresComponent, pathMatch: 'full'},
{path: '**', redirectTo: '', pathMatch: 'full'} // Rutas no existentes
];
