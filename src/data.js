// const data = [
//     { moroso: 'si', antiguedad: '> 5', ingresos: '600-1200', trabajo: 'tiene', credito: 'rechazado' },
//     { moroso: 'no', antiguedad: '< 1', ingresos: '600-1200', trabajo: 'tiene', credito: 'aceptado' },
//     { moroso: 'si', antiguedad: '1-5', ingresos: '> 1200', trabajo: 'tiene', credito: 'rechazado' },
//     { moroso: 'no', antiguedad: '> 5', ingresos: '> 1200', trabajo: 'no-tiene', credito: 'aceptado' },
//     { moroso: 'no', antiguedad: '< 1', ingresos: '> 1200', trabajo: 'tiene', credito: 'aceptado' },
//     { moroso: 'si', antiguedad: '1-5', ingresos: '600-1200', trabajo: 'tiene', credito: 'rechazado' },
//     { moroso: 'no', antiguedad: '1-5', ingresos: '> 1200', trabajo: 'teien', credito: 'aceptado' },
//     { moroso: 'no', antiguedad: '< 1', ingresos: '< 600', trabajo: 'tiene', credito: 'rechazado' },
//     { moroso: 'no', antiguedad: '> 5', ingresos: '600-1200', trabajo: 'no-tiene', credito: 'rechazado' },
//     { moroso: 'si', antiguedad: '1-5', ingresos: '< 600', trabajo: 'no-tiene', credito: 'rechazado' },
//   ];

const data = [
  { presion: 'Alta', urea: 'Alta', gota: 'Si', hipotiroidismo: 'No', tratamiento: 'No' },
  { presion: 'Alta', urea: 'Alta', gota: 'Si', hipotiroidismo: 'Si', tratamiento: 'No' },
  { presion: 'Normal', urea: 'Alta', gota: 'Si', hipotiroidismo: 'No', tratamiento: 'Si' },
  { presion: 'Baja', urea: 'Normal', gota: 'Si', hipotiroidismo: 'No', tratamiento: 'Si' },
  { presion: 'Baja', urea: 'Baja', gota: 'No', hipotiroidismo: 'No', tratamiento: 'Si' },
  { presion: 'Baja', urea: 'Baja', gota: 'No', hipotiroidismo: 'Si', tratamiento: 'No' },
  { presion: 'Normal', urea: 'Baja', gota: 'No', hipotiroidismo: 'Si', tratamiento: 'Si' },
  { presion: 'Alta', urea: 'Normal', gota: 'Si', hipotiroidismo: 'No', tratamiento: 'No' },
  { presion: 'Alta', urea: 'Baja', gota: 'No', hipotiroidismo: 'No', tratamiento: 'Si' },
  { presion: 'Baja', urea: 'Normal', gota: 'No', hipotiroidismo: 'No', tratamiento: 'Si' },
  { presion: 'Alta', urea: 'Normal', gota: 'No', hipotiroidismo: 'Si', tratamiento: 'No' },
  { presion: 'Normal', urea: 'Normal', gota: 'Si', hipotiroidismo: 'Si', tratamiento: 'Si' }
];

// ejemplos para pruebas 
// de igual forma cambiar en app por los atributos correspondientes

// const data = [
//   { color: 'rojo', tamaño: 'grande', peso: 'pesado', sabor: 'dulce', tipo: 'manzana' },
//   { color: 'amarillo', tamaño: 'mediano', peso: 'ligero', sabor: 'dulce', tipo: 'plátano' },
//   { color: 'verde', tamaño: 'pequeño', peso: 'ligero', sabor: 'ácido', tipo: 'uva' },
//   { color: 'rojo', tamaño: 'pequeño', peso: 'ligero', sabor: 'dulce', tipo: 'cereza' },
//   { color: 'amarillo', tamaño: 'grande', peso: 'pesado', sabor: 'ácido', tipo: 'piña' },
//   { color: 'verde', tamaño: 'grande', peso: 'pesado', sabor: 'dulce', tipo: 'sandía' },
//   { color: 'rojo', tamaño: 'mediano', peso: 'ligero', sabor: 'dulce', tipo: 'fresa' },
//   { color: 'amarillo', tamaño: 'mediano', peso: 'pesado', sabor: 'dulce', tipo: 'mango' },
//   { color: 'verde', tamaño: 'mediano', peso: 'ligero', sabor: 'ácido', tipo: 'limón' },
//   { color: 'rojo', tamaño: 'grande', peso: 'pesado', sabor: 'ácido', tipo: 'granada' },
// ];


