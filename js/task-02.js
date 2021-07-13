const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// ---   первый вариант с document.createElement()
function makeListFunction(selector) {
  const elementsArray = ingredients.map(el => {
    const newEl = document.createElement('li');
    newEl.textContent = el;
    return newEl;
  });
  
  document.querySelector(selector).append(...elementsArray); 
}

makeListFunction('#ingredients');

//  --- второй вариант без document.createElement()

// function makeListFunction(selector) {
//   document.querySelecto r(selector).innerHTML = ingredients.reduce(
//     (string, item) => string + `<li>${item}</li>`, "");
// }

