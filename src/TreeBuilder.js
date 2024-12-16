import { calculateGain, calculateEntropy, imputeAllNulls } from './utils';

export function buildTree(data, attributes, targetAttribute, depth = 0) {
  // Imputar valores nulos antes de procesar el árbol
  const cleanedData = imputeAllNulls(data);
  console.log(cleanedData);
  if (cleanedData.every(row => row[targetAttribute] === cleanedData[0][targetAttribute])) {
    return { label: cleanedData[0][targetAttribute] }; // Hoja
  }

  if (attributes.length === 0) {
    return { label: "Indeciso" }; // Caso límite
  }

  const gains = attributes.map(attr => ({
    attribute: attr,
    gain: calculateGain(cleanedData, attr, targetAttribute),
  }));

  const bestAttribute = gains.reduce((max, curr) => (curr.gain > max.gain ? curr : max));
  const groups = cleanedData.reduce((acc, row) => {
    acc[row[bestAttribute.attribute]] = acc[row[bestAttribute.attribute]] || [];
    acc[row[bestAttribute.attribute]].push(row);
    return acc;
  }, {});

  return {
    label: bestAttribute.attribute,
    branches: Object.keys(groups).map(value => ({
      value,
      table: groups[value],
      subtree: buildTree(
        groups[value],
        attributes.filter(attr => attr !== bestAttribute.attribute),
        targetAttribute,
        depth + 1
      ),
    })),
  };
}

// Función para calcular las ganancias iniciales
export function calculateInitialGains(data, attributes, targetAttribute) {
  // Aplicar imputación antes de calcular las ganancias iniciales
  const cleanedData = imputeAllNulls(data);

  return attributes.map(attr => ({
    attribute: attr,
    gain: calculateGain(cleanedData, attr, targetAttribute),
  }));
}

// Función para calcular la Entropía Global
export function calculateEntropyGlobal(data, targetAttribute) {
  // Aplicar imputación antes de calcular la entropía global
  const cleanedData = imputeAllNulls(data);

  return calculateEntropy(cleanedData, targetAttribute);
}