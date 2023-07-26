const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height < 0 || height === '' || isNaN(height)) {
    results.innerHTML = 'please Enter a valid Height';
  } else if (weight < 0 || weight === '' || isNaN(weight)) {
    results.innerHTML = 'please Enter a valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // result
    switch (true) {
      case bmi < 18.6:
        results.innerHTML = `<span style="color: yellow">your bmi is ${bmi} and you are Under Weight</span> `;
        break;
      case bmi > 18.5 && bmi <24.9:
        results.innerHTML = `<span style="color: green"> your bmi is ${bmi} and you are weight is good range</span>`;
        break;
      case bmi > 24.9:
        results.innerHTML = `<span style="color: red"">your bmi is ${bmi} and you are Overweight</span> `;
    }
  }
});