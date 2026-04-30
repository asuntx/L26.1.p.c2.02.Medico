import Cl_mPaciente from "./Cl_mPaciente.js";

export default class Cl_mMedico {
  private cntTipoProcedimiento: number = 0;
  private cntTipoConsulta: number = 0;
  private cntTipoControl: number = 0;
  private cntPaciente: number = 0;
  private cntCnDescuento: number = 0;
  private cntSinDescuento: number = 0;
  private acmCosto: number = 0;
  private acmPeso: number = 0;

  procesarPaciente(p: Cl_mPaciente): void {
    this.cntPaciente++;

    this.acmCosto += p.paga;
    this.acmPeso += p.peso;

    switch (p.tipoAtencion) {
      case 1:
        this.cntTipoProcedimiento++;
        break;
      case 2:
        this.cntTipoConsulta++;
        break;
      case 3:
        this.cntTipoControl++;
        break;
    }

    if (p.descuento > 0) {
      this.cntCnDescuento++;
    } else {
      this.cntSinDescuento++;
    }
  }

  get porcentajeProcedimiento(): number {
    if (this.cntPaciente > 0) {
      return (this.cntTipoProcedimiento / this.cntPaciente) * 100;
    }
    return 0;
  }

  get porcentajeConsulta(): number {
    if (this.cntPaciente > 0) {
      return (this.cntTipoConsulta / this.cntPaciente) * 100;
    }
    return 0;
  }

  get porcentajeControl(): number {
    if (this.cntPaciente > 0) {
      return (this.cntTipoControl / this.cntPaciente) * 100;
    }
    return 0;
  }

  get porcentajeConDescuento(): number {
    if (this.cntPaciente > 0) {
      return (this.cntCnDescuento / this.cntPaciente) * 100;
    }
    return 0;
  }

  get porcentajeSinDescuento(): number {
    if (this.cntPaciente > 0) {
      return (this.cntSinDescuento / this.cntPaciente) * 100;
    }
    return 0;
  }

  get promedioPeso(): number {
    if (this.cntPaciente > 0) {
      return this.acmPeso / this.cntPaciente;
    }
    return 0;
  }

  get totalesVarios(): number {
    return this.acmCosto;
  }
}
