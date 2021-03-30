console.log('Gekoppelt!')

const xhr = new XMLHttpRequest();

const form = document.querySelector("form");
const radioBtnOne = document.querySelector("#radioOne");
const radioBtnTwo = document.querySelector("#radioTwo");
const startDate = document.querySelector("#begindatum");
const endDate = document.querySelector("#einddatum");
const rangeOne = document.querySelector("#lesstof");
const rangeTwo = document.querySelector("#uitleg");
const rangeThree = document.querySelector("#eigeninzicht");

localStorageChecker = function () {
    try {
        localStorage.setItem('test', 'test');
        localStorage.removeItem('test');
        return true;
    } catch (e) {
        return false;
    }
}

// Met hulp van Oussama
form.addEventListener('blur', (event) => {
    const formData = new FormData(form);
    let formEntryData = {};

    for (const pair of formData.entries()) {
        // name en value in het object
        formEntryData[pair[0]] = pair[1];
    }

    if (localStorageChecker()) {
        localStorage.setItem(form.id, JSON.stringify(formEntryData));
    }

}, true);

// Met hulp van Oussama
function loadFormDataFromLocalStorage() {
    const storedFormData = localStorage.getItem(form.id);

    if (localStorageChecker()) {
        if (storedFormData) {
            const parsedStoredFormData = JSON.parse(storedFormData);

            for (var pair of Object.entries(parsedStoredFormData)) {
                const pairDomElement = document.getElementById(pair[0]);

                if (pairDomElement) {
                    pairDomElement.value = pair[1];

                    if (pairDomElement.type == 'range' && pairDomElement.value == pair[1]) {
                        const outputDomElement = document.getElementsByClassName(pair[0])[0];
                        outputDomElement.innerHTML = pair[1];
                    }
                } else {
                    const pairDomElements = document.getElementsByClassName(pair[0]);

                    for (const pairDomElement of pairDomElements) {
                        if (pairDomElement.type == 'radio' && pairDomElement.value == pair[1]) {
                            pairDomElement.checked = true;
                        }
                    }
                }
            }
        }
    }
}

// On DOMContentLoaded the function above will trigger to 
document.addEventListener('DOMContentLoaded', function () {
    loadFormDataFromLocalStorage();
}, false);

radioBtnOne.addEventListener('click', function () {
    // console.log(event.target.value)
    const icon = document.querySelector('#iconOne')
    if (radioBtnOne.checked === true) {
        icon.classList.add('visible')
    }
})

radioBtnTwo.addEventListener('click', function () {
    // console.log(event.target.value)
    const icon = document.querySelector('#iconTwo')
    if (radioBtnTwo.checked === true) {
        icon.classList.add('visible')
    }
})

startDate.addEventListener('focusout', function () {
    // console.log(event.target.value)
    const icon = document.querySelector('#iconThree')
    if (startDate.value != '') {
        icon.classList.add('visible')
    }
})

endDate.addEventListener('focusout', function () {
    // console.log(event.target.value)
    const icon = document.querySelector('#iconFour')
    if (endDate.value != '') {
        icon.classList.add('visible')
    }
})

rangeOne.addEventListener('focusout', function () {
    // console.log(event.target.value)
    const icon = document.querySelector('#iconFive')
    if (rangeOne.value != 0 || rangeTwo.value != null) {
        icon.classList.add('visible')
    }
})

rangeTwo.addEventListener('focusout', function () {
    // console.log(event.target.value)
    const icon = document.querySelector('#iconSix')
    if (rangeTwo.value != 0 || rangeTwo.value != null) {
        icon.classList.add('visible')
    }
})

rangeThree.addEventListener('focusout', function () {
    // console.log(event.target.value)
    const icon = document.querySelector('#iconSeven')
    if (rangeThree.value != '') {
        icon.classList.add('visible')
    }
})