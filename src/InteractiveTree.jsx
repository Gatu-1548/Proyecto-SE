import React, { useState } from 'react';
import TreeVisualization from './TreeVisualization';
import './styles.css';

const InteractiveTree = ({ tree }) => {
  const [currentNode, setCurrentNode] = useState(tree); 
  const [filteredData, setFilteredData] = useState(tree.table || []);
  const [excludedAttributes, setExcludedAttributes] = useState(new Set()); 
  const [path, setPath] = useState([]); 
  const [showFullTree, setShowFullTree] = useState(false); 

  const handleBranchSelection = (branch) => {
    const nextNode = branch.subtree;

   
    setPath([...path, { label: currentNode.label, choice: branch.value }]);

    setExcludedAttributes(new Set([...excludedAttributes, currentNode.label]));

    
    if (branch.table) {
      setFilteredData(branch.table);
    }

   
    if (!nextNode.branches) {
      setCurrentNode(nextNode);
      setShowFullTree(true); 
    } else {
      
      setCurrentNode(nextNode);
    }
  };

  const handleReset = () => {
    setCurrentNode(tree); 
    setFilteredData(tree.table || []);
    setExcludedAttributes(new Set());
    setPath([]);
    setShowFullTree(false);
  };

  return (
    <div>
      <h2>Árbol de Decisión Interactivo</h2>

    
      {!showFullTree && (
        <>
          <div className="tree-node">
            <strong>{currentNode.label}</strong>
          </div>

          <div className="tree-table-container">
            <h3>Tabla Actual</h3>
            <table className="tree-table" border="1" cellPadding="5">
              <thead>
                <tr>
                  {filteredData.length > 0 &&
                    Object.keys(filteredData[0])
                      .filter((key) => !excludedAttributes.has(key)) 
                      .map((key) => <th key={key}>{key}</th>)}
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row, index) => (
                  <tr key={index}>
                    {Object.entries(row)
                      .filter(([key]) => !excludedAttributes.has(key)) 
                      .map(([key, value], colIndex) => (
                        <td key={colIndex}>{value}</td>
                      ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        
          <div className="tree-branches">
            {currentNode.branches?.map((branch, index) => (
              <button
                key={index}
                onClick={() => handleBranchSelection(branch)}
                className="tree-button"
              >
                {branch.value}
              </button>
            ))}
          </div>
        </>
      )}

      
      {showFullTree && (
  <div>
    <h3>Decisión Final: {currentNode.label}</h3>
    <h2>Árbol Completo</h2>
    <TreeVisualization node={tree} excludedAttributes={new Set()} /> 
  </div>
)}
     
      <h3>Historial de Caminos Tomados:</h3>
      <ul>
        {path.map((step, index) => (
          <li key={index}>
            <strong>{step.label}</strong> → {step.choice}
          </li>
        ))}
      </ul>

     
      <button onClick={handleReset} className="reset-button">
        Reiniciar Árbol
      </button>
    </div>
  );
};

export default InteractiveTree;