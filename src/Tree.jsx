import React from 'react';

const Tree = ({ node }) => {
  if (!node.branches) {
    return <div>{node.label}</div>; 
  }

  return (
    <div>
      <strong>{node.label}</strong>
      <ul>
        {node.branches.map(branch => (
          <li key={branch.value}>
            {branch.value}: <Tree node={branch.subtree} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tree;