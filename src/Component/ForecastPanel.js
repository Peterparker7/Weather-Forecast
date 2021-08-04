import styled from "styled-components";
import { ReactComponent as Drop } from "../images/droplet-fill.svg";

const DropIcon = styled(Drop)``;

const Container = styled.div`
  width: 150px;
  height: 150px;
  margin-top: 20px;

  background: rgba(227, 227, 227, 0.3);
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 10px;
  transition: 0.2s;
  color: white;

  @media (max-width: 1200px) {
    width: 100%;
    height: 70px;
    margin-top: 10px;
    padding: 10px 30px;
  }
  &:hover {
    background-color: rgba(247, 247, 247, 0.9);
    transform: scale(1.03);
    color: black;
    ${DropIcon} {
      fill: black;
    }
  }
`;

const Field = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1200px) {
    justify-content: space-between;
  }
`;
const InfoField = styled.div`
  text-align: left;
  @media (max-width: 1200px) {
    display: flex;
    width: 50%;
  }
  @media (max-width: 500px) {
    width: 70%;
  }
`;
const Date = styled.div`
  font-size: 24px;
  font-weight: lighter;
  @media (max-width: 1200px) {
  }
`;
const Temp = styled.div`
  font-size: 24px;
  font-weight: bold;
  @media (max-width: 1200px) {
    width: 50%;
    margin: 0 auto;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  width: 50px;
  height: 50px;
  @media (max-width: 1200px) {
    margin-right: 20px;
  }
`;
const Img = styled.img`
  width: 100%;
`;

const Humidity = styled.div`
  display: none;
  @media (max-width: 1200px) {
    display: flex;
    align-items: center;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;
const SmallIcon = styled.div`
  width: 24px;
  height: 24px;
  margin: 0 10px;
  line-height: 24px;
  img {
    width: 100%;
  }
`;
const Item = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export default function ForecastPanel({ item, setWeatherPanel }) {
  const abbr = item.weather_state_abbr;
  const currentTemp = item.the_temp.toFixed(0);
  const dateStr = item.applicable_date.replaceAll("-", "/").slice(5, 10);
  let humidity = item.humidity;

  const clickHandler = () => {
    setWeatherPanel(item);
  };

  return (
    <Container
      onClick={() => {
        clickHandler();
      }}
    >
      <Field>
        <InfoField>
          <Date>{dateStr}</Date>
          <Temp>{currentTemp} °C</Temp>
        </InfoField>
        <Humidity>
          <SmallIcon>
            <DropIcon></DropIcon>
          </SmallIcon>
          <Item>Humidity：{humidity}%</Item>
        </Humidity>
        <ImageContainer>
          <Img
            src={`https://www.metaweather.com/static/img/weather/png/${abbr}.png`}
            alt="icon"
          />
        </ImageContainer>
      </Field>
    </Container>
  );
}
