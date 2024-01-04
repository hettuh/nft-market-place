const header = document.querySelector('header');
const menuToggle = document.querySelector('.hamburger-menu');
const li = document.querySelectorAll('li');
const headerButton = document.querySelectorAll('header a');
       
menuToggle.addEventListener("click", ()=>{
    header.classList.toggle('header-active');
});
    
li.forEach(n => n.addEventListener("click", ()=>{
    header.classList.remove('header-active');
}));

headerButton.forEach(n => n.addEventListener("click", ()=>{
    header.classList.remove('header-active');
}));


// COUNTDOWN

const countdown = () =>{
    
    const days = document.querySelectorAll('.day');
    const hours = document.querySelectorAll('.hour');
    const minutes = document.querySelectorAll('.minute');
    const seconds = document.querySelectorAll('.second');

    // informatin needed for the countdown
    const countDate = new Date("December 31, 2023 00:00:00").getTime();
    const currentTime = new Date().getTime();
    const timeLeft = countDate - currentTime;

    // countdown logic
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // timeLeft logic
    const textDay = Math.floor(timeLeft / day);
    const textHour = Math.floor((timeLeft % day) / hour);
    const textMinute = Math.floor((timeLeft % hour) / minute);
    const textSeconds = Math.floor((timeLeft % minute) / second);

    // looping through all the elements on the page
    days.forEach((days)=>{
        days.innerHTML = textDay;
        if(textDay < 10){
            days.innerHTML = "0" + textDay;
        };
        if(timeLeft < 0){
            days.innerHTML = "00";
        };
    });

    hours.forEach((hours)=>{
        hours.innerHTML = textHour;
        if(textHour < 10){
            hours.innerHTML = "0" + textHour;
        };
        if(timeLeft < 0){
            hours.innerHTML = "00";
        };
    });

    minutes.forEach((minutes)=>{
        minutes.innerHTML = textMinute
        if(textMinute < 10){
            minutes.innerHTML = "0" + textMinute;
        };
        if(timeLeft < 0){
            minutes.innerHTML = "00";
        };
    });

    seconds.forEach((seconds)=>{
        seconds.innerHTML = textSeconds;
        if(textSeconds < 10){
            seconds.innerHTML = "0" + textSeconds;
        };
        if(timeLeft < 0){
            // seconds.innerHTML = "00";
        };
    });

};

setInterval(countdown, 1000)

// Image display

const display = document.querySelector('#fourth-display img');
const displayTwo = document.querySelector('#fourth-display-two img');
const displayThree = document.querySelector('#fourth-display-three img');
const images = document.querySelectorAll('#fourth-images img');
const imagesTwo = document.querySelectorAll('#fourth-images-two img');
const imagesThree = document.querySelectorAll('#fourth-images-three img');

images.forEach(n => n.addEventListener("click", () => {
    const imgSrc = n.getAttribute("src");
    display.setAttribute("src", imgSrc);
    console.log(n)
}));

imagesTwo.forEach(n => n.addEventListener("click", () => {
    const imgSrc = n.getAttribute("src");
    displayTwo.setAttribute("src", imgSrc);
    console.log(n)
}));

imagesThree.forEach(n => n.addEventListener("click", () => {
    const imgSrc = n.getAttribute("src");
    displayThree.setAttribute("src", imgSrc);
    console.log(n)
}));

// TABS

const tabOne = document.querySelector(".tab-one")
const tabTwo = document.querySelector(".tab-two")
const tabThree = document.querySelector(".tab-three")
const tabFour = document.querySelector(".tab-four")
const tabFive = document.querySelector(".tab-five")

const contentOne = document.querySelector(".content-one")
const contentTwo = document.querySelector(".content-two")
const contentThree = document.querySelector(".content-three")
const contentFour = document.querySelector(".content-four")
const contentFive = document.querySelector(".content-five")


tabOne.addEventListener("click", ()=>{
    contentOne.style.display = 'flex';
    contentTwo.style.display = 'none';
    contentThree.style.display = 'none';
    contentFour.style.display = 'none';
    contentFive.style.display = 'none';

    contentOne.style.transition = '0';
    contentTwo.style.transition = '0.2s';
    contentThree.style.transition = '0';
    contentFour.style.transition = '0';
    contentFive.style.transition = '0';

    tabTwo.style.backgroundColor = 'rgba(128, 128, 128, 0.295)';
    tabOne.style.backgroundColor = '#2639ED';
    tabThree.style.backgroundColor = 'rgba(128, 128, 128, 0.295)';
    tabFour.style.backgroundColor = 'rgba(128, 128, 128, 0.295)';
    tabFive.style.backgroundColor = 'rgba(128, 128, 128, 0.295)';
});

