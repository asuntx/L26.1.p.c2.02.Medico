export interface I_vPaciente {
  get nombre(): string;
  get apellido(): string;
  get cedula(): string;
  get sexo(): string;
  get fechaNacimiento(): string;
  get tipoAtencion(): number;
  get peso(): number;
  mostrar(): void;
  ocultar(): void;
  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void;
}
