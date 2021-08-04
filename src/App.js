import logo from "./logo.svg";
import "./App.css";
import "./normalize.css";
import { ReactComponent as Logo } from "./logo.svg";
import styled from "styled-components";

import Search from "./Component/Search";
import { useState, useEffect } from "react";
import { woeidGet, weatherGet } from "./utils/api";
import Panel from "./Component/Panel";
import ForecastPanel from "./Component/ForecastPanel";
import weatherImage from "./images/weather.jpg";

const ForecastContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const PageContainer = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),
    url(${weatherImage});
  background-size: cover;
  background-position: 50% 50%;
  padding: 50px 20px;
  position: relative;
  min-height: calc(100vh);
`;

const AppContainer = styled.div`
  max-width: 1024px;
  width: 90%;
  margin: 0 auto;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: white;
  text-align: left;
`;

const SubTitle = styled.p`
  text-align: left;
  color: white;
  margin: 0;
`;

function App() {
  const [woeid, setWoeid] = useState();
  const [weatherData, setWeatherData] = useState([]);
  const [weatherPanel, setWeatherPanel] = useState([]);
  const [city, setCity] = useState("");

  console.log(weatherData);
  console.log(weatherPanel);

  if (!weatherData) {
    return "isLoading";
  }

  return (
    <div className="App">
      <PageContainer>
        <AppContainer>
          <Title>Weather Forecaster</Title>
          <SubTitle> Get the weather forecast for city worldwide.</SubTitle>
          <Search
            setWoeid={setWoeid}
            setWeatherData={setWeatherData}
            setWeatherPanel={setWeatherPanel}
            setCity={setCity}
          />
          <Panel
            weatherData={weatherData.consolidated_weather}
            weatherPanel={weatherPanel}
            city={city}
          />
          <ForecastContainer>
            {weatherData.length !== 0 &&
              weatherData.consolidated_weather.map((item, index) => {
                return (
                  <ForecastPanel
                    item={item}
                    index={index}
                    setWeatherPanel={setWeatherPanel}
                  />
                );
              })}
          </ForecastContainer>
        </AppContainer>
      </PageContainer>
    </div>
  );
}

export default App;
