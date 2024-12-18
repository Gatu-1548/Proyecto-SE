import React, { useState } from 'react';
import { buildTree, calculateInitialGains, calculateEntropyGlobal } from './TreeBuilder';
import InteractiveTree from './InteractiveTree';
import './styles.css';


const datasets = {
  frutas: {
    data: [
        { color: 'rojo', tamaño: 'grande', peso: 'pesado', sabor: 'dulce', tipo: 'manzana' },
        { color: 'amarillo', tamaño: 'mediano', peso: 'ligero', sabor: 'dulce', tipo: 'plátano' },
        { color: 'verde', tamaño: 'pequeño', peso: 'ligero', sabor: 'ácido', tipo: 'uva' },
        { color: 'rojo', tamaño: 'pequeño', peso: 'ligero', sabor: 'dulce', tipo: 'cereza' },
        { color: 'amarillo', tamaño: 'grande', peso: 'pesado', sabor: 'ácido', tipo: 'piña' },
        { color: 'verde', tamaño: 'grande', peso: 'pesado', sabor: 'dulce', tipo: 'sandía' },
        { color: 'rojo', tamaño: 'mediano', peso: 'ligero', sabor: 'dulce', tipo: 'fresa' },
        { color: 'amarillo', tamaño: 'mediano', peso: 'pesado', sabor: 'dulce', tipo: 'mango' },
        { color: 'verde', tamaño: 'mediano', peso: 'ligero', sabor: 'ácido', tipo: 'limón' },
        { color: 'rojo', tamaño: 'grande', peso: 'pesado', sabor: 'ácido', tipo: 'granada' },
    ],
    attributes: ['color', 'tamaño', 'peso', 'sabor'],
    targetAttribute: 'tipo',
  },
  creditos: {
    data: [
      { moroso: 'si', antiguedad: '> 5', ingresos: '600-1200', trabajo: 'tiene', credito: 'rechazado' },
          { moroso: 'no', antiguedad: '< 1', ingresos: '600-1200', trabajo: 'tiene', credito: 'aceptado' },
          { moroso: 'si', antiguedad: '1-5', ingresos: '> 1200', trabajo: 'tiene', credito: 'rechazado' },
          { moroso: 'no', antiguedad: '> 5', ingresos: '> 1200', trabajo: 'no-tiene', credito: 'aceptado' },
          { moroso: 'no', antiguedad: '< 1', ingresos: '> 1200', trabajo: 'tiene', credito: 'aceptado' },
          { moroso: 'si', antiguedad: '1-5', ingresos: '600-1200', trabajo: 'tiene', credito: 'rechazado' },
          { moroso: 'no', antiguedad: '1-5', ingresos: '> 1200', trabajo: 'teien', credito: 'aceptado' },
          { moroso: 'no', antiguedad: '< 1', ingresos: '< 600', trabajo: 'tiene', credito: 'rechazado' },
          { moroso: 'no', antiguedad: '> 5', ingresos: '600-1200', trabajo: 'no-tiene', credito: 'rechazado' },
          { moroso: 'si', antiguedad: '1-5', ingresos: '< 600', trabajo: 'no-tiene', credito: 'rechazado' },
    ],
    attributes: ['moroso', 'antiguedad', 'ingresos', 'trabajo'],
    targetAttribute: 'credito',
  },
  // salud: {
  //   data: [
  //     { dieta: 'sana', ejercicio: 'regular', edad: 'joven', salud: 'saludable' },
  //     { dieta: 'mala', ejercicio: 'ninguno', edad: 'mayor', salud: 'en riesgo' },
  //     { dieta: 'sana', ejercicio: 'ocasional', edad: 'mayor', salud: 'en riesgo' },
  //     { dieta: 'mala', ejercicio: 'ocasional', edad: 'joven', salud: 'en riesgo' },
  //     { dieta: 'sana', ejercicio: 'regular', edad: 'mayor', salud: 'saludable' },
  //   ],
  //   attributes: ['dieta', 'ejercicio', 'edad'],
  //   targetAttribute: 'salud',
  // },
  pacientes: {
    data: [
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
    ],
    attributes: ['presion', 'urea', 'gota', 'hipotiroidismo'],
    targetAttribute: 'tratamiento',
  },
};

const App = () => {
  const [selectedDataset, setSelectedDataset] = useState('frutas'); //opcion de tabla que se carga por defecto 
  const [data, setData] = useState(datasets['frutas'].data);
  const [attributes, setAttributes] = useState(datasets['frutas'].attributes);
  const [targetAttribute, setTargetAttribute] = useState(datasets['frutas'].targetAttribute);

  const [decisionTree, setDecisionTree] = useState(null);
  const [initialGains, setInitialGains] = useState([]);
  const [entropyGlobal, setEntropyGlobal] = useState(0);

 
  const handleDatasetChange = (e) => {
    const selected = e.target.value;
    setSelectedDataset(selected);
    setData(datasets[selected].data);
    setAttributes(datasets[selected].attributes);
    setTargetAttribute(datasets[selected].targetAttribute);
    setDecisionTree(null); 
  };

  // Generar el árbol
  const handleGenerateTree = () => {
    const eGlobal = calculateEntropyGlobal(data, targetAttribute);
    setEntropyGlobal(eGlobal);

    const gains = calculateInitialGains(data, attributes, targetAttribute);
    setInitialGains(gains);

    const tree = buildTree(data, attributes, targetAttribute);
    setDecisionTree(tree);
  };

  return (
    <div>
      <h1>Árbol de Decisión</h1>

     
      <label htmlFor="dataset-selector">Selecciona una Tabla: </label>
      <select id="dataset-selector" value={selectedDataset} onChange={handleDatasetChange}>
        <option value="frutas">Frutas</option>
        <option value="creditos">Créditos</option>
        {/* <option value="salud">Salud</option> */}
        <option value="pacientes">Pacientes</option>
      </select>

      <button onClick={handleGenerateTree}>Generar Árbol</button>

      
      <h2>Tabla Inicial</h2>
      <table border="1" cellPadding="5" className="tree-table">
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(row).map((value, colIndex) => (
                <td key={colIndex}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

    
      <h2>Entropía Global (Eglobal)</h2>
      <p>
        Eglobal del atributo objetivo "<strong>{targetAttribute}</strong>" es:{' '}
        <strong>{entropyGlobal.toFixed(4)}</strong>
      </p>

     
      {initialGains.length > 0 && (
        <>
          <h2>Ganancias Iniciales</h2>
          <ul>
            {initialGains.map((gain, index) => (
              <li key={index}>
                Atributo: <strong>{gain.attribute}</strong>, Ganancia:{' '}
                <strong>{gain.gain.toFixed(4)}</strong>
              </li>
            ))}
          </ul>
        </>
      )}

      
      {decisionTree && <InteractiveTree tree={decisionTree} />}
    </div>
  );
};

export default App;