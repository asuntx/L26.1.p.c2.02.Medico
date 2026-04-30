export default class Cl_mPersona {
  private _nombre: string;
  private _apellido: string;
  private _cedula: string;
  private _sexo: string;
  private _fechaNacimiento: string;
  private _peso: number;

  constructor({
    nombre,
    apellido,
    cedula,
    sexo,
    fechaNacimiento,
    peso,
  }: {
    nombre: string;
    apellido: string;
    cedula: string;
    sexo: string;
    fechaNacimiento: string;
    peso: number;
  }) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._cedula = cedula;
    this._sexo = sexo;
    this._fechaNacimiento = fechaNacimiento;
    this._peso = peso;
  }

  set nombre(n: string) {
    this._nombre = n;
  }
  get nombre(): string {
    return this._nombre;
  }
  set apellido(a: string) {
    this._apellido = a;
  }
  get apellido(): string {
    return this._apellido;
  }
  set sexo(s: string) {
    this._sexo = s;
  }
  get sexo(): string {
    return this._sexo;
  }
  set cedula(c: string) {
    this._cedula = c;
  }
  get cedula(): string {
    return this._cedula;
  }
  set fechaNacimiento(f: string) {
    this._fechaNacimiento = f;
  }
  get fechaNacimiento(): string {
    return this._fechaNacimiento;
  }
  set peso(p: number) {
    this._peso = p;
  }
  get peso(): number {
    return this._peso;
  }

  get edad(): number {
    let hoy = new Date();
    let fechaNac = new Date(this._fechaNacimiento);

    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    let mes = hoy.getMonth() - fechaNac.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
      edad--;
    }

    return edad;
  }
}
