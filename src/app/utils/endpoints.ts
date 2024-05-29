import { environment } from "../../environments/environment.development";
export const endpoints = {
// *** Estudiantes ***
agregarEstudiante:
environment.serverURL.concat('api/estudiantes/agregarEstudiante'),
actualizarEstudiante:
environment.serverURL.concat('api/estudiantes/actualizarEstudiante/:idEstudiante'),
eliminarEstudiante:
environment.serverURL.concat('api/estudiantes/eliminarEstudiante/:idEstudiante'),
obtenerEstudiantePorID:
environment.serverURL.concat('api/estudiantes/obtenerEstudiantePorID/:idEstudiante'),
obtenerEstudiantes:
environment.serverURL.concat('api/estudiantes/obtenerEstudiantes')
// ***********************
};
