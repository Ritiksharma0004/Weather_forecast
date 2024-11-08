
const apiKey = "1c6bf67995d3f4c64de7423c801001ea";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const inputValue = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather img');


async function checkWeather(city) {
    const response = await fetch(apiUrl + `&q=${city}` +  `&appid=${apiKey}`);
    
    if(response.status == 404 || inputValue.value == ""){
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
        document.querySelector('.details').style.display = "none";
    }
    else {
        document.querySelector('.weather').style.display = "flex";
        document.querySelector('.details').style.display = "flex";
        document.querySelector('.error').style.display = "none";
        var data = await response.json();

        const temperature = parseInt(data.main.temp);
        const temp = document.querySelector('.temp').innerHTML = temperature + "°c" ;
        const cityName = document.querySelector('.city').innerHTML = data.name;
        const humidity = document.querySelector('.humidity-value').innerHTML = data.main.humidity + "%";
        const wind = document.querySelector('.wind-value').innerHTML =data.wind.speed + " Km/hr";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }
    }
   
}

searchBtn.addEventListener("click", ()=> {
    checkWeather(inputValue.value);
})

