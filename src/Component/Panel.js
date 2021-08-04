import styled from "styled-components";
import { useState, useEffect } from "react";
import { weatherGet } from "../utils/api";
import { keyframes } from "styled-components";
import Drop from "../images/droplet-fill.svg";
import Thermometer from "../images/thermometer-half.svg";
import ReactLoading from "react-loading";

const Fillup = keyframes`
0%{
    stroke-dasharray:  0 100;

}
100%{
    stroke-dasharray:  humidity 100;
}
  `;

const PanelContainer = styled.div`
  background: rgba(227, 227, 227, 0.3);
  display: flex;
  border-radius: 8px;
  padding: 30px;
  height: 300px;
`;
const BasicField = styled.div`
  width: 50%;
  text-align: left;
`;

const City = styled.div`
  font-size: 48px;
  font-weight: 600;
  color: white;
`;

const ContentField = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  @media (max-width: 767px) {
    width: 90%;
    padding: 20px 0px;
    /* flex-direction: column-reverse; */
  }
`;
const TextField = styled.div``;
const Date = styled.div`
  font-size: 24px;
  font-weight: 300;
  color: white;
`;
const Temp = styled.div`
  width: 120px;
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  color: white;
  @media (max-width: 767px) {
    width: 80px;
    font-size: 32px;
    font-weight: 700;

    /* flex-direction: column-reverse; */
  }
`;
const WeatherState = styled.div`
  font-size: 24px;
  font-weight: 300;
  color: white;
`;
const WeatherIcon = styled.div``;
const IconContainer = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 20px;
  @media (max-width: 650px) {
    width: 80px;
  }
`;
const Img = styled.img`
  width: 100%;
`;
const Item = styled.div`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const ChartField = styled.div`
  width: 50%;
  /* margin: 0 auto; */
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const TemperatureContainer = styled.div`
  padding-bottom: 70px;
`;
const TemperatureChart = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
`;
const HumidityChart = styled.div``;

const SVG = styled.svg`
  width: 120px;
  height: 120px;
  transform: rotate(-90deg);
  border-radius: 50%;

  circle.circle1 {
    fill: rgba(227, 227, 227, 0.2);
    stroke: #6495ed;
    stroke-width: 32;

    /*
   * 第一個數字：虛線長度；
   * 第二個數字：虛線彼此間的間距
   */
    /* stroke-dasharray: 71 100; */
    stroke-dasharray: ${(props) => `${props.humidity} 100`};
    animation: ${Fillup} 2s linear 1;
  }
`;

const SVGRect = styled.svg`
  /* width: 100px;

  height: 100px; */
  position: relative;
  border-bottom: 1px solid #000;
`;

const MaxRect = styled.rect`
  /* y: ${(props) => `${100 - props.maxTemp * 2}`}; */
  height: ${(props) => `${props.maxTemp * 2}px`};
  fill: lightsalmon;
`;
const MinRect = styled.rect`
  /* height: -30px; */
  height: ${(props) => `${props.minTemp * 2}px`};
  fill: #80c7ff;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;
const SmallIcon = styled.div`
  width: 24px;
  height: 24px;
  margin: 0 10px;
  img {
    width: 100%;
  }
`;

export default function Panel({ weatherPanel, city, setIsSearching }) {
  if (!city || !weatherPanel || weatherPanel.length === 0) {
    return null;
    // return <ReactLoading />;
  }

  const todayHTML = () => {
    let abbr = weatherPanel.weather_state_abbr;
    let maxTemp = weatherPanel.max_temp.toFixed(0);
    let minTemp = weatherPanel.min_temp.toFixed(0);
    let currentTemp = weatherPanel.the_temp.toFixed(0);
    let humidity = weatherPanel.humidity;
    const dateStr = weatherPanel.applicable_date.replaceAll("-", "/");

    return (
      <PanelContainer>
        <BasicField>
          <City>{city}</City>
          <Date>{dateStr}</Date>
          <WeatherState>{weatherPanel.weather_state_name}</WeatherState>

          <ContentField>
            <WeatherIcon>
              <IconContainer>
                <Img
                  src={`https://www.metaweather.com/static/img/weather/png/${abbr}.png`}
                  alt="icon"
                />
              </IconContainer>
            </WeatherIcon>
            <TextField>
              <Temp>{currentTemp} °C</Temp>
            </TextField>
          </ContentField>
        </BasicField>

        <ChartField>
          <TemperatureContainer>
            <TemperatureChart>
              <SVGRect viewBox="0 0 95 100">
                <MaxRect
                  className="max"
                  x="25"
                  y={`${100 - maxTemp * 2}`}
                  width="20"
                  maxTemp={maxTemp}
                ></MaxRect>
                <text
                  className="value-label"
                  x="29"
                  y={111 - maxTemp * 2}
                  fill="#fff"
                  fontSize="10"
                  fontWeight="bold"
                >
                  {maxTemp}
                </text>
                <MinRect
                  className="min"
                  x="45"
                  y={100 - minTemp * 2}
                  width="20"
                  minTemp={minTemp}
                ></MinRect>
                <text
                  className="value-label"
                  x="49"
                  y={111 - minTemp * 2}
                  fill="#fff"
                  fontSize="10"
                  fontWeight="bold"
                >
                  {minTemp}
                </text>
              </SVGRect>
              <Title style={{ marginTop: "7px" }}>
                <SmallIcon>
                  <img src={Thermometer} alt="" />
                </SmallIcon>
                <Item>
                  {maxTemp} °C / {minTemp} °C
                </Item>
              </Title>
            </TemperatureChart>
          </TemperatureContainer>
          <HumidityChart>
            <SVG viewBox="0 0 32 32" humidity={humidity}>
              <circle className="circle1" r="16" cx="16" cy="16"></circle>
            </SVG>
            <Title>
              <SmallIcon>
                <img src={Drop} alt="" />
              </SmallIcon>
              <Item>{humidity}%</Item>
            </Title>
          </HumidityChart>
        </ChartField>
      </PanelContainer>
    );
  };

  return (
    <>
      <div>{todayHTML()}</div>
      {/* <div>{forecastHTML()}</div> */}
      {/* <div>{weatherData[0].id}</div> */}
    </>
  );
}
