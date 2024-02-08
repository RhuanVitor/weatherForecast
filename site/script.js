const key = "598de82ce9592caa5dd60ae045a033e9";

function showInfo(json_){
    document.querySelector(".city").innerHTML = "Tempo em " + json_.name;
    document.querySelector(".temp").innerHTML = Math.floor(json_.main.temp) + "ºC";
    document.querySelector(".climate-desc").innerHTML = json_.weather[0].description;
    document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${json_.weather[0].icon}.png`;
    document.querySelector(".humidity").innerHTML = "Umidade: " + json_.main.humidity + "%";
}

async function giveClimate(city){
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt_br`).then(response => response.json());
    showInfo(data);
}

function findCity(){
    let inputCity = document.querySelector('.city-input').value;
    giveClimate(inputCity);
}