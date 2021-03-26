console.log('Gekoppelt!')

function saveInputs(selectedElement) {
    localStorage.setItem(selectedElement.target.name, selectedElement.target.value)
    console.log('focus uit!')
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

const form = document.querySelector('#gradeform')

form.addEventListener('focusout', function (event) {
    console.log(event.target)
    localStorage.setItem(event.target.name, event.target.value)
}, true)

window.addEventListener('load', displaySavedInputs)