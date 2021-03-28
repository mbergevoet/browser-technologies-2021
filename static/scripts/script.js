console.log('Gekoppelt!')

localStorageChecker = function () {
    try {
        localStorage.setItem('test', 'test');
        localStorage.removeItem('test');
        return true;
    } catch (e) {
        return false;
    }
}

const form = document.querySelector("form");

form.addEventListener('blur', (event) => {
    const formData = new FormData(form);
    let formEntryData = {};

    for (const pair of formData.entries()) {
        // name en value in het object
        formEntryData[pair[0]] = pair[1];
    }

    localStorage.setItem(form.id, JSON.stringify(formEntryData));
}, true);

function loadFormDataFromLocalStorage() {
    const storedFormData = localStorage.getItem(form.id);

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

document.addEventListener('DOMContentLoaded', function () {
    loadFormDataFromLocalStorage();
}, false);

// form.addEventListener('focusout', function (event) {
//     const progressBar = document.querySelector('#voortgang')
//     const fieldset = document.querySelector('fieldset')
//     if (event.target.validity.valid === true) {
//         console.log(event.target.validity.valid)
//         let validityCounter = 0
//         // validityCounter++
//         // console.log(validityCounter)
//         console.log(fieldset.children.input)
//         console.log(progressBar.setAttribute('value', validityCounter++))
//     }
// })