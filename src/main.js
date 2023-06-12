document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll ("[data-tab-button]");
    const questions = document.querySelectorAll('[data-faq-question]')

    const heroSection = document.querySelector('.hero');
    const heroHeight = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const nowPosition = window.scrollY;
        if(nowPosition < heroHeight){
            hideElementsFromHeader();
        }
        else {
            showElementsFromHeader();
        }

    })

    // Seção atraçoes programaçao abas
    for (let i = 0; i<buttons.length; i++){
        buttons[i].addEventListener('click', function (button){
            const targetTab = button.target.dataset.tabButton;
            hideAllTabs();

            console.log(button);

            const tab = document.querySelector(`[data-tab-id = ${targetTab}]`)
            tab.classList.add('shows__list--is-active');

            removeActiveButton();

            button.target.classList.add('shows__tabs__button--is-active')

        })
    }

    // Seção accordion FAQ
    for (let i = 0; i <questions.length; i++){
        questions[i].addEventListener('click', toggleAnswer);
    }




})


function removeActiveButton(){
    const buttons =document.querySelectorAll('[data-tab-button]');

    for (i=0; i< buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}


function hideAllTabs () {
    const tabsContainer = document.querySelectorAll ("[data-tab-id]");

    for (let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}

function toggleAnswer(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function hideElementsFromHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function showElementsFromHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}