const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '66ffd211747msha7a49aca734e354p1a39f3jsn37c94a065cbd',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const cel=(kel)=>{
      let kel2=parseInt(kel)
	  return kel2-273
}
const convertUnixTime=(unix)=> {
	let a = new Date(unix * 1000),
		year = a.getFullYear(),
		months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
		month = months[a.getMonth()],
		date = a.getDate()
	;
	let i ='th';
	if(date%10 == 1){
      i='st'
	}
	else if(date%10 == 2){
      i='nd'
	}
	else if(date%10 == 3){
      i='rd'
	}
	return ` ${date} ${i} ${month} ,${year}`;
  }
let p =fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=100.99&appid=d5490c56fb3111da3e81c4d223b9de58')

	p.then((response) =>{return response.json()})
	.then((value)=> {
		console.log(value)
		description = value.weather[0].description
		icon=value.weather[0].icon
		weather.innerHTML= `<img class="mx-7 " src="http://openweathermap.org/img/wn/${icon}@2x.png">
		<h1 class=" text-2xl text-white text-center italic "">${description}</h1>`
		temp=document.getElementById('Temp')

		temp.innerHTML = cel(value.main.temp);
		feel=document.getElementById('feel')
		
		feel.innerHTML=`Feels Like ${cel(value.main.feels_like)}℃`

		divide = document.getElementById('divide')
		divide.innerHTML =`${cel(value.main.temp_max)}/${cel(value.main.temp_min)}`
		let humidity = document.getElementById('Humidity')
		humidity.innerHTML=`Humidity:${value.main.humidity}%`
		let date=document.getElementById('date')
        date.innerHTML=`${convertUnixTime(value.dt)}`
		wind.innerHTML=`${value.wind.speed}m/s`
	})
	.catch(err=>console.error(err))
// 	function convertUnixTime(unix) {
//   let a = new Date(unix * 1000),
//       year = a.getFullYear(),
//       months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
//       month = months[a.getMonth()],
//       date = a.getDate(),
//       hour = a.getHours(),
//       min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes(),
//       sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();
//   return `${month} ${date}, ${year}, ${hour}:${min}:${sec}`;
// }
// 	// d5490c56fb3111da3e81c4d223b9de58
	// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
	// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}
	// {
	// 	"coord": {
	// 	  "lon": 10.99,
	// 	  "lat": 44.34
	// 	},
	// 	"weather": [
	// 	  {
	// 		"id": 501,
	// 		"main": "Rain",
	// 		"description": "moderate rain",
	// 		"icon": "10d"
	// 	  }
	// 	],
	// 	"base": "stations",
	// 	"main": {
	// 	  "temp": 298.48,
	// 	  "feels_like": 298.74,
	// 	  "temp_min": 297.56,
	// 	  "temp_max": 300.05,
	// 	  "pressure": 1015,
	// 	  "humidity": 64,
	// 	  "sea_level": 1015,
	// 	  "grnd_level": 933
	// 	},
	// 	"visibility": 10000,
	// 	"wind": {
	// 	  "speed": 0.62,
	// 	  "deg": 349,
	// 	  "gust": 1.18
	// 	},
	// 	"rain": {
	// 	  "1h": 3.16
	// 	},
	// 	"clouds": {
	// 	  "all": 100
	// 	},
	// 	"dt": 1661870592,
	// 	"sys": {
	// 	  "type": 2,
	// 	  "id": 2075663,
	// 	  "country": "IT",
	// 	  "sunrise": 1661834187,
	// 	  "sunset": 1661882248
	// 	},
	// 	"timezone": 7200,
	// 	"id": 3163858,
	// 	"name": "Zocca",
	// 	"cod": 200
	//   }
								   
	  