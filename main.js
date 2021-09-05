const btn_prev = document.querySelector('.prev'),
    btn_next = document.querySelector('.next'),
    images = document.querySelectorAll('.gallery-block'),
    nameEx = document.querySelector('.name-example'),
    telEx = document.querySelector('.tel-example'),
    userName = document.querySelector('.name'),
    tel = document.querySelector('.tel'),
    countdown = document.querySelector('.countdown');

let i=0;

btn_prev.addEventListener('click', ()=>{
    images[i].style.display = 'none';
    i--;
    if (i < 0) {
        i = images.length - 1;
    }
    images[i].style.display = 'flex';
});

btn_next.addEventListener('click', ()=>{
    images[i].style.display = 'none';
    i++;
    if (i >= images.length) {
        i = 0;
    }
    images[i].style.display = 'flex';
});

userName.addEventListener('focus', ()=>{
    nameEx.style.display = 'block';
    console.log('ok');
});

userName.addEventListener('blur', ()=>{
    nameEx.style.display = 'none';
    console.log('ne ok');
});

tel.addEventListener('focus', ()=>{
    telEx.style.display = 'block';
    console.log('ok');
});

tel.addEventListener('blur', ()=>{
    telEx.style.display = 'none';
    console.log('ne ok');
});


function timer(){
    let minutes = 30;
    let seconds = 0;
    setInterval(()=>{
        if (seconds < 10) {
            countdown.innerHTML = minutes + ':0' +seconds;
        } else {
            countdown.innerHTML = minutes + ':' +seconds;
        }
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }
        if (minutes < 0) {
            minutes=30;
        }
    }, 1000);
}

timer();