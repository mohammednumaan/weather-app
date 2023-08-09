// import
import { getWeatherData, getForecastData } from "./weather"

// select dom elements

const form = document.querySelector('form')
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
    const dataTempCelsius = data.current.temp_c
    const dataTempFarenheit = data.current.temp_f
    const dataCity = data.location.name
    const dataCountry = data.location.country
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

    const cityTemp = document.createElement('p')
    mainDiv.appendChild(cityTemp)

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

    const toggleButton = document.createElement('button')
    toggleButton.textContent = 'Toggle Farenheit'
    toggleButton.type = 'button'
    toggleButton.id = 'toggle-button'
    mainDiv.appendChild(toggleButton)

    // update dom

    form.reset()
    mainCity.textContent = `${dataCity}`
    mainCountry.textContent = `${dataCountry}`
    cityTemp.textContent = `Temperature(in Celsius) - ${dataTempCelsius}` + ' \xB0 ' + 'c'
    cityWind.textContent = `Wind Speed(in km/h) - ${dataWindSpeedKm}` + ' KM/H '
    cityCondition.textContent = `Condition - ${dataCondition}`
    cityForecast.textContent = `${dataForecast}`


    // calls toggle temperature

    toggleTemperature(cityTemp, toggleButton, dataTempCelsius, dataTempFarenheit)

}


// toggle temperature

async function toggleTemperature(textEl, btn, dataCel, dataFar){

    btn.addEventListener('click', () => {
        if (btn.textContent === 'Toggle Celsius'){
            textEl.textContent =  `Temperature(in Celsius) - ${dataCel}` + ' \xB0 ' + 'C'
            btn.textContent = 'Toggle Farenheit'
        }
        else{ 
            textEl.textContent = `Temperature(in Farenheit) - ${dataFar}` + ' \xB0 ' + 'F'
            btn.textContent = 'Toggle Celsius'
        }
    })
}

// export

export{search, DOM}
