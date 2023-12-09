import React, { useState } from "react";

//TEMPERATURE CONVERSION COMPONENT_________________________________________________________________
export default function WeatherTemperature(props) {
  //STATES_________________________________________________________________
  const [unit, setUnit] = useState("celsius");

  //EVENTS_________________________________________________________________
  function displayFahrenheit(e) {
    e.preventDefault();
    setUnit("fahrenheit");
  }

  function displayCelsius(e) {
    e.preventDefault();
    setUnit("celsius");
  }

  //FAHRENHEIT CONVERSION_________________________________________________________________
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  //CONDITIONALS_________________________________________________________________
  if (unit === "celsius") {
    return (
      <div className="weatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={displayFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="weatherTemperature">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={displayCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
