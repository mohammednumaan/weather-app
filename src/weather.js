// select dom elements

const searchInput = document.querySelector('#search')

// fetch weather data

async function fetchWeatherData(){
    const searchData = searchInput.value
    const fetchData = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=1d1b3978cfab44cfb0832028230908&q=${searchData}&days=1&aqi=no&alerts=no`)

    if (fetchData.ok){
        return fetchData;
    }
    else{
        return null;
    }
    
}

// get weatherData in json format

async function getWeatherData(){

    if(await fetchWeatherData() !== null){
        const weatherData = await (await fetchWeatherData()).json()
        return weatherData;
    }
    else{
        return null;
    } 
}


// get 24hr weather forecast

async function getForecastData(){

    const data = await getWeatherData()
    const forecast = data.forecast.forecastday[0].hour
    let newData = "Today's Forecast :";
    for (let i = 0; i < forecast.length; i++){
        newData += ` ${forecast[i].temp_c},. `
    }
    return newData;
}


// export

export{getWeatherData, getForecastData}