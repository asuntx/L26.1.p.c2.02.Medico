import { I_vMedico } from "../interfaces/I_vMedico.js";
export default class Cl_vMedico implements I_vMedico {
  private btNuevoPaciente: HTMLButtonElement;
  private lblTotalesVarios: HTMLElement;
  private lblPorcentajeProcedimiento: HTMLElement;
  private lblPorcentajeConsulta: HTMLElement;
  private lblPorcentajeControl: HTMLElement;
  private lblPorcentajeConDescuento: HTMLElement;
  private lblPorcentajeSinDescuento: HTMLElement;
  private lblPromedioPeso: HTMLElement;

  constructor() {
    this.btNuevoPaciente = document.getElementById(
      "body_btNuevoPaciente",
    ) as HTMLButtonElement;
    this.lblTotalesVarios = document.getElementById(
      "lblTotalesVarios",
    ) as HTMLElement;
    this.lblPorcentajeProcedimiento = document.getElementById(
      "lblPorcentajeProcedimiento",
    ) as HTMLElement;
    this.lblPorcentajeConsulta = document.getElementById(
      "lblPorcentajeConsulta",
    ) as HTMLElement;
    this.lblPorcentajeControl = document.getElementById(
      "lblPorcentajeControl",
    ) as HTMLElement;
    this.lblPorcentajeConDescuento = document.getElementById(
      "lblPorcentajeConDescuento",
    ) as HTMLElement;
    this.lblPorcentajeSinDescuento = document.getElementById(
      "lblPorcentajeSinDescuento",
    ) as HTMLElement;
    this.lblPromedioPeso = document.getElementById(
      "lblPromedioPeso",
    ) as HTMLElement;
  }

  onNuevoPaciente(callback: () => void): void {
    this.btNuevoPaciente.onclick = callback;
  }

  reportar({
    totalesVarios,
    porcentajeProcedimiento,
    porcentajeConsulta,
    porcentajeControl,
    porcentajeConDescuento,
    porcentajeSinDescuento,
    promedioPeso,
  }: {
    totalesVarios: number;
    porcentajeProcedimiento: number;
    porcentajeConsulta: number;
    porcentajeControl: number;
    porcentajeConDescuento: number;
    porcentajeSinDescuento: number;
    promedioPeso: number;
  }): void {
    this.lblTotalesVarios.innerHTML = `${totalesVarios.toFixed(2)}$`;
    this.lblPorcentajeProcedimiento.innerHTML = `${porcentajeProcedimiento.toFixed(2)}%`;
    this.lblPorcentajeConsulta.innerHTML = `${porcentajeConsulta.toFixed(2)}%`;
    this.lblPorcentajeControl.innerHTML = `${porcentajeControl.toFixed(2)}%`;
    this.lblPorcentajeConDescuento.innerHTML = `${porcentajeConDescuento.toFixed(2)}%`;
    this.lblPorcentajeSinDescuento.innerHTML = `${porcentajeSinDescuento.toFixed(2)}%`;
    this.lblPromedioPeso.innerHTML = `${promedioPeso.toFixed(2)} kg`;
  }
}
