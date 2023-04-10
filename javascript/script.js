let button = document.querySelector('.menu__burger');

button.addEventListener('click', function(){
    button.classList.toggle('open__burger');
    document.querySelector('.navlist').classList.toggle('menu-left');

    document.body.classList.toggle('menu-overflow');
});

// Slider comments

let block = document.querySelector('.block__review-block');
let previous = document.querySelector('.prev');
let next = document.querySelector('.next');

let pos = 0;

previous.addEventListener('click', function(){
    pos -= 100;
    if(pos < 0){
        pos = 300;
    }
    block.style.left = -pos + '%';
});
next.addEventListener('click', function(){
    pos += 100;
    if(pos > 300){
        pos = 0;
    }
    block.style.left = -pos + '%';
});


// ===========For fun
document.querySelector('.register__block').addEventListener('click', function(){
    let a = prompt('Enter your name');
    (a == 'Fuad') ? alert('You are an admin!') : alert('You are a guest!');
});