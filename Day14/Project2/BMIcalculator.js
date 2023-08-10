const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const guide = document.querySelector('#guide');

    if (height == '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Enter valid height It is a ${height}`;
    } else if (weight == '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Enter valid weight It is a ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
        if (bmi <= 18.6) {
            guide.innerHTML = 'Under Weight';
        } else if (bmi <= 24.9) {
            guide.innerHTML = 'Normal Range';
        } else {
            guide.innerHTML = 'Overweight';
        }
    }
});
