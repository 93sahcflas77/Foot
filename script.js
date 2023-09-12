const a = document.querySelector('#menu');
const b = document.querySelector('.link');


a.addEventListener('click',(e) => {
    e.preventDefault();

    a.classList.toggle('fa-times');
    b.classList.toggle('toggle')

});