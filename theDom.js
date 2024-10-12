const btn = document.querySelector('button');
btn.addEventListener('click', function () {
    alert('Hello, Window!')
});

//to find the first li on the page
document.querySelector('li');

//to find the first element with class of special
document.querySelector('.special');

//to find the first element with id of main
document.querySelector('#main');

//to find the first li with the class of special, nested inside of a ul, nested inside a section
document.querySelector('section ul li.special');

//to find all li's on the page
document.querySelectorAll('li');

//to find all elements with the class of special on the page
document.querySelectorAll('.special');