// const data = [
//     { ingresos: 'altos', deuda: 'baja', empleo: 'fijo', credito: 'aprobado' },
//     { ingresos: 'bajos', deuda: 'alta', empleo: 'temporal', credito: 'rechazado' },
//     { ingresos: 'medios', deuda: 'baja', empleo: 'fijo', credito: 'aprobado' },
//     { ingresos: 'altos', deuda: 'alta', empleo: 'fijo', credito: 'aprobado' },
//     { ingresos: 'bajos', deuda: 'alta', empleo: 'fijo', credito: 'rechazado' },
//     { ingresos: 'altos', deuda: 'baja', empleo: 'temporal', credito: 'aprobado' },
//     { ingresos: 'bajos', deuda: 'baja', empleo: 'fijo', credito: 'rechazado' },
//     { ingresos: 'medios', deuda: 'alta', empleo: 'temporal', credito: 'rechazado' },
//     { ingresos: 'altos', deuda: 'baja', empleo: 'temporal', credito: 'aprobado' },
//     { ingresos: 'bajos', deuda: 'alta', empleo: 'temporal', credito: 'rechazado' },
//   ];

// const data = [
//     { dieta: 'sana', ejercicio: 'regular', edad: 'joven', salud: 'saludable' },
//     { dieta: 'mala', ejercicio: 'ninguno', edad: 'mayor', salud: 'en riesgo' },
//     { dieta: 'sana', ejercicio: 'ocasional', edad: 'mayor', salud: 'en riesgo' },
//     { dieta: 'mala', ejercicio: 'ocasional', edad: 'joven', salud: 'en riesgo' },
//     { dieta: 'mala', ejercicio: 'ninguno', edad: 'mayor', salud: 'en riesgo' },
//     { dieta: 'sana', ejercicio: 'regular', edad: 'joven', salud: 'saludable' },
//     { dieta: 'mala', ejercicio: 'ninguno', edad: 'joven', salud: 'en riesgo' },
//     { dieta: 'sana', ejercicio: 'regular', edad: 'mayor', salud: 'saludable' },
//     { dieta: 'sana', ejercicio: 'ocasional', edad: 'joven', salud: 'saludable' },
//     { dieta: 'mala', ejercicio: 'ninguno', edad: 'mayor', salud: 'en riesgo' },
//   ];
  
// const data = [
//     { tipo: 'sedán', puertas: '4', combustible: 'gasolina', vehiculo: 'auto' },
//     { tipo: 'camioneta', puertas: '2', combustible: 'diesel', vehiculo: 'pickup' },
//     { tipo: 'motocicleta', puertas: 'ninguna', combustible: 'gasolina', vehiculo: 'moto' },
//     { tipo: 'sedán', puertas: '4', combustible: 'eléctrico', vehiculo: 'auto eléctrico' },
//     { tipo: 'camioneta', puertas: '4', combustible: 'diesel', vehiculo: 'camión' },
//     { tipo: 'sedán', puertas: '2', combustible: 'gasolina', vehiculo: 'coupé' },
//     { tipo: 'motocicleta', puertas: 'ninguna', combustible: 'eléctrico', vehiculo: 'scooter' },
//     { tipo: 'camioneta', puertas: '4', combustible: 'gasolina', vehiculo: 'SUV' },
//     { tipo: 'sedán', puertas: '4', combustible: 'híbrido', vehiculo: 'auto híbrido' },
//     { tipo: 'camioneta', puertas: '2', combustible: 'eléctrico', vehiculo: 'camioneta eléctrica' },
//   ];
  export default data;