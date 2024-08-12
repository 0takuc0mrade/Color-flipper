// const randomInt = Math.floor(Math.random() * 16777215);
// const hexColor = `#${randomInt.toString(16).padStart(6, '0')}`;

const clickMe = document.getElementById('btn');

//change colors
clickMe.addEventListener('click', function () {
  //generate random number between 0 and 16777215
  const randomInt = Math.floor(Math.random() * 16777215);
  //convert to hexadecimal string
  const hexColor = `#${randomInt.toString(16).padStart(6, '0')}`;
  //apply changes to the webpage
  document.querySelector('body').style.backgroundColor = hexColor;
  document.querySelector(
    '.container h2'
  ).textContent = `Background Color : ${hexColor}`;

  //console.log(hexColor);
});
