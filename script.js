
// here request is made 

const apikey = "dc22099382abeb5bbc505df89a15001e";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function checkweather(search_value){
    const response =  await fetch( apiurl + `&q=${search_value}`+ `&appid=${apikey}`);
    var data = await response.json();

    if(data.cod == 404) // for error city 
    {
        const msg = document.createElement("div");
        msg.innerText = "Enter a valid city name";
        document.querySelector(".error_msg").style.display = "block"; // making  it none to block to display msg;
        document.querySelector(".error_msg").appendChild(msg);
        setTimeout(() => {
            document.querySelector(".error_msg").innerHTML = ""; 
            document.querySelector(".error_msg").style.display = "none";// making  it none after display msg;
        }, 2000);
    }
     
    forweather_img(data); // function for image updation

    document.querySelector(".weather_temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".city_name").innerHTML = data.name;

    document.querySelector(".humidity_value").innerHTML = data.main.humidity +"%";
    document.querySelector("#wind").innerHTML = data.wind.speed;    
}

function forweather_img(data){

    let weather_name = data.weather[0].main;
    const weather_img = document.querySelector(".images");

    if(weather_name == "Clouds" ) {
        weather_img.src = "cloudy.png";
    }
    else if(weather_name == "Clear") {
        weather_img.src = "clear.png";
    }
    else if(weather_name == "Rain") {
        weather_img.src = "rain.png";
    }
    else if(weather_name == "Drizzle") {
        weather_img.src = "drizzling.png";
    }
    else if(weather_name == "Mist") {
        weather_img.src = "mist.png";
    }
    else if(weather_name == "Wind") {
        weather_img.src = "wind.png";
    }
    else {
        weather_img.src = "haze.png";
    }
    
}

// search option 
const search = document.querySelector("#search");
const search_symbol = document.querySelector("#search_symbol");
search_symbol.addEventListener("click", ()=>
{
    const search_value = search.value;
    checkweather(search_value);

})
