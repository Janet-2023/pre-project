const toggleButtons = document.querySelectorAll('.toggle-button');

  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.parentNode.classList.toggle('active');
    });
  });

