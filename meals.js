const requestURL = 'https://www.themealdb.com/api/json/v1/1/random.php';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const meaLs = jsonObject['meals'];
    for (let i = 0; i < meaLs.length; i++) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      h2.textContent =
        'Category: ' + meaLs[0].strArea + ' ' + meaLs[0].strCategory;
      let h3 = document.createElement('h3');
      h3.textContent = 'Meal: ' + meaLs[0].strMeal;
      let a_h3 = document.createElement('p');
      a_h3.textContent = 'Instructions: ' + meaLs[0].strInstructions;
      let image = document.createElement('img');
      image.setAttribute('src', meaLs[0].strMealThumb);
      image.alt = meaLs[0].strMeal;

      //omfg
      let ingrTit = document.createElement('h2');
      ingrTit.textContent = 'Ingredients:';
      let ingre = document.createElement('p');
      let dishTit = document.createElement('h2');
      dishTit.textContent = 'Tools Needed:';
      let dish = document.createElement('p');
      let tryAgain = Object.values(meaLs[0]);
      let hmmMMM;
      let hMMMMM;
      console.log(tryAgain);
      for (let f = 9; f < 28; f++) {
        //should be 28 but okay
        hmmMMM = tryAgain[f];

        tryAgain.filter((n) => n);
        ingre.innerHTML += hmmMMM + '<br>';
      }
      for (let f = 29; f < 43; f++) {
        //should be 28 but okay
        hmmMMM = tryAgain[f];
        dish.innerHTML += hmmMMM + '<br>';
        console.log(hmmMMM);
      }
      card.appendChild(h2);
      card.appendChild(h3);
      card.appendChild(a_h3);
      card.appendChild(image);
      card.appendChild(ingrTit);
      card.appendChild(ingre);
      card.appendChild(dishTit);
      card.appendChild(dish);
      document.querySelector('.tester').appendChild(card);
    }
  });
