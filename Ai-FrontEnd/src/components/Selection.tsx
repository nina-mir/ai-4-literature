import { useState } from "react";
import Select from "react-select";
import "./Selection.css";
import { Button } from "react-bootstrap";
import axios from "axios";

const Selection = ({ updateData }: { updateData: Function }) => {
  const options = [
    {
      label: "Mood",
      options: [
        { value: "Aflutter", label: "Aflutter" },
        { value: "Aloof", label: "Aloof" },
        { value: "Amused", label: "Amused" },
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
      isMulti: true, // Allow multiple selections
      maxSelections: 2, // Set the maximum number of selections
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
    setSelectedOptions((prevSelectedOptions: any) => {
      if (!selectedOption) {
        const updatedOptions = { ...prevSelectedOptions };
        delete updatedOptions[selector];
        return updatedOptions;
      }

      // Check if the maximum number of selections has been defined
      const maxSelections = options.find(
        (option) => option.isMulti
      )?.maxSelections;

      // Check if the maximum number of selections has been reached
      if (maxSelections && selectedOption.length > maxSelections) {
        return prevSelectedOptions; // Do not update the selected options
      }

      return {
        ...prevSelectedOptions,
        [selector]: selectedOption,
      };
    });
  };

  const handleFilterData = () => {
    const selectedMoods = selectedOptions?.["selector-0"] || [];
    const selectedReadingTime = selectedOptions?.["selector-1"]?.value || null;

    axios
      .get("https://test-hackathon-backend.onrender.com/data")
      .then((response) => {
        const filteredItems = response.data.data.filter((item: any) => {
          // Check if item's response includes all selected moods
          if (
            selectedMoods.length > 0 &&
            !selectedMoods.every((mood: any) =>
              item.response.includes(mood.value)
            )
          ) {
            return false;
          }

          // Check if item's time_2_read matches the selected reading time
          if (selectedReadingTime) {
            const timeToRead = parseInt(item.time_2_read, 10);

            if (selectedReadingTime === "5 minutes" && timeToRead >= 5) {
              return false;
            }

            if (
              selectedReadingTime === "10 minutes" &&
              (timeToRead <= 5 || timeToRead >= 10)
            ) {
              return false;
            }

            if (
              selectedReadingTime === "15 minutes" &&
              (timeToRead <= 10 || timeToRead >= 15)
            ) {
              return false;
            }

            if (selectedReadingTime === "15+ minutes" && timeToRead < 15) {
              return false;
            }
          }

          return true;
        });

        updateData(filteredItems);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  // Custom styles for the mood select container
  const moodSelectStyles = {
    control: (provided: any) => ({
      ...provided,
    }),
  };

  return (
    <div className="selectionContainer">
      <h6 className="selectionTitle">Choose from the following categories:</h6>
      <div className="selectorsContainer">
        {options.map((optionGroup, index) => (
          <div key={index} className="selector">
            <Select
              options={optionGroup.options}
              value={selectedOptions[`selector-${index}`]}
              onChange={(selectedOption) =>
                handleOptionChange(selectedOption, `selector-${index}`)
              }
              isClearable
              isSearchable
              placeholder={`Select ${optionGroup.label}`}
              isMulti={optionGroup.isMulti}
              styles={
                optionGroup.label === "Mood" ? moodSelectStyles : undefined
              } // Apply custom styles for the mood select container
            />
          </div>
        ))}
      </div>
      <Button onClick={handleFilterData} className="selectionBtn">
        Submit
      </Button>
    </div>
  );
};

export default Selection;
