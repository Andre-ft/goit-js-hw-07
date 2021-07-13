const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


function makeGallery(imageArray) {
  const ulElement = document.querySelector('#gallery');
  ulElement.classList.add('ul-container');
  
  const markUpString = imageArray.reduce(
    (string, item) => string + `<li><img class="image" src="${item.url} alt="${item.alt}" width="267" height="150"></li>`,
    ""
  );
  
  ulElement.insertAdjacentHTML('afterbegin', markUpString);  
}


makeGallery(images);
