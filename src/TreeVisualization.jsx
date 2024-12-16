import React from 'react';
import './styles.css';

const TreeVisualization = ({ node, excludedAttributes }) => {
  if (!node.branches) {
    // Nodo hoja
    return (
      <div className="tree-node">
        <strong>Crédito = {node.label}</strong>
      </div>
    );
  }

  return (
    <div className="tree-container">
      {/* Nodo principal */}
      <div className="tree-node">
        <strong>{node.label}</strong>
      </div>

      {/* Ramas */}
      <div className="tree-branches">
        {/* Conexión con las ramas */}
        <div className="tree-branch-connector">
          <div className="tree-branch-horizontal-line"></div>
        </div>

        {node.branches.map((branch, index) => (
          <div key={index} className="tree-branch-item">
            {/* Valor de la rama */}
            <div className="tree-branch-label">{branch.value}</div>

            {/* Tabla intermedia */}
            {branch.table && (
              <div className="tree-table-container">
                <table className="tree-table" border="1" cellPadding="5">
                  <thead>
                    <tr>
                      {Object.keys(branch.table[0])
                        .filter((key) => !excludedAttributes.has(key))
                        .map((key) => (
                          <th key={key}>{key}</th>
                        ))}
                    </tr>
                  </thead>
                  <tbody>
                    {branch.table.map((row, rowIndex) => (
                      <tr key={rowIndex}>
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
            )}

            {/* Subárbol */}
            <TreeVisualization
              node={branch.subtree}
              excludedAttributes={new Set([...excludedAttributes, node.label])}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreeVisualization;