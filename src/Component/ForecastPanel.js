import styled from "styled-components";

const Container = styled.div`
  width: 150px;
  height: 150px;
  background: rgba(227, 227, 227, 0.5);
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 10px;
  transition: 0.2s;
  @media (max-width: 1200px) {
    width: 100%;
    height: 70px;
    margin-top: 10px;
  }
  &:hover {
    background-color: rgba(227, 227, 227, 0.7);
    transform: scale(1.03);
  }
`;

const Field = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const InfoField = styled.div`
  text-align: left;
`;
const Date = styled.div`
  font-size: 24px;
  font-weight: lighter;
`;
const Temp = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const ImageContainer = styled.div`
  width: 50px;
  height: 50px;
`;
const Img = styled.img`
  width: 100%;
`;

export default function ForecastPanel({ item, setWeatherPanel }) {
  const abbr = item.weather_state_abbr;
  const currentTemp = item.the_temp.toFixed(0);
  const dateStr = item.applicable_date.replaceAll("-", "/").slice(5, 10);

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
