// select dom elements

const searchInput = document.querySelector('#search')
const apiKey = process.env.api_key


// fetch weather data

async function fetchWeatherData(){
    const searchData = searchInput.value
    const fetchData = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${searchData}&days=1&aqi=no&alerts=no`, {mode: 'cors'})

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