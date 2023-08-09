// import
import { getWeatherData, getForecastData } from "./weather"

// select dom elements

const mainContainer = document.querySelector('.main-container')
const searchButton = document.querySelector('#search-button')
const errorMessage = document.querySelector("#error-message")

// search event

function search(){
    searchButton.addEventListener('click', async () => {

        const jsonData = await getWeatherData()

        if(jsonData !== null){

            mainContainer.innerHTML = ''
            DOM()
        }
        else{

            mainContainer.innerHTML = ''
            errorMessage.style.display = 'block'
            mainContainer.appendChild(errorMessage)
        };
    });
};


// main dom function

async function DOM(){

    // update data
    const data = await getWeatherData()
    const dataForecast = await getForecastData()
    const dataCity = data.location.name
    const dataCountry = data.location.country
    const dataTempCelsius = data.current.temp_c
    const dataTempFarenheit = data.current.temp_f
    const dataWindSpeedKm = data.current.wind_kph
    const dataCondition = data.current.condition.text


    // create dom
    const mainDiv = document.createElement('div')
    mainDiv.classList.add('main-div')
    mainContainer.appendChild(mainDiv)

    const mainCity = document.createElement('h1')
    mainDiv.appendChild(mainCity)

    const mainCountry = document.createElement('h4')
    mainDiv.appendChild(mainCountry)

    const cityTempCel = document.createElement('p')
    mainDiv.appendChild(cityTempCel)

    const cityTempFar = document.createElement('p')
    mainDiv.appendChild(cityTempFar)

    const cityWind = document.createElement('p')
    mainDiv.appendChild(cityWind)

    const cityCondition = document.createElement('h1')
    cityCondition.classList.add('city-condition')
    mainDiv.appendChild(cityCondition)

    const cityForecastDiv = document.createElement('div')
    cityForecastDiv.classList.add('city-forecast-div')
    mainContainer.appendChild(cityForecastDiv)

    const cityForecast = document.createElement('p')
    cityForecastDiv.appendChild(cityForecast)

    // update dom

    mainCity.textContent = `${dataCity}`
    mainCountry.textContent = `${dataCountry}`
    cityTempCel.textContent = `Temperature(in celsius) - ${dataTempCelsius}` + ' \xB0 ' + 'C'
    cityTempFar.textContent = `Temperature(in farenheit) - ${dataTempFarenheit}` + ' \xB0 ' + 'F'
    cityWind.textContent = `Wind Speed(in km/h) - ${dataWindSpeedKm}` + ' KM/H '
    cityCondition.textContent = `Condition - ${dataCondition}`
    cityForecast.textContent = `${dataForecast}`


}

// export

export{search, DOM}
