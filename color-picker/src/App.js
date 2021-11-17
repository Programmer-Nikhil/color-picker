import "./App.css";
import SearchInput from "./Search/SearchInput";
import SearchButton from "./Search/SearchButton";
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [nearestColor, setNearestColor] = useState([]);

  const [colorText, setColorText] = useState("");
  const [colors, setNearbyColors] = useState([]);

  const buttonText = "Search";
  const searchPlaceholder = "Please enter 6 digit Hex value without #";
  const searchByColorNamePlaceholder = "Please enter color name";

  // Check if the entered string is hex or not
  const isValidHex = (hex) => /^([A-Fa-f0-9]{3,4}){1,2}$/.test(hex);

  // Handle hex value change
  const handleTextChange = (e) => {
    const value = e.target.value;
    if (value.length > 0) {
      setInputText(value.trim());
    } else {
      setInputText("");
      setNearestColor([]);
    }
  };

  // Search for the provided hex string without #
  // User can provide multiple hex color by putting comma between two hex strings
  const handleClick = () => {
    const inputArray = inputText.split(",");
    const validColors = inputArray.filter((item) => {
      if (!isValidHex(item)) {
        console.log("Provided value is not hex", item);
      }
      return item.length <= 6 && isValidHex(item);
    });
    const searchColors = validColors.toString();
    if (searchColors.length > 0) {
      fetch(
        `https://api.color.pizza/v1/?values=${searchColors}&noduplicates=true`
      )
        .then((response) => response.json())
        .then((data) => {
          let colorArray = [];
          data.colors.forEach((item) => {
            let colorObj = {
              name: item.name,
              hex: item.hex,
            };
            colorArray.push(colorObj);
          });
          setNearestColor(colorArray);
        });
    }
  };

  // Render hex color items
  const listItems = nearestColor.map((item, index) => (
    <div
      style={{ backgroundColor: item.hex }}
      key={index}
      className="list-item"
    >
      <li>
        {item.name} {item.hex}
      </li>
    </div>
  ));

  // Check color text changes
  const handleColorChange = (e) => {
    const value = e.target.value;
    if (value.length > 0) {
      setColorText(value.trim());
    } else {
      setColorText("");
      setNearbyColors([]);
    }
  };

  // Search for the color name
  const searchColorNames = () => {
    const inputArray = colorText.split(",");
    const searchColors = inputArray.toString();
    if (searchColors.length > 0) {
      fetch(
        `https://api.color.pizza/v1/names/?name=${searchColors}&noduplicates=true`
      )
        .then((response) => response.json())
        .then((data) => {
          let colorArray = [];
          data.colors.forEach((item) => {
            let colorObj = {
              name: item.name,
              hex: item.hex,
            };
            colorArray.push(colorObj);
          });
          setNearbyColors(colorArray);
        });
    }
  };

  // Render color name items
  const colorbyTextItems = colors.map((item, index) => (
    <div
      style={{ backgroundColor: item.hex }}
      key={index}
      className="list-item"
    >
      <li>
        {item.name} {item.hex}
      </li>
    </div>
  ));

  return (
    <div className="App">
      <header className="App-header">
        {/* Hex Color search container */}
        <div className="form-container">
          <SearchInput
            handleTextChange={(e) => handleTextChange(e)}
            searchTxt={inputText}
            placeholderTxt={searchPlaceholder}
            className="search-bar"
          />
          <SearchButton
            btntext={buttonText}
            handleClick={() => handleClick()}
            className="search-btn"
            buttonStyle="search-btn"
          />
        </div>
        {/* Hex color search results */}
        <div className="list-container">
          <ul className="lists">{listItems}</ul>
        </div>
        {/* Color name search container */}
        <div className="form-container">
          <SearchInput
            handleTextChange={(e) => handleColorChange(e)}
            searchTxt={colorText}
            placeholderTxt={searchByColorNamePlaceholder}
            className="search-bar"
          />
          <SearchButton
            btntext={buttonText}
            handleClick={() => searchColorNames()}
            className="search-btn"
            buttonStyle="search-btn"
          />
        </div>
        {/* Color name searched results */}
        <div className="list-container">
          <ul className="lists">{colorbyTextItems}</ul>
        </div>
      </header>
    </div>
  );
}

export default App;
