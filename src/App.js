import { useState } from "react";
import "./App.css";
import Slider from "./components/Slider";
import Switch from "./components/Switch";
import Chart from "./components/Chart";
import mmdata from "./data/mm_rain.json";
import percentdata from "./data/percent_rain.json";

export default function App() {
  const [switchValue, setSwitchValue] = useState("mm");
  const [slider, setSlider] = useState({
    YEAR: mmdata[0].YEAR,
    min: mmdata[0].YEAR,
    max: mmdata[mmdata.length - 1].YEAR
  });

  const slideChange = (e) => {
    setSlider((prev) => {
      return { ...prev, YEAR: +e.target.value };
    });
  };

  const onSwitchHandler = (e) => {
    if (e.target.innerHTML === "mm") {
      setSlider({
        YEAR: mmdata[0].YEAR,
        min: mmdata[0].YEAR,
        max: mmdata[mmdata.length - 1].YEAR
      });
    } else {
      setSlider({
        YEAR: percentdata[0].YEAR,
        min: percentdata[0].YEAR,
        max: percentdata[percentdata.length - 1].YEAR
      });
    }
    setSwitchValue(e.target.innerHTML);
  };

  return (
    <div className="App">
      <Chart
        data={
          switchValue === "mm"
            ? Object.entries(
              mmdata[mmdata.findIndex((curr) => curr.YEAR === slider.YEAR)]
            )
              .map(([key, value]) => ({
                text: key,
                value: value
              }))
              .filter(({ text }) => text !== "YEAR")
            : Object.entries(
              percentdata[
              percentdata.findIndex((curr) => curr.YEAR === slider.YEAR)
              ]
            )
              .map(([key, value]) => ({
                text: key,
                value: value
              }))
              .filter(({ text }) => text !== "YEAR")
        }
        yLabel={switchValue}
      />
      <Switch value={switchValue} onSwitchHandler={onSwitchHandler} />
      <Slider
        value={slider.YEAR}
        min={slider.min}
        max={slider.max}
        onChangeHandler={slideChange}
      />
    </div>
  );
}
