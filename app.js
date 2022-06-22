const rangeSliderElement = document.querySelector('#slider');
const sliderLabelElement = document.querySelector('.slider-label');
const dropdownLabelElement = document.querySelector('#countries-label');
const dropdownListElement = document.querySelector('#countries-dropdown-list');
const checkboxElement = document.querySelectorAll('.input-checkbox');
const dropdownLabelWrapperElement = document.querySelector(
  '#countries-label-wrapper'
);
const pickDropdownLabelElement = document.querySelector(
  '#picks-dropdown-label'
);
const picksDropdownListElement = document.querySelector('#picks-dropdown-list');

const platformLabelElement = document.querySelector('#platform-dropdown-label');
const platformDropdownList = document.querySelector('#platform-dropdown-list');
const platformLabelWrapperElement = document.querySelector(
  '#platform-label-wrapper'
);

rangeSliderElement.defaultValue = '0';

sliderLabelElement.innerText = rangeSliderElement.value;

rangeSliderElement.onchange = function () {
  let rangeValue = this.value;
  sliderLabelElement.innerHTML = rangeValue;
  parseFloat(rangeValue);

  if (rangeValue <= 500) {
    rangeSliderElement.step = 100;
  }
  if (rangeValue >= 2000) {
    rangeSliderElement.step = 500;
  }
  if (rangeValue >= 5000) {
    rangeSliderElement.step = 5000;
  }
};

dropdownLabelElement.addEventListener('click', () => {
  dropdownListElement.classList.toggle('open');
});

pickDropdownLabelElement.addEventListener('click', () => {
  picksDropdownListElement.classList.toggle('open');
});

platformLabelElement.addEventListener('click', () => {
  platformDropdownList.classList.toggle('open');
});

const dropdownOptions = [].slice.call(
  document.querySelectorAll('#countries-dropdown-list .dropdown-option')
);

const picksDropdownOptions = [].slice.call(
  document.querySelectorAll('#picks-dropdown-list .dropdown-option')
);

const platformDropdownOptions = [];

// let checkedItems = [];
// let checkedFlags = [];

dropdownOptions.forEach((option) => {
  option.addEventListener('change', () => {
    let targetString = option.querySelector('.option-name').innerText;
    let currentCheckbox = option.querySelector('input');
    let currentCheck = option.querySelector('.input-checkbox');
    let currentFlag = option.querySelector('.flag-img').src;

    if (currentCheckbox.checked) {
      currentCheckbox.checked = true;
      currentCheck.classList.add('bg-color');

      let countryDiv = document.createElement('div');
      dropdownLabelWrapperElement.appendChild(countryDiv);
      countryDiv.classList.add('.country-div');
      countryDiv.style.display = 'flex';
      countryDiv.style.flexDirection = 'column';
      countryDiv.style.alignItems = 'center';

      // let labelDropdownOptionElement = option.querySelector('.dropdown-option');
      // const clone = labelDropdownOptionElement.cloneNode(true);
      // dropdownLabelWrapperElement.appendChild(clone);

      let countryNameText = document.createElement('div');
      countryDiv.appendChild(countryNameText);
      countryNameText.innerHTML = targetString;
      countryNameText.style.margin = '0px 5px 0px';

      // checkedItems.push(targetString);

      let countryFlagImg = document.createElement('img');
      countryFlagImg.src = currentFlag;
      countryFlagImg.style.width = '20px';
      countryFlagImg.style.height = '20px';
      countryDiv.appendChild(countryFlagImg);

      // checkedFlags.push(countryFlagImg.src);

      // let countryItemsArray = checkedItems.concat(checkedFlags);
      // console.log(countryItemsArray);

      // const countryArray = [].slice.call(
      //   document.querySelectorAll('.country-div')
      // );

      // function remove() {
      //   let copiedDiv = document.querySelector('.country-div');
      //   console.log(copiedDiv);
      //   dropdownLabelWrapperElement.removeChild(
      //     copiedDiv[copiedDiv.length - 1]
      //   );
      // }
      // remove();
    } else {
      currentCheckbox.checked = false;
      currentCheck.classList.remove('bg-color');

      // if (dropdownLabelWrapperElement.className == '.country-div') {
      //   dropdownLabelWrapperElement.removeChild('div');
      // }

      // checkedFlags = checkedFlags.filter(function (image) {
      //   return image.src != currentFlag.src;
      // });

      // function removeElements(elements) {
      //   for (let i = 0; i < elements.length-1; i++) {
      //     elements[i].parentElement.removeChild(elements[i]);
      //     console.log(elements[i]);
      //   }
      // }
      // removeElements();

      // removeElements(document.querySelectorAll('.dropdown-label-wrapper img'));
    }

    // let checkedItemsString = checkedItems.join(' ');

    // dropdownLabelElement.innerHTML = checkedItemsString;

    // console.log(checkedItemsString);
  });
});

picksDropdownOptions.forEach((option) => {
  option.addEventListener('click', (e) => {
    let targetPick = option.querySelector('.option-name').innerText;
    let currentRadio = option.querySelector('input');

    if (!currentRadio.checked) {
      e.preventDefault();
      pickDropdownLabelElement.innerHTML = targetPick;
    }
  });
});

const sizeButtonElement = document.querySelectorAll(
  '.quote-radio-button-wrapper'
);

const sizeButtonElements = [].slice.call(
  document.querySelectorAll('.quote-radio-button-wrapper')
);

sizeButtonElements.forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    element.classList.toggle('border');
  });
});

const platformOptions = [].slice.call(
  document.querySelectorAll('#platform-dropdown-list .dropdown-option')
);

console.log(platformOptions);

platformOptions.forEach((option) => {
  option.addEventListener('change', () => {
    let targetString = option.querySelector('.option-name').innerText;
    let currentCheckbox = option.querySelector('input');
    let currentCheck = option.querySelector('.input-checkbox');
    let currentFlag = option.querySelector('.flag-img').src;

    if (currentCheckbox.checked) {
      currentCheckbox.checked = true;
      currentCheck.classList.add('bg-color');

      let countryDiv = document.createElement('div');
      platformLabelWrapperElement.appendChild(countryDiv);
      countryDiv.classList.add('.country-div');
      countryDiv.style.display = 'flex';
      countryDiv.style.flexDirection = 'column';
      countryDiv.style.alignItems = 'center';

      let countryNameText = document.createElement('div');
      countryDiv.appendChild(countryNameText);
      countryNameText.innerHTML = targetString;
      countryNameText.style.margin = '0px 5px 0px';

      let countryFlagImg = document.createElement('img');
      countryFlagImg.src = currentFlag;
      countryFlagImg.style.width = '20px';
      countryFlagImg.style.height = '20px';
      countryDiv.appendChild(countryFlagImg);
    } else {
      currentCheckbox.checked = false;
      currentCheck.classList.remove('bg-color');
    }
  });
});
