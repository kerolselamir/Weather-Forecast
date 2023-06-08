
let today = document.getElementById("today")
let DateOfCurrentDay = document.getElementById("today-date")
let LocationOfCity = document.getElementById("location")
let regionOfCity = document.getElementById("region")
let countryOfCity = document.getElementById("country")

let current_day=document.querySelector('.current-day')
let weather_next_days=document.querySelectorAll('.weather-next-days')

let todayDegree = document.getElementById("today-degree")
let todayIcon = document.getElementById("today-icon")
let descriptionText = document.getElementById("today-description")
let humidty = document.getElementById("humidty")
let wind = document.getElementById("wind")
let wind_direction = document.getElementById("wind_dir")
let search_bar = document.getElementById("search-bar");




let nextDay = document.querySelectorAll(".nextDay")
let nextDayIcon = document.querySelectorAll(".nextDay-icon")
let maxDegree = document.querySelectorAll(".max-degree")
let minDegree = document.querySelectorAll(".min-degree")
let nextDayDescription = document.querySelectorAll(".nextDay-description")
let currentCity = "tokoy"


let monthes = ['Jan','Feb','March','April','May','June','July','Aug','Spet','Oct','Nov','Dec']

let days = [ "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];

let nextday_date=document.querySelectorAll('.nextday-date')






let weatherData;

async function getWeather()
{
    let weatherApi=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=f1fb15b923284eb9822161335231502&q=${currentCity}&days=7`)

    weatherData=await weatherApi.json()
    console.log(weatherData)

    displayWeatherOfCurrentDay()
    weaterofNextDays()
      
  
}

getWeather()




// object to get day 
let aboutCurrentDay =new Date()
function displayWeatherOfCurrentDay()
{
    today.innerHTML=days[aboutCurrentDay.getDay()]
    DateOfCurrentDay.innerHTML=`${aboutCurrentDay.getDate()} ${monthes[aboutCurrentDay.getMonth()]}`
    LocationOfCity.innerHTML=weatherData.location.name
    countryOfCity.innerHTML=weatherData.location.country
    todayDegree.innerHTML=weatherData.current.temp_c
    descriptionText.innerHTML=weatherData.current.condition.text
    humidty.innerHTML=weatherData.current.humidity
    wind.innerHTML=weatherData.current.wind_mph
    wind_direction.innerHTML=weatherData.current.wind_dir

    // to get the icon
    todayIcon.setAttribute('src','https:' +weatherData.current.condition.icon)

    // 1
    checkStatusOfWeather()
  

    // east ,west,north,south
    if(wind_direction.innerHTML==='NNW')
    {
        wind_direction.innerHTML='North North  West'
    }
    else if(wind_direction.innerHTML==='N')
    {
        wind_direction.innerHTML='North'
    }
    else if(wind_direction.innerHTML==='NNE')
    {
        wind_direction.innerHTML='North North  East'
    }
    else if(wind_direction.innerHTML==='ENE')
    {
        wind_direction.innerHTML='East North   East'
    }
    else if(wind_direction.innerHTML==='E')
    {
        wind_direction.innerHTML='East'
    }
    else if(wind_direction.innerHTML==='ESE')
    {
        wind_direction.innerHTML='East South   East'
    }
    else if(wind_direction.innerHTML==='SE')
    {
        wind_direction.innerHTML='South East'
    }
    else if(wind_direction.innerHTML==='SSE')
    {
        wind_direction.innerHTML='South South  East'
    }
    else if(wind_direction.innerHTML==='S')
    {
        wind_direction.innerHTML='South'
    }
    else if(wind_direction.innerHTML==='SSW')
    {
        wind_direction.innerHTML='South South   West'
    }   
    else if(wind_direction.innerHTML==='WNW')
    {
        wind_direction.innerHTML='West North   West'
    }
    else if(wind_direction.innerHTML==='NNW')
    {
        wind_direction.innerHTML='North North   West'
    }   
    else if(wind_direction.innerHTML==='WSW')
    {
        wind_direction.innerHTML='West South West'
    }
    else if(wind_direction.innerHTML==='SW')
    {
        wind_direction.innerHTML='South West'
    }   
    else if(wind_direction.innerHTML==='W')
    {
        wind_direction.innerHTML='West'
    }
    else if(wind_direction.innerHTML==='NW')
    {
        wind_direction.innerHTML='North West'
    }   
    else if(wind_direction.innerHTML==='NE')
    {
        wind_direction.innerHTML='North East'
    }  

    
}




//  to get  the weather of the next  days 
function weaterofNextDays()
{
    for(let i=0;i<nextDay.length;i++)
    {
        nextDay[i].innerHTML=days[new Date(weatherData.forecast.forecastday[i+1].date).getDay()]
            // to get the icon
            nextDayIcon[i].setAttribute('src','https:' +weatherData.forecast.forecastday[i+1].day.condition.icon)
            maxDegree[i].innerHTML=weatherData.forecast.forecastday[i+1].day.maxtemp_c
            minDegree[i].innerHTML=weatherData.forecast.forecastday[i+1].day.mintemp_c
            nextDayDescription[i].innerHTML=weatherData.forecast.forecastday[i+1].day.condition.text


    if(nextDayDescription[i].innerHTML==`Partly cloudy`)
    {
        weather_next_days[i].classList.remove('Clear')
        weather_next_days[i].classList.remove('Overcast')
        weather_next_days[i].classList.remove('Cloudy')
        weather_next_days[i].classList.remove('Sunny')
        weather_next_days[i].classList.remove('ForAll')
        weather_next_days[i].classList.remove('mist')
        weather_next_days[i].classList.remove('PatchyRainNearby')
        weather_next_days[i].classList.remove('PatchySnowNearby')
        weather_next_days[i].classList.remove('PatchySleetNearby')
        weather_next_days[i].classList.remove('ThunderyOutbreaksInNearby')
        weather_next_days[i].classList.remove('PatchyFreezingDrizzleNearby')
        weather_next_days[i].classList.remove('BlowingSnow')
        weather_next_days[i].classList.remove('ModerateOrHeavySnowShower') 
        weather_next_days[i].classList.remove('HeavySnow')
        weather_next_days[i].classList.remove('LightSnow')
        weather_next_days[i].classList.remove('ModerateRain')
        weather_next_days[i].classList.remove('PatchyRrainPossible')
        weather_next_days[i].classList.remove('LightRainShower')
        weather_next_days[i].classList.remove('FreezingFog')
        weather_next_days[i].classList.remove('LightRain')
        weather_next_days[i].classList.remove('fog')
        weather_next_days[i].classList.remove('HeavyRain')


     // save ir
       weather_next_days[i].classList.add('Partly-cloudy')

    }
    else if(nextDayDescription[i].innerHTML==`Clear`)
    {
        // 2
        weather_next_days[i].classList.remove('Partly-cloudy')
        weather_next_days[i].classList.remove('Overcast')
        weather_next_days[i].classList.remove('Cloudy')
        weather_next_days[i].classList.remove('Sunny')
        weather_next_days[i].classList.remove('ForAll')
        weather_next_days[i].classList.remove('mist')
        weather_next_days[i].classList.remove('PatchyRainNearby')
        weather_next_days[i].classList.remove('PatchySnowNearby')
        weather_next_days[i].classList.remove('PatchySleetNearby')
        weather_next_days[i].classList.remove('ThunderyOutbreaksInNearby')
        weather_next_days[i].classList.remove('PatchyFreezingDrizzleNearby')
        weather_next_days[i].classList.remove('BlowingSnow')
        weather_next_days[i].classList.remove('LightSnow')
        weather_next_days[i].classList.remove('ModerateRain')
        weather_next_days[i].classList.remove('PatchyRrainPossible')
        weather_next_days[i].classList.remove('LightRainShower')
        weather_next_days[i].classList.remove('FreezingFog')
        weather_next_days[i].classList.remove('LightRain')
        weather_next_days[i].classList.remove('fog')
        weather_next_days[i].classList.remove('HeavyRain')





        weather_next_days[i].classList.add('Clear')
    }
    else if(nextDayDescription[i].innerHTML==`Overcast`)
    {
        // 3
        weather_next_days[i].classList.remove('Clear')
        weather_next_days[i].classList.remove('Partly-cloudy')
        weather_next_days[i].classList.remove('Cloudy')
        weather_next_days[i].classList.remove('Sunny')
        weather_next_days[i].classList.remove('ForAll')
        weather_next_days[i].classList.remove('mist')
        weather_next_days[i].classList.remove('PatchyRainNearby')
        weather_next_days[i].classList.remove('PatchySnowNearby')
        weather_next_days[i].classList.remove('PatchySleetNearby')
        weather_next_days[i].classList.remove('ThunderyOutbreaksInNearby')
        weather_next_days[i].classList.remove('PatchyFreezingDrizzleNearby')
        weather_next_days[i].classList.remove('BlowingSnow')
        weather_next_days[i].classList.remove('LightSnow')
        weather_next_days[i].classList.remove('ModerateRain')
        weather_next_days[i].classList.remove('PatchyRrainPossible')
        weather_next_days[i].classList.remove('HeavySnow')
        weather_next_days[i].classList.remove('ModerateOrHeavySnowShower') 
        weather_next_days[i].classList.remove('LightRainShower')
        weather_next_days[i].classList.remove('FreezingFog')
        weather_next_days[i].classList.remove('LightRain')
        weather_next_days[i].classList.remove('fog')
        weather_next_days[i].classList.remove('HeavyRain')


        


        weather_next_days[i].classList.add('Overcast')
 
      }
    else if(nextDayDescription[i].innerHTML==`Cloudy`)
    {
        // 4
        weather_next_days[i].classList.remove('Clear')
        weather_next_days[i].classList.remove('Overcast')
        weather_next_days[i].classList.remove('Partly-cloudy')
        weather_next_days[i].classList.remove('Sunny')
        weather_next_days[i].classList.remove('ForAll')
        weather_next_days[i].classList.remove('mist')
        weather_next_days[i].classList.remove('PatchyRainNearby')
        weather_next_days[i].classList.remove('PatchySnowNearby')
        weather_next_days[i].classList.remove('PatchySleetNearby')
        weather_next_days[i].classList.remove('ThunderyOutbreaksInNearby')
        weather_next_days[i].classList.remove('PatchyFreezingDrizzleNearby')
        weather_next_days[i].classList.remove('BlowingSnow')
        weather_next_days[i].classList.remove('LightSnow')
        weather_next_days[i].classList.remove('ModerateRain')
        weather_next_days[i].classList.remove('PatchyRrainPossible')
        weather_next_days[i].classList.remove('LightRainShower')
        weather_next_days[i].classList.remove('FreezingFog')
        weather_next_days[i].classList.remove('LightRain')
        weather_next_days[i].classList.remove('fog')
        weather_next_days[i].classList.remove('HeavyRain')


        


    weather_next_days[i].classList.add('Cloudy')

     }
    else if(nextDayDescription[i].innerHTML==`Sunny`)
    {
        // 5
        weather_next_days[i].classList.remove('Clear')
        weather_next_days[i].classList.remove('Overcast')
        weather_next_days[i].classList.remove('Cloudy')
        weather_next_days[i].classList.remove('Partly-cloudy')
        weather_next_days[i].classList.remove('ForAll')
        weather_next_days[i].classList.remove('mist')
        weather_next_days[i].classList.remove('PatchyRainNearby')
        weather_next_days[i].classList.remove('PatchySnowNearby')
        weather_next_days[i].classList.remove('PatchySleetNearby')
        weather_next_days[i].classList.remove('ThunderyOutbreaksInNearby')
        weather_next_days[i].classList.remove('PatchyFreezingDrizzleNearby')
        weather_next_days[i].classList.remove('BlowingSnow')
        weather_next_days[i].classList.remove('HeavySnow')
        weather_next_days[i].classList.remove('ModerateOrHeavySnowShower')
        weather_next_days[i].classList.remove('LightSnow')
        weather_next_days[i].classList.remove('ModerateRain')
        weather_next_days[i].classList.remove('PatchyRrainPossible')
        weather_next_days[i].classList.remove('LightRainShower')
        weather_next_days[i].classList.remove('FreezingFog')
        weather_next_days[i].classList.remove('LightRain')
        weather_next_days[i].classList.remove('fog')
        weather_next_days[i].classList.remove('HeavyRain')




        weather_next_days[i].classList.add('Sunny')
    }
    else if(nextDayDescription[i].innerHTML==`Mist`)
    {
        // 6
        weather_next_days[i].classList.remove('Clear')
        weather_next_days[i].classList.remove('Overcast')
        weather_next_days[i].classList.remove('Cloudy')
        weather_next_days[i].classList.remove('Partly-cloudy')
        weather_next_days[i].classList.remove('ForAll')
        weather_next_days[i].classList.remove('Sunny')
        weather_next_days[i].classList.remove('PatchyRainNearby')
        weather_next_days[i].classList.remove('PatchySnowNearby')
        weather_next_days[i].classList.remove('PatchySleetNearby')
        weather_next_days[i].classList.remove('PatchyFreezingDrizzleNearby')
        weather_next_days[i].classList.remove('ThunderyOutbreaksInNearby')
        weather_next_days[i].classList.remove('BlowingSnow')
        weather_next_days[i].classList.remove('HeavySnow')
        weather_next_days[i].classList.remove('ModerateOrHeavySnowShower')  
        weather_next_days[i].classList.remove('LightSnow')
        weather_next_days[i].classList.remove('ModerateRain')
        weather_next_days[i].classList.remove('PatchyRrainPossible')
        weather_next_days[i].classList.remove('LightRainShower')
        weather_next_days[i].classList.remove('FreezingFog')
        weather_next_days[i].classList.remove('LightRain')
        weather_next_days[i].classList.remove('fog')
        weather_next_days[i].classList.remove('HeavyRain')







      weather_next_days[i].classList.add('mist')

      
    }
    else if(nextDayDescription[i].innerHTML==`Patchy rain nearby`)
    {
        // 7
        weather_next_days[i].classList.remove('Clear')
        weather_next_days[i].classList.remove('Overcast')
        weather_next_days[i].classList.remove('Cloudy')
        weather_next_days[i].classList.remove('Partly-cloudy')
        weather_next_days[i].classList.remove('ForAll')
        weather_next_days[i].classList.remove('Sunny')
        weather_next_days[i].classList.remove('mist')
        weather_next_days[i].classList.remove('PatchySnowNearby')
        weather_next_days[i].classList.remove('PatchySleetNearby')
        weather_next_days[i].classList.remove('PatchyFreezingDrizzleNearby')
        weather_next_days[i].classList.remove('ThunderyOutbreaksInNearby')
        weather_next_days[i].classList.remove('BlowingSnow')
        weather_next_days[i].classList.remove('HeavySnow')
        weather_next_days[i].classList.remove('ModerateOrHeavySnowShower')
        weather_next_days[i].classList.remove('LightSnow')
        weather_next_days[i].classList.remove('ModerateRain')
        weather_next_days[i].classList.remove('PatchyRrainPossible')
        weather_next_days[i].classList.remove('LightRainShower')
        weather_next_days[i].classList.remove('FreezingFog')
        weather_next_days[i].classList.remove('LightRain')
        weather_next_days[i].classList.remove('fog')
        weather_next_days[i].classList.remove('HeavyRain')




        weather_next_days[i].classList.add('PatchyRainNearby')
    }
    else if(nextDayDescription[i].innerHTML==`Patchy snow nearby`)
    {
        // 8
        weather_next_days[i].classList.remove('Clear')
        weather_next_days[i].classList.remove('Overcast')
        weather_next_days[i].classList.remove('Cloudy')
        weather_next_days[i].classList.remove('Partly-cloudy')
        weather_next_days[i].classList.remove('ForAll')
        weather_next_days[i].classList.remove('Sunny')
        weather_next_days[i].classList.remove('mist')
        weather_next_days[i].classList.remove('PatchyRainNearby')
        weather_next_days[i].classList.remove('PatchySleetNearby')
        weather_next_days[i].classList.remove('PatchyFreezingDrizzleNearby')
        weather_next_days[i].classList.remove('ThunderyOutbreaksInNearby')
        weather_next_days[i].classList.remove('BlowingSnow')
        weather_next_days[i].classList.remove('HeavySnow')
        weather_next_days[i].classList.remove('ModerateOrHeavySnowShower')  
        weather_next_days[i].classList.remove('LightSnow')
        weather_next_days[i].classList.remove('ModerateRain')
        weather_next_days[i].classList.remove('PatchyRrainPossible')
        weather_next_days[i].classList.remove('LightRainShower')
        weather_next_days[i].classList.remove('FreezingFog')
        weather_next_days[i].classList.remove('LightRain')
        weather_next_days[i].classList.remove('fog')
        weather_next_days[i].classList.remove('HeavyRain')





    weather_next_days[i].classList.add('PatchySnowNearby')
  
    }

    else if(nextDayDescription[i].innerHTML==`Patchy sleet nearby`)
    {
        // 9
        weather_next_days[i].classList.remove('Clear')
        weather_next_days[i].classList.remove('Overcast')
        weather_next_days[i].classList.remove('Cloudy')
        weather_next_days[i].classList.remove('Partly-cloudy')
        weather_next_days[i].classList.remove('ForAll')
        weather_next_days[i].classList.remove('Sunny')
        weather_next_days[i].classList.remove('mist')
        weather_next_days[i].classList.remove('PatchyRainNearby')
        weather_next_days[i].classList.remove('PatchySnowNearby')
        weather_next_days[i].classList.remove('PatchyFreezingDrizzleNearby')
        weather_next_days[i].classList.remove('ThunderyOutbreaksInNearby')
        weather_next_days[i].classList.remove('BlowingSnow')
        weather_next_days[i].classList.remove('HeavySnow')
        weather_next_days[i].classList.remove('ModerateOrHeavySnowShower')
        weather_next_days[i].classList.remove('LightSnow')
        weather_next_days[i].classList.remove('ModerateRain')
        weather_next_days[i].classList.remove('PatchyRrainPossible')
        weather_next_days[i].classList.remove('LightRainShower')
        weather_next_days[i].classList.remove('FreezingFog')
        weather_next_days[i].classList.remove('LightRain')
        weather_next_days[i].classList.remove('fog')
        weather_next_days[i].classList.remove('HeavyRain')




        weather_next_days[i].classList.add('PatchySleetNearby')
    }

    else if(nextDayDescription[i].innerHTML==`Patchy freezing drizzle nearby`)
    {
        // 10
        weather_next_days[i].classList.remove('Clear')
        weather_next_days[i].classList.remove('Overcast')
        weather_next_days[i].classList.remove('Cloudy')
        weather_next_days[i].classList.remove('Partly-cloudy')
        weather_next_days[i].classList.remove('ForAll')
        weather_next_days[i].classList.remove('Sunny')
        weather_next_days[i].classList.remove('mist')
        weather_next_days[i].classList.remove('PatchyRainNearby')
        weather_next_days[i].classList.remove('PatchySnowNearby')
        weather_next_days[i].classList.remove('PatchySleetNearby')
        weather_next_days[i].classList.remove('ThunderyOutbreaksInNearby')
        weather_next_days[i].classList.remove('BlowingSnow')
        weather_next_days[i].classList.remove('HeavySnow')
        weather_next_days[i].classList.remove('ModerateOrHeavySnowShower')
        weather_next_days[i].classList.remove('LightSnow')
        weather_next_days[i].classList.remove('ModerateRain')
        weather_next_days[i].classList.remove('PatchyRrainPossible')
        weather_next_days[i].classList.remove('LightRainShower')
        weather_next_days[i].classList.remove('FreezingFog')
        weather_next_days[i].classList.remove('LightRain')
        weather_next_days[i].classList.remove('fog')
        weather_next_days[i].classList.remove('HeavyRain')




        weather_next_days[i].classList.add('PatchyFreezingDrizzleNearby')
    }

    
    else if(nextDayDescription[i].innerHTML==`Thundery outbreaks in nearby`)
    {
        // 11
        weather_next_days[i].classList.remove('Clear')
        weather_next_days[i].classList.remove('Overcast')
        weather_next_days[i].classList.remove('Cloudy')
        weather_next_days[i].classList.remove('Partly-cloudy')
        weather_next_days[i].classList.remove('ForAll')
        weather_next_days[i].classList.remove('Sunny')
        weather_next_days[i].classList.remove('mist')
        weather_next_days[i].classList.remove('PatchyRainNearby')
        weather_next_days[i].classList.remove('PatchySnowNearby')
        weather_next_days[i].classList.remove('PatchySleetNearby')
        weather_next_days[i].classList.remove('PatchyFreezingDrizzleNearby')
        weather_next_days[i].classList.remove('BlowingSnow')
        weather_next_days[i].classList.remove('HeavySnow')
        weather_next_days[i].classList.remove('ModerateOrHeavySnowShower')
        weather_next_days[i].classList.remove('LightSnow')
        weather_next_days[i].classList.remove('ModerateRain')
        weather_next_days[i].classList.remove('PatchyRrainPossible')
        weather_next_days[i].classList.remove('LightRainShower')
        weather_next_days[i].classList.remove('FreezingFog')
        weather_next_days[i].classList.remove('LightRain')
        weather_next_days[i].classList.remove('fog')
        weather_next_days[i].classList.remove('HeavyRain')



        weather_next_days[i].classList.add('ThunderyOutbreaksInNearby')
    }
    else if(nextDayDescription[i].innerHTML==`Blowing snow`||nextDayDescription[i].innerHTML==`Light drizzle`)
    {
        // 12
        weather_next_days[i].classList.remove('Clear')
        weather_next_days[i].classList.remove('Overcast')
        weather_next_days[i].classList.remove('Cloudy')
        weather_next_days[i].classList.remove('Partly-cloudy')
        weather_next_days[i].classList.remove('ForAll')
        weather_next_days[i].classList.remove('Sunny')
        weather_next_days[i].classList.remove('mist')
        weather_next_days[i].classList.remove('PatchyRainNearby')
        weather_next_days[i].classList.remove('PatchySnowNearby')
        weather_next_days[i].classList.remove('PatchySleetNearby')
        weather_next_days[i].classList.remove('ThunderyOutbreaksInNearby')
        weather_next_days[i].classList.remove('PatchyFreezingDrizzleNearby')
        weather_next_days[i].classList.remove('HeavySnow')
        weather_next_days[i].classList.remove('ModerateOrHeavySnowShower')
        weather_next_days[i].classList.remove('LightSnow')
        weather_next_days[i].classList.remove('ModerateRain')
        weather_next_days[i].classList.remove('PatchyRrainPossible')
        weather_next_days[i].classList.remove('LightRainShower')
        weather_next_days[i].classList.remove('FreezingFog')
        weather_next_days[i].classList.remove('LightRain')
        weather_next_days[i].classList.remove('fog')
        weather_next_days[i].classList.remove('HeavyRain')


        weather_next_days[i].classList.add('BlowingSnow')
    }
    else if(nextDayDescription[i].innerHTML==`Heavy snow`)
    {
        // 13
        weather_next_days[i].classList.remove('Clear')
        weather_next_days[i].classList.remove('Overcast')
        weather_next_days[i].classList.remove('Cloudy')
        weather_next_days[i].classList.remove('Partly-cloudy')
        weather_next_days[i].classList.remove('ForAll')
        weather_next_days[i].classList.remove('Sunny')
        weather_next_days[i].classList.remove('mist')
        weather_next_days[i].classList.remove('PatchyRainNearby')
        weather_next_days[i].classList.remove('PatchySnowNearby')
        weather_next_days[i].classList.remove('PatchySleetNearby')
        weather_next_days[i].classList.remove('ThunderyOutbreaksInNearby')
        weather_next_days[i].classList.remove('PatchyFreezingDrizzleNearby')
        weather_next_days[i].classList.remove('BlowingSnow')
        weather_next_days[i].classList.remove('ModerateOrHeavySnowShower')
        weather_next_days[i].classList.remove('LightSnow')
        weather_next_days[i].classList.remove('ModerateRain')
        weather_next_days[i].classList.remove('PatchyRrainPossible')
        weather_next_days[i].classList.remove('LightRainShower')
        weather_next_days[i].classList.remove('FreezingFog')
        weather_next_days[i].classList.remove('LightRain')
        weather_next_days[i].classList.remove('fog')
        weather_next_days[i].classList.remove('HeavyRain')


        weather_next_days[i].classList.add('HeavySnow')
    }
    else if(nextDayDescription[i].innerHTML==`Moderate or heavy snow showers`||nextDayDescription.innerHTML==`Patchy moderate snow`)
    {
        // 14
        weather_next_days[i].classList.remove('Clear')
        weather_next_days[i].classList.remove('Overcast')
        weather_next_days[i].classList.remove('Cloudy')
        weather_next_days[i].classList.remove('Partly-cloudy')
        weather_next_days[i].classList.remove('ForAll')
        weather_next_days[i].classList.remove('Sunny')
        weather_next_days[i].classList.remove('mist')
        weather_next_days[i].classList.remove('PatchyRainNearby')
        weather_next_days[i].classList.remove('PatchySnowNearby')
        weather_next_days[i].classList.remove('PatchySleetNearby')
        weather_next_days[i].classList.remove('ThunderyOutbreaksInNearby')
        weather_next_days[i].classList.remove('PatchyFreezingDrizzleNearby')
        weather_next_days[i].classList.remove('BlowingSnow')
        weather_next_days[i].classList.remove('HeavySnow')
        weather_next_days[i].classList.remove('LightSnow')
        weather_next_days[i].classList.remove('ModerateRain')
        weather_next_days[i].classList.remove('PatchyRrainPossible')     
        weather_next_days[i].classList.remove('LightRainShower')
        weather_next_days[i].classList.remove('FreezingFog')
        weather_next_days[i].classList.remove('LightRain')
        weather_next_days[i].classList.remove('fog')
        weather_next_days[i].classList.remove('HeavyRain')


        weather_next_days[i].classList.add('ModerateOrHeavySnowShower')
    }
     else if(nextDayDescription[i].innerHTML==`Light snow`)
    {
        // 14
        weather_next_days[i].classList.remove('Clear')
        weather_next_days[i].classList.remove('Overcast')
        weather_next_days[i].classList.remove('Cloudy')
        weather_next_days[i].classList.remove('Partly-cloudy')
        weather_next_days[i].classList.remove('ForAll')
        weather_next_days[i].classList.remove('Sunny')
        weather_next_days[i].classList.remove('mist')
        weather_next_days[i].classList.remove('PatchyRainNearby')
        weather_next_days[i].classList.remove('PatchySnowNearby')
        weather_next_days[i].classList.remove('PatchySleetNearby')
        weather_next_days[i].classList.remove('ThunderyOutbreaksInNearby')
        weather_next_days[i].classList.remove('PatchyFreezingDrizzleNearby')
        weather_next_days[i].classList.remove('BlowingSnow')
        weather_next_days[i].classList.remove('HeavySnow')
        weather_next_days[i].classList.remove('ModerateOrHeavySnowShower')
        weather_next_days[i].classList.remove('ModerateRain')
        weather_next_days[i].classList.remove('PatchyRrainPossible')
        weather_next_days[i].classList.remove('LightRainShower')
        weather_next_days[i].classList.remove('FreezingFog')
        weather_next_days[i].classList.remove('LightRain')
        weather_next_days[i].classList.remove('fog')
        weather_next_days[i].classList.remove('HeavyRain')




        weather_next_days[i].classList.add('LightSnow')
    }
    else if(nextDayDescription[i].innerHTML==`Moderate rain`)
    {
        // 15
        weather_next_days[i].classList.remove('Clear')
        weather_next_days[i].classList.remove('Overcast')
        weather_next_days[i].classList.remove('Cloudy')
        weather_next_days[i].classList.remove('Partly-cloudy')
        weather_next_days[i].classList.remove('ForAll')
        weather_next_days[i].classList.remove('Sunny')
        weather_next_days[i].classList.remove('mist')
        weather_next_days[i].classList.remove('PatchyRainNearby')
        weather_next_days[i].classList.remove('PatchySnowNearby')
        weather_next_days[i].classList.remove('PatchySleetNearby')
        weather_next_days[i].classList.remove('ThunderyOutbreaksInNearby')
        weather_next_days[i].classList.remove('PatchyFreezingDrizzleNearby')
        weather_next_days[i].classList.remove('BlowingSnow')
        weather_next_days[i].classList.remove('HeavySnow')
        weather_next_days[i].classList.remove('ModerateOrHeavySnowShower')
        weather_next_days[i].classList.remove('PatchyRrainPossible')
        weather_next_days[i].classList.remove('LightRainShower')
        weather_next_days[i].classList.remove('FreezingFog')
        weather_next_days[i].classList.remove('LightRain')
        weather_next_days[i].classList.remove('fog')
        weather_next_days[i].classList.remove('HeavyRain')




        weather_next_days[i].classList.add('ModerateRain')
    }
    else if(nextDayDescription[i].innerHTML==`Patchy rain possible`)
    {
        // 16
        weather_next_days[i].classList.remove('Clear')
        weather_next_days[i].classList.remove('Overcast')
        weather_next_days[i].classList.remove('Cloudy')
        weather_next_days[i].classList.remove('Partly-cloudy')
        weather_next_days[i].classList.remove('ForAll')
        weather_next_days[i].classList.remove('Sunny')
        weather_next_days[i].classList.remove('mist')
        weather_next_days[i].classList.remove('PatchyRainNearby')
        weather_next_days[i].classList.remove('PatchySnowNearby')
        weather_next_days[i].classList.remove('PatchySleetNearby')
        weather_next_days[i].classList.remove('ThunderyOutbreaksInNearby')
        weather_next_days[i].classList.remove('PatchyFreezingDrizzleNearby')
        weather_next_days[i].classList.remove('BlowingSnow')
        weather_next_days[i].classList.remove('HeavySnow')
        weather_next_days[i].classList.remove('ModerateOrHeavySnowShower')
        weather_next_days[i].classList.remove('ModerateRain')
        weather_next_days[i].classList.remove('LightRainShower')
        weather_next_days[i].classList.remove('FreezingFog')
        weather_next_days[i].classList.remove('LightRain')
        weather_next_days[i].classList.remove('fog')
        weather_next_days[i].classList.remove('HeavyRain')





        weather_next_days[i].classList.add('PatchyRrainPossible')
    }
    else if(nextDayDescription[i].innerHTML==`Light rain shower`)
    {
        // 18
        weather_next_days[i].classList.remove('Clear')
        weather_next_days[i].classList.remove('Overcast')
        weather_next_days[i].classList.remove('Cloudy')
        weather_next_days[i].classList.remove('Partly-cloudy')
        weather_next_days[i].classList.remove('ForAll')
        weather_next_days[i].classList.remove('Sunny')
        weather_next_days[i].classList.remove('mist')
        weather_next_days[i].classList.remove('PatchyRainNearby')
        weather_next_days[i].classList.remove('PatchySnowNearby')
        weather_next_days[i].classList.remove('PatchySleetNearby')
        weather_next_days[i].classList.remove('ThunderyOutbreaksInNearby')
        weather_next_days[i].classList.remove('PatchyFreezingDrizzleNearby')
        weather_next_days[i].classList.remove('BlowingSnow')
        weather_next_days[i].classList.remove('HeavySnow')
        weather_next_days[i].classList.remove('ModerateOrHeavySnowShower')
        weather_next_days[i].classList.remove('ModerateRain')
        weather_next_days[i].classList.remove('PatchyRrainPossible')
        weather_next_days[i].classList.remove('FreezingFog')
        weather_next_days[i].classList.remove('LightRain')
        weather_next_days[i].classList.remove('fog')
        weather_next_days[i].classList.remove('HeavyRain')





        weather_next_days[i].classList.add('LightRainShower')
    }




    else if(nextDayDescription[i].innerHTML==`Fog`)
    {
        // 19
        weather_next_days[i].classList.remove('Clear')
        weather_next_days[i].classList.remove('Overcast')
        weather_next_days[i].classList.remove('Cloudy')
        weather_next_days[i].classList.remove('Partly-cloudy')
        weather_next_days[i].classList.remove('ForAll')
        weather_next_days[i].classList.remove('Sunny')
        weather_next_days[i].classList.remove('mist')
        weather_next_days[i].classList.remove('PatchyRainNearby')
        weather_next_days[i].classList.remove('PatchySnowNearby')
        weather_next_days[i].classList.remove('PatchySleetNearby')
        weather_next_days[i].classList.remove('ThunderyOutbreaksInNearby')
        weather_next_days[i].classList.remove('PatchyFreezingDrizzleNearby')
        weather_next_days[i].classList.remove('BlowingSnow')
        weather_next_days[i].classList.remove('HeavySnow')
        weather_next_days[i].classList.remove('ModerateOrHeavySnowShower')
        weather_next_days[i].classList.remove('ModerateRain')
        weather_next_days[i].classList.remove('PatchyRrainPossible')
        weather_next_days[i].classList.remove('LightRainShower')
        weather_next_days[i].classList.remove('LightRain')
        weather_next_days[i].classList.remove('FreezingFog')
        weather_next_days[i].classList.remove('HeavyRain')





        weather_next_days[i].classList.add('fog')
    }
    else if(nextDayDescription[i].innerHTML==`Light rain`)
    {
        // 20
        weather_next_days[i].classList.remove('Clear')
        weather_next_days[i].classList.remove('Overcast')
        weather_next_days[i].classList.remove('Cloudy')
        weather_next_days[i].classList.remove('Partly-cloudy')
        weather_next_days[i].classList.remove('ForAll')
        weather_next_days[i].classList.remove('Sunny')
        weather_next_days[i].classList.remove('mist')
        weather_next_days[i].classList.remove('PatchyRainNearby')
        weather_next_days[i].classList.remove('PatchySnowNearby')
        weather_next_days[i].classList.remove('PatchySleetNearby')
        weather_next_days[i].classList.remove('ThunderyOutbreaksInNearby')
        weather_next_days[i].classList.remove('PatchyFreezingDrizzleNearby')
        weather_next_days[i].classList.remove('BlowingSnow')
        weather_next_days[i].classList.remove('HeavySnow')
        weather_next_days[i].classList.remove('ModerateOrHeavySnowShower')
        weather_next_days[i].classList.remove('ModerateRain')
        weather_next_days[i].classList.remove('PatchyRrainPossible')
        weather_next_days[i].classList.remove('LightRainShower')
        weather_next_days[i].classList.remove('FreezingFog')
        weather_next_days[i].classList.remove('fog')
        weather_next_days[i].classList.remove('HeavyRain')






        weather_next_days[i].classList.add('LightRain')
    }
    else if(nextDayDescription[i].innerHTML==`Freezing fog`)
    {
        // 21
        weather_next_days[i].classList.remove('Clear')
        weather_next_days[i].classList.remove('Overcast')
        weather_next_days[i].classList.remove('Cloudy')
        weather_next_days[i].classList.remove('Partly-cloudy')
        weather_next_days[i].classList.remove('ForAll')
        weather_next_days[i].classList.remove('Sunny')
        weather_next_days[i].classList.remove('mist')
        weather_next_days[i].classList.remove('PatchyRainNearby')
        weather_next_days[i].classList.remove('PatchySnowNearby')
        weather_next_days[i].classList.remove('PatchySleetNearby')
        weather_next_days[i].classList.remove('ThunderyOutbreaksInNearby')
        weather_next_days[i].classList.remove('PatchyFreezingDrizzleNearby')
        weather_next_days[i].classList.remove('BlowingSnow')
        weather_next_days[i].classList.remove('HeavySnow')
        weather_next_days[i].classList.remove('ModerateOrHeavySnowShower')
        weather_next_days[i].classList.remove('ModerateRain')
        weather_next_days[i].classList.remove('PatchyRrainPossible')
        weather_next_days[i].classList.remove('LightRainShower')
        weather_next_days[i].classList.remove('LightRain')
        weather_next_days[i].classList.remove('fog')
        weather_next_days[i].classList.remove('HeavyRain')






        weather_next_days[i].classList.add('FreezingFog')
    }
    else if(nextDayDescription[i].innerHTML==`Heavy rain`)
    {
        // 22
        weather_next_days[i].classList.remove('Clear')
        weather_next_days[i].classList.remove('Overcast')
        weather_next_days[i].classList.remove('Cloudy')
        weather_next_days[i].classList.remove('Partly-cloudy')
        weather_next_days[i].classList.remove('ForAll')
        weather_next_days[i].classList.remove('Sunny')
        weather_next_days[i].classList.remove('mist')
        weather_next_days[i].classList.remove('PatchyRainNearby')
        weather_next_days[i].classList.remove('PatchySnowNearby')
        weather_next_days[i].classList.remove('PatchySleetNearby')
        weather_next_days[i].classList.remove('ThunderyOutbreaksInNearby')
        weather_next_days[i].classList.remove('PatchyFreezingDrizzleNearby')
        weather_next_days[i].classList.remove('BlowingSnow')
        weather_next_days[i].classList.remove('HeavySnow')
        weather_next_days[i].classList.remove('ModerateOrHeavySnowShower')
        weather_next_days[i].classList.remove('ModerateRain')
        weather_next_days[i].classList.remove('PatchyRrainPossible')
        weather_next_days[i].classList.remove('LightRainShower')
        weather_next_days[i].classList.remove('LightRain')
        weather_next_days[i].classList.remove('fog')
        weather_next_days[i].classList.remove('FreezingFog')


        weather_next_days[i].classList.add('HeavyRain')
    }
    
    else
    {
        weather_next_days[i].classList.remove('ModerateRain')
        weather_next_days[i].classList.remove('PatchyRrainPossible')
        weather_next_days[i].classList.remove('Clear')
        weather_next_days[i].classList.remove('Overcast')
        weather_next_days[i].classList.remove('Cloudy')
        weather_next_days[i].classList.remove('Partly-cloudy')
        weather_next_days[i].classList.remove('ForAll')
        weather_next_days[i].classList.remove('Sunny')
        weather_next_days[i].classList.remove('mist')
        weather_next_days[i].classList.remove('PatchyRainNearby')
        weather_next_days[i].classList.remove('PatchySnowNearby')
        weather_next_days[i].classList.remove('PatchyFreezingDrizzleNearby')
        weather_next_days[i].classList.remove('ThunderyOutbreaksInNearby')
        weather_next_days[i].classList.remove('BlowingSnow')
        weather_next_days[i].classList.remove('PatchySleetNearby')
        weather_next_days[i].classList.remove('HeavySnow')
        weather_next_days[i].classList.remove('ModerateOrHeavySnowShower')
        weather_next_days[i].classList.remove('LightSnow')
        weather_next_days[i].classList.remove('LightRainShower')
        weather_next_days[i].classList.remove('FreezingFog')
        weather_next_days[i].classList.remove('LightRain')
        weather_next_days[i].classList.remove('fog')
        weather_next_days[i].classList.remove('HeavyRain')





        


        weather_next_days[i].classList.add('ForAll')
    }





     }

    
}



search_bar.addEventListener('keyup',function(){

    currentCity=search_bar.value
    getWeather()
})





    












function checkStatusOfWeather()
{
    if(descriptionText.innerHTML==`Partly cloudy`)
    {
        current_day.classList.remove('Clear')
        current_day.classList.remove('Overcast')
        current_day.classList.remove('Cloudy')
        current_day.classList.remove('Sunny')
        current_day.classList.remove('ForAll')
        current_day.classList.remove('mist')
        current_day.classList.remove('PatchyRainNearby')
        current_day.classList.remove('PatchySnowNearby')
        current_day.classList.remove('PatchySleetNearby')
        current_day.classList.remove('ThunderyOutbreaksInNearby')
        current_day.classList.remove('PatchyFreezingDrizzleNearby')
        current_day.classList.remove('BlowingSnow')
        current_day.classList.remove('ModerateOrHeavySnowShower') 
        current_day.classList.remove('HeavySnow')
        current_day.classList.remove('LightSnow')
        current_day.classList.remove('ModerateRain')
        current_day.classList.remove('PatchyRrainPossible')
        current_day.classList.remove('LightRainShower')
        current_day.classList.remove('FreezingFog')
        current_day.classList.remove('LightRain')
        current_day.classList.remove('fog')
        current_day.classList.remove('HeavyRain')


     // save ir
       current_day.classList.add('Partly-cloudy')

    }
    else if(descriptionText.innerHTML==`Clear`)
    {
        // 2
        current_day.classList.remove('Partly-cloudy')
        current_day.classList.remove('Overcast')
        current_day.classList.remove('Cloudy')
        current_day.classList.remove('Sunny')
        current_day.classList.remove('ForAll')
        current_day.classList.remove('mist')
        current_day.classList.remove('PatchyRainNearby')
        current_day.classList.remove('PatchySnowNearby')
        current_day.classList.remove('PatchySleetNearby')
        current_day.classList.remove('ThunderyOutbreaksInNearby')
        current_day.classList.remove('PatchyFreezingDrizzleNearby')
        current_day.classList.remove('BlowingSnow')
        current_day.classList.remove('LightSnow')
        current_day.classList.remove('ModerateRain')
        current_day.classList.remove('PatchyRrainPossible')
        current_day.classList.remove('LightRainShower')
        current_day.classList.remove('FreezingFog')
        current_day.classList.remove('LightRain')
        current_day.classList.remove('fog')
        current_day.classList.remove('HeavyRain')





        current_day.classList.add('Clear')
    }
    else if(descriptionText.innerHTML==`Overcast`)
    {
        // 3
        current_day.classList.remove('Clear')
        current_day.classList.remove('Partly-cloudy')
        current_day.classList.remove('Cloudy')
        current_day.classList.remove('Sunny')
        current_day.classList.remove('ForAll')
        current_day.classList.remove('mist')
        current_day.classList.remove('PatchyRainNearby')
        current_day.classList.remove('PatchySnowNearby')
        current_day.classList.remove('PatchySleetNearby')
        current_day.classList.remove('ThunderyOutbreaksInNearby')
        current_day.classList.remove('PatchyFreezingDrizzleNearby')
        current_day.classList.remove('BlowingSnow')
        current_day.classList.remove('LightSnow')
        current_day.classList.remove('ModerateRain')
        current_day.classList.remove('PatchyRrainPossible')
        current_day.classList.remove('HeavySnow')
        current_day.classList.remove('ModerateOrHeavySnowShower') 
        current_day.classList.remove('LightRainShower')
        current_day.classList.remove('FreezingFog')
        current_day.classList.remove('LightRain')
        current_day.classList.remove('fog')
        current_day.classList.remove('HeavyRain')


        


        current_day.classList.add('Overcast')
 
      }
    else if(descriptionText.innerHTML==`Cloudy`)
    {
        // 4
        current_day.classList.remove('Clear')
        current_day.classList.remove('Overcast')
        current_day.classList.remove('Partly-cloudy')
        current_day.classList.remove('Sunny')
        current_day.classList.remove('ForAll')
        current_day.classList.remove('mist')
        current_day.classList.remove('PatchyRainNearby')
        current_day.classList.remove('PatchySnowNearby')
        current_day.classList.remove('PatchySleetNearby')
        current_day.classList.remove('ThunderyOutbreaksInNearby')
        current_day.classList.remove('PatchyFreezingDrizzleNearby')
        current_day.classList.remove('BlowingSnow')
        current_day.classList.remove('LightSnow')
        current_day.classList.remove('ModerateRain')
        current_day.classList.remove('PatchyRrainPossible')
        current_day.classList.remove('LightRainShower')
        current_day.classList.remove('FreezingFog')
        current_day.classList.remove('LightRain')
        current_day.classList.remove('fog')
        current_day.classList.remove('HeavyRain')


        


    current_day.classList.add('Cloudy')

     }
    else if(descriptionText.innerHTML==`Sunny`)
    {
        // 5
        current_day.classList.remove('Clear')
        current_day.classList.remove('Overcast')
        current_day.classList.remove('Cloudy')
        current_day.classList.remove('Partly-cloudy')
        current_day.classList.remove('ForAll')
        current_day.classList.remove('mist')
        current_day.classList.remove('PatchyRainNearby')
        current_day.classList.remove('PatchySnowNearby')
        current_day.classList.remove('PatchySleetNearby')
        current_day.classList.remove('ThunderyOutbreaksInNearby')
        current_day.classList.remove('PatchyFreezingDrizzleNearby')
        current_day.classList.remove('BlowingSnow')
        current_day.classList.remove('HeavySnow')
        current_day.classList.remove('ModerateOrHeavySnowShower')
        current_day.classList.remove('LightSnow')
        current_day.classList.remove('ModerateRain')
        current_day.classList.remove('PatchyRrainPossible')
        current_day.classList.remove('LightRainShower')
        current_day.classList.remove('FreezingFog')
        current_day.classList.remove('LightRain')
        current_day.classList.remove('fog')
        current_day.classList.remove('HeavyRain')




        current_day.classList.add('Sunny')
    }
    else if(descriptionText.innerHTML==`Mist`)
    {
        // 6
        current_day.classList.remove('Clear')
        current_day.classList.remove('Overcast')
        current_day.classList.remove('Cloudy')
        current_day.classList.remove('Partly-cloudy')
        current_day.classList.remove('ForAll')
        current_day.classList.remove('Sunny')
        current_day.classList.remove('PatchyRainNearby')
        current_day.classList.remove('PatchySnowNearby')
        current_day.classList.remove('PatchySleetNearby')
        current_day.classList.remove('PatchyFreezingDrizzleNearby')
        current_day.classList.remove('ThunderyOutbreaksInNearby')
        current_day.classList.remove('BlowingSnow')
        current_day.classList.remove('HeavySnow')
        current_day.classList.remove('ModerateOrHeavySnowShower')  
        current_day.classList.remove('LightSnow')
        current_day.classList.remove('ModerateRain')
        current_day.classList.remove('PatchyRrainPossible')
        current_day.classList.remove('LightRainShower')
        current_day.classList.remove('FreezingFog')
        current_day.classList.remove('LightRain')
        current_day.classList.remove('fog')
        current_day.classList.remove('HeavyRain')







      current_day.classList.add('mist')

      
    }
    else if(descriptionText.innerHTML==`Patchy rain nearby`)
    {
        // 7
        current_day.classList.remove('Clear')
        current_day.classList.remove('Overcast')
        current_day.classList.remove('Cloudy')
        current_day.classList.remove('Partly-cloudy')
        current_day.classList.remove('ForAll')
        current_day.classList.remove('Sunny')
        current_day.classList.remove('mist')
        current_day.classList.remove('PatchySnowNearby')
        current_day.classList.remove('PatchySleetNearby')
        current_day.classList.remove('PatchyFreezingDrizzleNearby')
        current_day.classList.remove('ThunderyOutbreaksInNearby')
        current_day.classList.remove('BlowingSnow')
        current_day.classList.remove('HeavySnow')
        current_day.classList.remove('ModerateOrHeavySnowShower')
        current_day.classList.remove('LightSnow')
        current_day.classList.remove('ModerateRain')
        current_day.classList.remove('PatchyRrainPossible')
        current_day.classList.remove('LightRainShower')
        current_day.classList.remove('FreezingFog')
        current_day.classList.remove('LightRain')
        current_day.classList.remove('fog')
        current_day.classList.remove('HeavyRain')




        current_day.classList.add('PatchyRainNearby')
    }
    else if(descriptionText.innerHTML==`Patchy snow nearby`)
    {
        // 8
        current_day.classList.remove('Clear')
        current_day.classList.remove('Overcast')
        current_day.classList.remove('Cloudy')
        current_day.classList.remove('Partly-cloudy')
        current_day.classList.remove('ForAll')
        current_day.classList.remove('Sunny')
        current_day.classList.remove('mist')
        current_day.classList.remove('PatchyRainNearby')
        current_day.classList.remove('PatchySleetNearby')
        current_day.classList.remove('PatchyFreezingDrizzleNearby')
        current_day.classList.remove('ThunderyOutbreaksInNearby')
        current_day.classList.remove('BlowingSnow')
        current_day.classList.remove('HeavySnow')
        current_day.classList.remove('ModerateOrHeavySnowShower')  
        current_day.classList.remove('LightSnow')
        current_day.classList.remove('ModerateRain')
        current_day.classList.remove('PatchyRrainPossible')
        current_day.classList.remove('LightRainShower')
        current_day.classList.remove('FreezingFog')
        current_day.classList.remove('LightRain')
        current_day.classList.remove('fog')
        current_day.classList.remove('HeavyRain')





    current_day.classList.add('PatchySnowNearby')
  
    }

    else if(descriptionText.innerHTML==`Patchy sleet nearby`)
    {
        // 9
        current_day.classList.remove('Clear')
        current_day.classList.remove('Overcast')
        current_day.classList.remove('Cloudy')
        current_day.classList.remove('Partly-cloudy')
        current_day.classList.remove('ForAll')
        current_day.classList.remove('Sunny')
        current_day.classList.remove('mist')
        current_day.classList.remove('PatchyRainNearby')
        current_day.classList.remove('PatchySnowNearby')
        current_day.classList.remove('PatchyFreezingDrizzleNearby')
        current_day.classList.remove('ThunderyOutbreaksInNearby')
        current_day.classList.remove('BlowingSnow')
        current_day.classList.remove('HeavySnow')
        current_day.classList.remove('ModerateOrHeavySnowShower')
        current_day.classList.remove('LightSnow')
        current_day.classList.remove('ModerateRain')
        current_day.classList.remove('PatchyRrainPossible')
        current_day.classList.remove('LightRainShower')
        current_day.classList.remove('FreezingFog')
        current_day.classList.remove('LightRain')
        current_day.classList.remove('fog')
        current_day.classList.remove('HeavyRain')




        current_day.classList.add('PatchySleetNearby')
    }

    else if(descriptionText.innerHTML==`Patchy freezing drizzle nearby`)
    {
        // 10
        current_day.classList.remove('Clear')
        current_day.classList.remove('Overcast')
        current_day.classList.remove('Cloudy')
        current_day.classList.remove('Partly-cloudy')
        current_day.classList.remove('ForAll')
        current_day.classList.remove('Sunny')
        current_day.classList.remove('mist')
        current_day.classList.remove('PatchyRainNearby')
        current_day.classList.remove('PatchySnowNearby')
        current_day.classList.remove('PatchySleetNearby')
        current_day.classList.remove('ThunderyOutbreaksInNearby')
        current_day.classList.remove('BlowingSnow')
        current_day.classList.remove('HeavySnow')
        current_day.classList.remove('ModerateOrHeavySnowShower')
        current_day.classList.remove('LightSnow')
        current_day.classList.remove('ModerateRain')
        current_day.classList.remove('PatchyRrainPossible')
        current_day.classList.remove('LightRainShower')
        current_day.classList.remove('FreezingFog')
        current_day.classList.remove('LightRain')
        current_day.classList.remove('fog')
        current_day.classList.remove('HeavyRain')




        current_day.classList.add('PatchyFreezingDrizzleNearby')
    }

    
    else if(descriptionText.innerHTML==`Thundery outbreaks in nearby`)
    {
        // 11
        current_day.classList.remove('Clear')
        current_day.classList.remove('Overcast')
        current_day.classList.remove('Cloudy')
        current_day.classList.remove('Partly-cloudy')
        current_day.classList.remove('ForAll')
        current_day.classList.remove('Sunny')
        current_day.classList.remove('mist')
        current_day.classList.remove('PatchyRainNearby')
        current_day.classList.remove('PatchySnowNearby')
        current_day.classList.remove('PatchySleetNearby')
        current_day.classList.remove('PatchyFreezingDrizzleNearby')
        current_day.classList.remove('BlowingSnow')
        current_day.classList.remove('HeavySnow')
        current_day.classList.remove('ModerateOrHeavySnowShower')
        current_day.classList.remove('LightSnow')
        current_day.classList.remove('ModerateRain')
        current_day.classList.remove('PatchyRrainPossible')
        current_day.classList.remove('LightRainShower')
        current_day.classList.remove('FreezingFog')
        current_day.classList.remove('LightRain')
        current_day.classList.remove('fog')
        current_day.classList.remove('HeavyRain')



        current_day.classList.add('ThunderyOutbreaksInNearby')
    }
    else if(descriptionText.innerHTML==`Blowing snow`||descriptionText.innerHTML==`Light drizzle`)
    {
        // 12
        current_day.classList.remove('Clear')
        current_day.classList.remove('Overcast')
        current_day.classList.remove('Cloudy')
        current_day.classList.remove('Partly-cloudy')
        current_day.classList.remove('ForAll')
        current_day.classList.remove('Sunny')
        current_day.classList.remove('mist')
        current_day.classList.remove('PatchyRainNearby')
        current_day.classList.remove('PatchySnowNearby')
        current_day.classList.remove('PatchySleetNearby')
        current_day.classList.remove('ThunderyOutbreaksInNearby')
        current_day.classList.remove('PatchyFreezingDrizzleNearby')
        current_day.classList.remove('HeavySnow')
        current_day.classList.remove('ModerateOrHeavySnowShower')
        current_day.classList.remove('LightSnow')
        current_day.classList.remove('ModerateRain')
        current_day.classList.remove('PatchyRrainPossible')
        current_day.classList.remove('LightRainShower')
        current_day.classList.remove('FreezingFog')
        current_day.classList.remove('LightRain')
        current_day.classList.remove('fog')
        current_day.classList.remove('HeavyRain')


        current_day.classList.add('BlowingSnow')
    }
    else if(descriptionText.innerHTML==`Heavy snow`)
    {
        // 13
        current_day.classList.remove('Clear')
        current_day.classList.remove('Overcast')
        current_day.classList.remove('Cloudy')
        current_day.classList.remove('Partly-cloudy')
        current_day.classList.remove('ForAll')
        current_day.classList.remove('Sunny')
        current_day.classList.remove('mist')
        current_day.classList.remove('PatchyRainNearby')
        current_day.classList.remove('PatchySnowNearby')
        current_day.classList.remove('PatchySleetNearby')
        current_day.classList.remove('ThunderyOutbreaksInNearby')
        current_day.classList.remove('PatchyFreezingDrizzleNearby')
        current_day.classList.remove('BlowingSnow')
        current_day.classList.remove('ModerateOrHeavySnowShower')
        current_day.classList.remove('LightSnow')
        current_day.classList.remove('ModerateRain')
        current_day.classList.remove('PatchyRrainPossible')
        current_day.classList.remove('LightRainShower')
        current_day.classList.remove('FreezingFog')
        current_day.classList.remove('LightRain')
        current_day.classList.remove('fog')
        current_day.classList.remove('HeavyRain')

    
        current_day.classList.add('HeavySnow')
    }
    else if(descriptionText.innerHTML==`Moderate or heavy snow showers`||descriptionText.innerHTML==`Patchy moderate snow`)
    {
        // 14
        current_day.classList.remove('Clear')
        current_day.classList.remove('Overcast')
        current_day.classList.remove('Cloudy')
        current_day.classList.remove('Partly-cloudy')
        current_day.classList.remove('ForAll')
        current_day.classList.remove('Sunny')
        current_day.classList.remove('mist')
        current_day.classList.remove('PatchyRainNearby')
        current_day.classList.remove('PatchySnowNearby')
        current_day.classList.remove('PatchySleetNearby')
        current_day.classList.remove('ThunderyOutbreaksInNearby')
        current_day.classList.remove('PatchyFreezingDrizzleNearby')
        current_day.classList.remove('BlowingSnow')
        current_day.classList.remove('HeavySnow')
        current_day.classList.remove('LightSnow')
        current_day.classList.remove('ModerateRain')
        current_day.classList.remove('PatchyRrainPossible')     
        current_day.classList.remove('LightRainShower')
        current_day.classList.remove('FreezingFog')
        current_day.classList.remove('LightRain')
        current_day.classList.remove('fog')
        current_day.classList.remove('HeavyRain')


        current_day.classList.add('ModerateOrHeavySnowShower')
    }
     else if(descriptionText.innerHTML==`Light snow`)
    {
        // 14
        current_day.classList.remove('Clear')
        current_day.classList.remove('Overcast')
        current_day.classList.remove('Cloudy')
        current_day.classList.remove('Partly-cloudy')
        current_day.classList.remove('ForAll')
        current_day.classList.remove('Sunny')
        current_day.classList.remove('mist')
        current_day.classList.remove('PatchyRainNearby')
        current_day.classList.remove('PatchySnowNearby')
        current_day.classList.remove('PatchySleetNearby')
        current_day.classList.remove('ThunderyOutbreaksInNearby')
        current_day.classList.remove('PatchyFreezingDrizzleNearby')
        current_day.classList.remove('BlowingSnow')
        current_day.classList.remove('HeavySnow')
        current_day.classList.remove('ModerateOrHeavySnowShower')
        current_day.classList.remove('ModerateRain')
        current_day.classList.remove('PatchyRrainPossible')
        current_day.classList.remove('LightRainShower')
        current_day.classList.remove('FreezingFog')
        current_day.classList.remove('LightRain')
        current_day.classList.remove('fog')
        current_day.classList.remove('HeavyRain')




        current_day.classList.add('LightSnow')
    }
    else if(descriptionText.innerHTML==`Moderate rain`)
    {
        // 15
        current_day.classList.remove('Clear')
        current_day.classList.remove('Overcast')
        current_day.classList.remove('Cloudy')
        current_day.classList.remove('Partly-cloudy')
        current_day.classList.remove('ForAll')
        current_day.classList.remove('Sunny')
        current_day.classList.remove('mist')
        current_day.classList.remove('PatchyRainNearby')
        current_day.classList.remove('PatchySnowNearby')
        current_day.classList.remove('PatchySleetNearby')
        current_day.classList.remove('ThunderyOutbreaksInNearby')
        current_day.classList.remove('PatchyFreezingDrizzleNearby')
        current_day.classList.remove('BlowingSnow')
        current_day.classList.remove('HeavySnow')
        current_day.classList.remove('ModerateOrHeavySnowShower')
        current_day.classList.remove('PatchyRrainPossible')
        current_day.classList.remove('LightRainShower')
        current_day.classList.remove('FreezingFog')
        current_day.classList.remove('LightRain')
        current_day.classList.remove('fog')
        current_day.classList.remove('HeavyRain')




        current_day.classList.add('ModerateRain')
    }
    else if(descriptionText.innerHTML==`Patchy rain possible`)
    {
        // 16
        current_day.classList.remove('Clear')
        current_day.classList.remove('Overcast')
        current_day.classList.remove('Cloudy')
        current_day.classList.remove('Partly-cloudy')
        current_day.classList.remove('ForAll')
        current_day.classList.remove('Sunny')
        current_day.classList.remove('mist')
        current_day.classList.remove('PatchyRainNearby')
        current_day.classList.remove('PatchySnowNearby')
        current_day.classList.remove('PatchySleetNearby')
        current_day.classList.remove('ThunderyOutbreaksInNearby')
        current_day.classList.remove('PatchyFreezingDrizzleNearby')
        current_day.classList.remove('BlowingSnow')
        current_day.classList.remove('HeavySnow')
        current_day.classList.remove('ModerateOrHeavySnowShower')
        current_day.classList.remove('ModerateRain')
        current_day.classList.remove('LightRainShower')
        current_day.classList.remove('FreezingFog')
        current_day.classList.remove('LightRain')
        current_day.classList.remove('fog')
        current_day.classList.remove('HeavyRain')





        current_day.classList.add('PatchyRrainPossible')
    }
    else if(descriptionText.innerHTML==`Light rain shower`)
    {
        // 18
        current_day.classList.remove('Clear')
        current_day.classList.remove('Overcast')
        current_day.classList.remove('Cloudy')
        current_day.classList.remove('Partly-cloudy')
        current_day.classList.remove('ForAll')
        current_day.classList.remove('Sunny')
        current_day.classList.remove('mist')
        current_day.classList.remove('PatchyRainNearby')
        current_day.classList.remove('PatchySnowNearby')
        current_day.classList.remove('PatchySleetNearby')
        current_day.classList.remove('ThunderyOutbreaksInNearby')
        current_day.classList.remove('PatchyFreezingDrizzleNearby')
        current_day.classList.remove('BlowingSnow')
        current_day.classList.remove('HeavySnow')
        current_day.classList.remove('ModerateOrHeavySnowShower')
        current_day.classList.remove('ModerateRain')
        current_day.classList.remove('PatchyRrainPossible')
        current_day.classList.remove('FreezingFog')
        current_day.classList.remove('LightRain')
        current_day.classList.remove('fog')
        current_day.classList.remove('HeavyRain')





        current_day.classList.add('LightRainShower')
    }




    else if(descriptionText.innerHTML==`Fog`)
    {
        // 19
        current_day.classList.remove('Clear')
        current_day.classList.remove('Overcast')
        current_day.classList.remove('Cloudy')
        current_day.classList.remove('Partly-cloudy')
        current_day.classList.remove('ForAll')
        current_day.classList.remove('Sunny')
        current_day.classList.remove('mist')
        current_day.classList.remove('PatchyRainNearby')
        current_day.classList.remove('PatchySnowNearby')
        current_day.classList.remove('PatchySleetNearby')
        current_day.classList.remove('ThunderyOutbreaksInNearby')
        current_day.classList.remove('PatchyFreezingDrizzleNearby')
        current_day.classList.remove('BlowingSnow')
        current_day.classList.remove('HeavySnow')
        current_day.classList.remove('ModerateOrHeavySnowShower')
        current_day.classList.remove('ModerateRain')
        current_day.classList.remove('PatchyRrainPossible')
        current_day.classList.remove('LightRainShower')
        current_day.classList.remove('LightRain')
        current_day.classList.remove('FreezingFog')
        current_day.classList.remove('HeavyRain')





        current_day.classList.add('fog')
    }
    else if(descriptionText.innerHTML==`Light rain`)
    {
        // 20
        current_day.classList.remove('Clear')
        current_day.classList.remove('Overcast')
        current_day.classList.remove('Cloudy')
        current_day.classList.remove('Partly-cloudy')
        current_day.classList.remove('ForAll')
        current_day.classList.remove('Sunny')
        current_day.classList.remove('mist')
        current_day.classList.remove('PatchyRainNearby')
        current_day.classList.remove('PatchySnowNearby')
        current_day.classList.remove('PatchySleetNearby')
        current_day.classList.remove('ThunderyOutbreaksInNearby')
        current_day.classList.remove('PatchyFreezingDrizzleNearby')
        current_day.classList.remove('BlowingSnow')
        current_day.classList.remove('HeavySnow')
        current_day.classList.remove('ModerateOrHeavySnowShower')
        current_day.classList.remove('ModerateRain')
        current_day.classList.remove('PatchyRrainPossible')
        current_day.classList.remove('LightRainShower')
        current_day.classList.remove('FreezingFog')
        current_day.classList.remove('fog')
        current_day.classList.remove('HeavyRain')






        current_day.classList.add('LightRain')
    }
    else if(descriptionText.innerHTML==`Freezing fog`)
    {
        // 21
        current_day.classList.remove('Clear')
        current_day.classList.remove('Overcast')
        current_day.classList.remove('Cloudy')
        current_day.classList.remove('Partly-cloudy')
        current_day.classList.remove('ForAll')
        current_day.classList.remove('Sunny')
        current_day.classList.remove('mist')
        current_day.classList.remove('PatchyRainNearby')
        current_day.classList.remove('PatchySnowNearby')
        current_day.classList.remove('PatchySleetNearby')
        current_day.classList.remove('ThunderyOutbreaksInNearby')
        current_day.classList.remove('PatchyFreezingDrizzleNearby')
        current_day.classList.remove('BlowingSnow')
        current_day.classList.remove('HeavySnow')
        current_day.classList.remove('ModerateOrHeavySnowShower')
        current_day.classList.remove('ModerateRain')
        current_day.classList.remove('PatchyRrainPossible')
        current_day.classList.remove('LightRainShower')
        current_day.classList.remove('LightRain')
        current_day.classList.remove('fog')
        current_day.classList.remove('HeavyRain')






        current_day.classList.add('FreezingFog')
    }
    else if(descriptionText.innerHTML==`Heavy rain`)
    {
        // 22
        current_day.classList.remove('Clear')
        current_day.classList.remove('Overcast')
        current_day.classList.remove('Cloudy')
        current_day.classList.remove('Partly-cloudy')
        current_day.classList.remove('ForAll')
        current_day.classList.remove('Sunny')
        current_day.classList.remove('mist')
        current_day.classList.remove('PatchyRainNearby')
        current_day.classList.remove('PatchySnowNearby')
        current_day.classList.remove('PatchySleetNearby')
        current_day.classList.remove('ThunderyOutbreaksInNearby')
        current_day.classList.remove('PatchyFreezingDrizzleNearby')
        current_day.classList.remove('BlowingSnow')
        current_day.classList.remove('HeavySnow')
        current_day.classList.remove('ModerateOrHeavySnowShower')
        current_day.classList.remove('ModerateRain')
        current_day.classList.remove('PatchyRrainPossible')
        current_day.classList.remove('LightRainShower')
        current_day.classList.remove('LightRain')
        current_day.classList.remove('fog')
        current_day.classList.remove('FreezingFog')


        current_day.classList.add('HeavyRain')
    }
    
    else
    {
        current_day.classList.remove('ModerateRain')
        current_day.classList.remove('PatchyRrainPossible')
        current_day.classList.remove('Clear')
        current_day.classList.remove('Overcast')
        current_day.classList.remove('Cloudy')
        current_day.classList.remove('Partly-cloudy')
        current_day.classList.remove('ForAll')
        current_day.classList.remove('Sunny')
        current_day.classList.remove('mist')
        current_day.classList.remove('PatchyRainNearby')
        current_day.classList.remove('PatchySnowNearby')
        current_day.classList.remove('PatchyFreezingDrizzleNearby')
        current_day.classList.remove('ThunderyOutbreaksInNearby')
        current_day.classList.remove('BlowingSnow')
        current_day.classList.remove('PatchySleetNearby')
        current_day.classList.remove('HeavySnow')
        current_day.classList.remove('ModerateOrHeavySnowShower')
        current_day.classList.remove('LightSnow')
        current_day.classList.remove('LightRainShower')
        current_day.classList.remove('FreezingFog')
        current_day.classList.remove('LightRain')
        current_day.classList.remove('fog')
        current_day.classList.remove('HeavyRain')





        


        current_day.classList.add('ForAll')
    }
}



