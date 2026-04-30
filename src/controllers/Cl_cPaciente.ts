import { I_vPaciente } from "../interfaces/I_vPaciente.js";
import Cl_mPaciente from "../models/Cl_mPaciente.js";

export default class Cl_cPaciente {
  private vista: I_vPaciente;
  private callback!: (paciente: Cl_mPaciente | null) => void;

  constructor(vista: I_vPaciente) {
    this.vista = vista;
    this.vista.onCancelar(() => this.btCancelarOnClick());
    this.vista.onAceptar(() => this.btAceptarOnClick());
  }

  solicitarPaciente(callback: (paciente: Cl_mPaciente | null) => void) {
    this.callback = callback;
    this.vista.mostrar();
  }

  private btCancelarOnClick() {
    this.callback(null);
    this.vista.ocultar();
  }

  private btAceptarOnClick() {
    this.callback(
      new Cl_mPaciente({
        nombre: this.vista.nombre,
        apellido: this.vista.apellido,
        cedula: this.vista.cedula,
        sexo: this.vista.sexo,
        fechaNacimiento: this.vista.fechaNacimiento,
        peso: this.vista.peso,
        tipoAtencion: this.vista.tipoAtencion,
      }),
    );
    this.vista.ocultar();
  }
}
