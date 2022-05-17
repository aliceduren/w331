const requestURL = 'https://www.themealdb.com/api/json/v1/1/random.php';
function reload() {
  // location.reload();
  document.querySelector('button').textContent =
    'Lol. Just hit the reload button, stupid.';
}

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

      let image = document.createElement('img');
      image.setAttribute('src', meaLs[0].strMealThumb);
      image.alt = meaLs[0].strMeal;
      let adobtP = document.createElement('p');
      let a = document.createElement('a');
      var linkText = document.createTextNode('Recipe Source');
      a.appendChild(linkText);
      a.title = 'my title text';
      a.href = meaLs[0].strSource;
      adobtP.appendChild(a);
      console.log(meaLs[0]);
      //omfg
      let ingrTit = document.createElement('h2');
      ingrTit.textContent = 'Ingredients:';
      let ingre = document.createElement('p');
      let tryAgain = Object.values(meaLs[0]);
      console.log(tryAgain);
      for (let f = 9, c = 29; f < 28, c < 43; f++, c++) {
        //should be 28 but okay

        tryAgain.filter((n) => n);
        ingre.innerHTML += tryAgain[c] + ' ' + tryAgain[f] + '<br>';
      }
      let a_h3 = document.createElement('p');
      a_h3.textContent = 'Instructions: ' + meaLs[0].strInstructions;

      card.appendChild(h2);
      card.appendChild(h3);

      card.appendChild(image);
      card.appendChild(adobtP);
      card.appendChild(ingrTit);
      card.appendChild(ingre).style.textTransform = 'lowercase';
      card.appendChild(a_h3);
      document.querySelector('.tester').appendChild(card);
    }
  });
