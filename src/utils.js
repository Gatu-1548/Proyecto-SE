export function calculateEntropy(data, targetAttribute) {
    const total = data.length;
    const counts = data.reduce((acc, row) => {
      acc[row[targetAttribute]] = (acc[row[targetAttribute]] || 0) + 1;
      return acc;
    }, {});
  
    return Object.values(counts).reduce((entropy, count) => {
      const p = count / total;
      return entropy - p * Math.log2(p);
    }, 0);
  }
  
  export function calculateGain(data, attribute, targetAttribute) {
    const total = data.length;
    const groups = data.reduce((acc, row) => {
      acc[row[attribute]] = acc[row[attribute]] || [];
      acc[row[attribute]].push(row);
      return acc;
    }, {});
  
    const weightedEntropy = Object.values(groups).reduce((totalEntropy, group) => {
      const groupEntropy = calculateEntropy(group, targetAttribute);
      return totalEntropy + (group.length / total) * groupEntropy;
    }, 0);
  
    const overallEntropy = calculateEntropy(data, targetAttribute);
    return overallEntropy - weightedEntropy;
  }

  export function imputeAllNulls(data) {
    // Identificar todas las columnas en el dataset
    const attributes = Object.keys(data[0]);
  
    // Imputar valores nulos para cada columna
    return attributes.reduce((updatedData, attribute) => {
      // Calcular el modo para cada columna
      const mode = getMode(updatedData, attribute);
  
      // Reemplazar los valores nulos en la columna actual
      return updatedData.map(row => ({
        ...row,
        [attribute]: row[attribute] === null ? mode : row[attribute],
      }));
    }, data);
  }

  export function getMode(data, attribute) {
    const counts = data.reduce((acc, row) => {
      if (row[attribute] !== null) {
        acc[row[attribute]] = (acc[row[attribute]] || 0) + 1;
      }
      return acc;
    }, {});
  
    // Obtener el atributo con mayor frecuencia
    return Object.keys(counts).reduce((a, b) => (counts[a] > counts[b] ? a : b));
  }