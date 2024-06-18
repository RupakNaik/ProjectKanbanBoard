const addBtn = document.querySelector('.add-btn');
const modalContainer = document.querySelector('.modal-container');
let modalDisplayState = false;

addBtn.addEventListener('click',(e)=>{
    modalDisplayState = !modalDisplayState;
    if(!modalDisplayState){
        modalContainer.style.display ='none';
    }else{
        modalContainer.style.display ='flex';
    }
});