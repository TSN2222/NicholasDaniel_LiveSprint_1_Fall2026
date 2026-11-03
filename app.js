(function () {
  'use strict';

  const showCatBtn = document.getElementById('show-cat');
  const showDogBtn = document.getElementById('show-dog');
  const showCowBtn = document.getElementById('show-cow');
  const hideCatBtn = document.getElementById('hide-cat');
  const hideDogBtn = document.getElementById('hide-dog');
  const hideCowBtn = document.getElementById('hide-cow');

  const catArticle = document.getElementById('cat');
  const dogArticle = document.getElementById('dog');
  const cowArticle = document.getElementById('cow');

  showCatBtn.addEventListener('click', (event) => {
    catArticle.style.visibility = 'visible';
  });

  showDogBtn.addEventListener('click', (event) => {
    dogArticle.style.visibility = 'visible';
  });

  showCowBtn.addEventListener('click', (event) => {
    cowArticle.style.visibility = 'visible';
  });

  hideCatBtn.addEventListener('click', (event) => {
    catArticle.style.visibility = 'hidden';
  });

  hideDogBtn.addEventListener('click', (event) => {
    dogArticle.style.visibility = 'hidden';
  });

  hideCowBtn.addEventListener('click', (event) => {
    cowArticle.style.visibility = 'hidden';
  });
})();
