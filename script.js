const apikey = "7b59f1de489649b185e65138253005";
const url = 'https://api.weatherapi.com/v1/current.json';

const searchButton = document.getElementById("searchbutton");


async function getWeather(city) {
    const response = await fetch(`${url}?key=${apikey}&q=${city}`);
    const data = await response.json();
    // console.log(data.current);
    document.querySelector(".weatherInfo").style.display = "block";
    if (response.ok) {
        document.getElementById("cityName").innerText = data.location.name;
        document.getElementById("temperature").innerText = `${data.current.temp_c}`;
        document.getElementById("condition").innerText = data.current.condition.text;
        document.getElementById("weatherIcon").src = `https:${data.current.condition.icon}`;
        document.getElementById("feelslike").innerText = `${data.current.feelslike_c}`;
        document.getElementById("windSpeed").innerText = `${data.current.wind_kph}`;
        document.getElementById("humidity").innerText = `${data.current.humidity}`;
        document.getElementById("precipitation").innerText = `${data.current.precip_mm}`;
    }
     else {
        alert("City not found. Please try again.");
        window.location.reload();
    }
}


searchButton.addEventListener("click", () => {
    getWeather(document.getElementById("cityInput").value);
});

document.getElementById("cityInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
       searchButton.click();
    }
});

document.getElementById("year").innerText = new Date().getFullYear();
