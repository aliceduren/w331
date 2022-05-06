const lastUp = document.lastModified;

document.querySelector('#year').textContent = lastUp;

// const pic= "profilere.jpg";
//     document.querySelector("img").setAttribute('src',pic)
let x = new Date();
let y = x.getFullYear();
document.getElementById('date').textContent = y;

function CeltoFar(cel) {
  far = (cel * 9) / 5 + 32;
  return far;
}
let apiURL =
  'https://api.openweathermap.org/data/2.5/weather?id=5605242&units=metric&appid=a6bea4e16102442de7b4c070cffb4029';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('.weather').textContent = Math.round(
      jsObject.main.temp
    );
    document.querySelector('.fweather').textContent = CeltoFar(
      Math.round(jsObject.main.temp)
    );
  });
