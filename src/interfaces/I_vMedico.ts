export interface I_vMedico {
  onNuevoPaciente(callback: () => void): void;
  reportar({
    totalesVarios,
    porcentajeProcedimiento,
    porcentajeConsulta,
    porcentajeControl,
    promedioPeso,
  }: {
    totalesVarios: number;
    porcentajeProcedimiento: number;
    porcentajeConsulta: number;
    porcentajeControl: number;
    porcentajeConDescuento: number;
    porcentajeSinDescuento: number;
    promedioPeso: number;
  }): void;
}
