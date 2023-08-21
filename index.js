let needinp = document.querySelectorAll('.Blue input')
let btn = document.querySelector('button')
let inputs = document.querySelectorAll('.forms input')
let formchart = document.forms

let pattern = {
    name: /^[a-zA-Zа-яА-Я]+$/,

    surname: /^[a-z ,.'-]+$/i,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[-+_!@#$%^&*.,?])).{6,12}/,
    phone: /^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/,

    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

    aboutYou: /^[a-z ,.'-]*$/i,
    age: /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/,
    html: /^[a-z ,.'-]+$/i,

    css: /^[a-z ,.'-]+$/i,
    js: /^[a-z ,.'-]+$/i,
    favouriteCar: /^[a-z ,.'-]+$/i,
}

const validateDate = (regex, input) => {
    if (regex.test(input.value)) {
        input.parentElement.classList.remove('inval');
        input.parentElement.classList.add('val');
    } else {
        input.parentElement.classList.remove('val');
        input.parentElement.classList.add('inval');
    }
};

inputs.forEach(input => {
    input.onkeyup = () => {
        validateDate(pattern[input.name], input);
    };
});

formchart.onsubmit = (event) => {
    event.preventDefault();
    let errorCount = 0;

    needinp.forEach(input => {
        if (input.value.length < 1 || input.parentElement.classList.contains('inval')) {
            input.parentElement.classList.add('inval');
            errorCount++;
        } else {
            input.parentElement.classList.remove('inval');
        }
    });

    if (errorCount > 0) {
        console.log('Error');
    } else {
        submitForm(formchart);
    }
};

const submitForm = (Elemental) => {
    const formData = new FormData(Elemental);
    const userData = Object.fromEntries(formData.entries());
    console.log(userData);
};

formchart.addEventListener('submit', (event) => {
    event.preventDefault()
    if (validateForm()) {
        sendDataToServer()
    }
});