import { React, useState } from "react";
import { ReactComponent as DownArrow } from "../../assets/svgs/downArrow.svg";
import "./CustomSelect.scss";

function CustomSelect({ selectOption, defaultOption }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="customSelect">
      <div className="selectedOption" onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : defaultOption}
        <span className="toggleArrow">
          <DownArrow />
        </span>
      </div>
      {isDropdownOpen && (
        <ul className="dropdownMenu">
          {selectOption.map((option) => (
            <li
              key={option.value}
              className="option"
              onClick={() => handleOptionSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomSelect;
