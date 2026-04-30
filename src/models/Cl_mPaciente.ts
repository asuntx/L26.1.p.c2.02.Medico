import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mPaciente extends Cl_mPersona {
  private _tipoAtencion: number;
  constructor({
    nombre,
    apellido,
    cedula,
    sexo,
    fechaNacimiento,
    peso,
    tipoAtencion,
  }: {
    nombre: string;
    apellido: string;
    cedula: string;
    sexo: string;
    fechaNacimiento: string;
    peso: number;
    tipoAtencion: number;
  }) {
    super({ nombre, apellido, cedula, sexo, fechaNacimiento, peso });
    this._tipoAtencion = tipoAtencion;
  }

  set tipoAtencion(t: number) {
    this._tipoAtencion = t;
  }

  get tipoAtencion(): number {
    return this._tipoAtencion;
  }

  get costo(): number {
    if (this._tipoAtencion == 1) {
      return 30;
    } else if (this._tipoAtencion == 2) {
      return 10;
    } else return 0;
  }
  get descuento(): number {
    if (this.sexo === "F" && this.edad <= 50 && this.edad >= 25) {
      return this.costo * 0.4;
    } else {
      return 0;
    }
  }

  get paga(): number {
    return this.costo - this.descuento;
  }
}
