const datePicker = document.getElementById('datePicker');
const rangeSlider = document.getElementById('rangeSlider');
const colorPicker = document.getElementById('colorPicker');
const btn = document.getElementById('button');

const rangeValue = document.getElementById('rangeValue');
const dateResult = document.getElementById('dateResult');
const rangeResult = document.getElementById('rangeResult');
const colorResult = document.getElementById('colorResult');

rangeSlider.addEventListener('input', function() {
    rangeValue.textContent = rangeSlider.value;
});

btn.addEventListener('click', function() {

    const selectedDate = datePicker.value;
    const selectedRange = rangeSlider.value;
    const selectedColor = colorPicker.value;

    dateResult.textContent = selectedDate;
    rangeResult.textContent = selectedRange;
    colorResult.textContent = "ocena kolorem";
    colorResult.style.color = selectedColor;
});