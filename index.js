//laver en funktion
 
const navSlide = () => {
    //hentes burger + slider fra vores html dokument
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    //her hentes alle navigations links fra html dokumentet så de kan fremvises i burgermenuen
    const navLinks = document.querySelectorAll('.nav-links li');

    //Idet der klikkes på ikonet skal menuen få en ny class kaldt nav-active
    burger.addEventListener('click', () => {
        //toggle Nav
        nav.classList.toggle('nav-active');

        //animate links
        //Her køres en funktion som hiver fat i vores forskellige links. Ved også at hive fat i index kan man let animere forsinkelsen mellem hver fremvisning
        navLinks.forEach((link, index) => {
            //animationen skal vises hver gang menueen åbnes og ikke kun første gang.
            //Hvis vores link allerede har en animation skal der ikke ske noget.
            if (link.style.animation) {
                link.style.animation = '';
            //Men hvis linket i forvejen ikke har en funktion, kører vores animation     
            } else {
                link.style.animation =`navLinkFade 0.5s ease forwards  ${index / 7 + 0.6}s`;
            }
        
        });

        //burger ikons animation
        burger.classList.toggle('toggle');
    });
    
}

//her fremkaldes den oprettede funktion
navSlide();