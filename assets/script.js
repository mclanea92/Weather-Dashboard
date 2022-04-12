var cityName = document.querySelector('.citynameinput')
var APIkey = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=b593b8f7d2b3fb75befb732897df7d93"
var todayWeather = document.querySelector('.todayWeather')
var citySearch = document.querySelector('.citySearch')

var test = "https://api.openweathermap.org/data/2.5/weather?q=philadelphia&units=imperial&appid=b593b8f7d2b3fb75befb732897df7d93"
// used to find what data i need.
fetch(test)
.then(res => res.json())
    .then(data => console.log(data))


function CitySeachFunction(){
    var cityName = document.querySelector('.citynameinput').value
var APIkey = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=b593b8f7d2b3fb75befb732897df7d93"
fetch(APIkey).then(function(response){
    return response.json()
}).then(function(data){
    console.log(data.main.temp)
    var currentTemp = document.getElementById('#currentTemp')
    currentTemp = data.main.temp
    todayWeather.append(Math.floor(currentTemp))
})
}


citySearch.addEventListener('click', CitySeachFunction) 
   

