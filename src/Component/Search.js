import { useState } from "react";
import { woeidGet, weatherGet } from "../utils/api";
import styled from "styled-components";
import searchIcon from "../images/search.svg";

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
  margin-right: 10px;
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
  setIsSearching,
}) {
  const [input, setInput] = useState();

  async function getCityId(inputCity) {
    const data = await woeidGet(inputCity);
    if (data.length === 0) {
      setWoeid(0);
      setWeatherData([]);
      setWeatherPanel([]);
      return;
    } else {
      setWoeid(data[0].woeid);
      return data;
    }
  }
  async function getWeatherInfo(id) {
    const data = await weatherGet(id);
    return data;
  }

  const inputHandler = (e) => {
    setInput(e);
  };

  const searchHandler = async () => {
    setIsSearching(true);

    const cityInfo = await getCityId(input);

    if (cityInfo) {
      const data = await getWeatherInfo(cityInfo[0].woeid);
      setWeatherData(data);
      setWeatherPanel(data.consolidated_weather[0]);
      setCity(data.title);
    }

    setIsSearching(false);
  };

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
    </SearchBar>
  );
}
