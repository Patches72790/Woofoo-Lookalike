import React from 'react';
import { Styles } from '../style.ts';

const AddAField = ({
  type,
  title,
  addField,
}) => {

    const handleClick = () => {
      addField(type);
    }

    return (
        <div className="button" id="addFields" >
          <button onClick={handleClick} style={Styles.fieldButton}>{title}</button>
        </div>
    );
}

export default AddAField;
