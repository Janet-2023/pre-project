

const buttonOfrecemos = document.querySelector('#ofrecemosid')

const parrafOfrecemos = document.querySelector('#section-content-header2-id')

buttonOfrecemos.addEventListener('click', () =>{
    parrafOfrecemos.className = 'active'
})



const buttoncreo =document.querySelector('#creoid');
console.log(buttoncreo);

const parrafocreo = document.querySelector('#section-content-header3-id')
console.log(parrafocreo);

buttoncreo.addEventListener('click', ()=>{
    parrafocreo.className = 'active'
})


const buttonactualidad =document.querySelector('#actualidad-id')
console.log(buttonactualidad)

const parrafoactualidad =document.querySelector('#section-content-header4-id')
console.log(parrafoactualidad)

buttonactualidad.addEventListener('click', () => {
    parrafoactualidad.className = 'active'
}
)


