import Cl_mPaciente from "./models/Cl_mPaciente.js";
import Cl_mMedico from "./models/Cl_mMedico.js";

const pacientesData: [string, string, string, string, string, number, number][] = [
  ["Juan", "Perez", "111", "M", "2007-02-06", 50, 1],
  ["Ana", "Gomez", "222", "F", "2000-07-01", 70, 2],
  ["Luis", "Ruiz", "333", "M", "2008-02-05", 100, 3],
  ["Maria", "Paz", "444", "F", "2005-06-07", 64, 1],
  ["Marcos", "Rodriguez", "505", "M", "1970-03-06", 82, 2],
  ["Diego", "Zapatero", "606", "M", "2006-07-01", 75, 3],
  ["Luis", "Dolmark", "707", "M", "2002-05-05", 90, 1],
  ["Maria", "Navas", "808", "F", "2001-01-01", 58, 2],
  ["Patricia", "Peña", "909", "F", "2007-04-06", 61, 3],
  ["Kevin", "Garrido", "101", "M", "1968-07-01", 88, 1],
  ["David", "Figueroa", "202", "M", "1982-12-05", 95, 2],
  ["Luisa", "Betancourt", "303", "F", "1978-11-07", 67, 1],
];

const pacientes: Cl_mPaciente[] = [];

for (let i = 0; i < pacientesData.length; i++) {
  const data = pacientesData[i];
const paciente = new Cl_mPaciente({
    nombre: data[0],
    apellido: data[1],
    cedula: data[2],
    sexo: data[3],
    fechaNacimiento: data[4],
    peso: data[5],
    tipoAtencion: data[6],
  });
  pacientes.push(paciente);
}

const medico: Cl_mMedico = new Cl_mMedico();

for (let i = 0; i < pacientes.length; i++) {
  medico.procesarPaciente(pacientes[i]);
}

let lblTotalesVarios = document.getElementById("lblTotalesVarios");
let lblPorcentajeProcedimiento = document.getElementById(
  "lblPorcentajeProcedimiento",
);
let lblPorcentajeConsulta = document.getElementById("lblPorcentajeConsulta");
let lblPorcentajeControl = document.getElementById("lblPorcentajeControl");
let lblPorcentajeConDescuento = document.getElementById(
  "lblPorcentajeConDescuento",
);
let lblPorcentajeSinDescuento = document.getElementById(
  "lblPorcentajeSinDescuento",
);
let lblPromedioPeso = document.getElementById("lblPromedioPeso");

if (
  lblTotalesVarios &&
  lblPorcentajeProcedimiento &&
  lblPorcentajeConsulta &&
  lblPorcentajeControl &&
  lblPorcentajeConDescuento &&
  lblPorcentajeSinDescuento &&
  lblPromedioPeso
) {
  lblTotalesVarios.innerHTML = `${medico.totalesVarios.toFixed(2)}$`;
  lblPorcentajeProcedimiento.innerHTML = `${medico.porcentajeProcedimiento.toFixed(2)}%`;
  lblPorcentajeConsulta.innerHTML = `${medico.porcentajeConsulta.toFixed(2)}%`;
  lblPorcentajeControl.innerHTML = `${medico.porcentajeControl.toFixed(2)}%`;
  lblPorcentajeConDescuento.innerHTML = `${medico.porcentajeConDescuento.toFixed(2)}%`;
  lblPorcentajeSinDescuento.innerHTML = `${medico.porcentajeSinDescuento.toFixed(2)}%`;
  lblPromedioPeso.innerHTML = `${medico.promedioPeso.toFixed(2)} kg`;
}

export default medico;
