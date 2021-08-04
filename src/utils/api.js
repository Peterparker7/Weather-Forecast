const locationApi = "https://www.metaweather.com/api/location/search/?query=";

const weatherApi = "https://www.metaweather.com/api/location/";

const woeidGet = async (city) => {
  const response = await fetch(`${locationApi}` + city).then((res) => {
    // console.log(res.json());
    return res.json();
  });
  console.log(response);
  return response;
};

const weatherGet = async (id) => {
  const response = await fetch(`${weatherApi}` + id).then((res) => {
    return res.json();
  });
  console.log(response);
  return response;
};

export { woeidGet, weatherGet };
