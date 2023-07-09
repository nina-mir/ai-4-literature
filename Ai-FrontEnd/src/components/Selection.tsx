import { useState } from "react";
import Select from "react-select";
import "./Selection.css";
import { Button } from "react-bootstrap";

const Selection = () => {
  const options = [
    {
      label: "Mood",
      options: [
        { value: "Aflutter", label: "Aflutter" },
        { value: "Aloof", label: "Aloof" },
        { value: "Amusement", label: "Amusement" },
        { value: "Angry", label: "Angry" },
        { value: "Antsy", label: "Antsy" },
        { value: "Avid", label: "Avid" },
        { value: "Awe", label: "Awe" },
        { value: "Bitter", label: "Bitter" },
        { value: "Blank", label: "Blank" },
        { value: "Blue", label: "Blue" },
        { value: "Calm", label: "Calm" },
        { value: "Cantankerous", label: "Cantankerous" },
        { value: "Capricious", label: "Capricious" },
        { value: "Cheerful", label: "Cheerful" },
        { value: "Chuffed", label: "Chuffed" },
        { value: "Colorless", label: "Colorless" },
        { value: "Covetous", label: "Covetous" },
        { value: "Crabby", label: "Crabby" },
        { value: "Cranky", label: "Cranky" },
        { value: "Craving", label: "Craving" },
        { value: "Cross", label: "Cross" },
        { value: "Deflated", label: "Deflated" },
        { value: "Dejected", label: "Dejected" },
        { value: "Depressed", label: "Depressed" },
        { value: "Destitute", label: "Destitute" },
        { value: "Devoid", label: "Devoid" },
        { value: "Devouring", label: "Devouring" },
        { value: "Disheartening", label: "Disheartening" },
        { value: "Dispiriting", label: "Dispiriting" },
        { value: "Distant", label: "Distant" },
        { value: "Dither", label: "Dither" },
        { value: "Drained", label: "Drained" },
        { value: "Dyspeptic", label: "Dyspeptic" },
      ],
    },
    {
      label: "Mood 2",
      options: [
        { value: "Emotional", label: "Emotional" },
        { value: "Enthused", label: "Enthused" },
        { value: "Erratic", label: "Erratic" },
        { value: "Euphoric", label: "Euphoric" },
        { value: "Excited", label: "Excited" },
        { value: "Exhausted", label: "Exhausted" },
        { value: "Famished", label: "Famished" },
        { value: "Fearful", label: "Fearful" },
        { value: "Fiery", label: "Fiery" },
        { value: "Gloomy", label: "Gloomy" },
        { value: "Gorged", label: "Gorged" },
        { value: "Gratitude", label: "Gratitude" },
        { value: "Grumpy", label: "Grumpy" },
        { value: "Grim", label: "Grim" },
        { value: "Hesitant", label: "Hesitant" },
        { value: "Hollow", label: "Hollow" },
        { value: "Hope", label: "Hope" },
        { value: "Humorous", label: "Humorous" },
        { value: "Idyllic", label: "Idyllic" },
        { value: "Inconsolable", label: "Inconsolable" },
        { value: "Insatiable", label: "Insatiable" },
        { value: "Interest", label: "Interest" },
        { value: "Irascible", label: "Irascible" },
        { value: "Jittery", label: "Jittery" },
        { value: "Jumpy", label: "Jumpy" },
        { value: "Lamentable", label: "Lamentable" },
        { value: "Lighthearted", label: "Lighthearted" },
        { value: "Livid", label: "Livid" },
        { value: "Lonely", label: "Lonely" },
        { value: "Love", label: "Love" },
      ],
    },
    {
      label: "Reading time",
      options: [
        { value: "5 minutes", label: "5 minutes" },
        { value: "10 minutes", label: "10 minutes" },
        { value: "15 minutes", label: "15 minutes" },
        { value: "15+ minutes", label: "15+ minutes" },
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
