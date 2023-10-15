import React, { useState } from 'react';
import axios from 'axios';

function MaterialSelectionForm() {
  const [selectedMaterials, setSelectedMaterials] = useState({
    cement: false,
    accBlocks: false,
    tmt: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleMaterialChange = (material) => {
    setSelectedMaterials((prevSelectedMaterials) => ({
      ...prevSelectedMaterials,
      [material]: !prevSelectedMaterials[material],
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitted(true);

    try {
      const response = await axios.post('https://your-api-endpoint.com/submit', selectedMaterials);
      console.log('Response from the API:', response.data);
      // Handle the response data as needed
    } catch (error) {
      console.error('Error making POST request:', error);
      // Handle errors appropriately
    }
  };

  return (
    <div>
      <h2>Material Selection</h2>
      <label>
        <input
          type="checkbox"
          checked={selectedMaterials.cement}
          onChange={() => handleMaterialChange('cement')}
        />
        Cement
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={selectedMaterials.accBlocks}
          onChange={() => handleMaterialChange('accBlocks')}
        />
        ACC Blocks
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={selectedMaterials.tmt}
          onChange={() => handleMaterialChange('tmt')}
        />
        TMT
      </label>
      <br />
      <button onClick={isSubmitted ? null : handleSubmit}>
        {isSubmitted ? 'Submitted' : 'Submit'}
      </button>
    </div>
  );
}

export default MaterialSelectionForm;
