import { useState, useEffect } from "react";
import { woeidGet, weatherGet } from "../utils/api";
import styled from "styled-components";
import searchIcon from "../images/search.svg";

import Panel from "./Panel";

const SearchBar = styled.div`
  width: 100%;
  display: flex;
  margin: 20px 0;
`;
const SearchInput = styled.input`
  width: 100%;
  padding: 5px;
  padding-left: 10px;
  background: rgba(227, 227, 227, 0.6);
  border: none;
  border-radius: 4px;
  margin-right: 5px;
  height: 40px;
  &:focus {
    outline: none;
  }
`;
const SearchButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: #e3e3e3;
  border: none;
  border-radius: 4px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #f3f3f3;
    transform: translateY(-2px);
  }
`;
const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
`;
export default function Search({
  setWoeid,
  setWeatherData,
  setWeatherPanel,
  setCity,
}) {
  //   const [woeid, setWoeid] = useState();
  //   const [weatherData, setWeatherData] = useState([]);
  const [input, setInput] = useState();

  async function getCityId(inputCity) {
    const data = await woeidGet(inputCity);
    console.log(data[0].woeid);
    setWoeid(data[0].woeid);
    return data;
  }
  async function getWeatherInfo(id) {
    const data = await weatherGet(id);
    console.log(data);
    return data;
  }
  //   const data = woeidGet("taipei");
  //   console.log(data);

  const inputHandler = (e) => {
    setInput(e);
  };

  const searchHandler = async () => {
    const cityInfo = await getCityId(input);
    const data = await getWeatherInfo(cityInfo[0].woeid);

    console.log(cityInfo);
    console.log(data);
    setWeatherData(data);
    setWeatherPanel(data.consolidated_weather[0]);
    setCity(data.title);
  };

  useEffect(() => {
    // getCityId();
  }, []);

  return (
    <SearchBar>
      <SearchInput
        onChange={(e) => {
          inputHandler(e.target.value);
        }}
        placeholder="Enter City"
      />
      <SearchButton
        onClick={() => {
          searchHandler();
        }}
      >
        <SearchIcon src={searchIcon} />
      </SearchButton>
      {/* <div>{weatherData.title}</div> */}
      {/* <img src="https://www.metaweather.com/static/img/weather/png/hr.png" /> */}
      <Panel />
    </SearchBar>
  );
}
