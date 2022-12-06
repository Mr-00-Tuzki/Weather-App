const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEL = document.getElementById('current-weather-item');
const timezone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const API_KEY="7f6d02c935a0fc2e5db4f9a9942245d3";

setInterval(()=>{
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hour = time.getHours();
  const hoursIn12hrsFormat = hour>=13 ? hour % 12: hour
  const minutes = time.getMinutes();
  const ampm = hour >= 12 ? 'PM' : 'AM'

  timeEl.innerHTML = hoursIn12hrsFormat + ":" + minutes + " " + `<span id="am-pm">${ampm}</span>`
  dateEl.innerHTML = days[day] + ', ' + date+' ' + months[month];
},1000);

getWeatherData();

function getWeatherData(){
  navigator.geolocation.getCurrentPosition((success)=>{
    let{latitude,longitude}=success.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`).then(res=>res.json()).then(data=>{
      console.log(data);
      showweatherData(data);
    })
  })
}

function showweatherData(data){
  let{humidity,pressure}=data.main;
  //let{sunrise,sunset}=data.sys;
  //let{wind_speed}=data.wind;
  //currentWeatherItemsEL.innerHTML=
}
