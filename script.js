
const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid": "b017b04444c9a2ba938d850e0e3d85e8"
}

const cities = {
    687196: "Zhovty Vody",
    703448: "Kyiv",
    709930: "Dnipro",
    702550: "Lviv",
    698740: "Odesa",
    689558: "Vinnytsia",
    756135: "Warsaw",
    2643743: "London",
    3128760: "Barcelona",
    1850147: "Tokyo",
    5128638: "New York",
    1261481: "Delhi", 
    2172517: "Canberra",
}

let select = document.createElement('select');
document.querySelector('.select').append(select);
select.setAttribute('id', 'city');

for (let key in cities) {
    let option = document.createElement('option');
    select.append(option);
    option.setAttribute('value', key);
    option.innerText = cities[key];
}


function getWeather() {
    const cityId = document.querySelector('#city').value;
    fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
        .then(weather => {
            return weather.json();
        }).then(showWeather);
}

function showWeather(data) {
    console.log(data);
    document.querySelector('.city-name').textContent = data.name + ", " + data.sys.country;
    document.querySelector('.deg').innerHTML = Math.round(data.main.temp) + '&deg;';
    document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
    document.querySelector('.features').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    document.querySelector('.wind').innerHTML = `Wind ${data.wind.speed} m/s`;
    document.querySelector('.humidity').innerHTML =`Humidity ${data.main.humidity}%`;
    document.querySelector('.pressure').innerHTML =`Pressure ${data.main.pressure} hPa`;
}


getWeather();
document.querySelector('#city').onchange = getWeather;