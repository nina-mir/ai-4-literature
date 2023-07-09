import { useState } from "react";
import Select from "react-select";
import "./Selection.css";
import { Button } from "react-bootstrap";

const Selection = () => {
  const options = [
    {
      label: "Geography",
      options: [
        { value: "Button 1", label: "Button 1" },
        { value: "Button 2", label: "Button 2" },
        { value: "Button 3", label: "Button 3" },
        { value: "Button 4", label: "Button 4" },
      ],
    },
    {
      label: "Genre",
      options: [
        { value: "Button A", label: "Button A" },
        { value: "Button B", label: "Button B" },
        { value: "Button C", label: "Button C" },
        { value: "Button D", label: "Button D" },
      ],
    },
    {
      label: "Journals",
      options: [
        { value: "Button X", label: "Button X" },
        { value: "Button Y", label: "Button Y" },
        { value: "Button Z", label: "Button Z" },
        { value: "Button W", label: "Button W" },
      ],
    },
  ];

  const [selectedOptions, setSelectedOptions] = useState<any>({});

  const handleOptionChange = (selectedOption: any, selector: string) => {
    setSelectedOptions((prevSelectedOptions: any) => ({
      ...prevSelectedOptions,
      [selector]: selectedOption,
    }));
  };

  return (
    <div className="selectionContainer">
      <h6>Choose from the following categories:</h6>
      <div className="selectorsContainer">
        {options.map((optionGroup, index) => (
          <div key={index} className="selector">
            <h6>{optionGroup.label}</h6>
            <Select
              options={optionGroup.options}
              value={selectedOptions[`selector-${index}`]}
              onChange={(selectedOption) =>
                handleOptionChange(selectedOption, `selector-${index}`)
              }
              isClearable
              isSearchable
              placeholder={`Select ${optionGroup.label}`}
            />
          </div>
        ))}
      </div>
      <Button variant="primary">Submit</Button>
    </div>
  );
};

export default Selection;
