const temperatureField = document.querySelector(".temp");
const locationField = document.querySelector(".time_location p");
const dataField = document.querySelector(".time_location span");
const weatherField = document.querySelector(".condition p");
const searchField = document.querySelector(".search_area");
const form = document.querySelector("form");

form.addEventListener('submit', searchForLocation);

let target = "India";

const fetchResult = async (targetLocation) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=16012e8af74842d69d1182836240906&q=${targetLocation}&aqi=no`;

    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    let locationName = data.location.name;
    let time = data.location.localtime;
    let temp = data.current.temp_c;
    let condition = data.current.condition.text;

    // Update the DOM with fetched data
    locationField.textContent = locationName;
    dataField.textContent = time;
    temperatureField.textContent = `${temp}°C`;
    weatherField.textContent = condition;
};

function searchForLocation(e) {
    e.preventDefault();
    target = searchField.value;
    fetchResult(target);
}

fetchResult(target);
