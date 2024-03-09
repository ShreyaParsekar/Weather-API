const BASE_URL = 'https://goweather.herokuapp.com/weather';
const btn = document.querySelector("button");
const msg = document.querySelector(".msg");
const temp = document.querySelector(".card1");
const description = document.querySelector(".card2");
const Newforecast = document.querySelector(".card3");


let displayWeatherForecast = (fcast) => {
    Newforecast.innerHTML = ''; // Clear existing content
    fcast.forEach((val) => {
        let Neweather = `Day: ${val.day}, Temperature: ${val.temperature}, Wind: ${val.wind}`;
        let weatherElement = document.createElement('div');
        weatherElement.innerText = Neweather;
        Newforecast.appendChild(weatherElement);
    });
}  


let updateWeather = async () => {
    let cityNameInput = document.querySelector("input");
    let cityName = cityNameInput.value;
    cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
    msg.innerText = `Weather for ${cityName}`;
    const URL = `${BASE_URL}/${cityName}`;
    let res = await fetch(URL);
    let data = await res.json();
    
    temp.innerText = `${data.temperature}`;
    description.innerText = `Wind : ${data.wind} \n Description : ${data.description}`;
    const fcast = data.forecast;
    
    displayWeatherForecast(fcast); 
};

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateWeather();
});
