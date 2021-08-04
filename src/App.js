import "./App.css";
import "./normalize.css";
import styled from "styled-components";

import Search from "./Component/Search";
import { useState } from "react";
import Panel from "./Component/Panel";
import ForecastPanel from "./Component/ForecastPanel";
import weatherImage from "./images/weather.jpg";
import ReactLoading from "react-loading";

const ForecastContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
  color: white;
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
const Mask = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(227, 227, 227, 0.5);
  z-index: 3;
`;
const CenterLoading = styled(ReactLoading)`
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const ErrorMsg = styled.div`
  text-align: left;
`;
function App() {
  const [woeid, setWoeid] = useState();
  const [weatherData, setWeatherData] = useState([]);
  const [weatherPanel, setWeatherPanel] = useState([]);
  const [city, setCity] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  return (
    <div className="App">
      {isSearching ? (
        <Mask>
          <CenterLoading type={"spin"} />
        </Mask>
      ) : (
        ""
      )}
      <PageContainer>
        <AppContainer>
          <Title>Weather Forecaster</Title>
          <SubTitle> Get the weather forecast for city worldwide.</SubTitle>
          <Search
            setWoeid={setWoeid}
            setWeatherData={setWeatherData}
            setWeatherPanel={setWeatherPanel}
            setCity={setCity}
            setIsSearching={setIsSearching}
          />
          {woeid === 0 ? (
            <ErrorMsg>
              <h1>Oops, city not found</h1>
              <h3>
                please make sure the city spelling is correct and try again.
              </h3>
            </ErrorMsg>
          ) : (
            <Panel
              setIsSearching={setIsSearching}
              weatherData={weatherData.consolidated_weather}
              weatherPanel={weatherPanel}
              city={city}
            />
          )}

          <ForecastContainer>
            {weatherData.length !== 0 &&
              weatherData.consolidated_weather.map((item, index) => {
                return (
                  <ForecastPanel
                    key={index}
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
