//Get modal element
var modal = document.getElementById('simpleModal');
//Get open modal button
var modalBtn = document.getElementById('modalBtn');
//Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];
//Get close button
var closeBtn2 = document.getElementsByClassName('closeBtn2')[0];


//Listen for open click
modalBtn.addEventListener('click', openModal);
//Listen for close click
closeBtn.addEventListener('click', closeModal);
//Listen for footer close-buttom click
closeBtn2.addEventListener('click', closeModal);
//Listin for outside click
window.addEventListener('click', outsideClick);



//Funktion to open modal
function openModal(){
    modal.style.display = 'block';
}

//Funktion to close modal
function closeModal(){
    modal.style.display = 'none';
}

//Funktion to close modal if outside click
function outsideClick(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }   
}

