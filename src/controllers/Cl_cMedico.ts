import { I_vMedico } from "../interfaces/I_vMedico.js";
import Cl_mMedico from "../models/Cl_mMedico.js";
import Cl_cPaciente from "./Cl_cPaciente.js";

export default class Cl_cMedico {
  private mMedico:Cl_mMedico =  new Cl_mMedico();
  private vMedico: I_vMedico;
  private cPaciente: Cl_cPaciente;

  constructor(
    vMedico: I_vMedico,
    cPaciente: Cl_cPaciente,
  ) {
    this.vMedico = vMedico;
    this.cPaciente = cPaciente;
    this.vMedico.onNuevoPaciente(() => this.procesarUnPaciente());
  }

  private procesarUnPaciente() {
    this.cPaciente.solicitarPaciente((paciente) => {
      if (paciente !== null) {
        this.mMedico.procesarPaciente(paciente);
        this.vMedico.reportar({
          totalesVarios: this.mMedico.totalesVarios,
          porcentajeProcedimiento: this.mMedico.porcentajeProcedimiento,
          porcentajeConsulta: this.mMedico.porcentajeConsulta,
          porcentajeControl: this.mMedico.porcentajeControl,
          porcentajeConDescuento: this.mMedico.porcentajeConDescuento,
          porcentajeSinDescuento: this.mMedico.porcentajeSinDescuento,
          promedioPeso: this.mMedico.promedioPeso,
        });
      }
    });
  }
}
