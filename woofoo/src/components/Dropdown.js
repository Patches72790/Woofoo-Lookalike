import React from 'react';

const Dropdown = ({
  removeField,
  index,
  }) => {
    const handleClick = () => {
      removeField(index);
    }

    return (
        <div> 
          <p>Select A Choice</p>
          <select disabled={true}>
          </select>
          <button onClick={handleClick}>Remove me</button>
        </div>
    );
}

export default Dropdown;