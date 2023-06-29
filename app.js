
const container = document.querySelector('.footer-politicas')
console.log(container);

const button = document.querySelectorAll('span')

const contenido = document.querySelector('.fpoliticas')


//const dropdownList = document.createElement('span');
//const dropdownList2 = document.createElement('span');

// dropdown.appendChild(dropdownList);
// dropdownList.innerText = 'MAPA DEL ESTILO';

// dropdown.appendChild(dropdownList2);
// dropdownList2.innerText = 'TÉRMINOS Y CONDICIONES';


container.addEventListener('click', (e) =>{
    e.target.parentElement.classList.toggle('active')
})   



