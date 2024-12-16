import React, { useState } from 'react';
import data from './data';
import { buildTree, calculateInitialGains, calculateEntropyGlobal } from './TreeBuilder';
import InteractiveTree from './InteractiveTree';
import './styles.css';

const App = () => {
  const [decisionTree, setDecisionTree] = useState(null);
  const [initialGains, setInitialGains] = useState([]);
  const [entropyGlobal, setEntropyGlobal] = useState(0);
  
  const attributes = ['moroso', 'antiguedad', 'ingresos', 'trabajo'];
  const targetAttribute = 'credito';

// datos de frutas  
// const attributes = ['color', 'tamaño', 'peso', 'sabor'];
// const targetAttribute = 'tipo';

// 
// datos de Credito
// const attributes = ['ingresos', 'deuda', 'empleo'];
// const targetAttribute = 'credito';
// 
// 
// datos de salud
// const attributes = ['dieta', 'ejercicio', 'edad'];
// const targetAttribute = 'salud';
// 
// 
// 
// datos de vehiculos
// const attributes = ['tipo', 'puertas', 'combustible'];
// const targetAttribute = 'vehiculo';

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