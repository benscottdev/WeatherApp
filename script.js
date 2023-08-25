let userInput = document.getElementById("input-city");
let searchBtn = document.getElementById("search");

let city = document.getElementById("city");
let description = document.getElementById("description");

let temp = document.getElementById("temp");
let conditions = document.getElementById("conditions");
let sunrise = document.getElementById("sunrise");
let sunset = document.getElementById("sunset");
let windSpeed = document.getElementById("wind-speed");

const fetchData = async () => {
  let inputValue = userInput.value;

  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${inputValue}?unitGroup=metric&key=D3W4TCWFT9GHHFKEQN8XQPGU7&contentType=json`;
  await fetch(url)
    .then((data) => data.json())
    .then((item) => {
      console.log(item);
      
      city.innerHTML = `${item.resolvedAddress}`.toUpperCase();
      description.innerHTML = `${item.description}`;
      temp.innerHTML = `${item.currentConditions.temp} °C`;
      conditions.innerHTML = `${item.currentConditions.conditions}`;
      sunrise.innerHTML = `${item.currentConditions.sunrise} AM`;
      sunset.innerHTML = `${item.currentConditions.sunset} PM`;
      windSpeed.innerHTML = `${item.currentConditions.windspeed}KPH`;
    )};
};
