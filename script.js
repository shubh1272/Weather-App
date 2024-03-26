     const apiKey = "ec885dabfea71e3906e28cdcf84c5a1a";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weather_icon = document.querySelector(".weather-icon");


        async function checkWeather(city){
            const response = await fetch(apiUrl + city + `&appid=${apiKey}` );

            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
            }

            else{
                var data = await response.json();


            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp )+"°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

            if(data.weather[0].main =="Clouds"){
                weather_icon.src ="images/clouds.png"

            }

            else if(data.weather[0].main =="Rain"){
                weather_icon.src ="images/rain.png"

            }

            else if(data.weather[0].main =="Clear"){
                weather_icon.src ="images/clear.png"

            }

            else if(data.weather[0].main =="Drizzle"){
                weather_icon.src ="images/drizzle.png"

            }

            else if(data.weather[0].main =="Mist"){
                weather_icon.src ="images/mist.png"

            }

            else if(data.weather[0].main =="Snow"){
                weather_icon.src ="images/snow.png"

            }

            else if(data.weather[0].main =="Haze"){
                weather_icon.src ="images/clouds.png"

            }

            document.querySelector(".error").style.display = "none";

            }

            
         }

        

        searchBtn.addEventListener("click",()=>{
            checkWeather(searchBox.value);

        })

        checkWeather("ghaziabad");

        