tabTwo.addEventListener("click", ()=>{
    contentTwo.style.display = 'flex';
    contentOne.style.display = 'none';
    contentThree.style.display = 'none';
    contentFour.style.display = 'none';
    contentFive.style.display = 'none';

    contentOne.style.transition = '0';
    contentTwo.style.transition = '0.2s';
    contentThree.style.transition = '0';
    contentFour.style.transition = '0';
    contentFive.style.transition = '0';

    tabOne.style.backgroundColor = 'rgba(128, 128, 128, 0.295)';
    tabTwo.style.backgroundColor = '#2639ED';
    tabThree.style.backgroundColor = 'rgba(128, 128, 128, 0.295)';
    tabFour.style.backgroundColor = 'rgba(128, 128, 128, 0.295)';
    tabFive.style.backgroundColor = 'rgba(128, 128, 128, 0.295)';
});

tabThree.addEventListener("click", ()=>{
    contentThree.style.display = 'flex';
    contentTwo.style.display = 'none';
    contentOne.style.display = 'none';
    contentFour.style.display = 'none';
    contentFive.style.display = 'none';

    contentOne.style.transition = '0';
    contentTwo.style.transition = '0';
    contentThree.style.transition = '0.2s';
    contentFour.style.transition = '0';
    contentFive.style.transition = '0';

    tabOne.style.backgroundColor = 'rgba(128, 128, 128, 0.295)';
    tabThree.style.backgroundColor = '#2639ED';
    tabTwo.style.backgroundColor = 'rgba(128, 128, 128, 0.295)';
    tabFour.style.backgroundColor = 'rgba(128, 128, 128, 0.295)';
    tabFive.style.backgroundColor = 'rgba(128, 128, 128, 0.295)';
});

tabFour.addEventListener("click", ()=>{
    contentFour.style.display = 'flex';
    contentTwo.style.display = 'none';
    contentThree.style.display = 'none';
    contentOne.style.display = 'none';
    contentFive.style.display = 'none';
    
    contentOne.style.transition = '0';
    contentTwo.style.transition = '0';
    contentThree.style.transition = '0';
    contentFour.style.transition = '0.2s';
    contentFive.style.transition = '0';

    tabOne.style.backgroundColor = 'rgba(128, 128, 128, 0.295)';
    tabFour.style.backgroundColor = '#2639ED';
    tabThree.style.backgroundColor = 'rgba(128, 128, 128, 0.295)';
    tabTwo.style.backgroundColor = 'rgba(128, 128, 128, 0.295)';
    tabFive.style.backgroundColor = 'rgba(128, 128, 128, 0.295)';
});

tabFive.addEventListener("click", ()=>{
    contentFive.style.display = 'flex';
    contentTwo.style.display = 'none';
    contentThree.style.display = 'none';
    contentFour.style.display = 'none';
    contentOne.style.display = 'none';
    
    contentOne.style.transition = '0';
    contentTwo.style.transition = '0';
    contentThree.style.transition = '0';
    contentFour.style.transition = '0';
    contentFive.style.transition = '0.2s';

    tabOne.style.backgroundColor = 'rgba(128, 128, 128, 0.295)';
    tabFive.style.backgroundColor = '#2639ED';
    tabThree.style.backgroundColor = 'rgba(128, 128, 128, 0.295)';
    tabFour.style.backgroundColor = 'rgba(128, 128, 128, 0.295)';
    tabTwo.style.backgroundColor = 'rgba(128, 128, 128, 0.295)';
});


// Modal

const openModal = document.querySelectorAll('.place-bid')
const closeModal = document.querySelector('.close-modal')
const addModal = document.querySelector('.modal-bg')
const modal = document.querySelector('.modal')

openModal.forEach(n => n.addEventListener("click", ()=>{
    addModal.classList.add('modal-bg-active');
    modal.classList.add('modal-active');
}));

closeModal.addEventListener("click", ()=>{
    addModal.classList.remove('modal-bg-active')
});
