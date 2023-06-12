const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');


menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  
});

const toggleButton = document.getElementById('dark-mode-toggle');

// Verificar o estado atual do modo noturno no armazenamento local (se existir)
if (localStorage.getItem('darkMode') === 'true') {
  enableDarkMode();
}

// Alternar entre o modo claro e escuro ao clicar no botão de alternância
toggleButton.addEventListener('click', function() {
  if (document.body.classList.contains('dark-mode')) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});

function enableDarkMode() {
  document.body.classList.add('dark-mode');
  localStorage.setItem('darkMode', 'true');
}

function disableDarkMode() {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('darkMode', 'false');
}

function handleIntersection(entries) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > 0) {
        
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);

        
        var nextCarousel = entry.target.nextElementSibling;
        if (nextCarousel && nextCarousel.classList.contains('carrousel')) {
          observer.observe(nextCarousel);
        }
      }
    });
  }

  var carousels = document.querySelectorAll('.carrousel');
  var observer = new IntersectionObserver(handleIntersection);

  carousels.forEach(function (carousel) {
    observer.observe(carousel);
  });

 
  
  observer.observe(document.getElementById('ofertas'));




  
