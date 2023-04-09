import React, { useState } from "react";

interface AutocompleteProps {
  suggestions: string[];
}

const Autocomplete: React.FC<AutocompleteProps> = ({ suggestions }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    setFilteredSuggestions(
      suggestions.filter((suggestion) =>
        suggestion.toLowerCase().startsWith(value.toLowerCase())
      )
    );
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setFilteredSuggestions([]);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <ul>
        {filteredSuggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Autocomplete;
