
const buttonNacio = document.querySelector('#nacioid')
const parrafonacio = document.querySelector('#section-content-header1-id')
const buttonOfrecemos = document.querySelector('#ofrecemosid');
const parrafOfrecemos = document.querySelector('#section-content-header2-id');
const buttoncreo = document.querySelector('#creoid');
const parrafocreo = document.querySelector('#section-content-header3-id');
const buttonactualidad = document.querySelector('#actualidad-id');
const parrafoactualidad = document.querySelector('#section-content-header4-id');

buttonNacio.addEventListener('click', () =>{
    toggleActive(parrafonacio);
})

buttonOfrecemos.addEventListener('click', () => {
  toggleActive(parrafOfrecemos);
});

buttoncreo.addEventListener('click', () => {
  toggleActive(parrafocreo);
});

buttonactualidad.addEventListener('click', () => {
  toggleActive(parrafoactualidad);
});

function toggleActive(paragraph) {
    console.log(paragraph)

  const isActive = paragraph.classList.contains('active');

  // Desactivar todos los párrafos
  const allParagraphs = document.querySelectorAll('section');
  console.log(allParagraphs);
  allParagraphs.forEach((p) => p.classList.remove('active'));


  // Activar el párrafo seleccionado, si no estaba activo previamente
  if (!isActive) {
    paragraph.classList.add('active');
  }
}