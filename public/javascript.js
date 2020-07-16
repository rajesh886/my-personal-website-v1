// provides fading effect in images
var projects = document.querySelectorAll("#project_1");

projects.forEach(function (item) {
    item.addEventListener("mouseover", function () {
        item.classList.toggle('fade');
    }, false);

    item.addEventListener("mouseout", function () {
        item.classList.toggle('fade');
    }, false);
});

// //form validator and sending a message
// var username = document.getElementById('name');
// var email = document.getElementById('email');
// var subject = document.getElementById('subject');
// var message = document.getElementById('message');

// // Show input error message
// function showError(input, message) {
//     var formControl = input.parentElement;
//     formControl.className = 'form-control error';
//     var small = formControl.querySelector('small');
//     small.innerText = message;
// }

// // Show success outline
// function showSuccess(input) {
//     var formControl = input.parentElement;
//     formControl.className = 'form-control success';
// }

// function checkEmail(input) {
//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if (re.test(input.value.trim())) {
//         showSuccess(input);
//         return true;
//     } else {
//         showError(input, 'Email is not valid');
//         return false;
//     }
// }

// // Check required fields
// function checkRequired(inputArr) {
//     inputArr.forEach(function (input) {
//         if (input.value.trim() === '') {
//             showError(input, `${getFieldName(input)} is required`);
//             return false;
//         } else {
//             showSuccess(input);
//             return true;
//         }
//     });
// }

// // Check input length
// function checkLength(input, min, max) {
//     if (input.value.length < min) {
//         showError(
//             input,
//             `${getFieldName(input)} must be at least ${min} characters`
//         );
//         return false;
//     } else if (input.value.length > max) {
//         showError(
//             input,
//             `${getFieldName(input)} must be less than ${max} characters`
//         );
//         return false;
//     } else {
//         showSuccess(input);
//         return true;
//     }
// }

// // Get fieldname
// function getFieldName(input) {
//     return input.id.charAt(0).toUpperCase() + input.id.slice(1);
// }

// // Event listeners
// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     console.log(e);
//     var check1 = checkRequired([username, email, subject, message]);
//     var check2 = checkLength(username, 4, 20);
//     var check3 = checkLength(email, 6, 25);
//     var check4 = checkEmail(email);

//     // if (check1 | check2 | check3 | check4) {
//     //     return true;
//     // }
// });