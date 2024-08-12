const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
let currentIndex = 0;

const clickMe = document.getElementById('btn');

//change colors
clickMe.addEventListener('click', function () {
  //define the current color at the particular index
  const currentColor = colors[currentIndex];
  //apply the color to the webpage background
  document.querySelector('body').style.backgroundColor = colors[currentIndex];
  //display the name of the color
  document.querySelector(
    '.container h2'
  ).textContent = `Background Color : ${currentColor}`;
  //iterate through the colors array one at a time, on every click
  currentIndex++;
  if (currentIndex >= colors.length) {
    currentIndex = 0;
  }

  //console.log(colors[currentIndex]);
});
