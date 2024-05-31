import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { Estudiante } from '../../interfaces/estudiante.interface';
import { EstudiantesService } from '../../services/estudiantes.service';
import { parsearErroresAPI } from '../../utils/Utilities';
import { Location } from '@angular/common';

@Component({
  selector: 'app-agregar-estudiante',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './agregar-estudiante.component.html',
  styleUrls: ['./agregar-estudiante.component.scss']
})
export class AgregarEstudianteComponent implements OnInit {
  form: FormGroup;
  formEstudiante: Estudiante;
  onRouteStart!: Subscription;
  idEstudiante: number | null = null;

  constructor(private formBuilder: FormBuilder,
              private estudianteService: EstudiantesService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private location: Location) {
    this.formEstudiante = {} as Estudiante;
    this.form = this.formBuilder.group({
      nombresEstudiante: ['', [Validators.required]],
      apellidosEstudiante: ['', [Validators.required]],
      codigoEstudiante: ['', [Validators.required]],
      correoEstudiante: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    this.onRouteStart = this.activatedRoute.params.subscribe((temp) => {
      this.idEstudiante = temp['idEstudiante'];
    });

    if (this.idEstudiante && this.idEstudiante > 0) {
      this.estudianteService.obtenerEstudiantePorID(this.idEstudiante).subscribe({
        next: (temp: Estudiante) => {
          this.formEstudiante = temp;
          this.form.patchValue(this.formEstudiante);
        },
        error: (err: any) => {
          console.log("Error: ", err);
        }
      });
    }
  }

  onSubmit() {
    this.formEstudiante = this.form.value;
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Guardando registro, espere por favor...'
    });
    Swal.showLoading();

    if (this.idEstudiante && this.idEstudiante > 0) {
      this.estudianteService.actualizarEstudiante(this.idEstudiante, this.formEstudiante).subscribe({
        next: (temp: any) => {
          Swal.fire("Actualizado", "Registro actualizado con exito", "success");
          this.location.back();
        },
        error: (err: any) => {
          Swal.fire({
            icon: 'error',
            title: 'Error al actualizar persona',
            text: parsearErroresAPI(err).toString()
          });
        }
      });
    } else {
      this.estudianteService.agregarEstudiante(this.formEstudiante).subscribe({
        next: (temp) => {
          Swal.fire("Registrado", "Registro insertado con éxito", "success");
          this.location.back();
        },
        error: (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Error al insertar persona',
            text: parsearErroresAPI(err).toString()
          });
        }
      });
    }
  }

  validateField(field: string) {
    return this.form.get(field)?.invalid && this.form.get(field)?.touched;
  }
}
