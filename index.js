let weather = {
    paris: {
      temp: 19.7,
      humidity: 80
    },
    tokyo: {
      temp: 17.3,
      humidity: 50
    },
    lisbon: {
      temp: 30.2,
      humidity: 20
    },
    "san francisco": {
      temp: 20.9,
      humidity: 100
    },
    oslo: {
      temp: -5,
      humidity: 20
    }
  };
  
  // write your code here

  let city = prompt("Please, enter a city...");
  city = city.toLowerCase();

  if (weather[city] !== undefined) {
    let temperature = weather[city].temp;
    let humidity = weather[city].humidity;
    let celsiusDegree = Math.round(temperature) ;
    let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);

    alert(`It is currenty ${celsiusDegree}°C in (${fahrenheitTemperature}°F) with a humidity of ${humidity}%`);
} else {
    alert(`Sorry, we don't know the weather for this city, try going to  https://www,google.come/searh?q=weather+${city}`);
  };