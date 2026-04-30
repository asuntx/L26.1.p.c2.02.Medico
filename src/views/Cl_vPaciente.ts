import { I_vPaciente } from "../interfaces/I_vPaciente.js";
export default class Cl_vPaciente implements I_vPaciente {
  private vista: HTMLElement;
  private inNombre: HTMLInputElement;
  private inApellido: HTMLInputElement;
  private inCedula: HTMLInputElement;
  private inSexo: HTMLSelectElement;
  private inFechaNacimiento: HTMLInputElement;
  private inTipoAtencion: HTMLSelectElement;
  private inPeso: HTMLInputElement;
  private btAceptar: HTMLButtonElement;
  private btCancelar: HTMLButtonElement;

  constructor() {
    this.vista = document.getElementById("paciente") as HTMLElement;
    this.inNombre = document.getElementById(
      "paciente_inNombre",
    ) as HTMLInputElement;
    this.inApellido = document.getElementById(
      "paciente_inApellido",
    ) as HTMLInputElement;
    this.inCedula = document.getElementById(
      "paciente_inCedula",
    ) as HTMLInputElement;
    this.inSexo = document.getElementById(
      "paciente_inSexo",
    ) as HTMLSelectElement;
    this.inFechaNacimiento = document.getElementById(
      "paciente_inFechaNacimiento",
    ) as HTMLInputElement;
    this.inTipoAtencion = document.getElementById(
      "paciente_inTipoAtencion",
    ) as HTMLSelectElement;
    this.inPeso = document.getElementById(
      "paciente_inPeso",
    ) as HTMLInputElement;
    this.btAceptar = document.getElementById(
      "paciente_btAceptar",
    ) as HTMLButtonElement;
    this.btCancelar = document.getElementById(
      "paciente_btCancelar",
    ) as HTMLButtonElement;
  }

  get nombre(): string {
    return this.inNombre.value;
  }
  get apellido(): string {
    return this.inApellido.value;
  }
  get cedula(): string {
    return this.inCedula.value;
  }
  get sexo(): string {
    return this.inSexo.value;
  }
  get fechaNacimiento(): string {
    return this.inFechaNacimiento.value;
  }
  get tipoAtencion(): number {
    return +this.inTipoAtencion.value;
  }

  get peso(): number {
    return +this.inPeso.value;
  }

  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = callback;
  }
  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
  }

  mostrar(): void {
    this.inNombre.value = "";
    this.inApellido.value = "";
    this.inCedula.value = "";
    this.inFechaNacimiento.value = "";
    this.inTipoAtencion.value = "1";
    this.inPeso.value = "";
    if (this.vista) this.vista.hidden = false;
  }

  ocultar(): void {
    if (this.vista) this.vista.hidden = true;
  }
}
