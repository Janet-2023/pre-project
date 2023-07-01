

 const collapsible  = document.querySelectorAll("toggle")

 collapsible.forEach(button => {
    button.addEventListener('click', () => {
        button.parentNode.classList.toggle('active')
    })
 });


