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

function displaySavedInputs() {
    const inputs = ['docent', 'begindatum', 'einddatum', 'lesstof', 'uitleg', 'eigeninzicht']
    const radioBtnOne = document.querySelector('#docentOne')
    const radioBtnTwo = document.querySelector('#docentTwo')
    const beginDatum = document.querySelector('#begindatum')
    const endDate = document.querySelector('#einddatum')
    const rangeOne = document.querySelector('#gradeInputId1')
    const rangeTwo = document.querySelector('#gradeInputId2')
    const rangeThree = document.querySelector('#gradeInputId3')
    const DOMelements = [radioBtnOne, radioBtnTwo, beginDatum, endDate, rangeOne, rangeTwo, rangeThree]

    inputs.forEach(element => {
        if (localStorage.getItem(element) !== null) {
            DOMelements.forEach(domElement => {
                console.log(domElement)
                if (domElement.type == 'radio' || domElement.type == 'checkbox') {
                    domElement.checked = value;
                } else {
                    domElement.value = value;
                }
            });
            // let field = document.getElementById(`${element}`)
            // console.log(element)
            // console.log(field)
            // if (field.type == 'radio' || field.type == 'checkbox') {
            //     field.checked = value;
            // } else {
            //     field.value = value;
            // }
        }
    });
}

const form = document.querySelector('form')

form.addEventListener('focusout', function (event) {
    // console.log(event.target)
    if (localStorageChecker()) {
        let data = localStorage.getItem('item')
        data = data ? JSON.parse(data) : {}

        data[event.target.name] = event.target.value;
        localStorage.setItem(form.id, JSON.stringify(data))

        // localStorage.setItem(event.target.name, event.target.value)
        // localStorage.setItem(form.id, JSON.stringify(event.target.value));
    }
}, true)

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

// Retrieve the object from storage
// var retrievedObject = localStorage.getItem('testObject');
// console.log('retrievedObject: ', JSON.parse(retrievedObject));

// document.addEventListener('DOMContentLoaded', function() {
//     loadFormDataFromLocalStorage();
// }, false);